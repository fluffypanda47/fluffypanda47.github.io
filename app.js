!function(a) {
    String.prototype.trim === a && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
    ),
    Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
        if (void 0 === this || null === this)
            throw new TypeError;
        var f, c = Object(this), d = c.length >>> 0, e = 0;
        if ("function" != typeof b)
            throw new TypeError;
        if (0 == d && 1 == arguments.length)
            throw new TypeError;
        if (arguments.length >= 2)
            f = arguments[1];
        else
            for (; ; ) {
                if (e in c) {
                    f = c[e++];
                    break
                }
                if (++e >= d)
                    throw new TypeError
            }
        for (; d > e; )
            e in c && (f = b.call(a, f, c[e], e, c)),
            e++;
        return f
    }
    )
}();
var Zepto = function() {
    function a(a) {
        return null == a ? String(a) : U[V.call(a)] || "object"
    }
    function b(b) {
        return "function" == a(b)
    }
    function c(a) {
        return null != a && a == a.window
    }
    function d(a) {
        return null != a && a.nodeType == a.DOCUMENT_NODE
    }
    function e(b) {
        return "object" == a(b)
    }
    function f(a) {
        return e(a) && !c(a) && a.__proto__ == Object.prototype
    }
    function g(a) {
        return a instanceof Array
    }
    function h(a) {
        return "number" == typeof a.length
    }
    function i(a) {
        return C.call(a, function(a) {
            return null != a
        })
    }
    function j(a) {
        return a.length > 0 ? y.fn.concat.apply([], a) : a
    }
    function k(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function l(a) {
        return a in F ? F[a] : F[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    function m(a, b) {
        return "number" != typeof b || H[k(a)] ? b : b + "px"
    }
    function n(a) {
        var b, c;
        return E[a] || (b = D.createElement(a),
        D.body.appendChild(b),
        c = G(b, "").getPropertyValue("display"),
        b.parentNode.removeChild(b),
        "none" == c && (c = "block"),
        E[a] = c),
        E[a]
    }
    function o(a) {
        return "children"in a ? B.call(a.children) : y.map(a.childNodes, function(a) {
            return 1 == a.nodeType ? a : void 0
        })
    }
    function p(a, b, c) {
        for (x in b)
            c && (f(b[x]) || g(b[x])) ? (f(b[x]) && !f(a[x]) && (a[x] = {}),
            g(b[x]) && !g(a[x]) && (a[x] = []),
            p(a[x], b[x], c)) : b[x] !== w && (a[x] = b[x])
    }
    function q(a, b) {
        return b === w ? y(a) : y(a).filter(b)
    }
    function r(a, c, d, e) {
        return b(c) ? c.call(a, d, e) : c
    }
    function s(a, b, c) {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
    }
    function t(a, b) {
        var c = a.className
          , d = c && c.baseVal !== w;
        return b === w ? d ? c.baseVal : c : (d ? c.baseVal = b : a.className = b,
        void 0)
    }
    function u(a) {
        var b;
        try {
            return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? y.parseJSON(a) : a : b) : a
        } catch (c) {
            return a
        }
    }
    function v(a, b) {
        b(a);
        for (var c in a.childNodes)
            v(a.childNodes[c], b)
    }
    var w, x, y, z, X, Y, A = [], B = A.slice, C = A.filter, D = window.document, E = {}, F = {}, G = D.defaultView.getComputedStyle, H = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, I = /^\s*<(\w+|!)[^>]*>/, J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, K = /^(?:body|html)$/i, L = ["val", "css", "html", "text", "data", "width", "height", "offset"], M = ["after", "prepend", "before", "append"], N = D.createElement("table"), O = D.createElement("tr"), P = {
        tr: D.createElement("tbody"),
        tbody: N,
        thead: N,
        tfoot: N,
        td: O,
        th: O,
        "*": D.createElement("div")
    }, Q = /complete|loaded|interactive/, R = /^\.([\w-]+)$/, S = /^#([\w-]*)$/, T = /^[\w-]+$/, U = {}, V = U.toString, W = {}, Z = D.createElement("div");
    return W.matches = function(a, b) {
        if (!a || 1 !== a.nodeType)
            return !1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c)
            return c.call(a, b);
        var d, e = a.parentNode, f = !e;
        return f && (e = Z).appendChild(a),
        d = ~W.qsa(e, b).indexOf(a),
        f && Z.removeChild(a),
        d
    }
    ,
    X = function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
            return b ? b.toUpperCase() : ""
        })
    }
    ,
    Y = function(a) {
        return C.call(a, function(b, c) {
            return a.indexOf(b) == c
        })
    }
    ,
    W.fragment = function(a, b, c) {
        a.replace && (a = a.replace(J, "<$1></$2>")),
        b === w && (b = I.test(a) && RegExp.$1),
        b in P || (b = "*");
        var d, e, g = P[b];
        return g.innerHTML = "" + a,
        e = y.each(B.call(g.childNodes), function() {
            g.removeChild(this)
        }),
        f(c) && (d = y(e),
        y.each(c, function(a, b) {
            L.indexOf(a) > -1 ? d[a](b) : d.attr(a, b)
        })),
        e
    }
    ,
    W.Z = function(a, b) {
        return a = a || [],
        a.__proto__ = y.fn,
        a.selector = b || "",
        a
    }
    ,
    W.isZ = function(a) {
        return a instanceof W.Z
    }
    ,
    W.init = function(a, c) {
        if (!a)
            return W.Z();
        if (b(a))
            return y(D).ready(a);
        if (W.isZ(a))
            return a;
        var d;
        if (g(a))
            d = i(a);
        else if (e(a))
            d = [f(a) ? y.extend({}, a) : a],
            a = null;
        else if (I.test(a))
            d = W.fragment(a.trim(), RegExp.$1, c),
            a = null;
        else {
            if (c !== w)
                return y(c).find(a);
            d = W.qsa(D, a)
        }
        return W.Z(d, a)
    }
    ,
    y = function(a, b) {
        return W.init(a, b)
    }
    ,
    y.extend = function(a) {
        var b, c = B.call(arguments, 1);
        return "boolean" == typeof a && (b = a,
        a = c.shift()),
        c.forEach(function(c) {
            p(a, c, b)
        }),
        a
    }
    ,
    W.qsa = function(a, b) {
        var c;
        return d(a) && S.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : B.call(R.test(b) ? a.getElementsByClassName(RegExp.$1) : T.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
    }
    ,
    y.contains = function(a, b) {
        return a !== b && a.contains(b)
    }
    ,
    y.type = a,
    y.isFunction = b,
    y.isWindow = c,
    y.isArray = g,
    y.isPlainObject = f,
    y.isEmptyObject = function(a) {
        var b;
        for (b in a)
            return !1;
        return !0
    }
    ,
    y.inArray = function(a, b, c) {
        return A.indexOf.call(b, a, c)
    }
    ,
    y.camelCase = X,
    y.trim = function(a) {
        return a.trim()
    }
    ,
    y.uuid = 0,
    y.support = {},
    y.expr = {},
    y.map = function(a, b) {
        var c, e, f, d = [];
        if (h(a))
            for (e = 0; e < a.length; e++)
                c = b(a[e], e),
                null != c && d.push(c);
        else
            for (f in a)
                c = b(a[f], f),
                null != c && d.push(c);
        return j(d)
    }
    ,
    y.each = function(a, b) {
        var c, d;
        if (h(a)) {
            for (c = 0; c < a.length; c++)
                if (b.call(a[c], c, a[c]) === !1)
                    return a
        } else
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1)
                    return a;
        return a
    }
    ,
    y.grep = function(a, b) {
        return C.call(a, b)
    }
    ,
    window.JSON && (y.parseJSON = JSON.parse),
    y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        U["[object " + b + "]"] = b.toLowerCase()
    }),
    y.fn = {
        forEach: A.forEach,
        reduce: A.reduce,
        push: A.push,
        sort: A.sort,
        indexOf: A.indexOf,
        concat: A.concat,
        map: function(a) {
            return y(y.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return y(B.apply(this, arguments))
        },
        ready: function(a) {
            return Q.test(D.readyState) ? a(y) : D.addEventListener("DOMContentLoaded", function() {
                a(y)
            }, !1),
            this
        },
        get: function(a) {
            return a === w ? B.call(this) : this[a >= 0 ? a : a + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(a) {
            return A.every.call(this, function(b, c) {
                return a.call(b, c, b) !== !1
            }),
            this
        },
        filter: function(a) {
            return b(a) ? this.not(this.not(a)) : y(C.call(this, function(b) {
                return W.matches(b, a)
            }))
        },
        add: function(a, b) {
            return y(Y(this.concat(y(a, b))))
        },
        is: function(a) {
            return this.length > 0 && W.matches(this[0], a)
        },
        not: function(a) {
            var c = [];
            if (b(a) && a.call !== w)
                this.each(function(b) {
                    a.call(this, b) || c.push(this)
                });
            else {
                var d = "string" == typeof a ? this.filter(a) : h(a) && b(a.item) ? B.call(a) : y(a);
                this.forEach(function(a) {
                    d.indexOf(a) < 0 && c.push(a)
                })
            }
            return y(c)
        },
        has: function(a) {
            return this.filter(function() {
                return e(a) ? y.contains(this, a) : y(this).find(a).size()
            })
        },
        eq: function(a) {
            return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            var a = this[0];
            return a && !e(a) ? a : y(a)
        },
        last: function() {
            var a = this[this.length - 1];
            return a && !e(a) ? a : y(a)
        },
        find: function(a) {
            var b, c = this;
            return b = "object" == typeof a ? y(a).filter(function() {
                var a = this;
                return A.some.call(c, function(b) {
                    return y.contains(b, a)
                })
            }) : 1 == this.length ? y(W.qsa(this[0], a)) : this.map(function() {
                return W.qsa(this, a)
            })
        },
        closest: function(a, b) {
            var c = this[0]
              , e = !1;
            for ("object" == typeof a && (e = y(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a)); )
                c = c !== b && !d(c) && c.parentNode;
            return y(c)
        },
        parents: function(a) {
            for (var b = [], c = this; c.length > 0; )
                c = y.map(c, function(a) {
                    return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a),
                    a) : void 0
                });
            return q(b, a)
        },
        parent: function(a) {
            return q(Y(this.pluck("parentNode")), a)
        },
        children: function(a) {
            return q(this.map(function() {
                return o(this)
            }), a)
        },
        contents: function() {
            return this.map(function() {
                return B.call(this.childNodes)
            })
        },
        siblings: function(a) {
            return q(this.map(function(a, b) {
                return C.call(o(b.parentNode), function(a) {
                    return a !== b
                })
            }), a)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(a) {
            return y.map(this, function(b) {
                return b[a]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = null),
                "none" == G(this, "").getPropertyValue("display") && (this.style.display = n(this.nodeName))
            })
        },
        replaceWith: function(a) {
            return this.before(a).remove()
        },
        wrap: function(a) {
            var c = b(a);
            if (this[0] && !c)
                var d = y(a).get(0)
                  , e = d.parentNode || this.length > 1;
            return this.each(function(b) {
                y(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
            })
        },
        wrapAll: function(a) {
            if (this[0]) {
                y(this[0]).before(a = y(a));
                for (var b; (b = a.children()).length; )
                    a = b.first();
                y(a).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            var c = b(a);
            return this.each(function(b) {
                var d = y(this)
                  , e = d.contents()
                  , f = c ? a.call(this, b) : a;
                e.length ? e.wrapAll(f) : d.append(f)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                y(this).replaceWith(y(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(a) {
            return this.each(function() {
                var b = y(this);
                (a === w ? "none" == b.css("display") : a) ? b.show() : b.hide()
            })
        },
        prev: function(a) {
            return y(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next: function(a) {
            return y(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html: function(a) {
            return a === w ? this.length > 0 ? this[0].innerHTML : null : this.each(function(b) {
                var c = this.innerHTML;
                y(this).empty().append(r(this, a, b, c))
            })
        },
        text: function(a) {
            return a === w ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                this.textContent = a
            })
        },
        attr: function(a, b) {
            var c;
            return "string" == typeof a && b === w ? 0 == this.length || 1 !== this[0].nodeType ? w : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : this.each(function(c) {
                if (1 === this.nodeType)
                    if (e(a))
                        for (x in a)
                            s(this, x, a[x]);
                    else
                        s(this, a, r(this, b, c, this.getAttribute(a)))
            })
        },
        removeAttr: function(a) {
            return this.each(function() {
                1 === this.nodeType && s(this, a)
            })
        },
        prop: function(a, b) {
            return b === w ? this[0] && this[0][a] : this.each(function(c) {
                this[a] = r(this, b, c, this[a])
            })
        },
        data: function(a, b) {
            var c = this.attr("data-" + k(a), b);
            return null !== c ? u(c) : w
        },
        val: function(a) {
            return a === w ? this[0] && (this[0].multiple ? y(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function(b) {
                this.value = r(this, a, b, this.value)
            })
        },
        offset: function(a) {
            if (a)
                return this.each(function(b) {
                    var c = y(this)
                      , d = r(this, a, b, c.offset())
                      , e = c.offsetParent().offset()
                      , f = {
                        top: d.top - e.top,
                        left: d.left - e.left
                    };
                    "static" == c.css("position") && (f.position = "relative"),
                    c.css(f)
                });
            if (0 == this.length)
                return null;
            var b = this[0].getBoundingClientRect();
            return {
                left: b.left + window.pageXOffset,
                top: b.top + window.pageYOffset,
                width: Math.round(b.width),
                height: Math.round(b.height)
            }
        },
        css: function(b, c) {
            if (arguments.length < 2 && "string" == typeof b)
                return this[0] && (this[0].style[X(b)] || G(this[0], "").getPropertyValue(b));
            var d = "";
            if ("string" == a(b))
                c || 0 === c ? d = k(b) + ":" + m(b, c) : this.each(function() {
                    this.style.removeProperty(k(b))
                });
            else
                for (x in b)
                    b[x] || 0 === b[x] ? d += k(x) + ":" + m(x, b[x]) + ";" : this.each(function() {
                        this.style.removeProperty(k(x))
                    });
            return this.each(function() {
                this.style.cssText += ";" + d
            })
        },
        index: function(a) {
            return a ? this.indexOf(y(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(a) {
            return A.some.call(this, function(a) {
                return this.test(t(a))
            }, l(a))
        },
        addClass: function(a) {
            return this.each(function(b) {
                z = [];
                var c = t(this)
                  , d = r(this, a, b, c);
                d.split(/\s+/g).forEach(function(a) {
                    y(this).hasClass(a) || z.push(a)
                }, this),
                z.length && t(this, c + (c ? " " : "") + z.join(" "))
            })
        },
        removeClass: function(a) {
            return this.each(function(b) {
                return a === w ? t(this, "") : (z = t(this),
                r(this, a, b, z).split(/\s+/g).forEach(function(a) {
                    z = z.replace(l(a), " ")
                }),
                t(this, z.trim()),
                void 0)
            })
        },
        toggleClass: function(a, b) {
            return this.each(function(c) {
                var d = y(this)
                  , e = r(this, a, c, t(this));
                e.split(/\s+/g).forEach(function(a) {
                    (b === w ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a)
                })
            })
        },
        scrollTop: function() {
            return this.length ? "scrollTop"in this[0] ? this[0].scrollTop : this[0].scrollY : void 0
        },
        position: function() {
            if (this.length) {
                var a = this[0]
                  , b = this.offsetParent()
                  , c = this.offset()
                  , d = K.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return c.top -= parseFloat(y(a).css("margin-top")) || 0,
                c.left -= parseFloat(y(a).css("margin-left")) || 0,
                d.top += parseFloat(y(b[0]).css("border-top-width")) || 0,
                d.left += parseFloat(y(b[0]).css("border-left-width")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || D.body; a && !K.test(a.nodeName) && "static" == y(a).css("position"); )
                    a = a.offsetParent;
                return a
            })
        }
    },
    y.fn.detach = y.fn.remove,
    ["width", "height"].forEach(function(a) {
        y.fn[a] = function(b) {
            var e, f = this[0], g = a.replace(/./, function(a) {
                return a[0].toUpperCase()
            });
            return b === w ? c(f) ? f["inner" + g] : d(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[a] : this.each(function(c) {
                f = y(this),
                f.css(a, r(this, b, c, f[a]()))
            })
        }
    }),
    M.forEach(function(b, c) {
        var d = c % 2;
        y.fn[b] = function() {
            var b, f, e = y.map(arguments, function(c) {
                return b = a(c),
                "object" == b || "array" == b || null == c ? c : W.fragment(c)
            }), g = this.length > 1;
            return e.length < 1 ? this : this.each(function(a, b) {
                f = d ? b : b.parentNode,
                b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null,
                e.forEach(function(a) {
                    if (g)
                        a = a.cloneNode(!0);
                    else if (!f)
                        return y(a).remove();
                    v(f.insertBefore(a, b), function(a) {
                        null != a.nodeName && "SCRIPT" === a.nodeName.toUpperCase() && (!a.type || "text/javascript" === a.type) && !a.src && window.eval.call(window, a.innerHTML)
                    })
                })
            })
        }
        ,
        y.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
            return y(a)[b](this),
            this
        }
    }),
    W.Z.prototype = y.fn,
    W.uniq = Y,
    W.deserializeValue = u,
    y.zepto = W,
    y
}();
window.Zepto = Zepto,
"$"in window || (window.$ = Zepto),
function(a) {
    function b(a) {
        var b = this.os = {}
          , c = this.browser = {}
          , d = a.match(/WebKit\/([\d.]+)/)
          , e = a.match(/(Android)\s+([\d.]+)/)
          , f = a.match(/(iPad).*OS\s([\d_]+)/)
          , g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/)
          , h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
          , i = h && a.match(/TouchPad/)
          , j = a.match(/Kindle\/([\d.]+)/)
          , k = a.match(/Silk\/([\d._]+)/)
          , l = a.match(/(BlackBerry).*Version\/([\d.]+)/)
          , m = a.match(/(BB10).*Version\/([\d.]+)/)
          , n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
          , o = a.match(/PlayBook/)
          , p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/)
          , q = a.match(/Firefox\/([\d.]+)/);
        (c.webkit = !!d) && (c.version = d[1]),
        e && (b.android = !0,
        b.version = e[2]),
        g && (b.ios = b.iphone = !0,
        b.version = g[2].replace(/_/g, ".")),
        f && (b.ios = b.ipad = !0,
        b.version = f[2].replace(/_/g, ".")),
        h && (b.webos = !0,
        b.version = h[2]),
        i && (b.touchpad = !0),
        l && (b.blackberry = !0,
        b.version = l[2]),
        m && (b.bb10 = !0,
        b.version = m[2]),
        n && (b.rimtabletos = !0,
        b.version = n[2]),
        o && (c.playbook = !0),
        j && (b.kindle = !0,
        b.version = j[1]),
        k && (c.silk = !0,
        c.version = k[1]),
        !k && b.android && a.match(/Kindle Fire/) && (c.silk = !0),
        p && (c.chrome = !0,
        c.version = p[1]),
        q && (c.firefox = !0,
        c.version = q[1]),
        b.tablet = !!(f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)),
        b.phone = !b.tablet && !!(e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/))
    }
    b.call(a, navigator.userAgent),
    a.__detect = b
}(Zepto),
function(a) {
    function b(a) {
        return a._zid || (a._zid = o++)
    }
    function c(a, c, f, g) {
        if (c = d(c),
        c.ns)
            var h = e(c.ns);
        return (n[b(a)] || []).filter(function(a) {
            return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
        })
    }
    function d(a) {
        var b = ("" + a).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        }
    }
    function e(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }
    function f(b, c, d) {
        "string" != a.type(b) ? a.each(b, d) : b.split(/\s/).forEach(function(a) {
            d(a, c)
        })
    }
    function g(a, b) {
        return a.del && ("focus" == a.e || "blur" == a.e) || !!b
    }
    function h(a) {
        return q[a] || a
    }
    function i(c, e, i, j, k, l) {
        var m = b(c)
          , o = n[m] || (n[m] = []);
        f(e, i, function(b, e) {
            var f = d(b);
            f.fn = e,
            f.sel = j,
            f.e in q && (e = function(b) {
                var c = b.relatedTarget;
                return !c || c !== this && !a.contains(this, c) ? f.fn.apply(this, arguments) : void 0
            }
            ),
            f.del = k && k(e, b);
            var i = f.del || e;
            f.proxy = function(a) {
                var b = i.apply(c, [a].concat(a.data));
                return b === !1 && (a.preventDefault(),
                a.stopPropagation()),
                b
            }
            ,
            f.i = o.length,
            o.push(f),
            c.addEventListener(h(f.e), f.proxy, g(f, l))
        })
    }
    function j(a, d, e, i, j) {
        var k = b(a);
        f(d || "", e, function(b, d) {
            c(a, b, d, i).forEach(function(b) {
                delete n[k][b.i],
                a.removeEventListener(h(b.e), b.proxy, g(b, j))
            })
        })
    }
    function k(b) {
        var c, d = {
            originalEvent: b
        };
        for (c in b)
            !t.test(c) && void 0 !== b[c] && (d[c] = b[c]);
        return a.each(u, function(a, c) {
            d[a] = function() {
                return this[c] = r,
                b[a].apply(b, arguments)
            }
            ,
            d[c] = s
        }),
        d
    }
    function l(a) {
        if (!("defaultPrevented"in a)) {
            a.defaultPrevented = !1;
            var b = a.preventDefault;
            a.preventDefault = function() {
                this.defaultPrevented = !0,
                b.call(this)
            }
        }
    }
    var n = (a.zepto.qsa,
    {})
      , o = 1
      , p = {}
      , q = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    p.click = p.mousedown = p.mouseup = p.mousemove = "MouseEvents",
    a.event = {
        add: i,
        remove: j
    },
    a.proxy = function(c, d) {
        if (a.isFunction(c)) {
            var e = function() {
                return c.apply(d, arguments)
            };
            return e._zid = b(c),
            e
        }
        if ("string" == typeof d)
            return a.proxy(c[d], c);
        throw new TypeError("expected function")
    }
    ,
    a.fn.bind = function(a, b) {
        return this.each(function() {
            i(this, a, b)
        })
    }
    ,
    a.fn.unbind = function(a, b) {
        return this.each(function() {
            j(this, a, b)
        })
    }
    ,
    a.fn.one = function(a, b) {
        return this.each(function(c, d) {
            i(this, a, b, null, function(a, b) {
                return function() {
                    var c = a.apply(d, arguments);
                    return j(d, b, a),
                    c
                }
            })
        })
    }
    ;
    var r = function() {
        return !0
    }
      , s = function() {
        return !1
    }
      , t = /^([A-Z]|layer[XY]$)/
      , u = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    a.fn.delegate = function(b, c, d) {
        return this.each(function(e, f) {
            i(f, c, d, b, function(c) {
                return function(d) {
                    var e, g = a(d.target).closest(b, f).get(0);
                    return g ? (e = a.extend(k(d), {
                        currentTarget: g,
                        liveFired: f
                    }),
                    c.apply(g, [e].concat([].slice.call(arguments, 1)))) : void 0
                }
            })
        })
    }
    ,
    a.fn.undelegate = function(a, b, c) {
        return this.each(function() {
            j(this, b, c, a)
        })
    }
    ,
    a.fn.live = function(b, c) {
        return a(document.body).delegate(this.selector, b, c),
        this
    }
    ,
    a.fn.die = function(b, c) {
        return a(document.body).undelegate(this.selector, b, c),
        this
    }
    ,
    a.fn.on = function(b, c, d) {
        return !c || a.isFunction(c) ? this.bind(b, c || d) : this.delegate(c, b, d)
    }
    ,
    a.fn.off = function(b, c, d) {
        return !c || a.isFunction(c) ? this.unbind(b, c || d) : this.undelegate(c, b, d)
    }
    ,
    a.fn.trigger = function(b, c) {
        return ("string" == typeof b || a.isPlainObject(b)) && (b = a.Event(b)),
        l(b),
        b.data = c,
        this.each(function() {
            "dispatchEvent"in this && this.dispatchEvent(b)
        })
    }
    ,
    a.fn.triggerHandler = function(b, d) {
        var e, f;
        return this.each(function(g, h) {
            e = k("string" == typeof b ? a.Event(b) : b),
            e.data = d,
            e.target = h,
            a.each(c(h, b.type || b), function(a, b) {
                return f = b.proxy(e),
                e.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        f
    }
    ,
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.trigger(b)
        }
    }),
    ["focus", "blur"].forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.each(function() {
                try {
                    this[b]()
                } catch (a) {}
            }),
            this
        }
    }),
    a.Event = function(a, b) {
        "string" != typeof a && (b = a,
        a = b.type);
        var c = document.createEvent(p[a] || "Events")
          , d = !0;
        if (b)
            for (var e in b)
                "bubbles" == e ? d = !!b[e] : c[e] = b[e];
        return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null),
        c.isDefaultPrevented = function() {
            return this.defaultPrevented
        }
        ,
        c
    }
}(Zepto),
function(a) {
    function b(b, c, d) {
        var e = a.Event(c);
        return a(b).trigger(e, d),
        !e.defaultPrevented
    }
    function c(a, c, d, e) {
        return a.global ? b(c || q, d, e) : void 0
    }
    function d(b) {
        b.global && 0 === a.active++ && c(b, null, "ajaxStart")
    }
    function e(b) {
        b.global && !--a.active && c(b, null, "ajaxStop")
    }
    function f(a, b) {
        var d = b.context;
        return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : (c(b, d, "ajaxSend", [a, b]),
        void 0)
    }
    function g(a, b, d) {
        var e = d.context
          , f = "success";
        d.success.call(e, a, f, b),
        c(d, e, "ajaxSuccess", [b, d, a]),
        i(f, b, d)
    }
    function h(a, b, d, e) {
        var f = e.context;
        e.error.call(f, d, b, a),
        c(e, f, "ajaxError", [d, e, a]),
        i(b, d, e)
    }
    function i(a, b, d) {
        var f = d.context;
        d.complete.call(f, b, a),
        c(d, f, "ajaxComplete", [b, d]),
        e(d)
    }
    function j() {}
    function k(a) {
        return a && (a = a.split(";", 2)[0]),
        a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
    }
    function l(a, b) {
        return (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }
    function m(b) {
        b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)),
        b.data && (!b.type || "GET" == b.type.toUpperCase()) && (b.url = l(b.url, b.data))
    }
    function n(b, c, d, e) {
        var f = !a.isFunction(c);
        return {
            url: b,
            data: f ? c : void 0,
            success: f ? a.isFunction(d) ? d : void 0 : c,
            dataType: f ? e || d : d
        }
    }
    function o(b, c, d, e) {
        var f, g = a.isArray(c);
        a.each(c, function(c, h) {
            f = a.type(h),
            e && (c = d ? e : e + "[" + (g ? "" : c) + "]"),
            !e && g ? b.add(h.name, h.value) : "array" == f || !d && "object" == f ? o(b, h, d, c) : b.add(c, h)
        })
    }
    var r, s, p = 0, q = window.document, t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, u = /^(?:text|application)\/javascript/i, v = /^(?:text|application)\/xml/i, w = "application/json", x = "text/html", y = /^\s*$/;
    a.active = 0,
    a.ajaxJSONP = function(b) {
        if ("type"in b) {
            var l, c = "jsonp" + ++p, d = q.createElement("script"), e = function() {
                clearTimeout(l),
                a(d).remove(),
                delete window[c]
            }, i = function(a) {
                e(),
                a && "timeout" != a || (window[c] = j),
                h(null, a || "abort", k, b)
            }, k = {
                abort: i
            };
            return f(k, b) === !1 ? (i("abort"),
            !1) : (window[c] = function(a) {
                e(),
                g(a, k, b)
            }
            ,
            d.onerror = function() {
                i("error")
            }
            ,
            d.src = b.url.replace(/=\?/, "=" + c),
            a("head").append(d),
            b.timeout > 0 && (l = setTimeout(function() {
                i("timeout")
            }, b.timeout)),
            k)
        }
        return a.ajax(b)
    }
    ,
    a.ajaxSettings = {
        type: "GET",
        beforeSend: j,
        success: j,
        error: j,
        complete: j,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript",
            json: w,
            xml: "application/xml, text/xml",
            html: x,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    a.ajax = function(b) {
        var c = a.extend({}, b || {});
        for (r in a.ajaxSettings)
            void 0 === c[r] && (c[r] = a.ajaxSettings[r]);
        d(c),
        c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) && RegExp.$2 != window.location.host),
        c.url || (c.url = window.location.toString()),
        m(c),
        c.cache === !1 && (c.url = l(c.url, "_=" + Date.now()));
        var e = c.dataType
          , i = /=\?/.test(c.url);
        if ("jsonp" == e || i)
            return i || (c.url = l(c.url, "callback=?")),
            a.ajaxJSONP(c);
        var t, n = c.accepts[e], o = {}, p = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol, q = c.xhr();
        c.crossDomain || (o["X-Requested-With"] = "XMLHttpRequest"),
        n && (o.Accept = n,
        n.indexOf(",") > -1 && (n = n.split(",", 2)[0]),
        q.overrideMimeType && q.overrideMimeType(n)),
        (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && (o["Content-Type"] = c.contentType || "application/x-www-form-urlencoded"),
        c.headers = a.extend(o, c.headers || {}),
        q.onreadystatechange = function() {
            if (4 == q.readyState) {
                q.onreadystatechange = j,
                clearTimeout(t);
                var b, d = !1;
                if (q.status >= 200 && q.status < 300 || 304 == q.status || 0 == q.status && "file:" == p) {
                    e = e || k(q.getResponseHeader("content-type")),
                    b = q.responseText;
                    try {
                        "script" == e ? (1,
                        eval)(b) : "xml" == e ? b = q.responseXML : "json" == e && (b = y.test(b) ? null : a.parseJSON(b))
                    } catch (f) {
                        d = f
                    }
                    d ? h(d, "parsererror", q, c) : g(b, q, c)
                } else
                    h(null, q.status ? "error" : "abort", q, c)
            }
        }
        ;
        var u = "async"in c ? c.async : !0;
        q.open(c.type, c.url, u);
        for (s in c.headers)
            q.setRequestHeader(s, c.headers[s]);
        return f(q, c) === !1 ? (q.abort(),
        !1) : (c.timeout > 0 && (t = setTimeout(function() {
            q.onreadystatechange = j,
            q.abort(),
            h(null, "timeout", q, c)
        }, c.timeout)),
        q.send(c.data ? c.data : null),
        q)
    }
    ,
    a.get = function() {
        return a.ajax(n.apply(null, arguments))
    }
    ,
    a.post = function() {
        var f = n.apply(null, arguments);
        return f.type = "POST",
        a.ajax(f)
    }
    ,
    a.getJSON = function() {
        var e = n.apply(null, arguments);
        return e.dataType = "json",
        a.ajax(e)
    }
    ,
    a.fn.load = function(b, c, d) {
        if (!this.length)
            return this;
        var g, e = this, f = b.split(/\s/), h = n(b, c, d), i = h.success;
        return f.length > 1 && (h.url = f[0],
        g = f[1]),
        h.success = function(b) {
            e.html(g ? a("<div>").html(b.replace(t, "")).find(g) : b),
            i && i.apply(e, arguments)
        }
        ,
        a.ajax(h),
        this
    }
    ;
    var z = encodeURIComponent;
    a.param = function(a, b) {
        var c = [];
        return c.add = function(a, b) {
            this.push(z(a) + "=" + z(b))
        }
        ,
        o(c, a, b),
        c.join("&").replace(/%20/g, "+")
    }
}(Zepto),
function(a) {
    a.fn.serializeArray = function() {
        var c, b = [];
        return a(Array.prototype.slice.call(this.get(0).elements)).each(function() {
            c = a(this);
            var d = c.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != d && "reset" != d && "button" != d && ("radio" != d && "checkbox" != d || this.checked) && b.push({
                name: c.attr("name"),
                value: c.val()
            })
        }),
        b
    }
    ,
    a.fn.serialize = function() {
        var a = [];
        return this.serializeArray().forEach(function(b) {
            a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
        }),
        a.join("&")
    }
    ,
    a.fn.submit = function(b) {
        if (b)
            this.bind("submit", b);
        else if (this.length) {
            var c = a.Event("submit");
            this.eq(0).trigger(c),
            c.defaultPrevented || this.get(0).submit()
        }
        return this
    }
}(Zepto),
function(a, b) {
    function c(a) {
        return d(a.replace(/([a-z])([A-Z])/, "$1-$2"))
    }
    function d(a) {
        return a.toLowerCase()
    }
    function e(a) {
        return g ? g + a : d(a)
    }
    var g, n, o, p, q, r, s, t, f = "", j = {
        Webkit: "webkit",
        Moz: "",
        O: "o",
        ms: "MS"
    }, k = window.document, l = k.createElement("div"), m = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, u = {};
    a.each(j, function(a, c) {
        return l.style[a + "TransitionProperty"] !== b ? (f = "-" + d(a) + "-",
        g = c,
        !1) : void 0
    }),
    n = f + "transform",
    u[o = f + "transition-property"] = u[p = f + "transition-duration"] = u[q = f + "transition-timing-function"] = u[r = f + "animation-name"] = u[s = f + "animation-duration"] = u[t = f + "animation-timing-function"] = "",
    a.fx = {
        off: g === b && l.style.transitionProperty === b,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: f,
        transitionEnd: e("TransitionEnd"),
        animationEnd: e("AnimationEnd")
    },
    a.fn.animate = function(b, c, d, e) {
        return a.isPlainObject(c) && (d = c.easing,
        e = c.complete,
        c = c.duration),
        c && (c = ("number" == typeof c ? c : a.fx.speeds[c] || a.fx.speeds._default) / 1e3),
        this.anim(b, c, d, e)
    }
    ,
    a.fn.anim = function(d, e, f, g) {
        var h, j, v, i = {}, k = "", l = this, w = a.fx.transitionEnd;
        if (e === b && (e = .4),
        a.fx.off && (e = 0),
        "string" == typeof d)
            i[r] = d,
            i[s] = e + "s",
            i[t] = f || "linear",
            w = a.fx.animationEnd;
        else {
            j = [];
            for (h in d)
                m.test(h) ? k += h + "(" + d[h] + ") " : (i[h] = d[h],
                j.push(c(h)));
            k && (i[n] = k,
            j.push(n)),
            e > 0 && "object" == typeof d && (i[o] = j.join(", "),
            i[p] = e + "s",
            i[q] = f || "linear")
        }
        return v = function(b) {
            if ("undefined" != typeof b) {
                if (b.target !== b.currentTarget)
                    return;
                a(b.target).unbind(w, v)
            }
            a(this).css(u),
            g && g.call(this)
        }
        ,
        e > 0 && this.bind(w, v),
        this.size() && this.get(0).clientLeft,
        this.css(i),
        0 >= e && setTimeout(function() {
            l.each(function() {
                v.call(this)
            })
        }, 0),
        this
    }
    ,
    l = null
}(Zepto),
function() {
    var a, b, c = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    b = Math.random,
    a = Math.floor,
    window.TuringType = function() {
        function d(a, b, e) {
            var f, g, h, i;
            return this.el = a,
            this.text = b,
            this.options = null != e ? e : {},
            this.type = c(this.type, this),
            this instanceof d ? ("string" == typeof this.el && (this.el = document.querySelector(this.el)),
            this.len = this.text.length,
            this.i = 0,
            i = this.options,
            f = i.accuracy,
            g = i.interval,
            this.callback = i.callback,
            this.accuracy = null != f ? f : this.accuracy,
            this.int = null != g ? g : this.int,
            (h = "textarea" === this.el.tagName.toLowerCase() || "input" === h) ? (this.attr = "value",
            this.el.focus()) : this.attr = "textContent",
            this.type(),
            void 0) : function(a, b, c) {
                c.prototype = a.prototype;
                var d = new c
                  , e = a.apply(d, b);
                return Object(e) === e ? e : d
            }(d, arguments, function() {})
        }
        return d.prototype.int = 100,
        d.prototype.accuracy = .95,
        d.prototype.keys = "qwertyuiop[]asdfghjklzxcvbnm,./;-=".split(""),
        d.prototype.type = function() {
            var c = this;
            return this.i === this.len ? "function" == typeof this.callback ? this.callback() : void 0 : b() > this.accuracy ? (this.el[this.attr] += this.keys[a(b() * this.keys.length)],
            this.timer = setTimeout(function() {
                return c.el[c.attr] = c.text.slice(0, c.i),
                c.timer = setTimeout(c.type, b() * c.int + .8 * c.int)
            }, 1.5 * this.int)) : (this.el[this.attr] += this.text[this.i++],
            this.timer = setTimeout(this.type, function() {
                var a;
                return a = b() * c.int + .1 * c.int,
                " " === c.text[c.i] && (a += b() * c.int),
                ("." === c.text[c.i] || "," === c.text[c.i]) && (a += 3 * b() * c.int),
                b() > .97 && (a += 2 * c.int),
                b() > .95 && (a += c.int),
                a
            }()))
        }
        ,
        d.prototype.pause = function() {
            return clearTimeout(this.timer),
            this.el[this.attr]
        }
        ,
        d
    }()
}
.call(this),
Zepto(function(a) {
    var b = a(document)
      , c = a(".js_tt")
      , d = c.find(".js_tt_head").add(c.find(".js_tt_list").children())
      , e = 0
      , f = 0;
    !function(b, c) {
        b.contents().filter(function() {
            return 3 == this.nodeType && a.trim(this.nodeValue).length
        }).wrap(c)
    }(d, "<span />"),
    function() {
        d.each(function(b) {
            e = b,
            d[b].childElm = a(this).children(),
            d[b].childElm.each(function(b) {
                d[e].childElm[b].texts = a(this).text(),
                a(this).text("")
            })
        }),
        e = 0
    }();
    var i = function(b) {
        a(d[b]).find("span").each(function() {
            a(this).replaceWith(a(this).text())
        })
    }
      , j = function() {
        b.trigger("tt:animated:item")
    }
      , k = function(a, b) {
        var c = d[a].childElm[b];
        f += 1,
        new TuringType(c,c.texts,{
            interval: 60,
            callback: j
        })
    }
      , l = function(a) {
        f < d[a].childElm.length ? k(a, f) : b.trigger("tt:animated:line", a)
    }
      , m = function(a) {
        a < d.length ? l(a) : b.trigger("tt:animated:allthethings", a)
    };
    b.on("tt:animated:item", function() {
        l(e)
    }),
    b.on("tt:animated:line", function() {
        f = 0,
        i(e),
        e++,
        m(e)
    }),
    b.one("tt:animated:allthethings", function() {});
    var n = function() {
        setTimeout(function() {
            a(d[0].childElm[0]).text(""),
            m(e)
        }, 500)
    };
    !function() {
        a("html").removeClass("js_wait"),
        new TuringType(d[0].childElm[0],"Hi there...",{
            interval: 75,
            callback: n
        })
    }()
});
