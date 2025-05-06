(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    1538: function(e, n, a) {
        Promise.resolve().then(a.bind(a, 4710))
    },
    4710: function(e, n, a) {
        "use strict";
        a.r(n),
        a.d(n, {
            default: function() {
                return x
            }
        });
        var t = a(7437)
          , i = a(2265)
          , r = a(8057)
          , l = a.n(r)
          , o = a(574)
          , s = a.n(o);
        function c(e) {
            let {fontSize: n=16, speed: a=1, density: r=.3, colorPrimary: l="rgba(0, 0, 0, 0.7)", colorSecondary: o="rgba(0, 0, 0, 0.5)"} = e
              , c = (0,
            i.useRef)(null)
              , {width: d, height: m} = function() {
                let[e,n] = (0,
                i.useState)({
                    width: 0,
                    height: 0
                });
                return (0,
                i.useEffect)( () => {
                    function e() {
                        n({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    }
                    return window.addEventListener("resize", e),
                    e(),
                    () => window.removeEventListener("resize", e)
                }
                , []),
                e
            }();
            return (0,
            i.useEffect)( () => {
                let e = c.current;
                if (!e)
                    return;
                let t = e.getContext("2d");
                if (!t)
                    return;
                e.width = d,
                e.height = m;
                let i = Array(Math.floor(d / n)).fill(1)
                  , o = "GORKRUST";
                function s() {
                    (function() {
                        t.fillStyle = "rgba(255, 255, 255, 0.05)",
                        t.fillRect(0, 0, d, m),
                        t.fillStyle = l,
                        t.font = "".concat(n, 'px "Space Mono", monospace');
                        for (let e = 0; e < i.length; e++) {
                            if (Math.random() > r)
                                continue;
                            let a = Math.floor(i[e] % o.length)
                              , l = o[a]
                              , s = e * n
                              , c = i[e] * n;
                            t.fillText(l, s, c),
                            c > m && Math.random() > .99 && (i[e] = 0),
                            i[e]++
                        }
                    }
                    )(),
                    setTimeout( () => requestAnimationFrame(s), 50 / a)
                }
                return s(),
                () => {
                    cancelAnimationFrame(s)
                }
            }
            , [d, m, n, a, r, l]),
            (0,
            t.jsx)("canvas", {
                ref: c,
                className: s().matrixCanvas,
                "aria-label": "GORKRUST matrix rain animation",
                role: "img"
            })
        }
        let d = ["loading twitter rant", "trying not to be racist", "ill guess we never know"];
        function m(e) {
            let {onLoadingComplete: n} = e
              , [a,r] = (0,
            i.useState)(0)
              , [o,s] = (0,
            i.useState)(0)
              , [m,u] = (0,
            i.useState)(!1);
            return (0,
            i.useEffect)( () => {
                let e = setInterval( () => {
                    r(n => n >= 100 ? (clearInterval(e),
                    100) : n + 1)
                }
                , 50);
                return () => clearInterval(e)
            }
            , []),
            (0,
            i.useEffect)( () => {
                let e = setInterval( () => {
                    s(e => (e + 1) % d.length)
                }
                , 3e3);
                return () => clearInterval(e)
            }
            , []),
            (0,
            t.jsxs)("div", {
                className: "".concat(l().loadingScreen, " ").concat(m ? l().fadeOut : ""),
                children: [(0,
                t.jsx)(c, {
                    fontSize: 18,
                    speed: 1.2,
                    density: .3,
                    colorPrimary: "rgba(0, 0, 0, 0.7)",
                    colorSecondary: "rgba(0, 0, 0, 0.5)"
                }), (0,
                    t.jsxs)("div", {
                        className: l().loadingContent,
                        children: [(0,
                        t.jsx)("div", {
                            className: l().logo,
                            children: (0,
                            t.jsx)("img", {
                                src: "images/gorlonk.png",
                                alt: "Loading Logo",
                                className: l().logoImage
                            })
                        }), (0, 
                    t.jsx)("h1", {
                        className: l().title,
                        children: "GORKRUST"
                    }), (0,
                    t.jsxs)("div", {
                        className: l().loadingBarContainer,
                        children: [(0,
                        t.jsx)("div", {
                            className: l().loadingBar,
                            children: (0,
                            t.jsx)("div", {
                                className: l().progress,
                                style: {
                                    width: "".concat(a, "%")
                                }
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: l().loadingPercentage,
                            children: [a, "%"]
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: l().phraseContainer,
                        children: (0,
                        t.jsx)("p", {
                            className: l().loadingPhrase,
                            children: d[o]
                        })
                    }), 100 === a && (0,
                    t.jsx)("div", {
                        className: l().buttonContainer,
                        children: (0,
                        t.jsx)("button", {
                            onClick: () => {
                                u(!0),
                                setTimeout(n, 500)
                            }
                            ,
                            className: "".concat(l().enterButton, " ").concat(m ? "" : l().buttonVisible),
                            disabled: m,
                            children: "ENTER TERMINAL"
                        })
                    })]
                })]
            })
        }
        var u = a(2393)
          , _ = a.n(u);
        function g() {
            let[e,n] = (0,
            i.useState)("")
              , [a,r] = (0,
            i.useState)(["Welcome to GORKRUST TERMINAL. Type anything to begin."])
              , l = (0,
            i.useRef)(null)
              , o = (0,
            i.useRef)(null);
            (0,
            i.useEffect)( () => {
                o.current && (o.current.scrollTop = o.current.scrollHeight)
            }
            , [o]);
            let s = () => {
                new Audio("audio.mp3").play().catch(e => console.error("Error playing audio:", e))
            }
            ;
            return (0,
            t.jsxs)("div", {
                className: _().terminalWindow,
                children: [(0,
                t.jsx)("div", {
                    className: _().matrixBackground,
                    children: (0,
                    t.jsx)(c, {
                        fontSize: 18,
                        speed: 1.2,
                        density: .3,
                        colorPrimary: "rgba(0, 0, 0, 0.7)",
                        colorSecondary: "rgba(0, 0, 0, 0.5)"
                    })
                }), (0,
                t.jsx)("div", {
                    className: _().caInfo,
                    children: "CA: HERE ONCE LIVE (START BUYING THO MFS)"
                }), (0,
                    t.jsx)("div", {
                        className: _().logoContainer,
                        children: (0,
                        t.jsx)("img", {
                            src: "images/gorlonk.png",
                            alt: "GORKRUST Logo",
                            className: _().logo
                        })
                    }), (0,                    
                t.jsxs)("div", {
                    className: _().titleBar,
                    children: [(0,
                    t.jsxs)("div", {
                        className: _().trafficLights,
                        children: [(0,
                        t.jsx)("span", {
                            className: _().close
                        }), (0,
                        t.jsx)("span", {
                            className: _().minimize
                        }), (0,
                        t.jsx)("span", {
                            className: _().maximize
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: _().titleBarText,
                        children: "GORKRUST@terminal: ~"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: _().terminal,
                    onClick: () => {
                        var e;
                        return null === (e = l.current) || void 0 === e ? void 0 : e.focus()
                    }
                    ,
                    children: [(0,
                    t.jsx)("div", {
                        className: _().output,
                        ref: o,
                        children: a.map( (e, n) => (0,
                        t.jsx)("div", {
                            className: _().line,
                            children: e
                        }, n))
                    }), (0,
                    t.jsxs)("form", {
                        onSubmit: t => {
                            t.preventDefault(),
                            "" !== e.trim() && (r([...a, "> ".concat(e), "Hi im gorkrust and fuck you. you really tought i was doing something just cuz you asked for.... go buy the coinn and i will start doing something when we bond"]),
                            n(""))
                        }
                        ,
                        className: _().inputForm,
                        children: [(0,
                        t.jsx)("span", {
                            className: _().prompt,
                            children: "GORKRUST@terminal:~ $"
                        }), (0,
                        t.jsx)("input", {
                            type: "text",
                            value: e,
                            onChange: e => {
                                n(e.target.value),
                                s()
                            }
                            ,
                            className: _().input,
                            ref: l,
                            "aria-label": "Terminal input"
                        })]
                    })]
                })]
            })
        }
        var h = a(6777)
          , f = a.n(h);
        function x() {
            let[e,n] = (0,
            i.useState)(!0);
            return (0,
            i.useEffect)( () => {
                "true" !== localStorage.getItem("hasSeenLoading") ? n(!0) : n(!1)
            }
            , []),
            (0,
            t.jsx)("main", {
                className: f().main,
                children: e ? (0,
                t.jsx)(m, {
                    onLoadingComplete: () => {
                        n(!1),
                        localStorage.setItem("hasSeenLoading", "true"),
                        window.dispatchEvent(new Event("storage"))
                    }
                }) : (0,
                t.jsx)(g, {})
            })
        }
    },
    6777: function(e) {
        e.exports = {
            main: "page_main__nw1Wk"
        }
    },
    8057: function(e) {
        e.exports = {
            loadingScreen: "LoadingScreen_loadingScreen__lRm3o",
            fadeOut: "LoadingScreen_fadeOut__99rYa",
            loadingContent: "LoadingScreen_loadingContent__ndn9l",
            logo: "LoadingScreen_logo__bQJOT",
            logoImage: "LoadingScreen_logoImage__Zhn3b",
            title: "LoadingScreen_title__K43wq",
            loadingBarContainer: "LoadingScreen_loadingBarContainer__L07Tp",
            loadingBar: "LoadingScreen_loadingBar__25tDz",
            progress: "LoadingScreen_progress__YLmz4",
            loadingPercentage: "LoadingScreen_loadingPercentage__kuA1S",
            phraseContainer: "LoadingScreen_phraseContainer__9bNll",
            loadingPhrase: "LoadingScreen_loadingPhrase__PjdTN",
            fadeInOut: "LoadingScreen_fadeInOut__XyOSV",
            buttonContainer: "LoadingScreen_buttonContainer__VSs6L",
            enterButton: "LoadingScreen_enterButton__P7Eo5",
            buttonVisible: "LoadingScreen_buttonVisible__EbcA_"
        }
    },
    574: function(e) {
        e.exports = {
            matrixCanvas: "MatrixRain_matrixCanvas__pOfK3"
        }
    },
    2393: function(e) {
        e.exports = {
            terminalWindow: "Terminal_terminalWindow__wNhZB",
            matrixBackground: "Terminal_matrixBackground__CzbnR",
            caInfo: "Terminal_caInfo__qF675",
            logoContainer: "Terminal_logoContainer__oCAFW",
            logo: "Terminal_logo__aDjPr",
            titleBar: "Terminal_titleBar__4TiYC",
            trafficLights: "Terminal_trafficLights__kU7AU",
            close: "Terminal_close__fJhlo",
            minimize: "Terminal_minimize__oiAXd",
            maximize: "Terminal_maximize__AWA_C",
            titleBarText: "Terminal_titleBarText__7yNE4",
            terminal: "Terminal_terminal__zGiUc",
            output: "Terminal_output__63rwQ",
            line: "Terminal_line__gc3wn",
            inputForm: "Terminal_inputForm__TGXai",
            prompt: "Terminal_prompt__g765U",
            input: "Terminal_input__HSlJl"
        }
    }
}, function(e) {
    e.O(0, [844, 971, 117, 744], function() {
        return e(e.s = 1538)
    }),
    _N_E = e.O()
}
]);
