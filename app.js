// {} 解构 lodash既是命名空间 _uniq([2,1,2])==>[2,1]
// lodash针对数组、集合等提供的工具函数 类似于es6中map，filter...
// http://lodashjs.com/docs/
import { uniq } from 'lodash'
// 引入部分配置 对象解构不用按顺序
// let age = 10
import {apiKey as Key, url, sayHi, dog, old} from './src/config'
console.log(old)
import User, { createURL, gravatar } from './src/user'

const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com')
const profile = createURL(wes.name)
console.log(profile)
const image = gravatar(wes.email)
console.log(image)
// sayHi('wesbos')