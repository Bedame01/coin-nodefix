(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5728: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(5190);
        },
      ]);
    },
    5190: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return p;
          },
        });
      var l = t(5893),
        n = t(5675),
        i = t.n(n),
        a = t(3854),
        r = (e) => {
          let { children: s, imageSource: t, goToWalletPage: n } = e;
          return (0, l.jsx)("div", {
            className: "md:w-1/3 w-full px-5 ",
            children: (0, l.jsxs)("div", {
              className:
                "bg-[#1A1C33] py-10 rounded-lg border-l-8 border-[#3182CE] mt-7 md:mt-10 relative cursor-pointer ",
              onClick: n,
              children: [
                (0, l.jsx)(a.Hi9, { className: "absolute right-1 top-1" }),
                (0, l.jsx)(i(), {
                  src: t,
                  width: 65,
                  height: 65,
                  alt: "action icon",
                  className: "mx-auto",
                }),
                (0, l.jsx)("span", {
                  className: "mt-3 block font-light",
                  children: s,
                }),
              ],
            }),
          });
        },
        c = t(213),
        d = t(6893),
        o = t(9583),
        x = t(1163),
        m = t(7294),
        u = function (e) {
          let { start: s, end: t, duration: n } = e,
            i = (0, m.useRef)(null),
            a = t > s ? 1 : -1,
            r = s,
            c = () => {
              try {
                (r += a),
                  (i.current.textContent = r),
                  r !== t && requestAnimationFrame(c);
              } catch (e) {}
            };
          return (
            (0, m.useEffect)(() => {
              let e = () => {
                let s = i.current.getBoundingClientRect().top,
                  t = window.innerHeight;
                s < t &&
                  (requestAnimationFrame(c),
                  window.removeEventListener("scroll", e));
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, l.jsx)("span", { ref: i, children: s })
          );
        },
        h = (e) => {
          let { children: s } = e;
          return (0, l.jsx)("div", {
            className: "relative overflow-hidden logos",
            children: (0, l.jsx)("span", {
              className: " space-x-10 sm:space-x-20 logos-slide",
              children: s,
            }),
          });
        },
        j = () => {
          let e = (0, x.useRouter)(),
            s = (s) => {
              e.push({ pathname: "/walletpage", query: { connect: s } });
            };
          return (0, l.jsx)("section", {
            className: "background text-white text-center pt-16 px-7",
            children: (0, l.jsxs)("div", {
              className: "container mx-auto",
              children: [
                
                
                (0, l.jsx)("div", {
                  className:
                    "mt-12 py-3 w-11/12 m-auto relative bg-white text-black  rounded-sm",
                  children: (0, l.jsx)(h, {
                    children: c.Pi.map((e) =>
                      (0, l.jsx)(
                        "div",
                        {
                          className: "inline-block text-xs",
                          children: (0, l.jsxs)("div", {
                            className: "flex space-x-10",
                            children: [
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("p", {
                                    className: "font-semibold",
                                    children: e.name,
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "font-light text-gray-500",
                                    children: e.short,
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("p", {
                                    className: "font-semibold",
                                    children: e.price,
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "font-semibold ".concat(
                                      e.volume.startsWith("-")
                                        ? "text-red-500"
                                        : "text-green-500"
                                    ),
                                    children: e.volume,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "mt-14",
                  children: [
                    (0, l.jsx)("h4", {
                      className: "text-[#3182CE] font-bold",
                      children: "Quick Start",
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "w-full md:flex items-center justify-between flex-wrap",
                      children: c.wO.map((e, t) =>
                        (0, l.jsx)(
                          r,
                          {
                            imageSource: e.image,
                            goToWalletPage: () => s(e.text),
                            children: e.text,
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "mt-20",
                  children: [
                    (0, l.jsx)("h4", {
                      className: "text-[#3182CE] font-bold",
                      children: "Distribution",
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex w-full mt-10",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "w-full",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "sm:text-2xl font-bold",
                              children: [
                                (0, l.jsx)(u, {
                                  start: 0,
                                  end: 200,
                                  duration: 50,
                                }),
                                "K+",
                              ],
                            }),
                            (0, l.jsx)("p", {
                              className: "text-xs sm:text-base",
                              children: "Active users",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "w-full",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "sm:text-2xl font-bold",
                              children: [
                                (0, l.jsx)(u, {
                                  start: 0,
                                  end: 50,
                                  duration: 50,
                                }),
                                "K+",
                              ],
                            }),
                            (0, l.jsx)("p", {
                              className: "text-xs sm:text-base",
                              children: "Resolved issues",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "w-full",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "sm:text-2xl font-bold",
                              children: [
                                (0, l.jsx)(u, {
                                  start: 0,
                                  end: 100,
                                  duration: 50,
                                }),
                                "+",
                              ],
                            }),
                            (0, l.jsx)("p", {
                              className: "text-xs sm:text-base",
                              children: "Contributors",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "mt-20 font-medium text-sm sm:text-lg",
                      children: [
                        (0, l.jsx)("p", {
                          children: "Ready to resolve your blockchain issues ?",
                        }),
                        (0, l.jsx)("p", {
                          className: "mt-1",
                          children: "We are here to provide help",
                        }),
                      ],
                    }),
                    (0, l.jsx)("button", {
                      className:
                        "bg-[#0050B7] text-sm w-40 mt-5 py-3 rounded-md inline-block sm:text-base",
                      onClick: () => s("Connect Wallet"),
                      children: "Get Started",
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex justify-center items-center space-x-4 mt-10 cursor-pointer",
                      children: [
                        (0, l.jsx)(d.uOf, {}),
                        (0, l.jsx)(d.Ccr, {}),
                        (0, l.jsx)(o.j2d, {}),
                        (0, l.jsx)(d.qpG, {}),
                      ],
                    }),
                    (0, l.jsx)("span", {
                      className: "pb-2 text-xs mt-10 inline-block font-medium",
                      children: "Wallet Fix \xa9 2025 All rights reserved.",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        p = () =>
          (0, l.jsxs)(l.Fragment, { children: [" ", (0, l.jsx)(j, {})] });
    },
  },
  function (e) {
    e.O(0, [556, 445, 161, 213, 774, 888, 179], function () {
      return e((e.s = 5728));
    }),
      (_N_E = e.O());
  },
]);
