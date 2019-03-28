import NOS_SDK from './js/nos-js-sdk'

class NosUpLoader {
    constructor(file, param, options = {}) {
        const defaultOptions = {
            onError: this.onError,
            onProgress: this.onProgress
        }
        const opt = Object.assign({}, defaultOptions, options)

        this.uploader = new NOS_SDK(opt)
        this.file = file
        this.param = param
        this.fileTypes = []
        this.suffix = ''
    }

    /**
     * @name        获取uploader对象
     * @returns     Object     | uploader实例
     */
    onError(errObj) {
        console.log('上传失败了')
        this.errMsg = errObj.errMsg
    }

    onProgress(file) {
        // 0未上传；1上传中；2成功；3失败
        console.log('上传中……', file)
    }

    /**
     * @name        获取uploader对象
     * @returns     Object     | uploader实例
     */
    getUploader() {
        return this.uploader
    }

    /**
     * @name        设置允许上传的文件类型
     * @augments    fileTypes     | 允许上传的文件类型 | String、Array
     */
    setFileTypes(fileTypes) {
        fileTypes.constructor !== Array && (fileTypes = [fileTypes])
        console.log(this.file, fileTypes)
        let file = this.file
        
        this.suffix = file.name.substr(file.name.lastIndexOf('.') + 1).toLowerCase()
        this.fileTypes = fileTypes
    }

    /**
     * @name        检查上传的文件类型
     * @returns     Promise     | Promise
     */
    checkFileTypes() {
        return new Promise((resolve, reject) => {
            if (this.fileTypes.length && !~this.fileTypes.indexOf(this.suffix)) {
                reject('[error 1]: 暂不支持该类型文件')
            }
            resolve()
        })
    }

    /**
     * @name        添加文件到缓冲区
     * @returns     Promise     | Promise
     */
    addFile() {
        return new Promise((resolve, reject) => {
            this.uploader.addFile(this.file, () => resolve())
        })
    }

    /**
     * @name        上传文件到NOS
     * @returns     Promise     | Promise
     */
    uploadFile() {
        return new Promise((resolve, reject) => {
            let result = this.uploader.upload(this.param, (curFile) => {
                console.log(curFile)
                let url = `https://${this.param.bucketName}.nos-hz.163yun.com/${this.param.objectName}`
                resolve(url)
            })
        })
    }

    /**
     * @name        获取NOS返回的URL
     * @returns     Promise     | Promise
     */
    fetchFileUrl() {
        let pFileTypesCheck = this.checkFileTypes(),
            pAddFile = this.addFile(),
            pUploadFile = this.uploadFile(),
            pFetchUrl = Promise.all([pFileTypesCheck, pAddFile, pUploadFile])

        return pFetchUrl
    }
}

export default NosUpLoader
