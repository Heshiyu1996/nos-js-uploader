# nos-js-uploader
## 简介
NOS向开发者提供了[nos-js-sdk](https://www.163yun.com/help/documents/60892166344593408)的开源代码。基于此SDK，开发者可以直接将文件上传至NOS（需先获取服务端Token）。

该项目则是站在业务层的角度，对该SDK进行较为通用性的封装。

## 为什么会有这个项目？
 - 通用性较低
 - 代码重复度高
 - 不支持Promise，回调层级较多
 - 额外引入了jquery

## TODO
- [x] 支持Promise
- [x] 获取Url更加方便
- [ ] 无需额外引入jquery
- [ ] 错误提示更加人性化
- [ ] 上传前的文件检查
- [ ] 更通用的uploader配置

## 使用方式
```js
// 1、Import the Constructor from nos-uploader
import NosUpLoader from 'nos-uploader'
```

```js
// 2、New an instance of NosUpLoader
this.uploader = new NosUpLoader(file, nosParam)
```

```js
// 3、Fetch the file-url by its fulfilled-return of Promise
this.uploader.fetchFileUrl().then(res => console.log(res))
```

## 参数说明
### file && nosParam
```js
new NosUpLoader(file, nosParam)
```
 - file
    - 类型：`Object`
    - 描述：用户在input框（**type='file'**）中选中的文件

 - nosParam
    - 类型：`Object`
    - 描述：实例化nos-uploader所需参数
    - 对象内属性：
        - bucketName
            - 类型：`String`
            - 桶名：对象存储的容器名（从后端获取）
        - objectName
            - 类型：`String`
            - 文件名：用户上传的文件对象名称（从后端获取）
        - token
            - 类型：`String`
            - 上传凭证：用户上传到NOS的凭证（从后端获取）

## 更新历史
 - v0.1.0 —— 2019-03-21

 - v0.1.1 —— 2019-03-22

## Thanks
[NOS-JS-SDK](https://www.163yun.com/help/documents/60892166344593408)

## License
The code is distributed under the [MIT](https://opensource.org/licenses/MIT) license
