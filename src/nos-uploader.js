/*
 * @Class: NosUpLoader
 * @version 0.1
 * @author heshiyu
 */
import NOS_SDK from './core/nos-js-sdk'

class NosUpLoader {
    /**
     * NosUpLoader类，代表一个NOS上传对象.
     * @constructor
     * @param {object} file - 文件类型.
     * @param {object} param - NOS所需参数，包括：bucketName, objectName, token
     */
    constructor(file, param) {
        this.uploader = new NOS_SDK()
        this.file = file
        this.param = param
    }

    /**
     * 获取NOS上传对象
     * @returns {object} 返回当前的上传对象
     */
    getUploader() {
        return this.uploader
    }

    /**
     * 获取NOS返回的URL
     * @returns {string} 返回文件url
     */
    fetchFileUrl() {
        return new Promise((resolve, reject) =>
            this.uploader.addFile(this.file, () =>
                this.uploader.upload(this.param, () => {
                    try {
                        let url = `https://${this.param.bucketName}.nos-hz.163yun.com/${this.param.objectName}`
                        resolve(url)
                    } catch {
                        reject('error url')
                    }
                })
            )
        )
    }
}

export default NosUpLoader
