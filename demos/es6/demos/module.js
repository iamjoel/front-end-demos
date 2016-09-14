import {packageName, greetFn} from './a'

// 翻译成 ES5 时会用 require。还是要用 webpack 之类的加载器辅助的样子
greetFn()
greetFn(packageName)
