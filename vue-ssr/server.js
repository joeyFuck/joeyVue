const express = require("express");
const app = express();

const App = require('./src/entry-server.js');

let path = require("path");
const vueServerRender = require("vue-server-renderer").createRenderer({
    template:require("fs").readFileSync(path.join(__dirname,"./index.html"),"utf-8")
});

app.get('*', async(request, response) => {

    response.status(200);
    response.setHeader("Content-type", "text/html;charset-utf-8");

    let {url} = request;
    let vm;
    vm = await App({url})
    //所谓服务端渲染，最关键的就是把vue实例转成html字符串 =》response
    //vue-server-renderer对这一步进行了封装vueServerRender.renderToString(vm)
    vueServerRender.renderToString(vm).then((html) => {
        response.end(html);
    }).catch(err => console.log(err))
})

app.listen(3001, () => {
    console.log('服务已开启')
})