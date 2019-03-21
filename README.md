# nos-js-uploader
## Introduction
By the instance of NosLoader Class, you can fetch the file-url from NOS-System easily with the file-object && nos-parameter.

## Basic usage
```js
// 1、import the Class from nos-uploader
import NosUpLoader from '@/utils/nos-uploader'
```

```js
// 2、new an instance of NosUpLoader
this.uploader = new NosUpLoader(file, param)

// 3、fetch the file-url by its fulfilled-return of Promise
this.uploader.fetchFileUrl().then(res => console.log(res))
```

## Document
[NOS-JS-SDK](https://www.163yun.com/help/documents/60892166344593408)