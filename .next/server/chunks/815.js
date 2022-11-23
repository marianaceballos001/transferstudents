"use strict";
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 815:
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
                    x: 4,
                    y: 17,
                    r: 5.639
                },
                {
                    x: 577,
                    y: 18,
                    r: 5.639
                },
                {
                    x: 1886,
                    y: 19,
                    r: 5.639
                },
                {
                    x: 2832,
                    y: 20,
                    r: 5.639
                },
                {
                    x: 2955,
                    y: 21,
                    r: 5.639
                },
                {
                    x: 2109,
                    y: 22,
                    r: 5.639
                },
                {
                    x: 1001,
                    y: 23,
                    r: 5.639
                },
                {
                    x: 554,
                    y: 24,
                    r: 5.639
                },
                {
                    x: 333,
                    y: 25,
                    r: 5.639
                },
                {
                    x: 232,
                    y: 26,
                    r: 5.639
                },
                {
                    x: 165,
                    y: 27,
                    r: 5.639
                },
                {
                    x: 119,
                    y: 28,
                    r: 5.639
                },
                {
                    x: 88,
                    y: 29,
                    r: 5.639
                },
                {
                    x: 87,
                    y: 30,
                    r: 5.639
                },
                {
                    x: 579,
                    y: 31,
                    r: 5.639
                }, 
            ],
            backgroundColor: "#6155A6"
        },
        {
            label: "2013",
            data: [
                {
                    x: 11,
                    y: 17,
                    r: 5.967
                },
                {
                    x: 1345,
                    y: 18,
                    r: 5.967
                },
                {
                    x: 2228,
                    y: 19,
                    r: 5.967
                },
                {
                    x: 2649,
                    y: 20,
                    r: 5.967
                },
                {
                    x: 2795,
                    y: 21,
                    r: 5.967
                },
                {
                    x: 1972,
                    y: 22,
                    r: 5.967
                },
                {
                    x: 1020,
                    y: 23,
                    r: 5.967
                },
                {
                    x: 548,
                    y: 24,
                    r: 5.967
                },
                {
                    x: 322,
                    y: 25,
                    r: 5.967
                },
                {
                    x: 236,
                    y: 26,
                    r: 5.967
                },
                {
                    x: 163,
                    y: 27,
                    r: 5.967
                },
                {
                    x: 129,
                    y: 28,
                    r: 5.967
                },
                {
                    x: 105,
                    y: 29,
                    r: 5.967
                },
                {
                    x: 76,
                    y: 30,
                    r: 5.967
                },
                {
                    x: 589,
                    y: 31,
                    r: 5.967
                }, 
            ],
            backgroundColor: "#E36387"
        },
        {
            label: "2012",
            data: [
                {
                    x: 13,
                    y: 17,
                    r: 5.914
                },
                {
                    x: 1245,
                    y: 18,
                    r: 5.914
                },
                {
                    x: 2176,
                    y: 19,
                    r: 5.914
                },
                {
                    x: 2401,
                    y: 20,
                    r: 5.914
                },
                {
                    x: 2628,
                    y: 21,
                    r: 5.914
                },
                {
                    x: 1923,
                    y: 22,
                    r: 5.914
                },
                {
                    x: 1035,
                    y: 23,
                    r: 5.914
                },
                {
                    x: 499,
                    y: 24,
                    r: 5.914
                },
                {
                    x: 333,
                    y: 25,
                    r: 5.914
                },
                {
                    x: 209,
                    y: 26,
                    r: 5.914
                },
                {
                    x: 167,
                    y: 27,
                    r: 5.914
                },
                {
                    x: 144,
                    y: 28,
                    r: 5.914
                },
                {
                    x: 108,
                    y: 29,
                    r: 5.914
                },
                {
                    x: 101,
                    y: 30,
                    r: 5.914
                },
                {
                    x: 620,
                    y: 31,
                    r: 5.914
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