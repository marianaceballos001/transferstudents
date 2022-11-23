"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 794:
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
                    x: 1,
                    y: 17,
                    r: 6.944
                },
                {
                    x: 10,
                    y: 18,
                    r: 6.944
                },
                {
                    x: 128,
                    y: 19,
                    r: 6.944
                },
                {
                    x: 683,
                    y: 20,
                    r: 6.944
                },
                {
                    x: 1750,
                    y: 21,
                    r: 6.944
                },
                {
                    x: 2247,
                    y: 22,
                    r: 6.944
                },
                {
                    x: 2374,
                    y: 23,
                    r: 6.944
                },
                {
                    x: 2047,
                    y: 24,
                    r: 6.944
                },
                {
                    x: 1487,
                    y: 25,
                    r: 6.944
                },
                {
                    x: 1126,
                    y: 26,
                    r: 6.944
                },
                {
                    x: 829,
                    y: 27,
                    r: 6.944
                },
                {
                    x: 669,
                    y: 28,
                    r: 6.944
                },
                {
                    x: 535,
                    y: 29,
                    r: 6.944
                },
                {
                    x: 408,
                    y: 30,
                    r: 6.944
                },
                {
                    x: 2355,
                    y: 31,
                    r: 6.944
                }, 
            ],
            backgroundColor: "#6155A6"
        },
        {
            label: "2013",
            data: [
                {
                    x: 0,
                    y: 17,
                    r: 6.72
                },
                {
                    x: 12,
                    y: 18,
                    r: 6.72
                },
                {
                    x: 90,
                    y: 19,
                    r: 6.72
                },
                {
                    x: 663,
                    y: 20,
                    r: 6.72
                },
                {
                    x: 1554,
                    y: 21,
                    r: 6.72
                },
                {
                    x: 2317,
                    y: 22,
                    r: 6.72
                },
                {
                    x: 2384,
                    y: 23,
                    r: 6.72
                },
                {
                    x: 1870,
                    y: 24,
                    r: 6.72
                },
                {
                    x: 1388,
                    y: 25,
                    r: 6.72
                },
                {
                    x: 1044,
                    y: 26,
                    r: 6.72
                },
                {
                    x: 796,
                    y: 27,
                    r: 6.72
                },
                {
                    x: 602,
                    y: 28,
                    r: 6.72
                },
                {
                    x: 488,
                    y: 29,
                    r: 6.72
                },
                {
                    x: 444,
                    y: 30,
                    r: 6.72
                },
                {
                    x: 2325,
                    y: 31,
                    r: 6.72
                }, 
            ],
            backgroundColor: "#E36387"
        },
        {
            label: "2012",
            data: [
                {
                    x: 0,
                    y: 17,
                    r: 6.587
                },
                {
                    x: 4,
                    y: 18,
                    r: 6.587
                },
                {
                    x: 65,
                    y: 19,
                    r: 6.587
                },
                {
                    x: 580,
                    y: 20,
                    r: 6.587
                },
                {
                    x: 1680,
                    y: 21,
                    r: 6.587
                },
                {
                    x: 2362,
                    y: 22,
                    r: 6.587
                },
                {
                    x: 2143,
                    y: 23,
                    r: 6.587
                },
                {
                    x: 1645,
                    y: 24,
                    r: 6.587
                },
                {
                    x: 1228,
                    y: 25,
                    r: 6.587
                },
                {
                    x: 899,
                    y: 26,
                    r: 6.587
                },
                {
                    x: 718,
                    y: 27,
                    r: 6.587
                },
                {
                    x: 603,
                    y: 28,
                    r: 6.587
                },
                {
                    x: 484,
                    y: 29,
                    r: 6.587
                },
                {
                    x: 384,
                    y: 30,
                    r: 6.587
                },
                {
                    x: 2335,
                    y: 31,
                    r: 6.587
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