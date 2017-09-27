var express = require('express');
var route = express.Router();
var appData = require('../../goods.json') /* 引入根目录下goods.json数据文件 */
var goods = appData.goods /* goods.json文件文件下的.goods数据赋值给变量goods */

route.get('/goods', function (req, res) { /* 定义接口并返回数据 */
    res.json({ data: goods })
  });

module.exports = route;