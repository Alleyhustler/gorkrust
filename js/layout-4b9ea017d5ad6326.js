(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    4393: function(e, n, a) {
        Promise.resolve().then(a.bind(a, 4854)),
        Promise.resolve().then(a.t.bind(a, 7713, 23)),
        Promise.resolve().then(a.t.bind(a, 7960, 23))
    },
    4854: function(e, n, a) {
        "use strict";
        a.d(n, {
            default: function() {
                return m
            }
        });
        var t = a(7437)
          , s = a(2265)
          , l = a(7648)
          , o = a(8293)
          , i = a(2489)
          , c = a(2449)
          , r = a(7547)
          , d = a.n(r)
          , _ = a(206)
          , u = a.n(_);
        function h(e) {
            let {isOpen: n, onClose: a, children: l} = e
              , o = (0,
            s.useRef)(null);
            return ((0,
            s.useEffect)( () => {
                let e = e => {
                    o.current && !o.current.contains(e.target) && a()
                }
                ;
                return n && document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e)
                }
            }
            , [n, a]),
            n) ? (0,
            t.jsx)("div", {
                className: u().modalOverlay,
                children: (0,
                t.jsx)("div", {
                    className: u().modalContent,
                    ref: o,
                    children: l
                })
            }) : null
        }
        function m() {
            let[e,n] = (0,
            s.useState)(!0)
              , [a,r] = (0,
            s.useState)(!1);
            return (0,
            t.jsxs)("header", {
                className: "".concat(d().header, " ").concat(e ? d().collapsed : ""),
                children: [(0,
                t.jsxs)("div", {
                    className: d().headerContent,
                    children: [(0,
                    t.jsx)("button", {
                        onClick: () => {
                            n(!e)
                        }
                        ,
                        className: d().toggleButton,
                        "aria-label": e ? "Expand navigation" : "Collapse navigation",
                        children: e ? (0,
                        t.jsx)(o.Z, {
                            size: 24
                        }) : (0,
                        t.jsx)(i.Z, {
                            size: 24
                        })
                    }), (0,
                    t.jsx)(l.default, {
                        href: "/",
                        className: d().logo,
                        children: "GORKRUST"
                    }), 
                        t.jsxs("nav", {
                            className: d().nav,
                            children: [
                                (0, t.jsx)("a", {
                                    href: "https://x.com/RustTerminal_",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)("span", {
                                        className: d().link,
                                        children: "SUPPORT"
                                    })
                                }),
                                (0, t.jsx)("a", {
                                    href: "https://x.com/RustTerminal_",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)("span", {
                                        className: d().link,
                                        children: "TERMS"
                                    })
                                }),
                                (0, t.jsx)("a", {
                                    href: "https://pump.fun/profile/FFy6MJsykzEi2tvEoeLwe1aqNifajM8HewCYUayecG8p",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)("span", {
                                        className: d().link,
                                        children: "$GT"
                                    })
                                }),
                                (0, t.jsx)("a", {
                                    href: "https://x.com/RustTerminal_",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)("span", {
                                        className: d().link,
                                        children: "TWITTER"
                                    })
                                }),
                                (0, t.jsx)("a", {
                                    href: "https://t.me/gorkrustt",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)("span", {
                                        className: d().link,
                                        children: "TELEGRAM"
                                    })
                                })
                            ]
                        }), (0,
                    t.jsx)("button", {
                        className: d().bagButton,
                        "aria-label": "Shopping bag",
                        onClick: () => {
                            r(!0)
                        }
                        ,
                        children: (0,
                        t.jsx)(c.Z, {
                            size: 20
                        })
                    })]
                }), (0,
                t.jsx)(h, {
                    isOpen: a,
                    onClose: () => {
                        r(!1)
                    }
                    ,
                    children: (0,
                    t.jsxs)("div", {
                        className: d().cartContent,
                        children: [(0,
                        t.jsx)("h2", {
                            className: d().cartTitle,
                            children: "Cart"
                        }), (0,
                        t.jsx)("p", {
                            className: d().cartItemCount,
                            children: "0 items in cart"
                        }), (0,
                        t.jsx)("p", {
                            className: d().cartMessage,
                            children: "You're poor"
                        }), (0,
                        t.jsx)("p", {
                            className: d().cartMessage,
                            children: "Looking at your phantom wallet, you wouldn't be able to buy that"
                        })]
                    })
                })]
            })
        }
    },
    7960: function() {},
    206: function(e) {
        e.exports = {
            modalOverlay: "Modal_modalOverlay__Aqbbl",
            modalContent: "Modal_modalContent__elStH"
        }
    },
    7547: function(e) {
        e.exports = {
            header: "Navigation_header__5E5vK",
            collapsed: "Navigation_collapsed__flr70",
            headerContent: "Navigation_headerContent__V3XM9",
            toggleButton: "Navigation_toggleButton__TdyTE",
            logo: "Navigation_logo__ZzKRw",
            nav: "Navigation_nav__NZulV",
            link: "Navigation_link__JUJnE",
            nonClickableLink: "Navigation_nonClickableLink__efls9",
            bagButton: "Navigation_bagButton__Sqou0",
            cartContent: "Navigation_cartContent__ExU_w",
            cartTitle: "Navigation_cartTitle__09zFB",
            cartItemCount: "Navigation_cartItemCount__xgGx2",
            cartMessage: "Navigation_cartMessage__1xi0i"
        }
    }
}, function(e) {
    e.O(0, [632, 167, 971, 117, 744], function() {
        return e(e.s = 4393)
    }),
    _N_E = e.O()
}
]);
