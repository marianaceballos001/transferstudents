"use strict";
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(182);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faker_js_faker__WEBPACK_IMPORTED_MODULE_4__]);
_faker_js_faker__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);
const options = {
    plugins: {},
    responsive: true,
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: "Students"
            }
        }
    }
};
const labels = [
    "FAMU",
    "FAU",
    "FGCU",
    "FIU",
    "FPU",
    "FSU",
    "NCF",
    "UCF",
    "UF",
    "UNF",
    "USF",
    "UWF",
    "SUS"
];
const data = {
    labels,
    datasets: [
        {
            label: "Fall 2014",
            data: [
                558,
                7262,
                1360,
                9469,
                13,
                7244,
                93,
                18425,
                6486,
                3654,
                11292,
                1840,
                67696
            ],
            backgroundColor: "#DDF3F5"
        },
        {
            label: "Fall 2013",
            data: [
                585,
                7471,
                1430,
                9012,
                0,
                7744,
                121,
                17899,
                5813,
                3725,
                11597,
                1911,
                67308
            ],
            backgroundColor: "#F2AAAA"
        },
        {
            label: "Fall 2012",
            data: [
                683,
                7258,
                1413,
                8624,
                0,
                7441,
                138,
                17483,
                4698,
                3767,
                11802,
                1907,
                65214
            ],
            backgroundColor: "#7A4069"
        }, 
    ]
};
function App() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {
            options: options,
            data: data
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;