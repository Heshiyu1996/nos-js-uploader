<template>
    <div id="app">
        I am app.vue
        <hr />
        <input ref="nodeFile" type="file" name="file" accept="image/jpg, image/png, image/gif, image/bmp" @change="checkFile($event)" />
    </div>
</template>

<script>
import NosUpLoader from '@/utils/nos-uploader'
import { getNosToken } from '@/server/api'

export default {
    name: 'app',
    data() {
        return {
            nosTokenParam: {
                bucket: 'bot-resource-public',
                postfix: '' // 待用户选择文件后确定
                // isPrivate: true // true表示私有桶（用于视频）、false表示公有桶（用于音频）
            },

            tempFile: '',
            uploader: {}
        }
    },
    methods: {
        checkFile(ev) {
            let file = ev.target.files[0]
            if (!file) return
            this.tempFile = file
            ev.target.value = null
            this.nosTokenParam.postfix = file.name.substr(file.name.lastIndexOf('.')).toLowerCase()
            this._getNosToken()
        },
        _getNosToken() {
            getNosToken(this.nosTokenParam).then(data => {
                let { bucket: bucketName, key: objectName, token } = data
                let param = { bucketName, objectName, token }

                this._fetchFileUrl(this.tempFile, param)
            })
        },

        // 实例化一个nosUpLoader
        _fetchFileUrl(file, param) {
            this.uploader = new NosUpLoader(file, param)
            this.uploader.getFileUrl().then(res => console.log(res))
        }
    }
}
</script>

<style></style>
