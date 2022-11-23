"use strict";
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);




chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip);
const data = {
    datasets: [
        {
            label: "# of Votes",
            data: [
                585 / 237750,
                7471 / 237750,
                1430 / 237750,
                9012 / 237750,
                0 / 237750,
                7744 / 237750,
                121 / 237750,
                17899 / 237750,
                5813 / 237750,
                3725 / 237750,
                11597 / 237750,
                1911 / 237750,
                67308 / 237750, 
            ],
            backgroundColor: [
                "#DDF3F5",
                "#F2AAAA",
                "#E5EBB2",
                "#A685E2",
                "#4649FF",
                "#A8A4CE",
                "#5B4B8A",
                "#D6F8B8",
                "#FDA65D",
                "#FFA1CF",
                "#E36BAE",
                "#7EA04D",
                "#7A4069", 
            ],
            borderColor: [
                "#A6DCEF",
                "#E36387",
                "#BCE29E",
                "#6155A6",
                "#1D1CE5",
                "#7A86B6",
                "#4C3575",
                "#ACDEAA",
                "#E26A2C",
                "#FF74B1",
                "#B34180",
                "#335D2D",
                "#513252", 
            ],
            borderWidth: 1
        }, 
    ]
};
function App() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Doughnut, {
            data: data
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

};
;