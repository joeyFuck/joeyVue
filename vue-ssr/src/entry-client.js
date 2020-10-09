/*
 * @Descripttion: 
 * @version: 
 * @Author: hangjie.zhu
 * @Date: 2020-10-09 14:47:59
 * @LastEditors: hangjie.zhu
 * @LastEditTime: 2020-10-09 14:48:14
 */
const createApp = require("./app.js");
let {app,router} = createApp({});

router.onReady(() => {
    app.$mount("#app")
});