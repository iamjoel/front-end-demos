webpackJsonp([10],{0:function(t,l,e){"use strict";document.querySelector("#main").innerHTML=e(41)},28:function(t,l,e){t.exports=e.p+"1ed8e450a278d9d2e84bfd65bc169523.jpg"},41:function(t,l,e){t.exports='<style>body{width:960px;margin:20px auto;color:#333;font-size:14px}.demo{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #ddd}table{border-collapse:collapse}td,th{height:30px;padding:0 10px;border:1px solid #ddd;text-align:center}.form-item{display:block;margin-bottom:10px}.a-div{color:green}.a-span{color:red}</style> <div name=top></div> <div class=demo> <h2>普通标签</h2> <pre>\n    <code>\n      &lt;a href="https://www.google.com" class="link" id="google-link"&gt;标签内容&lt;/a&gt;\n    </code>\n  </pre> </div> <div class=demo> <h2>超链接</h2> <a href=http://xiami.com title=虾米网>当前页面打开链接</a> <a href=http://xiami.com title=虾米网 target=_blank>新页面打开链接</a> <a href=#bottom title=页面底部>链接页面内部</a> </div> <div class=demo> <h2>图片</h2> <img src='+e(28)+' alt=路边野餐海报> </div> <div class=demo> <h2>标题</h2> <h1>一号标题</h1> <h2>二号标题</h2> <h3>三号标题</h3> <h4>四号标题</h4> <h5>五号标题</h5> <h6>六号标题</h6> </div> <div class=demo> <h2>段落</h2> <p>在贵州黔东南神秘潮湿的亚热带乡土，大雾弥漫的凯里县城诊所里，两个医生心事重重活得像幽灵。陈升为了母亲的遗愿，踏上火车寻找弟弟抛弃的孩子；而另一位孤独的老女人托他带一张照片、一件衬衫、一盒磁带给病重的旧情人。去镇远县城的路上，陈升（陈永忠 饰）来到一个叫荡麦的地方，那里的时间不是线性的，人们的生活相互补充和消解。他似乎经历了过去、现在和未来，重新思索了自己的生活。 </p> <p>电影的故事有几个关键词：一个贵州男人的火车旅行，一个“时间非线性”的小镇，一些神秘的充满荒诞的当代生活场景。诗意般的画面表达，不受约束的长达 40 分钟的长镜头都是它的特点。但与之相符的，“文艺”或者相对晦涩也会是电影的标签。也就是说会是一部会得出很多个体化观影感受的电影。</p> </div> <div class=demo> <h2>有序列表</h2> 待办事宜 <ol> <li>大吃一顿</li> <li>好好睡一觉</li> <li>看剧 <ol> <li>冰与火之歌</li> <li>硅谷</li> </ol> </li> </ol> </div> <div class=demo> <h2>无序列表</h2> 喜欢的水果 <ul> <li>荔枝</li> <li>榴莲</li> <li>草莓 <ul> <li>荔枝</li> <li>榴莲</li> <li>草莓 <ul> <li>荔枝</li> <li>榴莲</li> <li>草莓</li> </ul> </li> </ul> </li> </ul> </div> <div class=demo> <h2>表格</h2> <table> <caption>三年2班课程表</caption> <tbody> <tr> <th></th> <th>周一</th> <th>周二</th> <th>周三</th> <th>周四</th> <th>周五</th> </tr> <tr> <th rowspan=4>上午</th> <td colspan=2>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> </tr> <tr> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> </tr> <tr> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> </tr> <tr> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> </tr> <tr> <th rowspan=2>下午</th> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> </tr> <tr> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> <td>数学</td> </tr> </tbody> </table> </div> <div class=demo> <h2>表单</h2> <form action=submit-url method=post> <label class=form-item>姓名 <input type=text placeholder=姓名 value=aaa> </label> <label class=form-item>只读姓名 <input type=text placeholder=姓名 value=aaa readonly=readonly> </label> <label class=form-item>disabled姓名 <input type=text placeholder=姓名 value=aaa disabled=disabled> </label> <label class=form-item>手机号 <input type=nubmer maxlength=11> </label> <label class=form-item>户籍所在地 <select name="" id=""> <option value=jiangsu>江苏</option> <option value=shanghai>上海</option> <option value=jx>江西</option> <option value=hn selected=selected>河南</option> <option value=hb>湖北</option> <option value=hun>湖南</option> <option value=beijing>北京</option> </select> </label> <div class=form-item>性别 <label> 男 <input type=radio name=sex value=male checked=checked> </label> <label> 女 <input type=radio name=sex value=female> </label> </div> <div class=form-item>爱好 <label> 吃 <input type=checkbox name=habbit value=eat> </label> <label> 玩 <input type=checkbox name=habbit value=play checked=checked> </label> <label> 其他 <input type=checkbox name=habbit value=other checked=checked> </label> </div> <label class=form-item> 自我介绍 <textarea name="" id="" cols=30 rows=10></textarea> </label> <button type=submit>提交</button> <button type=reset>重置</button> </form> </div> <div class=demo> <h2>强调</h2> 重点是： <strong>巴拉巴拉</strong> </div> <div class=demo> <h2>div 和 span</h2> <div class=a-div>一些<span class=a-span>内容</span></div> </div> <div class=demo> <h2><a href=http://www.devdocs.me/html-standard/ >更多标签</a></h2> <ul> <li>aside</li> <li>small</li> <li>i</li> <li>dl,dt,dd</li> <li>blockquote</li> <li>...</li> </ul> </div> <p>注意点：p元素中不能嵌套 div;a元素中不能嵌套a</p> <a href=#top title=返回头部 name=bottom>返回头部</a>'}});