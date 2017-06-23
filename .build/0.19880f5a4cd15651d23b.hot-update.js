exports.id = 0;
exports.modules = {

/***/ "./server/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_App__ = __webpack_require__("./common/App.js");





var app = __WEBPACK_IMPORTED_MODULE_0_express___default.a();
var static_dir = './static/';

app.get('/', function (req, res) {
    res.send('Homepage!');
});

app.get('*', function (req, res) {
    var application = __WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"](__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__common_App__["a" /* default */], null));

    var html = '<!doctype html>\n    <html class="no-js" lang="">\n        <head>\n            <meta charset="utf-8">\n            <meta http-equiv="x-ua-compatible" content="ie=edge">\n            <title>HMR all the things!</title>\n            <meta name="description" content="">\n            <meta name="viewport" \n            content="width=device-width,  initial-scale=1">\n        </head>\n        <body>\n            <div id="app">' + application + '</div>\n            <script src="http://localhost:3001/client.js"></script>\n        </body>\n    </html>';

    res.sendfile('./server/static/index.html');
});

var _default = app;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(app, 'app', '/Users/hardware/Desktop/Sundeep/TutorFast/TutorFast-Frontend/server/server.js');

    __REACT_HOT_LOADER__.register(static_dir, 'static_dir', '/Users/hardware/Desktop/Sundeep/TutorFast/TutorFast-Frontend/server/server.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/hardware/Desktop/Sundeep/TutorFast/TutorFast-Frontend/server/server.js');
}();

;

/***/ })

};