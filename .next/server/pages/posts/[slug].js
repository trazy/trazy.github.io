"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 8542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6809);
/* harmony import */ var _components_layouts_PostLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(734);
/* harmony import */ var _components_PostListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(726);
/* harmony import */ var _utils_mdx_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8861);
/* harmony import */ var _entities_Post_entity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4436);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var purify_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3834);
/* harmony import */ var purify_ts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(purify_ts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3991);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2733);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__, ramda__WEBPACK_IMPORTED_MODULE_11__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__, ramda__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const reactMarkdownComponents = {
    code ({ node , inline , className , children , ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.PrismAsync, {
            ...props,
            style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__.vscDarkPlus,
            language: match[1],
            PreTag: "div",
            showLineNumbers: true,
            children: String(children).replace(/\n$/, "")
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
            ...props,
            className: className,
            children: children
        });
    }
};
const PostPage = ({ content , frontMatter , associatedPosts , relatedByTags , slug  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts_PostLayout__WEBPACK_IMPORTED_MODULE_6__/* .PostLayout */ .j, {
        frontMatter: {
            ...frontMatter,
            slug
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full bg-white p-6 drop-shadow-xl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    className: "mt-12 px-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                        className: "max-w-full prose prose-gray",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-3xl font-bold",
                                        children: frontMatter.title
                                    }),
                                    frontMatter.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: frontMatter.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    remarkPlugins: [
                                        [
                                            remark_gfm__WEBPACK_IMPORTED_MODULE_5__["default"],
                                            {
                                                singleTilde: false
                                            }
                                        ]
                                    ],
                                    components: reactMarkdownComponents,
                                    children: content
                                })
                            })
                        ]
                    })
                })
            }),
            (Array.isArray(associatedPosts) && associatedPosts.length > 0 || Array.isArray(relatedByTags) && relatedByTags.length > 0) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full bg-white p-6 py-32 drop-shadow-xl mt-32 flex flex-col gap-32",
                children: [
                    purify_ts__WEBPACK_IMPORTED_MODULE_10__.Maybe.fromPredicate((associatedPosts)=>Array.isArray(associatedPosts) && associatedPosts.length > 0, associatedPosts).map((associatedPosts)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-12 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-xl font-bold text-center uppercase underline underline-offset-8 decoration-gray-400",
                                    children: "Associated Posts"
                                }),
                                associatedPosts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostListItem__WEBPACK_IMPORTED_MODULE_7__/* .PostListItem */ .B, {
                                        post: (0,_entities_Post_entity__WEBPACK_IMPORTED_MODULE_13__/* .create */ .U)({
                                            ...post,
                                            datetime: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.parseJSON)(post.datetime)
                                        })
                                    }, `associated-posts-${post.slug}`))
                            ]
                        }, "associated-posts")).orDefault(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})),
                    purify_ts__WEBPACK_IMPORTED_MODULE_10__.Maybe.fromPredicate((relatedByTags)=>Array.isArray(relatedByTags) && relatedByTags.length > 0, relatedByTags).map((relatedByTags)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-12 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-xl font-bold text-center uppercase underline underline-offset-8 decoration-gray-400",
                                    children: "Related Posts"
                                }),
                                relatedByTags.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostListItem__WEBPACK_IMPORTED_MODULE_7__/* .PostListItem */ .B, {
                                        post: (0,_entities_Post_entity__WEBPACK_IMPORTED_MODULE_13__/* .create */ .U)({
                                            ...post,
                                            datetime: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.parseJSON)(post.datetime)
                                        })
                                    }, `related-posts-${post.slug}`))
                            ]
                        }, "related-posts")).orDefault(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}))
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);
const getStaticProps = async ({ params  })=>purify_ts__WEBPACK_IMPORTED_MODULE_10__.Maybe.fromNullable(params).chain(({ slug  })=>purify_ts__WEBPACK_IMPORTED_MODULE_10__.Maybe.fromFalsy(slug)).map((slug)=>{
        const postItems = (0,_utils_mdx_util__WEBPACK_IMPORTED_MODULE_8__/* .getAllPosts */ .Bd)([
            "slug",
            "datetime",
            "thumbnail",
            "title",
            "description",
            "tags",
            "content"
        ]);
        const { content , data: frontMatter  } = (0,_utils_mdx_util__WEBPACK_IMPORTED_MODULE_8__/* .getPost */ .xl)(slug);
        const found = postItems.find((post)=>post.slug === slug);
        const options = {
            // isCaseSensitive: false,
            // includeScore: false,
            // shouldSort: true,
            // includeMatches: false,
            // findAllMatches: false,
            // minMatchCharLength: 1,
            // location: 0,
            threshold: 0.25,
            // distance: 100,
            // useExtendedSearch: false,
            // ignoreLocation: false,
            // ignoreFieldNorm: false,
            // fieldNormWeight: 1,
            keys: [
                "title"
            ]
        };
        const fuse = new (fuse_js__WEBPACK_IMPORTED_MODULE_12___default())(postItems.filter((v)=>v !== found), options);
        const associatedPosts = (0,ramda__WEBPACK_IMPORTED_MODULE_11__.take)(3)(fuse.search(found.title).map(({ item  })=>item).sort((a, b)=>{
            const x = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.parseJSON)(a.datetime), y = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.parseJSON)(b.datetime);
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isAfter)(x, y) ? -1 : (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isBefore)(x, y) ? 1 : 0;
        }));
        const relatedByTags = (0,ramda__WEBPACK_IMPORTED_MODULE_11__.take)(3)(postItems.filter((v)=>v !== found).filter(({ tags  })=>tags.some((tag)=>found.tags.includes(tag))).sort((a, b)=>{
            const x = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.parseJSON)(a.datetime), y = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.parseJSON)(b.datetime);
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isAfter)(x, y) ? -1 : (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isBefore)(x, y) ? 1 : 0;
        }));
        return {
            props: {
                slug,
                content,
                frontMatter,
                associatedPosts,
                relatedByTags
            }
        };
    }).orDefault({
        props: {
            slug: "",
            content: "",
            frontMatter: {},
            associatedPosts: [],
            relatedByTags: []
        }
    });
const getStaticPaths = ()=>{
    const posts = (0,_utils_mdx_util__WEBPACK_IMPORTED_MODULE_8__/* .getAllPosts */ .Bd)([
        "slug",
        "datetime",
        "thumbnail",
        "title",
        "description",
        "tags",
        "content"
    ]);
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2733:
/***/ ((module) => {

module.exports = require("fuse.js");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 3834:
/***/ ((module) => {

module.exports = require("purify-ts");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 4794:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3991:
/***/ ((module) => {

module.exports = import("ramda");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,560,191,734], () => (__webpack_exec__(8542)));
module.exports = __webpack_exports__;

})();