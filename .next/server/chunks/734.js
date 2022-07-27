"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2980);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6166);
/* harmony import */ var _Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var _variables_siteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2169);
/* harmony import */ var purify_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3834);
/* harmony import */ var purify_ts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(purify_ts__WEBPACK_IMPORTED_MODULE_6__);







const PostLayout = ({ children , frontMatter  })=>{
    const { siteUrl , title , description  } = _variables_siteMetadata__WEBPACK_IMPORTED_MODULE_5__/* .siteMetadata */ .F;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            purify_ts__WEBPACK_IMPORTED_MODULE_6__.Maybe.fromNullable(frontMatter).map((frontMatter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                    currentUrl: `${siteUrl}/posts/${frontMatter.slug}`,
                    title: frontMatter.title,
                    description: frontMatter.description,
                    keywords: frontMatter.tags
                }, `seo-in-post-layout`)).orDefault(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {})),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative w-full min-h-full bg-gray-200",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Nav__WEBPACK_IMPORTED_MODULE_3__/* .Nav */ .J, {
                        title: title,
                        description: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative container px-32 mx-auto mt-20",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$, {})
                ]
            })
        ]
    });
};


/***/ })

};
;