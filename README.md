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
this.uploader = new NosUpLoader(file, param)
```

```js
// 3、Fetch the file-url by its fulfilled-return of Promise
this.uploader.fetchFileUrl().then(res => console.log(res))
```

## Thanks
[NOS-JS-SDK](https://www.163yun.com/help/documents/60892166344593408)

## License
The code is distributed under the [MIT](https://opensource.org/licenses/MIT) license
