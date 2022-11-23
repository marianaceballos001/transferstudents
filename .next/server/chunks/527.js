"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);




chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);
const options = {
    scales: {
        y: {
            title: {
                display: true,
                text: "Age"
            }
        },
        x: {
            title: {
                display: true,
                text: "Students"
            }
        }
    }
};
const data = {
    datasets: [
        {
            label: "2014",
            data: [
                {
                    x: 21,
                    y: 17,
                    r: 5.09
                },
                {
                    x: 411,
                    y: 18,
                    r: 5.09
                },
                {
                    x: 755,
                    y: 19,
                    r: 5.09
                },
                {
                    x: 858,
                    y: 20,
                    r: 5.09
                },
                {
                    x: 1298,
                    y: 21,
                    r: 5.09
                },
                {
                    x: 1351,
                    y: 22,
                    r: 5.09
                },
                {
                    x: 1292,
                    y: 23,
                    r: 5.09
                },
                {
                    x: 1160,
                    y: 24,
                    r: 5.09
                },
                {
                    x: 855,
                    y: 25,
                    r: 5.09
                },
                {
                    x: 653,
                    y: 26,
                    r: 5.09
                },
                {
                    x: 528,
                    y: 27,
                    r: 5.09
                },
                {
                    x: 392,
                    y: 28,
                    r: 5.09
                },
                {
                    x: 306,
                    y: 29,
                    r: 5.09
                },
                {
                    x: 249,
                    y: 30,
                    r: 5.09
                },
                {
                    x: 2081,
                    y: 31,
                    r: 5.09
                }, 
            ],
            backgroundColor: "#6155A6"
        },
        {
            label: "2013",
            data: [
                {
                    x: 16,
                    y: 17,
                    r: 5.24
                },
                {
                    x: 546,
                    y: 18,
                    r: 5.24
                },
                {
                    x: 723,
                    y: 19,
                    r: 5.24
                },
                {
                    x: 949,
                    y: 20,
                    r: 5.24
                },
                {
                    x: 1195,
                    y: 21,
                    r: 5.24
                },
                {
                    x: 1441,
                    y: 22,
                    r: 5.24
                },
                {
                    x: 1389,
                    y: 23,
                    r: 5.24
                },
                {
                    x: 1062,
                    y: 24,
                    r: 5.24
                },
                {
                    x: 844,
                    y: 25,
                    r: 5.24
                },
                {
                    x: 629,
                    y: 26,
                    r: 5.24
                },
                {
                    x: 513,
                    y: 27,
                    r: 5.24
                },
                {
                    x: 418,
                    y: 28,
                    r: 5.24
                },
                {
                    x: 308,
                    y: 29,
                    r: 5.24
                },
                {
                    x: 281,
                    y: 30,
                    r: 5.24
                },
                {
                    x: 2149,
                    y: 31,
                    r: 5.24
                }, 
            ],
            backgroundColor: "#E36387"
        },
        {
            label: "2012",
            data: [
                {
                    x: 21,
                    y: 17,
                    r: 5.29
                },
                {
                    x: 468,
                    y: 18,
                    r: 5.29
                },
                {
                    x: 761,
                    y: 19,
                    r: 5.29
                },
                {
                    x: 751,
                    y: 20,
                    r: 5.29
                },
                {
                    x: 1178,
                    y: 21,
                    r: 5.29
                },
                {
                    x: 1448,
                    y: 22,
                    r: 5.29
                },
                {
                    x: 1316,
                    y: 23,
                    r: 5.29
                },
                {
                    x: 1055,
                    y: 24,
                    r: 5.29
                },
                {
                    x: 828,
                    y: 25,
                    r: 5.29
                },
                {
                    x: 661,
                    y: 26,
                    r: 5.29
                },
                {
                    x: 512,
                    y: 27,
                    r: 5.29
                },
                {
                    x: 369,
                    y: 28,
                    r: 5.29
                },
                {
                    x: 350,
                    y: 29,
                    r: 5.29
                },
                {
                    x: 283,
                    y: 30,
                    r: 5.29
                },
                {
                    x: 2150,
                    y: 31,
                    r: 5.29
                }, 
            ],
            backgroundColor: "#A6DCEF"
        }, 
    ]
};
function App() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bubble, {
            options: options,
            data: data
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

};
;