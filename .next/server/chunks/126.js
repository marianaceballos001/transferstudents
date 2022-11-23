"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 126:
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
                424 / 229680,
                4893 / 229680,
                1113 / 229680,
                6504 / 229680,
                0 / 229680,
                6161 / 229680,
                68 / 229680,
                13346 / 229680,
                4252 / 229680,
                2801 / 229680,
                8684 / 229680,
                1371 / 229680,
                49617 / 229680, 
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