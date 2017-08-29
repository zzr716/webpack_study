// 输出User类
// 跟User相关的方法
// www.zhuhu.com/u/shunwuyu
// 得到小家的地址，手里有用户名 不用实例化
// 可配置的
// 构造函数/类
import { url } from './config'
import md5 from 'md5'
export default function User(name, email, website) {
    return {
        name,
        email,
        website
    }
}
export function createURL (name) {
    return `${url}/users/${name}`
}
export function gravatar (email) {
    // 隐私 加密 头像也是唯一的
    const hash = md5(email.toLowerCase())
    const photoURL = `https://www.gravatar.com/avatar/${hash}`
    return photoURL
}