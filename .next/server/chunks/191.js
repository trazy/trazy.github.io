"use strict";
exports.id = 191;
exports.ids = [191];
exports.modules = {

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ PostListItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
;// CONCATENATED MODULE: ./components/CalendarCard.tsx



const CalendarCard = ({ datetime  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "min-w-32 bg-white min-h-48 p-3 mb-4 font-medium",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "block rounded-t overflow-hidden text-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-rose-500 text-white py-1",
                        children: (0,external_date_fns_.format)(datetime, "MMMM")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pt-1 border-l border-r border-white bg-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-5xl font-bold leading-tight",
                            children: (0,external_date_fns_.format)(datetime, "dd")
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-sm",
                            children: (0,external_date_fns_.format)(datetime, "EEEE")
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-xs leading-normal",
                            children: (0,external_date_fns_.format)(datetime, "yyyy qqq")
                        })
                    })
                ]
            })
        })
    });

;// CONCATENATED MODULE: ./components/PostListItem.tsx




const PostListItem = ({ post  })=>{
    const { slug , title , description , content , datetime , tags  } = post;
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "block overflow-hidden break-words px-16",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-12",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CalendarCard, {
                        datetime: datetime
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            className: "pt-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "text-2xl font-bold",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/posts/${slug}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "cursor-pointer",
                                        children: title
                                    })
                                })
                            })
                        }),
                        tags && tags.length && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "flex gap-2",
                                children: tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-sm text-gray-400 before:content-['#']",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/tag/${tag}`,
                                            passHref: true,
                                            children: tag
                                        })
                                    }, tag))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/posts/${slug}`,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "line-clamp-6 cursor-pointer",
                                    children: content
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-4 h-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/posts/${slug}`,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "py-2 px-4 text-baseline bg-rose-500 hover:bg-rose-800 transition-colors font-bold text-white uppercase cursor-pointer rounded",
                                    children: "Read more"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 4436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
const create = ({ title , description , slug , datetime , content , tags  })=>({
        title: String(title),
        description: String(description),
        slug: String(slug),
        datetime: new Date(datetime),
        content: String(content),
        tags: tags.map((tag)=>String(tag))
    });


/***/ }),

/***/ 8861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "xl": () => (/* binding */ getPost)
/* harmony export */ });
/* unused harmony export getPostItems */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const POSTS_PATH = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), "posts");
const getPostFilePaths = ()=>fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(POSTS_PATH).filter((path)=>/\.mdx?$/.test(path));
const getPost = (slug)=>{
    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(POSTS_PATH, `${slug}.mdx`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    return {
        data,
        content
    };
};
const getPostItems = (filePath, fields = [])=>{
    const slug = filePath.replace(/\.mdx?$/, "");
    const { data , content  } = getPost(slug);
    const nextData = {
        ...data,
        slug,
        content
    };
    // Ensure only the minimal needed data is exposed
    return fields.reduce((prev, field)=>{
        if (!nextData[field]) {
            return prev;
        }
        return {
            ...prev,
            [field]: nextData[field]
        };
    }, {});
};
function getAllPosts(fields = []) {
    const filePaths = getPostFilePaths();
    const posts = filePaths.map((filePath)=>getPostItems(filePath, fields))// sort posts by date in descending order
    .sort((post1, post2)=>post1.datetime > post2.datetime ? -1 : 1);
    return posts;
}


/***/ })

};
;