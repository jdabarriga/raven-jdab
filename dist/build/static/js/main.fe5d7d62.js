var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.fe5d7d62.js.LICENSE.txt */
(function () { var e = { 3361: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return oe; } });
        var r = function () { function e(e) { var t = this; this._insertTag = function (e) { var n; n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e); }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null; } var t = e.prototype; return t.hydrate = function (e) { e.forEach(this._insertTag); }, t.insert = function (e) { this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(function (e) { var t = document.createElement("style"); return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t; }(this)); var t = this.tags[this.tags.length - 1]; if (this.isSpeedy) {
            var n = function (e) { if (e.sheet)
                return e.sheet; for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t]; }(t);
            try {
                n.insertRule(e, n.cssRules.length);
            }
            catch (r) {
                0;
            }
        }
        else
            t.appendChild(document.createTextNode(e)); this.ctr++; }, t.flush = function () { this.tags.forEach((function (e) { return e.parentNode && e.parentNode.removeChild(e); })), this.tags = [], this.ctr = 0; }, e; }(), o = Math.abs, a = String.fromCharCode, i = Object.assign;
        function l(e) { return e.trim(); }
        function s(e, t, n) { return e.replace(t, n); }
        function u(e, t) { return e.indexOf(t); }
        function c(e, t) { return 0 | e.charCodeAt(t); }
        function d(e, t, n) { return e.slice(t, n); }
        function f(e) { return e.length; }
        function p(e) { return e.length; }
        function h(e, t) { return t.push(e), e; }
        var m = 1, g = 1, v = 0, y = 0, b = 0, w = "";
        function x(e, t, n, r, o, a, i) { return { value: e, root: t, parent: n, type: r, props: o, children: a, line: m, column: g, length: i, "return": "" }; }
        function S(e, t) { return i(x("", null, null, "", null, null, 0), e, { length: -e.length }, t); }
        function E() { return b = y > 0 ? c(w, --y) : 0, g--, 10 === b && (g = 1, m--), b; }
        function k() { return b = y < v ? c(w, y++) : 0, g++, 10 === b && (g = 1, m++), b; }
        function C() { return c(w, y); }
        function _() { return y; }
        function N(e, t) { return d(w, e, t); }
        function P(e) { switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32: return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125: return 4;
            case 58: return 3;
            case 34:
            case 39:
            case 40:
            case 91: return 2;
            case 41:
            case 93: return 1;
        } return 0; }
        function M(e) { return m = g = 1, v = f(w = e), y = 0, []; }
        function O(e) { return w = "", e; }
        function R(e) { return l(N(y - 1, z(91 === e ? e + 2 : 40 === e ? e + 1 : e))); }
        function T(e) { for (; (b = C()) && b < 33;)
            k(); return P(e) > 2 || P(b) > 3 ? "" : " "; }
        function A(e, t) { for (; --t && k() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97);)
            ; return N(e, _() + (t < 6 && 32 == C() && 32 == k())); }
        function z(e) { for (; k();)
            switch (b) {
                case e: return y;
                case 34:
                case 39:
                    34 !== e && 39 !== e && z(b);
                    break;
                case 40:
                    41 === e && z(e);
                    break;
                case 92: k();
            } return y; }
        function I(e, t) { for (; k() && e + b !== 57 && (e + b !== 84 || 47 !== C());)
            ; return "/*" + N(t, y - 1) + "*" + a(47 === e ? e : k()); }
        function D(e) { for (; !P(C());)
            k(); return N(e, y); }
        var L = "-ms-", B = "-moz-", j = "-webkit-", Z = "comm", F = "rule", U = "decl", V = "@keyframes";
        function W(e, t) { for (var n = "", r = p(e), o = 0; o < r; o++)
            n += t(e[o], o, e, t) || ""; return n; }
        function H(e, t, n, r) { switch (e.type) {
            case "@layer": if (e.children.length)
                break;
            case "@import":
            case U: return e["return"] = e["return"] || e.value;
            case Z: return "";
            case V: return e["return"] = e.value + "{" + W(e.children, r) + "}";
            case F: e.value = e.props.join(",");
        } return f(n = W(e.children, r)) ? e["return"] = e.value + "{" + n + "}" : ""; }
        function $(e) { return O(Y("", null, null, null, [""], e = M(e), 0, [0], e)); }
        function Y(e, t, n, r, o, i, l, d, p) { for (var m = 0, g = 0, v = l, y = 0, b = 0, w = 0, x = 1, S = 1, N = 1, P = 0, M = "", O = o, z = i, L = r, B = M; S;)
            switch (w = P, P = k()) {
                case 40: if (108 != w && 58 == c(B, v - 1)) {
                    -1 != u(B += s(R(P), "&", "&\f"), "&\f") && (N = -1);
                    break;
                }
                case 34:
                case 39:
                case 91:
                    B += R(P);
                    break;
                case 9:
                case 10:
                case 13:
                case 32:
                    B += T(w);
                    break;
                case 92:
                    B += A(_() - 1, 7);
                    continue;
                case 47:
                    switch (C()) {
                        case 42:
                        case 47:
                            h(K(I(k(), _()), t, n), p);
                            break;
                        default: B += "/";
                    }
                    break;
                case 123 * x: d[m++] = f(B) * N;
                case 125 * x:
                case 59:
                case 0:
                    switch (P) {
                        case 0:
                        case 125: S = 0;
                        case 59 + g:
                            -1 == N && (B = s(B, /\f/g, "")), b > 0 && f(B) - v && h(b > 32 ? q(B + ";", r, n, v - 1) : q(s(B, " ", "") + ";", r, n, v - 2), p);
                            break;
                        case 59: B += ";";
                        default: if (h(L = X(B, t, n, m, g, o, d, M, O = [], z = [], v), i), 123 === P)
                            if (0 === g)
                                Y(B, t, L, L, O, i, v, d, z);
                            else
                                switch (99 === y && 110 === c(B, 3) ? 100 : y) {
                                    case 100:
                                    case 108:
                                    case 109:
                                    case 115:
                                        Y(e, L, L, r && h(X(e, L, L, 0, 0, o, d, M, o, O = [], v), z), o, z, v, d, r ? O : z);
                                        break;
                                    default: Y(B, L, L, L, [""], z, 0, d, z);
                                }
                    }
                    m = g = b = 0, x = N = 1, M = B = "", v = l;
                    break;
                case 58: v = 1 + f(B), b = w;
                default:
                    if (x < 1)
                        if (123 == P)
                            --x;
                        else if (125 == P && 0 == x++ && 125 == E())
                            continue;
                    switch (B += a(P), P * x) {
                        case 38:
                            N = g > 0 ? 1 : (B += "\f", -1);
                            break;
                        case 44:
                            d[m++] = (f(B) - 1) * N, N = 1;
                            break;
                        case 64:
                            45 === C() && (B += R(k())), y = C(), g = v = f(M = B += D(_())), P++;
                            break;
                        case 45: 45 === w && 2 == f(B) && (x = 0);
                    }
            } return i; }
        function X(e, t, n, r, a, i, u, c, f, h, m) { for (var g = a - 1, v = 0 === a ? i : [""], y = p(v), b = 0, w = 0, S = 0; b < r; ++b)
            for (var E = 0, k = d(e, g + 1, g = o(w = u[b])), C = e; E < y; ++E)
                (C = l(w > 0 ? v[E] + " " + k : s(k, /&\f/g, v[E]))) && (f[S++] = C); return x(e, t, n, 0 === a ? F : c, f, h, m); }
        function K(e, t, n) { return x(e, t, n, Z, a(b), d(e, 2, -2), 0); }
        function q(e, t, n, r) { return x(e, t, n, U, d(e, 0, r), d(e, r + 1, -1), r); }
        var G = function (e, t, n) { for (var r = 0, o = 0; r = o, o = C(), 38 === r && 12 === o && (t[n] = 1), !P(o);)
            k(); return N(e, y); }, Q = function (e, t) { return O(function (e, t) { var n = -1, r = 44; do {
            switch (P(r)) {
                case 0:
                    38 === r && 12 === C() && (t[n] = 1), e[n] += G(y - 1, t, n);
                    break;
                case 2:
                    e[n] += R(r);
                    break;
                case 4: if (44 === r) {
                    e[++n] = 58 === C() ? "&\f" : "", t[n] = e[n].length;
                    break;
                }
                default: e[n] += a(r);
            }
        } while (r = k()); return e; }(M(e), t)); }, J = new WeakMap, ee = function (e) { if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type;)
                if (!(n = n.parent))
                    return;
            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || J.get(n)) && !r) {
                J.set(e, !0);
                for (var o = [], a = Q(t, o), i = n.props, l = 0, s = 0; l < a.length; l++)
                    for (var u = 0; u < i.length; u++, s++)
                        e.props[s] = o[l] ? a[l].replace(/&\f/g, i[u]) : i[u] + " " + a[l];
            }
        } }, te = function (e) { if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e["return"] = "", e.value = "");
        } };
        function ne(e, t) { switch (function (e, t) { return 45 ^ c(e, 0) ? (((t << 2 ^ c(e, 0)) << 2 ^ c(e, 1)) << 2 ^ c(e, 2)) << 2 ^ c(e, 3) : 0; }(e, t)) {
            case 5103: return j + "print-" + e + e;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829: return j + e + e;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756: return j + e + B + e + L + e + e;
            case 6828:
            case 4268: return j + e + L + e + e;
            case 6165: return j + e + L + "flex-" + e + e;
            case 5187: return j + e + s(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + L + "flex-$1$2") + e;
            case 5443: return j + e + L + "flex-item-" + s(e, /flex-|-self/, "") + e;
            case 4675: return j + e + L + "flex-line-pack" + s(e, /align-content|flex-|-self/, "") + e;
            case 5548: return j + e + L + s(e, "shrink", "negative") + e;
            case 5292: return j + e + L + s(e, "basis", "preferred-size") + e;
            case 6060: return j + "box-" + s(e, "-grow", "") + j + e + L + s(e, "grow", "positive") + e;
            case 4554: return j + s(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
            case 6187: return s(s(s(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e;
            case 5495:
            case 3959: return s(e, /(image-set\([^]*)/, j + "$1$`$1");
            case 4968: return s(s(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + L + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + e + e;
            case 4095:
            case 3583:
            case 4068:
            case 2532: return s(e, /(.+)-inline(.+)/, j + "$1$2") + e;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
                if (f(e) - 1 - t > 6)
                    switch (c(e, t + 1)) {
                        case 109: if (45 !== c(e, t + 4))
                            break;
                        case 102: return s(e, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + B + (108 == c(e, t + 3) ? "$3" : "$2-$3")) + e;
                        case 115: return ~u(e, "stretch") ? ne(s(e, "stretch", "fill-available"), t) + e : e;
                    }
                break;
            case 4949: if (115 !== c(e, t + 1))
                break;
            case 6444:
                switch (c(e, f(e) - 3 - (~u(e, "!important") && 10))) {
                    case 107: return s(e, ":", ":" + j) + e;
                    case 101: return s(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + j + (45 === c(e, 14) ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + L + "$2box$3") + e;
                }
                break;
            case 5936:
                switch (c(e, t + 11)) {
                    case 114: return j + e + L + s(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                    case 108: return j + e + L + s(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                    case 45: return j + e + L + s(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
                }
                return j + e + L + e + e;
        } return e; }
        var re = [function (e, t, n, r) { if (e.length > -1 && !e["return"])
                switch (e.type) {
                    case U:
                        e["return"] = ne(e.value, e.length);
                        break;
                    case V: return W([S(e, { value: s(e.value, "@", "@" + j) })], r);
                    case F: if (e.length)
                        return function (e, t) { return e.map(t).join(""); }(e.props, (function (t) { switch (function (e, t) { return (e = t.exec(e)) ? e[0] : e; }(t, /(::plac\w+|:read-\w+)/)) {
                            case ":read-only":
                            case ":read-write": return W([S(e, { props: [s(t, /:(read-\w+)/, ":-moz-$1")] })], r);
                            case "::placeholder": return W([S(e, { props: [s(t, /:(plac\w+)/, ":" + j + "input-$1")] }), S(e, { props: [s(t, /:(plac\w+)/, ":-moz-$1")] }), S(e, { props: [s(t, /:(plac\w+)/, L + "input-$1")] })], r);
                        } return ""; }));
                } }], oe = function (e) { var t = e.key; if ("css" === t) {
            var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(n, (function (e) { -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", "")); }));
        } var o = e.stylisPlugins || re; var a, i, l = {}, s = []; a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function (e) { for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++)
            l[t[n]] = !0; s.push(e); })); var u, c, d = [H, (c = function (e) { u.insert(e); }, function (e) { e.root || (e = e["return"]) && c(e); })], f = function (e) { var t = p(e); return function (n, r, o, a) { for (var i = "", l = 0; l < t; l++)
            i += e[l](n, r, o, a) || ""; return i; }; }([ee, te].concat(o, d)); i = function (e, t, n, r) { u = n, W($(e ? e + "{" + t.styles + "}" : t.styles), f), r && (h.inserted[t.name] = !0); }; var h = { key: t, sheet: new r({ key: t, container: a, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: l, registered: {}, insert: i }; return h.sheet.hydrate(s), h; };
    }, 9797: function (e, t, n) {
        "use strict";
        function r(e) { var t = Object.create(null); return function (n) { return void 0 === t[n] && (t[n] = e(n)), t[n]; }; }
        n.d(t, { Z: function () { return r; } });
    }, 2564: function (e, t, n) {
        "use strict";
        n.d(t, { T: function () { return l; }, w: function () { return i; } });
        var r = n(2791), o = n(3361), a = (n(9140), n(2561), r.createContext("undefined" !== typeof HTMLElement ? (0, o.Z)({ key: "css" }) : null));
        a.Provider;
        var i = function (e) { return (0, r.forwardRef)((function (t, n) { var o = (0, r.useContext)(a); return e(t, o, n); })); };
        var l = r.createContext({});
    }, 9140: function (e, t, n) {
        "use strict";
        n.d(t, { O: function () { return h; } });
        var r = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, o = n(9797), a = /[A-Z]|^ms/g, i = /_EMO_([^_]+?)_([^]*?)_EMO_/g, l = function (e) { return 45 === e.charCodeAt(1); }, s = function (e) { return null != e && "boolean" !== typeof e; }, u = (0, o.Z)((function (e) { return l(e) ? e : e.replace(a, "-$&").toLowerCase(); })), c = function (e, t) { switch (e) {
            case "animation":
            case "animationName": if ("string" === typeof t)
                return t.replace(i, (function (e, t, n) { return f = { name: t, styles: n, next: f }, t; }));
        } return 1 === r[e] || l(e) || "number" !== typeof t || 0 === t ? t : t + "px"; };
        function d(e, t, n) { if (null == n)
            return ""; if (void 0 !== n.__emotion_styles)
            return n; switch (typeof n) {
            case "boolean": return "";
            case "object":
                if (1 === n.anim)
                    return f = { name: n.name, styles: n.styles, next: f }, n.name;
                if (void 0 !== n.styles) {
                    var r = n.next;
                    if (void 0 !== r)
                        for (; void 0 !== r;)
                            f = { name: r.name, styles: r.styles, next: f }, r = r.next;
                    return n.styles + ";";
                }
                return function (e, t, n) { var r = ""; if (Array.isArray(n))
                    for (var o = 0; o < n.length; o++)
                        r += d(e, t, n[o]) + ";";
                else
                    for (var a in n) {
                        var i = n[a];
                        if ("object" !== typeof i)
                            null != t && void 0 !== t[i] ? r += a + "{" + t[i] + "}" : s(i) && (r += u(a) + ":" + c(a, i) + ";");
                        else if (!Array.isArray(i) || "string" !== typeof i[0] || null != t && void 0 !== t[i[0]]) {
                            var l = d(e, t, i);
                            switch (a) {
                                case "animation":
                                case "animationName":
                                    r += u(a) + ":" + l + ";";
                                    break;
                                default: r += a + "{" + l + "}";
                            }
                        }
                        else
                            for (var f = 0; f < i.length; f++)
                                s(i[f]) && (r += u(a) + ":" + c(a, i[f]) + ";");
                    } return r; }(e, t, n);
            case "function": if (void 0 !== e) {
                var o = f, a = n(e);
                return f = o, d(e, t, a);
            }
        } if (null == t)
            return n; var i = t[n]; return void 0 !== i ? i : n; }
        var f, p = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
        var h = function (e, t, n) { if (1 === e.length && "object" === typeof e[0] && null !== e[0] && void 0 !== e[0].styles)
            return e[0]; var r = !0, o = ""; f = void 0; var a = e[0]; null == a || void 0 === a.raw ? (r = !1, o += d(n, t, a)) : o += a[0]; for (var i = 1; i < e.length; i++)
            o += d(n, t, e[i]), r && (o += a[i]); p.lastIndex = 0; for (var l, s = ""; null !== (l = p.exec(o));)
            s += "-" + l[1]; var u = function (e) { for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
            t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16); switch (o) {
            case 3: n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2: n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1: n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16);
        } return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36); }(o) + s; return { name: u, styles: o, next: f }; };
    }, 2561: function (e, t, n) {
        "use strict";
        var r;
        n.d(t, { L: function () { return i; } });
        var o = n(2791), a = !!(r || (r = n.t(o, 2))).useInsertionEffect && (r || (r = n.t(o, 2))).useInsertionEffect, i = a || function (e) { return e(); };
        a || o.useLayoutEffect;
    }, 9823: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)), a = n(184);
        t.Z = (0, o["default"])((0, a.jsx)("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close");
    }, 5649: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "default", { enumerable: !0, get: function () { return r.createSvgIcon; } });
        var r = n(2642);
    }, 6532: function (e, t) {
        "use strict";
        var n, r = Symbol["for"]("react.element"), o = Symbol["for"]("react.portal"), a = Symbol["for"]("react.fragment"), i = Symbol["for"]("react.strict_mode"), l = Symbol["for"]("react.profiler"), s = Symbol["for"]("react.provider"), u = Symbol["for"]("react.context"), c = Symbol["for"]("react.server_context"), d = Symbol["for"]("react.forward_ref"), f = Symbol["for"]("react.suspense"), p = Symbol["for"]("react.suspense_list"), h = Symbol["for"]("react.memo"), m = Symbol["for"]("react.lazy"), g = Symbol["for"]("react.offscreen");
        function v(e) { if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case r: switch (e = e.type) {
                    case a:
                    case l:
                    case i:
                    case f:
                    case p: return e;
                    default: switch (e = e && e.$$typeof) {
                        case c:
                        case u:
                        case d:
                        case m:
                        case h:
                        case s: return e;
                        default: return t;
                    }
                }
                case o: return t;
            }
        } }
        n = Symbol["for"]("react.module.reference");
    }, 8457: function (e, t, n) {
        "use strict";
        n(6532);
    }, 8862: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return H; } });
        var r = n(7462), o = n(3366), a = n(721), i = n(8736), l = n(5295), s = n(7416), u = n(104);
        var c = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_SAFE_INTEGER; return Math.max(t, Math.min(e, n)); };
        function d(e) { return c(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1); }
        function f(e) { if (e.type)
            return e; if ("#" === e.charAt(0))
            return f(function (e) { e = e.slice(1); var t = new RegExp(".{1,".concat(e.length >= 6 ? 2 : 1, "}"), "g"); var n = e.match(t); return n && 1 === n[0].length && (n = n.map((function (e) { return e + e; }))), n ? "rgb".concat(4 === n.length ? "a" : "", "(").concat(n.map((function (e, t) { return t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3; })).join(", "), ")") : ""; }(e)); var t = e.indexOf("("), n = e.substring(0, t); if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n))
            throw new Error((0, a.Z)(9, e)); var r, o = e.substring(t + 1, e.length - 1); if ("color" === n) {
            if (o = o.split(" "), r = o.shift(), 4 === o.length && "/" === o[3].charAt(0) && (o[3] = o[3].slice(1)), -1 === ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(r))
                throw new Error((0, a.Z)(10, r));
        }
        else
            o = o.split(","); return o = o.map((function (e) { return parseFloat(e); })), { type: n, values: o, colorSpace: r }; }
        function p(e) { var t = e.type, n = e.colorSpace; var r = e.values; return -1 !== t.indexOf("rgb") ? r = r.map((function (e, t) { return t < 3 ? parseInt(e, 10) : e; })) : -1 !== t.indexOf("hsl") && (r[1] = "".concat(r[1], "%"), r[2] = "".concat(r[2], "%")), r = -1 !== t.indexOf("color") ? "".concat(n, " ").concat(r.join(" ")) : "".concat(r.join(", ")), "".concat(t, "(").concat(r, ")"); }
        function h(e) { var t = "hsl" === (e = f(e)).type || "hsla" === e.type ? f(function (e) { e = f(e); var t = e.values, n = t[0], r = t[1] / 100, o = t[2] / 100, a = r * Math.min(o, 1 - o), i = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + n / 30) % 12; return o - a * Math.max(Math.min(t - 3, 9 - t, 1), -1); }; var l = "rgb"; var s = [Math.round(255 * i(0)), Math.round(255 * i(8)), Math.round(255 * i(4))]; return "hsla" === e.type && (l += "a", s.push(t[3])), p({ type: l, values: s }); }(e)).values : e.values; return t = t.map((function (t) { return ("color" !== e.type && (t /= 255), t <= .03928 ? t / 12.92 : Math.pow(((t + .055) / 1.055), 2.4)); })), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3)); }
        function m(e, t) { if (e = f(e), t = d(t), -1 !== e.type.indexOf("hsl"))
            e.values[2] *= 1 - t;
        else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color"))
            for (var n_1 = 0; n_1 < 3; n_1 += 1)
                e.values[n_1] *= 1 - t; return p(e); }
        function g(e, t) { if (e = f(e), t = d(t), -1 !== e.type.indexOf("hsl"))
            e.values[2] += (100 - e.values[2]) * t;
        else if (-1 !== e.type.indexOf("rgb"))
            for (var n_2 = 0; n_2 < 3; n_2 += 1)
                e.values[n_2] += (255 - e.values[n_2]) * t;
        else if (-1 !== e.type.indexOf("color"))
            for (var n_3 = 0; n_3 < 3; n_3 += 1)
                e.values[n_3] += (1 - e.values[n_3]) * t; return p(e); }
        var v = { black: "#000", white: "#fff" }, y = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" }, b = { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", A100: "#ea80fc", A200: "#e040fb", A400: "#d500f9", A700: "#aa00ff" }, w = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", A100: "#ff8a80", A200: "#ff5252", A400: "#ff1744", A700: "#d50000" }, x = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", A100: "#ffd180", A200: "#ffab40", A400: "#ff9100", A700: "#ff6d00" }, S = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", A100: "#82b1ff", A200: "#448aff", A400: "#2979ff", A700: "#2962ff" }, E = { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", A100: "#80d8ff", A200: "#40c4ff", A400: "#00b0ff", A700: "#0091ea" }, k = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", A100: "#b9f6ca", A200: "#69f0ae", A400: "#00e676", A700: "#00c853" }, C = ["mode", "contrastThreshold", "tonalOffset"], _ = { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: v.white, "default": v.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: .04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: .08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: .38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: .12, activatedOpacity: .12 } }, N = { text: { primary: v.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", "default": "#121212" }, action: { active: v.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: .08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: .16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: .38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: .12, activatedOpacity: .24 } };
        function P(e, t, n, r) { var o = r.light || r, a = r.dark || 1.5 * r; e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : "light" === t ? e.light = g(e.main, o) : "dark" === t && (e.dark = m(e.main, a))); }
        function M(e) { var _b = e.mode, t = _b === void 0 ? "light" : _b, _d = e.contrastThreshold, n = _d === void 0 ? 3 : _d, _f = e.tonalOffset, l = _f === void 0 ? .2 : _f, s = (0, o.Z)(e, C), u = e.primary || function () { return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light") ? { main: S[200], light: S[50], dark: S[400] } : { main: S[700], light: S[400], dark: S[800] }; }(t), c = e.secondary || function () { return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light") ? { main: b[200], light: b[50], dark: b[400] } : { main: b[500], light: b[300], dark: b[700] }; }(t), d = e.error || function () { return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light") ? { main: w[500], light: w[300], dark: w[700] } : { main: w[700], light: w[400], dark: w[800] }; }(t), f = e.info || function () { return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light") ? { main: E[400], light: E[300], dark: E[700] } : { main: E[700], light: E[500], dark: E[900] }; }(t), p = e.success || function () { return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light") ? { main: k[400], light: k[300], dark: k[700] } : { main: k[800], light: k[500], dark: k[900] }; }(t), m = e.warning || function () { return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light") ? { main: x[400], light: x[300], dark: x[700] } : { main: "#ed6c02", light: x[500], dark: x[900] }; }(t); function g(e) { var t = function (e, t) { var n = h(e), r = h(t); return (Math.max(n, r) + .05) / (Math.min(n, r) + .05); }(e, N.text.primary) >= n ? N.text.primary : _.text.primary; return t; } var M = function (e) { var t = e.color, n = e.name, _b = e.mainShade, o = _b === void 0 ? 500 : _b, _d = e.lightShade, i = _d === void 0 ? 300 : _d, _f = e.darkShade, s = _f === void 0 ? 700 : _f; if (t = (0, r.Z)({}, t), !t.main && t[o] && (t.main = t[o]), !t.hasOwnProperty("main"))
            throw new Error((0, a.Z)(11, n ? " (".concat(n, ")") : "", o)); if ("string" !== typeof t.main)
            throw new Error((0, a.Z)(12, n ? " (".concat(n, ")") : "", JSON.stringify(t.main))); return P(t, "light", i, l), P(t, "dark", s, l), t.contrastText || (t.contrastText = g(t.main)), t; }, O = { dark: N, light: _ }; return (0, i.Z)((0, r.Z)({ common: (0, r.Z)({}, v), mode: t, primary: M({ color: u, name: "primary" }), secondary: M({ color: c, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: M({ color: d, name: "error" }), warning: M({ color: m, name: "warning" }), info: M({ color: f, name: "info" }), success: M({ color: p, name: "success" }), grey: y, contrastThreshold: n, getContrastText: g, augmentColor: M, tonalOffset: l }, O[t]), s); }
        var O = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
        var R = { textTransform: "uppercase" }, T = '"Roboto", "Helvetica", "Arial", sans-serif';
        function A(e, t) { var n = "function" === typeof t ? t(e) : t, _b = n.fontFamily, a = _b === void 0 ? T : _b, _d = n.fontSize, l = _d === void 0 ? 14 : _d, _f = n.fontWeightLight, s = _f === void 0 ? 300 : _f, _g = n.fontWeightRegular, u = _g === void 0 ? 400 : _g, _h = n.fontWeightMedium, c = _h === void 0 ? 500 : _h, _j = n.fontWeightBold, d = _j === void 0 ? 700 : _j, _k = n.htmlFontSize, f = _k === void 0 ? 16 : _k, p = n.allVariants, h = n.pxToRem, m = (0, o.Z)(n, O); var g = l / 14, v = h || (function (e) { return "".concat(e / f * g, "rem"); }), y = function (e, t, n, o, i) { return (0, r.Z)({ fontFamily: a, fontWeight: e, fontSize: v(t), lineHeight: n }, a === T ? { letterSpacing: "".concat((l = o / t, Math.round(1e5 * l) / 1e5), "em") } : {}, i, p); var l; }, b = { h1: y(s, 96, 1.167, -1.5), h2: y(s, 60, 1.2, -.5), h3: y(u, 48, 1.167, 0), h4: y(u, 34, 1.235, .25), h5: y(u, 24, 1.334, 0), h6: y(c, 20, 1.6, .15), subtitle1: y(u, 16, 1.75, .15), subtitle2: y(c, 14, 1.57, .1), body1: y(u, 16, 1.5, .15), body2: y(u, 14, 1.43, .15), button: y(c, 14, 1.75, .4, R), caption: y(u, 12, 1.66, .4), overline: y(u, 12, 2.66, 1, R), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }; return (0, i.Z)((0, r.Z)({ htmlFontSize: f, pxToRem: v, fontFamily: a, fontSize: l, fontWeightLight: s, fontWeightRegular: u, fontWeightMedium: c, fontWeightBold: d }, b), m, { clone: !1 }); }
        function z() { return ["".concat(arguments.length <= 0 ? void 0 : arguments[0], "px ").concat(arguments.length <= 1 ? void 0 : arguments[1], "px ").concat(arguments.length <= 2 ? void 0 : arguments[2], "px ").concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,").concat(.2, ")"), "".concat(arguments.length <= 4 ? void 0 : arguments[4], "px ").concat(arguments.length <= 5 ? void 0 : arguments[5], "px ").concat(arguments.length <= 6 ? void 0 : arguments[6], "px ").concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,").concat(.14, ")"), "".concat(arguments.length <= 8 ? void 0 : arguments[8], "px ").concat(arguments.length <= 9 ? void 0 : arguments[9], "px ").concat(arguments.length <= 10 ? void 0 : arguments[10], "px ").concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,").concat(.12, ")")].join(","); }
        var I = ["none", z(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), z(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), z(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), z(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), z(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), z(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), z(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), z(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), z(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), z(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), z(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), z(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), z(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), z(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), z(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), z(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), z(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), z(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), z(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), z(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), z(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), z(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), z(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), z(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], D = ["duration", "easing", "delay"], L = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, B = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
        function j(e) { return "".concat(Math.round(e), "ms"); }
        function Z(e) { if (!e)
            return 0; var t = e / 36; return Math.round(10 * (4 + 15 * Math.pow(t, .25) + t / 5)); }
        function F(e) { var t = (0, r.Z)({}, L, e.easing), n = (0, r.Z)({}, B, e.duration); return (0, r.Z)({ getAutoHeightDuration: Z, create: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["all"], r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; var _b = r.duration, a = _b === void 0 ? n.standard : _b, _d = r.easing, i = _d === void 0 ? t.easeInOut : _d, _f = r.delay, l = _f === void 0 ? 0 : _f; (0, o.Z)(r, D); return (Array.isArray(e) ? e : [e]).map((function (e) { return "".concat(e, " ").concat("string" === typeof a ? a : j(a), " ").concat(i, " ").concat("string" === typeof l ? l : j(l)); })).join(","); } }, e, { easing: t, duration: n }); }
        var U = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 }, V = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
        function W() {
            var _b;
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var _d = e.mixins, t = _d === void 0 ? {} : _d, _f = e.palette, n = _f === void 0 ? {} : _f, _g = e.transitions, c = _g === void 0 ? {} : _g, _h = e.typography, d = _h === void 0 ? {} : _h, f = (0, o.Z)(e, V);
            if (e.vars)
                throw new Error((0, a.Z)(18));
            var p = M(n), h = (0, l.Z)(e);
            var m = (0, i.Z)(h, { mixins: (g = h.breakpoints, v = t, (0, r.Z)({ toolbar: (_b = { minHeight: 56 }, _b[g.up("xs")] = { "@media (orientation: landscape)": { minHeight: 48 } }, _b[g.up("sm")] = { minHeight: 64 }, _b) }, v)), palette: p, shadows: I.slice(), typography: A(p, d), transitions: F(c), zIndex: (0, r.Z)({}, U) });
            var g, v;
            m = (0, i.Z)(m, f);
            for (var y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
                b[w - 1] = arguments[w];
            return m = b.reduce((function (e, t) { return (0, i.Z)(e, t); }), m), m.unstable_sxConfig = (0, r.Z)({}, s.Z, null == f ? void 0 : f.unstable_sxConfig), m.unstable_sx = function (e) { return (0, u.Z)({ sx: e, theme: this }); }, m;
        }
        var H = W();
    }, 988: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return r; } });
        var r = "$$material";
    }, 6765: function (e, t, n) {
        "use strict";
        n.d(t, { ZP: function () { return A; } });
        var r = n(7462), o = n(3366), a = n(2791), i = n(9797), l = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, s = (0, i.Z)((function (e) { return l.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91; })), u = n(2564);
        var c = function (e, t, n) { var r = e.key + "-" + t.name; !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles); }, d = n(9140), f = n(2561), p = s, h = function (e) { return "theme" !== e; }, m = function (e) { return "string" === typeof e && e.charCodeAt(0) > 96 ? p : h; }, g = function (e, t, n) { var r; if (t) {
            var o = t.shouldForwardProp;
            r = e.__emotion_forwardProp && o ? function (t) { return e.__emotion_forwardProp(t) && o(t); } : o;
        } return "function" !== typeof r && n && (r = e.__emotion_forwardProp), r; }, v = function (e) { var t = e.cache, n = e.serialized, r = e.isStringTag; return c(t, n, r), (0, f.L)((function () { return function (e, t, n) { c(e, t, n); var r = e.key + "-" + t.name; if (void 0 === e.inserted[t.name]) {
            var o = t;
            do {
                e.insert(t === o ? "." + r : "", o, e.sheet, !0), o = o.next;
            } while (void 0 !== o);
        } }(t, n, r); })), null; }, y = function e(t, n) { var o, i, l = t.__emotion_real === t, s = l && t.__emotion_base || t; void 0 !== n && (o = n.label, i = n.target); var c = g(t, n, l), f = c || m(s), p = !f("as"); return function () { var h = arguments, y = l && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : []; if (void 0 !== o && y.push("label:" + o + ";"), null == h[0] || void 0 === h[0].raw)
            y.push.apply(y, h);
        else {
            0, y.push(h[0][0]);
            for (var b = h.length, w = 1; w < b; w++)
                y.push(h[w], h[0][w]);
        } var x = (0, u.w)((function (e, t, n) { var r = p && e.as || s, o = "", l = [], h = e; if (null == e.theme) {
            for (var g in h = {}, e)
                h[g] = e[g];
            h.theme = a.useContext(u.T);
        } "string" === typeof e.className ? o = function (e, t, n) { var r = ""; return n.split(" ").forEach((function (n) { void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "; })), r; }(t.registered, l, e.className) : null != e.className && (o = e.className + " "); var b = (0, d.O)(y.concat(l), t.registered, h); o += t.key + "-" + b.name, void 0 !== i && (o += " " + i); var w = p && void 0 === c ? m(r) : f, x = {}; for (var S in e)
            p && "as" === S || w(S) && (x[S] = e[S]); return x.className = o, x.ref = n, a.createElement(a.Fragment, null, a.createElement(v, { cache: t, serialized: b, isStringTag: "string" === typeof r }), a.createElement(r, x)); })); return x.displayName = void 0 !== o ? o : "Styled(" + ("string" === typeof s ? s : s.displayName || s.name || "Component") + ")", x.defaultProps = t.defaultProps, x.__emotion_real = x, x.__emotion_base = s, x.__emotion_styles = y, x.__emotion_forwardProp = c, Object.defineProperty(x, "toString", { value: function () { return "." + i; } }), x.withComponent = function (t, o) { return e(t, (0, r.Z)({}, n, o, { shouldForwardProp: g(x, o, !0) })).apply(void 0, y); }, x; }; }.bind();
        ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function (e) { y[e] = y(e); }));
        var b = n(8736), w = n(5295), x = n(104);
        var S = ["ownerState"], E = ["variants"], k = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
        function C(e) { return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e; }
        var _ = (0, w.Z)(), N = function (e) { return e ? e.charAt(0).toLowerCase() + e.slice(1) : e; };
        function P(e) { var t = e.defaultTheme, n = e.theme, r = e.themeId; return o = n, 0 === Object.keys(o).length ? t : n[r] || n; var o; }
        function M(e) { return e ? function (t, n) { return n[e]; } : null; }
        function O(e, t) { var n = t.ownerState, a = (0, o.Z)(t, S); var i = "function" === typeof e ? e((0, r.Z)({ ownerState: n }, a)) : e; if (Array.isArray(i))
            return i.flatMap((function (e) { return O(e, (0, r.Z)({ ownerState: n }, a)); })); if (i && "object" === typeof i && Array.isArray(i.variants)) {
            var _b = i.variants, e_1 = _b === void 0 ? [] : _b;
            var t_1 = (0, o.Z)(i, E);
            return e_1.forEach((function (e) { var o = !0; "function" === typeof e.props ? o = e.props((0, r.Z)({ ownerState: n }, a)) : Object.keys(e.props).forEach((function (t) { (null == n ? void 0 : n[t]) !== e.props[t] && a[t] !== e.props[t] && (o = !1); })), o && (Array.isArray(t_1) || (t_1 = [t_1]), t_1.push("function" === typeof e.style ? e.style((0, r.Z)({ ownerState: n }, a)) : e.style)); })), t_1;
        } return i; }
        var R = n(8862);
        var T = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; var t = e.themeId, _b = e.defaultTheme, n = _b === void 0 ? _ : _b, _d = e.rootShouldForwardProp, a = _d === void 0 ? C : _d, _f = e.slotShouldForwardProp, i = _f === void 0 ? C : _f, l = function (e) { return (0, x.Z)((0, r.Z)({}, e, { theme: P((0, r.Z)({}, e, { defaultTheme: n, themeId: t })) })); }; return l.__mui_systemSx = !0, function (e) { var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; (function (e, t) { Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles)); })(e, (function (e) { return e.filter((function (e) { return !(null != e && e.__mui_systemSx); })); })); var u = s.name, c = s.slot, d = s.skipVariantsResolver, f = s.skipSx, _b = s.overridesResolver, p = _b === void 0 ? M(N(c)) : _b, h = (0, o.Z)(s, k), m = void 0 !== d ? d : c && "Root" !== c && "root" !== c || !1, g = f || !1; var v = C; "Root" === c || "root" === c ? v = a : c ? v = i : function (e) { return "string" === typeof e && e.charCodeAt(0) > 96; }(e) && (v = void 0); var w = function (e, t) { return y(e, t); }(e, (0, r.Z)({ shouldForwardProp: v, label: undefined }, h)), x = function (e) { return "function" === typeof e && e.__emotion_real !== e || (0, b.P)(e) ? function (o) { return O(e, (0, r.Z)({}, o, { theme: P({ theme: o.theme, defaultTheme: n, themeId: t }) })); } : e; }, S = function (o) { var a = x(o); for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
            s[c - 1] = arguments[c]; var d = s ? s.map(x) : []; u && p && d.push((function (e) { var o = P((0, r.Z)({}, e, { defaultTheme: n, themeId: t })); if (!o.components || !o.components[u] || !o.components[u].styleOverrides)
            return null; var a = o.components[u].styleOverrides, i = {}; return Object.entries(a).forEach((function (t) { var n = t[0], a = t[1]; i[n] = O(a, (0, r.Z)({}, e, { theme: o })); })), p(e, i); })), u && !m && d.push((function (e) { var o; var a = P((0, r.Z)({}, e, { defaultTheme: n, themeId: t })); return O({ variants: null == a || null == (o = a.components) || null == (o = o[u]) ? void 0 : o.variants }, (0, r.Z)({}, e, { theme: a })); })), g || d.push(l); var f = d.length - s.length; if (Array.isArray(o) && f > 0) {
            var e_2 = new Array(f).fill("");
            a = __spreadArray(__spreadArray([], o, true), e_2, true), a.raw = __spreadArray(__spreadArray([], o.raw, true), e_2, true);
        } var h = w.apply(void 0, __spreadArray([a], d, false)); return e.muiName && (h.muiName = e.muiName), h; }; return w.withConfig && (S.withConfig = w.withConfig), S; }; }({ themeId: n(988).Z, defaultTheme: R.Z, rootShouldForwardProp: function (e) { return C(e) && "classes" !== e; } }), A = T;
    }, 3524: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return u; } });
        var r = n(7462);
        function o(e, t) { var n = (0, r.Z)({}, t); return Object.keys(e).forEach((function (a) { if (a.toString().match(/^(components|slots)$/))
            n[a] = (0, r.Z)({}, e[a], n[a]);
        else if (a.toString().match(/^(componentsProps|slotProps)$/)) {
            var i_1 = e[a] || {}, l_1 = t[a];
            n[a] = {}, l_1 && Object.keys(l_1) ? i_1 && Object.keys(i_1) ? (n[a] = (0, r.Z)({}, l_1), Object.keys(i_1).forEach((function (e) { n[a][e] = o(i_1[e], l_1[e]); }))) : n[a] = l_1 : n[a] = i_1;
        }
        else
            void 0 === n[a] && (n[a] = e[a]); })), n; }
        function a(e) { var t = e.theme, n = e.name, r = e.props; return t && t.components && t.components[n] && t.components[n].defaultProps ? o(t.components[n].defaultProps, r) : r; }
        var i = n(3459);
        var l = n(8862), s = n(988);
        function u(e) { var t = e.props, n = e.name; return function (e) { var t = e.props, n = e.name, r = e.defaultTheme, o = e.themeId, l = (0, i.Z)(r); return o && (l = l[o] || l), a({ theme: l, name: n, props: t }); }({ props: t, name: n, defaultTheme: l.Z, themeId: s.Z }); }
    }, 4036: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return r; } });
        var r = n(6642).Z;
    }, 6189: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return b; } });
        var r = n(7462), o = n(2791), a = n(3366), i = n(3733), l = n(838), s = n(4036), u = n(3524), c = n(6765), d = n(9703), f = n(4657);
        function p(e) { return (0, f.ZP)("MuiSvgIcon", e); }
        (0, d.Z)("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
        var h = n(184);
        var m = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], g = (0, c.ZP)("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: function (e, t) { var n = e.ownerState; return [t.root, "inherit" !== n.color && t["color".concat((0, s.Z)(n.color))], t["fontSize".concat((0, s.Z)(n.fontSize))]]; } })((function (e) { var t = e.theme, n = e.ownerState; var r, o, a, i, l, s, u, c, d, f, p, h, m; return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", fill: n.hasSvgAsChild ? void 0 : "currentColor", flexShrink: 0, transition: null == (r = t.transitions) || null == (o = r.create) ? void 0 : o.call(r, "fill", { duration: null == (a = t.transitions) || null == (a = a.duration) ? void 0 : a.shorter }), fontSize: { inherit: "inherit", small: (null == (i = t.typography) || null == (l = i.pxToRem) ? void 0 : l.call(i, 20)) || "1.25rem", medium: (null == (s = t.typography) || null == (u = s.pxToRem) ? void 0 : u.call(s, 24)) || "1.5rem", large: (null == (c = t.typography) || null == (d = c.pxToRem) ? void 0 : d.call(c, 35)) || "2.1875rem" }[n.fontSize], color: null != (f = null == (p = (t.vars || t).palette) || null == (p = p[n.color]) ? void 0 : p.main) ? f : { action: null == (h = (t.vars || t).palette) || null == (h = h.action) ? void 0 : h.active, disabled: null == (m = (t.vars || t).palette) || null == (m = m.action) ? void 0 : m.disabled, inherit: void 0 }[n.color] }; })), v = o.forwardRef((function (e, t) { var n = (0, u.Z)({ props: e, name: "MuiSvgIcon" }), c = n.children, d = n.className, _b = n.color, f = _b === void 0 ? "inherit" : _b, _d = n.component, v = _d === void 0 ? "svg" : _d, _f = n.fontSize, y = _f === void 0 ? "medium" : _f, b = n.htmlColor, _g = n.inheritViewBox, w = _g === void 0 ? !1 : _g, x = n.titleAccess, _h = n.viewBox, S = _h === void 0 ? "0 0 24 24" : _h, E = (0, a.Z)(n, m), k = o.isValidElement(c) && "svg" === c.type, C = (0, r.Z)({}, n, { color: f, component: v, fontSize: y, instanceFontSize: e.fontSize, inheritViewBox: w, viewBox: S, hasSvgAsChild: k }), _ = {}; w || (_.viewBox = S); var N = (function (e) { var t = e.color, n = e.fontSize, r = e.classes, o = { root: ["root", "inherit" !== t && "color".concat((0, s.Z)(t)), "fontSize".concat((0, s.Z)(n))] }; return (0, l.Z)(o, p, r); })(C); return (0, h.jsxs)(g, (0, r.Z)({ as: v, className: (0, i.Z)(N.root, d), focusable: "false", color: b, "aria-hidden": !x || void 0, role: x ? "img" : void 0, ref: t }, _, E, k && c.props, { ownerState: C, children: [k ? c.props.children : c, x ? (0, h.jsx)("title", { children: x }) : null] })); }));
        v.muiName = "SvgIcon";
        var y = v;
        function b(e, t) { function n(n, o) { return (0, h.jsx)(y, (0, r.Z)({ "data-testid": "".concat(t, "Icon"), ref: o }, n, { children: e })); } return n.muiName = y.muiName, o.memo(o.forwardRef(n)); }
    }, 8205: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return r; } });
        var r = function (e) { var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 166; function r() {
            var _this = this;
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                o[a] = arguments[a];
            clearTimeout(t), t = setTimeout((function () { e.apply(_this, o); }), n);
        } return r.clear = function () { clearTimeout(t); }, r; };
    }, 2642: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, { capitalize: function () { return o.Z; }, createChainedFunction: function () { return a; }, createSvgIcon: function () { return i.Z; }, debounce: function () { return l.Z; }, deprecatedPropType: function () { return s; }, isMuiElement: function () { return d; }, ownerDocument: function () { return f.Z; }, ownerWindow: function () { return p.Z; }, requirePropFactory: function () { return h; }, setRef: function () { return m; }, unstable_ClassNameGenerator: function () { return C; }, unstable_useEnhancedEffect: function () { return g.Z; }, unstable_useId: function () { return b; }, unsupportedProp: function () { return w; }, useControlled: function () { return x; }, useEventCallback: function () { return S.Z; }, useForkRef: function () { return E.Z; }, useIsFocusVisible: function () { return k.Z; } });
        var r = n(4925), o = n(4036);
        var a = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; return t.reduce((function (e, t) { return null == t ? e : function () { for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o]; e.apply(this, r), t.apply(this, r); }; }), (function () { })); };
        var i = n(6189), l = n(8205);
        var s = function (e, t) { return function () { return null; }; };
        var u = n(2791), c = n.t(u, 2);
        var d = function (e, t) { var n, r; return u.isValidElement(e) && -1 !== t.indexOf(null != (n = e.type.muiName) ? n : null == (r = e.type) || null == (r = r._payload) || null == (r = r.value) ? void 0 : r.muiName); };
        var f = n(8301), p = n(4533);
        n(7462);
        var h = function (e, t) { return function () { return null; }; };
        var m = n(7576).Z;
        var g = n(162);
        var v = 0;
        var y = c["useId".toString()];
        var b = function (e) { if (void 0 !== y) {
            var t_2 = y();
            return null != e ? e : t_2;
        } return function (e) { var _b = u.useState(e), t = _b[0], n = _b[1], r = e || t; return u.useEffect((function () { null == t && (v += 1, n("mui-".concat(v))); }), [t]), r; }(e); };
        var w = function (e, t, n, r, o) { return null; };
        var x = function (e) { var t = e.controlled, n = e["default"], r = e.name, _b = e.state, o = _b === void 0 ? "value" : _b; var a = u.useRef(void 0 !== t).current, _d = u.useState(n), i = _d[0], l = _d[1]; return [a ? t : i, u.useCallback((function (e) { a || l(e); }), [])]; };
        var S = n(3765), E = n(2071), k = n(6943);
        var C = { configure: function (e) { r.Z.configure(e); } };
    }, 8301: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return r; } });
        var r = n(2530).Z;
    }, 4533: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return o; } });
        var r = n(2530);
        var o = function (e) { return (0, r.Z)(e).defaultView || window; };
    }, 162: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return r; } });
        var r = n(2060).Z;
    }, 3765: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return a; } });
        var r = n(2791), o = n(2060);
        var a = function (e) { var t = r.useRef(e); return (0, o.Z)((function () { t.current = e; })), r.useRef((function () { return (0, t.current).apply(void 0, arguments); })).current; };
    }, 2071: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return r; } });
        var r = n(3626).Z;
    }, 6943: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return p; } });
        var r = n(2791), o = n(6788);
        var a = !0, i = !1;
        var l = new o.V, s = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };
        function u(e) { e.metaKey || e.altKey || e.ctrlKey || (a = !0); }
        function c() { a = !1; }
        function d() { "hidden" === this.visibilityState && i && (a = !0); }
        function f(e) { var t = e.target; try {
            return t.matches(":focus-visible");
        }
        catch (n) { } return a || function (e) { var t = e.type, n = e.tagName; return !("INPUT" !== n || !s[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable; }(t); }
        var p = function () { var e = r.useCallback((function (e) { var t; null != e && ((t = e.ownerDocument).addEventListener("keydown", u, !0), t.addEventListener("mousedown", c, !0), t.addEventListener("pointerdown", c, !0), t.addEventListener("touchstart", c, !0), t.addEventListener("visibilitychange", d, !0)); }), []), t = r.useRef(!1); return { isFocusVisibleRef: t, onFocus: function (e) { return !!f(e) && (t.current = !0, !0); }, onBlur: function () { return !!t.current && (i = !0, l.start(100, (function () { i = !1; })), t.current = !1, !0); }, ref: e }; };
    }, 1184: function (e, t, n) {
        "use strict";
        n.d(t, { L7: function () { return l; }, VO: function () { return r; }, W8: function () { return i; }, k9: function () { return a; } });
        var r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, o = { keys: ["xs", "sm", "md", "lg", "xl"], up: function (e) { return "@media (min-width:".concat(r[e], "px)"); } };
        function a(e, t, n) { var a = e.theme || {}; if (Array.isArray(t)) {
            var e_3 = a.breakpoints || o;
            return t.reduce((function (r, o, a) { return (r[e_3.up(e_3.keys[a])] = n(t[a]), r); }), {});
        } if ("object" === typeof t) {
            var e_4 = a.breakpoints || o;
            return Object.keys(t).reduce((function (o, a) { if (-1 !== Object.keys(e_4.values || r).indexOf(a)) {
                o[e_4.up(a)] = n(t[a], a);
            }
            else {
                var e_5 = a;
                o[e_5] = t[e_5];
            } return o; }), {});
        } return n(t); }
        function i() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; var t; return (null == (t = e.keys) ? void 0 : t.reduce((function (t, n) { return (t[e.up(n)] = {}, t); }), {})) || {}; }
        function l(e, t) { return e.reduce((function (e, t) { var n = e[t]; return (!n || 0 === Object.keys(n).length) && delete e[t], e; }), t); }
    }, 5295: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return h; } });
        var r = n(7462), o = n(3366), a = n(8736);
        var i = ["values", "unit", "step"], l = function (e) { var t = Object.keys(e).map((function (t) { return ({ key: t, val: e[t] }); })) || []; return t.sort((function (e, t) { return e.val - t.val; })), t.reduce((function (e, t) {
            var _b;
            return (0, r.Z)({}, e, (_b = {}, _b[t.key] = t.val, _b));
        }), {}); };
        var s = { borderRadius: 4 };
        var u = n(5682);
        var c = n(104), d = n(7416);
        function f(e, t) {
            var _b;
            var n = this;
            if (n.vars && "function" === typeof n.getColorSchemeSelector) {
                return _b = {}, _b[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")] = t, _b;
            }
            return n.palette.mode === e ? t : {};
        }
        var p = ["breakpoints", "palette", "spacing", "shape"];
        var h = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; var _b = e.breakpoints, t = _b === void 0 ? {} : _b, _d = e.palette, n = _d === void 0 ? {} : _d, h = e.spacing, _f = e.shape, m = _f === void 0 ? {} : _f, g = (0, o.Z)(e, p), v = function (e) { var _b = e.values, t = _b === void 0 ? { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } : _b, _d = e.unit, n = _d === void 0 ? "px" : _d, _f = e.step, a = _f === void 0 ? 5 : _f, s = (0, o.Z)(e, i), u = l(t), c = Object.keys(u); function d(e) { var r = "number" === typeof t[e] ? t[e] : e; return "@media (min-width:".concat(r).concat(n, ")"); } function f(e) { var r = "number" === typeof t[e] ? t[e] : e; return "@media (max-width:".concat(r - a / 100).concat(n, ")"); } function p(e, r) { var o = c.indexOf(r); return "@media (min-width:".concat("number" === typeof t[e] ? t[e] : e).concat(n, ") and ") + "(max-width:".concat((-1 !== o && "number" === typeof t[c[o]] ? t[c[o]] : r) - a / 100).concat(n, ")"); } return (0, r.Z)({ keys: c, values: u, up: d, down: f, between: p, only: function (e) { return c.indexOf(e) + 1 < c.length ? p(e, c[c.indexOf(e) + 1]) : d(e); }, not: function (e) { var t = c.indexOf(e); return 0 === t ? d(c[1]) : t === c.length - 1 ? f(c[t]) : p(e, c[c.indexOf(e) + 1]).replace("@media", "@media not all and"); }, unit: n }, s); }(t), y = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8; if (e.mui)
            return e; var t = (0, u.hB)({ spacing: e }), n = function () { for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r]; return (0 === n.length ? [1] : n).map((function (e) { var n = t(e); return "number" === typeof n ? "".concat(n, "px") : n; })).join(" "); }; return n.mui = !0, n; }(h); var b = (0, a.Z)({ breakpoints: v, direction: "ltr", components: {}, palette: (0, r.Z)({ mode: "light" }, n), spacing: y, shape: (0, r.Z)({}, s, m) }, g); b.applyStyles = f; for (var w = arguments.length, x = new Array(w > 1 ? w - 1 : 0), S = 1; S < w; S++)
            x[S - 1] = arguments[S]; return b = x.reduce((function (e, t) { return (0, a.Z)(e, t); }), b), b.unstable_sxConfig = (0, r.Z)({}, d.Z, null == g ? void 0 : g.unstable_sxConfig), b.unstable_sx = function (e) { return (0, c.Z)({ sx: e, theme: this }); }, b; };
    }, 8247: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return o; } });
        var r = n(8736);
        var o = function (e, t) { return t ? (0, r.Z)(e, t, { clone: !1 }) : e; };
    }, 5682: function (e, t, n) {
        "use strict";
        n.d(t, { hB: function () { return h; }, eI: function () { return p; }, NA: function () { return m; }, e6: function () { return y; }, o3: function () { return b; } });
        var r = n(1184), o = n(8529), a = n(8247);
        var i = { m: "margin", p: "padding" }, l = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, s = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, u = function (e) { var t = {}; return function (n) { return (void 0 === t[n] && (t[n] = e(n)), t[n]); }; }((function (e) { if (e.length > 2) {
            if (!s[e])
                return [e];
            e = s[e];
        } var _b = e.split(""), t = _b[0], n = _b[1], r = i[t], o = l[n] || ""; return Array.isArray(o) ? o.map((function (e) { return r + e; })) : [r + o]; })), c = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], d = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], f = __spreadArray(__spreadArray([], c, true), d, true);
        function p(e, t, n, r) { var a; var i = null != (a = (0, o.DW)(e, t, !1)) ? a : n; return "number" === typeof i ? function (e) { return "string" === typeof e ? e : i * e; } : Array.isArray(i) ? function (e) { return "string" === typeof e ? e : i[e]; } : "function" === typeof i ? i : function () { }; }
        function h(e) { return p(e, "spacing", 8); }
        function m(e, t) { if ("string" === typeof t || null == t)
            return t; var n = e(Math.abs(t)); return t >= 0 ? n : "number" === typeof n ? -n : "-".concat(n); }
        function g(e, t, n, o) { if (-1 === t.indexOf(n))
            return null; var a = function (e, t) { return function (n) { return e.reduce((function (e, r) { return (e[r] = m(t, n), e); }), {}); }; }(u(n), o), i = e[n]; return (0, r.k9)(e, i, a); }
        function v(e, t) { var n = h(e.theme); return Object.keys(e).map((function (r) { return g(e, t, r, n); })).reduce(a.Z, {}); }
        function y(e) { return v(e, c); }
        function b(e) { return v(e, d); }
        function w(e) { return v(e, f); }
        y.propTypes = {}, y.filterProps = c, b.propTypes = {}, b.filterProps = d, w.propTypes = {}, w.filterProps = f;
    }, 8529: function (e, t, n) {
        "use strict";
        n.d(t, { DW: function () { return a; }, Jq: function () { return i; }, ZP: function () { return l; } });
        var r = n(6642), o = n(1184);
        function a(e, t) { var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; if (!t || "string" !== typeof t)
            return null; if (e && e.vars && n) {
            var n_4 = "vars.".concat(t).split(".").reduce((function (e, t) { return e && e[t] ? e[t] : null; }), e);
            if (null != n_4)
                return n_4;
        } return t.split(".").reduce((function (e, t) { return e && null != e[t] ? e[t] : null; }), e); }
        function i(e, t, n) { var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n; return r = "function" === typeof e ? e(n) : Array.isArray(e) ? e[n] || o : a(e, n) || o, t && (r = t(r, o, e)), r; }
        var l = function (e) { var t = e.prop, _b = e.cssProperty, n = _b === void 0 ? e.prop : _b, l = e.themeKey, s = e.transform, u = function (e) { if (null == e[t])
            return null; var u = e[t], c = a(e.theme, l) || {}; return (0, o.k9)(e, u, (function (e) {
            var _b;
            var o = i(c, s, e);
            return e === o && "string" === typeof e && (o = i(c, s, "".concat(t).concat("default" === e ? "" : (0, r.Z)(e)), e)), !1 === n ? o : (_b = {}, _b[n] = o, _b);
        })); }; return u.propTypes = {}, u.filterProps = [t], u; };
    }, 7416: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return z; } });
        var r = n(5682), o = n(8529), a = n(8247);
        var i = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; var r = t.reduce((function (e, t) { return (t.filterProps.forEach((function (n) { e[n] = t; })), e); }), {}), o = function (e) { return Object.keys(e).reduce((function (t, n) { return r[n] ? (0, a.Z)(t, r[n](e)) : t; }), {}); }; return o.propTypes = {}, o.filterProps = t.reduce((function (e, t) { return e.concat(t.filterProps); }), []), o; };
        var l = n(1184);
        function s(e) { return "number" !== typeof e ? e : "".concat(e, "px solid"); }
        function u(e, t) { return (0, o.ZP)({ prop: e, themeKey: "borders", transform: t }); }
        var c = u("border", s), d = u("borderTop", s), f = u("borderRight", s), p = u("borderBottom", s), h = u("borderLeft", s), m = u("borderColor"), g = u("borderTopColor"), v = u("borderRightColor"), y = u("borderBottomColor"), b = u("borderLeftColor"), w = u("outline", s), x = u("outlineColor"), S = function (e) { if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            var t_3 = (0, r.eI)(e.theme, "shape.borderRadius", 4, "borderRadius"), n_5 = function (e) { return ({ borderRadius: (0, r.NA)(t_3, e) }); };
            return (0, l.k9)(e, e.borderRadius, n_5);
        } return null; };
        S.propTypes = {}, S.filterProps = ["borderRadius"];
        i(c, d, f, p, h, m, g, v, y, b, S, w, x);
        var E = function (e) { if (void 0 !== e.gap && null !== e.gap) {
            var t_4 = (0, r.eI)(e.theme, "spacing", 8, "gap"), n_6 = function (e) { return ({ gap: (0, r.NA)(t_4, e) }); };
            return (0, l.k9)(e, e.gap, n_6);
        } return null; };
        E.propTypes = {}, E.filterProps = ["gap"];
        var k = function (e) { if (void 0 !== e.columnGap && null !== e.columnGap) {
            var t_5 = (0, r.eI)(e.theme, "spacing", 8, "columnGap"), n_7 = function (e) { return ({ columnGap: (0, r.NA)(t_5, e) }); };
            return (0, l.k9)(e, e.columnGap, n_7);
        } return null; };
        k.propTypes = {}, k.filterProps = ["columnGap"];
        var C = function (e) { if (void 0 !== e.rowGap && null !== e.rowGap) {
            var t_6 = (0, r.eI)(e.theme, "spacing", 8, "rowGap"), n_8 = function (e) { return ({ rowGap: (0, r.NA)(t_6, e) }); };
            return (0, l.k9)(e, e.rowGap, n_8);
        } return null; };
        C.propTypes = {}, C.filterProps = ["rowGap"];
        i(E, k, C, (0, o.ZP)({ prop: "gridColumn" }), (0, o.ZP)({ prop: "gridRow" }), (0, o.ZP)({ prop: "gridAutoFlow" }), (0, o.ZP)({ prop: "gridAutoColumns" }), (0, o.ZP)({ prop: "gridAutoRows" }), (0, o.ZP)({ prop: "gridTemplateColumns" }), (0, o.ZP)({ prop: "gridTemplateRows" }), (0, o.ZP)({ prop: "gridTemplateAreas" }), (0, o.ZP)({ prop: "gridArea" }));
        function _(e, t) { return "grey" === t ? t : e; }
        i((0, o.ZP)({ prop: "color", themeKey: "palette", transform: _ }), (0, o.ZP)({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: _ }), (0, o.ZP)({ prop: "backgroundColor", themeKey: "palette", transform: _ }));
        function N(e) { return e <= 1 && 0 !== e ? "".concat(100 * e, "%") : e; }
        var P = (0, o.ZP)({ prop: "width", transform: N }), M = function (e) { if (void 0 !== e.maxWidth && null !== e.maxWidth) {
            var t_7 = function (t) { var n, r; var o = (null == (n = e.theme) || null == (n = n.breakpoints) || null == (n = n.values) ? void 0 : n[t]) || l.VO[t]; return o ? "px" !== (null == (r = e.theme) || null == (r = r.breakpoints) ? void 0 : r.unit) ? { maxWidth: "".concat(o).concat(e.theme.breakpoints.unit) } : { maxWidth: o } : { maxWidth: N(t) }; };
            return (0, l.k9)(e, e.maxWidth, t_7);
        } return null; };
        M.filterProps = ["maxWidth"];
        var O = (0, o.ZP)({ prop: "minWidth", transform: N }), R = (0, o.ZP)({ prop: "height", transform: N }), T = (0, o.ZP)({ prop: "maxHeight", transform: N }), A = (0, o.ZP)({ prop: "minHeight", transform: N }), z = ((0, o.ZP)({ prop: "size", cssProperty: "width", transform: N }), (0, o.ZP)({ prop: "size", cssProperty: "height", transform: N }), i(P, M, O, R, T, A, (0, o.ZP)({ prop: "boxSizing" })), { border: { themeKey: "borders", transform: s }, borderTop: { themeKey: "borders", transform: s }, borderRight: { themeKey: "borders", transform: s }, borderBottom: { themeKey: "borders", transform: s }, borderLeft: { themeKey: "borders", transform: s }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: s }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: S }, color: { themeKey: "palette", transform: _ }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: _ }, backgroundColor: { themeKey: "palette", transform: _ }, p: { style: r.o3 }, pt: { style: r.o3 }, pr: { style: r.o3 }, pb: { style: r.o3 }, pl: { style: r.o3 }, px: { style: r.o3 }, py: { style: r.o3 }, padding: { style: r.o3 }, paddingTop: { style: r.o3 }, paddingRight: { style: r.o3 }, paddingBottom: { style: r.o3 }, paddingLeft: { style: r.o3 }, paddingX: { style: r.o3 }, paddingY: { style: r.o3 }, paddingInline: { style: r.o3 }, paddingInlineStart: { style: r.o3 }, paddingInlineEnd: { style: r.o3 }, paddingBlock: { style: r.o3 }, paddingBlockStart: { style: r.o3 }, paddingBlockEnd: { style: r.o3 }, m: { style: r.e6 }, mt: { style: r.e6 }, mr: { style: r.e6 }, mb: { style: r.e6 }, ml: { style: r.e6 }, mx: { style: r.e6 }, my: { style: r.e6 }, margin: { style: r.e6 }, marginTop: { style: r.e6 }, marginRight: { style: r.e6 }, marginBottom: { style: r.e6 }, marginLeft: { style: r.e6 }, marginX: { style: r.e6 }, marginY: { style: r.e6 }, marginInline: { style: r.e6 }, marginInlineStart: { style: r.e6 }, marginInlineEnd: { style: r.e6 }, marginBlock: { style: r.e6 }, marginBlockStart: { style: r.e6 }, marginBlockEnd: { style: r.e6 }, displayPrint: { cssProperty: !1, transform: function (e) { return ({ "@media print": { display: e } }); } }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: E }, rowGap: { style: C }, columnGap: { style: k }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: N }, maxWidth: { style: M }, minWidth: { transform: N }, height: { transform: N }, maxHeight: { transform: N }, minHeight: { transform: N }, boxSizing: {}, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: !1, themeKey: "typography" } });
    }, 104: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return u; } });
        var r = n(6642), o = n(8247), a = n(8529), i = n(1184), l = n(7416);
        var s = function () { function e(e, t, n, o) {
            var _b, _d, _f;
            var l = (_b = {}, _b[e] = t, _b.theme = n, _b), s = o[e];
            if (!s)
                return _d = {}, _d[e] = t, _d;
            var _g = s.cssProperty, u = _g === void 0 ? e : _g, c = s.themeKey, d = s.transform, f = s.style;
            if (null == t)
                return null;
            if ("typography" === c && "inherit" === t)
                return _f = {}, _f[e] = t, _f;
            var p = (0, a.DW)(n, c) || {};
            if (f)
                return f(l);
            return (0, i.k9)(l, t, (function (t) {
                var _b;
                var n = (0, a.Jq)(p, d, t);
                return t === n && "string" === typeof t && (n = (0, a.Jq)(p, d, "".concat(e).concat("default" === t ? "" : (0, r.Z)(t)), t)), !1 === u ? n : (_b = {}, _b[u] = n, _b);
            }));
        } return function t(n) { var r; var _b = n || {}, a = _b.sx, _d = _b.theme, s = _d === void 0 ? {} : _d; if (!a)
            return null; var u = null != (r = s.unstable_sxConfig) ? r : l.Z; function c(n) { var r = n; if ("function" === typeof n)
            r = n(s);
        else if ("object" !== typeof n)
            return n; if (!r)
            return null; var a = (0, i.W8)(s.breakpoints), l = Object.keys(a); var c = a; return Object.keys(r).forEach((function (n) { var a = (l = r[n], d = s, "function" === typeof l ? l(d) : l); var l, d; if (null !== a && void 0 !== a)
            if ("object" === typeof a)
                if (u[n])
                    c = (0, o.Z)(c, e(n, a, s, u));
                else {
                    var e_6 = (0, i.k9)({ theme: s }, a, (function (e) {
                        var _b;
                        return (_b = {}, _b[n] = e, _b);
                    }));
                    !function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n]; var r = t.reduce((function (e, t) { return e.concat(Object.keys(t)); }), []), o = new Set(r); return t.every((function (e) { return o.size === Object.keys(e).length; })); }(e_6, a) ? c = (0, o.Z)(c, e_6) : c[n] = t({ sx: a, theme: s });
                }
            else
                c = (0, o.Z)(c, e(n, a, s, u)); })), (0, i.L7)(l, c); } return Array.isArray(a) ? a.map(c) : c(a); }; }();
        s.filterProps = ["sx"];
        var u = s;
    }, 3459: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return s; } });
        var r = n(5295), o = n(2791), a = n(2564);
        var i = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; var t = o.useContext(a.T); return t && (n = t, 0 !== Object.keys(n).length) ? t : e; var n; }, l = (0, r.Z)();
        var s = function () { return i(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l); };
    }, 4925: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return o; } });
        var r = function (e) { return e; }, o = (function () { var e = r; return { configure: function (t) { e = t; }, generate: function (t) { return e(t); }, reset: function () { e = r; } }; })();
    }, 6642: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return o; } });
        var r = n(721);
        function o(e) { if ("string" !== typeof e)
            throw new Error((0, r.Z)(7)); return e.charAt(0).toUpperCase() + e.slice(1); }
    }, 838: function (e, t, n) {
        "use strict";
        function r(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; var r = {}; return Object.keys(e).forEach((function (o) { r[o] = e[o].reduce((function (e, r) { if (r) {
            var o_1 = t(r);
            "" !== o_1 && e.push(o_1), n && n[r] && e.push(n[r]);
        } return e; }), []).join(" "); })), r; }
        n.d(t, { Z: function () { return r; } });
    }, 8736: function (e, t, n) {
        "use strict";
        n.d(t, { P: function () { return o; }, Z: function () { return i; } });
        var r = n(7462);
        function o(e) { if ("object" !== typeof e || null === e)
            return !1; var t = Object.getPrototypeOf(e); return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e); }
        function a(e) { if (!o(e))
            return e; var t = {}; return Object.keys(e).forEach((function (n) { t[n] = a(e[n]); })), t; }
        function i(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { clone: !0 }; var l = n.clone ? (0, r.Z)({}, e) : e; return o(e) && o(t) && Object.keys(t).forEach((function (r) { "__proto__" !== r && (o(t[r]) && r in e && o(e[r]) ? l[r] = i(e[r], t[r], n) : n.clone ? l[r] = o(t[r]) ? a(t[r]) : t[r] : l[r] = t[r]); })), l; }
    }, 721: function (e, t, n) {
        "use strict";
        function r(e) { var t = "https://mui.com/production-error/?code=" + e; for (var n_9 = 1; n_9 < arguments.length; n_9 += 1)
            t += "&args[]=" + encodeURIComponent(arguments[n_9]); return "Minified MUI error #" + e + "; visit " + t + " for the full message."; }
        n.d(t, { Z: function () { return r; } });
    }, 4657: function (e, t, n) {
        "use strict";
        n.d(t, { ZP: function () { return a; } });
        var r = n(4925);
        var o = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
        function a(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Mui"; var a = o[t]; return a ? "".concat(n, "-").concat(a) : "".concat(r.Z.generate(e), "-").concat(t); }
    }, 9703: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return o; } });
        var r = n(4657);
        function o(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Mui"; var o = {}; return t.forEach((function (t) { o[t] = (0, r.ZP)(e, t, n); })), o; }
    }, 2530: function (e, t, n) {
        "use strict";
        function r(e) { return e && e.ownerDocument || document; }
        n.d(t, { Z: function () { return r; } });
    }, 7576: function (e, t, n) {
        "use strict";
        function r(e, t) { "function" === typeof e ? e(t) : e && (e.current = t); }
        n.d(t, { Z: function () { return r; } });
    }, 2060: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return o; } });
        var r = n(2791);
        var o = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;
    }, 3626: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return a; } });
        var r = n(2791), o = n(7576);
        function a() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; return r.useMemo((function () { return t.every((function (e) { return null == e; })) ? null : function (e) { t.forEach((function (t) { (0, o.Z)(t, e); })); }; }), t); }
    }, 6788: function (e, t, n) {
        "use strict";
        n.d(t, { V: function () { return i; }, Z: function () { return l; } });
        var r = n(2791);
        var o = {};
        var a = [];
        var i = /** @class */ (function () {
            function i() {
                var _this = this;
                this.currentId = 0, this.clear = function () { 0 !== _this.currentId && (clearTimeout(_this.currentId), _this.currentId = 0); }, this.disposeEffect = function () { return _this.clear; };
            }
            i.create = function () { return new i; };
            i.prototype.start = function (e, t) {
                var _this = this;
                this.clear(), this.currentId = setTimeout((function () { _this.currentId = 0, t(); }), e);
            };
            return i;
        }());
        function l() { var e = function (e, t) { var n = r.useRef(o); return n.current === o && (n.current = e(t)), n; }(i.create).current; var t; return t = e.disposeEffect, r.useEffect(t, a), e; }
    }, 6173: function (e, t) {
        "use strict";
        function n(e, t, n, r) { return new (n || (n = Promise))((function (o, a) { function i(e) { try {
            s(r.next(e));
        }
        catch (e) {
            a(e);
        } } function l(e) { try {
            s(r["throw"](e));
        }
        catch (e) {
            a(e);
        } } function s(e) { var t; e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(i, l); } s((r = r.apply(e, t || [])).next()); })); }
        function r() { return p("extensions.getStats"); }
        var o = Object.freeze({ __proto__: null, dispatch: function (e, t, o) {
                var _this = this;
                return new Promise((function (a, i) { return n(_this, void 0, void 0, (function () { var n, n_11, n_10; return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, r()];
                        case 1:
                            n = _b.sent();
                            if (!n.loaded.includes(e)) return [3 /*break*/, 8];
                            if (!n.connected.includes(e)) return [3 /*break*/, 6];
                            _b.label = 2;
                        case 2:
                            _b.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, p("extensions.dispatch", { extensionId: e, event: t, data: o })];
                        case 3:
                            n_11 = _b.sent();
                            a(n_11);
                            return [3 /*break*/, 5];
                        case 4:
                            n_10 = _b.sent();
                            i(n_10);
                            return [3 /*break*/, 5];
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            !function (e, t) { e in d ? d[e].push(t) : d[e] = [t]; }(e, { method: "extensions.dispatch", data: { extensionId: e, event: t, data: o }, resolve: a, reject: i });
                            _b.label = 7;
                        case 7: return [3 /*break*/, 9];
                        case 8:
                            i({ code: "NE_EX_EXTNOTL", message: "".concat(e, " is not loaded") });
                            _b.label = 9;
                        case 9: return [2 /*return*/];
                    }
                }); })); }));
            }, broadcast: function (e, t) { return p("extensions.broadcast", { event: e, data: t }); }, getStats: r });
        function a(e, t) { return window.addEventListener(e, t), Promise.resolve({ success: !0, message: "Event listener added" }); }
        function i(e, t) { var n = new CustomEvent(e, { detail: t }); return window.dispatchEvent(n), Promise.resolve({ success: !0, message: "Message dispatched" }); }
        function l(e) { var t = window.atob(e), n = t.length, r = new Uint8Array(n); for (var o_2 = 0; o_2 < n; o_2++)
            r[o_2] = t.charCodeAt(o_2); return r.buffer; }
        var s, u = {}, c = [], d = {};
        function f() { window.NL_TOKEN && sessionStorage.setItem("NL_TOKEN", window.NL_TOKEN), s = new WebSocket("ws://".concat(window.location.hostname, ":").concat(window.NL_PORT)), function () {
            var _this = this;
            a("ready", (function () { return n(_this, void 0, void 0, (function () { var e, _b, _d, t_8; return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, h(c)];
                    case 1:
                        if (_f.sent(), !window.NL_EXTENABLED)
                            return [2 /*return*/];
                        return [4 /*yield*/, r()];
                    case 2:
                        e = _f.sent();
                        for (_b = 0, _d = e.connected; _b < _d.length; _b++) {
                            t_8 = _d[_b];
                            i("extensionReady", t_8);
                        }
                        return [2 /*return*/];
                }
            }); })); })), a("extClientConnect", (function (e) { i("extensionReady", e.detail); })), window.NL_EXTENABLED && a("extensionReady", (function (e) { return n(_this, void 0, void 0, (function () { var _b; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = e.detail in d;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, h(d[e.detail])];
                    case 1:
                        _b = (_d.sent(), delete d[e.detail]);
                        _d.label = 2;
                    case 2:
                        _b;
                        return [2 /*return*/];
                }
            }); })); }));
        }(), function () {
            var _this = this;
            s.addEventListener("message", (function (e) { var t, n, r; var o = JSON.parse(e.data); o.id && o.id in u ? ((null === (t = o.data) || void 0 === t ? void 0 : t.error) ? (u[o.id].reject(o.data.error), "NE_RT_INVTOKN" == o.data.error.code && (s.close(), document.body.innerText = "", document.write("<code>NE_RT_INVTOKN</code>: Neutralinojs application configuration prevents accepting native calls from this client."))) : (null === (n = o.data) || void 0 === n ? void 0 : n.success) && u[o.id].resolve(o.data.hasOwnProperty("returnValue") ? o.data.returnValue : o.data), delete u[o.id]) : o.event && ("openedFile" == o.event && "dataBinary" == (null === (r = null == o ? void 0 : o.data) || void 0 === r ? void 0 : r.action) && (o.data.data = l(o.data.data)), i(o.event, o.data)); })), s.addEventListener("open", (function (e) { return n(_this, void 0, void 0, (function () { return __generator(this, function (_b) {
                i("ready");
                return [2 /*return*/];
            }); })); })), s.addEventListener("close", (function (e) { return n(_this, void 0, void 0, (function () { return __generator(this, function (_b) {
                i("serverOffline", { code: "NE_CL_NSEROFF", message: "Neutralino server is offline. Try restarting the application" });
                return [2 /*return*/];
            }); })); }));
        }(); }
        function p(e, t) { return new Promise((function (n, r) { if ((null == s ? void 0 : s.readyState) != WebSocket.OPEN)
            return o = { method: e, data: t, resolve: n, reject: r }, void c.push(o); var o; var a = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (function (e) { return (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16); })), i = window.NL_TOKEN || sessionStorage.getItem("NL_TOKEN") || ""; u[a] = { resolve: n, reject: r }, s.send(JSON.stringify({ id: a, method: e, data: t, accessToken: i })); })); }
        function h(e) { return n(this, void 0, void 0, (function () { var t_9, e_8, e_7; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(e.length > 0)) return [3 /*break*/, 5];
                    t_9 = e.shift();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, p(t_9.method, t_9.data)];
                case 2:
                    e_8 = _b.sent();
                    t_9.resolve(e_8);
                    return [3 /*break*/, 4];
                case 3:
                    e_7 = _b.sent();
                    t_9.reject(e_7);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 0];
                case 5: return [2 /*return*/];
            }
        }); })); }
        function m(e, t) { return p("filesystem.writeBinaryFile", { path: e, data: g(t) }); }
        function g(e) { var t = new Uint8Array(e), n = ""; for (var _b = 0, t_10 = t; _b < t_10.length; _b++) {
            var r_1 = t_10[_b];
            n += String.fromCharCode(r_1);
        } return window.btoa(n); }
        var v, y, b = Object.freeze({ __proto__: null, createDirectory: function (e) { return p("filesystem.createDirectory", { path: e }); }, removeDirectory: function (e) { return p("filesystem.removeDirectory", { path: e }); }, writeFile: function (e, t) { return p("filesystem.writeFile", { path: e, data: t }); }, appendFile: function (e, t) { return p("filesystem.appendFile", { path: e, data: t }); }, writeBinaryFile: m, appendBinaryFile: function (e, t) { return p("filesystem.appendBinaryFile", { path: e, data: g(t) }); }, readFile: function (e, t) { return p("filesystem.readFile", Object.assign({ path: e }, t)); }, readBinaryFile: function (e, t) { return new Promise((function (n, r) { p("filesystem.readBinaryFile", Object.assign({ path: e }, t)).then((function (e) { n(l(e)); }))["catch"]((function (e) { r(e); })); })); }, openFile: function (e) { return p("filesystem.openFile", { path: e }); }, createWatcher: function (e) { return p("filesystem.createWatcher", { path: e }); }, removeWatcher: function (e) { return p("filesystem.removeWatcher", { id: e }); }, getWatchers: function () { return p("filesystem.getWatchers"); }, updateOpenedFile: function (e, t, n) { return p("filesystem.updateOpenedFile", { id: e, event: t, data: n }); }, getOpenedFileInfo: function (e) { return p("filesystem.getOpenedFileInfo", { id: e }); }, removeFile: function (e) { return p("filesystem.removeFile", { path: e }); }, readDirectory: function (e) { return p("filesystem.readDirectory", { path: e }); }, copyFile: function (e, t) { return p("filesystem.copyFile", { source: e, destination: t }); }, moveFile: function (e, t) { return p("filesystem.moveFile", { source: e, destination: t }); }, getStats: function (e) { return p("filesystem.getStats", { path: e }); } });
        function w(e, t) { return p("os.execCommand", Object.assign({ command: e }, t)); }
        !function (e) { e.WARNING = "WARNING", e.ERROR = "ERROR", e.INFO = "INFO", e.QUESTION = "QUESTION"; }(v || (v = {})), function (e) { e.OK = "OK", e.OK_CANCEL = "OK_CANCEL", e.YES_NO = "YES_NO", e.YES_NO_CANCEL = "YES_NO_CANCEL", e.RETRY_CANCEL = "RETRY_CANCEL", e.ABORT_RETRY_IGNORE = "ABORT_RETRY_IGNORE"; }(y || (y = {}));
        var x, S = Object.freeze({ __proto__: null, get Icon() { return v; }, get MessageBoxChoice() { return y; }, execCommand: w, spawnProcess: function (e, t) { return p("os.spawnProcess", { command: e, cwd: t }); }, updateSpawnedProcess: function (e, t, n) { return p("os.updateSpawnedProcess", { id: e, event: t, data: n }); }, getSpawnedProcesses: function () { return p("os.getSpawnedProcesses"); }, getEnv: function (e) { return p("os.getEnv", { key: e }); }, getEnvs: function () { return p("os.getEnvs"); }, showOpenDialog: function (e, t) { return p("os.showOpenDialog", Object.assign({ title: e }, t)); }, showFolderDialog: function (e, t) { return p("os.showFolderDialog", Object.assign({ title: e }, t)); }, showSaveDialog: function (e, t) { return p("os.showSaveDialog", Object.assign({ title: e }, t)); }, showNotification: function (e, t, n) { return p("os.showNotification", { title: e, content: t, icon: n }); }, showMessageBox: function (e, t, n, r) { return p("os.showMessageBox", { title: e, content: t, choice: n, icon: r }); }, setTray: function (e) { return p("os.setTray", e); }, open: function (e) { return p("os.open", { url: e }); }, getPath: function (e) { return p("os.getPath", { name: e }); } }), E = Object.freeze({ __proto__: null, getMemoryInfo: function () { return p("computer.getMemoryInfo"); }, getArch: function () { return p("computer.getArch"); }, getKernelInfo: function () { return p("computer.getKernelInfo"); }, getOSInfo: function () { return p("computer.getOSInfo"); }, getCPUInfo: function () { return p("computer.getCPUInfo"); }, getDisplays: function () { return p("computer.getDisplays"); }, getMousePosition: function () { return p("computer.getMousePosition"); } }), k = Object.freeze({ __proto__: null, setData: function (e, t) { return p("storage.setData", { key: e, data: t }); }, getData: function (e) { return p("storage.getData", { key: e }); }, getKeys: function () { return p("storage.getKeys"); } });
        function C(e, t) { return p("debug.log", { message: e, type: t }); }
        !function (e) { e.WARNING = "WARNING", e.ERROR = "ERROR", e.INFO = "INFO"; }(x || (x = {}));
        var _ = Object.freeze({ __proto__: null, get LoggerType() { return x; }, log: C });
        function N(e) { return p("app.exit", { code: e }); }
        var P = Object.freeze({ __proto__: null, exit: N, killProcess: function () { return p("app.killProcess"); }, restartProcess: function (e) {
                var _this = this;
                return new Promise((function (t) { return n(_this, void 0, void 0, (function () { var n; return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            n = window.NL_ARGS.reduce((function (e, t) { return (t.includes(" ") && (t = '"'.concat(t, '"')), e + " " + t); }), "");
                            (null == e ? void 0 : e.args) && (n += " " + e.args);
                            return [4 /*yield*/, w(n, { background: !0 })];
                        case 1:
                            _b.sent(), N(), t();
                            return [2 /*return*/];
                    }
                }); })); }));
            }, getConfig: function () { return p("app.getConfig"); }, broadcast: function (e, t) { return p("app.broadcast", { event: e, data: t }); } });
        var M = new WeakMap;
        function O(e, t) { return p("window.move", { x: e, y: t }); }
        function R() { return p("window.getSize"); }
        var T = Object.freeze({ __proto__: null, setTitle: function (e) { return p("window.setTitle", { title: e }); }, getTitle: function () { return p("window.getTitle"); }, maximize: function () { return p("window.maximize"); }, unmaximize: function () { return p("window.unmaximize"); }, isMaximized: function () { return p("window.isMaximized"); }, minimize: function () { return p("window.minimize"); }, setFullScreen: function () { return p("window.setFullScreen"); }, exitFullScreen: function () { return p("window.exitFullScreen"); }, isFullScreen: function () { return p("window.isFullScreen"); }, show: function () { return p("window.show"); }, hide: function () { return p("window.hide"); }, isVisible: function () { return p("window.isVisible"); }, focus: function () { return p("window.focus"); }, setIcon: function (e) { return p("window.setIcon", { icon: e }); }, move: O, center: function () { return p("window.center"); }, setDraggableRegion: function (e) { return new Promise((function (t, r) { var o = e instanceof Element ? e : document.getElementById(e); var a = 0, i = 0, l = 0, s = !1, u = performance.now(); if (!o)
                return r({ code: "NE_WD_DOMNOTF", message: "Unable to find DOM element" }); if (M.has(o))
                return r({ code: "NE_WD_ALRDREL", message: "This DOM element is already an active draggable region" }); function c(e) { return n(this, void 0, void 0, (function () { var t_11, n_12; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!s) return [3 /*break*/, 2];
                        t_11 = performance.now(), n_12 = t_11 - u;
                        if (n_12 < 5)
                            return [2 /*return*/];
                        u = t_11 - (n_12 - 5);
                        return [4 /*yield*/, O(e.screenX - a, e.screenY - i)];
                    case 1: return [2 /*return*/, void (_b.sent())];
                    case 2:
                        l = Math.sqrt(e.movementX * e.movementX + e.movementY * e.movementY), l >= 10 && (s = !0, o.setPointerCapture(e.pointerId));
                        return [2 /*return*/];
                }
            }); })); } function d(e) { 0 === e.button && (a = e.clientX, i = e.clientY, o.addEventListener("pointermove", c)); } function f(e) { o.removeEventListener("pointermove", c), o.releasePointerCapture(e.pointerId); } o.addEventListener("pointerdown", d), o.addEventListener("pointerup", f), M.set(o, { pointerdown: d, pointerup: f }), t({ success: !0, message: "Draggable region was activated" }); })); }, unsetDraggableRegion: function (e) { return new Promise((function (t, n) { var r = e instanceof Element ? e : document.getElementById(e); if (!r)
                return n({ code: "NE_WD_DOMNOTF", message: "Unable to find DOM element" }); if (!M.has(r))
                return n({ code: "NE_WD_NOTDRRE", message: "DOM element is not an active draggable region" }); var _b = M.get(r), o = _b.pointerdown, a = _b.pointerup; r.removeEventListener("pointerdown", o), r.removeEventListener("pointerup", a), M["delete"](r), t({ success: !0, message: "Draggable region was deactivated" }); })); }, setSize: function (e) {
                var _this = this;
                return new Promise((function (t, r) { return n(_this, void 0, void 0, (function () { var n; return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, R()];
                        case 1:
                            n = _b.sent();
                            p("window.setSize", e = Object.assign(Object.assign({}, n), e)).then((function (e) { t(e); }))["catch"]((function (e) { r(e); }));
                            return [2 /*return*/];
                    }
                }); })); }));
            }, getSize: R, getPosition: function () { return p("window.getPosition"); }, setAlwaysOnTop: function (e) { return p("window.setAlwaysOnTop", { onTop: e }); }, create: function (e, t) { return new Promise((function (n, r) { function o(e) { return "string" != typeof e || (e = e.trim()).includes(" ") && (e = '"'.concat(e, '"')), e; } t = Object.assign(Object.assign({}, t), { useSavedState: !1 }); var a = window.NL_ARGS.reduce((function (e, t, n) { return ((t.includes("--path=") || t.includes("--debug-mode") || t.includes("--load-dir-res") || 0 == n) && (e += " " + o(t)), e); }), ""); a += " --url=" + o(e); for (var e_9 in t)
                "processArgs" != e_9 && (a += " --window".concat(e_9.replace(/[A-Z]|^[a-z]/g, (function (e) { return "-" + e.toLowerCase(); })), "=").concat(o(t[e_9]))); t && t.processArgs && (a += " " + t.processArgs), w(a, { background: !0 }).then((function (e) { n(e); }))["catch"]((function (e) { r(e); })); })); } }), A = Object.freeze({ __proto__: null, broadcast: function (e, t) { return p("events.broadcast", { event: e, data: t }); }, on: a, off: function (e, t) { return window.removeEventListener(e, t), Promise.resolve({ success: !0, message: "Event listener removed" }); }, dispatch: i });
        var z = null;
        var I = Object.freeze({ __proto__: null, checkForUpdates: function (e) {
                var _this = this;
                return new Promise((function (t, r) { return n(_this, void 0, void 0, (function () { var n_14, _b, _d, n_13; return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            if (!e)
                                return [2 /*return*/, r({ code: "NE_RT_NATRTER", message: "Missing require parameter: url" })];
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, fetch(e)];
                        case 2:
                            n_14 = _f.sent();
                            _d = (_b = JSON).parse;
                            return [4 /*yield*/, n_14.text()];
                        case 3:
                            z = _d.apply(_b, [_f.sent()]), function (e) { return !!(e.applicationId && e.applicationId == window.NL_APPID && e.version && e.resourcesURL); }(z) ? t(z) : r({ code: "NE_UP_CUPDMER", message: "Invalid update manifest or mismatching applicationId" });
                            return [3 /*break*/, 5];
                        case 4:
                            n_13 = _f.sent();
                            r({ code: "NE_UP_CUPDERR", message: "Unable to fetch update manifest" });
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                }); })); }));
            }, install: function () {
                var _this = this;
                return new Promise((function (e, t) { return n(_this, void 0, void 0, (function () { var t_12, n_16, n_15; return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!z)
                                return [2 /*return*/, t({ code: "NE_UP_UPDNOUF", message: "No update manifest loaded" })];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, fetch(z.resourcesURL)];
                        case 2:
                            t_12 = _b.sent();
                            return [4 /*yield*/, t_12.arrayBuffer()];
                        case 3:
                            n_16 = _b.sent();
                            return [4 /*yield*/, m(window.NL_PATH + "/resources.neu", n_16)];
                        case 4:
                            _b.sent(), e({ success: !0, message: "Update installed. Restart the process to see updates" });
                            return [3 /*break*/, 6];
                        case 5:
                            n_15 = _b.sent();
                            t({ code: "NE_UP_UPDINER", message: "Update installation error" });
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                }); })); }));
            } }), D = Object.freeze({ __proto__: null, readText: function (e, t) { return p("clipboard.readText", { key: e, data: t }); }, writeText: function (e) { return p("clipboard.writeText", { data: e }); } }), L = Object.freeze({ __proto__: null, getMethods: function () { return p("custom.getMethods"); } });
        var B = !1;
        t.l2 = P, t.U3 = A, t.o2 = b, t.S1 = function () {
            var _this = this;
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e = Object.assign({ exportCustomMethods: !0 }, e), !B) {
                if (f(), window.NL_ARGS.find((function (e) { return "--neu-dev-auto-reload" == e; })) && a("neuDev_reloadApp", (function () { return n(_this, void 0, void 0, (function () { return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, C("Reloading the application...")];
                        case 1:
                            _b.sent(), location.reload();
                            return [2 /*return*/];
                    }
                }); })); })), e.exportCustomMethods && window.NL_CMETHODS && window.NL_CMETHODS.length > 0) {
                    var _loop_1 = function (e_10) {
                        Neutralino.custom[e_10] = function () {
                            var _b;
                            var t = {};
                            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                                r[o] = arguments[o];
                            for (var _d = 0, _f = r.entries(); _d < _f.length; _d++) {
                                var _g = _f[_d], e_11 = _g[0], a_1 = _g[1];
                                t = "object" != typeof a_1 || Array.isArray(a_1) || null == a_1 ? Object.assign(Object.assign({}, t), (_b = {}, _b["arg" + e_11] = a_1, _b)) : Object.assign(Object.assign({}, t), a_1);
                            }
                            return p("custom." + e_10, t);
                        };
                    };
                    for (var _b = 0, _d = window.NL_CMETHODS; _b < _d.length; _b++) {
                        var e_10 = _d[_b];
                        _loop_1(e_10);
                    }
                }
                window.NL_CVERSION = "3.13.0", window.NL_CCOMMIT = "26e9ccc7986db4fb7df7041ea7c90b3d2ed1093e", B = !0;
            }
        }, t.os = S;
    }, 2110: function (e, t, n) {
        "use strict";
        var r = n(7441), o = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, a = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, l = {};
        function s(e) { return r.isMemo(e) ? i : l[e.$$typeof] || o; }
        l[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, l[r.Memo] = i;
        var u = Object.defineProperty, c = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, h = Object.prototype;
        e.exports = function e(t, n, r) { if ("string" !== typeof n) {
            if (h) {
                var o = p(n);
                o && o !== h && e(t, o, r);
            }
            var i = c(n);
            d && (i = i.concat(d(n)));
            for (var l = s(t), m = s(n), g = 0; g < i.length; ++g) {
                var v = i[g];
                if (!a[v] && (!r || !r[v]) && (!m || !m[v]) && (!l || !l[v])) {
                    var y = f(n, v);
                    try {
                        u(t, v, y);
                    }
                    catch (b) { }
                }
            }
        } return t; };
    }, 4463: function (e, t, n) {
        "use strict";
        var r = n(2791), o = n(5296);
        function a(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
        var i = new Set, l = {};
        function s(e, t) { u(e, t), u(e + "Capture", t); }
        function u(e, t) { for (l[e] = t, e = 0; e < t.length; e++)
            i.add(t[e]); }
        var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), d = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {};
        function m(e, t, n, r, o, a, i) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i; }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { g[e] = new m(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; g[t] = new m(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { g[e] = new m(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { g[e] = new m(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { g[e] = new m(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { g[e] = new m(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1); }));
        var v = /[\-:]([a-z])/g;
        function y(e) { return e[1].toUpperCase(); }
        function b(e, t, n, r) { var o = g.hasOwnProperty(t) ? g[t] : null; (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) { if (null === t || "undefined" === typeof t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, o, r) && (n = null), r || null === o ? function (e) { return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(v, y); g[t] = new m(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(v, y); g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(v, y); g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1); })), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0); }));
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = Symbol["for"]("react.element"), S = Symbol["for"]("react.portal"), E = Symbol["for"]("react.fragment"), k = Symbol["for"]("react.strict_mode"), C = Symbol["for"]("react.profiler"), _ = Symbol["for"]("react.provider"), N = Symbol["for"]("react.context"), P = Symbol["for"]("react.forward_ref"), M = Symbol["for"]("react.suspense"), O = Symbol["for"]("react.suspense_list"), R = Symbol["for"]("react.memo"), T = Symbol["for"]("react.lazy");
        Symbol["for"]("react.scope"), Symbol["for"]("react.debug_trace_mode");
        var A = Symbol["for"]("react.offscreen");
        Symbol["for"]("react.legacy_hidden"), Symbol["for"]("react.cache"), Symbol["for"]("react.tracing_marker");
        var z = Symbol.iterator;
        function I(e) { return null === e || "object" !== typeof e ? null : "function" === typeof (e = z && e[z] || e["@@iterator"]) ? e : null; }
        var D, L = Object.assign;
        function B(e) { if (void 0 === D)
            try {
                throw Error();
            }
            catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                D = t && t[1] || "";
            } return "\n" + D + e; }
        var j = !1;
        function Z(e, t) { if (!e || j)
            return ""; j = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" === typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (u) {
                        var r = u;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (u) {
                        r = u;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (u) {
                    r = u;
                }
                e();
            }
        }
        catch (u) {
            if (u && r && "string" === typeof u.stack) {
                for (var o = u.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];)
                    l--;
                for (; 1 <= i && 0 <= l; i--, l--)
                    if (o[i] !== a[l]) {
                        if (1 !== i || 1 !== l)
                            do {
                                if (i--, 0 > --l || o[i] !== a[l]) {
                                    var s = "\n" + o[i].replace(" at new ", " at ");
                                    return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                                }
                            } while (1 <= i && 0 <= l);
                        break;
                    }
            }
        }
        finally {
            j = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? B(e) : ""; }
        function F(e) { switch (e.tag) {
            case 5: return B(e.type);
            case 16: return B("Lazy");
            case 13: return B("Suspense");
            case 19: return B("SuspenseList");
            case 0:
            case 2:
            case 15: return e = Z(e.type, !1);
            case 11: return e = Z(e.type.render, !1);
            case 1: return e = Z(e.type, !0);
            default: return "";
        } }
        function U(e) { if (null == e)
            return null; if ("function" === typeof e)
            return e.displayName || e.name || null; if ("string" === typeof e)
            return e; switch (e) {
            case E: return "Fragment";
            case S: return "Portal";
            case C: return "Profiler";
            case k: return "StrictMode";
            case M: return "Suspense";
            case O: return "SuspenseList";
        } if ("object" === typeof e)
            switch (e.$$typeof) {
                case N: return (e.displayName || "Context") + ".Consumer";
                case _: return (e._context.displayName || "Context") + ".Provider";
                case P:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case R: return null !== (t = e.displayName || null) ? t : U(e.type) || "Memo";
                case T:
                    t = e._payload, e = e._init;
                    try {
                        return U(e(t));
                    }
                    catch (n) { }
            } return null; }
        function V(e) { var t = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (t.displayName || "Context") + ".Consumer";
            case 10: return (t._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return t;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return U(t);
            case 8: return t === k ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" === typeof t)
                    return t.displayName || t.name || null;
                if ("string" === typeof t)
                    return t;
        } return null; }
        function W(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } }
        function H(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); }
        function $(e) { e._valueTracker || (e._valueTracker = function (e) { var t = H(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
            var o = n.get, a = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return o.call(this); }, set: function (e) { r = "" + e, a.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); }
        function Y(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); }
        function X(e) { if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } }
        function K(e, t) { var n = t.checked; return L({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); }
        function q(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = W(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; }
        function G(e, t) { null != (t = t.checked) && b(e, "checked", t, !1); }
        function Q(e, t) { G(e, t); var n = W(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); }
        function J(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); }
        function ee(e, t, n) { "number" === t && X(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
        var te = Array.isArray;
        function ne(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var o = 0; o < n.length; o++)
                t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
                o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + W(n), t = null, o = 0; o < e.length; o++) {
                if (e[o].value === n)
                    return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
                null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
        } }
        function re(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(a(91)); return L({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
        function oe(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(a(92));
                if (te(n)) {
                    if (1 < n.length)
                        throw Error(a(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: W(n) }; }
        function ae(e, t) { var n = W(t.value), r = W(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); }
        function ie(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); }
        function le(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } }
        function se(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; }
        var ue, ce, de = (ce = function (e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) { MSApp.execUnsafeLocalFunction((function () { return ce(e, t); })); } : ce);
        function fe(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; }
        var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) { return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"; }
        function ge(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), o = me(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
            } }
        Object.keys(pe).forEach((function (e) { he.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]; })); }));
        var ve = L({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
        function ye(e, t) { if (t) {
            if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(a(60));
                if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
                throw Error(a(62));
        } }
        function be(e, t) { if (-1 === e.indexOf("-"))
            return "string" === typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } }
        var we = null;
        function xe(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; }
        var Se = null, Ee = null, ke = null;
        function Ce(e) { if (e = wo(e)) {
            if ("function" !== typeof Se)
                throw Error(a(280));
            var t = e.stateNode;
            t && (t = So(t), Se(e.stateNode, e.type, t));
        } }
        function _e(e) { Ee ? ke ? ke.push(e) : ke = [e] : Ee = e; }
        function Ne() { if (Ee) {
            var e = Ee, t = ke;
            if (ke = Ee = null, Ce(e), t)
                for (e = 0; e < t.length; e++)
                    Ce(t[e]);
        } }
        function Pe(e, t) { return e(t); }
        function Me() { }
        var Oe = !1;
        function Re(e, t, n) { if (Oe)
            return e(t, n); Oe = !0; try {
            return Pe(e, t, n);
        }
        finally {
            Oe = !1, (null !== Ee || null !== ke) && (Me(), Ne());
        } }
        function Te(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = So(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" !== typeof n)
            throw Error(a(231, t, typeof n)); return n; }
        var Ae = !1;
        if (c)
            try {
                var ze = {};
                Object.defineProperty(ze, "passive", { get: function () { Ae = !0; } }), window.addEventListener("test", ze, ze), window.removeEventListener("test", ze, ze);
            }
            catch (ce) {
                Ae = !1;
            }
        function Ie(e, t, n, r, o, a, i, l, s) { var u = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, u);
        }
        catch (c) {
            this.onError(c);
        } }
        var De = !1, Le = null, Be = !1, je = null, Ze = { onError: function (e) { De = !0, Le = e; } };
        function Fe(e, t, n, r, o, a, i, l, s) { De = !1, Le = null, Ie.apply(Ze, arguments); }
        function Ue(e) { var t = e, n = e; if (e.alternate)
            for (; t["return"];)
                t = t["return"];
        else {
            e = t;
            do {
                0 !== (4098 & (t = e).flags) && (n = t["return"]), e = t["return"];
            } while (e);
        } return 3 === t.tag ? n : null; }
        function Ve(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t)
                return t.dehydrated;
        } return null; }
        function We(e) { if (Ue(e) !== e)
            throw Error(a(188)); }
        function He(e) { return null !== (e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = Ue(e)))
                throw Error(a(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var o = n["return"];
            if (null === o)
                break;
            var i = o.alternate;
            if (null === i) {
                if (null !== (r = o["return"])) {
                    n = r;
                    continue;
                }
                break;
            }
            if (o.child === i.child) {
                for (i = o.child; i;) {
                    if (i === n)
                        return We(o), e;
                    if (i === r)
                        return We(o), t;
                    i = i.sibling;
                }
                throw Error(a(188));
            }
            if (n["return"] !== r["return"])
                n = o, r = i;
            else {
                for (var l = !1, s = o.child; s;) {
                    if (s === n) {
                        l = !0, n = o, r = i;
                        break;
                    }
                    if (s === r) {
                        l = !0, r = o, n = i;
                        break;
                    }
                    s = s.sibling;
                }
                if (!l) {
                    for (s = i.child; s;) {
                        if (s === n) {
                            l = !0, n = i, r = o;
                            break;
                        }
                        if (s === r) {
                            l = !0, r = i, n = o;
                            break;
                        }
                        s = s.sibling;
                    }
                    if (!l)
                        throw Error(a(189));
                }
            }
            if (n.alternate !== r)
                throw Error(a(190));
        } if (3 !== n.tag)
            throw Error(a(188)); return n.stateNode.current === n ? e : t; }(e)) ? $e(e) : null; }
        function $e(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var t = $e(e);
            if (null !== t)
                return t;
            e = e.sibling;
        } return null; }
        var Ye = o.unstable_scheduleCallback, Xe = o.unstable_cancelCallback, Ke = o.unstable_shouldYield, qe = o.unstable_requestPaint, Ge = o.unstable_now, Qe = o.unstable_getCurrentPriorityLevel, Je = o.unstable_ImmediatePriority, et = o.unstable_UserBlockingPriority, tt = o.unstable_NormalPriority, nt = o.unstable_LowPriority, rt = o.unstable_IdlePriority, ot = null, at = null;
        var it = Math.clz32 ? Math.clz32 : function (e) { return e >>>= 0, 0 === e ? 32 : 31 - (lt(e) / st | 0) | 0; }, lt = Math.log, st = Math.LN2;
        var ut = 64, ct = 4194304;
        function dt(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } }
        function ft(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, o = e.suspendedLanes, a = e.pingedLanes, i = 268435455 & n; if (0 !== i) {
            var l = i & ~o;
            0 !== l ? r = dt(l) : 0 !== (a &= i) && (r = dt(a));
        }
        else
            0 !== (i = n & ~o) ? r = dt(i) : 0 !== a && (r = dt(a)); if (0 === r)
            return 0; if (0 !== t && t !== r && 0 === (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 0 !== (4194240 & a)))
            return t; if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                o = 1 << (n = 31 - it(t)), r |= e[n], t &= ~o; return r; }
        function pt(e, t) { switch (e) {
            case 1:
            case 2:
            case 4: return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return t + 5e3;
            default: return -1;
        } }
        function ht(e) { return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; }
        function mt() { var e = ut; return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e; }
        function gt(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; }
        function vt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n; }
        function yt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - it(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        } }
        var bt = 0;
        function wt(e) { return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1; }
        var xt, St, Et, kt, Ct, _t = !1, Nt = [], Pt = null, Mt = null, Ot = null, Rt = new Map, Tt = new Map, At = [], zt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function It(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Pt = null;
                break;
            case "dragenter":
            case "dragleave":
                Mt = null;
                break;
            case "mouseover":
            case "mouseout":
                Ot = null;
                break;
            case "pointerover":
            case "pointerout":
                Rt["delete"](t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": Tt["delete"](t.pointerId);
        } }
        function Dt(e, t, n, r, o, a) { return null === e || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [o] }, null !== t && (null !== (t = wo(t)) && St(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e); }
        function Lt(e) { var t = bo(e.target); if (null !== t) {
            var n = Ue(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = Ve(n)))
                        return e.blockedOn = t, void Ct(e.priority, (function () { Et(n); }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; }
        function Bt(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = wo(n)) && St(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            we = r, n.target.dispatchEvent(r), we = null, t.shift();
        } return !0; }
        function jt(e, t, n) { Bt(e) && n["delete"](t); }
        function Zt() { _t = !1, null !== Pt && Bt(Pt) && (Pt = null), null !== Mt && Bt(Mt) && (Mt = null), null !== Ot && Bt(Ot) && (Ot = null), Rt.forEach(jt), Tt.forEach(jt); }
        function Ft(e, t) { e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Zt))); }
        function Ut(e) { function t(t) { return Ft(t, e); } if (0 < Nt.length) {
            Ft(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
                var r = Nt[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== Pt && Ft(Pt, e), null !== Mt && Ft(Mt, e), null !== Ot && Ft(Ot, e), Rt.forEach(t), Tt.forEach(t), n = 0; n < At.length; n++)
            (r = At[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < At.length && null === (n = At[0]).blockedOn;)
            Lt(n), null === n.blockedOn && At.shift(); }
        var Vt = w.ReactCurrentBatchConfig, Wt = !0;
        function Ht(e, t, n, r) { var o = bt, a = Vt.transition; Vt.transition = null; try {
            bt = 1, Yt(e, t, n, r);
        }
        finally {
            bt = o, Vt.transition = a;
        } }
        function $t(e, t, n, r) { var o = bt, a = Vt.transition; Vt.transition = null; try {
            bt = 4, Yt(e, t, n, r);
        }
        finally {
            bt = o, Vt.transition = a;
        } }
        function Yt(e, t, n, r) { if (Wt) {
            var o = Kt(e, t, n, r);
            if (null === o)
                Wr(e, t, r, Xt, n), It(e, r);
            else if (function (e, t, n, r, o) { switch (t) {
                case "focusin": return Pt = Dt(Pt, e, t, n, r, o), !0;
                case "dragenter": return Mt = Dt(Mt, e, t, n, r, o), !0;
                case "mouseover": return Ot = Dt(Ot, e, t, n, r, o), !0;
                case "pointerover":
                    var a = o.pointerId;
                    return Rt.set(a, Dt(Rt.get(a) || null, e, t, n, r, o)), !0;
                case "gotpointercapture": return a = o.pointerId, Tt.set(a, Dt(Tt.get(a) || null, e, t, n, r, o)), !0;
            } return !1; }(o, e, t, n, r))
                r.stopPropagation();
            else if (It(e, r), 4 & t && -1 < zt.indexOf(e)) {
                for (; null !== o;) {
                    var a = wo(o);
                    if (null !== a && xt(a), null === (a = Kt(e, t, n, r)) && Wr(e, t, r, Xt, n), a === o)
                        break;
                    o = a;
                }
                null !== o && r.stopPropagation();
            }
            else
                Wr(e, t, r, null, n);
        } }
        var Xt = null;
        function Kt(e, t, n, r) { if (Xt = null, null !== (e = bo(e = xe(r))))
            if (null === (t = Ue(e)))
                e = null;
            else if (13 === (n = t.tag)) {
                if (null !== (e = Ve(t)))
                    return e;
                e = null;
            }
            else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null); return Xt = e, null; }
        function qt(e) { switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 4;
            case "message": switch (Qe()) {
                case Je: return 1;
                case et: return 4;
                case tt:
                case nt: return 16;
                case rt: return 536870912;
                default: return 16;
            }
            default: return 16;
        } }
        var Gt = null, Qt = null, Jt = null;
        function en() { if (Jt)
            return Jt; var e, t, n = Qt, r = n.length, o = "value" in Gt ? Gt.value : Gt.textContent, a = o.length; for (e = 0; e < r && n[e] === o[e]; e++)
            ; var i = r - e; for (t = 1; t <= i && n[r - t] === o[a - t]; t++)
            ; return Jt = o.slice(e, 1 < t ? 1 - t : void 0); }
        function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; }
        function nn() { return !0; }
        function rn() { return !1; }
        function on(e) { function t(t, n, r, o, a) { for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e)
            e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]); return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this; } return L(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn); }, persist: function () { }, isPersistent: nn }), t; }
        var an, ln, sn, un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, cn = on(un), dn = L({}, un, { view: 0, detail: 0 }), fn = on(dn), pn = L({}, dn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (an = e.screenX - sn.screenX, ln = e.screenY - sn.screenY) : ln = an = 0, sn = e), an); }, movementY: function (e) { return "movementY" in e ? e.movementY : ln; } }), hn = on(pn), mn = on(L({}, pn, { dataTransfer: 0 })), gn = on(L({}, dn, { relatedTarget: 0 })), vn = on(L({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), yn = L({}, un, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), bn = on(yn), wn = on(L({}, un, { data: 0 })), xn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Sn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, En = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function kn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e]; }
        function Cn() { return kn; }
        var _n = L({}, dn, { key: function (e) { if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cn, charCode: function (e) { return "keypress" === e.type ? tn(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), Nn = on(_n), Pn = on(L({}, pn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Mn = on(L({}, dn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cn })), On = on(L({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Rn = L({}, pn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Tn = on(Rn), An = [9, 13, 27, 32], zn = c && "CompositionEvent" in window, In = null;
        c && "documentMode" in document && (In = document.documentMode);
        var Dn = c && "TextEvent" in window && !In, Ln = c && (!zn || In && 8 < In && 11 >= In), Bn = String.fromCharCode(32), jn = !1;
        function Zn(e, t) { switch (e) {
            case "keyup": return -1 !== An.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } }
        function Fn(e) { return "object" === typeof (e = e.detail) && "data" in e ? e.data : null; }
        var Un = !1;
        var Vn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        function Wn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Vn[e.type] : "textarea" === t; }
        function Hn(e, t, n, r) { _e(r), 0 < (t = $r(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
        var $n = null, Yn = null;
        function Xn(e) { Br(e, 0); }
        function Kn(e) { if (Y(xo(e)))
            return e; }
        function qn(e, t) { if ("change" === e)
            return t; }
        var Gn = !1;
        if (c) {
            var Qn;
            if (c) {
                var Jn = "oninput" in document;
                if (!Jn) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput;
                }
                Qn = Jn;
            }
            else
                Qn = !1;
            Gn = Qn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() { $n && ($n.detachEvent("onpropertychange", nr), Yn = $n = null); }
        function nr(e) { if ("value" === e.propertyName && Kn(Yn)) {
            var t = [];
            Hn(t, Yn, e, xe(e)), Re(Xn, t);
        } }
        function rr(e, t, n) { "focusin" === e ? (tr(), Yn = n, ($n = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr(); }
        function or(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(Yn); }
        function ar(e, t) { if ("click" === e)
            return Kn(t); }
        function ir(e, t) { if ("input" === e || "change" === e)
            return Kn(t); }
        var lr = "function" === typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t; };
        function sr(e, t) { if (lr(e, t))
            return !0; if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !lr(e[o], t[o]))
                return !1;
        } return !0; }
        function ur(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; }
        function cr(e, t) { var n, r = ur(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = ur(r);
        } }
        function dr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); }
        function fr() { for (var e = window, t = X(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" === typeof t.contentWindow.location.href;
            }
            catch (r) {
                n = !1;
            }
            if (!n)
                break;
            t = X((e = t.contentWindow).document);
        } return t; }
        function pr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); }
        function hr(e) { var t = fr(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n)
                    n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, a = Math.min(r.start, o);
                    r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = cr(n, a);
                    var i = cr(n, r);
                    o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
                }
            for (t = [], e = n; e = e.parentNode;)
                1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } }
        var mr = c && "documentMode" in document && 11 >= document.documentMode, gr = null, vr = null, yr = null, br = !1;
        function wr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; br || null == gr || gr !== X(r) || ("selectionStart" in (r = gr) && pr(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : r = { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, yr && sr(yr, r) || (yr = r, 0 < (r = $r(vr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gr))); }
        function xr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
        var Sr = { animationend: xr("Animation", "AnimationEnd"), animationiteration: xr("Animation", "AnimationIteration"), animationstart: xr("Animation", "AnimationStart"), transitionend: xr("Transition", "TransitionEnd") }, Er = {}, kr = {};
        function Cr(e) { if (Er[e])
            return Er[e]; if (!Sr[e])
            return e; var t, n = Sr[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in kr)
                return Er[e] = n[t]; return e; }
        c && (kr = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
        var _r = Cr("animationend"), Nr = Cr("animationiteration"), Pr = Cr("animationstart"), Mr = Cr("transitionend"), Or = new Map, Rr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function Tr(e, t) { Or.set(e, t), s(t, [e]); }
        for (var Ar = 0; Ar < Rr.length; Ar++) {
            var zr = Rr[Ar];
            Tr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Tr(_r, "onAnimationEnd"), Tr(Nr, "onAnimationIteration"), Tr(Pr, "onAnimationStart"), Tr("dblclick", "onDoubleClick"), Tr("focusin", "onFocus"), Tr("focusout", "onBlur"), Tr(Mr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
        function Lr(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, o, i, l, s, u) { if (Fe.apply(this, arguments), De) {
            if (!De)
                throw Error(a(198));
            var c = Le;
            De = !1, Le = null, Be || (Be = !0, je = c);
        } }(r, t, void 0, e), e.currentTarget = null; }
        function Br(e, t) { t = 0 !== (4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var a = void 0;
                if (t)
                    for (var i = r.length - 1; 0 <= i; i--) {
                        var l = r[i], s = l.instance, u = l.currentTarget;
                        if (l = l.listener, s !== a && o.isPropagationStopped())
                            break e;
                        Lr(o, l, u), a = s;
                    }
                else
                    for (i = 0; i < r.length; i++) {
                        if (s = (l = r[i]).instance, u = l.currentTarget, l = l.listener, s !== a && o.isPropagationStopped())
                            break e;
                        Lr(o, l, u), a = s;
                    }
            }
        } if (Be)
            throw e = je, Be = !1, je = null, e; }
        function jr(e, t) { var n = t[go]; void 0 === n && (n = t[go] = new Set); var r = e + "__bubble"; n.has(r) || (Vr(t, e, 2, !1), n.add(r)); }
        function Zr(e, t, n) { var r = 0; t && (r |= 4), Vr(n, e, r, t); }
        var Fr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) { if (!e[Fr]) {
            e[Fr] = !0, i.forEach((function (t) { "selectionchange" !== t && (Dr.has(t) || Zr(t, !1, e), Zr(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Fr] || (t[Fr] = !0, Zr("selectionchange", !1, t));
        } }
        function Vr(e, t, n, r) { switch (qt(t)) {
            case 1:
                var o = Ht;
                break;
            case 4:
                o = $t;
                break;
            default: o = Yt;
        } n = o.bind(null, t, n, e), o = void 0, !Ae || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1); }
        function Wr(e, t, n, r, o) { var a = r; if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var i = r.tag;
                if (3 === i || 4 === i) {
                    var l = r.stateNode.containerInfo;
                    if (l === o || 8 === l.nodeType && l.parentNode === o)
                        break;
                    if (4 === i)
                        for (i = r["return"]; null !== i;) {
                            var s = i.tag;
                            if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === o || 8 === s.nodeType && s.parentNode === o))
                                return;
                            i = i["return"];
                        }
                    for (; null !== l;) {
                        if (null === (i = bo(l)))
                            return;
                        if (5 === (s = i.tag) || 6 === s) {
                            r = a = i;
                            continue e;
                        }
                        l = l.parentNode;
                    }
                }
                r = r["return"];
            } Re((function () { var r = a, o = xe(n), i = []; e: {
            var l = Or.get(e);
            if (void 0 !== l) {
                var s = cn, u = e;
                switch (e) {
                    case "keypress": if (0 === tn(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        s = Nn;
                        break;
                    case "focusin":
                        u = "focus", s = gn;
                        break;
                    case "focusout":
                        u = "blur", s = gn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        s = gn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        s = hn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        s = mn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        s = Mn;
                        break;
                    case _r:
                    case Nr:
                    case Pr:
                        s = vn;
                        break;
                    case Mr:
                        s = On;
                        break;
                    case "scroll":
                        s = fn;
                        break;
                    case "wheel":
                        s = Tn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        s = bn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": s = Pn;
                }
                var c = 0 !== (4 & t), d = !c && "scroll" === e, f = c ? null !== l ? l + "Capture" : null : l;
                c = [];
                for (var p, h = r; null !== h;) {
                    var m = (p = h).stateNode;
                    if (5 === p.tag && null !== m && (p = m, null !== f && (null != (m = Te(h, f)) && c.push(Hr(h, m, p)))), d)
                        break;
                    h = h["return"];
                }
                0 < c.length && (l = new s(l, u, null, n, o), i.push({ event: l, listeners: c }));
            }
        } if (0 === (7 & t)) {
            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !bo(u) && !u[mo]) && (s || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (u = (u = n.relatedTarget || n.toElement) ? bo(u) : null) && (u !== (d = Ue(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = r), s !== u)) {
                if (c = hn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Pn, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == s ? l : xo(s), p = null == u ? l : xo(u), (l = new c(m, h + "leave", s, n, o)).target = d, l.relatedTarget = p, m = null, bo(o) === r && ((c = new c(f, h + "enter", u, n, o)).target = p, c.relatedTarget = d, m = c), d = m, s && u)
                    e: {
                        for (f = u, h = 0, p = c = s; p; p = Yr(p))
                            h++;
                        for (p = 0, m = f; m; m = Yr(m))
                            p++;
                        for (; 0 < h - p;)
                            c = Yr(c), h--;
                        for (; 0 < p - h;)
                            f = Yr(f), p--;
                        for (; h--;) {
                            if (c === f || null !== f && c === f.alternate)
                                break e;
                            c = Yr(c), f = Yr(f);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== s && Xr(i, l, s, c, !1), null !== u && null !== d && Xr(i, d, u, c, !0);
            }
            if ("select" === (s = (l = r ? xo(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type)
                var g = qn;
            else if (Wn(l))
                if (Gn)
                    g = ir;
                else {
                    g = or;
                    var v = rr;
                }
            else
                (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (g = ar);
            switch (g && (g = g(e, r)) ? Hn(i, g, n, o) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && ee(l, "number", l.value)), v = r ? xo(r) : window, e) {
                case "focusin":
                    (Wn(v) || "true" === v.contentEditable) && (gr = v, vr = r, yr = null);
                    break;
                case "focusout":
                    yr = vr = gr = null;
                    break;
                case "mousedown":
                    br = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    br = !1, wr(i, n, o);
                    break;
                case "selectionchange": if (mr)
                    break;
                case "keydown":
                case "keyup": wr(i, n, o);
            }
            var y;
            if (zn)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                Un ? Zn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Ln && "ko" !== n.locale && (Un || "onCompositionStart" !== b ? "onCompositionEnd" === b && Un && (y = en()) : (Qt = "value" in (Gt = o) ? Gt.value : Gt.textContent, Un = !0)), 0 < (v = $r(r, b)).length && (b = new wn(b, e, null, n, o), i.push({ event: b, listeners: v }), y ? b.data = y : null !== (y = Fn(n)) && (b.data = y))), (y = Dn ? function (e, t) { switch (e) {
                case "compositionend": return Fn(t);
                case "keypress": return 32 !== t.which ? null : (jn = !0, Bn);
                case "textInput": return (e = t.data) === Bn && jn ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if (Un)
                return "compositionend" === e || !zn && Zn(e, t) ? (e = en(), Jt = Qt = Gt = null, Un = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Ln && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && (0 < (r = $r(r, "onBeforeInput")).length && (o = new wn("onBeforeInput", "beforeinput", null, n, o), i.push({ event: o, listeners: r }), o.data = y));
        } Br(i, t); })); }
        function Hr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
        function $r(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var o = e, a = o.stateNode;
            5 === o.tag && null !== a && (o = a, null != (a = Te(e, n)) && r.unshift(Hr(e, a, o)), null != (a = Te(e, t)) && r.push(Hr(e, a, o))), e = e["return"];
        } return r; }
        function Yr(e) { if (null === e)
            return null; do {
            e = e["return"];
        } while (e && 5 !== e.tag); return e || null; }
        function Xr(e, t, n, r, o) { for (var a = t._reactName, i = []; null !== n && n !== r;) {
            var l = n, s = l.alternate, u = l.stateNode;
            if (null !== s && s === r)
                break;
            5 === l.tag && null !== u && (l = u, o ? null != (s = Te(n, a)) && i.unshift(Hr(n, s, l)) : o || null != (s = Te(n, a)) && i.push(Hr(n, s, l))), n = n["return"];
        } 0 !== i.length && e.push({ event: t, listeners: i }); }
        var Kr = /\r\n?/g, qr = /\u0000|\uFFFD/g;
        function Gr(e) { return ("string" === typeof e ? e : "" + e).replace(Kr, "\n").replace(qr, ""); }
        function Qr(e, t, n) { if (t = Gr(t), Gr(e) !== t && n)
            throw Error(a(425)); }
        function Jr() { }
        var eo = null, to = null;
        function no(e, t) { return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0, oo = "function" === typeof clearTimeout ? clearTimeout : void 0, ao = "function" === typeof Promise ? Promise : void 0, io = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ao ? function (e) { return ao.resolve(null).then(e)["catch"](lo); } : ro;
        function lo(e) { setTimeout((function () { throw e; })); }
        function so(e, t) { var n = t, r = 0; do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && 8 === o.nodeType)
                if ("/$" === (n = o.data)) {
                    if (0 === r)
                        return e.removeChild(o), void Ut(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = o;
        } while (n); Ut(t); }
        function uo(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; }
        function co(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; }
        var fo = Math.random().toString(36).slice(2), po = "__reactFiber$" + fo, ho = "__reactProps$" + fo, mo = "__reactContainer$" + fo, go = "__reactEvents$" + fo, vo = "__reactListeners$" + fo, yo = "__reactHandles$" + fo;
        function bo(e) { var t = e[po]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[mo] || n[po]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = co(e); null !== e;) {
                        if (n = e[po])
                            return n;
                        e = co(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; }
        function wo(e) { return !(e = e[po] || e[mo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; }
        function xo(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(a(33)); }
        function So(e) { return e[ho] || null; }
        var Eo = [], ko = -1;
        function Co(e) { return { current: e }; }
        function _o(e) { 0 > ko || (e.current = Eo[ko], Eo[ko] = null, ko--); }
        function No(e, t) { ko++, Eo[ko] = e.current, e.current = t; }
        var Po = {}, Mo = Co(Po), Oo = Co(!1), Ro = Po;
        function To(e, t) { var n = e.type.contextTypes; if (!n)
            return Po; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var o, a = {}; for (o in n)
            a[o] = t[o]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a; }
        function Ao(e) { return null !== (e = e.childContextTypes) && void 0 !== e; }
        function zo() { _o(Oo), _o(Mo); }
        function Io(e, t, n) { if (Mo.current !== Po)
            throw Error(a(168)); No(Mo, t), No(Oo, n); }
        function Do(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" !== typeof r.getChildContext)
            return n; for (var o in r = r.getChildContext())
            if (!(o in t))
                throw Error(a(108, V(e) || "Unknown", o)); return L({}, n, r); }
        function Lo(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Po, Ro = Mo.current, No(Mo, e), No(Oo, Oo.current), !0; }
        function Bo(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(a(169)); n ? (e = Do(e, t, Ro), r.__reactInternalMemoizedMergedChildContext = e, _o(Oo), _o(Mo), No(Mo, e)) : _o(Oo), No(Oo, n); }
        var jo = null, Zo = !1, Fo = !1;
        function Uo(e) { null === jo ? jo = [e] : jo.push(e); }
        function Vo() { if (!Fo && null !== jo) {
            Fo = !0;
            var e = 0, t = bt;
            try {
                var n = jo;
                for (bt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                jo = null, Zo = !1;
            }
            catch (o) {
                throw null !== jo && (jo = jo.slice(e + 1)), Ye(Je, Vo), o;
            }
            finally {
                bt = t, Fo = !1;
            }
        } return null; }
        var Wo = [], Ho = 0, $o = null, Yo = 0, Xo = [], Ko = 0, qo = null, Go = 1, Qo = "";
        function Jo(e, t) { Wo[Ho++] = Yo, Wo[Ho++] = $o, $o = e, Yo = t; }
        function ea(e, t, n) { Xo[Ko++] = Go, Xo[Ko++] = Qo, Xo[Ko++] = qo, qo = e; var r = Go; e = Qo; var o = 32 - it(r) - 1; r &= ~(1 << o), n += 1; var a = 32 - it(t) + o; if (30 < a) {
            var i = o - o % 5;
            a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Go = 1 << 32 - it(t) + o | n << o | r, Qo = a + e;
        }
        else
            Go = 1 << a | n << o | r, Qo = e; }
        function ta(e) { null !== e["return"] && (Jo(e, 1), ea(e, 1, 0)); }
        function na(e) { for (; e === $o;)
            $o = Wo[--Ho], Wo[Ho] = null, Yo = Wo[--Ho], Wo[Ho] = null; for (; e === qo;)
            qo = Xo[--Ko], Xo[Ko] = null, Qo = Xo[--Ko], Xo[Ko] = null, Go = Xo[--Ko], Xo[Ko] = null; }
        var ra = null, oa = null, aa = !1, ia = null;
        function la(e, t) { var n = Tu(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n["return"] = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
        function sa(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ra = e, oa = uo(t.firstChild), !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ra = e, oa = null, !0);
            case 13: return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== qo ? { id: Go, overflow: Qo } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = Tu(18, null, null, 0)).stateNode = t, n["return"] = e, e.child = n, ra = e, oa = null, !0);
            default: return !1;
        } }
        function ua(e) { return 0 !== (1 & e.mode) && 0 === (128 & e.flags); }
        function ca(e) { if (aa) {
            var t = oa;
            if (t) {
                var n = t;
                if (!sa(e, t)) {
                    if (ua(e))
                        throw Error(a(418));
                    t = uo(n.nextSibling);
                    var r = ra;
                    t && sa(e, t) ? la(r, n) : (e.flags = -4097 & e.flags | 2, aa = !1, ra = e);
                }
            }
            else {
                if (ua(e))
                    throw Error(a(418));
                e.flags = -4097 & e.flags | 2, aa = !1, ra = e;
            }
        } }
        function da(e) { for (e = e["return"]; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e["return"]; ra = e; }
        function fa(e) { if (e !== ra)
            return !1; if (!aa)
            return da(e), aa = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oa)) {
            if (ua(e))
                throw pa(), Error(a(418));
            for (; t;)
                la(e, t), t = uo(t.nextSibling);
        } if (da(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(a(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                oa = uo(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                oa = null;
            }
        }
        else
            oa = ra ? uo(e.stateNode.nextSibling) : null; return !0; }
        function pa() { for (var e = oa; e;)
            e = uo(e.nextSibling); }
        function ha() { oa = ra = null, aa = !1; }
        function ma(e) { null === ia ? ia = [e] : ia.push(e); }
        var ga = w.ReactCurrentBatchConfig;
        function va(e, t) { if (e && e.defaultProps) {
            for (var n in t = L({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; }
        var ya = Co(null), ba = null, wa = null, xa = null;
        function Sa() { xa = wa = ba = null; }
        function Ea(e) { var t = ya.current; _o(ya), e._currentValue = t; }
        function ka(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e["return"];
        } }
        function Ca(e, t) { ba = e, xa = wa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (wl = !0), e.firstContext = null); }
        function _a(e) { var t = e._currentValue; if (xa !== e)
            if (e = { context: e, memoizedValue: t, next: null }, null === wa) {
                if (null === ba)
                    throw Error(a(308));
                wa = e, ba.dependencies = { lanes: 0, firstContext: e };
            }
            else
                wa = wa.next = e; return t; }
        var Na = null;
        function Pa(e) { null === Na ? Na = [e] : Na.push(e); }
        function Ma(e, t, n, r) { var o = t.interleaved; return null === o ? (n.next = n, Pa(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Oa(e, r); }
        function Oa(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e["return"]; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e["return"]; return 3 === n.tag ? n.stateNode : null; }
        var Ra = !1;
        function Ta(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
        function Aa(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
        function za(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
        function Ia(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 0 !== (2 & Ms)) {
            var o = r.pending;
            return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Oa(e, n);
        } return null === (o = r.interleaved) ? (t.next = t, Pa(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Oa(e, n); }
        function Da(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } }
        function La(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var o = null, a = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === a ? o = a = i : a = a.next = i, n = n.next;
                } while (null !== n);
                null === a ? o = a = t : a = a.next = t;
            }
            else
                o = a = t;
            return n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
        function Ba(e, t, n, r) { var o = e.updateQueue; Ra = !1; var a = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending; if (null !== l) {
            o.shared.pending = null;
            var s = l, u = s.next;
            s.next = null, null === i ? a = u : i.next = u, i = s;
            var c = e.alternate;
            null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s));
        } if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = u = s = null, l = a;;) {
                var f = l.lane, p = l.eventTime;
                if ((r & f) === f) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                    e: {
                        var h = e, m = l;
                        switch (f = t, p = n, m.tag) {
                            case 1:
                                if ("function" === typeof (h = m.payload)) {
                                    d = h.call(p, d, f);
                                    break e;
                                }
                                d = h;
                                break e;
                            case 3: h.flags = -65537 & h.flags | 128;
                            case 0:
                                if (null === (f = "function" === typeof (h = m.payload) ? h.call(p, d, f) : h) || void 0 === f)
                                    break e;
                                d = L({}, d, f);
                                break e;
                            case 2: Ra = !0;
                        }
                    }
                    null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = o.effects) ? o.effects = [l] : f.push(l));
                }
                else
                    p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, null === c ? (u = c = p, s = d) : c = c.next = p, i |= f;
                if (null === (l = l.next)) {
                    if (null === (l = o.shared.pending))
                        break;
                    l = (f = l).next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
                }
            }
            if (null === c && (s = d), o.baseState = s, o.firstBaseUpdate = u, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
                o = t;
                do {
                    i |= o.lane, o = o.next;
                } while (o !== t);
            }
            else
                null === a && (o.shared.lanes = 0);
            Ls |= i, e.lanes = i, e.memoizedState = d;
        } }
        function ja(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], o = r.callback;
                if (null !== o) {
                    if (r.callback = null, r = n, "function" !== typeof o)
                        throw Error(a(191, o));
                    o.call(r);
                }
            } }
        var Za = (new r.Component).refs;
        function Fa(e, t, n, r) { n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : L({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); }
        var Ua = { isMounted: function (e) { return !!(e = e._reactInternals) && Ue(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = tu(), o = nu(e), a = za(r, o); a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Ia(e, a, o)) && (ru(t, e, o, r), Da(t, e, o)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = tu(), o = nu(e), a = za(r, o); a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Ia(e, a, o)) && (ru(t, e, o, r), Da(t, e, o)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = tu(), r = nu(e), o = za(n, r); o.tag = 2, void 0 !== t && null !== t && (o.callback = t), null !== (t = Ia(e, o, r)) && (ru(t, e, r, n), Da(t, e, r)); } };
        function Va(e, t, n, r, o, a, i) { return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(o, a)); }
        function Wa(e, t, n) { var r = !1, o = Po, a = t.contextType; return "object" === typeof a && null !== a ? a = _a(a) : (o = Ao(t) ? Ro : Mo.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? To(e, o) : Po), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ua, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t; }
        function Ha(e, t, n, r) { e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ua.enqueueReplaceState(t, t.state, null); }
        function $a(e, t, n, r) { var o = e.stateNode; o.props = n, o.state = e.memoizedState, o.refs = Za, Ta(e); var a = t.contextType; "object" === typeof a && null !== a ? o.context = _a(a) : (a = Ao(t) ? Ro : Mo.current, o.context = To(e, a)), o.state = e.memoizedState, "function" === typeof (a = t.getDerivedStateFromProps) && (Fa(e, t, a, n), o.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Ua.enqueueReplaceState(o, o.state, null), Ba(e, n, o, r), o.state = e.memoizedState), "function" === typeof o.componentDidMount && (e.flags |= 4194308); }
        function Ya(e, t, n) { if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(a(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(a(147, e));
                var o = r, i = "" + e;
                return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) { var t = o.refs; t === Za && (t = o.refs = {}), null === e ? delete t[i] : t[i] = e; }, t._stringRef = i, t);
            }
            if ("string" !== typeof e)
                throw Error(a(284));
            if (!n._owner)
                throw Error(a(290, e));
        } return e; }
        function Xa(e, t) { throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
        function Ka(e) { return (0, e._init)(e._payload); }
        function qa(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function o(e, t) { return (e = zu(e, t)).index = 0, e.sibling = null, e; } function i(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n); } function l(t) { return e && null === t.alternate && (t.flags |= 2), t; } function s(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Bu(n, e.mode, r))["return"] = e, t) : ((t = o(t, n))["return"] = e, t); } function u(e, t, n, r) { var a = n.type; return a === E ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === T && Ka(a) === t.type) ? ((r = o(t, n.props)).ref = Ya(e, t, n), r["return"] = e, r) : ((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = Ya(e, t, n), r["return"] = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = ju(n, e.mode, r))["return"] = e, t) : ((t = o(t, n.children || []))["return"] = e, t); } function d(e, t, n, r, a) { return null === t || 7 !== t.tag ? ((t = Du(n, e.mode, r, a))["return"] = e, t) : ((t = o(t, n))["return"] = e, t); } function f(e, t, n) { if ("string" === typeof t && "" !== t || "number" === typeof t)
            return (t = Bu("" + t, e.mode, n))["return"] = e, t; if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
                case x: return (n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = Ya(e, null, t), n["return"] = e, n;
                case S: return (t = ju(t, e.mode, n))["return"] = e, t;
                case T: return f(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || I(t))
                return (t = Du(t, e.mode, n, null))["return"] = e, t;
            Xa(e, t);
        } return null; } function p(e, t, n, r) { var o = null !== t ? t.key : null; if ("string" === typeof n && "" !== n || "number" === typeof n)
            return null !== o ? null : s(e, t, "" + n, r); if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
                case x: return n.key === o ? u(e, t, n, r) : null;
                case S: return n.key === o ? c(e, t, n, r) : null;
                case T: return p(e, t, (o = n._init)(n._payload), r);
            }
            if (te(n) || I(n))
                return null !== o ? null : d(e, t, n, r, null);
            Xa(e, n);
        } return null; } function h(e, t, n, r, o) { if ("string" === typeof r && "" !== r || "number" === typeof r)
            return s(t, e = e.get(n) || null, "" + r, o); if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
                case x: return u(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                case S: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                case T: return h(e, t, n, (0, r._init)(r._payload), o);
            }
            if (te(r) || I(r))
                return d(t, e = e.get(n) || null, r, o, null);
            Xa(t, r);
        } return null; } function m(o, a, l, s) { for (var u = null, c = null, d = a, m = a = 0, g = null; null !== d && m < l.length; m++) {
            d.index > m ? (g = d, d = null) : g = d.sibling;
            var v = p(o, d, l[m], s);
            if (null === v) {
                null === d && (d = g);
                break;
            }
            e && d && null === v.alternate && t(o, d), a = i(v, a, m), null === c ? u = v : c.sibling = v, c = v, d = g;
        } if (m === l.length)
            return n(o, d), aa && Jo(o, m), u; if (null === d) {
            for (; m < l.length; m++)
                null !== (d = f(o, l[m], s)) && (a = i(d, a, m), null === c ? u = d : c.sibling = d, c = d);
            return aa && Jo(o, m), u;
        } for (d = r(o, d); m < l.length; m++)
            null !== (g = h(d, o, m, l[m], s)) && (e && null !== g.alternate && d["delete"](null === g.key ? m : g.key), a = i(g, a, m), null === c ? u = g : c.sibling = g, c = g); return e && d.forEach((function (e) { return t(o, e); })), aa && Jo(o, m), u; } function g(o, l, s, u) { var c = I(s); if ("function" !== typeof c)
            throw Error(a(150)); if (null == (s = c.call(s)))
            throw Error(a(151)); for (var d = c = null, m = l, g = l = 0, v = null, y = s.next(); null !== m && !y.done; g++, y = s.next()) {
            m.index > g ? (v = m, m = null) : v = m.sibling;
            var b = p(o, m, y.value, u);
            if (null === b) {
                null === m && (m = v);
                break;
            }
            e && m && null === b.alternate && t(o, m), l = i(b, l, g), null === d ? c = b : d.sibling = b, d = b, m = v;
        } if (y.done)
            return n(o, m), aa && Jo(o, g), c; if (null === m) {
            for (; !y.done; g++, y = s.next())
                null !== (y = f(o, y.value, u)) && (l = i(y, l, g), null === d ? c = y : d.sibling = y, d = y);
            return aa && Jo(o, g), c;
        } for (m = r(o, m); !y.done; g++, y = s.next())
            null !== (y = h(m, o, g, y.value, u)) && (e && null !== y.alternate && m["delete"](null === y.key ? g : y.key), l = i(y, l, g), null === d ? c = y : d.sibling = y, d = y); return e && m.forEach((function (e) { return t(o, e); })), aa && Jo(o, g), c; } return function e(r, a, i, s) { if ("object" === typeof i && null !== i && i.type === E && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
            switch (i.$$typeof) {
                case x:
                    e: {
                        for (var u = i.key, c = a; null !== c;) {
                            if (c.key === u) {
                                if ((u = i.type) === E) {
                                    if (7 === c.tag) {
                                        n(r, c.sibling), (a = o(c, i.props.children))["return"] = r, r = a;
                                        break e;
                                    }
                                }
                                else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === T && Ka(u) === c.type) {
                                    n(r, c.sibling), (a = o(c, i.props)).ref = Ya(r, c, i), a["return"] = r, r = a;
                                    break e;
                                }
                                n(r, c);
                                break;
                            }
                            t(r, c), c = c.sibling;
                        }
                        i.type === E ? ((a = Du(i.props.children, r.mode, s, i.key))["return"] = r, r = a) : ((s = Iu(i.type, i.key, i.props, null, r.mode, s)).ref = Ya(r, a, i), s["return"] = r, r = s);
                    }
                    return l(r);
                case S:
                    e: {
                        for (c = i.key; null !== a;) {
                            if (a.key === c) {
                                if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                                    n(r, a.sibling), (a = o(a, i.children || []))["return"] = r, r = a;
                                    break e;
                                }
                                n(r, a);
                                break;
                            }
                            t(r, a), a = a.sibling;
                        }
                        (a = ju(i, r.mode, s))["return"] = r, r = a;
                    }
                    return l(r);
                case T: return e(r, a, (c = i._init)(i._payload), s);
            }
            if (te(i))
                return m(r, a, i, s);
            if (I(i))
                return g(r, a, i, s);
            Xa(r, i);
        } return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = o(a, i))["return"] = r, r = a) : (n(r, a), (a = Bu(i, r.mode, s))["return"] = r, r = a), l(r)) : n(r, a); }; }
        var Ga = qa(!0), Qa = qa(!1), Ja = {}, ei = Co(Ja), ti = Co(Ja), ni = Co(Ja);
        function ri(e) { if (e === Ja)
            throw Error(a(174)); return e; }
        function oi(e, t) { switch (No(ni, t), No(ti, e), No(ei, Ja), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                break;
            default: t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } _o(ei), No(ei, t); }
        function ai() { _o(ei), _o(ti), _o(ni); }
        function ii(e) { ri(ni.current); var t = ri(ei.current), n = se(t, e.type); t !== n && (No(ti, e), No(ei, n)); }
        function li(e) { ti.current === e && (_o(ei), _o(ti)); }
        var si = Co(0);
        function ui(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 !== (128 & t.flags))
                    return t;
            }
            else if (null !== t.child) {
                t.child["return"] = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t["return"] || t["return"] === e)
                    return null;
                t = t["return"];
            }
            t.sibling["return"] = t["return"], t = t.sibling;
        } return null; }
        var ci = [];
        function di() { for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null; ci.length = 0; }
        var fi = w.ReactCurrentDispatcher, pi = w.ReactCurrentBatchConfig, hi = 0, mi = null, gi = null, vi = null, yi = !1, bi = !1, wi = 0, xi = 0;
        function Si() { throw Error(a(321)); }
        function Ei(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n]))
                return !1; return !0; }
        function ki(e, t, n, r, o, i) { if (hi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fi.current = null === e || null === e.memoizedState ? ll : sl, e = n(r, o), bi) {
            i = 0;
            do {
                if (bi = !1, wi = 0, 25 <= i)
                    throw Error(a(301));
                i += 1, vi = gi = null, t.updateQueue = null, fi.current = ul, e = n(r, o);
            } while (bi);
        } if (fi.current = il, t = null !== gi && null !== gi.next, hi = 0, vi = gi = mi = null, yi = !1, t)
            throw Error(a(300)); return e; }
        function Ci() { var e = 0 !== wi; return wi = 0, e; }
        function _i() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === vi ? mi.memoizedState = vi = e : vi = vi.next = e, vi; }
        function Ni() { if (null === gi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = gi.next; var t = null === vi ? mi.memoizedState : vi.next; if (null !== t)
            vi = t, gi = e;
        else {
            if (null === e)
                throw Error(a(310));
            e = { memoizedState: (gi = e).memoizedState, baseState: gi.baseState, baseQueue: gi.baseQueue, queue: gi.queue, next: null }, null === vi ? mi.memoizedState = vi = e : vi = vi.next = e;
        } return vi; }
        function Pi(e, t) { return "function" === typeof t ? t(e) : t; }
        function Mi(e) { var t = Ni(), n = t.queue; if (null === n)
            throw Error(a(311)); n.lastRenderedReducer = e; var r = gi, o = r.baseQueue, i = n.pending; if (null !== i) {
            if (null !== o) {
                var l = o.next;
                o.next = i.next, i.next = l;
            }
            r.baseQueue = o = i, n.pending = null;
        } if (null !== o) {
            i = o.next, r = r.baseState;
            var s = l = null, u = null, c = i;
            do {
                var d = c.lane;
                if ((hi & d) === d)
                    null !== u && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var f = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === u ? (s = u = f, l = r) : u = u.next = f, mi.lanes |= d, Ls |= d;
                }
                c = c.next;
            } while (null !== c && c !== i);
            null === u ? l = r : u.next = s, lr(r, t.memoizedState) || (wl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
        } if (null !== (e = n.interleaved)) {
            o = e;
            do {
                i = o.lane, mi.lanes |= i, Ls |= i, o = o.next;
            } while (o !== e);
        }
        else
            null === o && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
        function Oi(e) { var t = Ni(), n = t.queue; if (null === n)
            throw Error(a(311)); n.lastRenderedReducer = e; var r = n.dispatch, o = n.pending, i = t.memoizedState; if (null !== o) {
            n.pending = null;
            var l = o = o.next;
            do {
                i = e(i, l.action), l = l.next;
            } while (l !== o);
            lr(i, t.memoizedState) || (wl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i;
        } return [i, r]; }
        function Ri() { }
        function Ti(e, t) { var n = mi, r = Ni(), o = t(), i = !lr(r.memoizedState, o); if (i && (r.memoizedState = o, wl = !0), r = r.queue, Wi(Ii.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== vi && 1 & vi.memoizedState.tag) {
            if (n.flags |= 2048, ji(9, zi.bind(null, n, r, o, t), void 0, null), null === Os)
                throw Error(a(349));
            0 !== (30 & hi) || Ai(n, t, o);
        } return o; }
        function Ai(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = mi.updateQueue) ? (t = { lastEffect: null, stores: null }, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); }
        function zi(e, t, n, r) { t.value = n, t.getSnapshot = r, Di(t) && Li(e); }
        function Ii(e, t, n) { return n((function () { Di(t) && Li(e); })); }
        function Di(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !lr(e, n);
        }
        catch (r) {
            return !0;
        } }
        function Li(e) { var t = Oa(e, 1); null !== t && ru(t, e, 1, -1); }
        function Bi(e) { var t = _i(); return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pi, lastRenderedState: e }, t.queue = e, e = e.dispatch = nl.bind(null, mi, e), [t.memoizedState, e]; }
        function ji(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = mi.updateQueue) ? (t = { lastEffect: null, stores: null }, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; }
        function Zi() { return Ni().memoizedState; }
        function Fi(e, t, n, r) { var o = _i(); mi.flags |= e, o.memoizedState = ji(1 | t, n, void 0, void 0 === r ? null : r); }
        function Ui(e, t, n, r) { var o = Ni(); r = void 0 === r ? null : r; var a = void 0; if (null !== gi) {
            var i = gi.memoizedState;
            if (a = i.destroy, null !== r && Ei(r, i.deps))
                return void (o.memoizedState = ji(t, n, a, r));
        } mi.flags |= e, o.memoizedState = ji(1 | t, n, a, r); }
        function Vi(e, t) { return Fi(8390656, 8, e, t); }
        function Wi(e, t) { return Ui(2048, 8, e, t); }
        function Hi(e, t) { return Ui(4, 2, e, t); }
        function $i(e, t) { return Ui(4, 4, e, t); }
        function Yi(e, t) { return "function" === typeof t ? (e = e(), t(e), function () { t(null); }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; }
        function Xi(e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ui(4, 4, Yi.bind(null, t, e), n); }
        function Ki() { }
        function qi(e, t) { var n = Ni(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && Ei(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
        function Gi(e, t) { var n = Ni(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && Ei(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
        function Qi(e, t, n) { return 0 === (21 & hi) ? (e.baseState && (e.baseState = !1, wl = !0), e.memoizedState = n) : (lr(n, t) || (n = mt(), mi.lanes |= n, Ls |= n, e.baseState = !0), t); }
        function Ji(e, t) { var n = bt; bt = 0 !== n && 4 > n ? n : 4, e(!0); var r = pi.transition; pi.transition = {}; try {
            e(!1), t();
        }
        finally {
            bt = n, pi.transition = r;
        } }
        function el() { return Ni().memoizedState; }
        function tl(e, t, n) { var r = nu(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, rl(e))
            ol(t, n);
        else if (null !== (n = Ma(e, t, n, r))) {
            ru(n, e, r, tu()), al(n, t, r);
        } }
        function nl(e, t, n) { var r = nu(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (rl(e))
            ol(t, o);
        else {
            var a = e.alternate;
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                try {
                    var i = t.lastRenderedState, l = a(i, n);
                    if (o.hasEagerState = !0, o.eagerState = l, lr(l, i)) {
                        var s = t.interleaved;
                        return null === s ? (o.next = o, Pa(t)) : (o.next = s.next, s.next = o), void (t.interleaved = o);
                    }
                }
                catch (u) { }
            null !== (n = Ma(e, t, o, r)) && (ru(n, e, r, o = tu()), al(n, t, r));
        } }
        function rl(e) { var t = e.alternate; return e === mi || null !== t && t === mi; }
        function ol(e, t) { bi = yi = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
        function al(e, t, n) { if (0 !== (4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } }
        var il = { readContext: _a, useCallback: Si, useContext: Si, useEffect: Si, useImperativeHandle: Si, useInsertionEffect: Si, useLayoutEffect: Si, useMemo: Si, useReducer: Si, useRef: Si, useState: Si, useDebugValue: Si, useDeferredValue: Si, useTransition: Si, useMutableSource: Si, useSyncExternalStore: Si, useId: Si, unstable_isNewReconciler: !1 }, ll = { readContext: _a, useCallback: function (e, t) { return _i().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: _a, useEffect: Vi, useImperativeHandle: function (e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, Fi(4194308, 4, Yi.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Fi(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Fi(4, 2, e, t); }, useMemo: function (e, t) { var n = _i(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = _i(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = tl.bind(null, mi, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, _i().memoizedState = e; }, useState: Bi, useDebugValue: Ki, useDeferredValue: function (e) { return _i().memoizedState = e; }, useTransition: function () { var e = Bi(!1), t = e[0]; return e = Ji.bind(null, e[1]), _i().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = mi, o = _i(); if (aa) {
                if (void 0 === n)
                    throw Error(a(407));
                n = n();
            }
            else {
                if (n = t(), null === Os)
                    throw Error(a(349));
                0 !== (30 & hi) || Ai(r, t, n);
            } o.memoizedState = n; var i = { value: n, getSnapshot: t }; return o.queue = i, Vi(Ii.bind(null, r, i, e), [e]), r.flags |= 2048, ji(9, zi.bind(null, r, i, n, t), void 0, null), n; }, useId: function () { var e = _i(), t = Os.identifierPrefix; if (aa) {
                var n = Qo;
                t = ":" + t + "R" + (n = (Go & ~(1 << 32 - it(Go) - 1)).toString(32) + n), 0 < (n = wi++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = xi++).toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, sl = { readContext: _a, useCallback: qi, useContext: _a, useEffect: Wi, useImperativeHandle: Xi, useInsertionEffect: Hi, useLayoutEffect: $i, useMemo: Gi, useReducer: Mi, useRef: Zi, useState: function () { return Mi(Pi); }, useDebugValue: Ki, useDeferredValue: function (e) { return Qi(Ni(), gi.memoizedState, e); }, useTransition: function () { return [Mi(Pi)[0], Ni().memoizedState]; }, useMutableSource: Ri, useSyncExternalStore: Ti, useId: el, unstable_isNewReconciler: !1 }, ul = { readContext: _a, useCallback: qi, useContext: _a, useEffect: Wi, useImperativeHandle: Xi, useInsertionEffect: Hi, useLayoutEffect: $i, useMemo: Gi, useReducer: Oi, useRef: Zi, useState: function () { return Oi(Pi); }, useDebugValue: Ki, useDeferredValue: function (e) { var t = Ni(); return null === gi ? t.memoizedState = e : Qi(t, gi.memoizedState, e); }, useTransition: function () { return [Oi(Pi)[0], Ni().memoizedState]; }, useMutableSource: Ri, useSyncExternalStore: Ti, useId: el, unstable_isNewReconciler: !1 };
        function cl(e, t) { try {
            var n = "", r = t;
            do {
                n += F(r), r = r["return"];
            } while (r);
            var o = n;
        }
        catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
        } return { value: e, source: t, stack: o, digest: null }; }
        function dl(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }; }
        function fl(e, t) { try {
            console.error(t.value);
        }
        catch (n) {
            setTimeout((function () { throw n; }));
        } }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) { (n = za(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Hs || (Hs = !0, $s = r), fl(0, t); }, n; }
        function ml(e, t, n) { (n = za(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" === typeof r) {
            var o = t.value;
            n.payload = function () { return r(o); }, n.callback = function () { fl(0, t); };
        } var a = e.stateNode; return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function () { fl(0, t), "function" !== typeof r && (null === Ys ? Ys = new Set([this]) : Ys.add(this)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; }
        function gl(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new pl;
            var o = new Set;
            r.set(t, o);
        }
        else
            void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o)); o.has(n) || (o.add(n), e = _u.bind(null, e, t, n), t.then(e, e)); }
        function vl(e) { do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
                return e;
            e = e["return"];
        } while (null !== e); return null; }
        function yl(e, t, n, r, o) { return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = za(-1, 1)).tag = 2, Ia(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e); }
        var bl = w.ReactCurrentOwner, wl = !1;
        function xl(e, t, n, r) { t.child = null === e ? Qa(t, null, n, r) : Ga(t, e.child, n, r); }
        function Sl(e, t, n, r, o) { n = n.render; var a = t.ref; return Ca(t, o), r = ki(e, t, n, r, a, o), n = Ci(), null === e || wl ? (aa && n && ta(t), t.flags |= 1, xl(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Hl(e, t, o)); }
        function El(e, t, n, r, o) { if (null === e) {
            var a = n.type;
            return "function" !== typeof a || Au(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Iu(n.type, null, r, t, t.mode, o)).ref = t.ref, e["return"] = t, t.child = e) : (t.tag = 15, t.type = a, kl(e, t, a, r, o));
        } if (a = e.child, 0 === (e.lanes & o)) {
            var i = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref)
                return Hl(e, t, o);
        } return t.flags |= 1, (e = zu(a, r)).ref = t.ref, e["return"] = t, t.child = e; }
        function kl(e, t, n, r, o) { if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
                if (wl = !1, t.pendingProps = r = a, 0 === (e.lanes & o))
                    return t.lanes = e.lanes, Hl(e, t, o);
                0 !== (131072 & e.flags) && (wl = !0);
            }
        } return Nl(e, t, n, r, o); }
        function Cl(e, t, n) { var r = t.pendingProps, o = r.children, a = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, No(zs, As), As |= n;
            else {
                if (0 === (1073741824 & n))
                    return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, No(zs, As), As |= e, null;
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== a ? a.baseLanes : n, No(zs, As), As |= r;
            }
        else
            null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, No(zs, As), As |= r; return xl(e, t, o, n), t.child; }
        function _l(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
        function Nl(e, t, n, r, o) { var a = Ao(n) ? Ro : Mo.current; return a = To(t, a), Ca(t, o), n = ki(e, t, n, r, a, o), r = Ci(), null === e || wl ? (aa && r && ta(t), t.flags |= 1, xl(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Hl(e, t, o)); }
        function Pl(e, t, n, r, o) { if (Ao(n)) {
            var a = !0;
            Lo(t);
        }
        else
            a = !1; if (Ca(t, o), null === t.stateNode)
            Wl(e, t), Wa(t, n, r), $a(t, n, r, o), r = !0;
        else if (null === e) {
            var i = t.stateNode, l = t.memoizedProps;
            i.props = l;
            var s = i.context, u = n.contextType;
            "object" === typeof u && null !== u ? u = _a(u) : u = To(t, u = Ao(n) ? Ro : Mo.current);
            var c = n.getDerivedStateFromProps, d = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
            d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || s !== u) && Ha(t, i, r, u), Ra = !1;
            var f = t.memoizedState;
            i.state = f, Ba(t, r, i, o), s = t.memoizedState, l !== r || f !== s || Oo.current || Ra ? ("function" === typeof c && (Fa(t, n, c, r), s = t.memoizedState), (l = Ra || Va(t, n, l, r, f, s, u)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = u, r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            i = t.stateNode, Aa(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : va(t.type, l), i.props = u, d = t.pendingProps, f = i.context, "object" === typeof (s = n.contextType) && null !== s ? s = _a(s) : s = To(t, s = Ao(n) ? Ro : Mo.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== d || f !== s) && Ha(t, i, r, s), Ra = !1, f = t.memoizedState, i.state = f, Ba(t, r, i, o);
            var h = t.memoizedState;
            l !== d || f !== h || Oo.current || Ra ? ("function" === typeof p && (Fa(t, n, p, r), h = t.memoizedState), (u = Ra || Va(t, n, u, r, f, h, s) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, s)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = s, r = u) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        } return Ml(e, t, n, r, a, o); }
        function Ml(e, t, n, r, o, a) { _l(e, t); var i = 0 !== (128 & t.flags); if (!r && !i)
            return o && Bo(t, n, !1), Hl(e, t, a); r = t.stateNode, bl.current = t; var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && i ? (t.child = Ga(t, e.child, null, a), t.child = Ga(t, null, l, a)) : xl(e, t, l, a), t.memoizedState = r.state, o && Bo(t, n, !0), t.child; }
        function Ol(e) { var t = e.stateNode; t.pendingContext ? Io(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Io(0, t.context, !1), oi(e, t.containerInfo); }
        function Rl(e, t, n, r, o) { return ha(), ma(o), t.flags |= 256, xl(e, t, n, r), t.child; }
        var Tl, Al, zl, Il, Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ll(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
        function Bl(e, t, n) { var r, o = t.pendingProps, i = si.current, l = !1, s = 0 !== (128 & t.flags); if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), No(si, 1 & i), null === e)
            return ca(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = o.children, e = o.fallback, l ? (o = t.mode, l = t.child, s = { mode: "hidden", children: s }, 0 === (1 & o) && null !== l ? (l.childLanes = 0, l.pendingProps = s) : l = Lu(s, o, 0, null), e = Du(e, o, n, null), l["return"] = t, e["return"] = t, l.sibling = e, t.child = l, t.child.memoizedState = Ll(n), t.memoizedState = Dl, e) : jl(t, s)); if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return function (e, t, n, r, o, i, l) { if (n)
                return 256 & t.flags ? (t.flags &= -257, Zl(e, t, l, r = dl(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Lu({ mode: "visible", children: r.children }, o, 0, null), (i = Du(i, o, l, null)).flags |= 2, r["return"] = t, i["return"] = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Ga(t, e.child, null, l), t.child.memoizedState = Ll(l), t.memoizedState = Dl, i); if (0 === (1 & t.mode))
                return Zl(e, t, l, null); if ("$!" === o.data) {
                if (r = o.nextSibling && o.nextSibling.dataset)
                    var s = r.dgst;
                return r = s, Zl(e, t, l, r = dl(i = Error(a(419)), r, void 0));
            } if (s = 0 !== (l & e.childLanes), wl || s) {
                if (null !== (r = Os)) {
                    switch (l & -l) {
                        case 4:
                            o = 2;
                            break;
                        case 16:
                            o = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            o = 32;
                            break;
                        case 536870912:
                            o = 268435456;
                            break;
                        default: o = 0;
                    }
                    0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) && o !== i.retryLane && (i.retryLane = o, Oa(e, o), ru(r, e, o, -1));
                }
                return gu(), Zl(e, t, l, r = dl(Error(a(421))));
            } return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Pu.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, oa = uo(o.nextSibling), ra = t, aa = !0, ia = null, null !== e && (Xo[Ko++] = Go, Xo[Ko++] = Qo, Xo[Ko++] = qo, Go = e.id, Qo = e.overflow, qo = t), t = jl(t, r.children), t.flags |= 4096, t); }(e, t, s, o, r, i, n); if (l) {
            l = o.fallback, s = t.mode, r = (i = e.child).sibling;
            var u = { mode: "hidden", children: o.children };
            return 0 === (1 & s) && t.child !== i ? ((o = t.child).childLanes = 0, o.pendingProps = u, t.deletions = null) : (o = zu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? l = zu(r, l) : (l = Du(l, s, n, null)).flags |= 2, l["return"] = t, o["return"] = t, o.sibling = l, t.child = o, o = l, l = t.child, s = null === (s = e.child.memoizedState) ? Ll(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = Dl, o;
        } return e = (l = e.child).sibling, o = zu(l, { mode: "visible", children: o.children }), 0 === (1 & t.mode) && (o.lanes = n), o["return"] = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o; }
        function jl(e, t) { return (t = Lu({ mode: "visible", children: t }, e.mode, 0, null))["return"] = e, e.child = t; }
        function Zl(e, t, n, r) { return null !== r && ma(r), Ga(t, e.child, null, n), (e = jl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; }
        function Fl(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), ka(e["return"], t, n); }
        function Ul(e, t, n, r, o) { var a = e.memoizedState; null === a ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o); }
        function Vl(e, t, n) { var r = t.pendingProps, o = r.revealOrder, a = r.tail; if (xl(e, t, r.children, n), 0 !== (2 & (r = si.current)))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 0 !== (128 & e.flags))
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Fl(e, n, t);
                    else if (19 === e.tag)
                        Fl(e, n, t);
                    else if (null !== e.child) {
                        e.child["return"] = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e["return"] || e["return"] === t)
                            break e;
                        e = e["return"];
                    }
                    e.sibling["return"] = e["return"], e = e.sibling;
                }
            r &= 1;
        } if (No(si, r), 0 === (1 & t.mode))
            t.memoizedState = null;
        else
            switch (o) {
                case "forwards":
                    for (n = t.child, o = null; null !== n;)
                        null !== (e = n.alternate) && null === ui(e) && (o = n), n = n.sibling;
                    null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ul(t, !1, o, n, a);
                    break;
                case "backwards":
                    for (n = null, o = t.child, t.child = null; null !== o;) {
                        if (null !== (e = o.alternate) && null === ui(e)) {
                            t.child = o;
                            break;
                        }
                        e = o.sibling, o.sibling = n, n = o, o = e;
                    }
                    Ul(t, !0, n, null, a);
                    break;
                case "together":
                    Ul(t, !1, null, null, void 0);
                    break;
                default: t.memoizedState = null;
            } return t.child; }
        function Wl(e, t) { 0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2); }
        function Hl(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Ls |= t.lanes, 0 === (n & t.childLanes))
            return null; if (null !== e && t.child !== e.child)
            throw Error(a(153)); if (null !== t.child) {
            for (n = zu(e = t.child, e.pendingProps), t.child = n, n["return"] = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = zu(e, e.pendingProps))["return"] = t;
            n.sibling = null;
        } return t.child; }
        function $l(e, t) { if (!aa)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } }
        function Yl(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var o = e.child; null !== o;)
                n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o["return"] = e, o = o.sibling;
        else
            for (o = e.child; null !== o;)
                n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o["return"] = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
        function Xl(e, t, n) { var r = t.pendingProps; switch (na(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return Yl(t), null;
            case 1:
            case 17: return Ao(t.type) && zo(), Yl(t), null;
            case 3: return r = t.stateNode, ai(), _o(Oo), _o(Mo), di(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ia && (lu(ia), ia = null))), Al(e, t), Yl(t), null;
            case 5:
                li(t);
                var o = ri(ni.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    zl(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(a(166));
                        return Yl(t), null;
                    }
                    if (e = ri(ei.current), fa(t)) {
                        r = t.stateNode, n = t.type;
                        var i = t.memoizedProps;
                        switch (r[po] = t, r[ho] = i, e = 0 !== (1 & t.mode), n) {
                            case "dialog":
                                jr("cancel", r), jr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                jr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Ir.length; o++)
                                    jr(Ir[o], r);
                                break;
                            case "source":
                                jr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                jr("error", r), jr("load", r);
                                break;
                            case "details":
                                jr("toggle", r);
                                break;
                            case "input":
                                q(r, i), jr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!i.multiple }, jr("invalid", r);
                                break;
                            case "textarea": oe(r, i), jr("invalid", r);
                        }
                        for (var s in ye(n, i), o = null, i)
                            if (i.hasOwnProperty(s)) {
                                var u = i[s];
                                "children" === s ? "string" === typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Qr(r.textContent, u, e), o = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Qr(r.textContent, u, e), o = ["children", "" + u]) : l.hasOwnProperty(s) && null != u && "onScroll" === s && jr("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                $(r), J(r, i, !0);
                                break;
                            case "textarea":
                                $(r), ie(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" === typeof i.onClick && (r.onclick = Jr);
                        }
                        r = o, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        s = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[po] = t, e[ho] = r, Tl(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (s = be(n, r), n) {
                                case "dialog":
                                    jr("cancel", e), jr("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    jr("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (o = 0; o < Ir.length; o++)
                                        jr(Ir[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    jr("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    jr("error", e), jr("load", e), o = r;
                                    break;
                                case "details":
                                    jr("toggle", e), o = r;
                                    break;
                                case "input":
                                    q(e, r), o = K(e, r), jr("invalid", e);
                                    break;
                                case "option":
                                default:
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, o = L({}, r, { value: void 0 }), jr("invalid", e);
                                    break;
                                case "textarea": oe(e, r), o = re(e, r), jr("invalid", e);
                            }
                            for (i in ye(n, o), u = o)
                                if (u.hasOwnProperty(i)) {
                                    var c = u[i];
                                    "style" === i ? ge(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && jr("scroll", e) : null != c && b(e, i, c, s));
                                }
                            switch (n) {
                                case "input":
                                    $(e), J(e, r, !1);
                                    break;
                                case "textarea":
                                    $(e), ie(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + W(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" === typeof o.onClick && (e.onclick = Jr);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default: r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                }
                return Yl(t), null;
            case 6:
                if (e && null != t.stateNode)
                    Il(e, t, e.memoizedProps, r);
                else {
                    if ("string" !== typeof r && null === t.stateNode)
                        throw Error(a(166));
                    if (n = ri(ni.current), ri(ei.current), fa(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[po] = t, (i = r.nodeValue !== n) && null !== (e = ra))
                            switch (e.tag) {
                                case 3:
                                    Qr(r.nodeValue, n, 0 !== (1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Qr(r.nodeValue, n, 0 !== (1 & e.mode));
                            }
                        i && (t.flags |= 4);
                    }
                    else
                        (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t, t.stateNode = r;
                }
                return Yl(t), null;
            case 13:
                if (_o(si), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                        pa(), ha(), t.flags |= 98560, i = !1;
                    else if (i = fa(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!i)
                                throw Error(a(318));
                            if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                                throw Error(a(317));
                            i[po] = t;
                        }
                        else
                            ha(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        Yl(t), i = !1;
                    }
                    else
                        null !== ia && (lu(ia), ia = null), i = !0;
                    if (!i)
                        return 65536 & t.flags ? t : null;
                }
                return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & si.current) ? 0 === Is && (Is = 3) : gu())), null !== t.updateQueue && (t.flags |= 4), Yl(t), null);
            case 4: return ai(), Al(e, t), null === e && Ur(t.stateNode.containerInfo), Yl(t), null;
            case 10: return Ea(t.type._context), Yl(t), null;
            case 19:
                if (_o(si), null === (i = t.memoizedState))
                    return Yl(t), null;
                if (r = 0 !== (128 & t.flags), null === (s = i.rendering))
                    if (r)
                        $l(i, !1);
                    else {
                        if (0 !== Is || null !== e && 0 !== (128 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (s = ui(e))) {
                                    for (t.flags |= 128, $l(i, !1), null !== (r = s.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;)
                                        e = r, (i = n).flags &= 14680066, null === (s = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return No(si, 1 & si.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== i.tail && Ge() > Vs && (t.flags |= 128, r = !0, $l(i, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = ui(s))) {
                            if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), $l(i, !0), null === i.tail && "hidden" === i.tailMode && !s.alternate && !aa)
                                return Yl(t), null;
                        }
                        else
                            2 * Ge() - i.renderingStartTime > Vs && 1073741824 !== n && (t.flags |= 128, r = !0, $l(i, !1), t.lanes = 4194304);
                    i.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s, i.last = s);
                }
                return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ge(), t.sibling = null, n = si.current, No(si, r ? 1 & n | 2 : 1 & n), t) : (Yl(t), null);
            case 22:
            case 23: return fu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & As) && (Yl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Yl(t), null;
            case 24:
            case 25: return null;
        } throw Error(a(156, t.tag)); }
        function Kl(e, t) { switch (na(t), t.tag) {
            case 1: return Ao(t.type) && zo(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return ai(), _o(Oo), _o(Mo), di(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5: return li(t), null;
            case 13:
                if (_o(si), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(a(340));
                    ha();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return _o(si), null;
            case 4: return ai(), null;
            case 10: return Ea(t.type._context), null;
            case 22:
            case 23: return fu(), null;
            default: return null;
        } }
        Tl = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child["return"] = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n["return"] || n["return"] === t)
                    return;
                n = n["return"];
            }
            n.sibling["return"] = n["return"], n = n.sibling;
        } }, Al = function () { }, zl = function (e, t, n, r) { var o = e.memoizedProps; if (o !== r) {
            e = t.stateNode, ri(ei.current);
            var a, i = null;
            switch (n) {
                case "input":
                    o = K(e, o), r = K(e, r), i = [];
                    break;
                case "select":
                    o = L({}, o, { value: void 0 }), r = L({}, r, { value: void 0 }), i = [];
                    break;
                case "textarea":
                    o = re(e, o), r = re(e, r), i = [];
                    break;
                default: "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Jr);
            }
            for (c in ye(n, r), n = null, o)
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                    if ("style" === c) {
                        var s = o[c];
                        for (a in s)
                            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
            for (c in r) {
                var u = r[c];
                if (s = null != o ? o[c] : void 0, r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                    if ("style" === c)
                        if (s) {
                            for (a in s)
                                !s.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                            for (a in u)
                                u.hasOwnProperty(a) && s[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
                        }
                        else
                            n || (i || (i = []), i.push(c, n)), n = u;
                    else
                        "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, null != u && s !== u && (i = i || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != u && "onScroll" === c && jr("scroll", e), i || s === u || (i = [])) : (i = i || []).push(c, u));
            }
            n && (i = i || []).push("style", n);
            var c = i;
            (t.updateQueue = c) && (t.flags |= 4);
        } }, Il = function (e, t, n, r) { n !== r && (t.flags |= 4); };
        var ql = !1, Gl = !1, Ql = "function" === typeof WeakSet ? WeakSet : Set, Jl = null;
        function es(e, t) { var n = e.ref; if (null !== n)
            if ("function" === typeof n)
                try {
                    n(null);
                }
                catch (r) {
                    Cu(e, t, r);
                }
            else
                n.current = null; }
        function ts(e, t, n) { try {
            n();
        }
        catch (r) {
            Cu(e, t, r);
        } }
        var ns = !1;
        function rs(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var a = o.destroy;
                    o.destroy = void 0, void 0 !== a && ts(t, n, a);
                }
                o = o.next;
            } while (o !== r);
        } }
        function os(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        } }
        function as(e) { var t = e.ref; if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" === typeof t ? t(e) : t.current = e;
        } }
        function is(e) { var t = e.alternate; null !== t && (e.alternate = null, is(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[po], delete t[ho], delete t[go], delete t[vo], delete t[yo])), e.stateNode = null, e["return"] = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
        function ls(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; }
        function ss(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e["return"] || ls(e["return"]))
                    return null;
                e = e["return"];
            }
            for (e.sibling["return"] = e["return"], e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child["return"] = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } }
        function us(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
        else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e;)
                us(e, t, n), e = e.sibling; }
        function cs(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e;)
                cs(e, t, n), e = e.sibling; }
        var ds = null, fs = !1;
        function ps(e, t, n) { for (n = n.child; null !== n;)
            hs(e, t, n), n = n.sibling; }
        function hs(e, t, n) { if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
                at.onCommitFiberUnmount(ot, n);
            }
            catch (l) { } switch (n.tag) {
            case 5: Gl || es(n, t);
            case 6:
                var r = ds, o = fs;
                ds = null, ps(e, t, n), fs = o, null !== (ds = r) && (fs ? (e = ds, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : ds.removeChild(n.stateNode));
                break;
            case 18:
                null !== ds && (fs ? (e = ds, n = n.stateNode, 8 === e.nodeType ? so(e.parentNode, n) : 1 === e.nodeType && so(e, n), Ut(e)) : so(ds, n.stateNode));
                break;
            case 4:
                r = ds, o = fs, ds = n.stateNode.containerInfo, fs = !0, ps(e, t, n), ds = r, fs = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Gl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                    o = r = r.next;
                    do {
                        var a = o, i = a.destroy;
                        a = a.tag, void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && ts(n, t, i), o = o.next;
                    } while (o !== r);
                }
                ps(e, t, n);
                break;
            case 1:
                if (!Gl && (es(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount))
                    try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                    }
                    catch (l) {
                        Cu(n, t, l);
                    }
                ps(e, t, n);
                break;
            case 21:
                ps(e, t, n);
                break;
            case 22:
                1 & n.mode ? (Gl = (r = Gl) || null !== n.memoizedState, ps(e, t, n), Gl = r) : ps(e, t, n);
                break;
            default: ps(e, t, n);
        } }
        function ms(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ql), t.forEach((function (t) { var r = Mu.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } }
        function gs(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                try {
                    var i = e, l = t, s = l;
                    e: for (; null !== s;) {
                        switch (s.tag) {
                            case 5:
                                ds = s.stateNode, fs = !1;
                                break e;
                            case 3:
                            case 4:
                                ds = s.stateNode.containerInfo, fs = !0;
                                break e;
                        }
                        s = s["return"];
                    }
                    if (null === ds)
                        throw Error(a(160));
                    hs(i, l, o), ds = null, fs = !1;
                    var u = o.alternate;
                    null !== u && (u["return"] = null), o["return"] = null;
                }
                catch (c) {
                    Cu(o, t, c);
                }
            } if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                vs(t, e), t = t.sibling; }
        function vs(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (gs(t, e), ys(e), 4 & r) {
                    try {
                        rs(3, e, e["return"]), os(3, e);
                    }
                    catch (g) {
                        Cu(e, e["return"], g);
                    }
                    try {
                        rs(5, e, e["return"]);
                    }
                    catch (g) {
                        Cu(e, e["return"], g);
                    }
                }
                break;
            case 1:
                gs(t, e), ys(e), 512 & r && null !== n && es(n, n["return"]);
                break;
            case 5:
                if (gs(t, e), ys(e), 512 & r && null !== n && es(n, n["return"]), 32 & e.flags) {
                    var o = e.stateNode;
                    try {
                        fe(o, "");
                    }
                    catch (g) {
                        Cu(e, e["return"], g);
                    }
                }
                if (4 & r && null != (o = e.stateNode)) {
                    var i = e.memoizedProps, l = null !== n ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
                    if (e.updateQueue = null, null !== u)
                        try {
                            "input" === s && "radio" === i.type && null != i.name && G(o, i), be(s, l);
                            var c = be(s, i);
                            for (l = 0; l < u.length; l += 2) {
                                var d = u[l], f = u[l + 1];
                                "style" === d ? ge(o, f) : "dangerouslySetInnerHTML" === d ? de(o, f) : "children" === d ? fe(o, f) : b(o, d, f, c);
                            }
                            switch (s) {
                                case "input":
                                    Q(o, i);
                                    break;
                                case "textarea":
                                    ae(o, i);
                                    break;
                                case "select":
                                    var p = o._wrapperState.wasMultiple;
                                    o._wrapperState.wasMultiple = !!i.multiple;
                                    var h = i.value;
                                    null != h ? ne(o, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(o, !!i.multiple, i.defaultValue, !0) : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                            }
                            o[ho] = i;
                        }
                        catch (g) {
                            Cu(e, e["return"], g);
                        }
                }
                break;
            case 6:
                if (gs(t, e), ys(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(a(162));
                    o = e.stateNode, i = e.memoizedProps;
                    try {
                        o.nodeValue = i;
                    }
                    catch (g) {
                        Cu(e, e["return"], g);
                    }
                }
                break;
            case 3:
                if (gs(t, e), ys(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        Ut(t.containerInfo);
                    }
                    catch (g) {
                        Cu(e, e["return"], g);
                    }
                break;
            case 4:
            default:
                gs(t, e), ys(e);
                break;
            case 13:
                gs(t, e), ys(e), 8192 & (o = e.child).flags && (i = null !== o.memoizedState, o.stateNode.isHidden = i, !i || null !== o.alternate && null !== o.alternate.memoizedState || (Us = Ge())), 4 & r && ms(e);
                break;
            case 22:
                if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gl = (c = Gl) || d, gs(t, e), Gl = c) : gs(t, e), ys(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                        for (Jl = e, d = e.child; null !== d;) {
                            for (f = Jl = d; null !== Jl;) {
                                switch (h = (p = Jl).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        rs(4, p, p["return"]);
                                        break;
                                    case 1:
                                        es(p, p["return"]);
                                        var m = p.stateNode;
                                        if ("function" === typeof m.componentWillUnmount) {
                                            r = p, n = p["return"];
                                            try {
                                                t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                            }
                                            catch (g) {
                                                Cu(r, n, g);
                                            }
                                        }
                                        break;
                                    case 5:
                                        es(p, p["return"]);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        Ss(f);
                                        continue;
                                    }
                                }
                                null !== h ? (h["return"] = p, Jl = h) : Ss(f);
                            }
                            d = d.sibling;
                        }
                    e: for (d = null, f = e;;) {
                        if (5 === f.tag) {
                            if (null === d) {
                                d = f;
                                try {
                                    o = f.stateNode, c ? "function" === typeof (i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = f.stateNode, l = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, s.style.display = me("display", l));
                                }
                                catch (g) {
                                    Cu(e, e["return"], g);
                                }
                            }
                        }
                        else if (6 === f.tag) {
                            if (null === d)
                                try {
                                    f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                                }
                                catch (g) {
                                    Cu(e, e["return"], g);
                                }
                        }
                        else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                            f.child["return"] = f, f = f.child;
                            continue;
                        }
                        if (f === e)
                            break e;
                        for (; null === f.sibling;) {
                            if (null === f["return"] || f["return"] === e)
                                break e;
                            d === f && (d = null), f = f["return"];
                        }
                        d === f && (d = null), f.sibling["return"] = f["return"], f = f.sibling;
                    }
                }
                break;
            case 19: gs(t, e), ys(e), 4 & r && ms(e);
            case 21:
        } }
        function ys(e) { var t = e.flags; if (2 & t) {
            try {
                e: {
                    for (var n = e["return"]; null !== n;) {
                        if (ls(n)) {
                            var r = n;
                            break e;
                        }
                        n = n["return"];
                    }
                    throw Error(a(160));
                }
                switch (r.tag) {
                    case 5:
                        var o = r.stateNode;
                        32 & r.flags && (fe(o, ""), r.flags &= -33), cs(e, ss(e), o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo;
                        us(e, ss(e), i);
                        break;
                    default: throw Error(a(161));
                }
            }
            catch (l) {
                Cu(e, e["return"], l);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); }
        function bs(e, t, n) { Jl = e, ws(e, t, n); }
        function ws(e, t, n) { for (var r = 0 !== (1 & e.mode); null !== Jl;) {
            var o = Jl, a = o.child;
            if (22 === o.tag && r) {
                var i = null !== o.memoizedState || ql;
                if (!i) {
                    var l = o.alternate, s = null !== l && null !== l.memoizedState || Gl;
                    l = ql;
                    var u = Gl;
                    if (ql = i, (Gl = s) && !u)
                        for (Jl = o; null !== Jl;)
                            s = (i = Jl).child, 22 === i.tag && null !== i.memoizedState ? Es(o) : null !== s ? (s["return"] = i, Jl = s) : Es(o);
                    for (; null !== a;)
                        Jl = a, ws(a, t, n), a = a.sibling;
                    Jl = o, ql = l, Gl = u;
                }
                xs(e);
            }
            else
                0 !== (8772 & o.subtreeFlags) && null !== a ? (a["return"] = o, Jl = a) : xs(e);
        } }
        function xs(e) { for (; null !== Jl;) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
                var n = t.alternate;
                try {
                    if (0 !== (8772 & t.flags))
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gl || os(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (4 & t.flags && !Gl)
                                    if (null === n)
                                        r.componentDidMount();
                                    else {
                                        var o = t.elementType === t.type ? n.memoizedProps : va(t.type, n.memoizedProps);
                                        r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var i = t.updateQueue;
                                null !== i && ja(t, i, r);
                                break;
                            case 3:
                                var l = t.updateQueue;
                                if (null !== l) {
                                    if (n = null, null !== t.child)
                                        switch (t.child.tag) {
                                            case 5:
                                            case 1: n = t.child.stateNode;
                                        }
                                    ja(t, l, n);
                                }
                                break;
                            case 5:
                                var s = t.stateNode;
                                if (null === n && 4 & t.flags) {
                                    n = s;
                                    var u = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            u.autoFocus && n.focus();
                                            break;
                                        case "img": u.src && (n.src = u.src);
                                    }
                                }
                                break;
                            case 6:
                            case 4:
                            case 12:
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25: break;
                            case 13:
                                if (null === t.memoizedState) {
                                    var c = t.alternate;
                                    if (null !== c) {
                                        var d = c.memoizedState;
                                        if (null !== d) {
                                            var f = d.dehydrated;
                                            null !== f && Ut(f);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(a(163));
                        }
                    Gl || 512 & t.flags && as(t);
                }
                catch (p) {
                    Cu(t, t["return"], p);
                }
            }
            if (t === e) {
                Jl = null;
                break;
            }
            if (null !== (n = t.sibling)) {
                n["return"] = t["return"], Jl = n;
                break;
            }
            Jl = t["return"];
        } }
        function Ss(e) { for (; null !== Jl;) {
            var t = Jl;
            if (t === e) {
                Jl = null;
                break;
            }
            var n = t.sibling;
            if (null !== n) {
                n["return"] = t["return"], Jl = n;
                break;
            }
            Jl = t["return"];
        } }
        function Es(e) { for (; null !== Jl;) {
            var t = Jl;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t["return"];
                        try {
                            os(4, t);
                        }
                        catch (s) {
                            Cu(t, n, s);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if ("function" === typeof r.componentDidMount) {
                            var o = t["return"];
                            try {
                                r.componentDidMount();
                            }
                            catch (s) {
                                Cu(t, o, s);
                            }
                        }
                        var a = t["return"];
                        try {
                            as(t);
                        }
                        catch (s) {
                            Cu(t, a, s);
                        }
                        break;
                    case 5:
                        var i = t["return"];
                        try {
                            as(t);
                        }
                        catch (s) {
                            Cu(t, i, s);
                        }
                }
            }
            catch (s) {
                Cu(t, t["return"], s);
            }
            if (t === e) {
                Jl = null;
                break;
            }
            var l = t.sibling;
            if (null !== l) {
                l["return"] = t["return"], Jl = l;
                break;
            }
            Jl = t["return"];
        } }
        var ks, Cs = Math.ceil, _s = w.ReactCurrentDispatcher, Ns = w.ReactCurrentOwner, Ps = w.ReactCurrentBatchConfig, Ms = 0, Os = null, Rs = null, Ts = 0, As = 0, zs = Co(0), Is = 0, Ds = null, Ls = 0, Bs = 0, js = 0, Zs = null, Fs = null, Us = 0, Vs = 1 / 0, Ws = null, Hs = !1, $s = null, Ys = null, Xs = !1, Ks = null, qs = 0, Gs = 0, Qs = null, Js = -1, eu = 0;
        function tu() { return 0 !== (6 & Ms) ? Ge() : -1 !== Js ? Js : Js = Ge(); }
        function nu(e) { return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Ms) && 0 !== Ts ? Ts & -Ts : null !== ga.transition ? (0 === eu && (eu = mt()), eu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : qt(e.type); }
        function ru(e, t, n, r) { if (50 < Gs)
            throw Gs = 0, Qs = null, Error(a(185)); vt(e, n, r), 0 !== (2 & Ms) && e === Os || (e === Os && (0 === (2 & Ms) && (Bs |= n), 4 === Is && su(e, Ts)), ou(e, r), 1 === n && 0 === Ms && 0 === (1 & t.mode) && (Vs = Ge() + 500, Zo && Vo())); }
        function ou(e, t) { var n = e.callbackNode; !function (e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
            var i = 31 - it(a), l = 1 << i, s = o[i];
            -1 === s ? 0 !== (l & n) && 0 === (l & r) || (o[i] = pt(l, t)) : s <= t && (e.expiredLanes |= l), a &= ~l;
        } }(e, t); var r = ft(e, e === Os ? Ts : 0); if (0 === r)
            null !== n && Xe(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Xe(n), 1 === t)
                0 === e.tag ? function (e) { Zo = !0, Uo(e); }(uu.bind(null, e)) : Uo(uu.bind(null, e)), io((function () { 0 === (6 & Ms) && Vo(); })), n = null;
            else {
                switch (wt(r)) {
                    case 1:
                        n = Je;
                        break;
                    case 4:
                        n = et;
                        break;
                    case 16:
                    default:
                        n = tt;
                        break;
                    case 536870912: n = rt;
                }
                n = Ou(n, au.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        } }
        function au(e, t) { if (Js = -1, eu = 0, 0 !== (6 & Ms))
            throw Error(a(327)); var n = e.callbackNode; if (Eu() && e.callbackNode !== n)
            return null; var r = ft(e, e === Os ? Ts : 0); if (0 === r)
            return null; if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t)
            t = vu(e, r);
        else {
            t = r;
            var o = Ms;
            Ms |= 2;
            var i = mu();
            for (Os === e && Ts === t || (Ws = null, Vs = Ge() + 500, pu(e, t));;)
                try {
                    bu();
                    break;
                }
                catch (s) {
                    hu(e, s);
                }
            Sa(), _s.current = i, Ms = o, null !== Rs ? t = 0 : (Os = null, Ts = 0, t = Is);
        } if (0 !== t) {
            if (2 === t && (0 !== (o = ht(e)) && (r = o, t = iu(e, o))), 1 === t)
                throw n = Ds, pu(e, 0), su(e, r), ou(e, Ge()), n;
            if (6 === t)
                su(e, r);
            else {
                if (o = e.current.alternate, 0 === (30 & r) && !function (e) { for (var t = e;;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r], a = o.getSnapshot;
                                o = o.value;
                                try {
                                    if (!lr(a(), o))
                                        return !1;
                                }
                                catch (l) {
                                    return !1;
                                }
                            }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                        n["return"] = t, t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling;) {
                            if (null === t["return"] || t["return"] === e)
                                return !0;
                            t = t["return"];
                        }
                        t.sibling["return"] = t["return"], t = t.sibling;
                    }
                } return !0; }(o) && (2 === (t = vu(e, r)) && (0 !== (i = ht(e)) && (r = i, t = iu(e, i))), 1 === t))
                    throw n = Ds, pu(e, 0), su(e, r), ou(e, Ge()), n;
                switch (e.finishedWork = o, e.finishedLanes = r, t) {
                    case 0:
                    case 1: throw Error(a(345));
                    case 2:
                    case 5:
                        Su(e, Fs, Ws);
                        break;
                    case 3:
                        if (su(e, r), (130023424 & r) === r && 10 < (t = Us + 500 - Ge())) {
                            if (0 !== ft(e, 0))
                                break;
                            if (((o = e.suspendedLanes) & r) !== r) {
                                tu(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = ro(Su.bind(null, e, Fs, Ws), t);
                            break;
                        }
                        Su(e, Fs, Ws);
                        break;
                    case 4:
                        if (su(e, r), (4194240 & r) === r)
                            break;
                        for (t = e.eventTimes, o = -1; 0 < r;) {
                            var l = 31 - it(r);
                            i = 1 << l, (l = t[l]) > o && (o = l), r &= ~i;
                        }
                        if (r = o, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cs(r / 1960)) - r)) {
                            e.timeoutHandle = ro(Su.bind(null, e, Fs, Ws), r);
                            break;
                        }
                        Su(e, Fs, Ws);
                        break;
                    default: throw Error(a(329));
                }
            }
        } return ou(e, Ge()), e.callbackNode === n ? au.bind(null, e) : null; }
        function iu(e, t) { var n = Zs; return e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256), 2 !== (e = vu(e, t)) && (t = Fs, Fs = n, null !== t && lu(t)), e; }
        function lu(e) { null === Fs ? Fs = e : Fs.push.apply(Fs, e); }
        function su(e, t) { for (t &= ~js, t &= ~Bs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - it(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } }
        function uu(e) { if (0 !== (6 & Ms))
            throw Error(a(327)); Eu(); var t = ft(e, 0); if (0 === (1 & t))
            return ou(e, Ge()), null; var n = vu(e, t); if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && (t = r, n = iu(e, r));
        } if (1 === n)
            throw n = Ds, pu(e, 0), su(e, t), ou(e, Ge()), n; if (6 === n)
            throw Error(a(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Su(e, Fs, Ws), ou(e, Ge()), null; }
        function cu(e, t) { var n = Ms; Ms |= 1; try {
            return e(t);
        }
        finally {
            0 === (Ms = n) && (Vs = Ge() + 500, Zo && Vo());
        } }
        function du(e) { null !== Ks && 0 === Ks.tag && 0 === (6 & Ms) && Eu(); var t = Ms; Ms |= 1; var n = Ps.transition, r = bt; try {
            if (Ps.transition = null, bt = 1, e)
                return e();
        }
        finally {
            bt = r, Ps.transition = n, 0 === (6 & (Ms = t)) && Vo();
        } }
        function fu() { As = zs.current, _o(zs); }
        function pu(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Rs)
            for (n = Rs["return"]; null !== n;) {
                var r = n;
                switch (na(r), r.tag) {
                    case 1:
                        null !== (r = r.type.childContextTypes) && void 0 !== r && zo();
                        break;
                    case 3:
                        ai(), _o(Oo), _o(Mo), di();
                        break;
                    case 5:
                        li(r);
                        break;
                    case 4:
                        ai();
                        break;
                    case 13:
                    case 19:
                        _o(si);
                        break;
                    case 10:
                        Ea(r.type._context);
                        break;
                    case 22:
                    case 23: fu();
                }
                n = n["return"];
            } if (Os = e, Rs = e = zu(e.current, null), Ts = As = t, Is = 0, Ds = null, js = Bs = Ls = 0, Fs = Zs = null, null !== Na) {
            for (t = 0; t < Na.length; t++)
                if (null !== (r = (n = Na[t]).interleaved)) {
                    n.interleaved = null;
                    var o = r.next, a = n.pending;
                    if (null !== a) {
                        var i = a.next;
                        a.next = o, r.next = i;
                    }
                    n.pending = r;
                }
            Na = null;
        } return e; }
        function hu(e, t) { for (;;) {
            var n = Rs;
            try {
                if (Sa(), fi.current = il, yi) {
                    for (var r = mi.memoizedState; null !== r;) {
                        var o = r.queue;
                        null !== o && (o.pending = null), r = r.next;
                    }
                    yi = !1;
                }
                if (hi = 0, vi = gi = mi = null, bi = !1, wi = 0, Ns.current = null, null === n || null === n["return"]) {
                    Is = 1, Ds = t, Rs = null;
                    break;
                }
                e: {
                    var i = e, l = n["return"], s = n, u = t;
                    if (t = Ts, s.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                        var c = u, d = s, f = d.tag;
                        if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                            var p = d.alternate;
                            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
                        }
                        var h = vl(l);
                        if (null !== h) {
                            h.flags &= -257, yl(h, l, s, 0, t), 1 & h.mode && gl(i, c, t), u = c;
                            var m = (t = h).updateQueue;
                            if (null === m) {
                                var g = new Set;
                                g.add(u), t.updateQueue = g;
                            }
                            else
                                m.add(u);
                            break e;
                        }
                        if (0 === (1 & t)) {
                            gl(i, c, t), gu();
                            break e;
                        }
                        u = Error(a(426));
                    }
                    else if (aa && 1 & s.mode) {
                        var v = vl(l);
                        if (null !== v) {
                            0 === (65536 & v.flags) && (v.flags |= 256), yl(v, l, s, 0, t), ma(cl(u, s));
                            break e;
                        }
                    }
                    i = u = cl(u, s), 4 !== Is && (Is = 2), null === Zs ? Zs = [i] : Zs.push(i), i = l;
                    do {
                        switch (i.tag) {
                            case 3:
                                i.flags |= 65536, t &= -t, i.lanes |= t, La(i, hl(0, u, t));
                                break e;
                            case 1:
                                s = u;
                                var y = i.type, b = i.stateNode;
                                if (0 === (128 & i.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Ys || !Ys.has(b)))) {
                                    i.flags |= 65536, t &= -t, i.lanes |= t, La(i, ml(i, s, t));
                                    break e;
                                }
                        }
                        i = i["return"];
                    } while (null !== i);
                }
                xu(n);
            }
            catch (w) {
                t = w, Rs === n && null !== n && (Rs = n = n["return"]);
                continue;
            }
            break;
        } }
        function mu() { var e = _s.current; return _s.current = il, null === e ? il : e; }
        function gu() { 0 !== Is && 3 !== Is && 2 !== Is || (Is = 4), null === Os || 0 === (268435455 & Ls) && 0 === (268435455 & Bs) || su(Os, Ts); }
        function vu(e, t) { var n = Ms; Ms |= 2; var r = mu(); for (Os === e && Ts === t || (Ws = null, pu(e, t));;)
            try {
                yu();
                break;
            }
            catch (o) {
                hu(e, o);
            } if (Sa(), Ms = n, _s.current = r, null !== Rs)
            throw Error(a(261)); return Os = null, Ts = 0, Is; }
        function yu() { for (; null !== Rs;)
            wu(Rs); }
        function bu() { for (; null !== Rs && !Ke();)
            wu(Rs); }
        function wu(e) { var t = ks(e.alternate, e, As); e.memoizedProps = e.pendingProps, null === t ? xu(e) : Rs = t, Ns.current = null; }
        function xu(e) { var t = e; do {
            var n = t.alternate;
            if (e = t["return"], 0 === (32768 & t.flags)) {
                if (null !== (n = Xl(n, t, As)))
                    return void (Rs = n);
            }
            else {
                if (null !== (n = Kl(n, t)))
                    return n.flags &= 32767, void (Rs = n);
                if (null === e)
                    return Is = 6, void (Rs = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            if (null !== (t = t.sibling))
                return void (Rs = t);
            Rs = t = e;
        } while (null !== t); 0 === Is && (Is = 5); }
        function Su(e, t, n) { var r = bt, o = Ps.transition; try {
            Ps.transition = null, bt = 1, function (e, t, n, r) { do {
                Eu();
            } while (null !== Ks); if (0 !== (6 & Ms))
                throw Error(a(327)); n = e.finishedWork; var o = e.finishedLanes; if (null === n)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
                throw Error(a(177)); e.callbackNode = null, e.callbackPriority = 0; var i = n.lanes | n.childLanes; if (function (e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
                var o = 31 - it(n), a = 1 << o;
                t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a;
            } }(e, i), e === Os && (Rs = Os = null, Ts = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Xs || (Xs = !0, Ou(tt, (function () { return Eu(), null; }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
                i = Ps.transition, Ps.transition = null;
                var l = bt;
                bt = 1;
                var s = Ms;
                Ms |= 4, Ns.current = null, function (e, t) { if (eo = Wt, pr(e = fr())) {
                    if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var o = r.anchorOffset, i = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, i.nodeType;
                                }
                                catch (x) {
                                    n = null;
                                    break e;
                                }
                                var l = 0, s = -1, u = -1, c = 0, d = 0, f = e, p = null;
                                t: for (;;) {
                                    for (var h; f !== n || 0 !== o && 3 !== f.nodeType || (s = l + o), f !== i || 0 !== r && 3 !== f.nodeType || (u = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (h = f.firstChild);)
                                        p = f, f = h;
                                    for (;;) {
                                        if (f === e)
                                            break t;
                                        if (p === n && ++c === o && (s = l), p === i && ++d === r && (u = l), null !== (h = f.nextSibling))
                                            break;
                                        p = (f = p).parentNode;
                                    }
                                    f = h;
                                }
                                n = -1 === s || -1 === u ? null : { start: s, end: u };
                            }
                            else
                                n = null;
                        }
                    n = n || { start: 0, end: 0 };
                }
                else
                    n = null; for (to = { focusedElem: e, selectionRange: n }, Wt = !1, Jl = t; null !== Jl;)
                    if (e = (t = Jl).child, 0 !== (1028 & t.subtreeFlags) && null !== e)
                        e["return"] = t, Jl = e;
                    else
                        for (; null !== Jl;) {
                            t = Jl;
                            try {
                                var m = t.alternate;
                                if (0 !== (1024 & t.flags))
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== m) {
                                                var g = m.memoizedProps, v = m.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : va(t.type, g), v);
                                                y.__reactInternalSnapshotBeforeUpdate = b;
                                            }
                                            break;
                                        case 3:
                                            var w = t.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(a(163));
                                    }
                            }
                            catch (x) {
                                Cu(t, t["return"], x);
                            }
                            if (null !== (e = t.sibling)) {
                                e["return"] = t["return"], Jl = e;
                                break;
                            }
                            Jl = t["return"];
                        } m = ns, ns = !1; }(e, n), vs(n, e), hr(to), Wt = !!eo, to = eo = null, e.current = n, bs(n, e, o), qe(), Ms = s, bt = l, Ps.transition = i;
            }
            else
                e.current = n; if (Xs && (Xs = !1, Ks = e, qs = o), i = e.pendingLanes, 0 === i && (Ys = null), function (e) { if (at && "function" === typeof at.onCommitFiberRoot)
                try {
                    at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags));
                }
                catch (t) { } }(n.stateNode), ou(e, Ge()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest }); if (Hs)
                throw Hs = !1, e = $s, $s = null, e; 0 !== (1 & qs) && 0 !== e.tag && Eu(), i = e.pendingLanes, 0 !== (1 & i) ? e === Qs ? Gs++ : (Gs = 0, Qs = e) : Gs = 0, Vo(); }(e, t, n, r);
        }
        finally {
            Ps.transition = o, bt = r;
        } return null; }
        function Eu() { if (null !== Ks) {
            var e = wt(qs), t = Ps.transition, n = bt;
            try {
                if (Ps.transition = null, bt = 16 > e ? 16 : e, null === Ks)
                    var r = !1;
                else {
                    if (e = Ks, Ks = null, qs = 0, 0 !== (6 & Ms))
                        throw Error(a(331));
                    var o = Ms;
                    for (Ms |= 4, Jl = e.current; null !== Jl;) {
                        var i = Jl, l = i.child;
                        if (0 !== (16 & Jl.flags)) {
                            var s = i.deletions;
                            if (null !== s) {
                                for (var u = 0; u < s.length; u++) {
                                    var c = s[u];
                                    for (Jl = c; null !== Jl;) {
                                        var d = Jl;
                                        switch (d.tag) {
                                            case 0:
                                            case 11:
                                            case 15: rs(8, d, i);
                                        }
                                        var f = d.child;
                                        if (null !== f)
                                            f["return"] = d, Jl = f;
                                        else
                                            for (; null !== Jl;) {
                                                var p = (d = Jl).sibling, h = d["return"];
                                                if (is(d), d === c) {
                                                    Jl = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p["return"] = h, Jl = p;
                                                    break;
                                                }
                                                Jl = h;
                                            }
                                    }
                                }
                                var m = i.alternate;
                                if (null !== m) {
                                    var g = m.child;
                                    if (null !== g) {
                                        m.child = null;
                                        do {
                                            var v = g.sibling;
                                            g.sibling = null, g = v;
                                        } while (null !== g);
                                    }
                                }
                                Jl = i;
                            }
                        }
                        if (0 !== (2064 & i.subtreeFlags) && null !== l)
                            l["return"] = i, Jl = l;
                        else
                            e: for (; null !== Jl;) {
                                if (0 !== (2048 & (i = Jl).flags))
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15: rs(9, i, i["return"]);
                                    }
                                var y = i.sibling;
                                if (null !== y) {
                                    y["return"] = i["return"], Jl = y;
                                    break e;
                                }
                                Jl = i["return"];
                            }
                    }
                    var b = e.current;
                    for (Jl = b; null !== Jl;) {
                        var w = (l = Jl).child;
                        if (0 !== (2064 & l.subtreeFlags) && null !== w)
                            w["return"] = l, Jl = w;
                        else
                            e: for (l = b; null !== Jl;) {
                                if (0 !== (2048 & (s = Jl).flags))
                                    try {
                                        switch (s.tag) {
                                            case 0:
                                            case 11:
                                            case 15: os(9, s);
                                        }
                                    }
                                    catch (S) {
                                        Cu(s, s["return"], S);
                                    }
                                if (s === l) {
                                    Jl = null;
                                    break e;
                                }
                                var x = s.sibling;
                                if (null !== x) {
                                    x["return"] = s["return"], Jl = x;
                                    break e;
                                }
                                Jl = s["return"];
                            }
                    }
                    if (Ms = o, Vo(), at && "function" === typeof at.onPostCommitFiberRoot)
                        try {
                            at.onPostCommitFiberRoot(ot, e);
                        }
                        catch (S) { }
                    r = !0;
                }
                return r;
            }
            finally {
                bt = n, Ps.transition = t;
            }
        } return !1; }
        function ku(e, t, n) { e = Ia(e, t = hl(0, t = cl(n, t), 1), 1), t = tu(), null !== e && (vt(e, 1, t), ou(e, t)); }
        function Cu(e, t, n) { if (3 === e.tag)
            ku(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    ku(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Ys || !Ys.has(r))) {
                        t = Ia(t, e = ml(t, e = cl(n, e), 1), 1), e = tu(), null !== t && (vt(t, 1, e), ou(t, e));
                        break;
                    }
                }
                t = t["return"];
            } }
        function _u(e, t, n) { var r = e.pingCache; null !== r && r["delete"](t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, Os === e && (Ts & n) === n && (4 === Is || 3 === Is && (130023424 & Ts) === Ts && 500 > Ge() - Us ? pu(e, 0) : js |= n), ou(e, t); }
        function Nu(e, t) { 0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304))); var n = tu(); null !== (e = Oa(e, t)) && (vt(e, t, n), ou(e, n)); }
        function Pu(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), Nu(e, n); }
        function Mu(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, o = e.memoizedState;
                null !== o && (n = o.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(a(314));
        } null !== r && r["delete"](t), Nu(e, n); }
        function Ou(e, t) { return Ye(e, t); }
        function Ru(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
        function Tu(e, t, n, r) { return new Ru(e, t, n, r); }
        function Au(e) { return !(!(e = e.prototype) || !e.isReactComponent); }
        function zu(e, t) { var n = e.alternate; return null === n ? ((n = Tu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
        function Iu(e, t, n, r, o, i) { var l = 2; if (r = e, "function" === typeof e)
            Au(e) && (l = 1);
        else if ("string" === typeof e)
            l = 5;
        else
            e: switch (e) {
                case E: return Du(n.children, o, i, t);
                case k:
                    l = 8, o |= 8;
                    break;
                case C: return (e = Tu(12, n, t, 2 | o)).elementType = C, e.lanes = i, e;
                case M: return (e = Tu(13, n, t, o)).elementType = M, e.lanes = i, e;
                case O: return (e = Tu(19, n, t, o)).elementType = O, e.lanes = i, e;
                case A: return Lu(n, o, i, t);
                default:
                    if ("object" === typeof e && null !== e)
                        switch (e.$$typeof) {
                            case _:
                                l = 10;
                                break e;
                            case N:
                                l = 9;
                                break e;
                            case P:
                                l = 11;
                                break e;
                            case R:
                                l = 14;
                                break e;
                            case T:
                                l = 16, r = null;
                                break e;
                        }
                    throw Error(a(130, null == e ? e : typeof e, ""));
            } return (t = Tu(l, n, t, o)).elementType = e, t.type = r, t.lanes = i, t; }
        function Du(e, t, n, r) { return (e = Tu(7, e, r, t)).lanes = n, e; }
        function Lu(e, t, n, r) { return (e = Tu(22, e, r, t)).elementType = A, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
        function Bu(e, t, n) { return (e = Tu(6, e, null, t)).lanes = n, e; }
        function ju(e, t, n) { return (t = Tu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
        function Zu(e, t, n, r, o) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null; }
        function Fu(e, t, n, r, o, a, i, l, s) { return e = new Zu(e, t, n, l, s), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Tu(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ta(a), e; }
        function Uu(e) { if (!e)
            return Po; e: {
            if (Ue(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(a(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1: if (Ao(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                t = t["return"];
            } while (null !== t);
            throw Error(a(171));
        } if (1 === e.tag) {
            var n = e.type;
            if (Ao(n))
                return Do(e, n, t);
        } return t; }
        function Vu(e, t, n, r, o, a, i, l, s) { return (e = Fu(n, r, !0, e, 0, a, 0, l, s)).context = Uu(null), n = e.current, (a = za(r = tu(), o = nu(n))).callback = void 0 !== t && null !== t ? t : null, Ia(n, a, o), e.current.lanes = o, vt(e, o, r), ou(e, r), e; }
        function Wu(e, t, n, r) { var o = t.current, a = tu(), i = nu(o); return n = Uu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = za(a, i)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ia(o, t, i)) && (ru(e, o, i, a), Da(e, o, i)), i; }
        function Hu(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; }
        function $u(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } }
        function Yu(e, t) { $u(e, t), (e = e.alternate) && $u(e, t); }
        ks = function (e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oo.current)
                wl = !0;
            else {
                if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                    return wl = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Ol(t), ha();
                            break;
                        case 5:
                            ii(t);
                            break;
                        case 1:
                            Ao(t.type) && Lo(t);
                            break;
                        case 4:
                            oi(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context, o = t.memoizedProps.value;
                            No(ya, r._currentValue), r._currentValue = o;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState))
                                return null !== r.dehydrated ? (No(si, 1 & si.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Bl(e, t, n) : (No(si, 1 & si.current), null !== (e = Hl(e, t, n)) ? e.sibling : null);
                            No(si, 1 & si.current);
                            break;
                        case 19:
                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                if (r)
                                    return Vl(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), No(si, si.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, Cl(e, t, n);
                    } return Hl(e, t, n); }(e, t, n);
                wl = 0 !== (131072 & e.flags);
            }
        else
            wl = !1, aa && 0 !== (1048576 & t.flags) && ea(t, Yo, t.index); switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Wl(e, t), e = t.pendingProps;
                var o = To(t, Mo.current);
                Ca(t, n), o = ki(null, t, r, e, o, n);
                var i = Ci();
                return t.flags |= 1, "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ao(r) ? (i = !0, Lo(t)) : i = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, Ta(t), o.updater = Ua, t.stateNode = o, o._reactInternals = t, $a(t, r, e, n), t = Ml(null, t, r, !0, i, n)) : (t.tag = 0, aa && i && ta(t), xl(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (Wl(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function (e) { if ("function" === typeof e)
                        return Au(e) ? 1 : 0; if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P)
                            return 11;
                        if (e === R)
                            return 14;
                    } return 2; }(r), e = va(r, e), o) {
                        case 0:
                            t = Nl(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Pl(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Sl(null, t, r, e, n);
                            break e;
                        case 14:
                            t = El(null, t, r, va(r.type, e), n);
                            break e;
                    }
                    throw Error(a(306, r, ""));
                }
                return t;
            case 0: return r = t.type, o = t.pendingProps, Nl(e, t, r, o = t.elementType === r ? o : va(r, o), n);
            case 1: return r = t.type, o = t.pendingProps, Pl(e, t, r, o = t.elementType === r ? o : va(r, o), n);
            case 3:
                e: {
                    if (Ol(t), null === e)
                        throw Error(a(387));
                    r = t.pendingProps, o = (i = t.memoizedState).element, Aa(e, t), Ba(t, r, null, n);
                    var l = t.memoizedState;
                    if (r = l.element, i.isDehydrated) {
                        if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                            t = Rl(e, t, r, n, o = cl(Error(a(423)), t));
                            break e;
                        }
                        if (r !== o) {
                            t = Rl(e, t, r, n, o = cl(Error(a(424)), t));
                            break e;
                        }
                        for (oa = uo(t.stateNode.containerInfo.firstChild), ra = t, aa = !0, ia = null, n = Qa(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (ha(), r === o) {
                            t = Hl(e, t, n);
                            break e;
                        }
                        xl(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5: return ii(t), null === e && ca(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = o.children, no(r, o) ? l = null : null !== i && no(r, i) && (t.flags |= 32), _l(e, t), xl(e, t, l, n), t.child;
            case 6: return null === e && ca(t), null;
            case 13: return Bl(e, t, n);
            case 4: return oi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ga(t, null, r, n) : xl(e, t, r, n), t.child;
            case 11: return r = t.type, o = t.pendingProps, Sl(e, t, r, o = t.elementType === r ? o : va(r, o), n);
            case 7: return xl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return xl(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, No(ya, r._currentValue), r._currentValue = l, null !== i)
                        if (lr(i.value, l)) {
                            if (i.children === o.children && !Oo.current) {
                                t = Hl(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (i = t.child) && (i["return"] = t); null !== i;) {
                                var s = i.dependencies;
                                if (null !== s) {
                                    l = i.child;
                                    for (var u = s.firstContext; null !== u;) {
                                        if (u.context === r) {
                                            if (1 === i.tag) {
                                                (u = za(-1, n & -n)).tag = 2;
                                                var c = i.updateQueue;
                                                if (null !== c) {
                                                    var d = (c = c.shared).pending;
                                                    null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u;
                                                }
                                            }
                                            i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), ka(i["return"], n, t), s.lanes |= n;
                                            break;
                                        }
                                        u = u.next;
                                    }
                                }
                                else if (10 === i.tag)
                                    l = i.type === t.type ? null : i.child;
                                else if (18 === i.tag) {
                                    if (null === (l = i["return"]))
                                        throw Error(a(341));
                                    l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), ka(l, n, t), l = i.sibling;
                                }
                                else
                                    l = i.child;
                                if (null !== l)
                                    l["return"] = i;
                                else
                                    for (l = i; null !== l;) {
                                        if (l === t) {
                                            l = null;
                                            break;
                                        }
                                        if (null !== (i = l.sibling)) {
                                            i["return"] = l["return"], l = i;
                                            break;
                                        }
                                        l = l["return"];
                                    }
                                i = l;
                            }
                    xl(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9: return o = t.type, r = t.pendingProps.children, Ca(t, n), r = r(o = _a(o)), t.flags |= 1, xl(e, t, r, n), t.child;
            case 14: return o = va(r = t.type, t.pendingProps), El(e, t, r, o = va(r.type, o), n);
            case 15: return kl(e, t, t.type, t.pendingProps, n);
            case 17: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : va(r, o), Wl(e, t), t.tag = 1, Ao(r) ? (e = !0, Lo(t)) : e = !1, Ca(t, n), Wa(t, r, o), $a(t, r, o, n), Ml(null, t, r, !0, e, n);
            case 19: return Vl(e, t, n);
            case 22: return Cl(e, t, n);
        } throw Error(a(156, t.tag)); };
        var Xu = "function" === typeof reportError ? reportError : function (e) { console.error(e); };
        function Ku(e) { this._internalRoot = e; }
        function qu(e) { this._internalRoot = e; }
        function Gu(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); }
        function Qu(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); }
        function Ju() { }
        function ec(e, t, n, r, o) { var a = n._reactRootContainer; if (a) {
            var i = a;
            if ("function" === typeof o) {
                var l = o;
                o = function () { var e = Hu(i); l.call(e); };
            }
            Wu(t, i, e, o);
        }
        else
            i = function (e, t, n, r, o) { if (o) {
                if ("function" === typeof r) {
                    var a = r;
                    r = function () { var e = Hu(i); a.call(e); };
                }
                var i = Vu(t, r, e, 0, null, !1, 0, "", Ju);
                return e._reactRootContainer = i, e[mo] = i.current, Ur(8 === e.nodeType ? e.parentNode : e), du(), i;
            } for (; o = e.lastChild;)
                e.removeChild(o); if ("function" === typeof r) {
                var l = r;
                r = function () { var e = Hu(s); l.call(e); };
            } var s = Fu(e, 0, !1, null, 0, !1, 0, "", Ju); return e._reactRootContainer = s, e[mo] = s.current, Ur(8 === e.nodeType ? e.parentNode : e), du((function () { Wu(t, s, n, r); })), s; }(n, t, e, o, r); return Hu(i); }
        qu.prototype.render = Ku.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(a(409)); Wu(e, t, null, null); }, qu.prototype.unmount = Ku.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            du((function () { Wu(null, e, null, null); })), t[mo] = null;
        } }, qu.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = kt();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < At.length && 0 !== t && t < At[n].priority; n++)
                ;
            At.splice(n, 0, e), 0 === n && Lt(e);
        } }, xt = function (e) { switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = dt(t.pendingLanes);
                    0 !== n && (yt(t, 1 | n), ou(t, Ge()), 0 === (6 & Ms) && (Vs = Ge() + 500, Vo()));
                }
                break;
            case 13: du((function () { var t = Oa(e, 1); if (null !== t) {
                var n = tu();
                ru(t, e, 1, n);
            } })), Yu(e, 1);
        } }, St = function (e) { if (13 === e.tag) {
            var t = Oa(e, 134217728);
            if (null !== t)
                ru(t, e, 134217728, tu());
            Yu(e, 134217728);
        } }, Et = function (e) { if (13 === e.tag) {
            var t = nu(e), n = Oa(e, t);
            if (null !== n)
                ru(n, e, t, tu());
            Yu(e, t);
        } }, kt = function () { return bt; }, Ct = function (e, t) { var n = bt; try {
            return bt = e, t();
        }
        finally {
            bt = n;
        } }, Se = function (e, t, n) { switch (t) {
            case "input":
                if (Q(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = So(r);
                            if (!o)
                                throw Error(a(90));
                            Y(r), Q(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                ae(e, n);
                break;
            case "select": null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        } }, Pe = cu, Me = du;
        var tc = { usingClientEntryPoint: !1, Events: [wo, xo, So, _e, Ne, cu] }, nc = { findFiberByHostInstance: bo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rc = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = He(e)) ? null : e.stateNode; }, findFiberByHostInstance: nc.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!oc.isDisabled && oc.supportsFiber)
                try {
                    ot = oc.inject(rc), at = oc;
                }
                catch (ce) { }
        }
        t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Gu(t))
            throw Error(a(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.createRoot = function (e, t) { if (!Gu(e))
            throw Error(a(299)); var n = !1, r = "", o = Xu; return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = Fu(e, 1, !1, null, 0, n, 0, r, o), e[mo] = t.current, Ur(8 === e.nodeType ? e.parentNode : e), new Ku(t); }, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" === typeof e.render)
                throw Error(a(188));
            throw e = Object.keys(e).join(","), Error(a(268, e));
        } return e = null === (e = He(t)) ? null : e.stateNode; }, t.flushSync = function (e) { return du(e); }, t.hydrate = function (e, t, n) { if (!Qu(t))
            throw Error(a(200)); return ec(null, e, t, !0, n); }, t.hydrateRoot = function (e, t, n) { if (!Gu(e))
            throw Error(a(405)); var r = null != n && n.hydratedSources || null, o = !1, i = "", l = Xu; if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Vu(t, null, e, 1, null != n ? n : null, o, 0, i, l), e[mo] = t.current, Ur(e), r)
            for (e = 0; e < r.length; e++)
                o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o); return new qu(t); }, t.render = function (e, t, n) { if (!Qu(t))
            throw Error(a(200)); return ec(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!Qu(e))
            throw Error(a(40)); return !!e._reactRootContainer && (du((function () { ec(null, null, e, !1, (function () { e._reactRootContainer = null, e[mo] = null; })); })), !0); }, t.unstable_batchedUpdates = cu, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Qu(n))
            throw Error(a(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(a(38)); return ec(e, t, n, !1, r); }, t.version = "18.2.0-next-9e3b772b8-20220608";
    }, 1250: function (e, t, n) {
        "use strict";
        var r = n(4164);
        t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot;
    }, 4164: function (e, t, n) {
        "use strict";
        !function e() { if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (t) {
                console.error(t);
            } }(), e.exports = n(4463);
    }, 1372: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol["for"], r = n ? Symbol["for"]("react.element") : 60103, o = n ? Symbol["for"]("react.portal") : 60106, a = n ? Symbol["for"]("react.fragment") : 60107, i = n ? Symbol["for"]("react.strict_mode") : 60108, l = n ? Symbol["for"]("react.profiler") : 60114, s = n ? Symbol["for"]("react.provider") : 60109, u = n ? Symbol["for"]("react.context") : 60110, c = n ? Symbol["for"]("react.async_mode") : 60111, d = n ? Symbol["for"]("react.concurrent_mode") : 60111, f = n ? Symbol["for"]("react.forward_ref") : 60112, p = n ? Symbol["for"]("react.suspense") : 60113, h = n ? Symbol["for"]("react.suspense_list") : 60120, m = n ? Symbol["for"]("react.memo") : 60115, g = n ? Symbol["for"]("react.lazy") : 60116, v = n ? Symbol["for"]("react.block") : 60121, y = n ? Symbol["for"]("react.fundamental") : 60117, b = n ? Symbol["for"]("react.responder") : 60118, w = n ? Symbol["for"]("react.scope") : 60119;
        function x(e) { if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case r: switch (e = e.type) {
                    case c:
                    case d:
                    case a:
                    case l:
                    case i:
                    case p: return e;
                    default: switch (e = e && e.$$typeof) {
                        case u:
                        case f:
                        case g:
                        case m:
                        case s: return e;
                        default: return t;
                    }
                }
                case o: return t;
            }
        } }
        function S(e) { return x(e) === d; }
        t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = s, t.Element = r, t.ForwardRef = f, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = l, t.StrictMode = i, t.Suspense = p, t.isAsyncMode = function (e) { return S(e) || x(e) === c; }, t.isConcurrentMode = S, t.isContextConsumer = function (e) { return x(e) === u; }, t.isContextProvider = function (e) { return x(e) === s; }, t.isElement = function (e) { return "object" === typeof e && null !== e && e.$$typeof === r; }, t.isForwardRef = function (e) { return x(e) === f; }, t.isFragment = function (e) { return x(e) === a; }, t.isLazy = function (e) { return x(e) === g; }, t.isMemo = function (e) { return x(e) === m; }, t.isPortal = function (e) { return x(e) === o; }, t.isProfiler = function (e) { return x(e) === l; }, t.isStrictMode = function (e) { return x(e) === i; }, t.isSuspense = function (e) { return x(e) === p; }, t.isValidElementType = function (e) { return "string" === typeof e || "function" === typeof e || e === a || e === d || e === l || e === i || e === p || e === h || "object" === typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === s || e.$$typeof === u || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === v); }, t.typeOf = x;
    }, 7441: function (e, t, n) {
        "use strict";
        e.exports = n(1372);
    }, 6374: function (e, t, n) {
        "use strict";
        var r = n(2791), o = Symbol["for"]("react.element"), a = Symbol["for"]("react.fragment"), i = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) { var r, a = {}, u = null, c = null; for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === a[r] && (a[r] = t[r]); return { $$typeof: o, type: e, key: u, ref: c, props: a, _owner: l.current }; }
        t.Fragment = a, t.jsx = u, t.jsxs = u;
    }, 9117: function (e, t) {
        "use strict";
        var n = Symbol["for"]("react.element"), r = Symbol["for"]("react.portal"), o = Symbol["for"]("react.fragment"), a = Symbol["for"]("react.strict_mode"), i = Symbol["for"]("react.profiler"), l = Symbol["for"]("react.provider"), s = Symbol["for"]("react.context"), u = Symbol["for"]("react.forward_ref"), c = Symbol["for"]("react.suspense"), d = Symbol["for"]("react.memo"), f = Symbol["for"]("react.lazy"), p = Symbol.iterator;
        var h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, g = {};
        function v(e, t, n) { this.props = e, this.context = t, this.refs = g, this.updater = n || h; }
        function y() { }
        function b(e, t, n) { this.props = e, this.context = t, this.refs = g, this.updater = n || h; }
        v.prototype.isReactComponent = {}, v.prototype.setState = function (e, t) { if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, v.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = v.prototype;
        var w = b.prototype = new y;
        w.constructor = b, m(w, v.prototype), w.isPureReactComponent = !0;
        var x = Array.isArray, S = Object.prototype.hasOwnProperty, E = { current: null }, k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) { var o, a = {}, i = null, l = null; if (null != t)
            for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t)
                S.call(t, o) && !k.hasOwnProperty(o) && (a[o] = t[o]); var s = arguments.length - 2; if (1 === s)
            a.children = r;
        else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            a.children = u;
        } if (e && e.defaultProps)
            for (o in s = e.defaultProps)
                void 0 === a[o] && (a[o] = s[o]); return { $$typeof: n, type: e, key: i, ref: l, props: a, _owner: E.current }; }
        function _(e) { return "object" === typeof e && null !== e && e.$$typeof === n; }
        var N = /\/+/g;
        function P(e, t) { return "object" === typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); }
        function M(e, t, o, a, i) { var l = typeof e; "undefined" !== l && "boolean" !== l || (e = null); var s = !1; if (null === e)
            s = !0;
        else
            switch (l) {
                case "string":
                case "number":
                    s = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r: s = !0;
                }
            } if (s)
            return i = i(s = e), e = "" === a ? "." + P(s, 0) : a, x(i) ? (o = "", null != e && (o = e.replace(N, "$&/") + "/"), M(i, t, o, "", (function (e) { return e; }))) : null != i && (_(i) && (i = function (e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(i, o + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(N, "$&/") + "/") + e)), t.push(i)), 1; if (s = 0, a = "" === a ? "." : a + ":", x(e))
            for (var u = 0; u < e.length; u++) {
                var c = a + P(l = e[u], u);
                s += M(l, t, o, c, i);
            }
        else if (c = function (e) { return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" === typeof c)
            for (e = c.call(e), u = 0; !(l = e.next()).done;)
                s += M(l = l.value, t, o, c = a + P(l, u++), i);
        else if ("object" === l)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return s; }
        function O(e, t, n) { if (null == e)
            return e; var r = [], o = 0; return M(e, r, "", "", (function (e) { return t.call(n, e, o++); })), r; }
        function R(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result["default"]; throw e._result; }
        var T = { current: null }, A = { transition: null }, z = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: A, ReactCurrentOwner: E };
        t.Children = { map: O, forEach: function (e, t, n) { O(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return O(e, (function () { t++; })), t; }, toArray: function (e) { return O(e, (function (e) { return e; })) || []; }, only: function (e) { if (!_(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = v, t.Fragment = o, t.Profiler = i, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, t.cloneElement = function (e, t, r) { if (null === e || void 0 === e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var o = m({}, e.props), a = e.key, i = e.ref, l = e._owner; if (null != t) {
            if (void 0 !== t.ref && (i = t.ref, l = E.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps)
                var s = e.type.defaultProps;
            for (u in t)
                S.call(t, u) && !k.hasOwnProperty(u) && (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
        } var u = arguments.length - 2; if (1 === u)
            o.children = r;
        else if (1 < u) {
            s = Array(u);
            for (var c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            o.children = s;
        } return { $$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: l }; }, t.createContext = function (e) { return (e = { $$typeof: s, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: l, _context: e }, e.Consumer = e; }, t.createElement = C, t.createFactory = function (e) { var t = C.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: u, render: e }; }, t.isValidElement = _, t.lazy = function (e) { return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: R }; }, t.memo = function (e, t) { return { $$typeof: d, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = A.transition; A.transition = {}; try {
            e();
        }
        finally {
            A.transition = t;
        } }, t.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.useCallback = function (e, t) { return T.current.useCallback(e, t); }, t.useContext = function (e) { return T.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return T.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return T.current.useEffect(e, t); }, t.useId = function () { return T.current.useId(); }, t.useImperativeHandle = function (e, t, n) { return T.current.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return T.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return T.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return T.current.useMemo(e, t); }, t.useReducer = function (e, t, n) { return T.current.useReducer(e, t, n); }, t.useRef = function (e) { return T.current.useRef(e); }, t.useState = function (e) { return T.current.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return T.current.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return T.current.useTransition(); }, t.version = "18.2.0";
    }, 2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
    }, 184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
    }, 6813: function (e, t) {
        "use strict";
        function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, o = e[r];
            if (!(0 < a(o, t)))
                break e;
            e[r] = t, e[n] = o, n = r;
        } }
        function r(e) { return 0 === e.length ? null : e[0]; }
        function o(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i;) {
                var l = 2 * (r + 1) - 1, s = e[l], u = l + 1, c = e[u];
                if (0 > a(s, n))
                    u < o && 0 > a(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);
                else {
                    if (!(u < o && 0 > a(c, n)))
                        break e;
                    e[r] = c, e[u] = n, r = u;
                }
            }
        } return t; }
        function a(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; }
        if ("object" === typeof performance && "function" === typeof performance.now) {
            var i = performance;
            t.unstable_now = function () { return i.now(); };
        }
        else {
            var l = Date, s = l.now();
            t.unstable_now = function () { return l.now() - s; };
        }
        var u = [], c = [], d = 1, f = null, p = 3, h = !1, m = !1, g = !1, v = "function" === typeof setTimeout ? setTimeout : null, y = "function" === typeof clearTimeout ? clearTimeout : null, b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                o(c);
            else {
                if (!(t.startTime <= e))
                    break;
                o(c), t.sortIndex = t.expirationTime, n(u, t);
            }
            t = r(c);
        } }
        function x(e) { if (g = !1, w(e), !m)
            if (null !== r(u))
                m = !0, A(S);
            else {
                var t = r(c);
                null !== t && z(x, t.startTime - e);
            } }
        function S(e, n) { m = !1, g && (g = !1, y(_), _ = -1), h = !0; var a = p; try {
            for (w(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !M());) {
                var i = f.callback;
                if ("function" === typeof i) {
                    f.callback = null, p = f.priorityLevel;
                    var l = i(f.expirationTime <= n);
                    n = t.unstable_now(), "function" === typeof l ? f.callback = l : f === r(u) && o(u), w(n);
                }
                else
                    o(u);
                f = r(u);
            }
            if (null !== f)
                var s = !0;
            else {
                var d = r(c);
                null !== d && z(x, d.startTime - n), s = !1;
            }
            return s;
        }
        finally {
            f = null, p = a, h = !1;
        } }
        "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E, k = !1, C = null, _ = -1, N = 5, P = -1;
        function M() { return !(t.unstable_now() - P < N); }
        function O() { if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
                n = C(!0, e);
            }
            finally {
                n ? E() : (k = !1, C = null);
            }
        }
        else
            k = !1; }
        if ("function" === typeof b)
            E = function () { b(O); };
        else if ("undefined" !== typeof MessageChannel) {
            var R = new MessageChannel, T = R.port2;
            R.port1.onmessage = O, E = function () { T.postMessage(null); };
        }
        else
            E = function () { v(O, 0); };
        function A(e) { C = e, k || (k = !0, E()); }
        function z(e, n) { _ = v((function () { e(t.unstable_now()); }), n); }
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { m || h || (m = !0, A(S)); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_getFirstCallbackNode = function () { return r(u); }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, o, a) { var i = t.unstable_now(); switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i : a = i, e) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 1073741823;
                break;
            case 4:
                l = 1e4;
                break;
            default: l = 5e3;
        } return e = { id: d++, callback: o, priorityLevel: e, startTime: a, expirationTime: l = a + l, sortIndex: -1 }, a > i ? (e.sortIndex = a, n(c, e), null === r(u) && e === r(c) && (g ? (y(_), _ = -1) : g = !0, z(x, a - i))) : (e.sortIndex = l, n(u, e), m || h || (m = !0, A(S))), e; }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; };
    }, 5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
    }, 1561: function (e, t, n) {
        "use strict";
        var r = n(2791);
        var o = "function" === typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t; }, a = r.useState, i = r.useEffect, l = r.useLayoutEffect, s = r.useDebugValue;
        function u(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !o(e, n);
        }
        catch (r) {
            return !0;
        } }
        var c = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function (e, t) { return t(); } : function (e, t) { var n = t(), r = a({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, c = r[1]; return l((function () { o.value = n, o.getSnapshot = t, u(o) && c({ inst: o }); }), [e, n, t]), i((function () { return u(o) && c({ inst: o }), e((function () { u(o) && c({ inst: o }); })); }), [e]), s(n), n; };
        t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
    }, 7595: function (e, t, n) {
        "use strict";
        var r = n(2791), o = n(7248);
        var a = "function" === typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t; }, i = o.useSyncExternalStore, l = r.useRef, s = r.useEffect, u = r.useMemo, c = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) { var d = l(null); if (null === d.current) {
            var f = { hasValue: !1, value: null };
            d.current = f;
        }
        else
            f = d.current; d = u((function () { function e(e) { if (!s) {
            if (s = !0, i = e, e = r(e), void 0 !== o && f.hasValue) {
                var t = f.value;
                if (o(t, e))
                    return l = t;
            }
            return l = e;
        } if (t = l, a(i, e))
            return t; var n = r(e); return void 0 !== o && o(t, n) ? t : (i = e, l = n); } var i, l, s = !1, u = void 0 === n ? null : n; return [function () { return e(t()); }, null === u ? void 0 : function () { return e(u()); }]; }), [t, n, r, o]); var p = i(e, d[0], d[1]); return s((function () { f.hasValue = !0, f.value = p; }), [p]), c(p), p; };
    }, 7248: function (e, t, n) {
        "use strict";
        e.exports = n(1561);
    }, 327: function (e, t, n) {
        "use strict";
        e.exports = n(7595);
    }, 4836: function (e) { e.exports = function (e) { return e && e.__esModule ? e : { "default": e }; }, e.exports.__esModule = !0, e.exports["default"] = e.exports; }, 7462: function (e, t, n) {
        "use strict";
        function r() { return r = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        } return e; }, r.apply(this, arguments); }
        n.d(t, { Z: function () { return r; } });
    }, 3366: function (e, t, n) {
        "use strict";
        function r(e, t) { if (null == e)
            return {}; var n, r, o = {}, a = Object.keys(e); for (r = 0; r < a.length; r++)
            n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]); return o; }
        n.d(t, { Z: function () { return r; } });
    }, 3733: function (e, t, n) {
        "use strict";
        function r(e) { var t, n, o = ""; if ("string" == typeof e || "number" == typeof e)
            o += e;
        else if ("object" == typeof e)
            if (Array.isArray(e)) {
                var a = e.length;
                for (t = 0; t < a; t++)
                    e[t] && (n = r(e[t])) && (o && (o += " "), o += n);
            }
            else
                for (n in e)
                    e[n] && (o && (o += " "), o += n); return o; }
        n.d(t, { Z: function () { return o; } });
        var o = function () { for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++)
            (e = arguments[n]) && (t = r(e)) && (o && (o += " "), o += t); return o; };
    } }, t = {}; function n(r) { var o = t[r]; if (void 0 !== o)
    return o.exports; var a = t[r] = { exports: {} }; return e[r](a, a.exports, n), a.exports; } (function () { var e, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }; n.t = function (r, o) { if (1 & o && (r = this(r)), 8 & o)
    return r; if ("object" === typeof r && r) {
    if (4 & o && r.__esModule)
        return r;
    if (16 & o && "function" === typeof r.then)
        return r;
} var a = Object.create(null); n.r(a); var i = {}; e = e || [null, t({}), t([]), t(t)]; for (var l = 2 & o && r; "object" == typeof l && !~e.indexOf(l); l = t(l))
    Object.getOwnPropertyNames(l).forEach((function (e) { return i[e] = function () { return r[e]; }; })); return i["default"] = function () { return r; }, n.d(a, i), a; }; })(), n.d = function (e, t) { for (var r in t)
    n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.r = function (e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, n.p = "/", (function () {
    "use strict";
    var _b, _d, _f, _g, _h, _j, _k, _m;
    var e, t = n(2791), r = n.t(t, 2), o = n(1250);
    function a() { return a = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, a.apply(this, arguments); }
    !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(e || (e = {}));
    var i = "popstate";
    function l(e, t) { if (!1 === e || null === e || "undefined" === typeof e)
        throw new Error(t); }
    function s(e, t) { if (!e) {
        "undefined" !== typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (n) { }
    } }
    function u(e, t) { return { usr: e.state, key: e.key, idx: t }; }
    function c(e, t, n, r) { return void 0 === n && (n = null), a({ pathname: "string" === typeof e ? e : e.pathname, search: "", hash: "" }, "string" === typeof t ? f(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); }
    function d(e) { var _b = e.pathname, t = _b === void 0 ? "/" : _b, _d = e.search, n = _d === void 0 ? "" : _d, _f = e.hash, r = _f === void 0 ? "" : _f; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; }
    function f(e) { var t = {}; if (e) {
        var n_17 = e.indexOf("#");
        n_17 >= 0 && (t.hash = e.substr(n_17), e = e.substr(0, n_17));
        var r_2 = e.indexOf("?");
        r_2 >= 0 && (t.search = e.substr(r_2), e = e.substr(0, r_2)), e && (t.pathname = e);
    } return t; }
    function p(t, n, r, o) { void 0 === o && (o = {}); var _b = o.window, s = _b === void 0 ? document.defaultView : _b, _d = o.v5Compat, f = _d === void 0 ? !1 : _d, p = s.history, h = e.Pop, m = null, g = v(); function v() { return (p.state || { idx: null }).idx; } function y() { h = e.Pop; var t = v(), n = null == t ? null : t - g; g = t, m && m({ action: h, location: w.location, delta: n }); } function b(e) { var t = "null" !== s.location.origin ? s.location.origin : s.location.href, n = "string" === typeof e ? e : d(e); return l(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == g && (g = 0, p.replaceState(a({}, p.state, { idx: g }), "")); var w = { get action() { return h; }, get location() { return t(s, p); }, listen: function (e) { if (m)
            throw new Error("A history only accepts one active listener"); return s.addEventListener(i, y), m = e, function () { s.removeEventListener(i, y), m = null; }; }, createHref: function (e) { return n(s, e); }, createURL: b, encodeLocation: function (e) { var t = b(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (t, n) { h = e.Push; var o = c(w.location, t, n); r && r(o, t), g = v() + 1; var a = u(o, g), i = w.createHref(o); try {
            p.pushState(a, "", i);
        }
        catch (l) {
            if (l instanceof DOMException && "DataCloneError" === l.name)
                throw l;
            s.location.assign(i);
        } f && m && m({ action: h, location: w.location, delta: 1 }); }, replace: function (t, n) { h = e.Replace; var o = c(w.location, t, n); r && r(o, t), g = v(); var a = u(o, g), i = w.createHref(o); p.replaceState(a, "", i), f && m && m({ action: h, location: w.location, delta: 0 }); }, go: function (e) { return p.go(e); } }; return w; }
    var h;
    !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(h || (h = {}));
    new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    function m(e, t, n) { void 0 === n && (n = "/"); var r = M(("string" === typeof t ? f(t) : t).pathname || "/", n); if (null == r)
        return null; var o = g(e); !function (e) { e.sort((function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { var n = e.length === t.length && e.slice(0, -1).every((function (e, n) { return e === t[n]; })); return n ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), t.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(o); var a = null; for (var i_2 = 0; null == a && i_2 < o.length; ++i_2)
        a = _(o[i_2], P(r)); return a; }
    function g(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var o = function (e, o, a) { var i = { relativePath: void 0 === a ? e.path || "" : a, caseSensitive: !0 === e.caseSensitive, childrenIndex: o, route: e }; i.relativePath.startsWith("/") && (l(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(r.length)); var s = z([r, i.relativePath]), u = n.concat(i); e.children && e.children.length > 0 && (l(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), g(e.children, t, u, s)), (null != e.path || e.index) && t.push({ path: s, score: C(s, e.index), routesMeta: u }); }; return e.forEach((function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (var _b = 0, _d = v(e.path); _b < _d.length; _b++) {
            var r_3 = _d[_b];
            o(e, t, r_3);
        }
    else
        o(e, t); })), t; }
    function v(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n = t[0], r = t.slice(1), o = n.endsWith("?"), a = n.replace(/\?$/, ""); if (0 === r.length)
        return o ? [a, ""] : [a]; var i = v(r.join("/")), l = []; return l.push.apply(l, i.map((function (e) { return "" === e ? a : [a, e].join("/"); }))), o && l.push.apply(l, i), l.map((function (t) { return e.startsWith("/") && "" === t ? "/" : t; })); }
    var y = /^:[\w-]+$/, b = 3, w = 2, x = 1, S = 10, E = -2, k = function (e) { return "*" === e; };
    function C(e, t) { var n = e.split("/"), r = n.length; return n.some(k) && (r += E), t && (r += w), n.filter((function (e) { return !k(e); })).reduce((function (e, t) { return e + (y.test(t) ? b : "" === t ? x : S); }), r); }
    function _(e, t) { var n = e.routesMeta, r = {}, o = "/", a = []; for (var i_3 = 0; i_3 < n.length; ++i_3) {
        var e_12 = n[i_3], l_2 = i_3 === n.length - 1, s_1 = "/" === o ? t : t.slice(o.length) || "/", u_1 = N({ path: e_12.relativePath, caseSensitive: e_12.caseSensitive, end: l_2 }, s_1);
        if (!u_1)
            return null;
        Object.assign(r, u_1.params);
        var c_1 = e_12.route;
        a.push({ params: r, pathname: z([o, u_1.pathname]), pathnameBase: I(z([o, u_1.pathnameBase])), route: c_1 }), "/" !== u_1.pathnameBase && (o = z([o, u_1.pathnameBase]));
    } return a; }
    function N(e, t) { "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var _b = function (e, t, n) { void 0 === t && (t = !1); void 0 === n && (n = !0); s("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (function (e, t, n) { return (r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"); })); e.endsWith("*") ? (r.push({ paramName: "*" }), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))"); var a = new RegExp(o, t ? void 0 : "i"); return [a, r]; }(e.path, e.caseSensitive, e.end), n = _b[0], r = _b[1], o = t.match(n); if (!o)
        return null; var a = o[0], i = a.replace(/(.)\/+$/, "$1"), l = o.slice(1); return { params: r.reduce((function (e, t, n) { var r = t.paramName, o = t.isOptional; if ("*" === r) {
            var e_13 = l[n] || "";
            i = a.slice(0, a.length - e_13.length).replace(/(.)\/+$/, "$1");
        } var u = l[n]; return e[r] = o && !u ? void 0 : function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return s(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(u || "", r), e; }), {}), pathname: a, pathnameBase: i, pattern: e }; }
    function P(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return s(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } }
    function M(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; }
    function O(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; }
    function R(e) { return e.filter((function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; })); }
    function T(e, t) { var n = R(e); return t ? n.map((function (t, n) { return n === e.length - 1 ? t.pathname : t.pathnameBase; })) : n.map((function (e) { return e.pathnameBase; })); }
    function A(e, t, n, r) { var o; void 0 === r && (r = !1), "string" === typeof e ? o = f(e) : (o = a({}, e), l(!o.pathname || !o.pathname.includes("?"), O("?", "pathname", "search", o)), l(!o.pathname || !o.pathname.includes("#"), O("#", "pathname", "hash", o)), l(!o.search || !o.search.includes("#"), O("#", "search", "hash", o))); var i, s = "" === e || "" === o.pathname, u = s ? "/" : o.pathname; if (null == u)
        i = n;
    else {
        var e_14 = t.length - 1;
        if (!r && u.startsWith("..")) {
            var t_13 = u.split("/");
            for (; ".." === t_13[0];)
                t_13.shift(), e_14 -= 1;
            o.pathname = t_13.join("/");
        }
        i = e_14 >= 0 ? t[e_14] : "/";
    } var c = function (e, t) { void 0 === t && (t = "/"); var _b = "string" === typeof e ? f(e) : e, n = _b.pathname, _d = _b.search, r = _d === void 0 ? "" : _d, _f = _b.hash, o = _f === void 0 ? "" : _f, a = n ? n.startsWith("/") ? n : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: a, search: D(r), hash: L(o) }; }(o, i), d = u && "/" !== u && u.endsWith("/"), p = (s || "." === u) && n.endsWith("/"); return c.pathname.endsWith("/") || !d && !p || (c.pathname += "/"), c; }
    var z = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, I = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, D = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, L = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; };
    Error;
    function B(e) { return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e; }
    var j = ["post", "put", "patch", "delete"], Z = (new Set(j), __spreadArray(["get"], j, true));
    new Set(Z), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
    Symbol("deferred");
    function F() { return F = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, F.apply(this, arguments); }
    var U = t.createContext(null);
    var V = t.createContext(null);
    var W = t.createContext(null);
    var H = t.createContext(null);
    var $ = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
    var Y = t.createContext(null);
    function X() { return null != t.useContext(H); }
    function K() { return X() || l(!1), t.useContext(H).location; }
    function q(e) { t.useContext(W).static || t.useLayoutEffect(e); }
    function G() { var e = t.useContext($).isDataRoute; return e ? function () { var e = le(ae.UseNavigateStable).router, n = ue(ie.UseNavigateStable), r = t.useRef(!1); q((function () { r.current = !0; })); var o = t.useCallback((function (t, o) { void 0 === o && (o = {}), r.current && ("number" === typeof t ? e.navigate(t) : e.navigate(t, F({ fromRouteId: n }, o))); }), [e, n]); return o; }() : function () { X() || l(!1); var e = t.useContext(U), _b = t.useContext(W), n = _b.basename, r = _b.future, o = _b.navigator, a = t.useContext($).matches, i = K().pathname, s = JSON.stringify(T(a, r.v7_relativeSplatPath)), u = t.useRef(!1); return q((function () { u.current = !0; })), t.useCallback((function (t, r) { if (void 0 === r && (r = {}), !u.current)
        return; if ("number" === typeof t)
        return void o.go(t); var a = A(t, JSON.parse(s), i, "path" === r.relative); null == e && "/" !== n && (a.pathname = "/" === a.pathname ? n : z([n, a.pathname])), (r.replace ? o.replace : o.push)(a, r.state, r); }), [n, o, s, i, e]); }(); }
    function Q(e, n) { var r = (void 0 === n ? {} : n).relative, o = t.useContext(W).future, a = t.useContext($).matches, i = K().pathname, l = JSON.stringify(T(a, o.v7_relativeSplatPath)); return t.useMemo((function () { return A(e, JSON.parse(l), i, "path" === r); }), [e, l, i, r]); }
    function J(n, r, o, a) { X() || l(!1); var i = t.useContext(W).navigator, s = t.useContext($).matches, u = s[s.length - 1], c = u ? u.params : {}, d = (u && u.pathname, u ? u.pathnameBase : "/"); u && u.route; var p, h = K(); if (r) {
        var g;
        var e_15 = "string" === typeof r ? f(r) : r;
        "/" === d || (null == (g = e_15.pathname) ? void 0 : g.startsWith(d)) || l(!1), p = e_15;
    }
    else
        p = h; var v = p.pathname || "/", y = m(n, { pathname: "/" === d ? v : v.slice(d.length) || "/" }); var b = oe(y && y.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, c, e.params), pathname: z([d, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? d : z([d, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); })), s, o, a); return r && b ? t.createElement(H.Provider, { value: { location: F({ pathname: "/", search: "", hash: "", state: null, key: "default" }, p), navigationType: e.Pop } }, b) : b; }
    function ee() { var e = function () { var e; var n = t.useContext(Y), r = se(ie.UseRouteError), o = ue(ie.UseRouteError); if (void 0 !== n)
        return n; return null == (e = r.errors) ? void 0 : e[o]; }(), n = B(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: o }; return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unexpected Application Error!"), t.createElement("h3", { style: { fontStyle: "italic" } }, n), r ? t.createElement("pre", { style: a }, r) : null, null); }
    var te = t.createElement(ee, null);
    var ne = /** @class */ (function (_super) {
        __extends(ne, _super);
        function ne(e) {
            var _this = this;
            _this = _super.call(this, e) || this, _this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
            return _this;
        }
        ne.getDerivedStateFromError = function (e) { return { error: e }; };
        ne.getDerivedStateFromProps = function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: void 0 !== e.error ? e.error : t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; };
        ne.prototype.componentDidCatch = function (e, t) { console.error("React Router caught the following error during render", e, t); };
        ne.prototype.render = function () { return void 0 !== this.state.error ? t.createElement($.Provider, { value: this.props.routeContext }, t.createElement(Y.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; };
        return ne;
    }(t.Component));
    function re(e) { var n = e.routeContext, r = e.match, o = e.children, a = t.useContext(U); return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), t.createElement($.Provider, { value: n }, o); }
    function oe(e, n, r, o) { var a; if (void 0 === n && (n = []), void 0 === r && (r = null), void 0 === o && (o = null), null == e) {
        var i;
        if (null == (i = r) || !i.errors)
            return null;
        e = r.matches;
    } var s = e, u = null == (a = r) ? void 0 : a.errors; if (null != u) {
        var e_16 = s.findIndex((function (e) { return e.route.id && (null == u ? void 0 : u[e.route.id]); }));
        e_16 >= 0 || l(!1), s = s.slice(0, Math.min(s.length, e_16 + 1));
    } var c = !1, d = -1; if (r && o && o.v7_partialHydration)
        for (var t_14 = 0; t_14 < s.length; t_14++) {
            var e_17 = s[t_14];
            if ((e_17.route.HydrateFallback || e_17.route.hydrateFallbackElement) && (d = t_14), e_17.route.id) {
                var t_15 = r.loaderData, n_18 = r.errors, o_3 = e_17.route.loader && void 0 === t_15[e_17.route.id] && (!n_18 || void 0 === n_18[e_17.route.id]);
                if (e_17.route.lazy || o_3) {
                    c = !0, s = d >= 0 ? s.slice(0, d + 1) : [s[0]];
                    break;
                }
            }
        } return s.reduceRight((function (e, o, a) { var i, l = !1, f = null, p = null; var h; r && (i = u && o.route.id ? u[o.route.id] : void 0, f = o.route.errorElement || te, c && (d < 0 && 0 === a ? (h = "route-fallback", !1 || ce[h] || (ce[h] = !0), l = !0, p = null) : d === a && (l = !0, p = o.route.hydrateFallbackElement || null))); var m = n.concat(s.slice(0, a + 1)), g = function () { var n; return n = i ? f : l ? p : o.route.Component ? t.createElement(o.route.Component, null) : o.route.element ? o.route.element : e, t.createElement(re, { match: o, routeContext: { outlet: e, matches: m, isDataRoute: null != r }, children: n }); }; return r && (o.route.ErrorBoundary || o.route.errorElement || 0 === a) ? t.createElement(ne, { location: r.location, revalidation: r.revalidation, component: f, error: i, children: g(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : g(); }), null); }
    var ae = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(ae || {}), ie = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(ie || {});
    function le(e) { var n = t.useContext(U); return n || l(!1), n; }
    function se(e) { var n = t.useContext(V); return n || l(!1), n; }
    function ue(e) { var n = function (e) { var n = t.useContext($); return n || l(!1), n; }(), r = n.matches[n.matches.length - 1]; return r.route.id || l(!1), r.route.id; }
    var ce = {};
    r.startTransition;
    function de(e) { l(!1); }
    function fe(n) { var _b = n.basename, r = _b === void 0 ? "/" : _b, _d = n.children, o = _d === void 0 ? null : _d, a = n.location, _f = n.navigationType, i = _f === void 0 ? e.Pop : _f, s = n.navigator, _g = n.static, u = _g === void 0 ? !1 : _g, c = n.future; X() && l(!1); var d = r.replace(/^\/*/, "/"), p = t.useMemo((function () { return ({ basename: d, navigator: s, static: u, future: F({ v7_relativeSplatPath: !1 }, c) }); }), [d, c, s, u]); "string" === typeof a && (a = f(a)); var _h = a.pathname, h = _h === void 0 ? "/" : _h, _j = a.search, m = _j === void 0 ? "" : _j, _k = a.hash, g = _k === void 0 ? "" : _k, _m = a.state, v = _m === void 0 ? null : _m, _p = a.key, y = _p === void 0 ? "default" : _p, b = t.useMemo((function () { var e = M(h, d); return null == e ? null : { location: { pathname: e, search: m, hash: g, state: v, key: y }, navigationType: i }; }), [d, h, m, g, v, y, i]); return null == b ? null : t.createElement(W.Provider, { value: p }, t.createElement(H.Provider, { children: o, value: b })); }
    function pe(e) { var t = e.children, n = e.location; return J(he(t), n); }
    new Promise((function () { }));
    t.Component;
    function he(e, n) { void 0 === n && (n = []); var r = []; return t.Children.forEach(e, (function (e, o) { if (!t.isValidElement(e))
        return; var a = __spreadArray(__spreadArray([], n, true), [o], false); if (e.type === t.Fragment)
        return void r.push.apply(r, he(e.props.children, a)); e.type !== de && l(!1), e.props.index && e.props.children && l(!1); var i = { id: e.props.id || a.join("-"), caseSensitive: e.props.caseSensitive, element: e.props.element, Component: e.props.Component, index: e.props.index, path: e.props.path, loader: e.props.loader, action: e.props.action, errorElement: e.props.errorElement, ErrorBoundary: e.props.ErrorBoundary, hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement, shouldRevalidate: e.props.shouldRevalidate, handle: e.props.handle, lazy: e.props.lazy }; e.props.children && (i.children = he(e.props.children, a)), r.push(i); })), r; }
    var me = n.p + "static/media/raven-logo.d0ec48e62454a0e95d86.png";
    var ge = n(4164), ve = n.t(ge, 2);
    function ye() { return ye = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, ye.apply(this, arguments); }
    function be(e, t) { if (null == e)
        return {}; var n, r, o = {}, a = Object.keys(e); for (r = 0; r < a.length; r++)
        n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]); return o; }
    new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    var we = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"];
    try {
        window.__reactRouterVersion = "6";
    }
    catch (od) { }
    new Map;
    var xe = r.startTransition;
    ve.flushSync, r.useId;
    function Se(e) { var n = e.basename, r = e.children, o = e.future, a = e.window, i = t.useRef(); var l; null == i.current && (i.current = (void 0 === (l = { window: a, v5Compat: !0 }) && (l = {}), p((function (e, t) { var _b = e.location, n = _b.pathname, r = _b.search, o = _b.hash; return c("", { pathname: n, search: r, hash: o }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" === typeof t ? t : d(t); }), null, l))); var s = i.current, _b = t.useState({ action: s.action, location: s.location }), u = _b[0], f = _b[1], h = (o || {}).v7_startTransition, m = t.useCallback((function (e) { h && xe ? xe((function () { return f(e); })) : f(e); }), [f, h]); return t.useLayoutEffect((function () { return s.listen(m); }), [s, m]), t.createElement(fe, { basename: n, children: r, location: u.location, navigationType: u.action, navigator: s, future: o }); }
    var Ee = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement, ke = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ce = t.forwardRef((function (e, n) { var r, o = e.onClick, a = e.relative, i = e.reloadDocument, s = e.replace, u = e.state, c = e.target, f = e.to, p = e.preventScrollReset, h = e.unstable_viewTransition, m = be(e, we), g = t.useContext(W).basename, v = !1; if ("string" === typeof f && ke.test(f) && (r = f, Ee))
        try {
            var e_18 = new URL(window.location.href), t_16 = f.startsWith("//") ? new URL(e_18.protocol + f) : new URL(f), n_19 = M(t_16.pathname, g);
            t_16.origin === e_18.origin && null != n_19 ? f = n_19 + t_16.search + t_16.hash : v = !0;
        }
        catch (od) { } var y = function (e, n) { var r = (void 0 === n ? {} : n).relative; X() || l(!1); var _b = t.useContext(W), o = _b.basename, a = _b.navigator, _d = Q(e, { relative: r }), i = _d.hash, s = _d.pathname, u = _d.search, c = s; return "/" !== o && (c = "/" === s ? o : z([o, s])), a.createHref({ pathname: c, search: u, hash: i }); }(f, { relative: a }), b = function (e, n) { var _b = void 0 === n ? {} : n, r = _b.target, o = _b.replace, a = _b.state, i = _b.preventScrollReset, l = _b.relative, s = _b.unstable_viewTransition, u = G(), c = K(), f = Q(e, { relative: l }); return t.useCallback((function (t) { if (function (e, t) { return 0 === e.button && (!t || "_self" === t) && !function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(e); }(t, r)) {
        t.preventDefault();
        var n_20 = void 0 !== o ? o : d(c) === d(f);
        u(e, { replace: n_20, state: a, preventScrollReset: i, relative: l, unstable_viewTransition: s });
    } }), [c, u, f, o, a, r, e, i, l, s]); }(f, { replace: s, state: u, target: c, preventScrollReset: p, relative: a, unstable_viewTransition: h }); return t.createElement("a", ye({}, m, { href: r || y, onClick: v || i ? o : function (e) { o && o(e), e.defaultPrevented || b(e); }, ref: n, target: c })); }));
    var _e, Ne;
    (function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"; })(_e || (_e = {})), function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(Ne || (Ne = {}));
    var Pe = n(184);
    var Me = function () { return (0, Pe.jsxs)("div", { className: "text-white mt-4 text-center flex flex-row", children: [(0, Pe.jsxs)("div", { className: "w-1/3", children: [(0, Pe.jsx)("h1", { className: " text-8xl font-extrabold underline", style: { fontFamily: "Consolas" }, children: " WELCOME " }), (0, Pe.jsx)("p", { className: " text-7xl font-extrabold", style: { fontFamily: "Consolas" }, children: " 2" }), (0, Pe.jsx)("p", { className: " text-7xl font-extrabold underline", style: { fontFamily: "Consolas" }, children: " R A V E N" }), (0, Pe.jsx)("p", { className: "mt-10", children: "2024 UNCO Properties Raven Inc." }), (0, Pe.jsx)("button", { className: "w-[170px] mt-64 px-4 bg-black rounded-2xl  hover:border-[#646cff] border-[#2f315f] border-4 outline-none focus:outline-none", children: (0, Pe.jsx)(Ce, { className: "text-2xl font-bold text-[#646cff] ", style: { fontFamily: "Consolas" }, to: "/Home", children: "Proceed" }) })] }), (0, Pe.jsx)("div", { className: "w-2/3", children: (0, Pe.jsx)("img", { className: "w-[780px]", src: me, alt: "Raven Logo" }) })] }); };
    var Oe = n(6173);
    var Re = ["public", "private", "protected", "abstract", "static", "final", "extends", "implements", "class", "interface"], Te = '{}[]()<>=;+-/?:,."|*&^%$#@!~`';
    function Ae(e, t) { var n = t + 1, r = e[t], o = ""; switch (r) {
        case "{":
            o = "}";
            break;
        case "[":
            o = "]";
            break;
        case "(":
            o = ")";
            break;
        case '"':
            o = '"';
            break;
        case "'":
            o = "'";
            break;
        case "<":
            o = ">";
            break;
        default: return console.warn("Invalid starting token. The token at the specified starting index must be '{', '[', '(', '\"', ''', or '<'"), [];
    } var a = 0; for (; n < e.length;) {
        if (e[n] === r)
            a++;
        else if (e[n] === o) {
            if (!(a > 0))
                return e.slice(t + 1, n);
            a--;
        }
        n++;
    } return console.warn("Couldn't find the corresponding closing token in the tokens provided"), []; }
    function ze(e, t) { var n = { name: "", value: void 0, type: "", access: "private", static: !1, final: !1 }; for (var _b = 0, e_19 = e; _b < e_19.length; _b++) {
        var r_4 = e_19[_b];
        switch (r_4) {
            case "public":
                n.access = r_4;
                break;
            case "static":
                n.static = !0;
                break;
            case "final": n.final = !0;
        }
    } return n.type = e[e.length - 2], n.name = e[e.length - 1], n; }
    function Ie(e, t) { var n = { name: "", parameters: [], "return": "", access: "private", static: !1, final: !1 }; for (var _b = 0, e_20 = e; _b < e_20.length; _b++) {
        var r_5 = e_20[_b];
        switch (r_5) {
            case "public":
                n.access = r_5;
                break;
            case "static":
                n.static = !0;
                break;
            case "final": n.final = !0;
        }
    } return e.includes(e[e.length - 2]) || (n["return"] = e[e.length - 2]), n.name = e[e.length - 1], n; }
    function De(e, t, n) { var r = { name: "", attributes: [], methods: [], abstract: !1, interface: !1, access: "public", "extends": "", static: !1, implements: [] }; for (var _b = 0, e_21 = e; _b < e_21.length; _b++) {
        var i_4 = e_21[_b];
        switch (i_4) {
            case "public":
                r.access = i_4;
                break;
            case "static":
                r.static = !0;
                break;
            case "abstract":
                r.abstract = !0;
                break;
            case "interface": r.interface = !0;
        }
    } r.name = e[e.length - 1]; var o = 0; for (; o < t.length;) {
        var e_22 = t[o];
        if ("extends" === e_22)
            o++, r["extends"] = t[o];
        else if ("implements" === e_22)
            for (o++, r.implements = [t[o]], o++; o < t.length && "," !== t[o];)
                o++, r.implements.push(t[o]), o++;
        o++;
    } var a = function (e) { var t = { attributes: [], methods: [] }, n = 0; for (; n < e.length;) {
        var r_6 = [], o_4 = [];
        for (; Re.includes(e[n]);)
            r_6.push(e[n]), n++;
        for (; !Te.includes(e[n]);)
            r_6.push(e[n]), n++;
        if ("=" === e[n]) {
            for (n++, o_4 = []; ";" !== e[n];)
                o_4.push(e[n]), n++;
            t.attributes.push(ze(r_6));
        }
        else if ("(" === e[n]) {
            for (o_4 = Ae(e, n), n += o_4.length + 2; "{" !== e[n];)
                n++;
            n += Ae(e, n).length + 2, t.methods.push(Ie(r_6));
        }
        else
            ";" === e[n] && t.attributes.push(ze(r_6));
        n++;
    } return t; }(n); return r.attributes = a.attributes, r.methods = a.methods, r; }
    var Le = /** @class */ (function () {
        function Le(e, t) {
            this.type = e, this.value = t;
        }
        return Le;
    }());
    var Be = /** @class */ (function () {
        function Be(e) {
            this.code = void 0, this.index = 0, this.code = e;
        }
        Be.prototype.isWhitespace = function (e) { return /\s/.test(e); };
        Be.prototype.isDigit = function (e) { return /\d/.test(e); };
        Be.prototype.isLetter = function (e) { return /[a-zA-Z]/.test(e); };
        Be.prototype.isIdentifierStart = function (e) { return this.isLetter(e) || "_" === e; };
        Be.prototype.isOperator = function (e) { return /[+\-*/=<>!&|]/.test(e); };
        Be.prototype.isQuote = function (e) { return '"' === e || "'" === e; };
        Be.prototype.isCurlyBrace = function (e) { return /[{}]/.test(e); };
        Be.prototype.isCommentStart = function (e) { return "/" === e && "/" === this.code[this.index + 1]; };
        Be.prototype.isMultiLineCommentStart = function (e) { return "/" === e && "*" === this.code[this.index + 1]; };
        Be.prototype.readWhile = function (e) { var t = ""; for (; void 0 !== this.code[this.index] && e(this.code[this.index]);)
            t += this.code[this.index], this.index++; return t; };
        Be.prototype.readIdentifier = function () {
            var _this = this;
            if ('"' == this.code[this.index - 1] || "'" == this.code[this.index - 1]) {
                var e_23 = this.code[this.index - 1], t_17 = this.readWhile((function (t) { return t !== e_23; }));
                return new Le("String", t_17);
            }
            var e = this.readWhile((function (e) { return _this.isIdentifierStart(e) || _this.isDigit(e); }));
            return new Le("IDENTIFIER", e);
        };
        Be.prototype.readNumber = function () {
            var _this = this;
            var e = this.readWhile((function (e) { return _this.isDigit(e); }));
            return new Le("NUMBER", e);
        };
        Be.prototype.readQuote = function () {
            var _this = this;
            var e = this.readWhile((function (e) { return _this.isQuote(e); }));
            return new Le("Quotes", e);
        };
        Be.prototype.readOperator = function () {
            var _this = this;
            var e = this.readWhile((function (e) { return _this.isOperator(e); }));
            return new Le("OPERATOR", e);
        };
        Be.prototype.readCurlyBrace = function () {
            var _this = this;
            var e = this.readWhile((function (e) { return _this.isCurlyBrace(e); }));
            return new Le("Curly Brace", e);
        };
        Be.prototype.readSingleLineComment = function () { var e = this.readWhile((function (e) { return "\n" !== e && "\r" !== e; })); return new Le("COMMENT", e); };
        Be.prototype.readMultiLineComment = function () { var e = ""; for (; void 0 !== this.code[this.index];) {
            var t_18 = this.getNextChar();
            if ("*" === t_18 && "/" === this.code[this.index]) {
                this.index++;
                break;
            }
            e += t_18;
        } return new Le("COMMENT", e); };
        Be.prototype.readOther = function () { var e = this.code[this.index]; return this.index++, new Le("OTHER", e); };
        Be.prototype.skipWhitespace = function () {
            var _this = this;
            this.readWhile((function (e) { return _this.isWhitespace(e); }));
        };
        Be.prototype.getNextChar = function () { return this.code[this.index++]; };
        Be.prototype.getNextToken = function () { if (this.skipWhitespace(), void 0 === this.code[this.index])
            return null; var e = this.code[this.index]; return this.isIdentifierStart(e) ? this.readIdentifier() : this.isDigit(e) ? this.readNumber() : this.isQuote(e) ? this.readQuote() : this.isCurlyBrace(e) ? this.readCurlyBrace() : this.isCommentStart(e) ? this.readSingleLineComment() : this.isMultiLineCommentStart(e) ? (this.index += 2, this.readMultiLineComment()) : this.isOperator(e) ? this.readOperator() : this.readOther(); };
        return Be;
    }());
    function je() {
        return __awaiter(this, void 0, void 0, function () { var e, t, n, r, o, a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Oe.os.showFolderDialog("Open a project Directory", {})];
                case 1:
                    e = _b.sent();
                    return [4 /*yield*/, function (e, t) {
                            return __awaiter(this, void 0, void 0, function () { var n; return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, Ze(e, t)];
                                    case 1:
                                        n = _b.sent();
                                        return [4 /*yield*/, function (e) {
                                                return __awaiter(this, void 0, void 0, function () { var t, _b, e_24, n_21, _d; return __generator(this, function (_f) {
                                                    switch (_f.label) {
                                                        case 0:
                                                            t = "";
                                                            _b = 0, e_24 = e;
                                                            _f.label = 1;
                                                        case 1:
                                                            if (!(_b < e_24.length)) return [3 /*break*/, 4];
                                                            n_21 = e_24[_b];
                                                            _d = t;
                                                            return [4 /*yield*/, Oe.o2.readFile(n_21, { pos: 0, size: 1e5 })];
                                                        case 2:
                                                            t = _d + ((_f.sent()) + "\n");
                                                            _f.label = 3;
                                                        case 3:
                                                            _b++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/, t];
                                                    }
                                                }); });
                                            }(n[0])];
                                    case 2: return [2 /*return*/, _b.sent()];
                                }
                            }); });
                        }(e, "java")];
                case 2:
                    t = _b.sent();
                    n = new Be(t);
                    r = [], o = n.getNextToken();
                    for (; null !== o;)
                        r.push(o.value), o = n.getNextToken();
                    a = function (e) { var t = [], n = 0; for (; n < e.length;)
                        if (Re.includes(e[n])) {
                            var r_7 = [], o_5 = [];
                            for (; "class" !== e[n] && "interface" !== e[n];)
                                r_7.push(e[n]), n++;
                            for (r_7.push(e[n]), n++, r_7.push(e[n]), n++; "{" !== e[n];)
                                o_5.push(e[n]), n++;
                            var a_2 = Ae(e, n);
                            n += a_2.length + 2, t.push(De(r_7, o_5, a_2));
                        }
                        else
                            n++; return t; }(r);
                    return [2 /*return*/, a];
            }
        }); });
    }
    function Ze(e) {
        return __awaiter(this, arguments, void 0, function () { var t, n, r, _b, _d, e_25, _f, _g, o_6, e_26, _h, _j, t_19, _k, _m, t_20, _p, _q, o_7, _v, _w, o_8; return __generator(this, function (_x) {
            switch (_x.label) {
                case 0:
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = [[], []];
                    return [4 /*yield*/, function (e) {
                            return __awaiter(this, arguments, void 0, function () { var t, n, r, o, _b, n_22, a_3; return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                        return [4 /*yield*/, Oe.o2.readDirectory(e)];
                                    case 1:
                                        n = _d.sent(), r = [], o = [];
                                        for (_b = 0, n_22 = n; _b < n_22.length; _b++) {
                                            a_3 = n_22[_b];
                                            "FILE" !== a_3.type || "" !== t && a_3.entry.split(".").pop() !== t ? "DIRECTORY" === a_3.type && "." !== a_3.entry && ".." !== a_3.entry && o.push(e + "/" + a_3.entry) : r.push(e + "/" + a_3.entry);
                                        }
                                        return [2 /*return*/, [r, o]];
                                }
                            }); });
                        }(e, t)];
                case 1:
                    r = _x.sent();
                    if (0 === r[1].length) {
                        for (_b = 0, _d = r[0]; _b < _d.length; _b++) {
                            e_25 = _d[_b];
                            n[0].push(e_25);
                        }
                        return [2 /*return*/, n];
                    }
                    _f = 0, _g = r[1];
                    _x.label = 2;
                case 2:
                    if (!(_f < _g.length)) return [3 /*break*/, 5];
                    o_6 = _g[_f];
                    return [4 /*yield*/, Ze(o_6, t)];
                case 3:
                    e_26 = _x.sent();
                    for (_h = 0, _j = e_26[0]; _h < _j.length; _h++) {
                        t_19 = _j[_h];
                        n[0].push(t_19);
                    }
                    for (_k = 0, _m = e_26[1]; _k < _m.length; _k++) {
                        t_20 = _m[_k];
                        n[1].push(t_20);
                    }
                    _x.label = 4;
                case 4:
                    _f++;
                    return [3 /*break*/, 2];
                case 5:
                    for (_p = 0, _q = n[0]; _p < _q.length; _p++) {
                        o_7 = _q[_p];
                        r[0].push(o_7);
                    }
                    for (_v = 0, _w = n[1]; _v < _w.length; _v++) {
                        o_8 = _w[_v];
                        r[1].push(o_8);
                    }
                    return [2 /*return*/, r];
            }
        }); });
    }
    var Fe = n(3366), Ue = n(7462), Ve = n(3733), We = n(838), He = n(6765), $e = n(3524), Ye = n(2071), Xe = n(3765), Ke = n(6943);
    function qe(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
    function Ge(e, t) { return Ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) { return e.__proto__ = t, e; }, Ge(e, t); }
    var Qe = t.createContext(null);
    function Je(e, n) { var r = Object.create(null); return e && t.Children.map(e, (function (e) { return e; })).forEach((function (e) { r[e.key] = function (e) { return n && (0, t.isValidElement)(e) ? n(e) : e; }(e); })), r; }
    function et(e, t, n) { return null != n[t] ? n[t] : e.props[t]; }
    function tt(e, n, r) { var o = Je(e.children), a = function (e, t) { function n(n) { return n in t ? t[n] : e[n]; } e = e || {}, t = t || {}; var r, o = Object.create(null), a = []; for (var i in e)
        i in t ? a.length && (o[i] = a, a = []) : a.push(i); var l = {}; for (var s in t) {
        if (o[s])
            for (r = 0; r < o[s].length; r++) {
                var u = o[s][r];
                l[o[s][r]] = n(u);
            }
        l[s] = n(s);
    } for (r = 0; r < a.length; r++)
        l[a[r]] = n(a[r]); return l; }(n, o); return Object.keys(a).forEach((function (i) { var l = a[i]; if ((0, t.isValidElement)(l)) {
        var s = i in n, u = i in o, c = n[i], d = (0, t.isValidElement)(c) && !c.props["in"];
        !u || s && !d ? u || !s || d ? u && s && (0, t.isValidElement)(c) && (a[i] = (0, t.cloneElement)(l, { onExited: r.bind(null, l), "in": c.props["in"], exit: et(l, "exit", e), enter: et(l, "enter", e) })) : a[i] = (0, t.cloneElement)(l, { "in": !1 }) : a[i] = (0, t.cloneElement)(l, { onExited: r.bind(null, l), "in": !0, exit: et(l, "exit", e), enter: et(l, "enter", e) });
    } })), a; }
    var nt = Object.values || function (e) { return Object.keys(e).map((function (t) { return e[t]; })); }, rt = function (e) { var n, r; function o(t, n) { var r, o = (r = e.call(this, t, n) || this).handleExited.bind(function (e) { if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }(r)); return r.state = { contextValue: { isMounting: !0 }, handleExited: o, firstRender: !0 }, r; } r = e, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, Ge(n, r); var a = o.prototype; return a.componentDidMount = function () { this.mounted = !0, this.setState({ contextValue: { isMounting: !1 } }); }, a.componentWillUnmount = function () { this.mounted = !1; }, o.getDerivedStateFromProps = function (e, n) { var r, o, a = n.children, i = n.handleExited; return { children: n.firstRender ? (r = e, o = i, Je(r.children, (function (e) { return (0, t.cloneElement)(e, { onExited: o.bind(null, e), "in": !0, appear: et(e, "appear", r), enter: et(e, "enter", r), exit: et(e, "exit", r) }); }))) : tt(e, a, i), firstRender: !1 }; }, a.handleExited = function (e, t) { var n = Je(this.props.children); e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function (t) { var n = (0, Ue.Z)({}, t.children); return delete n[e.key], { children: n }; }))); }, a.render = function () { var e = this.props, n = e.component, r = e.childFactory, o = (0, Fe.Z)(e, ["component", "childFactory"]), a = this.state.contextValue, i = nt(this.state.children).map(r); return delete o.appear, delete o.enter, delete o.exit, null === n ? t.createElement(Qe.Provider, { value: a }, i) : t.createElement(Qe.Provider, { value: a }, t.createElement(n, o, i)); }, o; }(t.Component);
    rt.propTypes = {}, rt.defaultProps = { component: "div", childFactory: function (e) { return e; } };
    var ot = rt;
    n(2561);
    var at = n(9140);
    n(3361), n(2110);
    function it() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; return (0, at.O)(t); }
    var lt = function () { var e = it.apply(void 0, arguments), t = "animation-" + e.name; return { name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function () { return "_EMO_" + this.name + "_" + this.styles + "_EMO_"; } }; };
    var st = n(6788);
    var ut = function (e) { var n = e.className, r = e.classes, _b = e.pulsate, o = _b === void 0 ? !1 : _b, a = e.rippleX, i = e.rippleY, l = e.rippleSize, s = e["in"], u = e.onExited, c = e.timeout, _d = t.useState(!1), d = _d[0], f = _d[1], p = (0, Ve.Z)(n, r.ripple, r.rippleVisible, o && r.ripplePulsate), h = { width: l, height: l, top: -l / 2 + i, left: -l / 2 + a }, m = (0, Ve.Z)(r.child, d && r.childLeaving, o && r.childPulsate); return s || d || f(!0), t.useEffect((function () { if (!s && null != u) {
        var e_27 = setTimeout(u, c);
        return function () { clearTimeout(e_27); };
    } }), [u, s, c]), (0, Pe.jsx)("span", { className: p, style: h, children: (0, Pe.jsx)("span", { className: m }) }); };
    var ct = n(9703);
    var dt = (0, ct.Z)("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
    var ft, pt, ht, mt;
    var gt = ["center", "classes", "className"];
    var vt, yt, bt, wt;
    var xt = lt(vt || (vt = ft || (ft = qe(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))), St = lt(yt || (yt = pt || (pt = qe(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))), Et = lt(bt || (bt = ht || (ht = qe(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))), kt = (0, He.ZP)("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), Ct = (0, He.ZP)(ut, { name: "MuiTouchRipple", slot: "Ripple" })(wt || (wt = mt || (mt = qe(["\n  opacity: 0;\n  position: absolute;\n\n  &.", " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  &.", " {\n    animation-duration: ", "ms;\n  }\n\n  & .", " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .", " {\n    opacity: 0;\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  & .", " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ", ";\n    animation-duration: 2500ms;\n    animation-timing-function: ", ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))), dt.rippleVisible, xt, 550, (function (e) { var t = e.theme; return t.transitions.easing.easeInOut; }), dt.ripplePulsate, (function (e) { var t = e.theme; return t.transitions.duration.shorter; }), dt.child, dt.childLeaving, St, 550, (function (e) { var t = e.theme; return t.transitions.easing.easeInOut; }), dt.childPulsate, Et, (function (e) { var t = e.theme; return t.transitions.easing.easeInOut; })), _t = t.forwardRef((function (e, n) { var r = (0, $e.Z)({ props: e, name: "MuiTouchRipple" }), _b = r.center, o = _b === void 0 ? !1 : _b, _d = r.classes, a = _d === void 0 ? {} : _d, i = r.className, l = (0, Fe.Z)(r, gt), _f = t.useState([]), s = _f[0], u = _f[1], c = t.useRef(0), d = t.useRef(null); t.useEffect((function () { d.current && (d.current(), d.current = null); }), [s]); var f = t.useRef(!1), p = (0, st.Z)(), h = t.useRef(null), m = t.useRef(null), g = t.useCallback((function (e) { var t = e.pulsate, n = e.rippleX, r = e.rippleY, o = e.rippleSize, i = e.cb; u((function (e) { return __spreadArray(__spreadArray([], e, true), [(0, Pe.jsx)(Ct, { classes: { ripple: (0, Ve.Z)(a.ripple, dt.ripple), rippleVisible: (0, Ve.Z)(a.rippleVisible, dt.rippleVisible), ripplePulsate: (0, Ve.Z)(a.ripplePulsate, dt.ripplePulsate), child: (0, Ve.Z)(a.child, dt.child), childLeaving: (0, Ve.Z)(a.childLeaving, dt.childLeaving), childPulsate: (0, Ve.Z)(a.childPulsate, dt.childPulsate) }, timeout: 550, pulsate: t, rippleX: n, rippleY: r, rippleSize: o }, c.current)], false); })), c.current += 1, d.current = i; }), [a]), v = t.useCallback((function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () { }; var _b = t.pulsate, r = _b === void 0 ? !1 : _b, _d = t.center, a = _d === void 0 ? o || t.pulsate : _d, _f = t.fakeElement, i = _f === void 0 ? !1 : _f; if ("mousedown" === (null == e ? void 0 : e.type) && f.current)
        return void (f.current = !1); "touchstart" === (null == e ? void 0 : e.type) && (f.current = !0); var l = i ? null : m.current, s = l ? l.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 }; var u, c, d; if (a || void 0 === e || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches)
        u = Math.round(s.width / 2), c = Math.round(s.height / 2);
    else {
        var _g = e.touches && e.touches.length > 0 ? e.touches[0] : e, t_21 = _g.clientX, n_23 = _g.clientY;
        u = Math.round(t_21 - s.left), c = Math.round(n_23 - s.top);
    } if (a)
        d = Math.sqrt((2 * Math.pow(s.width, 2) + Math.pow(s.height, 2)) / 3), d % 2 === 0 && (d += 1);
    else {
        var e_28 = 2 * Math.max(Math.abs((l ? l.clientWidth : 0) - u), u) + 2, t_22 = 2 * Math.max(Math.abs((l ? l.clientHeight : 0) - c), c) + 2;
        d = Math.sqrt(Math.pow(e_28, 2) + Math.pow(t_22, 2));
    } null != e && e.touches ? null === h.current && (h.current = function () { g({ pulsate: r, rippleX: u, rippleY: c, rippleSize: d, cb: n }); }, p.start(80, (function () { h.current && (h.current(), h.current = null); }))) : g({ pulsate: r, rippleX: u, rippleY: c, rippleSize: d, cb: n }); }), [o, g, p]), y = t.useCallback((function () { v({}, { pulsate: !0 }); }), [v]), b = t.useCallback((function (e, t) { if (p.clear(), "touchend" === (null == e ? void 0 : e.type) && h.current)
        return h.current(), h.current = null, void p.start(0, (function () { b(e, t); })); h.current = null, u((function (e) { return e.length > 0 ? e.slice(1) : e; })), d.current = t; }), [p]); return t.useImperativeHandle(n, (function () { return ({ pulsate: y, start: v, stop: b }); }), [y, v, b]), (0, Pe.jsx)(kt, (0, Ue.Z)({ className: (0, Ve.Z)(dt.root, a.root, i), ref: m }, l, { children: (0, Pe.jsx)(ot, { component: null, exit: !0, children: s }) })); })), Nt = _t;
    var Pt = n(4657);
    function Mt(e) { return (0, Pt.ZP)("MuiButtonBase", e); }
    var Ot = (0, ct.Z)("MuiButtonBase", ["root", "disabled", "focusVisible"]), Rt = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Tt = (0, He.ZP)("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: function (e, t) { return t.root; } })((_b = { display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" } }, _b["&.".concat(Ot.disabled)] = { pointerEvents: "none", cursor: "default" }, _b["@media print"] = { colorAdjust: "exact" }, _b)), At = t.forwardRef((function (e, n) { var r = (0, $e.Z)({ props: e, name: "MuiButtonBase" }), o = r.action, _b = r.centerRipple, a = _b === void 0 ? !1 : _b, i = r.children, l = r.className, _d = r.component, s = _d === void 0 ? "button" : _d, _f = r.disabled, u = _f === void 0 ? !1 : _f, _g = r.disableRipple, c = _g === void 0 ? !1 : _g, _h = r.disableTouchRipple, d = _h === void 0 ? !1 : _h, _j = r.focusRipple, f = _j === void 0 ? !1 : _j, _k = r.LinkComponent, p = _k === void 0 ? "a" : _k, h = r.onBlur, m = r.onClick, g = r.onContextMenu, v = r.onDragLeave, y = r.onFocus, b = r.onFocusVisible, w = r.onKeyDown, x = r.onKeyUp, S = r.onMouseDown, E = r.onMouseLeave, k = r.onMouseUp, C = r.onTouchEnd, _ = r.onTouchMove, N = r.onTouchStart, _m = r.tabIndex, P = _m === void 0 ? 0 : _m, M = r.TouchRippleProps, O = r.touchRippleRef, R = r.type, T = (0, Fe.Z)(r, Rt), A = t.useRef(null), z = t.useRef(null), I = (0, Ye.Z)(z, O), _p = (0, Ke.Z)(), D = _p.isFocusVisibleRef, L = _p.onFocus, B = _p.onBlur, j = _p.ref, _q = t.useState(!1), Z = _q[0], F = _q[1]; u && Z && F(!1), t.useImperativeHandle(o, (function () { return ({ focusVisible: function () { F(!0), A.current.focus(); } }); }), []); var _v = t.useState(!1), U = _v[0], V = _v[1]; t.useEffect((function () { V(!0); }), []); var W = U && !c && !u; function H(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d; return (0, Xe.Z)((function (r) { t && t(r); return !n && z.current && z.current[e](r), !0; })); } t.useEffect((function () { Z && f && !c && U && z.current.pulsate(); }), [c, f, Z, U]); var $ = H("start", S), Y = H("stop", g), X = H("stop", v), K = H("stop", k), q = H("stop", (function (e) { Z && e.preventDefault(), E && E(e); })), G = H("start", N), Q = H("stop", C), J = H("stop", _), ee = H("stop", (function (e) { B(e), !1 === D.current && F(!1), h && h(e); }), !1), te = (0, Xe.Z)((function (e) { A.current || (A.current = e.currentTarget), L(e), !0 === D.current && (F(!0), b && b(e)), y && y(e); })), ne = function () { var e = A.current; return s && "button" !== s && !("A" === e.tagName && e.href); }, re = t.useRef(!1), oe = (0, Xe.Z)((function (e) { f && !re.current && Z && z.current && " " === e.key && (re.current = !0, z.current.stop(e, (function () { z.current.start(e); }))), e.target === e.currentTarget && ne() && " " === e.key && e.preventDefault(), w && w(e), e.target === e.currentTarget && ne() && "Enter" === e.key && !u && (e.preventDefault(), m && m(e)); })), ae = (0, Xe.Z)((function (e) { f && " " === e.key && z.current && Z && !e.defaultPrevented && (re.current = !1, z.current.stop(e, (function () { z.current.pulsate(e); }))), x && x(e), m && e.target === e.currentTarget && ne() && " " === e.key && !e.defaultPrevented && m(e); })); var ie = s; "button" === ie && (T.href || T.to) && (ie = p); var le = {}; "button" === ie ? (le.type = void 0 === R ? "button" : R, le.disabled = u) : (T.href || T.to || (le.role = "button"), u && (le["aria-disabled"] = u)); var se = (0, Ye.Z)(n, j, A); var ue = (0, Ue.Z)({}, r, { centerRipple: a, component: s, disabled: u, disableRipple: c, disableTouchRipple: d, focusRipple: f, tabIndex: P, focusVisible: Z }), ce = (function (e) { var t = e.disabled, n = e.focusVisible, r = e.focusVisibleClassName, o = e.classes, a = { root: ["root", t && "disabled", n && "focusVisible"] }, i = (0, We.Z)(a, Mt, o); return n && r && (i.root += " ".concat(r)), i; })(ue); return (0, Pe.jsxs)(Tt, (0, Ue.Z)({ as: ie, className: (0, Ve.Z)(ce.root, l), ownerState: ue, onBlur: ee, onClick: m, onContextMenu: Y, onFocus: te, onKeyDown: oe, onKeyUp: ae, onMouseDown: $, onMouseLeave: q, onMouseUp: K, onDragLeave: X, onTouchEnd: Q, onTouchMove: J, onTouchStart: G, ref: se, tabIndex: u ? -1 : P, type: R }, le, T, { children: [i, W ? (0, Pe.jsx)(Nt, (0, Ue.Z)({ ref: I, center: a }, M)) : null] })); })), zt = At;
    var It = n(4036);
    function Dt(e) { return (0, Pt.ZP)("MuiTab", e); }
    var Lt = (0, ct.Z)("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), Bt = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], jt = (0, He.ZP)(zt, { name: "MuiTab", slot: "Root", overridesResolver: function (e, t) { var n = e.ownerState; return [t.root, n.label && n.icon && t.labelIcon, t["textColor".concat((0, It.Z)(n.textColor))], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped]; } })((function (e) {
        var _b, _d, _f, _g;
        var t = e.theme, n = e.ownerState;
        return (0, Ue.Z)({}, t.typography.button, { maxWidth: 360, minWidth: 90, position: "relative", minHeight: 48, flexShrink: 0, padding: "12px 16px", overflow: "hidden", whiteSpace: "normal", textAlign: "center" }, n.label && { flexDirection: "top" === n.iconPosition || "bottom" === n.iconPosition ? "column" : "row" }, { lineHeight: 1.25 }, n.icon && n.label && (_b = { minHeight: 72, paddingTop: 9, paddingBottom: 9 }, _b["& > .".concat(Lt.iconWrapper)] = (0, Ue.Z)({}, "top" === n.iconPosition && { marginBottom: 6 }, "bottom" === n.iconPosition && { marginTop: 6 }, "start" === n.iconPosition && { marginRight: t.spacing(1) }, "end" === n.iconPosition && { marginLeft: t.spacing(1) }), _b), "inherit" === n.textColor && (_d = { color: "inherit", opacity: .6 }, _d["&.".concat(Lt.selected)] = { opacity: 1 }, _d["&.".concat(Lt.disabled)] = { opacity: (t.vars || t).palette.action.disabledOpacity }, _d), "primary" === n.textColor && (_f = { color: (t.vars || t).palette.text.secondary }, _f["&.".concat(Lt.selected)] = { color: (t.vars || t).palette.primary.main }, _f["&.".concat(Lt.disabled)] = { color: (t.vars || t).palette.text.disabled }, _f), "secondary" === n.textColor && (_g = { color: (t.vars || t).palette.text.secondary }, _g["&.".concat(Lt.selected)] = { color: (t.vars || t).palette.secondary.main }, _g["&.".concat(Lt.disabled)] = { color: (t.vars || t).palette.text.disabled }, _g), n.fullWidth && { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" }, n.wrapped && { fontSize: t.typography.pxToRem(12) });
    })), Zt = t.forwardRef((function (e, n) { var r = (0, $e.Z)({ props: e, name: "MuiTab" }), o = r.className, _b = r.disabled, a = _b === void 0 ? !1 : _b, _d = r.disableFocusRipple, i = _d === void 0 ? !1 : _d, l = r.fullWidth, s = r.icon, _f = r.iconPosition, u = _f === void 0 ? "top" : _f, c = r.indicator, d = r.label, f = r.onChange, p = r.onClick, h = r.onFocus, m = r.selected, g = r.selectionFollowsFocus, _g = r.textColor, v = _g === void 0 ? "inherit" : _g, y = r.value, _h = r.wrapped, b = _h === void 0 ? !1 : _h, w = (0, Fe.Z)(r, Bt), x = (0, Ue.Z)({}, r, { disabled: a, disableFocusRipple: i, selected: m, icon: !!s, iconPosition: u, label: !!d, fullWidth: l, textColor: v, wrapped: b }), S = (function (e) { var t = e.classes, n = e.textColor, r = e.fullWidth, o = e.wrapped, a = e.icon, i = e.label, l = e.selected, s = e.disabled, u = { root: ["root", a && i && "labelIcon", "textColor".concat((0, It.Z)(n)), r && "fullWidth", o && "wrapped", l && "selected", s && "disabled"], iconWrapper: ["iconWrapper"] }; return (0, We.Z)(u, Dt, t); })(x), E = s && d && t.isValidElement(s) ? t.cloneElement(s, { className: (0, Ve.Z)(S.iconWrapper, s.props.className) }) : s; return (0, Pe.jsxs)(jt, (0, Ue.Z)({ focusRipple: !i, className: (0, Ve.Z)(S.root, o), ref: n, role: "tab", "aria-selected": m, disabled: a, onClick: function (e) { !m && f && f(e, y), p && p(e); }, onFocus: function (e) { g && !m && f && f(e, y), h && h(e); }, ownerState: x, tabIndex: m ? 0 : -1 }, w, { children: ["top" === u || "start" === u ? (0, Pe.jsxs)(t.Fragment, { children: [E, d] }) : (0, Pe.jsxs)(t.Fragment, { children: [d, E] }), c] })); })), Ft = t.createContext(null);
    function Ut(e) { var n = e.children, r = e.value, o = function () { var _b = t.useState(null), e = _b[0], n = _b[1]; return t.useEffect((function () { n("mui-p-".concat(Math.round(1e5 * Math.random()))); }), []), e; }(), a = t.useMemo((function () { return ({ idPrefix: o, value: r }); }), [o, r]); return (0, Pe.jsx)(Ft.Provider, { value: a, children: n }); }
    function Vt() { return t.useContext(Ft); }
    function Wt(e, t) { var n = e.idPrefix; return null === n ? null : "".concat(e.idPrefix, "-P-").concat(t); }
    function Ht(e, t) { var n = e.idPrefix; return null === n ? null : "".concat(e.idPrefix, "-T-").concat(t); }
    n(8457);
    var $t = n(3626);
    function Yt(e) { if (void 0 === e)
        return {}; var t = {}; return Object.keys(e).filter((function (t) { return !(t.match(/^on[A-Z]/) && "function" === typeof e[t]); })).forEach((function (n) { t[n] = e[n]; })), t; }
    function Xt(e) { var t = e.getSlotProps, n = e.additionalProps, r = e.externalSlotProps, o = e.externalForwardedProps, a = e.className; if (!t) {
        var e_29 = (0, Ve.Z)(null == n ? void 0 : n.className, a, null == o ? void 0 : o.className, null == r ? void 0 : r.className), t_23 = (0, Ue.Z)({}, null == n ? void 0 : n.style, null == o ? void 0 : o.style, null == r ? void 0 : r.style), i_5 = (0, Ue.Z)({}, n, o, r);
        return e_29.length > 0 && (i_5.className = e_29), Object.keys(t_23).length > 0 && (i_5.style = t_23), { props: i_5, internalRef: void 0 };
    } var i = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; if (void 0 === e)
        return {}; var n = {}; return Object.keys(e).filter((function (n) { return n.match(/^on[A-Z]/) && "function" === typeof e[n] && !t.includes(n); })).forEach((function (t) { n[t] = e[t]; })), n; }((0, Ue.Z)({}, o, r)), l = Yt(r), s = Yt(o), u = t(i), c = (0, Ve.Z)(null == u ? void 0 : u.className, null == n ? void 0 : n.className, a, null == o ? void 0 : o.className, null == r ? void 0 : r.className), d = (0, Ue.Z)({}, null == u ? void 0 : u.style, null == n ? void 0 : n.style, null == o ? void 0 : o.style, null == r ? void 0 : r.style), f = (0, Ue.Z)({}, u, n, s, l); return c.length > 0 && (f.className = c), Object.keys(d).length > 0 && (f.style = d), { props: f, internalRef: u.ref }; }
    var Kt = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
    function qt(e) { var t; var n = e.elementType, r = e.externalSlotProps, o = e.ownerState, _b = e.skipResolvingSlotProps, a = _b === void 0 ? !1 : _b, i = (0, Fe.Z)(e, Kt), l = a ? {} : function (e, t, n) { return "function" === typeof e ? e(t, n) : e; }(r, o), _d = Xt((0, Ue.Z)({}, i, { externalSlotProps: l })), s = _d.props, u = _d.internalRef, c = (0, $t.Z)(u, null == l ? void 0 : l.ref, null == (t = e.additionalProps) ? void 0 : t.ref), d = function (e, t, n) { return void 0 === e || "string" === typeof e ? t : (0, Ue.Z)({}, t, { ownerState: (0, Ue.Z)({}, t.ownerState, n) }); }(n, (0, Ue.Z)({}, s, { ref: c }), o); return d; }
    var Gt = n(3459), Qt = n(8862), Jt = n(988);
    function en() { var e = (0, Gt.Z)(Qt.Z); return e[Jt.Z] || e; }
    var tn = n(8205);
    var nn;
    function rn() { if (nn)
        return nn; var e = document.createElement("div"), t = document.createElement("div"); return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), nn = "reverse", e.scrollLeft > 0 ? nn = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (nn = "negative")), document.body.removeChild(e), nn; }
    function on(e, t) { var n = e.scrollLeft; if ("rtl" !== t)
        return n; switch (rn()) {
        case "negative": return e.scrollWidth - e.clientWidth + n;
        case "reverse": return e.scrollWidth - e.clientWidth - n;
        default: return n;
    } }
    function an(e) { return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2; }
    var ln = n(162), sn = n(4533);
    var un = ["onChange"], cn = { width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll" };
    var dn = n(6189);
    var fn = (0, dn.Z)((0, Pe.jsx)("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }), "KeyboardArrowLeft"), pn = (0, dn.Z)((0, Pe.jsx)("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), "KeyboardArrowRight");
    function hn(e) { return (0, Pt.ZP)("MuiTabScrollButton", e); }
    var mn = (0, ct.Z)("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), gn = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], vn = (0, He.ZP)(zt, { name: "MuiTabScrollButton", slot: "Root", overridesResolver: function (e, t) { var n = e.ownerState; return [t.root, n.orientation && t[n.orientation]]; } })((function (e) {
        var _b;
        var t = e.ownerState;
        return (0, Ue.Z)((_b = { width: 40, flexShrink: 0, opacity: .8 }, _b["&.".concat(mn.disabled)] = { opacity: 0 }, _b), "vertical" === t.orientation && { width: "100%", height: 40, "& svg": { transform: "rotate(".concat(t.isRtl ? -90 : 90, "deg)") } });
    })), yn = t.forwardRef((function (e, t) { var n, r; var o = (0, $e.Z)({ props: e, name: "MuiTabScrollButton" }), a = o.className, _b = o.slots, i = _b === void 0 ? {} : _b, _d = o.slotProps, l = _d === void 0 ? {} : _d, s = o.direction, u = (0, Fe.Z)(o, gn), c = "rtl" === en().direction, d = (0, Ue.Z)({ isRtl: c }, o), f = (function (e) { var t = e.classes, n = e.orientation, r = e.disabled, o = { root: ["root", n, r && "disabled"] }; return (0, We.Z)(o, hn, t); })(d), p = null != (n = i.StartScrollButtonIcon) ? n : fn, h = null != (r = i.EndScrollButtonIcon) ? r : pn, m = qt({ elementType: p, externalSlotProps: l.startScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: d }), g = qt({ elementType: h, externalSlotProps: l.endScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: d }); return (0, Pe.jsx)(vn, (0, Ue.Z)({ component: "div", className: (0, Ve.Z)(f.root, a), ref: t, role: null, ownerState: d, tabIndex: null }, u, { children: "left" === s ? (0, Pe.jsx)(p, (0, Ue.Z)({}, m)) : (0, Pe.jsx)(h, (0, Ue.Z)({}, g)) })); }));
    function bn(e) { return (0, Pt.ZP)("MuiTabs", e); }
    var wn = (0, ct.Z)("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
    var xn = n(8301);
    var Sn = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], En = function (e, t) { return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild; }, kn = function (e, t) { return e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild; }, Cn = function (e, t, n) { var r = !1, o = n(e, t); for (; o;) {
        if (o === e.firstChild) {
            if (r)
                return;
            r = !0;
        }
        var t_24 = o.disabled || "true" === o.getAttribute("aria-disabled");
        if (o.hasAttribute("tabindex") && !t_24)
            return void o.focus();
        o = n(e, o);
    } }, _n = (0, He.ZP)("div", { name: "MuiTabs", slot: "Root", overridesResolver: function (e, t) {
            var _b, _d;
            var n = e.ownerState;
            return [(_b = {}, _b["& .".concat(wn.scrollButtons)] = t.scrollButtons, _b), (_d = {}, _d["& .".concat(wn.scrollButtons)] = n.scrollButtonsHideMobile && t.scrollButtonsHideMobile, _d), t.root, n.vertical && t.vertical];
        } })((function (e) {
        var _b, _d;
        var t = e.ownerState, n = e.theme;
        return (0, Ue.Z)({ overflow: "hidden", minHeight: 48, WebkitOverflowScrolling: "touch", display: "flex" }, t.vertical && { flexDirection: "column" }, t.scrollButtonsHideMobile && (_b = {}, _b["& .".concat(wn.scrollButtons)] = (_d = {}, _d[n.breakpoints.down("sm")] = { display: "none" }, _d), _b));
    })), Nn = (0, He.ZP)("div", { name: "MuiTabs", slot: "Scroller", overridesResolver: function (e, t) { var n = e.ownerState; return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY]; } })((function (e) { var t = e.ownerState; return (0, Ue.Z)({ position: "relative", display: "inline-block", flex: "1 1 auto", whiteSpace: "nowrap" }, t.fixed && { overflowX: "hidden", width: "100%" }, t.hideScrollbar && { scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }, t.scrollableX && { overflowX: "auto", overflowY: "hidden" }, t.scrollableY && { overflowY: "auto", overflowX: "hidden" }); })), Pn = (0, He.ZP)("div", { name: "MuiTabs", slot: "FlexContainer", overridesResolver: function (e, t) { var n = e.ownerState; return [t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered]; } })((function (e) { var t = e.ownerState; return (0, Ue.Z)({ display: "flex" }, t.vertical && { flexDirection: "column" }, t.centered && { justifyContent: "center" }); })), Mn = (0, He.ZP)("span", { name: "MuiTabs", slot: "Indicator", overridesResolver: function (e, t) { return t.indicator; } })((function (e) { var t = e.ownerState, n = e.theme; return (0, Ue.Z)({ position: "absolute", height: 2, bottom: 0, width: "100%", transition: n.transitions.create() }, "primary" === t.indicatorColor && { backgroundColor: (n.vars || n).palette.primary.main }, "secondary" === t.indicatorColor && { backgroundColor: (n.vars || n).palette.secondary.main }, t.vertical && { height: "100%", width: 2, right: 0 }); })), On = (0, He.ZP)((function (e) { var n = e.onChange, r = (0, Fe.Z)(e, un), o = t.useRef(), a = t.useRef(null), i = function () { o.current = a.current.offsetHeight - a.current.clientHeight; }; return (0, ln.Z)((function () { var e = (0, tn.Z)((function () { var e = o.current; i(), e !== o.current && n(o.current); })), t = (0, sn.Z)(a.current); return t.addEventListener("resize", e), function () { e.clear(), t.removeEventListener("resize", e); }; }), [n]), t.useEffect((function () { i(), n(o.current); }), [n]), (0, Pe.jsx)("div", (0, Ue.Z)({ style: cn, ref: a }, r)); }))({ overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }), Rn = {};
    var Tn = t.forwardRef((function (e, n) {
        var _b;
        var r = (0, $e.Z)({ props: e, name: "MuiTabs" }), o = en(), a = "rtl" === o.direction, i = r["aria-label"], l = r["aria-labelledby"], s = r.action, _d = r.centered, u = _d === void 0 ? !1 : _d, c = r.children, d = r.className, _f = r.component, f = _f === void 0 ? "div" : _f, _g = r.allowScrollButtonsMobile, p = _g === void 0 ? !1 : _g, _h = r.indicatorColor, h = _h === void 0 ? "primary" : _h, m = r.onChange, _j = r.orientation, g = _j === void 0 ? "horizontal" : _j, _k = r.ScrollButtonComponent, v = _k === void 0 ? yn : _k, _m = r.scrollButtons, y = _m === void 0 ? "auto" : _m, b = r.selectionFollowsFocus, _p = r.slots, w = _p === void 0 ? {} : _p, _q = r.slotProps, x = _q === void 0 ? {} : _q, _v = r.TabIndicatorProps, S = _v === void 0 ? {} : _v, _w = r.TabScrollButtonProps, E = _w === void 0 ? {} : _w, _x = r.textColor, k = _x === void 0 ? "primary" : _x, C = r.value, _y = r.variant, _ = _y === void 0 ? "standard" : _y, _z = r.visibleScrollbar, N = _z === void 0 ? !1 : _z, P = (0, Fe.Z)(r, Sn), M = "scrollable" === _, O = "vertical" === g, R = O ? "scrollTop" : "scrollLeft", T = O ? "top" : "left", A = O ? "bottom" : "right", z = O ? "clientHeight" : "clientWidth", I = O ? "height" : "width", D = (0, Ue.Z)({}, r, { component: f, allowScrollButtonsMobile: p, indicatorColor: h, orientation: g, vertical: O, scrollButtons: y, textColor: k, variant: _, visibleScrollbar: N, fixed: !M, hideScrollbar: M && !N, scrollableX: M && !O, scrollableY: M && O, centered: u && !M, scrollButtonsHideMobile: !p }), L = (function (e) { var t = e.vertical, n = e.fixed, r = e.hideScrollbar, o = e.scrollableX, a = e.scrollableY, i = e.centered, l = e.scrollButtonsHideMobile, s = e.classes, u = { root: ["root", t && "vertical"], scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", a && "scrollableY"], flexContainer: ["flexContainer", t && "flexContainerVertical", i && "centered"], indicator: ["indicator"], scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"], scrollableX: [o && "scrollableX"], hideScrollbar: [r && "hideScrollbar"] }; return (0, We.Z)(u, bn, s); })(D), B = qt({ elementType: w.StartScrollButtonIcon, externalSlotProps: x.startScrollButtonIcon, ownerState: D }), j = qt({ elementType: w.EndScrollButtonIcon, externalSlotProps: x.endScrollButtonIcon, ownerState: D });
        var _0 = t.useState(!1), Z = _0[0], F = _0[1], _1 = t.useState(Rn), U = _1[0], V = _1[1], _2 = t.useState(!1), W = _2[0], H = _2[1], _3 = t.useState(!1), $ = _3[0], Y = _3[1], _4 = t.useState(!1), X = _4[0], K = _4[1], _5 = t.useState({ overflow: "hidden", scrollbarWidth: 0 }), q = _5[0], G = _5[1], Q = new Map, J = t.useRef(null), ee = t.useRef(null), te = function () { var e = J.current; var t, n; if (e) {
            var n_24 = e.getBoundingClientRect();
            t = { clientWidth: e.clientWidth, scrollLeft: e.scrollLeft, scrollTop: e.scrollTop, scrollLeftNormalized: on(e, o.direction), scrollWidth: e.scrollWidth, top: n_24.top, bottom: n_24.bottom, left: n_24.left, right: n_24.right };
        } if (e && !1 !== C) {
            var e_30 = ee.current.children;
            if (e_30.length > 0) {
                var t_25 = e_30[Q.get(C)];
                0, n = t_25 ? t_25.getBoundingClientRect() : null;
            }
        } return { tabsMeta: t, tabMeta: n }; }, ne = (0, Xe.Z)((function () {
            var _b;
            var _d = te(), e = _d.tabsMeta, t = _d.tabMeta;
            var n, r = 0;
            if (O)
                n = "top", t && e && (r = t.top - e.top + e.scrollTop);
            else if (n = a ? "right" : "left", t && e) {
                var o_9 = a ? e.scrollLeftNormalized + e.clientWidth - e.scrollWidth : e.scrollLeft;
                r = (a ? -1 : 1) * (t[n] - e[n] + o_9);
            }
            var o = (_b = {}, _b[n] = r, _b[I] = t ? t[I] : 0, _b);
            if (isNaN(U[n]) || isNaN(U[I]))
                V(o);
            else {
                var e_31 = Math.abs(U[n] - o[n]), t_26 = Math.abs(U[I] - o[I]);
                (e_31 >= 1 || t_26 >= 1) && V(o);
            }
        })), re = function (e) { var _b = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).animation, t = _b === void 0 ? !0 : _b; t ? function (e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () { }; var _b = r.ease, a = _b === void 0 ? an : _b, _d = r.duration, i = _d === void 0 ? 300 : _d; var l = null; var s = t[e]; var u = !1; var c = function () { u = !0; }, d = function (r) { if (u)
            return void o(new Error("Animation cancelled")); null === l && (l = r); var c = Math.min(1, (r - l) / i); t[e] = a(c) * (n - s) + s, c >= 1 ? requestAnimationFrame((function () { o(null); })) : requestAnimationFrame(d); }; s === n ? o(new Error("Element already at target position")) : requestAnimationFrame(d); }(R, J.current, e, { duration: o.transitions.duration.standard }) : J.current[R] = e; }, oe = function (e) { var t = J.current[R]; O ? t += e : (t += e * (a ? -1 : 1), t *= a && "reverse" === rn() ? -1 : 1), re(t); }, ae = function () { var e = J.current[z]; var t = 0; var n = Array.from(ee.current.children); for (var r_8 = 0; r_8 < n.length; r_8 += 1) {
            var o_10 = n[r_8];
            if (t + o_10[z] > e) {
                0 === r_8 && (t = e);
                break;
            }
            t += o_10[z];
        } return t; }, ie = function () { oe(-1 * ae()); }, le = function () { oe(ae()); }, se = t.useCallback((function (e) { G({ overflow: null, scrollbarWidth: e }); }), []), ue = (0, Xe.Z)((function (e) { var _b = te(), t = _b.tabsMeta, n = _b.tabMeta; if (n && t)
            if (n[T] < t[T]) {
                var r_9 = t[R] + (n[T] - t[T]);
                re(r_9, { animation: e });
            }
            else if (n[A] > t[A]) {
                var r_10 = t[R] + (n[A] - t[A]);
                re(r_10, { animation: e });
            } })), ce = (0, Xe.Z)((function () { M && !1 !== y && K(!X); }));
        t.useEffect((function () { var e = (0, tn.Z)((function () { J.current && ne(); })); var t; var n = function (n) { n.forEach((function (e) { e.removedNodes.forEach((function (e) { var n; null == (n = t) || n.unobserve(e); })), e.addedNodes.forEach((function (e) { var n; null == (n = t) || n.observe(e); })); })), e(), ce(); }, r = (0, sn.Z)(J.current); var o; return r.addEventListener("resize", e), "undefined" !== typeof ResizeObserver && (t = new ResizeObserver(e), Array.from(ee.current.children).forEach((function (e) { t.observe(e); }))), "undefined" !== typeof MutationObserver && (o = new MutationObserver(n), o.observe(ee.current, { childList: !0 })), function () { var n, a; e.clear(), r.removeEventListener("resize", e), null == (n = o) || n.disconnect(), null == (a = t) || a.disconnect(); }; }), [ne, ce]), t.useEffect((function () { var e = Array.from(ee.current.children), t = e.length; if ("undefined" !== typeof IntersectionObserver && t > 0 && M && !1 !== y) {
            var n_25 = e[0], r_11 = e[t - 1], o_11 = { root: J.current, threshold: .99 }, a_4 = new IntersectionObserver((function (e) { H(!e[0].isIntersecting); }), o_11);
            a_4.observe(n_25);
            var i_6 = new IntersectionObserver((function (e) { Y(!e[0].isIntersecting); }), o_11);
            return i_6.observe(r_11), function () { a_4.disconnect(), i_6.disconnect(); };
        } }), [M, y, X, null == c ? void 0 : c.length]), t.useEffect((function () { F(!0); }), []), t.useEffect((function () { ne(); })), t.useEffect((function () { ue(Rn !== U); }), [ue, U]), t.useImperativeHandle(s, (function () { return ({ updateIndicator: ne, updateScrollButtons: ce }); }), [ne, ce]);
        var de = (0, Pe.jsx)(Mn, (0, Ue.Z)({}, S, { className: (0, Ve.Z)(L.indicator, S.className), ownerState: D, style: (0, Ue.Z)({}, U, S.style) }));
        var fe = 0;
        var pe = t.Children.map(c, (function (e) { if (!t.isValidElement(e))
            return null; var n = void 0 === e.props.value ? fe : e.props.value; Q.set(n, fe); var r = n === C; return fe += 1, t.cloneElement(e, (0, Ue.Z)({ fullWidth: "fullWidth" === _, indicator: r && !Z && de, selected: r, selectionFollowsFocus: b, onChange: m, textColor: k, value: n }, 1 !== fe || !1 !== C || e.props.tabIndex ? {} : { tabIndex: 0 })); })), he = (function () { var e = {}; e.scrollbarSizeListener = M ? (0, Pe.jsx)(On, { onChange: se, className: (0, Ve.Z)(L.scrollableX, L.hideScrollbar) }) : null; var t = M && ("auto" === y && (W || $) || !0 === y); return e.scrollButtonStart = t ? (0, Pe.jsx)(v, (0, Ue.Z)({ slots: { StartScrollButtonIcon: w.StartScrollButtonIcon }, slotProps: { startScrollButtonIcon: B }, orientation: g, direction: a ? "right" : "left", onClick: ie, disabled: !W }, E, { className: (0, Ve.Z)(L.scrollButtons, E.className) })) : null, e.scrollButtonEnd = t ? (0, Pe.jsx)(v, (0, Ue.Z)({ slots: { EndScrollButtonIcon: w.EndScrollButtonIcon }, slotProps: { endScrollButtonIcon: j }, orientation: g, direction: a ? "left" : "right", onClick: le, disabled: !$ }, E, { className: (0, Ve.Z)(L.scrollButtons, E.className) })) : null, e; })();
        return (0, Pe.jsxs)(_n, (0, Ue.Z)({ className: (0, Ve.Z)(L.root, d), ownerState: D, ref: n, as: f }, P, { children: [he.scrollButtonStart, he.scrollbarSizeListener, (0, Pe.jsxs)(Nn, { className: L.scroller, ownerState: D, style: (_b = { overflow: q.overflow }, _b[O ? "margin".concat(a ? "Left" : "Right") : "marginBottom"] = N ? void 0 : -q.scrollbarWidth, _b), ref: J, children: [(0, Pe.jsx)(Pn, { "aria-label": i, "aria-labelledby": l, "aria-orientation": "vertical" === g ? "vertical" : null, className: L.flexContainer, ownerState: D, onKeyDown: function (e) { var t = ee.current, n = (0, xn.Z)(t).activeElement; if ("tab" !== n.getAttribute("role"))
                                return; var r = "horizontal" === g ? "ArrowLeft" : "ArrowUp", o = "horizontal" === g ? "ArrowRight" : "ArrowDown"; switch ("horizontal" === g && a && (r = "ArrowRight", o = "ArrowLeft"), e.key) {
                                case r:
                                    e.preventDefault(), Cn(t, n, kn);
                                    break;
                                case o:
                                    e.preventDefault(), Cn(t, n, En);
                                    break;
                                case "Home":
                                    e.preventDefault(), Cn(t, null, En);
                                    break;
                                case "End": e.preventDefault(), Cn(t, null, kn);
                            } }, ref: ee, role: "tablist", children: pe }), Z && de] }), he.scrollButtonEnd] }));
    })), An = Tn, zn = ["children"], In = t.forwardRef((function (e, n) { var r = e.children, o = (0, Fe.Z)(e, zn), a = Vt(); if (null === a)
        throw new TypeError("No TabContext provided"); var i = t.Children.map(r, (function (e) { return t.isValidElement(e) ? t.cloneElement(e, { "aria-controls": Wt(a, e.props.value), id: Ht(a, e.props.value) }) : null; })); return (0, Pe.jsx)(An, (0, Ue.Z)({}, o, { ref: n, value: a.value, children: i })); })), Dn = In;
    function Ln(e) { return (0, Pt.ZP)("MuiTabPanel", e); }
    (0, ct.Z)("MuiTabPanel", ["root"]);
    var Bn = ["children", "className", "value"], jn = (0, He.ZP)("div", { name: "MuiTabPanel", slot: "Root", overridesResolver: function (e, t) { return t.root; } })((function (e) { var t = e.theme; return { padding: t.spacing(3) }; })), Zn = t.forwardRef((function (e, t) { var n = (0, $e.Z)({ props: e, name: "MuiTabPanel" }), r = n.children, o = n.className, a = n.value, i = (0, Fe.Z)(n, Bn), l = (0, Ue.Z)({}, n), s = (function (e) { var t = e.classes; return (0, We.Z)({ root: ["root"] }, Ln, t); })(l), u = Vt(); if (null === u)
        throw new TypeError("No TabContext provided"); var c = Wt(u, a), d = Ht(u, a); return (0, Pe.jsx)(jn, (0, Ue.Z)({ "aria-labelledby": d, className: (0, Ve.Z)(s.root, o), hidden: a !== u.value, id: c, ref: t, role: "tabpanel", ownerState: l }, i, { children: a === u.value && r })); })), Fn = Zn;
    var Un = n(9823);
    function Vn(e) { if ("string" === typeof e || "number" === typeof e)
        return "" + e; var t = ""; if (Array.isArray(e))
        for (var n_26, r_12 = 0; r_12 < e.length; r_12++)
            "" !== (n_26 = Vn(e[r_12])) && (t += (t && " ") + n_26);
    else
        for (var n_27 in e)
            e[n_27] && (t += (t && " ") + n_27); return t; }
    var Wn = n(327);
    var Hn = function (e) { var t; var n = new Set, r = function (e, r) { var o = "function" === typeof e ? e(t) : e; if (!Object.is(o, t)) {
        var e_32 = t;
        t = (null != r ? r : "object" !== typeof o || null === o) ? o : Object.assign({}, t, o), n.forEach((function (n) { return n(t, e_32); }));
    } }, o = function () { return t; }, a = { setState: r, getState: o, getInitialState: function () { return i; }, subscribe: function (e) { return (n.add(e), function () { return n["delete"](e); }); }, destroy: function () { console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear(); } }, i = t = e(r, o, a); return a; }, $n = function (e) { return e ? Hn(e) : Hn; };
    var Yn = t.useDebugValue, Xn = Wn.useSyncExternalStoreWithSelector, Kn = function (e) { return e; };
    function qn(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kn, n = arguments.length > 2 ? arguments[2] : void 0; var r = Xn(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n); return Yn(r), r; }
    var Gn = function (e, t) { var n = $n(e), r = function (e) { return qn(n, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t); }; return Object.assign(r, n), r; };
    function Qn(e, t) { if (Object.is(e, t))
        return !0; if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
        return !1; if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size)
            return !1;
        for (var _b = 0, e_33 = e; _b < e_33.length; _b++) {
            var _d = e_33[_b], n_28 = _d[0], r_13 = _d[1];
            if (!Object.is(r_13, t.get(n_28)))
                return !1;
        }
        return !0;
    } if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size)
            return !1;
        for (var _f = 0, e_34 = e; _f < e_34.length; _f++) {
            var n_29 = e_34[_f];
            if (!t.has(n_29))
                return !1;
        }
        return !0;
    } var n = Object.keys(e); if (n.length !== Object.keys(t).length)
        return !1; for (var r_14 = 0; r_14 < n.length; r_14++)
        if (!Object.prototype.hasOwnProperty.call(t, n[r_14]) || !Object.is(e[n[r_14]], t[n[r_14]]))
            return !1; return !0; }
    var Jn = { value: function () { } };
    function er() { for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
        if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e))
            throw new Error("illegal type: " + e);
        r[e] = [];
    } return new tr(r); }
    function tr(e) { this._ = e; }
    function nr(e, t) { for (var n, r = 0, o = e.length; r < o; ++r)
        if ((n = e[r]).name === t)
            return n.value; }
    function rr(e, t, n) { for (var r = 0, o = e.length; r < o; ++r)
        if (e[r].name === t) {
            e[r] = Jn, e = e.slice(0, r).concat(e.slice(r + 1));
            break;
        } return null != n && e.push({ name: t, value: n }), e; }
    tr.prototype = er.prototype = { constructor: tr, on: function (e, t) { var n, r, o = this._, a = (r = o, (e + "").trim().split(/^|\s+/).map((function (e) { var t = "", n = e.indexOf("."); if (n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), e && !r.hasOwnProperty(e))
            throw new Error("unknown type: " + e); return { type: e, name: t }; }))), i = -1, l = a.length; if (!(arguments.length < 2)) {
            if (null != t && "function" !== typeof t)
                throw new Error("invalid callback: " + t);
            for (; ++i < l;)
                if (n = (e = a[i]).type)
                    o[n] = rr(o[n], e.name, t);
                else if (null == t)
                    for (n in o)
                        o[n] = rr(o[n], e.name, null);
            return this;
        } for (; ++i < l;)
            if ((n = (e = a[i]).type) && (n = nr(o[n], e.name)))
                return n; }, copy: function () { var e = {}, t = this._; for (var n in t)
            e[n] = t[n].slice(); return new tr(e); }, call: function (e, t) { if ((n = arguments.length - 2) > 0)
            for (var n, r, o = new Array(n), a = 0; a < n; ++a)
                o[a] = arguments[a + 2]; if (!this._.hasOwnProperty(e))
            throw new Error("unknown type: " + e); for (a = 0, n = (r = this._[e]).length; a < n; ++a)
            r[a].value.apply(t, o); }, apply: function (e, t, n) { if (!this._.hasOwnProperty(e))
            throw new Error("unknown type: " + e); for (var r = this._[e], o = 0, a = r.length; o < a; ++o)
            r[o].value.apply(t, n); } };
    var or = er;
    function ar() { }
    function ir(e) { return null == e ? ar : function () { return this.querySelector(e); }; }
    function lr() { return []; }
    function sr(e) { return null == e ? lr : function () { return this.querySelectorAll(e); }; }
    function ur(e) { return function () { return null == (t = e.apply(this, arguments)) ? [] : Array.isArray(t) ? t : Array.from(t); var t; }; }
    function cr(e) { return function () { return this.matches(e); }; }
    function dr(e) { return function (t) { return t.matches(e); }; }
    var fr = Array.prototype.find;
    function pr() { return this.firstElementChild; }
    var hr = Array.prototype.filter;
    function mr() { return Array.from(this.children); }
    function gr(e) { return new Array(e.length); }
    function vr(e, t) { this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t; }
    function yr(e, t, n, r, o, a) { for (var i, l = 0, s = t.length, u = a.length; l < u; ++l)
        (i = t[l]) ? (i.__data__ = a[l], r[l] = i) : n[l] = new vr(e, a[l]); for (; l < s; ++l)
        (i = t[l]) && (o[l] = i); }
    function br(e, t, n, r, o, a, i) { var l, s, u, c = new Map, d = t.length, f = a.length, p = new Array(d); for (l = 0; l < d; ++l)
        (s = t[l]) && (p[l] = u = i.call(s, s.__data__, l, t) + "", c.has(u) ? o[l] = s : c.set(u, s)); for (l = 0; l < f; ++l)
        u = i.call(e, a[l], l, a) + "", (s = c.get(u)) ? (r[l] = s, s.__data__ = a[l], c["delete"](u)) : n[l] = new vr(e, a[l]); for (l = 0; l < d; ++l)
        (s = t[l]) && c.get(p[l]) === s && (o[l] = s); }
    function wr(e) { return e.__data__; }
    function xr(e) { return "object" === typeof e && "length" in e ? e : Array.from(e); }
    function Sr(e, t) { return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN; }
    vr.prototype = { constructor: vr, appendChild: function (e) { return this._parent.insertBefore(e, this._next); }, insertBefore: function (e, t) { return this._parent.insertBefore(e, t); }, querySelector: function (e) { return this._parent.querySelector(e); }, querySelectorAll: function (e) { return this._parent.querySelectorAll(e); } };
    var Er = "http://www.w3.org/1999/xhtml";
    var kr = { svg: "http://www.w3.org/2000/svg", xhtml: Er, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
    function Cr(e) { var t = e += "", n = t.indexOf(":"); return n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)), kr.hasOwnProperty(t) ? { space: kr[t], local: e } : e; }
    function _r(e) { return function () { this.removeAttribute(e); }; }
    function Nr(e) { return function () { this.removeAttributeNS(e.space, e.local); }; }
    function Pr(e, t) { return function () { this.setAttribute(e, t); }; }
    function Mr(e, t) { return function () { this.setAttributeNS(e.space, e.local, t); }; }
    function Or(e, t) { return function () { var n = t.apply(this, arguments); null == n ? this.removeAttribute(e) : this.setAttribute(e, n); }; }
    function Rr(e, t) { return function () { var n = t.apply(this, arguments); null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n); }; }
    function Tr(e) { return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView; }
    function Ar(e) { return function () { this.style.removeProperty(e); }; }
    function zr(e, t, n) { return function () { this.style.setProperty(e, t, n); }; }
    function Ir(e, t, n) { return function () { var r = t.apply(this, arguments); null == r ? this.style.removeProperty(e) : this.style.setProperty(e, r, n); }; }
    function Dr(e, t) { return e.style.getPropertyValue(t) || Tr(e).getComputedStyle(e, null).getPropertyValue(t); }
    function Lr(e) { return function () { delete this[e]; }; }
    function Br(e, t) { return function () { this[e] = t; }; }
    function jr(e, t) { return function () { var n = t.apply(this, arguments); null == n ? delete this[e] : this[e] = n; }; }
    function Zr(e) { return e.trim().split(/^|\s+/); }
    function Fr(e) { return e.classList || new Ur(e); }
    function Ur(e) { this._node = e, this._names = Zr(e.getAttribute("class") || ""); }
    function Vr(e, t) { for (var n = Fr(e), r = -1, o = t.length; ++r < o;)
        n.add(t[r]); }
    function Wr(e, t) { for (var n = Fr(e), r = -1, o = t.length; ++r < o;)
        n.remove(t[r]); }
    function Hr(e) { return function () { Vr(this, e); }; }
    function $r(e) { return function () { Wr(this, e); }; }
    function Yr(e, t) { return function () { (t.apply(this, arguments) ? Vr : Wr)(this, e); }; }
    function Xr() { this.textContent = ""; }
    function Kr(e) { return function () { this.textContent = e; }; }
    function qr(e) { return function () { var t = e.apply(this, arguments); this.textContent = null == t ? "" : t; }; }
    function Gr() { this.innerHTML = ""; }
    function Qr(e) { return function () { this.innerHTML = e; }; }
    function Jr(e) { return function () { var t = e.apply(this, arguments); this.innerHTML = null == t ? "" : t; }; }
    function eo() { this.nextSibling && this.parentNode.appendChild(this); }
    function to() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild); }
    function no(e) { return function () { var t = this.ownerDocument, n = this.namespaceURI; return n === Er && t.documentElement.namespaceURI === Er ? t.createElement(e) : t.createElementNS(n, e); }; }
    function ro(e) { return function () { return this.ownerDocument.createElementNS(e.space, e.local); }; }
    function oo(e) { var t = Cr(e); return (t.local ? ro : no)(t); }
    function ao() { return null; }
    function io() { var e = this.parentNode; e && e.removeChild(this); }
    function lo() { var e = this.cloneNode(!1), t = this.parentNode; return t ? t.insertBefore(e, this.nextSibling) : e; }
    function so() { var e = this.cloneNode(!0), t = this.parentNode; return t ? t.insertBefore(e, this.nextSibling) : e; }
    function uo(e) { return function () { var t = this.__on; if (t) {
        for (var n, r = 0, o = -1, a = t.length; r < a; ++r)
            n = t[r], e.type && n.type !== e.type || n.name !== e.name ? t[++o] = n : this.removeEventListener(n.type, n.listener, n.options);
        ++o ? t.length = o : delete this.__on;
    } }; }
    function co(e, t, n) { return function () { var r, o = this.__on, a = function (e) { return function (t) { e.call(this, t, this.__data__); }; }(t); if (o)
        for (var i = 0, l = o.length; i < l; ++i)
            if ((r = o[i]).type === e.type && r.name === e.name)
                return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = a, r.options = n), void (r.value = t); this.addEventListener(e.type, a, n), r = { type: e.type, name: e.name, value: t, listener: a, options: n }, o ? o.push(r) : this.__on = [r]; }; }
    function fo(e, t, n) { var r = Tr(e), o = r.CustomEvent; "function" === typeof o ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o); }
    function po(e, t) { return function () { return fo(this, e, t); }; }
    function ho(e, t) { return function () { return fo(this, e, t.apply(this, arguments)); }; }
    Ur.prototype = { add: function (e) { this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" "))); }, remove: function (e) { var t = this._names.indexOf(e); t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" "))); }, contains: function (e) { return this._names.indexOf(e) >= 0; } };
    var mo = [null];
    function go(e, t) { this._groups = e, this._parents = t; }
    function vo() { return new go([[document.documentElement]], mo); }
    go.prototype = vo.prototype = (_d = { constructor: go, select: function (e) { "function" !== typeof e && (e = ir(e)); for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
                for (var a, i, l = t[o], s = l.length, u = r[o] = new Array(s), c = 0; c < s; ++c)
                    (a = l[c]) && (i = e.call(a, a.__data__, c, l)) && ("__data__" in a && (i.__data__ = a.__data__), u[c] = i); return new go(r, this._parents); }, selectAll: function (e) { e = "function" === typeof e ? ur(e) : sr(e); for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
                for (var i, l = t[a], s = l.length, u = 0; u < s; ++u)
                    (i = l[u]) && (r.push(e.call(i, i.__data__, u, l)), o.push(i)); return new go(r, o); }, selectChild: function (e) { return this.select(null == e ? pr : function (e) { return function () { return fr.call(this.children, e); }; }("function" === typeof e ? e : dr(e))); }, selectChildren: function (e) { return this.selectAll(null == e ? mr : function (e) { return function () { return hr.call(this.children, e); }; }("function" === typeof e ? e : dr(e))); }, filter: function (e) { "function" !== typeof e && (e = cr(e)); for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
                for (var a, i = t[o], l = i.length, s = r[o] = [], u = 0; u < l; ++u)
                    (a = i[u]) && e.call(a, a.__data__, u, i) && s.push(a); return new go(r, this._parents); }, data: function (e, t) { if (!arguments.length)
                return Array.from(this, wr); var n, r = t ? br : yr, o = this._parents, a = this._groups; "function" !== typeof e && (n = e, e = function () { return n; }); for (var i = a.length, l = new Array(i), s = new Array(i), u = new Array(i), c = 0; c < i; ++c) {
                var d = o[c], f = a[c], p = f.length, h = xr(e.call(d, d && d.__data__, c, o)), m = h.length, g = s[c] = new Array(m), v = l[c] = new Array(m);
                r(d, f, g, v, u[c] = new Array(p), h, t);
                for (var y, b, w = 0, x = 0; w < m; ++w)
                    if (y = g[w]) {
                        for (w >= x && (x = w + 1); !(b = v[x]) && ++x < m;)
                            ;
                        y._next = b || null;
                    }
            } return (l = new go(l, o))._enter = s, l._exit = u, l; }, enter: function () { return new go(this._enter || this._groups.map(gr), this._parents); }, exit: function () { return new go(this._exit || this._groups.map(gr), this._parents); }, join: function (e, t, n) { var r = this.enter(), o = this, a = this.exit(); return "function" === typeof e ? (r = e(r)) && (r = r.selection()) : r = r.append(e + ""), null != t && (o = t(o)) && (o = o.selection()), null == n ? a.remove() : n(a), r && o ? r.merge(o).order() : o; }, merge: function (e) { for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), l = new Array(o), s = 0; s < i; ++s)
                for (var u, c = n[s], d = r[s], f = c.length, p = l[s] = new Array(f), h = 0; h < f; ++h)
                    (u = c[h] || d[h]) && (p[h] = u); for (; s < o; ++s)
                l[s] = n[s]; return new go(l, this._parents); }, selection: function () { return this; }, order: function () { for (var e = this._groups, t = -1, n = e.length; ++t < n;)
                for (var r, o = e[t], a = o.length - 1, i = o[a]; --a >= 0;)
                    (r = o[a]) && (i && 4 ^ r.compareDocumentPosition(i) && i.parentNode.insertBefore(r, i), i = r); return this; }, sort: function (e) { function t(t, n) { return t && n ? e(t.__data__, n.__data__) : !t - !n; } e || (e = Sr); for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
                for (var i, l = n[a], s = l.length, u = o[a] = new Array(s), c = 0; c < s; ++c)
                    (i = l[c]) && (u[c] = i);
                u.sort(t);
            } return new go(o, this._parents).order(); }, call: function () { var e = arguments[0]; return arguments[0] = this, e.apply(null, arguments), this; }, nodes: function () { return Array.from(this); }, node: function () { for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
                for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
                    var i = r[o];
                    if (i)
                        return i;
                } return null; }, size: function () { var e = 0; for (var _b = 0, _d = this; _b < _d.length; _b++) {
                var t_27 = _d[_b];
                ++e;
            } return e; }, empty: function () { return !this.node(); }, each: function (e) { for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
                for (var o, a = t[n], i = 0, l = a.length; i < l; ++i)
                    (o = a[i]) && e.call(o, o.__data__, i, a); return this; }, attr: function (e, t) { var n = Cr(e); if (arguments.length < 2) {
                var r = this.node();
                return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
            } return this.each((null == t ? n.local ? Nr : _r : "function" === typeof t ? n.local ? Rr : Or : n.local ? Mr : Pr)(n, t)); }, style: function (e, t, n) { return arguments.length > 1 ? this.each((null == t ? Ar : "function" === typeof t ? Ir : zr)(e, t, null == n ? "" : n)) : Dr(this.node(), e); }, property: function (e, t) { return arguments.length > 1 ? this.each((null == t ? Lr : "function" === typeof t ? jr : Br)(e, t)) : this.node()[e]; }, classed: function (e, t) { var n = Zr(e + ""); if (arguments.length < 2) {
                for (var r = Fr(this.node()), o = -1, a = n.length; ++o < a;)
                    if (!r.contains(n[o]))
                        return !1;
                return !0;
            } return this.each(("function" === typeof t ? Yr : t ? Hr : $r)(n, t)); }, text: function (e) { return arguments.length ? this.each(null == e ? Xr : ("function" === typeof e ? qr : Kr)(e)) : this.node().textContent; }, html: function (e) { return arguments.length ? this.each(null == e ? Gr : ("function" === typeof e ? Jr : Qr)(e)) : this.node().innerHTML; }, raise: function () { return this.each(eo); }, lower: function () { return this.each(to); }, append: function (e) { var t = "function" === typeof e ? e : oo(e); return this.select((function () { return this.appendChild(t.apply(this, arguments)); })); }, insert: function (e, t) { var n = "function" === typeof e ? e : oo(e), r = null == t ? ao : "function" === typeof t ? t : ir(t); return this.select((function () { return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null); })); }, remove: function () { return this.each(io); }, clone: function (e) { return this.select(e ? so : lo); }, datum: function (e) { return arguments.length ? this.property("__data__", e) : this.node().__data__; }, on: function (e, t, n) { var r, o, a = function (e) { return e.trim().split(/^|\s+/).map((function (e) { var t = "", n = e.indexOf("."); return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), { type: e, name: t }; })); }(e + ""), i = a.length; if (!(arguments.length < 2)) {
                for (l = t ? co : uo, r = 0; r < i; ++r)
                    this.each(l(a[r], t, n));
                return this;
            } var l = this.node().__on; if (l)
                for (var s, u = 0, c = l.length; u < c; ++u)
                    for (r = 0, s = l[u]; r < i; ++r)
                        if ((o = a[r]).type === s.type && o.name === s.name)
                            return s.value; }, dispatch: function (e, t) { return this.each(("function" === typeof t ? ho : po)(e, t)); } }, _d[Symbol.iterator] = function () { var e, t, n, r, o, a, i, _b; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                e = this._groups, t = 0, n = e.length;
                _d.label = 1;
            case 1:
                if (!(t < n)) return [3 /*break*/, 7];
                o = e[t], a = 0, i = o.length;
                _d.label = 2;
            case 2:
                if (!(a < i)) return [3 /*break*/, 6];
                _b = (r = o[a]);
                if (!_b) return [3 /*break*/, 4];
                return [4 /*yield*/, r];
            case 3:
                _b = (_d.sent());
                _d.label = 4;
            case 4:
                _b;
                _d.label = 5;
            case 5:
                ++a;
                return [3 /*break*/, 2];
            case 6:
                ++t;
                return [3 /*break*/, 1];
            case 7: return [2 /*return*/];
        }
    }); }, _d);
    var yo = vo;
    function bo(e) { return "string" === typeof e ? new go([[document.querySelector(e)]], [document.documentElement]) : new go([[e]], mo); }
    var wo = { passive: !1 }, xo = { capture: !0, passive: !1 };
    function So(e) { e.stopImmediatePropagation(); }
    function Eo(e) { e.preventDefault(), e.stopImmediatePropagation(); }
    function ko(e) { var t = e.document.documentElement, n = bo(e).on("dragstart.drag", Eo, xo); "onselectstart" in t ? n.on("selectstart.drag", Eo, xo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none"); }
    function Co(e, t) { var n = e.document.documentElement, r = bo(e).on("dragstart.drag", null); t && (r.on("click.drag", Eo, xo), setTimeout((function () { r.on("click.drag", null); }), 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect); }
    function _o(e) { return ((e = Math.exp(e)) + 1 / e) / 2; }
    var No = function e(t, n, r) { function o(e, o) { var a, i, l = e[0], s = e[1], u = e[2], c = o[0], d = o[1], f = o[2], p = c - l, h = d - s, m = p * p + h * h; if (m < 1e-12)
        i = Math.log(f / u) / t, a = function (e) { return [l + e * p, s + e * h, u * Math.exp(t * e * i)]; };
    else {
        var g = Math.sqrt(m), v = (f * f - u * u + r * m) / (2 * u * n * g), y = (f * f - u * u - r * m) / (2 * f * n * g), b = Math.log(Math.sqrt(v * v + 1) - v), w = Math.log(Math.sqrt(y * y + 1) - y);
        i = (w - b) / t, a = function (e) { var r, o = e * i, a = _o(b), c = u / (n * g) * (a * (r = t * o + b, ((r = Math.exp(2 * r)) - 1) / (r + 1)) - function (e) { return ((e = Math.exp(e)) - 1 / e) / 2; }(b)); return [l + c * p, s + c * h, u * a / _o(t * o + b)]; };
    } return a.duration = 1e3 * i * t / Math.SQRT2, a; } return o.rho = function (t) { var n = Math.max(.001, +t), r = n * n; return e(n, r, r * r); }, o; }(Math.SQRT2, 2, 4);
    function Po(e, t) { if (e = function (e) { var t; for (; t = e.sourceEvent;)
        e = t; return e; }(e), void 0 === t && (t = e.currentTarget), t) {
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            return r.x = e.clientX, r.y = e.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
        }
        if (t.getBoundingClientRect) {
            var o = t.getBoundingClientRect();
            return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
        }
    } return [e.pageX, e.pageY]; }
    var Mo, Oo, Ro = 0, To = 0, Ao = 0, zo = 1e3, Io = 0, Do = 0, Lo = 0, Bo = "object" === typeof performance && performance.now ? performance : Date, jo = "object" === typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (e) { setTimeout(e, 17); };
    function Zo() { return Do || (jo(Fo), Do = Bo.now() + Lo); }
    function Fo() { Do = 0; }
    function Uo() { this._call = this._time = this._next = null; }
    function Vo(e, t, n) { var r = new Uo; return r.restart(e, t, n), r; }
    function Wo() { Do = (Io = Bo.now()) + Lo, Ro = To = 0; try {
        !function () { Zo(), ++Ro; for (var e, t = Mo; t;)
            (e = Do - t._time) >= 0 && t._call.call(void 0, e), t = t._next; --Ro; }();
    }
    finally {
        Ro = 0, function () { var e, t, n = Mo, r = 1 / 0; for (; n;)
            n._call ? (r > n._time && (r = n._time), e = n, n = n._next) : (t = n._next, n._next = null, n = e ? e._next = t : Mo = t); Oo = e, $o(r); }(), Do = 0;
    } }
    function Ho() { var e = Bo.now(), t = e - Io; t > zo && (Lo -= t, Io = e); }
    function $o(e) { Ro || (To && (To = clearTimeout(To)), e - Do > 24 ? (e < 1 / 0 && (To = setTimeout(Wo, e - Bo.now() - Lo)), Ao && (Ao = clearInterval(Ao))) : (Ao || (Io = Bo.now(), Ao = setInterval(Ho, zo)), Ro = 1, jo(Wo))); }
    function Yo(e, t, n) { var r = new Uo; return t = null == t ? 0 : +t, r.restart((function (n) { r.stop(), e(n + t); }), t, n), r; }
    Uo.prototype = Vo.prototype = { constructor: Uo, restart: function (e, t, n) { if ("function" !== typeof e)
            throw new TypeError("callback is not a function"); n = (null == n ? Zo() : +n) + (null == t ? 0 : +t), this._next || Oo === this || (Oo ? Oo._next = this : Mo = this, Oo = this), this._call = e, this._time = n, $o(); }, stop: function () { this._call && (this._call = null, this._time = 1 / 0, $o()); } };
    var Xo = or("start", "end", "cancel", "interrupt"), Ko = [], qo = 0, Go = 1, Qo = 2, Jo = 3, ea = 4, ta = 5, na = 6;
    function ra(e, t, n, r, o, a) { var i = e.__transition; if (i) {
        if (n in i)
            return;
    }
    else
        e.__transition = {}; !function (e, t, n) { var r, o = e.__transition; function a(e) { n.state = Go, n.timer.restart(i, n.delay, n.time), n.delay <= e && i(e - n.delay); } function i(a) { var u, c, d, f; if (n.state !== Go)
        return s(); for (u in o)
        if ((f = o[u]).name === n.name) {
            if (f.state === Jo)
                return Yo(i);
            f.state === ea ? (f.state = na, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete o[u]) : +u < t && (f.state = na, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete o[u]);
        } if (Yo((function () { n.state === Jo && (n.state = ea, n.timer.restart(l, n.delay, n.time), l(a)); })), n.state = Qo, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Qo) {
        for (n.state = Jo, r = new Array(d = n.tween.length), u = 0, c = -1; u < d; ++u)
            (f = n.tween[u].value.call(e, e.__data__, n.index, n.group)) && (r[++c] = f);
        r.length = c + 1;
    } } function l(t) { for (var o = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(s), n.state = ta, 1), a = -1, i = r.length; ++a < i;)
        r[a].call(e, o); n.state === ta && (n.on.call("end", e, e.__data__, n.index, n.group), s()); } function s() { for (var r in n.state = na, n.timer.stop(), delete o[t], o)
        return; delete e.__transition; } o[t] = n, n.timer = Vo(a, 0, n.time); }(e, n, { name: t, index: r, group: o, on: Xo, tween: Ko, time: a.time, delay: a.delay, duration: a.duration, ease: a.ease, timer: null, state: qo }); }
    function oa(e, t) { var n = ia(e, t); if (n.state > qo)
        throw new Error("too late; already scheduled"); return n; }
    function aa(e, t) { var n = ia(e, t); if (n.state > Jo)
        throw new Error("too late; already running"); return n; }
    function ia(e, t) { var n = e.__transition; if (!n || !(n = n[t]))
        throw new Error("transition not found"); return n; }
    function la(e, t) { var n, r, o, a = e.__transition, i = !0; if (a) {
        for (o in t = null == t ? null : t + "", a)
            (n = a[o]).name === t ? (r = n.state > Qo && n.state < ta, n.state = na, n.timer.stop(), n.on.call(r ? "interrupt" : "cancel", e, e.__data__, n.index, n.group), delete a[o]) : i = !1;
        i && delete e.__transition;
    } }
    function sa(e, t) { return e = +e, t = +t, function (n) { return e * (1 - n) + t * n; }; }
    var ua, ca = 180 / Math.PI, da = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
    function fa(e, t, n, r, o, a) { var i, l, s; return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (s = e * n + t * r) && (n -= e * s, r -= t * s), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, s /= l), e * r < t * n && (e = -e, t = -t, s = -s, i = -i), { translateX: o, translateY: a, rotate: Math.atan2(t, e) * ca, skewX: Math.atan(s) * ca, scaleX: i, scaleY: l }; }
    function pa(e, t, n, r) { function o(e) { return e.length ? e.pop() + " " : ""; } return function (a, i) { var l = [], s = []; return a = e(a), i = e(i), function (e, r, o, a, i, l) { if (e !== o || r !== a) {
        var s = i.push("translate(", null, t, null, n);
        l.push({ i: s - 4, x: sa(e, o) }, { i: s - 2, x: sa(r, a) });
    }
    else
        (o || a) && i.push("translate(" + o + t + a + n); }(a.translateX, a.translateY, i.translateX, i.translateY, l, s), function (e, t, n, a) { e !== t ? (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({ i: n.push(o(n) + "rotate(", null, r) - 2, x: sa(e, t) })) : t && n.push(o(n) + "rotate(" + t + r); }(a.rotate, i.rotate, l, s), function (e, t, n, a) { e !== t ? a.push({ i: n.push(o(n) + "skewX(", null, r) - 2, x: sa(e, t) }) : t && n.push(o(n) + "skewX(" + t + r); }(a.skewX, i.skewX, l, s), function (e, t, n, r, a, i) { if (e !== n || t !== r) {
        var l = a.push(o(a) + "scale(", null, ",", null, ")");
        i.push({ i: l - 4, x: sa(e, n) }, { i: l - 2, x: sa(t, r) });
    }
    else
        1 === n && 1 === r || a.push(o(a) + "scale(" + n + "," + r + ")"); }(a.scaleX, a.scaleY, i.scaleX, i.scaleY, l, s), a = i = null, function (e) { for (var t, n = -1, r = s.length; ++n < r;)
        l[(t = s[n]).i] = t.x(e); return l.join(""); }; }; }
    var ha = pa((function (e) { var t = new ("function" === typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(e + ""); return t.isIdentity ? da : fa(t.a, t.b, t.c, t.d, t.e, t.f); }), "px, ", "px)", "deg)"), ma = pa((function (e) { return null == e ? da : (ua || (ua = document.createElementNS("http://www.w3.org/2000/svg", "g")), ua.setAttribute("transform", e), (e = ua.transform.baseVal.consolidate()) ? fa((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f) : da); }), ", ", ")", ")");
    function ga(e, t) { var n, r; return function () { var o = aa(this, e), a = o.tween; if (a !== n)
        for (var i = 0, l = (r = n = a).length; i < l; ++i)
            if (r[i].name === t) {
                (r = r.slice()).splice(i, 1);
                break;
            } o.tween = r; }; }
    function va(e, t, n) { var r, o; if ("function" !== typeof n)
        throw new Error; return function () { var a = aa(this, e), i = a.tween; if (i !== r) {
        o = (r = i).slice();
        for (var l = { name: t, value: n }, s = 0, u = o.length; s < u; ++s)
            if (o[s].name === t) {
                o[s] = l;
                break;
            }
        s === u && o.push(l);
    } a.tween = o; }; }
    function ya(e, t, n) { var r = e._id; return e.each((function () { var e = aa(this, r); (e.value || (e.value = {}))[t] = n.apply(this, arguments); })), function (e) { return ia(e, r).value[t]; }; }
    function ba(e, t, n) { e.prototype = t.prototype = n, n.constructor = e; }
    function wa(e, t) { var n = Object.create(e.prototype); for (var r in t)
        n[r] = t[r]; return n; }
    function xa() { }
    var Sa = .7, Ea = 1 / Sa, ka = "\\s*([+-]?\\d+)\\s*", Ca = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", _a = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Na = /^#([0-9a-f]{3,8})$/, Pa = new RegExp("^rgb\\(".concat(ka, ",").concat(ka, ",").concat(ka, "\\)$")), Ma = new RegExp("^rgb\\(".concat(_a, ",").concat(_a, ",").concat(_a, "\\)$")), Oa = new RegExp("^rgba\\(".concat(ka, ",").concat(ka, ",").concat(ka, ",").concat(Ca, "\\)$")), Ra = new RegExp("^rgba\\(".concat(_a, ",").concat(_a, ",").concat(_a, ",").concat(Ca, "\\)$")), Ta = new RegExp("^hsl\\(".concat(Ca, ",").concat(_a, ",").concat(_a, "\\)$")), Aa = new RegExp("^hsla\\(".concat(Ca, ",").concat(_a, ",").concat(_a, ",").concat(Ca, "\\)$")), za = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
    function Ia() { return this.rgb().formatHex(); }
    function Da() { return this.rgb().formatRgb(); }
    function La(e) { var t, n; return e = (e + "").trim().toLowerCase(), (t = Na.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), 6 === n ? Ba(t) : 3 === n ? new Fa(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1) : 8 === n ? ja(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255) : 4 === n ? ja(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, ((15 & t) << 4 | 15 & t) / 255) : null) : (t = Pa.exec(e)) ? new Fa(t[1], t[2], t[3], 1) : (t = Ma.exec(e)) ? new Fa(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = Oa.exec(e)) ? ja(t[1], t[2], t[3], t[4]) : (t = Ra.exec(e)) ? ja(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = Ta.exec(e)) ? Ya(t[1], t[2] / 100, t[3] / 100, 1) : (t = Aa.exec(e)) ? Ya(t[1], t[2] / 100, t[3] / 100, t[4]) : za.hasOwnProperty(e) ? Ba(za[e]) : "transparent" === e ? new Fa(NaN, NaN, NaN, 0) : null; }
    function Ba(e) { return new Fa(e >> 16 & 255, e >> 8 & 255, 255 & e, 1); }
    function ja(e, t, n, r) { return r <= 0 && (e = t = n = NaN), new Fa(e, t, n, r); }
    function Za(e, t, n, r) { return 1 === arguments.length ? ((o = e) instanceof xa || (o = La(o)), o ? new Fa((o = o.rgb()).r, o.g, o.b, o.opacity) : new Fa) : new Fa(e, t, n, null == r ? 1 : r); var o; }
    function Fa(e, t, n, r) { this.r = +e, this.g = +t, this.b = +n, this.opacity = +r; }
    function Ua() { return "#".concat($a(this.r)).concat($a(this.g)).concat($a(this.b)); }
    function Va() { var e = Wa(this.opacity); return "".concat(1 === e ? "rgb(" : "rgba(").concat(Ha(this.r), ", ").concat(Ha(this.g), ", ").concat(Ha(this.b)).concat(1 === e ? ")" : ", ".concat(e, ")")); }
    function Wa(e) { return isNaN(e) ? 1 : Math.max(0, Math.min(1, e)); }
    function Ha(e) { return Math.max(0, Math.min(255, Math.round(e) || 0)); }
    function $a(e) { return ((e = Ha(e)) < 16 ? "0" : "") + e.toString(16); }
    function Ya(e, t, n, r) { return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ka(e, t, n, r); }
    function Xa(e) { if (e instanceof Ka)
        return new Ka(e.h, e.s, e.l, e.opacity); if (e instanceof xa || (e = La(e)), !e)
        return new Ka; if (e instanceof Ka)
        return e; var t = (e = e.rgb()).r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, l = a - o, s = (a + o) / 2; return l ? (i = t === a ? (n - r) / l + 6 * (n < r) : n === a ? (r - t) / l + 2 : (t - n) / l + 4, l /= s < .5 ? a + o : 2 - a - o, i *= 60) : l = s > 0 && s < 1 ? 0 : i, new Ka(i, l, s, e.opacity); }
    function Ka(e, t, n, r) { this.h = +e, this.s = +t, this.l = +n, this.opacity = +r; }
    function qa(e) { return (e = (e || 0) % 360) < 0 ? e + 360 : e; }
    function Ga(e) { return Math.max(0, Math.min(1, e || 0)); }
    function Qa(e, t, n) { return 255 * (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t); }
    function Ja(e, t, n, r, o) { var a = e * e, i = a * e; return ((1 - 3 * e + 3 * a - i) * t + (4 - 6 * a + 3 * i) * n + (1 + 3 * e + 3 * a - 3 * i) * r + i * o) / 6; }
    ba(xa, La, { copy: function (e) { return Object.assign(new this.constructor, this, e); }, displayable: function () { return this.rgb().displayable(); }, hex: Ia, formatHex: Ia, formatHex8: function () { return this.rgb().formatHex8(); }, formatHsl: function () { return Xa(this).formatHsl(); }, formatRgb: Da, toString: Da }), ba(Fa, Za, wa(xa, { brighter: function (e) { return e = null == e ? Ea : Math.pow(Ea, e), new Fa(this.r * e, this.g * e, this.b * e, this.opacity); }, darker: function (e) { return e = null == e ? Sa : Math.pow(Sa, e), new Fa(this.r * e, this.g * e, this.b * e, this.opacity); }, rgb: function () { return this; }, clamp: function () { return new Fa(Ha(this.r), Ha(this.g), Ha(this.b), Wa(this.opacity)); }, displayable: function () { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1; }, hex: Ua, formatHex: Ua, formatHex8: function () { return "#".concat($a(this.r)).concat($a(this.g)).concat($a(this.b)).concat($a(255 * (isNaN(this.opacity) ? 1 : this.opacity))); }, formatRgb: Va, toString: Va })), ba(Ka, (function (e, t, n, r) { return 1 === arguments.length ? Xa(e) : new Ka(e, t, n, null == r ? 1 : r); }), wa(xa, { brighter: function (e) { return e = null == e ? Ea : Math.pow(Ea, e), new Ka(this.h, this.s, this.l * e, this.opacity); }, darker: function (e) { return e = null == e ? Sa : Math.pow(Sa, e), new Ka(this.h, this.s, this.l * e, this.opacity); }, rgb: function () { var e = this.h % 360 + 360 * (this.h < 0), t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, o = 2 * n - r; return new Fa(Qa(e >= 240 ? e - 240 : e + 120, o, r), Qa(e, o, r), Qa(e < 120 ? e + 240 : e - 120, o, r), this.opacity); }, clamp: function () { return new Ka(qa(this.h), Ga(this.s), Ga(this.l), Wa(this.opacity)); }, displayable: function () { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1; }, formatHsl: function () { var e = Wa(this.opacity); return "".concat(1 === e ? "hsl(" : "hsla(").concat(qa(this.h), ", ").concat(100 * Ga(this.s), "%, ").concat(100 * Ga(this.l), "%").concat(1 === e ? ")" : ", ".concat(e, ")")); } }));
    var ei = function (e) { return function () { return e; }; };
    function ti(e, t) { return function (n) { return e + n * t; }; }
    function ni(e) { return 1 === (e = +e) ? ri : function (t, n) { return n - t ? function (e, t, n) { return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function (r) { return Math.pow(e + r * t, n); }; }(t, n, e) : ei(isNaN(t) ? n : t); }; }
    function ri(e, t) { var n = t - e; return n ? ti(e, n) : ei(isNaN(e) ? t : e); }
    var oi = function e(t) { var n = ni(t); function r(e, t) { var r = n((e = Za(e)).r, (t = Za(t)).r), o = n(e.g, t.g), a = n(e.b, t.b), i = ri(e.opacity, t.opacity); return function (t) { return e.r = r(t), e.g = o(t), e.b = a(t), e.opacity = i(t), e + ""; }; } return r.gamma = e, r; }(1);
    function ai(e) { return function (t) { var n, r, o = t.length, a = new Array(o), i = new Array(o), l = new Array(o); for (n = 0; n < o; ++n)
        r = Za(t[n]), a[n] = r.r || 0, i[n] = r.g || 0, l[n] = r.b || 0; return a = e(a), i = e(i), l = e(l), r.opacity = 1, function (e) { return r.r = a(e), r.g = i(e), r.b = l(e), r + ""; }; }; }
    ai((function (e) { var t = e.length - 1; return function (n) { var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), o = e[r], a = e[r + 1], i = r > 0 ? e[r - 1] : 2 * o - a, l = r < t - 1 ? e[r + 2] : 2 * a - o; return Ja((n - r / t) * t, i, o, a, l); }; })), ai((function (e) { var t = e.length; return function (n) { var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), o = e[(r + t - 1) % t], a = e[r % t], i = e[(r + 1) % t], l = e[(r + 2) % t]; return Ja((n - r / t) * t, o, a, i, l); }; }));
    var ii = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, li = new RegExp(ii.source, "g");
    function si(e, t) { var n, r, o, a = ii.lastIndex = li.lastIndex = 0, i = -1, l = [], s = []; for (e += "", t += ""; (n = ii.exec(e)) && (r = li.exec(t));)
        (o = r.index) > a && (o = t.slice(a, o), l[i] ? l[i] += o : l[++i] = o), (n = n[0]) === (r = r[0]) ? l[i] ? l[i] += r : l[++i] = r : (l[++i] = null, s.push({ i: i, x: sa(n, r) })), a = li.lastIndex; return a < t.length && (o = t.slice(a), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? s[0] ? function (e) { return function (t) { return e(t) + ""; }; }(s[0].x) : function (e) { return function () { return e; }; }(t) : (t = s.length, function (e) { for (var n, r = 0; r < t; ++r)
        l[(n = s[r]).i] = n.x(e); return l.join(""); }); }
    function ui(e, t) { var n; return ("number" === typeof t ? sa : t instanceof La ? oi : (n = La(t)) ? (t = n, oi) : si)(e, t); }
    function ci(e) { return function () { this.removeAttribute(e); }; }
    function di(e) { return function () { this.removeAttributeNS(e.space, e.local); }; }
    function fi(e, t, n) { var r, o, a = n + ""; return function () { var i = this.getAttribute(e); return i === a ? null : i === r ? o : o = t(r = i, n); }; }
    function pi(e, t, n) { var r, o, a = n + ""; return function () { var i = this.getAttributeNS(e.space, e.local); return i === a ? null : i === r ? o : o = t(r = i, n); }; }
    function hi(e, t, n) { var r, o, a; return function () { var i, l, s = n(this); if (null != s)
        return (i = this.getAttribute(e)) === (l = s + "") ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)); this.removeAttribute(e); }; }
    function mi(e, t, n) { var r, o, a; return function () { var i, l, s = n(this); if (null != s)
        return (i = this.getAttributeNS(e.space, e.local)) === (l = s + "") ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)); this.removeAttributeNS(e.space, e.local); }; }
    function gi(e, t) { var n, r; function o() { var o = t.apply(this, arguments); return o !== r && (n = (r = o) && function (e, t) { return function (n) { this.setAttributeNS(e.space, e.local, t.call(this, n)); }; }(e, o)), n; } return o._value = t, o; }
    function vi(e, t) { var n, r; function o() { var o = t.apply(this, arguments); return o !== r && (n = (r = o) && function (e, t) { return function (n) { this.setAttribute(e, t.call(this, n)); }; }(e, o)), n; } return o._value = t, o; }
    function yi(e, t) { return function () { oa(this, e).delay = +t.apply(this, arguments); }; }
    function bi(e, t) { return t = +t, function () { oa(this, e).delay = t; }; }
    function wi(e, t) { return function () { aa(this, e).duration = +t.apply(this, arguments); }; }
    function xi(e, t) { return t = +t, function () { aa(this, e).duration = t; }; }
    var Si = yo.prototype.constructor;
    function Ei(e) { return function () { this.style.removeProperty(e); }; }
    var ki = 0;
    function Ci(e, t, n, r) { this._groups = e, this._parents = t, this._name = n, this._id = r; }
    function _i() { return ++ki; }
    var Ni = yo.prototype;
    Ci.prototype = function (e) { return yo().transition(e); }.prototype = (_f = { constructor: Ci, select: function (e) { var t = this._name, n = this._id; "function" !== typeof e && (e = ir(e)); for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
                for (var l, s, u = r[i], c = u.length, d = a[i] = new Array(c), f = 0; f < c; ++f)
                    (l = u[f]) && (s = e.call(l, l.__data__, f, u)) && ("__data__" in l && (s.__data__ = l.__data__), d[f] = s, ra(d[f], t, n, f, d, ia(l, n))); return new Ci(a, this._parents, t, n); }, selectAll: function (e) { var t = this._name, n = this._id; "function" !== typeof e && (e = sr(e)); for (var r = this._groups, o = r.length, a = [], i = [], l = 0; l < o; ++l)
                for (var s, u = r[l], c = u.length, d = 0; d < c; ++d)
                    if (s = u[d]) {
                        for (var f, p = e.call(s, s.__data__, d, u), h = ia(s, n), m = 0, g = p.length; m < g; ++m)
                            (f = p[m]) && ra(f, t, n, m, p, h);
                        a.push(p), i.push(s);
                    } return new Ci(a, i, t, n); }, selectChild: Ni.selectChild, selectChildren: Ni.selectChildren, filter: function (e) { "function" !== typeof e && (e = cr(e)); for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
                for (var a, i = t[o], l = i.length, s = r[o] = [], u = 0; u < l; ++u)
                    (a = i[u]) && e.call(a, a.__data__, u, i) && s.push(a); return new Ci(r, this._parents, this._name, this._id); }, merge: function (e) { if (e._id !== this._id)
                throw new Error; for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), l = 0; l < a; ++l)
                for (var s, u = t[l], c = n[l], d = u.length, f = i[l] = new Array(d), p = 0; p < d; ++p)
                    (s = u[p] || c[p]) && (f[p] = s); for (; l < r; ++l)
                i[l] = t[l]; return new Ci(i, this._parents, this._name, this._id); }, selection: function () { return new Si(this._groups, this._parents); }, transition: function () { for (var e = this._name, t = this._id, n = _i(), r = this._groups, o = r.length, a = 0; a < o; ++a)
                for (var i, l = r[a], s = l.length, u = 0; u < s; ++u)
                    if (i = l[u]) {
                        var c = ia(i, t);
                        ra(i, e, n, u, l, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
                    } return new Ci(r, this._parents, e, n); }, call: Ni.call, nodes: Ni.nodes, node: Ni.node, size: Ni.size, empty: Ni.empty, each: Ni.each, on: function (e, t) { var n = this._id; return arguments.length < 2 ? ia(this.node(), n).on.on(e) : this.each(function (e, t, n) { var r, o, a = function (e) { return (e + "").trim().split(/^|\s+/).every((function (e) { var t = e.indexOf("."); return t >= 0 && (e = e.slice(0, t)), !e || "start" === e; })); }(t) ? oa : aa; return function () { var i = a(this, e), l = i.on; l !== r && (o = (r = l).copy()).on(t, n), i.on = o; }; }(n, e, t)); }, attr: function (e, t) { var n = Cr(e), r = "transform" === n ? ma : ui; return this.attrTween(e, "function" === typeof t ? (n.local ? mi : hi)(n, r, ya(this, "attr." + e, t)) : null == t ? (n.local ? di : ci)(n) : (n.local ? pi : fi)(n, r, t)); }, attrTween: function (e, t) { var n = "attr." + e; if (arguments.length < 2)
                return (n = this.tween(n)) && n._value; if (null == t)
                return this.tween(n, null); if ("function" !== typeof t)
                throw new Error; var r = Cr(e); return this.tween(n, (r.local ? gi : vi)(r, t)); }, style: function (e, t, n) { var r = "transform" === (e += "") ? ha : ui; return null == t ? this.styleTween(e, function (e, t) { var n, r, o; return function () { var a = Dr(this, e), i = (this.style.removeProperty(e), Dr(this, e)); return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i); }; }(e, r)).on("end.style." + e, Ei(e)) : "function" === typeof t ? this.styleTween(e, function (e, t, n) { var r, o, a; return function () { var i = Dr(this, e), l = n(this), s = l + ""; return null == l && (this.style.removeProperty(e), s = l = Dr(this, e)), i === s ? null : i === r && s === o ? a : (o = s, a = t(r = i, l)); }; }(e, r, ya(this, "style." + e, t))).each(function (e, t) { var n, r, o, a, i = "style." + t, l = "end." + i; return function () { var s = aa(this, e), u = s.on, c = null == s.value[i] ? a || (a = Ei(t)) : void 0; u === n && o === c || (r = (n = u).copy()).on(l, o = c), s.on = r; }; }(this._id, e)) : this.styleTween(e, function (e, t, n) { var r, o, a = n + ""; return function () { var i = Dr(this, e); return i === a ? null : i === r ? o : o = t(r = i, n); }; }(e, r, t), n).on("end.style." + e, null); }, styleTween: function (e, t, n) { var r = "style." + (e += ""); if (arguments.length < 2)
                return (r = this.tween(r)) && r._value; if (null == t)
                return this.tween(r, null); if ("function" !== typeof t)
                throw new Error; return this.tween(r, function (e, t, n) { var r, o; function a() { var a = t.apply(this, arguments); return a !== o && (r = (o = a) && function (e, t, n) { return function (r) { this.style.setProperty(e, t.call(this, r), n); }; }(e, a, n)), r; } return a._value = t, a; }(e, t, null == n ? "" : n)); }, text: function (e) { return this.tween("text", "function" === typeof e ? function (e) { return function () { var t = e(this); this.textContent = null == t ? "" : t; }; }(ya(this, "text", e)) : function (e) { return function () { this.textContent = e; }; }(null == e ? "" : e + "")); }, textTween: function (e) { var t = "text"; if (arguments.length < 1)
                return (t = this.tween(t)) && t._value; if (null == e)
                return this.tween(t, null); if ("function" !== typeof e)
                throw new Error; return this.tween(t, function (e) { var t, n; function r() { var r = e.apply(this, arguments); return r !== n && (t = (n = r) && function (e) { return function (t) { this.textContent = e.call(this, t); }; }(r)), t; } return r._value = e, r; }(e)); }, remove: function () { return this.on("end.remove", function (e) { return function () { var t = this.parentNode; for (var n in this.__transition)
                if (+n !== e)
                    return; t && t.removeChild(this); }; }(this._id)); }, tween: function (e, t) { var n = this._id; if (e += "", arguments.length < 2) {
                for (var r, o = ia(this.node(), n).tween, a = 0, i = o.length; a < i; ++a)
                    if ((r = o[a]).name === e)
                        return r.value;
                return null;
            } return this.each((null == t ? ga : va)(n, e, t)); }, delay: function (e) { var t = this._id; return arguments.length ? this.each(("function" === typeof e ? yi : bi)(t, e)) : ia(this.node(), t).delay; }, duration: function (e) { var t = this._id; return arguments.length ? this.each(("function" === typeof e ? wi : xi)(t, e)) : ia(this.node(), t).duration; }, ease: function (e) { var t = this._id; return arguments.length ? this.each(function (e, t) { if ("function" !== typeof t)
                throw new Error; return function () { aa(this, e).ease = t; }; }(t, e)) : ia(this.node(), t).ease; }, easeVarying: function (e) { if ("function" !== typeof e)
                throw new Error; return this.each(function (e, t) { return function () { var n = t.apply(this, arguments); if ("function" !== typeof n)
                throw new Error; aa(this, e).ease = n; }; }(this._id, e)); }, end: function () { var e, t, n = this, r = n._id, o = n.size(); return new Promise((function (a, i) { var l = { value: i }, s = { value: function () { 0 === --o && a(); } }; n.each((function () { var n = aa(this, r), o = n.on; o !== e && ((t = (e = o).copy())._.cancel.push(l), t._.interrupt.push(l), t._.end.push(s)), n.on = t; })), 0 === o && a(); })); } }, _f[Symbol.iterator] = Ni[Symbol.iterator], _f);
    var Pi = { time: null, delay: 0, duration: 250, ease: function (e) { return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2; } };
    function Mi(e, t) { for (var n; !(n = e.__transition) || !(n = n[t]);)
        if (!(e = e.parentNode))
            throw new Error("transition ".concat(t, " not found")); return n; }
    yo.prototype.interrupt = function (e) { return this.each((function () { la(this, e); })); }, yo.prototype.transition = function (e) { var t, n; e instanceof Ci ? (t = e._id, e = e._name) : (t = _i(), (n = Pi).time = Zo(), e = null == e ? null : e + ""); for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
        for (var i, l = r[a], s = l.length, u = 0; u < s; ++u)
            (i = l[u]) && ra(i, e, t, u, l, n || Mi(i, t)); return new Ci(r, this._parents, e, t); };
    var Oi = function (e) { return function () { return e; }; };
    function Ri(e, t) { var n = t.sourceEvent, r = t.target, o = t.transform, a = t.dispatch; Object.defineProperties(this, { type: { value: e, enumerable: !0, configurable: !0 }, sourceEvent: { value: n, enumerable: !0, configurable: !0 }, target: { value: r, enumerable: !0, configurable: !0 }, transform: { value: o, enumerable: !0, configurable: !0 }, _: { value: a } }); }
    function Ti(e, t, n) { this.k = e, this.x = t, this.y = n; }
    Ti.prototype = { constructor: Ti, scale: function (e) { return 1 === e ? this : new Ti(this.k * e, this.x, this.y); }, translate: function (e, t) { return 0 === e & 0 === t ? this : new Ti(this.k, this.x + this.k * e, this.y + this.k * t); }, apply: function (e) { return [e[0] * this.k + this.x, e[1] * this.k + this.y]; }, applyX: function (e) { return e * this.k + this.x; }, applyY: function (e) { return e * this.k + this.y; }, invert: function (e) { return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]; }, invertX: function (e) { return (e - this.x) / this.k; }, invertY: function (e) { return (e - this.y) / this.k; }, rescaleX: function (e) { return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e)); }, rescaleY: function (e) { return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e)); }, toString: function () { return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"; } };
    var Ai = new Ti(1, 0, 0);
    function zi(e) { e.stopImmediatePropagation(); }
    function Ii(e) { e.preventDefault(), e.stopImmediatePropagation(); }
    function Di(e) { return (!e.ctrlKey || "wheel" === e.type) && !e.button; }
    function Li() { var e = this; return e instanceof SVGElement ? (e = e.ownerSVGElement || e).hasAttribute("viewBox") ? [[(e = e.viewBox.baseVal).x, e.y], [e.x + e.width, e.y + e.height]] : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]] : [[0, 0], [e.clientWidth, e.clientHeight]]; }
    function Bi() { return this.__zoom || Ai; }
    function ji(e) { return -e.deltaY * (1 === e.deltaMode ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1); }
    function Zi() { return navigator.maxTouchPoints || "ontouchstart" in this; }
    function Fi(e, t, n) { var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1]; return e.translate(o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o), i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)); }
    Ti.prototype;
    var Ui = function (e) { return function () { return e; }; };
    function Vi(e, t) { var n = t.sourceEvent, r = t.subject, o = t.target, a = t.identifier, i = t.active, l = t.x, s = t.y, u = t.dx, c = t.dy, d = t.dispatch; Object.defineProperties(this, { type: { value: e, enumerable: !0, configurable: !0 }, sourceEvent: { value: n, enumerable: !0, configurable: !0 }, subject: { value: r, enumerable: !0, configurable: !0 }, target: { value: o, enumerable: !0, configurable: !0 }, identifier: { value: a, enumerable: !0, configurable: !0 }, active: { value: i, enumerable: !0, configurable: !0 }, x: { value: l, enumerable: !0, configurable: !0 }, y: { value: s, enumerable: !0, configurable: !0 }, dx: { value: u, enumerable: !0, configurable: !0 }, dy: { value: c, enumerable: !0, configurable: !0 }, _: { value: d } }); }
    function Wi(e) { return !e.ctrlKey && !e.button; }
    function Hi() { return this.parentNode; }
    function $i(e, t) { return null == t ? { x: e.x, y: e.y } : t; }
    function Yi() { return navigator.maxTouchPoints || "ontouchstart" in this; }
    Vi.prototype.on = function () { var e = this._.on.apply(this._, arguments); return e === this._ ? this : e; };
    var Xi = (0, t.createContext)(null), Ki = Xi.Provider, qi = { error001: function () { return "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001"; }, error002: function () { return "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them."; }, error003: function (e) { return 'Node type "'.concat(e, '" not found. Using fallback type "default".'); }, error004: function () { return "The React Flow parent container needs a width and a height to render the graph."; }, error005: function () { return "Only child nodes can use a parent extent."; }, error006: function () { return "Can't create edge. An edge needs a source and a target."; }, error007: function (e) { return "The old edge with id=".concat(e, " does not exist."); }, error009: function (e) { return 'Marker type "'.concat(e, "\" doesn't exist."); }, error008: function (e, t) { return "Couldn't create edge for ".concat(e ? "target" : "source", ' handle id: "').concat(e ? t.targetHandle : t.sourceHandle, '", edge id: ').concat(t.id, "."); }, error010: function () { return "Handle: No node id found. Make sure to only use a Handle inside a custom Node."; }, error011: function (e) { return 'Edge type "'.concat(e, '" not found. Using fallback type "default".'); }, error012: function (e) { return 'Node with id "'.concat(e, '" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.'); } }, Gi = qi.error001();
    function Qi(e, n) { var r = (0, t.useContext)(Xi); if (null === r)
        throw new Error(Gi); return qn(r, e, n); }
    var Ji = function () { var e = (0, t.useContext)(Xi); if (null === e)
        throw new Error(Gi); return (0, t.useMemo)((function () { return ({ getState: e.getState, setState: e.setState, subscribe: e.subscribe, destroy: e.destroy }); }), [e]); }, el = function (e) { return e.userSelectionActive ? "none" : "all"; };
    function tl(e) { var n = e.position, r = e.children, o = e.className, a = e.style, i = __rest(e, ["position", "children", "className", "style"]); var l = Qi(el), s = "".concat(n).split("-"); return t.createElement("div", __assign({ className: Vn(__spreadArray(["react-flow__panel", o], s, true)), style: __assign(__assign({}, a), { pointerEvents: l }) }, i), r); }
    function nl(e) { var n = e.proOptions, _b = e.position, r = _b === void 0 ? "bottom-right" : _b; return null !== n && void 0 !== n && n.hideAttribution ? null : t.createElement(tl, { position: r, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro" }, t.createElement("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution" }, "React Flow")); }
    var rl = (0, t.memo)((function (e) { var n = e.x, r = e.y, o = e.label, _b = e.labelStyle, a = _b === void 0 ? {} : _b, _d = e.labelShowBg, i = _d === void 0 ? !0 : _d, _f = e.labelBgStyle, l = _f === void 0 ? {} : _f, _g = e.labelBgPadding, s = _g === void 0 ? [2, 4] : _g, _h = e.labelBgBorderRadius, u = _h === void 0 ? 2 : _h, c = e.children, d = e.className, f = __rest(e, ["x", "y", "label", "labelStyle", "labelShowBg", "labelBgStyle", "labelBgPadding", "labelBgBorderRadius", "children", "className"]); var p = (0, t.useRef)(null), _j = (0, t.useState)({ x: 0, y: 0, width: 0, height: 0 }), h = _j[0], m = _j[1], g = Vn(["react-flow__edge-textwrapper", d]); return (0, t.useEffect)((function () { if (p.current) {
        var e_35 = p.current.getBBox();
        m({ x: e_35.x, y: e_35.y, width: e_35.width, height: e_35.height });
    } }), [o]), "undefined" !== typeof o && o ? t.createElement("g", __assign({ transform: "translate(".concat(n - h.width / 2, " ").concat(r - h.height / 2, ")"), className: g, visibility: h.width ? "visible" : "hidden" }, f), i && t.createElement("rect", { width: h.width + 2 * s[0], x: -s[0], y: -s[1], height: h.height + 2 * s[1], className: "react-flow__edge-textbg", style: l, rx: u, ry: u }), t.createElement("text", { className: "react-flow__edge-text", y: h.height / 2, dy: "0.3em", ref: p, style: a }, o), c) : null; }));
    var ol = function (e) { return ({ width: e.offsetWidth, height: e.offsetHeight }); }, al = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; return Math.min(Math.max(e, t), n); }, il = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { x: 0, y: 0 }, t = arguments.length > 1 ? arguments[1] : void 0; return { x: al(e.x, t[0][0], t[1][0]), y: al(e.y, t[0][1], t[1][1]) }; }, ll = function (e, t, n) { return e < t ? al(Math.abs(e - t), 1, 50) / 50 : e > n ? -al(Math.abs(e - n), 1, 50) / 50 : 0; }, sl = function (e, t) { return [20 * ll(e.x, 35, t.width - 35), 20 * ll(e.y, 35, t.height - 35)]; }, ul = function (e) { var t, n; return (null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)) || (null === (n = window) || void 0 === n ? void 0 : n.document); }, cl = function (e, t) { return ({ x: Math.min(e.x, t.x), y: Math.min(e.y, t.y), x2: Math.max(e.x2, t.x2), y2: Math.max(e.y2, t.y2) }); }, dl = function (e) { var t = e.x, n = e.y, r = e.width, o = e.height; return { x: t, y: n, x2: t + r, y2: n + o }; }, fl = function (e) { var t = e.x, n = e.y, r = e.x2, o = e.y2; return { x: t, y: n, width: r - t, height: o - n }; }, pl = function (e) { return (__assign(__assign({}, e.positionAbsolute || { x: 0, y: 0 }), { width: e.width || 0, height: e.height || 0 })); }, hl = function (e, t) { var n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y)); return Math.ceil(n * r); }, ml = function (e) { return gl(e.width) && gl(e.height) && gl(e.x) && gl(e.y); }, gl = function (e) { return !isNaN(e) && isFinite(e); }, vl = Symbol["for"]("internals"), yl = ["Enter", " ", "Escape"], bl = function (e, t) { 0; };
    function wl(e) { var t; var n = (function (e) { return "nativeEvent" in e; })(e) ? e.nativeEvent : e, r = (null === (t = n.composedPath) || void 0 === t || null === (t = t.call(n)) || void 0 === t ? void 0 : t[0]) || e.target; return ["INPUT", "SELECT", "TEXTAREA"].includes(null === r || void 0 === r ? void 0 : r.nodeName) || (null === r || void 0 === r ? void 0 : r.hasAttribute("contenteditable")) || !(null === r || void 0 === r || !r.closest(".nokey")); }
    var xl = function (e) { return "clientX" in e; }, Sl = function (e, t) { var n, r, o, a; var i = xl(e), l = i ? e.clientX : null === (n = e.touches) || void 0 === n ? void 0 : n[0].clientX, s = i ? e.clientY : null === (r = e.touches) || void 0 === r ? void 0 : r[0].clientY; return { x: l - (null !== (o = null === t || void 0 === t ? void 0 : t.left) && void 0 !== o ? o : 0), y: s - (null !== (a = null === t || void 0 === t ? void 0 : t.top) && void 0 !== a ? a : 0) }; }, El = function () { var e; return "undefined" !== typeof navigator && (null === (e = navigator) || void 0 === e || null === (e = e.userAgent) || void 0 === e ? void 0 : e.indexOf("Mac")) >= 0; }, kl = function (e) { var n = e.id, r = e.path, o = e.labelX, a = e.labelY, i = e.label, l = e.labelStyle, s = e.labelShowBg, u = e.labelBgStyle, c = e.labelBgPadding, d = e.labelBgBorderRadius, f = e.style, p = e.markerEnd, h = e.markerStart, _b = e.interactionWidth, m = _b === void 0 ? 20 : _b; return t.createElement(t.Fragment, null, t.createElement("path", { id: n, style: f, d: r, fill: "none", className: "react-flow__edge-path", markerEnd: p, markerStart: h }), m && t.createElement("path", { d: r, fill: "none", strokeOpacity: 0, strokeWidth: m, className: "react-flow__edge-interaction" }), i && gl(o) && gl(a) ? t.createElement(rl, { x: o, y: a, label: i, labelStyle: l, labelShowBg: s, labelBgStyle: u, labelBgPadding: c, labelBgBorderRadius: d }) : null); };
    kl.displayName = "BaseEdge";
    function Cl(e, t, n) { return void 0 === n ? n : function (r) { var o = t().edges.find((function (t) { return t.id === e; })); o && n(r, __assign({}, o)); }; }
    function _l(e) { var t = e.sourceX, n = e.sourceY, r = e.targetX, o = e.targetY; var a = Math.abs(r - t) / 2, i = r < t ? r + a : r - a, l = Math.abs(o - n) / 2; return [i, o < n ? o + l : o - l, a, l]; }
    function Nl(e) { var t = e.sourceX, n = e.sourceY, r = e.targetX, o = e.targetY, a = e.sourceControlX, i = e.sourceControlY, l = e.targetControlX, s = e.targetControlY; var u = .125 * t + .375 * a + .375 * l + .125 * r, c = .125 * n + .375 * i + .375 * s + .125 * o; return [u, c, Math.abs(u - t), Math.abs(c - n)]; }
    var Pl, Ml, Ol, Rl, Tl, Al;
    function zl(e) { var t = e.pos, n = e.x1, r = e.y1, o = e.x2, a = e.y2; return t === Al.Left || t === Al.Right ? [.5 * (n + o), r] : [n, .5 * (r + a)]; }
    function Il(e) { var t = e.sourceX, n = e.sourceY, _b = e.sourcePosition, r = _b === void 0 ? Al.Bottom : _b, o = e.targetX, a = e.targetY, _d = e.targetPosition, i = _d === void 0 ? Al.Top : _d; var _f = zl({ pos: r, x1: t, y1: n, x2: o, y2: a }), l = _f[0], s = _f[1], _g = zl({ pos: i, x1: o, y1: a, x2: t, y2: n }), u = _g[0], c = _g[1], _h = Nl({ sourceX: t, sourceY: n, targetX: o, targetY: a, sourceControlX: l, sourceControlY: s, targetControlX: u, targetControlY: c }), d = _h[0], f = _h[1], p = _h[2], h = _h[3]; return ["M".concat(t, ",").concat(n, " C").concat(l, ",").concat(s, " ").concat(u, ",").concat(c, " ").concat(o, ",").concat(a), d, f, p, h]; }
    !function (e) { e.Strict = "strict", e.Loose = "loose"; }(Pl || (Pl = {})), function (e) { e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal"; }(Ml || (Ml = {})), function (e) { e.Partial = "partial", e.Full = "full"; }(Ol || (Ol = {})), function (e) { e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier"; }(Rl || (Rl = {})), function (e) { e.Arrow = "arrow", e.ArrowClosed = "arrowclosed"; }(Tl || (Tl = {})), function (e) { e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom"; }(Al || (Al = {}));
    var Dl = (0, t.memo)((function (e) { var n = e.sourceX, r = e.sourceY, o = e.targetX, a = e.targetY, _b = e.sourcePosition, i = _b === void 0 ? Al.Bottom : _b, _d = e.targetPosition, l = _d === void 0 ? Al.Top : _d, s = e.label, u = e.labelStyle, c = e.labelShowBg, d = e.labelBgStyle, f = e.labelBgPadding, p = e.labelBgBorderRadius, h = e.style, m = e.markerEnd, g = e.markerStart, v = e.interactionWidth; var _f = Il({ sourceX: n, sourceY: r, sourcePosition: i, targetX: o, targetY: a, targetPosition: l }), y = _f[0], b = _f[1], w = _f[2]; return t.createElement(kl, { path: y, labelX: b, labelY: w, label: s, labelStyle: u, labelShowBg: c, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: h, markerEnd: m, markerStart: g, interactionWidth: v }); }));
    Dl.displayName = "SimpleBezierEdge";
    var Ll = (_g = {}, _g[Al.Left] = { x: -1, y: 0 }, _g[Al.Right] = { x: 1, y: 0 }, _g[Al.Top] = { x: 0, y: -1 }, _g[Al.Bottom] = { x: 0, y: 1 }, _g), Bl = function (e) { var t = e.source, _b = e.sourcePosition, n = _b === void 0 ? Al.Bottom : _b, r = e.target; return n === Al.Left || n === Al.Right ? t.x < r.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < r.y ? { x: 0, y: 1 } : { x: 0, y: -1 }; }, jl = function (e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)); };
    function Zl(e) { var t = e.sourceX, n = e.sourceY, _b = e.sourcePosition, r = _b === void 0 ? Al.Bottom : _b, o = e.targetX, a = e.targetY, _d = e.targetPosition, i = _d === void 0 ? Al.Top : _d, _f = e.borderRadius, l = _f === void 0 ? 5 : _f, s = e.centerX, u = e.centerY, _g = e.offset, c = _g === void 0 ? 20 : _g; var _h = function (e) { var t = e.source, _b = e.sourcePosition, n = _b === void 0 ? Al.Bottom : _b, r = e.target, _d = e.targetPosition, o = _d === void 0 ? Al.Top : _d, a = e.center, i = e.offset; var l = Ll[n], s = Ll[o], u = { x: t.x + l.x * i, y: t.y + l.y * i }, c = { x: r.x + s.x * i, y: r.y + s.y * i }, d = Bl({ source: u, sourcePosition: n, target: c }), f = 0 !== d.x ? "x" : "y", p = d[f]; var h, m, g = []; var v = { x: 0, y: 0 }, y = { x: 0, y: 0 }, _f = _l({ sourceX: t.x, sourceY: t.y, targetX: r.x, targetY: r.y }), b = _f[0], w = _f[1], x = _f[2], S = _f[3]; if (l[f] * s[f] === -1) {
        h = a.x || b, m = a.y || w;
        var e_36 = [{ x: h, y: u.y }, { x: h, y: c.y }], t_28 = [{ x: u.x, y: m }, { x: c.x, y: m }];
        g = l[f] === p ? "x" === f ? e_36 : t_28 : "x" === f ? t_28 : e_36;
    }
    else {
        var e_37 = [{ x: u.x, y: c.y }], a_5 = [{ x: c.x, y: u.y }];
        if (g = "x" === f ? l.x === p ? a_5 : e_37 : l.y === p ? e_37 : a_5, n === o) {
            var e_38 = Math.abs(t[f] - r[f]);
            if (e_38 <= i) {
                var n_30 = Math.min(i - 1, i - e_38);
                l[f] === p ? v[f] = (u[f] > t[f] ? -1 : 1) * n_30 : y[f] = (c[f] > r[f] ? -1 : 1) * n_30;
            }
        }
        if (n !== o) {
            var t_29 = "x" === f ? "y" : "x", n_31 = l[f] === s[t_29], r_15 = u[t_29] > c[t_29], o_12 = u[t_29] < c[t_29];
            (1 === l[f] && (!n_31 && r_15 || n_31 && o_12) || 1 !== l[f] && (!n_31 && o_12 || n_31 && r_15)) && (g = "x" === f ? e_37 : a_5);
        }
        var d_1 = { x: u.x + v.x, y: u.y + v.y }, b_1 = { x: c.x + y.x, y: c.y + y.y };
        Math.max(Math.abs(d_1.x - g[0].x), Math.abs(b_1.x - g[0].x)) >= Math.max(Math.abs(d_1.y - g[0].y), Math.abs(b_1.y - g[0].y)) ? (h = (d_1.x + b_1.x) / 2, m = g[0].y) : (h = g[0].x, m = (d_1.y + b_1.y) / 2);
    } return [__spreadArray(__spreadArray([t, { x: u.x + v.x, y: u.y + v.y }], g, true), [{ x: c.x + y.x, y: c.y + y.y }, r], false), h, m, x, S]; }({ source: { x: t, y: n }, sourcePosition: r, target: { x: o, y: a }, targetPosition: i, center: { x: s, y: u }, offset: c }), d = _h[0], f = _h[1], p = _h[2], h = _h[3], m = _h[4], g = d.reduce((function (e, t, n) { var r = ""; return r = n > 0 && n < d.length - 1 ? function (e, t, n, r) { var o = Math.min(jl(e, t) / 2, jl(t, n) / 2, r), a = t.x, i = t.y; if (e.x === a && a === n.x || e.y === i && i === n.y)
        return "L".concat(a, " ").concat(i); if (e.y === i) {
        var t_30 = e.x < n.x ? -1 : 1, r_16 = e.y < n.y ? 1 : -1;
        return "L ".concat(a + o * t_30, ",").concat(i, "Q ").concat(a, ",").concat(i, " ").concat(a, ",").concat(i + o * r_16);
    } var l = e.x < n.x ? 1 : -1, s = e.y < n.y ? -1 : 1; return "L ".concat(a, ",").concat(i + o * s, "Q ").concat(a, ",").concat(i, " ").concat(a + o * l, ",").concat(i); }(d[n - 1], t, d[n + 1], l) : "".concat(0 === n ? "M" : "L").concat(t.x, " ").concat(t.y), e += r; }), ""); return [g, f, p, h, m]; }
    var Fl = (0, t.memo)((function (e) { var n = e.sourceX, r = e.sourceY, o = e.targetX, a = e.targetY, i = e.label, l = e.labelStyle, s = e.labelShowBg, u = e.labelBgStyle, c = e.labelBgPadding, d = e.labelBgBorderRadius, f = e.style, _b = e.sourcePosition, p = _b === void 0 ? Al.Bottom : _b, _d = e.targetPosition, h = _d === void 0 ? Al.Top : _d, m = e.markerEnd, g = e.markerStart, v = e.pathOptions, y = e.interactionWidth; var _f = Zl({ sourceX: n, sourceY: r, sourcePosition: p, targetX: o, targetY: a, targetPosition: h, borderRadius: null === v || void 0 === v ? void 0 : v.borderRadius, offset: null === v || void 0 === v ? void 0 : v.offset }), b = _f[0], w = _f[1], x = _f[2]; return t.createElement(kl, { path: b, labelX: w, labelY: x, label: i, labelStyle: l, labelShowBg: s, labelBgStyle: u, labelBgPadding: c, labelBgBorderRadius: d, style: f, markerEnd: m, markerStart: g, interactionWidth: y }); }));
    Fl.displayName = "SmoothStepEdge";
    var Ul = (0, t.memo)((function (e) { var n; return t.createElement(Fl, __assign(__assign({}, e), { pathOptions: (0, t.useMemo)((function () { var t; return { borderRadius: 0, offset: null === (t = e.pathOptions) || void 0 === t ? void 0 : t.offset }; }), [null === (n = e.pathOptions) || void 0 === n ? void 0 : n.offset]) })); }));
    Ul.displayName = "StepEdge";
    var Vl = (0, t.memo)((function (e) { var n = e.sourceX, r = e.sourceY, o = e.targetX, a = e.targetY, i = e.label, l = e.labelStyle, s = e.labelShowBg, u = e.labelBgStyle, c = e.labelBgPadding, d = e.labelBgBorderRadius, f = e.style, p = e.markerEnd, h = e.markerStart, m = e.interactionWidth; var _b = function (e) { var t = e.sourceX, n = e.sourceY, r = e.targetX, o = e.targetY; var _b = _l({ sourceX: t, sourceY: n, targetX: r, targetY: o }), a = _b[0], i = _b[1], l = _b[2], s = _b[3]; return ["M ".concat(t, ",").concat(n, "L ").concat(r, ",").concat(o), a, i, l, s]; }({ sourceX: n, sourceY: r, targetX: o, targetY: a }), g = _b[0], v = _b[1], y = _b[2]; return t.createElement(kl, { path: g, labelX: v, labelY: y, label: i, labelStyle: l, labelShowBg: s, labelBgStyle: u, labelBgPadding: c, labelBgBorderRadius: d, style: f, markerEnd: p, markerStart: h, interactionWidth: m }); }));
    function Wl(e, t) { return e >= 0 ? .5 * e : 25 * t * Math.sqrt(-e); }
    function Hl(e) { var t = e.pos, n = e.x1, r = e.y1, o = e.x2, a = e.y2, i = e.c; switch (t) {
        case Al.Left: return [n - Wl(n - o, i), r];
        case Al.Right: return [n + Wl(o - n, i), r];
        case Al.Top: return [n, r - Wl(r - a, i)];
        case Al.Bottom: return [n, r + Wl(a - r, i)];
    } }
    function $l(e) { var t = e.sourceX, n = e.sourceY, _b = e.sourcePosition, r = _b === void 0 ? Al.Bottom : _b, o = e.targetX, a = e.targetY, _d = e.targetPosition, i = _d === void 0 ? Al.Top : _d, _f = e.curvature, l = _f === void 0 ? .25 : _f; var _g = Hl({ pos: r, x1: t, y1: n, x2: o, y2: a, c: l }), s = _g[0], u = _g[1], _h = Hl({ pos: i, x1: o, y1: a, x2: t, y2: n, c: l }), c = _h[0], d = _h[1], _j = Nl({ sourceX: t, sourceY: n, targetX: o, targetY: a, sourceControlX: s, sourceControlY: u, targetControlX: c, targetControlY: d }), f = _j[0], p = _j[1], h = _j[2], m = _j[3]; return ["M".concat(t, ",").concat(n, " C").concat(s, ",").concat(u, " ").concat(c, ",").concat(d, " ").concat(o, ",").concat(a), f, p, h, m]; }
    Vl.displayName = "StraightEdge";
    var Yl = (0, t.memo)((function (e) { var n = e.sourceX, r = e.sourceY, o = e.targetX, a = e.targetY, _b = e.sourcePosition, i = _b === void 0 ? Al.Bottom : _b, _d = e.targetPosition, l = _d === void 0 ? Al.Top : _d, s = e.label, u = e.labelStyle, c = e.labelShowBg, d = e.labelBgStyle, f = e.labelBgPadding, p = e.labelBgBorderRadius, h = e.style, m = e.markerEnd, g = e.markerStart, v = e.pathOptions, y = e.interactionWidth; var _f = $l({ sourceX: n, sourceY: r, sourcePosition: i, targetX: o, targetY: a, targetPosition: l, curvature: null === v || void 0 === v ? void 0 : v.curvature }), b = _f[0], w = _f[1], x = _f[2]; return t.createElement(kl, { path: b, labelX: w, labelY: x, label: s, labelStyle: u, labelShowBg: c, labelBgStyle: d, labelBgPadding: f, labelBgBorderRadius: p, style: h, markerEnd: m, markerStart: g, interactionWidth: y }); }));
    Yl.displayName = "BezierEdge";
    var Xl = (0, t.createContext)(null), Kl = Xl.Provider;
    Xl.Consumer;
    var ql = function (e) { var t = e.source, n = e.sourceHandle, r = e.target, o = e.targetHandle; return "reactflow__edge-".concat(t).concat(n || "", "-").concat(r).concat(o || ""); }, Gl = function (e, t) { if ("undefined" === typeof e)
        return ""; if ("string" === typeof e)
        return e; var n = t ? "".concat(t, "__") : ""; return "".concat(n).concat(Object.keys(e).sort().map((function (t) { return "".concat(t, "=").concat(e[t]); })).join("&")); }, Ql = function (e, t) { if (!e.source || !e.target)
        return bl(0, qi.error006()), t; var n; var r; return n = "id" in (r = e) && "source" in r && "target" in r ? __assign({}, e) : __assign(__assign({}, e), { id: ql(e) }), (function (e, t) { return t.some((function (t) { return t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle); })); })(n, t) ? t : t.concat(n); }, Jl = function (e, t, n, r) { var o = e.x, a = e.y, i = t[0], l = t[1], s = t[2], u = r[0], c = r[1]; var d = { x: (o - i) / s, y: (a - l) / s }; return n ? { x: u * Math.round(d.x / u), y: c * Math.round(d.y / c) } : d; }, es = function (e, t) { var n = e.x, r = e.y, o = t[0], a = t[1], i = t[2]; return { x: n * i + o, y: r * i + a }; }, ts = function (e) { var t, n; var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0]; if (!e)
        return { x: 0, y: 0, positionAbsolute: { x: 0, y: 0 } }; var o = (null !== (t = e.width) && void 0 !== t ? t : 0) * r[0], a = (null !== (n = e.height) && void 0 !== n ? n : 0) * r[1], i = { x: e.position.x - o, y: e.position.y - a }; return __assign(__assign({}, i), { positionAbsolute: e.positionAbsolute ? { x: e.positionAbsolute.x - o, y: e.positionAbsolute.y - a } : i }); }, ns = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0]; if (0 === e.length)
        return { x: 0, y: 0, width: 0, height: 0 }; var n = e.reduce((function (e, n) { var _b = ts(n, t).positionAbsolute, r = _b.x, o = _b.y; return cl(e, dl({ x: r, y: o, width: n.width || 0, height: n.height || 0 })); }), { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }); return fl(n); }, rs = function (e, t) { var _b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0, 1], n = _b[0], r = _b[1], o = _b[2], a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [0, 0]; var s = { x: (t.x - n) / o, y: (t.y - r) / o, width: t.width / o, height: t.height / o }, u = []; return e.forEach((function (e) { var t = e.width, n = e.height, _b = e.selectable, r = _b === void 0 ? !0 : _b, _d = e.hidden, o = _d === void 0 ? !1 : _d; if (i && !r || o)
        return !1; var c = ts(e, l).positionAbsolute, d = { x: c.x, y: c.y, width: t || 0, height: n || 0 }, f = hl(s, d); ("undefined" === typeof t || "undefined" === typeof n || null === t || null === n || a && f > 0 || f >= (t || 0) * (n || 0) || e.dragging) && u.push(e); })), u; }, os = function (e, t) { var n = e.map((function (e) { return e.id; })); return t.filter((function (e) { return n.includes(e.source) || n.includes(e.target); })); }, as = function (e, t, n, r, o) { var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .1; var i = t / (e.width * (1 + a)), l = n / (e.height * (1 + a)), s = Math.min(i, l), u = al(s, r, o); return { x: t / 2 - (e.x + e.width / 2) * u, y: n / 2 - (e.y + e.height / 2) * u, zoom: u }; }, is = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return e.transition().duration(t); };
    function ls(e, t, n, r) { return (t[n] || []).reduce((function (t, o) { var a, i, l, s; "".concat(e.id, "-").concat(o.id, "-").concat(n) !== r && t.push({ id: o.id || null, type: n, nodeId: e.id, x: (null !== (a = null === (i = e.positionAbsolute) || void 0 === i ? void 0 : i.x) && void 0 !== a ? a : 0) + o.x + o.width / 2, y: (null !== (l = null === (s = e.positionAbsolute) || void 0 === s ? void 0 : s.y) && void 0 !== l ? l : 0) + o.y + o.height / 2 }); return t; }), []); }
    var ss = { source: null, target: null, sourceHandle: null, targetHandle: null }, us = function () { return ({ handleDomNode: null, isValid: !1, connection: ss, endHandle: null }); };
    function cs(e, t, n, r, o, a, i) { var l = "target" === o, s = i.querySelector('.react-flow__handle[data-id="'.concat(null === e || void 0 === e ? void 0 : e.nodeId, "-").concat(null === e || void 0 === e ? void 0 : e.id, "-").concat(null === e || void 0 === e ? void 0 : e.type, '"]')), u = __assign(__assign({}, us()), { handleDomNode: s }); if (s) {
        var e_39 = ds(void 0, s), o_13 = s.getAttribute("data-nodeid"), i_7 = s.getAttribute("data-handleid"), c_2 = s.classList.contains("connectable"), d_2 = s.classList.contains("connectableend"), f_1 = { source: l ? o_13 : n, sourceHandle: l ? i_7 : r, target: l ? n : o_13, targetHandle: l ? r : i_7 };
        u.connection = f_1;
        c_2 && d_2 && (t === Pl.Strict ? l && "source" === e_39 || !l && "target" === e_39 : o_13 !== n || i_7 !== r) && (u.endHandle = { nodeId: o_13, handleId: i_7, type: e_39 }, u.isValid = a(f_1));
    } return u; }
    function ds(e, t) { return e || (null !== t && void 0 !== t && t.classList.contains("target") ? "target" : null !== t && void 0 !== t && t.classList.contains("source") ? "source" : null); }
    function fs(e) { null === e || void 0 === e || e.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting"); }
    function ps(e, t) { var n = null; return t ? n = "valid" : e && !t && (n = "invalid"), n; }
    function hs(e) { var t = e.event, n = e.handleId, r = e.nodeId, o = e.onConnect, a = e.isTarget, i = e.getState, l = e.setState, s = e.isValidConnection, u = e.edgeUpdaterType, c = e.onEdgeUpdateEnd; var d = ul(t.target), _b = i(), f = _b.connectionMode, p = _b.domNode, h = _b.autoPanOnConnect, m = _b.connectionRadius, g = _b.onConnectStart, v = _b.panBy, y = _b.getNodes, b = _b.cancelConnection; var w, x = 0; var _d = Sl(t), S = _d.x, E = _d.y, k = null === d || void 0 === d ? void 0 : d.elementFromPoint(S, E), C = ds(u, k), _ = null === p || void 0 === p ? void 0 : p.getBoundingClientRect(); if (!_ || !C)
        return; var N, P = Sl(t, _), M = !1, O = null, R = !1, T = null; var A = function (e) { var t = e.nodes, n = e.nodeId, r = e.handleId, o = e.handleType; return t.reduce((function (e, t) { if (t[vl]) {
        var a_6 = t[vl].handleBounds;
        var i_8 = [], l_3 = [];
        a_6 && (i_8 = ls(t, a_6, "source", "".concat(n, "-").concat(r, "-").concat(o)), l_3 = ls(t, a_6, "target", "".concat(n, "-").concat(r, "-").concat(o))), e.push.apply(e, __spreadArray(__spreadArray([], i_8, false), l_3, false));
    } return e; }), []); }({ nodes: y(), nodeId: r, handleId: n, handleType: C }), z = function () { if (!h)
        return; var _b = sl(P, _), e = _b[0], t = _b[1]; v({ x: e, y: t }), x = requestAnimationFrame(z); }; function I(e) { var t = i().transform; P = Sl(e, _); var _b = function (e, t, n, r, o, a) { var _b = Sl(e), i = _b.x, l = _b.y, s = t.elementsFromPoint(i, l).find((function (e) { return e.classList.contains("react-flow__handle"); })); if (s) {
        var e_40 = s.getAttribute("data-nodeid");
        if (e_40) {
            var t_31 = ds(void 0, s), r_17 = s.getAttribute("data-handleid"), i_9 = a({ nodeId: e_40, id: r_17, type: t_31 });
            if (i_9) {
                var a_7 = o.find((function (n) { return n.nodeId === e_40 && n.type === t_31 && n.id === r_17; }));
                return { handle: { id: r_17, type: t_31, nodeId: e_40, x: (null === a_7 || void 0 === a_7 ? void 0 : a_7.x) || n.x, y: (null === a_7 || void 0 === a_7 ? void 0 : a_7.y) || n.y }, validHandleResult: i_9 };
            }
        }
    } var u = [], c = 1 / 0; if (o.forEach((function (e) { var t = Math.sqrt(Math.pow((e.x - n.x), 2) + Math.pow((e.y - n.y), 2)); if (t <= r) {
        var n_32 = a(e);
        t <= c && (t < c ? u = [{ handle: e, validHandleResult: n_32 }] : t === c && u.push({ handle: e, validHandleResult: n_32 }), c = t);
    } })), !u.length)
        return { handle: null, validHandleResult: us() }; if (1 === u.length)
        return u[0]; var d = u.some((function (e) { var t = e.validHandleResult; return t.isValid; })), f = u.some((function (e) { var t = e.handle; return "target" === t.type; })); return u.find((function (e) { var t = e.handle, n = e.validHandleResult; return f ? "target" === t.type : !d || n.isValid; })) || u[0]; }(e, d, Jl(P, t, !1, [1, 1]), m, A, (function (e) { return cs(e, f, r, n, a ? "target" : "source", s, d); })), o = _b.handle, u = _b.validHandleResult; if (w = o, M || (z(), M = !0), T = u.handleDomNode, O = u.connection, R = u.isValid, l({ connectionPosition: w && R ? es({ x: w.x, y: w.y }, t) : P, connectionStatus: ps(!!w, R), connectionEndHandle: u.endHandle }), !w && !R && !T)
        return fs(N); O.source !== O.target && T && (fs(N), N = T, T.classList.add("connecting", "react-flow__handle-connecting"), T.classList.toggle("valid", R), T.classList.toggle("react-flow__handle-valid", R)); } function D(e) { var t, n; (w || T) && O && R && (null === o || void 0 === o || o(O)), null === (t = (n = i()).onConnectEnd) || void 0 === t || t.call(n, e), u && (null === c || void 0 === c || c(e)), fs(N), b(), cancelAnimationFrame(x), M = !1, R = !1, O = null, T = null, d.removeEventListener("mousemove", I), d.removeEventListener("mouseup", D), d.removeEventListener("touchmove", I), d.removeEventListener("touchend", D); } l({ connectionPosition: P, connectionStatus: null, connectionNodeId: r, connectionHandleId: n, connectionHandleType: C, connectionStartHandle: { nodeId: r, handleId: n, type: C }, connectionEndHandle: null }), null === g || void 0 === g || g(t, { nodeId: r, handleId: n, handleType: C }), d.addEventListener("mousemove", I), d.addEventListener("mouseup", D), d.addEventListener("touchmove", I), d.addEventListener("touchend", D); }
    var ms = function () { return !0; }, gs = function (e) { return ({ connectionStartHandle: e.connectionStartHandle, connectOnClick: e.connectOnClick, noPanClassName: e.noPanClassName }); }, vs = (0, t.forwardRef)((function (e, n) { var _b = e.type, r = _b === void 0 ? "source" : _b, _d = e.position, o = _d === void 0 ? Al.Top : _d, a = e.isValidConnection, _f = e.isConnectable, i = _f === void 0 ? !0 : _f, _g = e.isConnectableStart, l = _g === void 0 ? !0 : _g, _h = e.isConnectableEnd, s = _h === void 0 ? !0 : _h, u = e.id, c = e.onConnect, d = e.children, f = e.className, p = e.onMouseDown, h = e.onTouchStart, m = __rest(e, ["type", "position", "isValidConnection", "isConnectable", "isConnectableStart", "isConnectableEnd", "id", "onConnect", "children", "className", "onMouseDown", "onTouchStart"]); var g = u || null, v = "target" === r, y = Ji(), b = (0, t.useContext)(Xl), _j = Qi(gs, Qn), w = _j.connectOnClick, x = _j.noPanClassName, _k = Qi((function (e, t, n) { return function (r) { var o = r.connectionStartHandle, a = r.connectionEndHandle, i = r.connectionClickStartHandle; return { connecting: (null === o || void 0 === o ? void 0 : o.nodeId) === e && (null === o || void 0 === o ? void 0 : o.handleId) === t && (null === o || void 0 === o ? void 0 : o.type) === n || (null === a || void 0 === a ? void 0 : a.nodeId) === e && (null === a || void 0 === a ? void 0 : a.handleId) === t && (null === a || void 0 === a ? void 0 : a.type) === n, clickConnecting: (null === i || void 0 === i ? void 0 : i.nodeId) === e && (null === i || void 0 === i ? void 0 : i.handleId) === t && (null === i || void 0 === i ? void 0 : i.type) === n }; }; })(b, g, r), Qn), S = _k.connecting, E = _k.clickConnecting; var k, C; b || (null === (k = (C = y.getState()).onError) || void 0 === k || k.call(C, "010", qi.error010())); var _ = function (e) { var _b = y.getState(), t = _b.defaultEdgeOptions, n = _b.onConnect, r = _b.hasDefaultEdges, o = __assign(__assign({}, t), e); if (r) {
        var _d = y.getState(), e_41 = _d.edges, t_32 = _d.setEdges;
        t_32(Ql(o, e_41));
    } null === n || void 0 === n || n(o), null === c || void 0 === c || c(o); }, N = function (e) { if (!b)
        return; var t = xl(e); l && (t && 0 === e.button || !t) && hs({ event: e, handleId: g, nodeId: b, onConnect: _, isTarget: v, getState: y.getState, setState: y.setState, isValidConnection: a || y.getState().isValidConnection || ms }), t ? null === p || void 0 === p || p(e) : null === h || void 0 === h || h(e); }; return t.createElement("div", __assign({ "data-handleid": g, "data-nodeid": b, "data-handlepos": o, "data-id": "".concat(b, "-").concat(g, "-").concat(r), className: Vn(["react-flow__handle", "react-flow__handle-".concat(o), "nodrag", x, f, { source: !v, target: v, connectable: i, connectablestart: l, connectableend: s, connecting: E, connectionindicator: i && (l && !S || s && S) }]), onMouseDown: N, onTouchStart: N, onClick: w ? function (e) { var _b = y.getState(), t = _b.onClickConnectStart, n = _b.onClickConnectEnd, o = _b.connectionClickStartHandle, i = _b.connectionMode, s = _b.isValidConnection; if (!b || !o && !l)
            return; if (!o)
            return null === t || void 0 === t || t(e, { nodeId: b, handleId: g, handleType: r }), void y.setState({ connectionClickStartHandle: { nodeId: b, type: r, handleId: g } }); var u = ul(e.target), c = a || s || ms, _d = cs({ nodeId: b, id: g, type: r }, i, o.nodeId, o.handleId || null, o.type, c, u), d = _d.connection, f = _d.isValid; f && _(d), null === n || void 0 === n || n(e), y.setState({ connectionClickStartHandle: null }); } : void 0, ref: n }, m), d); }));
    vs.displayName = "Handle";
    var ys = (0, t.memo)(vs);
    var bs = function (e) { var n = e.data, r = e.isConnectable, _b = e.targetPosition, o = _b === void 0 ? Al.Top : _b, _d = e.sourcePosition, a = _d === void 0 ? Al.Bottom : _d; return t.createElement(t.Fragment, null, t.createElement(ys, { type: "target", position: o, isConnectable: r }), null === n || void 0 === n ? void 0 : n.label, t.createElement(ys, { type: "source", position: a, isConnectable: r })); };
    bs.displayName = "DefaultNode";
    var ws = (0, t.memo)(bs);
    var xs = function (e) { var n = e.data, r = e.isConnectable, _b = e.sourcePosition, o = _b === void 0 ? Al.Bottom : _b; return t.createElement(t.Fragment, null, null === n || void 0 === n ? void 0 : n.label, t.createElement(ys, { type: "source", position: o, isConnectable: r })); };
    xs.displayName = "InputNode";
    var Ss = (0, t.memo)(xs);
    var Es = function (e) { var n = e.data, r = e.isConnectable, _b = e.targetPosition, o = _b === void 0 ? Al.Top : _b; return t.createElement(t.Fragment, null, t.createElement(ys, { type: "target", position: o, isConnectable: r }), null === n || void 0 === n ? void 0 : n.label); };
    Es.displayName = "OutputNode";
    var ks = (0, t.memo)(Es);
    var Cs = function () { return null; };
    Cs.displayName = "GroupNode";
    var _s = function (e) { return ({ selectedNodes: e.getNodes().filter((function (e) { return e.selected; })), selectedEdges: e.edges.filter((function (e) { return e.selected; })) }); }, Ns = function (e) { return e.id; };
    function Ps(e, t) { return Qn(e.selectedNodes.map(Ns), t.selectedNodes.map(Ns)) && Qn(e.selectedEdges.map(Ns), t.selectedEdges.map(Ns)); }
    var Ms = (0, t.memo)((function (e) { var n = e.onSelectionChange; var r = Ji(), _b = Qi(_s, Ps), o = _b.selectedNodes, a = _b.selectedEdges; return (0, t.useEffect)((function () { var e = { nodes: o, edges: a }; null === n || void 0 === n || n(e), r.getState().onSelectionChange.forEach((function (t) { return t(e); })); }), [o, a, n]), null; }));
    Ms.displayName = "SelectionListener";
    var Os = function (e) { return !!e.onSelectionChange; };
    function Rs(e) { var n = e.onSelectionChange; var r = Qi(Os); return n || r ? t.createElement(Ms, { onSelectionChange: n }) : null; }
    var Ts = function (e) { return ({ setNodes: e.setNodes, setEdges: e.setEdges, setDefaultNodesAndEdges: e.setDefaultNodesAndEdges, setMinZoom: e.setMinZoom, setMaxZoom: e.setMaxZoom, setTranslateExtent: e.setTranslateExtent, setNodeExtent: e.setNodeExtent, reset: e.reset }); };
    function As(e, n) { (0, t.useEffect)((function () { "undefined" !== typeof e && n(e); }), [e]); }
    function zs(e, n, r) { (0, t.useEffect)((function () {
        var _b;
        "undefined" !== typeof n && r((_b = {}, _b[e] = n, _b));
    }), [n]); }
    var Is = function (e) { var n = e.nodes, r = e.edges, o = e.defaultNodes, a = e.defaultEdges, i = e.onConnect, l = e.onConnectStart, s = e.onConnectEnd, u = e.onClickConnectStart, c = e.onClickConnectEnd, d = e.nodesDraggable, f = e.nodesConnectable, p = e.nodesFocusable, h = e.edgesFocusable, m = e.edgesUpdatable, g = e.elevateNodesOnSelect, v = e.minZoom, y = e.maxZoom, b = e.nodeExtent, w = e.onNodesChange, x = e.onEdgesChange, S = e.elementsSelectable, E = e.connectionMode, k = e.snapGrid, C = e.snapToGrid, _ = e.translateExtent, N = e.connectOnClick, P = e.defaultEdgeOptions, M = e.fitView, O = e.fitViewOptions, R = e.onNodesDelete, T = e.onEdgesDelete, A = e.onNodeDrag, z = e.onNodeDragStart, I = e.onNodeDragStop, D = e.onSelectionDrag, L = e.onSelectionDragStart, B = e.onSelectionDragStop, j = e.noPanClassName, Z = e.nodeOrigin, F = e.rfId, U = e.autoPanOnConnect, V = e.autoPanOnNodeDrag, W = e.onError, H = e.connectionRadius, $ = e.isValidConnection, Y = e.nodeDragThreshold; var _b = Qi(Ts, Qn), X = _b.setNodes, K = _b.setEdges, q = _b.setDefaultNodesAndEdges, G = _b.setMinZoom, Q = _b.setMaxZoom, J = _b.setTranslateExtent, ee = _b.setNodeExtent, te = _b.reset, ne = Ji(); return (0, t.useEffect)((function () { var e = null === a || void 0 === a ? void 0 : a.map((function (e) { return (__assign(__assign({}, e), P)); })); return q(o, e), function () { te(); }; }), []), zs("defaultEdgeOptions", P, ne.setState), zs("connectionMode", E, ne.setState), zs("onConnect", i, ne.setState), zs("onConnectStart", l, ne.setState), zs("onConnectEnd", s, ne.setState), zs("onClickConnectStart", u, ne.setState), zs("onClickConnectEnd", c, ne.setState), zs("nodesDraggable", d, ne.setState), zs("nodesConnectable", f, ne.setState), zs("nodesFocusable", p, ne.setState), zs("edgesFocusable", h, ne.setState), zs("edgesUpdatable", m, ne.setState), zs("elementsSelectable", S, ne.setState), zs("elevateNodesOnSelect", g, ne.setState), zs("snapToGrid", C, ne.setState), zs("snapGrid", k, ne.setState), zs("onNodesChange", w, ne.setState), zs("onEdgesChange", x, ne.setState), zs("connectOnClick", N, ne.setState), zs("fitViewOnInit", M, ne.setState), zs("fitViewOnInitOptions", O, ne.setState), zs("onNodesDelete", R, ne.setState), zs("onEdgesDelete", T, ne.setState), zs("onNodeDrag", A, ne.setState), zs("onNodeDragStart", z, ne.setState), zs("onNodeDragStop", I, ne.setState), zs("onSelectionDrag", D, ne.setState), zs("onSelectionDragStart", L, ne.setState), zs("onSelectionDragStop", B, ne.setState), zs("noPanClassName", j, ne.setState), zs("nodeOrigin", Z, ne.setState), zs("rfId", F, ne.setState), zs("autoPanOnConnect", U, ne.setState), zs("autoPanOnNodeDrag", V, ne.setState), zs("onError", W, ne.setState), zs("connectionRadius", H, ne.setState), zs("isValidConnection", $, ne.setState), zs("nodeDragThreshold", Y, ne.setState), As(n, X), As(r, K), As(v, G), As(y, Q), As(_, J), As(b, ee), null; }, Ds = { display: "none" }, Ls = { position: "absolute", width: 1, height: 1, margin: -1, border: 0, padding: 0, overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)" }, Bs = "react-flow__node-desc", js = "react-flow__edge-desc", Zs = "react-flow__aria-live", Fs = function (e) { return e.ariaLiveMessage; };
    function Us(e) { var n = e.rfId; var r = Qi(Fs); return t.createElement("div", { id: "".concat(Zs, "-").concat(n), "aria-live": "assertive", "aria-atomic": "true", style: Ls }, r); }
    function Vs(e) { var n = e.rfId, r = e.disableKeyboardA11y; return t.createElement(t.Fragment, null, t.createElement("div", { id: "".concat(Bs, "-").concat(n), style: Ds }, "Press enter or space to select a node.", !r && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "), t.createElement("div", { id: "".concat(js, "-").concat(n), style: Ds }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."), !r && t.createElement(Us, { rfId: n })); }
    var Ws = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { actInsideInputWithModifier: !0 }; var _b = (0, t.useState)(!1), r = _b[0], o = _b[1], a = (0, t.useRef)(!1), i = (0, t.useRef)(new Set([])), _d = (0, t.useMemo)((function () { if (null !== e) {
        var t_33 = (Array.isArray(e) ? e : [e]).filter((function (e) { return "string" === typeof e; })).map((function (e) { return e.split("+"); })), n_33 = t_33.reduce((function (e, t) { return e.concat.apply(e, t); }), []);
        return [t_33, n_33];
    } return [[], []]; }), [e]), l = _d[0], s = _d[1]; return (0, t.useEffect)((function () { var t = "undefined" !== typeof document ? document : null, r = (null === n || void 0 === n ? void 0 : n.target) || t; if (null !== e) {
        var e_42 = function (e) { a.current = e.ctrlKey || e.metaKey || e.shiftKey; if ((!a.current || a.current && !n.actInsideInputWithModifier) && wl(e))
            return !1; var t = $s(e.code, s); i.current.add(e[t]), Hs(l, i.current, !1) && (e.preventDefault(), o(!0)); }, t_34 = function (e) { if ((!a.current || a.current && !n.actInsideInputWithModifier) && wl(e))
            return !1; var t = $s(e.code, s); Hs(l, i.current, !0) ? (o(!1), i.current.clear()) : i.current["delete"](e[t]), "Meta" === e.key && i.current.clear(), a.current = !1; }, u_2 = function () { i.current.clear(), o(!1); };
        return null === r || void 0 === r || r.addEventListener("keydown", e_42), null === r || void 0 === r || r.addEventListener("keyup", t_34), window.addEventListener("blur", u_2), function () { null === r || void 0 === r || r.removeEventListener("keydown", e_42), null === r || void 0 === r || r.removeEventListener("keyup", t_34), window.removeEventListener("blur", u_2); };
    } }), [e, o]), r; };
    function Hs(e, t, n) { return e.filter((function (e) { return n || e.length === t.size; })).some((function (e) { return e.every((function (e) { return t.has(e); })); })); }
    function $s(e, t) { return t.includes(e) ? "code" : "key"; }
    function Ys(e, t, n, r) { var o, a, i, l, s, u, c, d; if (!e.parentNode)
        return n; var f = t.get(e.parentNode), p = ts(f, r); return Ys(f, t, { x: (null !== (o = n.x) && void 0 !== o ? o : 0) + p.x, y: (null !== (a = n.y) && void 0 !== a ? a : 0) + p.y, z: (null !== (i = null === (l = f[vl]) || void 0 === l ? void 0 : l.z) && void 0 !== i ? i : 0) > (null !== (s = n.z) && void 0 !== s ? s : 0) ? null !== (u = null === (c = f[vl]) || void 0 === c ? void 0 : c.z) && void 0 !== u ? u : 0 : null !== (d = n.z) && void 0 !== d ? d : 0 }, r); }
    function Xs(e, t, n) { e.forEach((function (r) { if (r.parentNode && !e.has(r.parentNode))
        throw new Error("Parent node ".concat(r.parentNode, " not found")); if (r.parentNode || null !== n && void 0 !== n && n[r.id]) {
        var o, a;
        var _b = Ys(r, e, __assign(__assign({}, r.position), { z: null !== (o = null === (a = r[vl]) || void 0 === a ? void 0 : a.z) && void 0 !== o ? o : 0 }), t), i_10 = _b.x, l_4 = _b.y, s_2 = _b.z;
        r.positionAbsolute = { x: i_10, y: l_4 }, r[vl].z = s_2, null !== n && void 0 !== n && n[r.id] && (r[vl].isParent = !0);
    } })); }
    function Ks(e, t, n, r) { var o = new Map, a = {}, i = r ? 1e3 : 0; return e.forEach((function (e) { var n; var r = (gl(e.zIndex) ? e.zIndex : 0) + (e.selected ? i : 0), l = t.get(e.id), s = __assign(__assign({ width: null === l || void 0 === l ? void 0 : l.width, height: null === l || void 0 === l ? void 0 : l.height }, e), { positionAbsolute: { x: e.position.x, y: e.position.y } }); e.parentNode && (s.parentNode = e.parentNode, a[e.parentNode] = !0), Object.defineProperty(s, vl, { enumerable: !1, value: { handleBounds: null === l || void 0 === l || null === (n = l[vl]) || void 0 === n ? void 0 : n.handleBounds, z: r } }), o.set(e.id, s); })), Xs(o, n, a), o; }
    function qs(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; var _b = e(), n = _b.getNodes, r = _b.width, o = _b.height, a = _b.minZoom, i = _b.maxZoom, l = _b.d3Zoom, s = _b.d3Selection, u = _b.fitViewOnInitDone, c = _b.fitViewOnInit, d = _b.nodeOrigin, f = t.initial && !u && c; if (l && s && (f || !t.initial)) {
        var e_43 = n().filter((function (e) { var n; var r = t.includeHiddenNodes ? e.width && e.height : !e.hidden; return null !== (n = t.nodes) && void 0 !== n && n.length ? r && t.nodes.some((function (t) { return t.id === e.id; })) : r; })), u_3 = e_43.every((function (e) { return e.width && e.height; }));
        if (e_43.length > 0 && u_3) {
            var p, h, m;
            var n_34 = ns(e_43, d), _d = as(n_34, r, o, null !== (p = t.minZoom) && void 0 !== p ? p : a, null !== (h = t.maxZoom) && void 0 !== h ? h : i, null !== (m = t.padding) && void 0 !== m ? m : .1), u_4 = _d.x, c_3 = _d.y, f_2 = _d.zoom, g_1 = Ai.translate(u_4, c_3).scale(f_2);
            return "number" === typeof t.duration && t.duration > 0 ? l.transform(is(s, t.duration), g_1) : l.transform(s, g_1), !0;
        }
    } return !1; }
    function Gs(e, t) { return e.forEach((function (e) {
        var _b;
        var n = t.get(e.id);
        n && t.set(n.id, __assign(__assign({}, n), (_b = {}, _b[vl] = n[vl], _b.selected = e.selected, _b)));
    })), new Map(t); }
    function Qs(e, t) { return t.map((function (t) { var n = e.find((function (e) { return e.id === t.id; })); return n && (t.selected = n.selected), t; })); }
    function Js(e) { var t = e.changedNodes, n = e.changedEdges, r = e.get, o = e.set; var _b = r(), a = _b.nodeInternals, i = _b.edges, l = _b.onNodesChange, s = _b.onEdgesChange, u = _b.hasDefaultNodes, c = _b.hasDefaultEdges; null !== t && void 0 !== t && t.length && (u && o({ nodeInternals: Gs(t, a) }), null === l || void 0 === l || l(t)), null !== n && void 0 !== n && n.length && (c && o({ edges: Qs(n, i) }), null === s || void 0 === s || s(n)); }
    var eu = function () { }, tu = { zoomIn: eu, zoomOut: eu, zoomTo: eu, getZoom: function () { return 1; }, setViewport: eu, getViewport: function () { return ({ x: 0, y: 0, zoom: 1 }); }, fitView: function () { return !1; }, setCenter: eu, fitBounds: eu, project: function (e) { return e; }, screenToFlowPosition: function (e) { return e; }, flowToScreenPosition: function (e) { return e; }, viewportInitialized: !1 }, nu = function (e) { return ({ d3Zoom: e.d3Zoom, d3Selection: e.d3Selection }); }, ru = function () { var e = Ji(), _b = Qi(nu, Qn), n = _b.d3Zoom, r = _b.d3Selection, o = (0, t.useMemo)((function () { return r && n ? { zoomIn: function (e) { return n.scaleBy(is(r, null === e || void 0 === e ? void 0 : e.duration), 1.2); }, zoomOut: function (e) { return n.scaleBy(is(r, null === e || void 0 === e ? void 0 : e.duration), 1 / 1.2); }, zoomTo: function (e, t) { return n.scaleTo(is(r, null === t || void 0 === t ? void 0 : t.duration), e); }, getZoom: function () { return e.getState().transform[2]; }, setViewport: function (t, o) { var a, i, l; var _b = e.getState().transform, s = _b[0], u = _b[1], c = _b[2], d = Ai.translate(null !== (a = t.x) && void 0 !== a ? a : s, null !== (i = t.y) && void 0 !== i ? i : u).scale(null !== (l = t.zoom) && void 0 !== l ? l : c); n.transform(is(r, null === o || void 0 === o ? void 0 : o.duration), d); }, getViewport: function () { var _b = e.getState().transform, t = _b[0], n = _b[1], r = _b[2]; return { x: t, y: n, zoom: r }; }, fitView: function (t) { return qs(e.getState, t); }, setCenter: function (t, o, a) { var _b = e.getState(), i = _b.width, l = _b.height, s = _b.maxZoom, u = "undefined" !== typeof (null === a || void 0 === a ? void 0 : a.zoom) ? a.zoom : s, c = i / 2 - t * u, d = l / 2 - o * u, f = Ai.translate(c, d).scale(u); n.transform(is(r, null === a || void 0 === a ? void 0 : a.duration), f); }, fitBounds: function (t, o) { var a; var _b = e.getState(), i = _b.width, l = _b.height, s = _b.minZoom, u = _b.maxZoom, _d = as(t, i, l, s, u, null !== (a = null === o || void 0 === o ? void 0 : o.padding) && void 0 !== a ? a : .1), c = _d.x, d = _d.y, f = _d.zoom, p = Ai.translate(c, d).scale(f); n.transform(is(r, null === o || void 0 === o ? void 0 : o.duration), p); }, project: function (t) { var _b = e.getState(), n = _b.transform, r = _b.snapToGrid, o = _b.snapGrid; return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"), Jl(t, n, r, o); }, screenToFlowPosition: function (t) { var _b = e.getState(), n = _b.transform, r = _b.snapToGrid, o = _b.snapGrid, a = _b.domNode; if (!a)
            return t; var _d = a.getBoundingClientRect(), i = _d.x, l = _d.y, s = { x: t.x - i, y: t.y - l }; return Jl(s, n, r, o); }, flowToScreenPosition: function (t) { var _b = e.getState(), n = _b.transform, r = _b.domNode; if (!r)
            return t; var _d = r.getBoundingClientRect(), o = _d.x, a = _d.y, i = es(t, n); return { x: i.x + o, y: i.y + a }; }, viewportInitialized: !0 } : tu; }), [n, r]); return o; };
    function ou() { var e = ru(), n = Ji(), r = (0, t.useCallback)((function () { return n.getState().getNodes().map((function (e) { return (__assign({}, e)); })); }), []), o = (0, t.useCallback)((function (e) { return n.getState().nodeInternals.get(e); }), []), a = (0, t.useCallback)((function () { var _b = n.getState().edges, e = _b === void 0 ? [] : _b; return e.map((function (e) { return (__assign({}, e)); })); }), []), i = (0, t.useCallback)((function (e) { var _b = n.getState().edges, t = _b === void 0 ? [] : _b; return t.find((function (t) { return t.id === e; })); }), []), l = (0, t.useCallback)((function (e) { var _b = n.getState(), t = _b.getNodes, r = _b.setNodes, o = _b.hasDefaultNodes, a = _b.onNodesChange, i = t(), l = "function" === typeof e ? e(i) : e; if (o)
        r(l);
    else if (a) {
        var e_44 = 0 === l.length ? i.map((function (e) { return ({ type: "remove", id: e.id }); })) : l.map((function (e) { return ({ item: e, type: "reset" }); }));
        a(e_44);
    } }), []), s = (0, t.useCallback)((function (e) { var _b = n.getState(), _d = _b.edges, t = _d === void 0 ? [] : _d, r = _b.setEdges, o = _b.hasDefaultEdges, a = _b.onEdgesChange, i = "function" === typeof e ? e(t) : e; if (o)
        r(i);
    else if (a) {
        a(0 === i.length ? t.map((function (e) { return ({ type: "remove", id: e.id }); })) : i.map((function (e) { return ({ item: e, type: "reset" }); })));
    } }), []), u = (0, t.useCallback)((function (e) { var t = Array.isArray(e) ? e : [e], _b = n.getState(), r = _b.getNodes, o = _b.setNodes, a = _b.hasDefaultNodes, i = _b.onNodesChange; if (a) {
        o(__spreadArray(__spreadArray([], r(), true), t, true));
    }
    else if (i) {
        var e_45 = t.map((function (e) { return ({ item: e, type: "add" }); }));
        i(e_45);
    } }), []), c = (0, t.useCallback)((function (e) { var t = Array.isArray(e) ? e : [e], _b = n.getState(), _d = _b.edges, r = _d === void 0 ? [] : _d, o = _b.setEdges, a = _b.hasDefaultEdges, i = _b.onEdgesChange; if (a)
        o(__spreadArray(__spreadArray([], r, true), t, true));
    else if (i) {
        i(t.map((function (e) { return ({ item: e, type: "add" }); })));
    } }), []), d = (0, t.useCallback)((function () { var _b = n.getState(), e = _b.getNodes, _d = _b.edges, t = _d === void 0 ? [] : _d, r = _b.transform, o = r[0], a = r[1], i = r[2]; return { nodes: e().map((function (e) { return (__assign({}, e)); })), edges: t.map((function (e) { return (__assign({}, e)); })), viewport: { x: o, y: a, zoom: i } }; }), []), f = (0, t.useCallback)((function (e) { var t = e.nodes, r = e.edges; var _b = n.getState(), o = _b.nodeInternals, a = _b.getNodes, i = _b.edges, l = _b.hasDefaultNodes, s = _b.hasDefaultEdges, u = _b.onNodesDelete, c = _b.onEdgesDelete, d = _b.onNodesChange, f = _b.onEdgesChange, p = (t || []).map((function (e) { return e.id; })), h = (r || []).map((function (e) { return e.id; })), m = a().reduce((function (e, t) { var n = !p.includes(t.id) && t.parentNode && e.find((function (e) { return e.id === t.parentNode; })); return ("boolean" !== typeof t.deletable || t.deletable) && (p.includes(t.id) || n) && e.push(t), e; }), []), g = i.filter((function (e) { return "boolean" !== typeof e.deletable || e.deletable; })), v = g.filter((function (e) { return h.includes(e.id); })); if (m || v) {
        var e_46 = os(m, g), t_35 = __spreadArray(__spreadArray([], v, true), e_46, true), r_18 = t_35.reduce((function (e, t) { return (e.includes(t.id) || e.push(t.id), e); }), []);
        if ((s || l) && (s && n.setState({ edges: i.filter((function (e) { return !r_18.includes(e.id); })) }), l && (m.forEach((function (e) { o["delete"](e.id); })), n.setState({ nodeInternals: new Map(o) }))), r_18.length > 0 && (null === c || void 0 === c || c(t_35), f && f(r_18.map((function (e) { return ({ id: e, type: "remove" }); })))), m.length > 0 && (null === u || void 0 === u || u(m), d)) {
            d(m.map((function (e) { return ({ id: e.id, type: "remove" }); })));
        }
    } }), []), p = (0, t.useCallback)((function (e) { var t = ml(e), r = t ? null : n.getState().nodeInternals.get(e.id); if (!t && !r)
        return [null, null, t]; return [t ? e : pl(r), r, t]; }), []), h = (0, t.useCallback)((function (e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = arguments.length > 2 ? arguments[2] : void 0; var _b = p(e), o = _b[0], a = _b[1], i = _b[2]; return o ? (r || n.getState().getNodes()).filter((function (e) { if (!i && (e.id === a.id || !e.positionAbsolute))
        return !1; var n = pl(e), r = hl(n, o); return t && r > 0 || r >= o.width * o.height; })) : []; }), []), m = (0, t.useCallback)((function (e, t) { var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; var r = p(e)[0]; if (!r)
        return !1; var o = hl(r, t); return n && o > 0 || o >= r.width * r.height; }), []); return (0, t.useMemo)((function () { return (__assign(__assign({}, e), { getNodes: r, getNode: o, getEdges: a, getEdge: i, setNodes: l, setEdges: s, addNodes: u, addEdges: c, toObject: d, deleteElements: f, getIntersectingNodes: h, isNodeIntersecting: m })); }), [e, r, o, a, i, l, s, u, c, d, f, h, m]); }
    var au = { actInsideInputWithModifier: !1 };
    var iu = { position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }, lu = function (e) { return ({ x: e.x, y: e.y, zoom: e.k }); }, su = function (e, t) { return e.target.closest(".".concat(t)); }, uu = function (e, t) { return 2 === t && Array.isArray(e) && e.includes(2); }, cu = function (e) { var t = e.ctrlKey && El() ? 10 : 1; return -e.deltaY * (1 === e.deltaMode ? .05 : e.deltaMode ? 1 : .002) * t; }, du = function (e) { return ({ d3Zoom: e.d3Zoom, d3Selection: e.d3Selection, d3ZoomHandler: e.d3ZoomHandler, userSelectionActive: e.userSelectionActive }); }, fu = function (e) { var n = e.onMove, r = e.onMoveStart, o = e.onMoveEnd, a = e.onPaneContextMenu, _b = e.zoomOnScroll, i = _b === void 0 ? !0 : _b, _d = e.zoomOnPinch, l = _d === void 0 ? !0 : _d, _f = e.panOnScroll, s = _f === void 0 ? !1 : _f, _g = e.panOnScrollSpeed, u = _g === void 0 ? .5 : _g, _h = e.panOnScrollMode, c = _h === void 0 ? Ml.Free : _h, _j = e.zoomOnDoubleClick, d = _j === void 0 ? !0 : _j, f = e.elementsSelectable, _k = e.panOnDrag, p = _k === void 0 ? !0 : _k, h = e.defaultViewport, m = e.translateExtent, g = e.minZoom, v = e.maxZoom, y = e.zoomActivationKeyCode, _m = e.preventScrolling, b = _m === void 0 ? !0 : _m, w = e.children, x = e.noWheelClassName, S = e.noPanClassName; var E = (0, t.useRef)(), k = Ji(), C = (0, t.useRef)(!1), _ = (0, t.useRef)(!1), N = (0, t.useRef)(null), P = (0, t.useRef)({ x: 0, y: 0, zoom: 0 }), _p = Qi(du, Qn), M = _p.d3Zoom, O = _p.d3Selection, R = _p.d3ZoomHandler, T = _p.userSelectionActive, A = Ws(y), z = (0, t.useRef)(0), I = (0, t.useRef)(!1), D = (0, t.useRef)(); return function (e) { var n = Ji(); (0, t.useEffect)((function () { var t; var r = function () { if (!e.current)
        return; var t = ol(e.current); var r, o; 0 !== t.height && 0 !== t.width || null === (r = (o = n.getState()).onError) || void 0 === r || r.call(o, "004", qi.error004()), n.setState({ width: t.width || 500, height: t.height || 500 }); }; return r(), window.addEventListener("resize", r), e.current && (t = new ResizeObserver((function () { return r(); })), t.observe(e.current)), function () { window.removeEventListener("resize", r), t && e.current && t.unobserve(e.current); }; }), []); }(N), (0, t.useEffect)((function () { if (N.current) {
        var e_47 = N.current.getBoundingClientRect(), t_36 = function () { var e, t, n, r = Di, o = Li, a = Fi, i = ji, l = Zi, s = [0, 1 / 0], u = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], c = 250, d = No, f = or("start", "zoom", "end"), p = 500, h = 150, m = 0, g = 10; function v(e) { e.property("__zoom", Bi).on("wheel.zoom", k, { passive: !1 }).on("mousedown.zoom", C).on("dblclick.zoom", _).filter(l).on("touchstart.zoom", N).on("touchmove.zoom", P).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)"); } function y(e, t) { return (t = Math.max(s[0], Math.min(s[1], t))) === e.k ? e : new Ti(t, e.x, e.y); } function b(e, t, n) { var r = t[0] - n[0] * e.k, o = t[1] - n[1] * e.k; return r === e.x && o === e.y ? e : new Ti(e.k, r, o); } function w(e) { return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2]; } function x(e, t, n, r) { e.on("start.zoom", (function () { S(this, arguments).event(r).start(); })).on("interrupt.zoom end.zoom", (function () { S(this, arguments).event(r).end(); })).tween("zoom", (function () { var e = this, a = arguments, i = S(e, a).event(r), l = o.apply(e, a), s = null == n ? w(l) : "function" === typeof n ? n.apply(e, a) : n, u = Math.max(l[1][0] - l[0][0], l[1][1] - l[0][1]), c = e.__zoom, f = "function" === typeof t ? t.apply(e, a) : t, p = d(c.invert(s).concat(u / c.k), f.invert(s).concat(u / f.k)); return function (e) { if (1 === e)
            e = f;
        else {
            var t = p(e), n = u / t[2];
            e = new Ti(n, s[0] - t[0] * n, s[1] - t[1] * n);
        } i.zoom(null, e); }; })); } function S(e, t, n) { return !n && e.__zooming || new E(e, t); } function E(e, t) { this.that = e, this.args = t, this.active = 0, this.sourceEvent = null, this.extent = o.apply(e, t), this.taps = 0; } function k(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o]; if (r.apply(this, arguments)) {
            var l = S(this, n).event(e), c = this.__zoom, d = Math.max(s[0], Math.min(s[1], c.k * Math.pow(2, i.apply(this, arguments)))), f = Po(e);
            if (l.wheel)
                l.mouse[0][0] === f[0] && l.mouse[0][1] === f[1] || (l.mouse[1] = c.invert(l.mouse[0] = f)), clearTimeout(l.wheel);
            else {
                if (c.k === d)
                    return;
                l.mouse = [f, c.invert(f)], la(this), l.start();
            }
            Ii(e), l.wheel = setTimeout((function () { l.wheel = null, l.end(); }), h), l.zoom("mouse", a(b(y(c, d), l.mouse[0], l.mouse[1]), l.extent, u));
        } } function C(e) { for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            o[i - 1] = arguments[i]; if (!n && r.apply(this, arguments)) {
            var l = e.currentTarget, s = S(this, o, !0).event(e), c = bo(e.view).on("mousemove.zoom", (function (e) { if (Ii(e), !s.moved) {
                var t = e.clientX - f, n = e.clientY - p;
                s.moved = t * t + n * n > m;
            } s.event(e).zoom("mouse", a(b(s.that.__zoom, s.mouse[0] = Po(e, l), s.mouse[1]), s.extent, u)); }), !0).on("mouseup.zoom", (function (e) { c.on("mousemove.zoom mouseup.zoom", null), Co(e.view, s.moved), Ii(e), s.event(e).end(); }), !0), d = Po(e, l), f = e.clientX, p = e.clientY;
            ko(e.view), zi(e), s.mouse = [d, this.__zoom.invert(d)], la(this), s.start();
        } } function _(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            n[i - 1] = arguments[i]; if (r.apply(this, arguments)) {
            var l = this.__zoom, s = Po(e.changedTouches ? e.changedTouches[0] : e, this), d = l.invert(s), f = l.k * (e.shiftKey ? .5 : 2), p = a(b(y(l, f), s, d), o.apply(this, n), u);
            Ii(e), c > 0 ? bo(this).transition().duration(c).call(x, p, s, e) : bo(this).call(v.transform, p, s, e);
        } } function N(n) { for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
            a[i - 1] = arguments[i]; if (r.apply(this, arguments)) {
            var l, s, u, c, d = n.touches, f = d.length, h = S(this, a, n.changedTouches.length === f).event(n);
            for (zi(n), s = 0; s < f; ++s)
                c = [c = Po(u = d[s], this), this.__zoom.invert(c), u.identifier], h.touch0 ? h.touch1 || h.touch0[2] === c[2] || (h.touch1 = c, h.taps = 0) : (h.touch0 = c, l = !0, h.taps = 1 + !!e);
            e && (e = clearTimeout(e)), l && (h.taps < 2 && (t = c[0], e = setTimeout((function () { e = null; }), p)), la(this), h.start());
        } } function P(e) { if (this.__zooming) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            var o, i, l, s, c = S(this, n).event(e), d = e.changedTouches, f = d.length;
            for (Ii(e), o = 0; o < f; ++o)
                l = Po(i = d[o], this), c.touch0 && c.touch0[2] === i.identifier ? c.touch0[0] = l : c.touch1 && c.touch1[2] === i.identifier && (c.touch1[0] = l);
            if (i = c.that.__zoom, c.touch1) {
                var p = c.touch0[0], h = c.touch0[1], m = c.touch1[0], g = c.touch1[1], v = (v = m[0] - p[0]) * v + (v = m[1] - p[1]) * v, w = (w = g[0] - h[0]) * w + (w = g[1] - h[1]) * w;
                i = y(i, Math.sqrt(v / w)), l = [(p[0] + m[0]) / 2, (p[1] + m[1]) / 2], s = [(h[0] + g[0]) / 2, (h[1] + g[1]) / 2];
            }
            else {
                if (!c.touch0)
                    return;
                l = c.touch0[0], s = c.touch0[1];
            }
            c.zoom("touch", a(b(i, l, s), c.extent, u));
        } } function M(e) { for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            o[a - 1] = arguments[a]; if (this.__zooming) {
            var i, l, s = S(this, o).event(e), u = e.changedTouches, c = u.length;
            for (zi(e), n && clearTimeout(n), n = setTimeout((function () { n = null; }), p), i = 0; i < c; ++i)
                l = u[i], s.touch0 && s.touch0[2] === l.identifier ? delete s.touch0 : s.touch1 && s.touch1[2] === l.identifier && delete s.touch1;
            if (s.touch1 && !s.touch0 && (s.touch0 = s.touch1, delete s.touch1), s.touch0)
                s.touch0[1] = this.__zoom.invert(s.touch0[0]);
            else if (s.end(), 2 === s.taps && (l = Po(l, this), Math.hypot(t[0] - l[0], t[1] - l[1]) < g)) {
                var d = bo(this).on("dblclick.zoom");
                d && d.apply(this, arguments);
            }
        } } return v.transform = function (e, t, n, r) { var o = e.selection ? e.selection() : e; o.property("__zoom", Bi), e !== o ? x(e, t, n, r) : o.interrupt().each((function () { S(this, arguments).event(r).start().zoom(null, "function" === typeof t ? t.apply(this, arguments) : t).end(); })); }, v.scaleBy = function (e, t, n, r) { v.scaleTo(e, (function () { return this.__zoom.k * ("function" === typeof t ? t.apply(this, arguments) : t); }), n, r); }, v.scaleTo = function (e, t, n, r) { v.transform(e, (function () { var e = o.apply(this, arguments), r = this.__zoom, i = null == n ? w(e) : "function" === typeof n ? n.apply(this, arguments) : n, l = r.invert(i), s = "function" === typeof t ? t.apply(this, arguments) : t; return a(b(y(r, s), i, l), e, u); }), n, r); }, v.translateBy = function (e, t, n, r) { v.transform(e, (function () { return a(this.__zoom.translate("function" === typeof t ? t.apply(this, arguments) : t, "function" === typeof n ? n.apply(this, arguments) : n), o.apply(this, arguments), u); }), null, r); }, v.translateTo = function (e, t, n, r, i) { v.transform(e, (function () { var e = o.apply(this, arguments), i = this.__zoom, l = null == r ? w(e) : "function" === typeof r ? r.apply(this, arguments) : r; return a(Ai.translate(l[0], l[1]).scale(i.k).translate("function" === typeof t ? -t.apply(this, arguments) : -t, "function" === typeof n ? -n.apply(this, arguments) : -n), e, u); }), r, i); }, E.prototype = { event: function (e) { return e && (this.sourceEvent = e), this; }, start: function () { return 1 === ++this.active && (this.that.__zooming = this, this.emit("start")), this; }, zoom: function (e, t) { return this.mouse && "mouse" !== e && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && "touch" !== e && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && "touch" !== e && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit("zoom"), this; }, end: function () { return 0 === --this.active && (delete this.that.__zooming, this.emit("end")), this; }, emit: function (e) { var t = bo(this.that).datum(); f.call(e, this.that, new Ri(e, { sourceEvent: this.sourceEvent, target: v, type: e, transform: this.that.__zoom, dispatch: f }), t); } }, v.wheelDelta = function (e) { return arguments.length ? (i = "function" === typeof e ? e : Oi(+e), v) : i; }, v.filter = function (e) { return arguments.length ? (r = "function" === typeof e ? e : Oi(!!e), v) : r; }, v.touchable = function (e) { return arguments.length ? (l = "function" === typeof e ? e : Oi(!!e), v) : l; }, v.extent = function (e) { return arguments.length ? (o = "function" === typeof e ? e : Oi([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), v) : o; }, v.scaleExtent = function (e) { return arguments.length ? (s[0] = +e[0], s[1] = +e[1], v) : [s[0], s[1]]; }, v.translateExtent = function (e) { return arguments.length ? (u[0][0] = +e[0][0], u[1][0] = +e[1][0], u[0][1] = +e[0][1], u[1][1] = +e[1][1], v) : [[u[0][0], u[0][1]], [u[1][0], u[1][1]]]; }, v.constrain = function (e) { return arguments.length ? (a = e, v) : a; }, v.duration = function (e) { return arguments.length ? (c = +e, v) : c; }, v.interpolate = function (e) { return arguments.length ? (d = e, v) : d; }, v.on = function () { var e = f.on.apply(f, arguments); return e === f ? v : e; }, v.clickDistance = function (e) { return arguments.length ? (m = (e = +e) * e, v) : Math.sqrt(m); }, v.tapDistance = function (e) { return arguments.length ? (g = +e, v) : g; }, v; }().scaleExtent([g, v]).translateExtent(m), n_35 = bo(N.current).call(t_36), r_19 = Ai.translate(h.x, h.y).scale(al(h.zoom, g, v)), o_14 = [[0, 0], [e_47.width, e_47.height]], a_8 = t_36.constrain()(r_19, o_14, m);
        t_36.transform(n_35, a_8), t_36.wheelDelta(cu), k.setState({ d3Zoom: t_36, d3Selection: n_35, d3ZoomHandler: n_35.on("wheel.zoom"), transform: [a_8.x, a_8.y, a_8.k], domNode: N.current.closest(".react-flow") });
    } }), []), (0, t.useEffect)((function () { O && M && (!s || A || T ? "undefined" !== typeof R && O.on("wheel.zoom", (function (e, t) { if (!b || su(e, x))
        return null; e.preventDefault(), R.call(this, e, t); }), { passive: !1 }) : O.on("wheel.zoom", (function (e) { if (su(e, x))
        return !1; e.preventDefault(), e.stopImmediatePropagation(); var t = O.property("__zoom").k || 1, a = El(); if (e.ctrlKey && l && a) {
        var n_36 = Po(e), r_20 = cu(e), o_15 = t * Math.pow(2, r_20);
        return void M.scaleTo(O, o_15, n_36, e);
    } var i = 1 === e.deltaMode ? 20 : 1; var s = c === Ml.Vertical ? 0 : e.deltaX * i, d = c === Ml.Horizontal ? 0 : e.deltaY * i; !a && e.shiftKey && c !== Ml.Vertical && (s = e.deltaY * i, d = 0), M.translateBy(O, -s / t * u, -d / t * u, { internal: !0 }); var f = lu(O.property("__zoom")), _b = k.getState(), p = _b.onViewportChangeStart, h = _b.onViewportChange, m = _b.onViewportChangeEnd; clearTimeout(D.current), I.current || (I.current = !0, null === r || void 0 === r || r(e, f), null === p || void 0 === p || p(f)), I.current && (null === n || void 0 === n || n(e, f), null === h || void 0 === h || h(f), D.current = setTimeout((function () { null === o || void 0 === o || o(e, f), null === m || void 0 === m || m(f), I.current = !1; }), 150)); }), { passive: !1 })); }), [T, s, c, O, M, R, A, l, b, x, r, n, o]), (0, t.useEffect)((function () { M && M.on("start", (function (e) { var t, n; if (!e.sourceEvent || e.sourceEvent.internal)
        return null; z.current = null === (t = e.sourceEvent) || void 0 === t ? void 0 : t.button; var o = k.getState().onViewportChangeStart, a = lu(e.transform); C.current = !0, P.current = a, "mousedown" === (null === (n = e.sourceEvent) || void 0 === n ? void 0 : n.type) && k.setState({ paneDragging: !0 }), null === o || void 0 === o || o(a), null === r || void 0 === r || r(e.sourceEvent, a); })); }), [M, r]), (0, t.useEffect)((function () { M && (T && !C.current ? M.on("zoom", null) : T || M.on("zoom", (function (e) { var t, r; var o = k.getState().onViewportChange; if (k.setState({ transform: [e.transform.x, e.transform.y, e.transform.k] }), _.current = !(!a || !uu(p, null !== (t = z.current) && void 0 !== t ? t : 0)), (n || o) && (null === (r = e.sourceEvent) || void 0 === r || !r.internal)) {
        var t_37 = lu(e.transform);
        null === o || void 0 === o || o(t_37), null === n || void 0 === n || n(e.sourceEvent, t_37);
    } }))); }), [T, M, n, p, a]), (0, t.useEffect)((function () { M && M.on("end", (function (e) { var t; if (!e.sourceEvent || e.sourceEvent.internal)
        return null; var n = k.getState().onViewportChangeEnd; if (C.current = !1, k.setState({ paneDragging: !1 }), a && uu(p, null !== (t = z.current) && void 0 !== t ? t : 0) && !_.current && a(e.sourceEvent), _.current = !1, (o || n) && (r = P.current, i = e.transform, r.x !== i.x || r.y !== i.y || r.zoom !== i.k)) {
        var t_38 = lu(e.transform);
        P.current = t_38, clearTimeout(E.current), E.current = setTimeout((function () { null === n || void 0 === n || n(t_38), null === o || void 0 === o || o(e.sourceEvent, t_38); }), s ? 150 : 0);
    } var r, i; })); }), [M, s, p, o, a]), (0, t.useEffect)((function () { M && M.filter((function (e) { var t = A || i, n = l && e.ctrlKey; if ((!0 === p || Array.isArray(p) && p.includes(1)) && 1 === e.button && "mousedown" === e.type && (su(e, "react-flow__node") || su(e, "react-flow__edge")))
        return !0; if (!p && !t && !s && !d && !l)
        return !1; if (T)
        return !1; if (!d && "dblclick" === e.type)
        return !1; if (su(e, x) && "wheel" === e.type)
        return !1; if (su(e, S) && ("wheel" !== e.type || s && "wheel" === e.type && !A))
        return !1; if (!l && e.ctrlKey && "wheel" === e.type)
        return !1; if (!t && !s && !n && "wheel" === e.type)
        return !1; if (!p && ("mousedown" === e.type || "touchstart" === e.type))
        return !1; if (Array.isArray(p) && !p.includes(e.button) && ("mousedown" === e.type || "touchstart" === e.type))
        return !1; var r = Array.isArray(p) && p.includes(e.button) || !e.button || e.button <= 1; return (!e.ctrlKey || "wheel" === e.type) && r; })); }), [T, M, i, l, s, d, p, f, A]), t.createElement("div", { className: "react-flow__renderer", ref: N, style: iu }, w); }, pu = function (e) { return ({ userSelectionActive: e.userSelectionActive, userSelectionRect: e.userSelectionRect }); };
    function hu() { var _b = Qi(pu, Qn), e = _b.userSelectionActive, n = _b.userSelectionRect; return e && n ? t.createElement("div", { className: "react-flow__selection react-flow__container", style: { width: n.width, height: n.height, transform: "translate(".concat(n.x, "px, ").concat(n.y, "px)") } }) : null; }
    function mu(e, t) { var n = e.find((function (e) { return e.id === t.parentNode; })); if (n) {
        var e_48 = t.position.x + t.width - n.width, a_9 = t.position.y + t.height - n.height;
        if (e_48 > 0 || a_9 > 0 || t.position.x < 0 || t.position.y < 0) {
            var r, o;
            if (n.style = __assign({}, n.style) || {}, n.style.width = null !== (r = n.style.width) && void 0 !== r ? r : n.width, n.style.height = null !== (o = n.style.height) && void 0 !== o ? o : n.height, e_48 > 0 && (n.style.width += e_48), a_9 > 0 && (n.style.height += a_9), t.position.x < 0) {
                var e_49 = Math.abs(t.position.x);
                n.position.x = n.position.x - e_49, n.style.width += e_49, t.position.x = 0;
            }
            if (t.position.y < 0) {
                var e_50 = Math.abs(t.position.y);
                n.position.y = n.position.y - e_50, n.style.height += e_50, t.position.y = 0;
            }
            n.width = n.style.width, n.height = n.style.height;
        }
    } }
    function gu(e, t) { if (e.some((function (e) { return "reset" === e.type; })))
        return e.filter((function (e) { return "reset" === e.type; })).map((function (e) { return e.item; })); var n = e.filter((function (e) { return "add" === e.type; })).map((function (e) { return e.item; })); return t.reduce((function (t, n) { var r = e.filter((function (e) { return e.id === n.id; })); if (0 === r.length)
        return t.push(n), t; var o = __assign({}, n); for (var _b = 0, r_21 = r; _b < r_21.length; _b++) {
        var e_51 = r_21[_b];
        if (e_51)
            switch (e_51.type) {
                case "select":
                    o.selected = e_51.selected;
                    break;
                case "position":
                    "undefined" !== typeof e_51.position && (o.position = e_51.position), "undefined" !== typeof e_51.positionAbsolute && (o.positionAbsolute = e_51.positionAbsolute), "undefined" !== typeof e_51.dragging && (o.dragging = e_51.dragging), o.expandParent && mu(t, o);
                    break;
                case "dimensions":
                    "undefined" !== typeof e_51.dimensions && (o.width = e_51.dimensions.width, o.height = e_51.dimensions.height), "undefined" !== typeof e_51.updateStyle && (o.style = __assign(__assign({}, o.style || {}), e_51.dimensions)), "boolean" === typeof e_51.resizing && (o.resizing = e_51.resizing), o.expandParent && mu(t, o);
                    break;
                case "remove": return t;
            }
    } return t.push(o), t; }), n); }
    function vu(e, t) { return gu(e, t); }
    var yu = function (e, t) { return ({ id: e, type: "select", selected: t }); };
    function bu(e, t) { return e.reduce((function (e, n) { var r = t.includes(n.id); return !n.selected && r ? (n.selected = !0, e.push(yu(n.id, !0))) : n.selected && !r && (n.selected = !1, e.push(yu(n.id, !1))), e; }), []); }
    var wu = function (e, t) { return function (n) { n.target === t.current && (null === e || void 0 === e || e(n)); }; }, xu = function (e) { return ({ userSelectionActive: e.userSelectionActive, elementsSelectable: e.elementsSelectable, dragging: e.paneDragging }); }, Su = (0, t.memo)((function (e) { var n = e.isSelecting, _b = e.selectionMode, r = _b === void 0 ? Ol.Full : _b, o = e.panOnDrag, a = e.onSelectionStart, i = e.onSelectionEnd, l = e.onPaneClick, s = e.onPaneContextMenu, u = e.onPaneScroll, c = e.onPaneMouseEnter, d = e.onPaneMouseMove, f = e.onPaneMouseLeave, p = e.children; var h = (0, t.useRef)(null), m = Ji(), g = (0, t.useRef)(0), v = (0, t.useRef)(0), y = (0, t.useRef)(), _d = Qi(xu, Qn), b = _d.userSelectionActive, w = _d.elementsSelectable, x = _d.dragging, S = function () { m.setState({ userSelectionActive: !1, userSelectionRect: null }), g.current = 0, v.current = 0; }, E = function (e) { null === l || void 0 === l || l(e), m.getState().resetSelectedElements(), m.setState({ nodesSelectionActive: !1 }); }, k = u ? function (e) { return u(e); } : void 0, C = w && (n || b); return t.createElement("div", { className: Vn(["react-flow__pane", { dragging: x, selection: n }]), onClick: C ? void 0 : wu(E, h), onContextMenu: wu((function (e) { Array.isArray(o) && null !== o && void 0 !== o && o.includes(2) ? e.preventDefault() : null === s || void 0 === s || s(e); }), h), onWheel: wu(k, h), onMouseEnter: C ? void 0 : c, onMouseDown: C ? function (e) { var _b = m.getState(), t = _b.resetSelectedElements, r = _b.domNode; if (y.current = null === r || void 0 === r ? void 0 : r.getBoundingClientRect(), !w || !n || 0 !== e.button || e.target !== h.current || !y.current)
            return; var _d = Sl(e, y.current), o = _d.x, i = _d.y; t(), m.setState({ userSelectionRect: { width: 0, height: 0, startX: o, startY: i, x: o, y: i } }), null === a || void 0 === a || a(e); } : void 0, onMouseMove: C ? function (e) { var t, o; var _b = m.getState(), a = _b.userSelectionRect, i = _b.nodeInternals, l = _b.edges, s = _b.transform, u = _b.onNodesChange, c = _b.onEdgesChange, d = _b.nodeOrigin, f = _b.getNodes; if (!n || !y.current || !a)
            return; m.setState({ userSelectionActive: !0, nodesSelectionActive: !1 }); var p = Sl(e, y.current), h = null !== (t = a.startX) && void 0 !== t ? t : 0, b = null !== (o = a.startY) && void 0 !== o ? o : 0, w = __assign(__assign({}, a), { x: p.x < h ? p.x : h, y: p.y < b ? p.y : b, width: Math.abs(p.x - h), height: Math.abs(p.y - b) }), x = f(), S = rs(i, w, s, r === Ol.Partial, !0, d), E = os(S, l).map((function (e) { return e.id; })), k = S.map((function (e) { return e.id; })); if (g.current !== k.length) {
            g.current = k.length;
            var e_52 = bu(x, k);
            e_52.length && (null === u || void 0 === u || u(e_52));
        } if (v.current !== E.length) {
            v.current = E.length;
            var e_53 = bu(l, E);
            e_53.length && (null === c || void 0 === c || c(e_53));
        } m.setState({ userSelectionRect: w }); } : d, onMouseUp: C ? function (e) { if (0 !== e.button)
            return; var t = m.getState().userSelectionRect; !b && t && e.target === h.current && (null === E || void 0 === E || E(e)), m.setState({ nodesSelectionActive: g.current > 0 }), S(), null === i || void 0 === i || i(e); } : void 0, onMouseLeave: C ? function (e) { b && (m.setState({ nodesSelectionActive: g.current > 0 }), null === i || void 0 === i || i(e)), S(); } : f, ref: h, style: iu }, p, t.createElement(hu, null)); }));
    function Eu(e, t) { if (!e.parentNode)
        return !1; var n = t.get(e.parentNode); return !!n && (!!n.selected || Eu(n, t)); }
    function ku(e, t, n) { var r = e; do {
        var o;
        if (null !== (o = r) && void 0 !== o && o.matches(t))
            return !0;
        if (r === n.current)
            return !1;
        r = r.parentElement;
    } while (r); return !1; }
    function Cu(e, t, n, r) { return Array.from(e.values()).filter((function (n) { return (n.selected || n.id === r) && (!n.parentNode || !Eu(n, e)) && (n.draggable || t && "undefined" === typeof n.draggable); })).map((function (e) { var t, r, o, a; return { id: e.id, position: e.position || { x: 0, y: 0 }, positionAbsolute: e.positionAbsolute || { x: 0, y: 0 }, distance: { x: n.x - (null !== (t = null === (r = e.positionAbsolute) || void 0 === r ? void 0 : r.x) && void 0 !== t ? t : 0), y: n.y - (null !== (o = null === (a = e.positionAbsolute) || void 0 === a ? void 0 : a.y) && void 0 !== o ? o : 0) }, delta: { x: 0, y: 0 }, extent: e.extent, parentNode: e.parentNode, width: e.width, height: e.height, expandParent: e.expandParent }; })); }
    function _u(e, t, n, r) { var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [0, 0], a = arguments.length > 5 ? arguments[5] : void 0; var i = function (e, t) { return t && "parent" !== t ? [t[0], [t[1][0] - (e.width || 0), t[1][1] - (e.height || 0)]] : t; }(e, e.extent || r); var l = i; if ("parent" !== e.extent || e.expandParent) {
        if (e.extent && e.parentNode && "parent" !== e.extent) {
            var t_39 = n.get(e.parentNode), _b = ts(t_39, o).positionAbsolute, r_22 = _b.x, a_10 = _b.y;
            l = [[e.extent[0][0] + r_22, e.extent[0][1] + a_10], [e.extent[1][0] + r_22, e.extent[1][1] + a_10]];
        }
    }
    else if (e.parentNode && e.width && e.height) {
        var t_40 = n.get(e.parentNode), _d = ts(t_40, o).positionAbsolute, r_23 = _d.x, a_11 = _d.y;
        l = t_40 && gl(r_23) && gl(a_11) && gl(t_40.width) && gl(t_40.height) ? [[r_23 + e.width * o[0], a_11 + e.height * o[1]], [r_23 + t_40.width - e.width + e.width * o[0], a_11 + t_40.height - e.height + e.height * o[1]]] : l;
    }
    else
        null === a || void 0 === a || a("005", qi.error005()), l = i; var s = { x: 0, y: 0 }; if (e.parentNode) {
        var t_41 = n.get(e.parentNode);
        s = ts(t_41, o).positionAbsolute;
    } var u = l && "parent" !== l ? il(t, l) : t; return { position: { x: u.x - s.x, y: u.y - s.y }, positionAbsolute: u }; }
    function Nu(e) { var t = e.nodeId, n = e.dragItems, r = e.nodeInternals; var o = n.map((function (e) { return (__assign(__assign({}, r.get(e.id)), { position: e.position, positionAbsolute: e.positionAbsolute })); })); return [t ? o.find((function (e) { return e.id === t; })) : o[0], o]; }
    Su.displayName = "Pane";
    var Pu = function (e, t, n, r) { var o = t.querySelectorAll(e); if (!o || !o.length)
        return null; var a = Array.from(o), i = t.getBoundingClientRect(), l = i.width * r[0], s = i.height * r[1]; return a.map((function (e) { var t = e.getBoundingClientRect(); return __assign({ id: e.getAttribute("data-handleid"), position: e.getAttribute("data-handlepos"), x: (t.left - i.left - l) / n, y: (t.top - i.top - s) / n }, ol(e)); })); };
    function Mu(e, t, n) { return void 0 === n ? n : function (r) { var o = t().nodeInternals.get(e); o && n(r, __assign({}, o)); }; }
    function Ou(e) { var t = e.id, n = e.store, _b = e.unselect, r = _b === void 0 ? !1 : _b, o = e.nodeRef; var _d = n.getState(), a = _d.addSelectedNodes, i = _d.unselectNodesAndEdges, l = _d.multiSelectionActive, s = _d.nodeInternals, u = _d.onError, c = s.get(t); c ? (n.setState({ nodesSelectionActive: !1 }), c.selected ? (r || c.selected && l) && (i({ nodes: [c], edges: [] }), requestAnimationFrame((function () { var e; return null === o || void 0 === o || null === (e = o.current) || void 0 === e ? void 0 : e.blur(); }))) : a([t])) : null === u || void 0 === u || u("012", qi.error012(t)); }
    function Ru(e) { return function (t, n, r) { return null === e || void 0 === e ? void 0 : e(t, r); }; }
    function Tu(e) { var n = e.nodeRef, _b = e.disabled, r = _b === void 0 ? !1 : _b, o = e.noDragClassName, a = e.handleSelector, i = e.nodeId, l = e.isSelectable, s = e.selectNodesOnDrag; var u = Ji(), _d = (0, t.useState)(!1), c = _d[0], d = _d[1], f = (0, t.useRef)([]), p = (0, t.useRef)({ x: null, y: null }), h = (0, t.useRef)(0), m = (0, t.useRef)(null), g = (0, t.useRef)({ x: 0, y: 0 }), v = (0, t.useRef)(null), y = (0, t.useRef)(!1), b = (0, t.useRef)(!1), w = function () { var e = Ji(), n = (0, t.useCallback)((function (t) { var n = t.sourceEvent; var _b = e.getState(), r = _b.transform, o = _b.snapGrid, a = _b.snapToGrid, i = n.touches ? n.touches[0].clientX : n.clientX, l = n.touches ? n.touches[0].clientY : n.clientY, s = { x: (i - r[0]) / r[2], y: (l - r[1]) / r[2] }; return __assign({ xSnapped: a ? o[0] * Math.round(s.x / o[0]) : s.x, ySnapped: a ? o[1] * Math.round(s.y / o[1]) : s.y }, s); }), []); return n; }(); return (0, t.useEffect)((function () { if (null !== n && void 0 !== n && n.current) {
        var e_54 = bo(n.current), t_42 = function (e) { var t = e.x, n = e.y; var _b = u.getState(), r = _b.nodeInternals, o = _b.onNodeDrag, a = _b.onSelectionDrag, l = _b.updateNodePositions, s = _b.nodeExtent, c = _b.snapGrid, h = _b.snapToGrid, m = _b.nodeOrigin, g = _b.onError; p.current = { x: t, y: n }; var y = !1, b = { x: 0, y: 0, x2: 0, y2: 0 }; if (f.current.length > 1 && s) {
            var e_55 = ns(f.current, m);
            b = dl(e_55);
        } if (f.current = f.current.map((function (e) { var o = { x: t - e.distance.x, y: n - e.distance.y }; h && (o.x = c[0] * Math.round(o.x / c[0]), o.y = c[1] * Math.round(o.y / c[1])); var a = [[s[0][0], s[0][1]], [s[1][0], s[1][1]]]; var i, l; f.current.length > 1 && s && !e.extent && (a[0][0] = e.positionAbsolute.x - b.x + s[0][0], a[1][0] = e.positionAbsolute.x + (null !== (i = e.width) && void 0 !== i ? i : 0) - b.x2 + s[1][0], a[0][1] = e.positionAbsolute.y - b.y + s[0][1], a[1][1] = e.positionAbsolute.y + (null !== (l = e.height) && void 0 !== l ? l : 0) - b.y2 + s[1][1]); var u = _u(e, o, r, a, m, g); return y = y || e.position.x !== u.position.x || e.position.y !== u.position.y, e.position = u.position, e.positionAbsolute = u.positionAbsolute, e; })), !y)
            return; l(f.current, !0, !0), d(!0); var w = i ? o : Ru(a); if (w && v.current) {
            var _d = Nu({ nodeId: i, dragItems: f.current, nodeInternals: r }), e_56 = _d[0], t_43 = _d[1];
            w(v.current, e_56, t_43);
        } }, c_4 = function () { if (!m.current)
            return; var _b = sl(g.current, m.current), e = _b[0], n = _b[1]; if (0 !== e || 0 !== n) {
            var r, o;
            var _d = u.getState(), a_12 = _d.transform, i_11 = _d.panBy;
            p.current.x = (null !== (r = p.current.x) && void 0 !== r ? r : 0) - e / a_12[2], p.current.y = (null !== (o = p.current.y) && void 0 !== o ? o : 0) - n / a_12[2], i_11({ x: e, y: n }) && t_42(p.current);
        } h.current = requestAnimationFrame(c_4); }, x_1 = function (e) { var _b = u.getState(), t = _b.nodeInternals, r = _b.multiSelectionActive, o = _b.nodesDraggable, a = _b.unselectNodesAndEdges, c = _b.onNodeDragStart, d = _b.onSelectionDragStart; b.current = !0; var h = i ? c : Ru(d); var m; s && l || r || !i || (null !== (m = t.get(i)) && void 0 !== m && m.selected || a()); i && l && s && Ou({ id: i, store: u, nodeRef: n }); var g = w(e); if (p.current = g, f.current = Cu(t, o, g, i), h && f.current) {
            var _d = Nu({ nodeId: i, dragItems: f.current, nodeInternals: t }), n_37 = _d[0], r_24 = _d[1];
            h(e.sourceEvent, n_37, r_24);
        } };
        if (!r) {
            var r_25 = function () { var e, t, n, r, o = Wi, a = Hi, i = $i, l = Yi, s = {}, u = or("start", "drag", "end"), c = 0, d = 0; function f(e) { e.on("mousedown.drag", p).filter(l).on("touchstart.drag", g).on("touchmove.drag", v, wo).on("touchend.drag touchcancel.drag", y).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)"); } function p(i, l) { if (!r && o.call(this, i, l)) {
                var s = b(this, a.call(this, i, l), i, l, "mouse");
                s && (bo(i.view).on("mousemove.drag", h, xo).on("mouseup.drag", m, xo), ko(i.view), So(i), n = !1, e = i.clientX, t = i.clientY, s("start", i));
            } } function h(r) { if (Eo(r), !n) {
                var o = r.clientX - e, a = r.clientY - t;
                n = o * o + a * a > d;
            } s.mouse("drag", r); } function m(e) { bo(e.view).on("mousemove.drag mouseup.drag", null), Co(e.view, n), Eo(e), s.mouse("end", e); } function g(e, t) { if (o.call(this, e, t)) {
                var n, r, i = e.changedTouches, l = a.call(this, e, t), s = i.length;
                for (n = 0; n < s; ++n)
                    (r = b(this, l, e, t, i[n].identifier, i[n])) && (So(e), r("start", e, i[n]));
            } } function v(e) { var t, n, r = e.changedTouches, o = r.length; for (t = 0; t < o; ++t)
                (n = s[r[t].identifier]) && (Eo(e), n("drag", e, r[t])); } function y(e) { var t, n, o = e.changedTouches, a = o.length; for (r && clearTimeout(r), r = setTimeout((function () { r = null; }), 500), t = 0; t < a; ++t)
                (n = s[o[t].identifier]) && (So(e), n("end", e, o[t])); } function b(e, t, n, r, o, a) { var l, d, p, h = u.copy(), m = Po(a || n, t); if (null != (p = i.call(e, new Vi("beforestart", { sourceEvent: n, target: f, identifier: o, active: c, x: m[0], y: m[1], dx: 0, dy: 0, dispatch: h }), r)))
                return l = p.x - m[0] || 0, d = p.y - m[1] || 0, function n(a, i, u) { var g, v = m; switch (a) {
                    case "start":
                        s[o] = n, g = c++;
                        break;
                    case "end": delete s[o], --c;
                    case "drag": m = Po(u || i, t), g = c;
                } h.call(a, e, new Vi(a, { sourceEvent: i, subject: p, target: f, identifier: o, active: g, x: m[0] + l, y: m[1] + d, dx: m[0] - v[0], dy: m[1] - v[1], dispatch: h }), r); }; } return f.filter = function (e) { return arguments.length ? (o = "function" === typeof e ? e : Ui(!!e), f) : o; }, f.container = function (e) { return arguments.length ? (a = "function" === typeof e ? e : Ui(e), f) : a; }, f.subject = function (e) { return arguments.length ? (i = "function" === typeof e ? e : Ui(e), f) : i; }, f.touchable = function (e) { return arguments.length ? (l = "function" === typeof e ? e : Ui(!!e), f) : l; }, f.on = function () { var e = u.on.apply(u, arguments); return e === u ? f : e; }, f.clickDistance = function (e) { return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d); }, f; }().on("start", (function (e) { var _b = u.getState(), t = _b.domNode, n = _b.nodeDragThreshold; 0 === n && x_1(e); var r = w(e); p.current = r, m.current = (null === t || void 0 === t ? void 0 : t.getBoundingClientRect()) || null, g.current = Sl(e.sourceEvent, m.current); })).on("drag", (function (e) { var n = w(e), _b = u.getState(), r = _b.autoPanOnNodeDrag, o = _b.nodeDragThreshold; if (!y.current && b.current && r && (y.current = !0, c_4()), !b.current) {
                var a, i, l, s;
                var t_44 = n.xSnapped - (null !== (a = null === p || void 0 === p || null === (i = p.current) || void 0 === i ? void 0 : i.x) && void 0 !== a ? a : 0), r_26 = n.ySnapped - (null !== (l = null === p || void 0 === p || null === (s = p.current) || void 0 === s ? void 0 : s.y) && void 0 !== l ? l : 0);
                Math.sqrt(t_44 * t_44 + r_26 * r_26) > o && x_1(e);
            } (p.current.x !== n.xSnapped || p.current.y !== n.ySnapped) && f.current && b.current && (v.current = e.sourceEvent, g.current = Sl(e.sourceEvent, m.current), t_42(n)); })).on("end", (function (e) { if (b.current && (d(!1), y.current = !1, b.current = !1, cancelAnimationFrame(h.current), f.current)) {
                var _b = u.getState(), t_45 = _b.updateNodePositions, n_38 = _b.nodeInternals, r_27 = _b.onNodeDragStop, o_16 = _b.onSelectionDragStop, a_13 = i ? r_27 : Ru(o_16);
                if (t_45(f.current, !1, !1), a_13) {
                    var _d = Nu({ nodeId: i, dragItems: f.current, nodeInternals: n_38 }), t_46 = _d[0], r_28 = _d[1];
                    a_13(e.sourceEvent, t_46, r_28);
                }
            } })).filter((function (e) { var t = e.target; return !e.button && (!o || !ku(t, ".".concat(o), n)) && (!a || ku(t, a, n)); }));
            return e_54.call(r_25), function () { e_54.on(".drag", null); };
        }
        e_54.on(".drag", null);
    } }), [n, r, o, a, l, u, i, s, w]), c; }
    function Au() { var e = Ji(); return (0, t.useCallback)((function (t) { var _b = e.getState(), n = _b.nodeInternals, r = _b.nodeExtent, o = _b.updateNodePositions, a = _b.getNodes, i = _b.snapToGrid, l = _b.snapGrid, s = _b.onError, u = _b.nodesDraggable, c = a().filter((function (e) { return e.selected && (e.draggable || u && "undefined" === typeof e.draggable); })), d = i ? l[0] : 5, f = i ? l[1] : 5, p = t.isShiftPressed ? 4 : 1, h = t.x * d * p, m = t.y * f * p; o(c.map((function (e) { if (e.positionAbsolute) {
        var t_47 = { x: e.positionAbsolute.x + h, y: e.positionAbsolute.y + m };
        i && (t_47.x = l[0] * Math.round(t_47.x / l[0]), t_47.y = l[1] * Math.round(t_47.y / l[1]));
        var _b = _u(e, t_47, n, r, void 0, s), o_17 = _b.positionAbsolute, a_14 = _b.position;
        e.position = a_14, e.positionAbsolute = o_17;
    } return e; })), !0, !1); }), []); }
    var zu = { ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 }, ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 } };
    var Iu = function (e) { var n = function (n) {
        var _b;
        var r = n.id, o = n.type, a = n.data, i = n.xPos, l = n.yPos, s = n.xPosOrigin, u = n.yPosOrigin, c = n.selected, d = n.onClick, f = n.onMouseEnter, p = n.onMouseMove, h = n.onMouseLeave, m = n.onContextMenu, g = n.onDoubleClick, v = n.style, y = n.className, b = n.isDraggable, w = n.isSelectable, x = n.isConnectable, S = n.isFocusable, E = n.selectNodesOnDrag, k = n.sourcePosition, C = n.targetPosition, _ = n.hidden, N = n.resizeObserver, P = n.dragHandle, M = n.zIndex, O = n.isParent, R = n.noDragClassName, T = n.noPanClassName, A = n.initialized, z = n.disableKeyboardA11y, I = n.ariaLabel, D = n.rfId;
        var L = Ji(), B = (0, t.useRef)(null), j = (0, t.useRef)(k), Z = (0, t.useRef)(C), F = (0, t.useRef)(o), U = w || b || d || f || p || h, V = Au(), W = Mu(r, L.getState, f), H = Mu(r, L.getState, p), $ = Mu(r, L.getState, h), Y = Mu(r, L.getState, m), X = Mu(r, L.getState, g);
        (0, t.useEffect)((function () { if (B.current && !_) {
            var e_57 = B.current;
            return null === N || void 0 === N || N.observe(e_57), function () { return null === N || void 0 === N ? void 0 : N.unobserve(e_57); };
        } }), [_]), (0, t.useEffect)((function () { var e = F.current !== o, t = j.current !== k, n = Z.current !== C; B.current && (e || t || n) && (e && (F.current = o), t && (j.current = k), n && (Z.current = C), L.getState().updateNodeDimensions([{ id: r, nodeElement: B.current, forceUpdate: !0 }])); }), [r, o, k, C]);
        var K = Tu({ nodeRef: B, disabled: _ || !b, noDragClassName: R, handleSelector: P, nodeId: r, isSelectable: w, selectNodesOnDrag: E });
        return _ ? null : t.createElement("div", { className: Vn(["react-flow__node", "react-flow__node-".concat(o), (_b = {}, _b[T] = b, _b), y, { selected: c, selectable: w, parent: O, dragging: K }]), ref: B, style: __assign({ zIndex: M, transform: "translate(".concat(s, "px,").concat(u, "px)"), pointerEvents: U ? "all" : "none", visibility: A ? "visible" : "hidden" }, v), "data-id": r, "data-testid": "rf__node-".concat(r), onMouseEnter: W, onMouseMove: H, onMouseLeave: $, onContextMenu: Y, onClick: function (e) { var t = L.getState().nodeDragThreshold; if (w && (!E || !b || t > 0) && Ou({ id: r, store: L, nodeRef: B }), d) {
                var t_48 = L.getState().nodeInternals.get(r);
                t_48 && d(e, __assign({}, t_48));
            } }, onDoubleClick: X, onKeyDown: S ? function (e) { if (!wl(e))
                if (yl.includes(e.key) && w) {
                    var t_49 = "Escape" === e.key;
                    Ou({ id: r, store: L, unselect: t_49, nodeRef: B });
                }
                else
                    !z && b && c && Object.prototype.hasOwnProperty.call(zu, e.key) && (L.setState({ ariaLiveMessage: "Moved selected node ".concat(e.key.replace("Arrow", "").toLowerCase(), ". New position, x: ").concat(~~i, ", y: ").concat(~~l) }), V({ x: zu[e.key].x, y: zu[e.key].y, isShiftPressed: e.shiftKey })); } : void 0, tabIndex: S ? 0 : void 0, role: S ? "button" : void 0, "aria-describedby": z ? void 0 : "".concat(Bs, "-").concat(D), "aria-label": I }, t.createElement(Kl, { value: r }, t.createElement(e, { id: r, data: a, type: o, xPos: i, yPos: l, selected: c, isConnectable: x, sourcePosition: k, targetPosition: C, dragging: K, dragHandle: P, zIndex: M })));
    }; return n.displayName = "NodeWrapper", (0, t.memo)(n); };
    var Du = function (e) { var t = e.getNodes().filter((function (e) { return e.selected; })); return __assign(__assign({}, ns(t, e.nodeOrigin)), { transformString: "translate(".concat(e.transform[0], "px,").concat(e.transform[1], "px) scale(").concat(e.transform[2], ")"), userSelectionActive: e.userSelectionActive }); };
    var Lu = (0, t.memo)((function (e) { var n = e.onSelectionContextMenu, r = e.noPanClassName, o = e.disableKeyboardA11y; var a = Ji(), _b = Qi(Du, Qn), i = _b.width, l = _b.height, s = _b.x, u = _b.y, c = _b.transformString, d = _b.userSelectionActive, f = Au(), p = (0, t.useRef)(null); if ((0, t.useEffect)((function () { var e; o || (null === (e = p.current) || void 0 === e || e.focus({ preventScroll: !0 })); }), [o]), Tu({ nodeRef: p }), d || !i || !l)
        return null; var h = n ? function (e) { var t = a.getState().getNodes().filter((function (e) { return e.selected; })); n(e, t); } : void 0; return t.createElement("div", { className: Vn(["react-flow__nodesselection", "react-flow__container", r]), style: { transform: c } }, t.createElement("div", { ref: p, className: "react-flow__nodesselection-rect", onContextMenu: h, tabIndex: o ? void 0 : -1, onKeyDown: o ? void 0 : function (e) { Object.prototype.hasOwnProperty.call(zu, e.key) && f({ x: zu[e.key].x, y: zu[e.key].y, isShiftPressed: e.shiftKey }); }, style: { width: i, height: l, top: u, left: s } })); }));
    var Bu = function (e) { return e.nodesSelectionActive; }, ju = function (e) { var n = e.children, r = e.onPaneClick, o = e.onPaneMouseEnter, a = e.onPaneMouseMove, i = e.onPaneMouseLeave, l = e.onPaneContextMenu, s = e.onPaneScroll, u = e.deleteKeyCode, c = e.onMove, d = e.onMoveStart, f = e.onMoveEnd, p = e.selectionKeyCode, h = e.selectionOnDrag, m = e.selectionMode, g = e.onSelectionStart, v = e.onSelectionEnd, y = e.multiSelectionKeyCode, b = e.panActivationKeyCode, w = e.zoomActivationKeyCode, x = e.elementsSelectable, S = e.zoomOnScroll, E = e.zoomOnPinch, k = e.panOnScroll, C = e.panOnScrollSpeed, _ = e.panOnScrollMode, N = e.zoomOnDoubleClick, P = e.panOnDrag, M = e.defaultViewport, O = e.translateExtent, R = e.minZoom, T = e.maxZoom, A = e.preventScrolling, z = e.onSelectionContextMenu, I = e.noWheelClassName, D = e.noPanClassName, L = e.disableKeyboardA11y; var B = Qi(Bu), j = Ws(p), Z = Ws(b), F = Z || P, U = Z || k, V = j || h && !0 !== F; return (function (e) { var n = e.deleteKeyCode, r = e.multiSelectionKeyCode; var o = Ji(), a = ou().deleteElements, i = Ws(n, au), l = Ws(r); (0, t.useEffect)((function () { if (i) {
        var _b = o.getState(), e_58 = _b.edges, t_50 = _b.getNodes, n_39 = t_50().filter((function (e) { return e.selected; })), r_29 = e_58.filter((function (e) { return e.selected; }));
        a({ nodes: n_39, edges: r_29 }), o.setState({ nodesSelectionActive: !1 });
    } }), [i]), (0, t.useEffect)((function () { o.setState({ multiSelectionActive: l }); }), [l]); })({ deleteKeyCode: u, multiSelectionKeyCode: y }), t.createElement(fu, { onMove: c, onMoveStart: d, onMoveEnd: f, onPaneContextMenu: l, elementsSelectable: x, zoomOnScroll: S, zoomOnPinch: E, panOnScroll: U, panOnScrollSpeed: C, panOnScrollMode: _, zoomOnDoubleClick: N, panOnDrag: !j && F, defaultViewport: M, translateExtent: O, minZoom: R, maxZoom: T, zoomActivationKeyCode: w, preventScrolling: A, noWheelClassName: I, noPanClassName: D }, t.createElement(Su, { onSelectionStart: g, onSelectionEnd: v, onPaneClick: r, onPaneMouseEnter: o, onPaneMouseMove: a, onPaneMouseLeave: i, onPaneContextMenu: l, onPaneScroll: s, panOnDrag: F, isSelecting: !!V, selectionMode: m }, n, B && t.createElement(Lu, { onSelectionContextMenu: z, noPanClassName: D, disableKeyboardA11y: L }))); };
    ju.displayName = "FlowRenderer";
    var Zu = (0, t.memo)(ju);
    function Fu(e) { return __assign({ input: Iu(e.input || Ss), "default": Iu(e["default"] || ws), output: Iu(e.output || ks), group: Iu(e.group || Cs) }, Object.keys(e).filter((function (e) { return !["input", "default", "output", "group"].includes(e); })).reduce((function (t, n) { return (t[n] = Iu(e[n] || ws), t); }), {})); }
    var Uu = function (e) { return ({ nodesDraggable: e.nodesDraggable, nodesConnectable: e.nodesConnectable, nodesFocusable: e.nodesFocusable, elementsSelectable: e.elementsSelectable, updateNodeDimensions: e.updateNodeDimensions, onError: e.onError }); }, Vu = function (e) { var _b = Qi(Uu, Qn), n = _b.nodesDraggable, r = _b.nodesConnectable, o = _b.nodesFocusable, a = _b.elementsSelectable, i = _b.updateNodeDimensions, l = _b.onError, s = (u = e.onlyRenderVisibleElements, Qi((0, t.useCallback)((function (e) { return u ? rs(e.nodeInternals, { x: 0, y: 0, width: e.width, height: e.height }, e.transform, !0) : e.getNodes(); }), [u]))); var u; var c = (0, t.useRef)(), d = (0, t.useMemo)((function () { if ("undefined" === typeof ResizeObserver)
        return null; var e = new ResizeObserver((function (e) { var t = e.map((function (e) { return ({ id: e.target.getAttribute("data-id"), nodeElement: e.target, forceUpdate: !0 }); })); i(t); })); return c.current = e, e; }), []); return (0, t.useEffect)((function () { return function () { var e; null === c || void 0 === c || null === (e = c.current) || void 0 === e || e.disconnect(); }; }), []), t.createElement("div", { className: "react-flow__nodes", style: iu }, s.map((function (i) { var s, u, c, f, p, h, m; var g = i.type || "default"; e.nodeTypes[g] || (null === l || void 0 === l || l("003", qi.error003(g)), g = "default"); var v = e.nodeTypes[g] || e.nodeTypes["default"], y = !!(i.draggable || n && "undefined" === typeof i.draggable), b = !!(i.selectable || a && "undefined" === typeof i.selectable), w = !!(i.connectable || r && "undefined" === typeof i.connectable), x = !!(i.focusable || o && "undefined" === typeof i.focusable), S = e.nodeExtent ? il(i.positionAbsolute, e.nodeExtent) : i.positionAbsolute, E = null !== (s = null === S || void 0 === S ? void 0 : S.x) && void 0 !== s ? s : 0, k = null !== (u = null === S || void 0 === S ? void 0 : S.y) && void 0 !== u ? u : 0, C = (function (e) { var t = e.x, n = e.y, r = e.width, o = e.height, a = e.origin; return r && o ? a[0] < 0 || a[1] < 0 || a[0] > 1 || a[1] > 1 ? { x: t, y: n } : { x: t - r * a[0], y: n - o * a[1] } : { x: t, y: n }; })({ x: E, y: k, width: null !== (c = i.width) && void 0 !== c ? c : 0, height: null !== (f = i.height) && void 0 !== f ? f : 0, origin: e.nodeOrigin }); return t.createElement(v, { key: i.id, id: i.id, className: i.className, style: i.style, type: g, data: i.data, sourcePosition: i.sourcePosition || Al.Bottom, targetPosition: i.targetPosition || Al.Top, hidden: i.hidden, xPos: E, yPos: k, xPosOrigin: C.x, yPosOrigin: C.y, selectNodesOnDrag: e.selectNodesOnDrag, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, selected: !!i.selected, isDraggable: y, isSelectable: b, isConnectable: w, isFocusable: x, resizeObserver: d, dragHandle: i.dragHandle, zIndex: null !== (p = null === (h = i[vl]) || void 0 === h ? void 0 : h.z) && void 0 !== p ? p : 0, isParent: !(null === (m = i[vl]) || void 0 === m || !m.isParent), noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, initialized: !!i.width && !!i.height, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, ariaLabel: i.ariaLabel }); }))); };
    Vu.displayName = "NodeRenderer";
    var Wu = (0, t.memo)(Vu);
    var Hu = function (e, t, n) { return n === Al.Left ? e - t : n === Al.Right ? e + t : e; }, $u = function (e, t, n) { return n === Al.Top ? e - t : n === Al.Bottom ? e + t : e; }, Yu = "react-flow__edgeupdater", Xu = function (e) { var n = e.position, r = e.centerX, o = e.centerY, _b = e.radius, a = _b === void 0 ? 10 : _b, i = e.onMouseDown, l = e.onMouseEnter, s = e.onMouseOut, u = e.type; return t.createElement("circle", { onMouseDown: i, onMouseEnter: l, onMouseOut: s, className: Vn([Yu, "".concat(Yu, "-").concat(u)]), cx: Hu(r, a, n), cy: $u(o, a, n), r: a, stroke: "transparent", fill: "transparent" }); }, Ku = function () { return !0; };
    var qu = function (e) { var n = function (n) { var r = n.id, o = n.className, a = n.type, i = n.data, l = n.onClick, s = n.onEdgeDoubleClick, u = n.selected, c = n.animated, d = n.label, f = n.labelStyle, p = n.labelShowBg, h = n.labelBgStyle, m = n.labelBgPadding, g = n.labelBgBorderRadius, v = n.style, y = n.source, b = n.target, w = n.sourceX, x = n.sourceY, S = n.targetX, E = n.targetY, k = n.sourcePosition, C = n.targetPosition, _ = n.elementsSelectable, N = n.hidden, P = n.sourceHandleId, M = n.targetHandleId, O = n.onContextMenu, R = n.onMouseEnter, T = n.onMouseMove, A = n.onMouseLeave, z = n.edgeUpdaterRadius, I = n.onEdgeUpdate, D = n.onEdgeUpdateStart, L = n.onEdgeUpdateEnd, B = n.markerEnd, j = n.markerStart, Z = n.rfId, F = n.ariaLabel, U = n.isFocusable, V = n.isUpdatable, W = n.pathOptions, H = n.interactionWidth; var $ = (0, t.useRef)(null), _b = (0, t.useState)(!1), Y = _b[0], X = _b[1], _d = (0, t.useState)(!1), K = _d[0], q = _d[1], G = Ji(), Q = (0, t.useMemo)((function () { return "url(#".concat(Gl(j, Z), ")"); }), [j, Z]), J = (0, t.useMemo)((function () { return "url(#".concat(Gl(B, Z), ")"); }), [B, Z]); if (N)
        return null; var ee = Cl(r, G.getState, s), te = Cl(r, G.getState, O), ne = Cl(r, G.getState, R), re = Cl(r, G.getState, T), oe = Cl(r, G.getState, A), ae = function (e, t) { if (0 !== e.button)
        return; var _b = G.getState(), n = _b.edges, o = _b.isValidConnection, a = t ? b : y, i = (t ? M : P) || null, l = t ? "target" : "source", s = o || Ku, u = t, c = n.find((function (e) { return e.id === r; })); q(!0), null === D || void 0 === D || D(e, c, l); hs({ event: e, handleId: i, nodeId: a, onConnect: function (e) { return null === I || void 0 === I ? void 0 : I(c, e); }, isTarget: u, getState: G.getState, setState: G.setState, isValidConnection: s, edgeUpdaterType: l, onEdgeUpdateEnd: function (e) { q(!1), null === L || void 0 === L || L(e, c, l); } }); }, ie = function () { return X(!0); }, le = function () { return X(!1); }, se = !_ && !l; return t.createElement("g", { className: Vn(["react-flow__edge", "react-flow__edge-".concat(a), o, { selected: u, animated: c, inactive: se, updating: Y }]), onClick: function (e) { var _b = G.getState(), t = _b.edges, n = _b.addSelectedEdges, o = _b.unselectNodesAndEdges, a = _b.multiSelectionActive, i = t.find((function (e) { return e.id === r; })); if (i) {
            var s;
            if (_)
                if (G.setState({ nodesSelectionActive: !1 }), i.selected && a)
                    o({ nodes: [], edges: [i] }), null === (s = $.current) || void 0 === s || s.blur();
                else
                    n([r]);
            l && l(e, i);
        } }, onDoubleClick: ee, onContextMenu: te, onMouseEnter: ne, onMouseMove: re, onMouseLeave: oe, onKeyDown: U ? function (e) { if (yl.includes(e.key) && _) {
            var _b = G.getState(), n_40 = _b.unselectNodesAndEdges, o_18 = _b.addSelectedEdges, a_15 = _b.edges;
            var t;
            if ("Escape" === e.key)
                null === (t = $.current) || void 0 === t || t.blur(), n_40({ edges: [a_15.find((function (e) { return e.id === r; }))] });
            else
                o_18([r]);
        } } : void 0, tabIndex: U ? 0 : void 0, role: U ? "button" : "img", "data-testid": "rf__edge-".concat(r), "aria-label": null === F ? void 0 : F || "Edge from ".concat(y, " to ").concat(b), "aria-describedby": U ? "".concat(js, "-").concat(Z) : void 0, ref: $ }, !K && t.createElement(e, { id: r, source: y, target: b, selected: u, animated: c, label: d, labelStyle: f, labelShowBg: p, labelBgStyle: h, labelBgPadding: m, labelBgBorderRadius: g, data: i, style: v, sourceX: w, sourceY: x, targetX: S, targetY: E, sourcePosition: k, targetPosition: C, sourceHandleId: P, targetHandleId: M, markerStart: Q, markerEnd: J, pathOptions: W, interactionWidth: H }), V && t.createElement(t.Fragment, null, ("source" === V || !0 === V) && t.createElement(Xu, { position: k, centerX: w, centerY: x, radius: z, onMouseDown: function (e) { return ae(e, !0); }, onMouseEnter: ie, onMouseOut: le, type: "source" }), ("target" === V || !0 === V) && t.createElement(Xu, { position: C, centerX: S, centerY: E, radius: z, onMouseDown: function (e) { return ae(e, !1); }, onMouseEnter: ie, onMouseOut: le, type: "target" }))); }; return n.displayName = "EdgeWrapper", (0, t.memo)(n); };
    function Gu(e) { return __assign({ "default": qu(e["default"] || Yl), straight: qu(e.bezier || Vl), step: qu(e.step || Ul), smoothstep: qu(e.step || Fl), simplebezier: qu(e.simplebezier || Dl) }, Object.keys(e).filter((function (e) { return !["default", "bezier"].includes(e); })).reduce((function (t, n) { return (t[n] = qu(e[n] || Yl), t); }), {})); }
    function Qu(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; var r = ((null === n || void 0 === n ? void 0 : n.x) || 0) + t.x, o = ((null === n || void 0 === n ? void 0 : n.y) || 0) + t.y, a = (null === n || void 0 === n ? void 0 : n.width) || t.width, i = (null === n || void 0 === n ? void 0 : n.height) || t.height; switch (e) {
        case Al.Top: return { x: r + a / 2, y: o };
        case Al.Right: return { x: r + a, y: o + i / 2 };
        case Al.Bottom: return { x: r + a / 2, y: o + i };
        case Al.Left: return { x: r, y: o + i / 2 };
    } }
    function Ju(e, t) { return e ? 1 !== e.length && t ? t && e.find((function (e) { return e.id === t; })) || null : e[0] : null; }
    function ec(e) { var t, n, r, o, a; var i = (null === e || void 0 === e || null === (t = e[vl]) || void 0 === t ? void 0 : t.handleBounds) || null, l = i && (null === e || void 0 === e ? void 0 : e.width) && (null === e || void 0 === e ? void 0 : e.height) && "undefined" !== typeof (null === e || void 0 === e || null === (n = e.positionAbsolute) || void 0 === n ? void 0 : n.x) && "undefined" !== typeof (null === e || void 0 === e || null === (r = e.positionAbsolute) || void 0 === r ? void 0 : r.y); return [{ x: (null === e || void 0 === e || null === (o = e.positionAbsolute) || void 0 === o ? void 0 : o.x) || 0, y: (null === e || void 0 === e || null === (a = e.positionAbsolute) || void 0 === a ? void 0 : a.y) || 0, width: (null === e || void 0 === e ? void 0 : e.width) || 0, height: (null === e || void 0 === e ? void 0 : e.height) || 0 }, i, !!l]; }
    var tc = [{ level: 0, isMaxLevel: !0, edges: [] }];
    function nc(e, n, r) { var o = Qi((0, t.useCallback)((function (t) { return e ? t.edges.filter((function (e) { var r = n.get(e.source), o = n.get(e.target); return (null === r || void 0 === r ? void 0 : r.width) && (null === r || void 0 === r ? void 0 : r.height) && (null === o || void 0 === o ? void 0 : o.width) && (null === o || void 0 === o ? void 0 : o.height) && function (e) { var t = e.sourcePos, n = e.targetPos, r = e.sourceWidth, o = e.sourceHeight, a = e.targetWidth, i = e.targetHeight, l = e.width, s = e.height, u = e.transform; var c = { x: Math.min(t.x, n.x), y: Math.min(t.y, n.y), x2: Math.max(t.x + r, n.x + a), y2: Math.max(t.y + o, n.y + i) }; c.x === c.x2 && (c.x2 += 1), c.y === c.y2 && (c.y2 += 1); var d = dl({ x: (0 - u[0]) / u[2], y: (0 - u[1]) / u[2], width: l / u[2], height: s / u[2] }), f = Math.max(0, Math.min(d.x2, c.x2) - Math.max(d.x, c.x)), p = Math.max(0, Math.min(d.y2, c.y2) - Math.max(d.y, c.y)); return Math.ceil(f * p) > 0; }({ sourcePos: r.positionAbsolute || { x: 0, y: 0 }, targetPos: o.positionAbsolute || { x: 0, y: 0 }, sourceWidth: r.width, sourceHeight: r.height, targetWidth: o.width, targetHeight: o.height, width: t.width, height: t.height, transform: t.transform }); })) : t.edges; }), [e, n])); return function (e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = -1; var o = e.reduce((function (e, o) { var a = gl(o.zIndex); var i = a ? o.zIndex : 0; if (n) {
        var l, s;
        var e_59 = t.get(o.target), n_41 = t.get(o.source), r_30 = o.selected || (null === e_59 || void 0 === e_59 ? void 0 : e_59.selected) || (null === n_41 || void 0 === n_41 ? void 0 : n_41.selected), u_5 = Math.max((null === n_41 || void 0 === n_41 || null === (l = n_41[vl]) || void 0 === l ? void 0 : l.z) || 0, (null === e_59 || void 0 === e_59 || null === (s = e_59[vl]) || void 0 === s ? void 0 : s.z) || 0, 1e3);
        i = (a ? o.zIndex : 0) + (r_30 ? u_5 : 0);
    } return e[i] ? e[i].push(o) : e[i] = [o], r = i > r ? i : r, e; }), {}), a = Object.entries(o).map((function (e) { var t = e[0], n = e[1]; var o = +t; return { edges: n, level: o, isMaxLevel: o === r }; })); return 0 === a.length ? tc : a; }(o, n, r); }
    var rc = (_h = {}, _h[Tl.Arrow] = function (e) { var _b = e.color, n = _b === void 0 ? "none" : _b, _d = e.strokeWidth, r = _d === void 0 ? 1 : _d; return t.createElement("polyline", { style: { stroke: n, strokeWidth: r }, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", points: "-5,-4 0,0 -5,4" }); }, _h[Tl.ArrowClosed] = function (e) { var _b = e.color, n = _b === void 0 ? "none" : _b, _d = e.strokeWidth, r = _d === void 0 ? 1 : _d; return t.createElement("polyline", { style: { stroke: n, fill: n, strokeWidth: r }, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" }); }, _h);
    var oc = function (e) { var n = e.id, r = e.type, o = e.color, _b = e.width, a = _b === void 0 ? 12.5 : _b, _d = e.height, i = _d === void 0 ? 12.5 : _d, _f = e.markerUnits, l = _f === void 0 ? "strokeWidth" : _f, s = e.strokeWidth, _g = e.orient, u = _g === void 0 ? "auto-start-reverse" : _g; var c = function (e) { var n = Ji(); return (0, t.useMemo)((function () { var t, r; return Object.prototype.hasOwnProperty.call(rc, e) ? rc[e] : (null === (t = (r = n.getState()).onError) || void 0 === t || t.call(r, "009", qi.error009(e)), null); }), [e]); }(r); return c ? t.createElement("marker", { className: "react-flow__arrowhead", id: n, markerWidth: "".concat(a), markerHeight: "".concat(i), viewBox: "-10 -10 20 20", markerUnits: l, orient: u, refX: "0", refY: "0" }, t.createElement(c, { color: o, strokeWidth: s })) : null; }, ac = function (e) { var n = e.defaultColor, r = e.rfId; var o = Qi((0, t.useCallback)((function (e) { var t = e.defaultColor, n = e.rfId; return function (e) { var r = []; return e.edges.reduce((function (e, o) { return ([o.markerStart, o.markerEnd].forEach((function (o) { if (o && "object" === typeof o) {
        var a_16 = Gl(o, n);
        r.includes(a_16) || (e.push(__assign({ id: a_16, color: o.color || t }, o)), r.push(a_16));
    } })), e); }), []).sort((function (e, t) { return e.id.localeCompare(t.id); })); }; })({ defaultColor: n, rfId: r }), [n, r]), (function (e, t) { return !(e.length !== t.length || e.some((function (e, n) { return e.id !== t[n].id; }))); })); return t.createElement("defs", null, o.map((function (e) { return t.createElement(oc, { id: e.id, key: e.id, type: e.type, color: e.color, width: e.width, height: e.height, markerUnits: e.markerUnits, strokeWidth: e.strokeWidth, orient: e.orient }); }))); };
    ac.displayName = "MarkerDefinitions";
    var ic = (0, t.memo)(ac);
    var lc = function (e) { return ({ nodesConnectable: e.nodesConnectable, edgesFocusable: e.edgesFocusable, edgesUpdatable: e.edgesUpdatable, elementsSelectable: e.elementsSelectable, width: e.width, height: e.height, connectionMode: e.connectionMode, nodeInternals: e.nodeInternals, onError: e.onError }); }, sc = function (e) { var n = e.defaultMarkerColor, r = e.onlyRenderVisibleElements, o = e.elevateEdgesOnSelect, a = e.rfId, i = e.edgeTypes, l = e.noPanClassName, s = e.onEdgeUpdate, u = e.onEdgeContextMenu, c = e.onEdgeMouseEnter, d = e.onEdgeMouseMove, f = e.onEdgeMouseLeave, p = e.onEdgeClick, h = e.edgeUpdaterRadius, m = e.onEdgeDoubleClick, g = e.onEdgeUpdateStart, v = e.onEdgeUpdateEnd, y = e.children; var _b = Qi(lc, Qn), b = _b.edgesFocusable, w = _b.edgesUpdatable, x = _b.elementsSelectable, S = _b.width, E = _b.height, k = _b.connectionMode, C = _b.nodeInternals, _ = _b.onError, N = nc(r, C, o); return S ? t.createElement(t.Fragment, null, N.map((function (e) { var r = e.level, o = e.edges, y = e.isMaxLevel; return t.createElement("svg", { key: r, style: { zIndex: r }, width: S, height: E, className: "react-flow__edges react-flow__container" }, y && t.createElement(ic, { defaultColor: n, rfId: a }), t.createElement("g", null, o.map((function (e) { var n, r; var _b = ec(C.get(e.source)), o = _b[0], y = _b[1], S = _b[2], _d = ec(C.get(e.target)), E = _d[0], N = _d[1], P = _d[2]; if (!S || !P)
        return null; var M = e.type || "default"; i[M] || (null === _ || void 0 === _ || _("011", qi.error011(M)), M = "default"); var O = i[M] || i["default"], R = k === Pl.Strict ? N.target : (null !== (n = N.target) && void 0 !== n ? n : []).concat(null !== (r = N.source) && void 0 !== r ? r : []), T = Ju(y.source, e.sourceHandle), A = Ju(R, e.targetHandle), z = (null === T || void 0 === T ? void 0 : T.position) || Al.Bottom, I = (null === A || void 0 === A ? void 0 : A.position) || Al.Top, D = !!(e.focusable || b && "undefined" === typeof e.focusable), L = "undefined" !== typeof s && (e.updatable || w && "undefined" === typeof e.updatable); if (!T || !A)
        return null === _ || void 0 === _ || _("008", qi.error008(T, e)), null; var _f = (function (e, t, n, r, o, a) { var i = Qu(n, e, t), l = Qu(a, r, o); return { sourceX: i.x, sourceY: i.y, targetX: l.x, targetY: l.y }; })(o, T, z, E, A, I), B = _f.sourceX, j = _f.sourceY, Z = _f.targetX, F = _f.targetY; return t.createElement(O, { key: e.id, id: e.id, className: Vn([e.className, l]), type: M, data: e.data, selected: !!e.selected, animated: !!e.animated, hidden: !!e.hidden, label: e.label, labelStyle: e.labelStyle, labelShowBg: e.labelShowBg, labelBgStyle: e.labelBgStyle, labelBgPadding: e.labelBgPadding, labelBgBorderRadius: e.labelBgBorderRadius, style: e.style, source: e.source, target: e.target, sourceHandleId: e.sourceHandle, targetHandleId: e.targetHandle, markerEnd: e.markerEnd, markerStart: e.markerStart, sourceX: B, sourceY: j, targetX: Z, targetY: F, sourcePosition: z, targetPosition: I, elementsSelectable: x, onEdgeUpdate: s, onContextMenu: u, onMouseEnter: c, onMouseMove: d, onMouseLeave: f, onClick: p, edgeUpdaterRadius: h, onEdgeDoubleClick: m, onEdgeUpdateStart: g, onEdgeUpdateEnd: v, rfId: a, ariaLabel: e.ariaLabel, isFocusable: D, isUpdatable: L, pathOptions: "pathOptions" in e ? e.pathOptions : void 0, interactionWidth: e.interactionWidth }); })))); })), y) : null; };
    sc.displayName = "EdgeRenderer";
    var uc = (0, t.memo)(sc);
    var cc = function (e) { return "translate(".concat(e.transform[0], "px,").concat(e.transform[1], "px) scale(").concat(e.transform[2], ")"); };
    function dc(e) { var n = e.children; var r = Qi(cc); return t.createElement("div", { className: "react-flow__viewport react-flow__container", style: { transform: r } }, n); }
    var fc = (_j = {}, _j[Al.Left] = Al.Right, _j[Al.Right] = Al.Left, _j[Al.Top] = Al.Bottom, _j[Al.Bottom] = Al.Top, _j), pc = function (e) {
        var _b, _d, _f, _g;
        var n, r, o, a, i, l, s;
        var u = e.nodeId, c = e.handleType, d = e.style, _h = e.type, f = _h === void 0 ? Rl.Bezier : _h, p = e.CustomComponent, h = e.connectionStatus;
        var _j = Qi((0, t.useCallback)((function (e) { return ({ fromNode: e.nodeInternals.get(u), handleId: e.connectionHandleId, toX: (e.connectionPosition.x - e.transform[0]) / e.transform[2], toY: (e.connectionPosition.y - e.transform[1]) / e.transform[2], connectionMode: e.connectionMode }); }), [u]), Qn), m = _j.fromNode, g = _j.handleId, v = _j.toX, y = _j.toY, b = _j.connectionMode, w = null === m || void 0 === m || null === (n = m[vl]) || void 0 === n ? void 0 : n.handleBounds;
        var x = null === w || void 0 === w ? void 0 : w[c];
        if (b === Pl.Loose && (x = x || (null === w || void 0 === w ? void 0 : w["source" === c ? "target" : "source"])), !m || !x)
            return null;
        var S = g ? x.find((function (e) { return e.id === g; })) : x[0], E = S ? S.x + S.width / 2 : (null !== (r = m.width) && void 0 !== r ? r : 0) / 2, k = S ? S.y + S.height / 2 : null !== (o = m.height) && void 0 !== o ? o : 0, C = (null !== (a = null === (i = m.positionAbsolute) || void 0 === i ? void 0 : i.x) && void 0 !== a ? a : 0) + E, _ = (null !== (l = null === (s = m.positionAbsolute) || void 0 === s ? void 0 : s.y) && void 0 !== l ? l : 0) + k, N = null === S || void 0 === S ? void 0 : S.position, P = N ? fc[N] : null;
        if (!N || !P)
            return null;
        if (p)
            return t.createElement(p, { connectionLineType: f, connectionLineStyle: d, fromNode: m, fromHandle: S, fromX: C, fromY: _, toX: v, toY: y, fromPosition: N, toPosition: P, connectionStatus: h });
        var M = "";
        var O = { sourceX: C, sourceY: _, sourcePosition: N, targetX: v, targetY: y, targetPosition: P };
        return f === Rl.Bezier ? (_b = $l(O), M = _b[0], _b) : f === Rl.Step ? (_d = Zl(__assign(__assign({}, O), { borderRadius: 0 })), M = _d[0], _d) : f === Rl.SmoothStep ? (_f = Zl(O), M = _f[0], _f) : f === Rl.SimpleBezier ? (_g = Il(O), M = _g[0], _g) : M = "M".concat(C, ",").concat(_, " ").concat(v, ",").concat(y), t.createElement("path", { d: M, fill: "none", className: "react-flow__connection-path", style: d });
    };
    pc.displayName = "ConnectionLine";
    var hc = function (e) { return ({ nodeId: e.connectionNodeId, handleType: e.connectionHandleType, nodesConnectable: e.nodesConnectable, connectionStatus: e.connectionStatus, width: e.width, height: e.height }); };
    function mc(e) { var n = e.containerStyle, r = e.style, o = e.type, a = e.component; var _b = Qi(hc, Qn), i = _b.nodeId, l = _b.handleType, s = _b.nodesConnectable, u = _b.width, c = _b.height, d = _b.connectionStatus; return !!(i && l && u && s) ? t.createElement("svg", { style: n, width: u, height: c, className: "react-flow__edges react-flow__connectionline react-flow__container" }, t.createElement("g", { className: Vn(["react-flow__connection", d]) }, t.createElement(pc, { nodeId: i, handleType: l, style: r, type: o, CustomComponent: a, connectionStatus: d }))) : null; }
    function gc(e, n) { (0, t.useRef)(null), Ji(); return (0, t.useMemo)((function () { return n(e); }), [e]); }
    var vc = function (e) { var n = e.nodeTypes, r = e.edgeTypes, o = e.onMove, a = e.onMoveStart, i = e.onMoveEnd, l = e.onInit, s = e.onNodeClick, u = e.onEdgeClick, c = e.onNodeDoubleClick, d = e.onEdgeDoubleClick, f = e.onNodeMouseEnter, p = e.onNodeMouseMove, h = e.onNodeMouseLeave, m = e.onNodeContextMenu, g = e.onSelectionContextMenu, v = e.onSelectionStart, y = e.onSelectionEnd, b = e.connectionLineType, w = e.connectionLineStyle, x = e.connectionLineComponent, S = e.connectionLineContainerStyle, E = e.selectionKeyCode, k = e.selectionOnDrag, C = e.selectionMode, _ = e.multiSelectionKeyCode, N = e.panActivationKeyCode, P = e.zoomActivationKeyCode, M = e.deleteKeyCode, O = e.onlyRenderVisibleElements, R = e.elementsSelectable, T = e.selectNodesOnDrag, A = e.defaultViewport, z = e.translateExtent, I = e.minZoom, D = e.maxZoom, L = e.preventScrolling, B = e.defaultMarkerColor, j = e.zoomOnScroll, Z = e.zoomOnPinch, F = e.panOnScroll, U = e.panOnScrollSpeed, V = e.panOnScrollMode, W = e.zoomOnDoubleClick, H = e.panOnDrag, $ = e.onPaneClick, Y = e.onPaneMouseEnter, X = e.onPaneMouseMove, K = e.onPaneMouseLeave, q = e.onPaneScroll, G = e.onPaneContextMenu, Q = e.onEdgeUpdate, J = e.onEdgeContextMenu, ee = e.onEdgeMouseEnter, te = e.onEdgeMouseMove, ne = e.onEdgeMouseLeave, re = e.edgeUpdaterRadius, oe = e.onEdgeUpdateStart, ae = e.onEdgeUpdateEnd, ie = e.noDragClassName, le = e.noWheelClassName, se = e.noPanClassName, ue = e.elevateEdgesOnSelect, ce = e.disableKeyboardA11y, de = e.nodeOrigin, fe = e.nodeExtent, pe = e.rfId; var he = gc(n, Fu), me = gc(r, Gu); return function (e) { var n = ou(), r = (0, t.useRef)(!1); (0, t.useEffect)((function () { !r.current && n.viewportInitialized && e && (setTimeout((function () { return e(n); }), 1), r.current = !0); }), [e, n.viewportInitialized]); }(l), t.createElement(Zu, { onPaneClick: $, onPaneMouseEnter: Y, onPaneMouseMove: X, onPaneMouseLeave: K, onPaneContextMenu: G, onPaneScroll: q, deleteKeyCode: M, selectionKeyCode: E, selectionOnDrag: k, selectionMode: C, onSelectionStart: v, onSelectionEnd: y, multiSelectionKeyCode: _, panActivationKeyCode: N, zoomActivationKeyCode: P, elementsSelectable: R, onMove: o, onMoveStart: a, onMoveEnd: i, zoomOnScroll: j, zoomOnPinch: Z, zoomOnDoubleClick: W, panOnScroll: F, panOnScrollSpeed: U, panOnScrollMode: V, panOnDrag: H, defaultViewport: A, translateExtent: z, minZoom: I, maxZoom: D, onSelectionContextMenu: g, preventScrolling: L, noDragClassName: ie, noWheelClassName: le, noPanClassName: se, disableKeyboardA11y: ce }, t.createElement(dc, null, t.createElement(uc, { edgeTypes: me, onEdgeClick: u, onEdgeDoubleClick: d, onEdgeUpdate: Q, onlyRenderVisibleElements: O, onEdgeContextMenu: J, onEdgeMouseEnter: ee, onEdgeMouseMove: te, onEdgeMouseLeave: ne, onEdgeUpdateStart: oe, onEdgeUpdateEnd: ae, edgeUpdaterRadius: re, defaultMarkerColor: B, noPanClassName: se, elevateEdgesOnSelect: !!ue, disableKeyboardA11y: ce, rfId: pe }, t.createElement(mc, { style: w, type: b, component: x, containerStyle: S })), t.createElement("div", { className: "react-flow__edgelabel-renderer" }), t.createElement(Wu, { nodeTypes: he, onNodeClick: s, onNodeDoubleClick: c, onNodeMouseEnter: f, onNodeMouseMove: p, onNodeMouseLeave: h, onNodeContextMenu: m, selectNodesOnDrag: T, onlyRenderVisibleElements: O, noPanClassName: se, noDragClassName: ie, disableKeyboardA11y: ce, nodeOrigin: de, nodeExtent: fe, rfId: pe }))); };
    vc.displayName = "GraphView";
    var yc = (0, t.memo)(vc);
    var bc = [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]], wc = { rfId: "1", width: 0, height: 0, transform: [0, 0, 1], nodeInternals: new Map, edges: [], onNodesChange: null, onEdgesChange: null, hasDefaultNodes: !1, hasDefaultEdges: !1, d3Zoom: null, d3Selection: null, d3ZoomHandler: void 0, minZoom: .5, maxZoom: 2, translateExtent: bc, nodeExtent: bc, nodesSelectionActive: !1, userSelectionActive: !1, userSelectionRect: null, connectionNodeId: null, connectionHandleId: null, connectionHandleType: "source", connectionPosition: { x: 0, y: 0 }, connectionStatus: null, connectionMode: Pl.Strict, domNode: null, paneDragging: !1, noPanClassName: "nopan", nodeOrigin: [0, 0], nodeDragThreshold: 0, snapGrid: [15, 15], snapToGrid: !1, nodesDraggable: !0, nodesConnectable: !0, nodesFocusable: !0, edgesFocusable: !0, edgesUpdatable: !0, elementsSelectable: !0, elevateNodesOnSelect: !0, fitViewOnInit: !1, fitViewOnInitDone: !1, fitViewOnInitOptions: void 0, onSelectionChange: [], multiSelectionActive: !1, connectionStartHandle: null, connectionEndHandle: null, connectionClickStartHandle: null, connectOnClick: !0, ariaLiveMessage: "", autoPanOnConnect: !0, autoPanOnNodeDrag: !0, connectionRadius: 20, onError: bl, isValidConnection: void 0 }, xc = function () { return e = function (e, t) { return (__assign(__assign({}, wc), { setNodes: function (n) { var _b = t(), r = _b.nodeInternals, o = _b.nodeOrigin, a = _b.elevateNodesOnSelect; e({ nodeInternals: Ks(n, r, o, a) }); }, getNodes: function () { return Array.from(t().nodeInternals.values()); }, setEdges: function (n) { var _b = t().defaultEdgeOptions, r = _b === void 0 ? {} : _b; e({ edges: n.map((function (e) { return (__assign(__assign({}, r), e)); })) }); }, setDefaultNodesAndEdges: function (n, r) { var o = "undefined" !== typeof n, a = "undefined" !== typeof r, i = o ? Ks(n, new Map, t().nodeOrigin, t().elevateNodesOnSelect) : new Map; e({ nodeInternals: i, edges: a ? r : [], hasDefaultNodes: o, hasDefaultEdges: a }); }, updateNodeDimensions: function (n) { var _b = t(), r = _b.onNodesChange, o = _b.nodeInternals, a = _b.fitViewOnInit, i = _b.fitViewOnInitDone, l = _b.fitViewOnInitOptions, s = _b.domNode, u = _b.nodeOrigin, c = null === s || void 0 === s ? void 0 : s.querySelector(".react-flow__viewport"); if (!c)
            return; var d = window.getComputedStyle(c), f = new window.DOMMatrixReadOnly(d.transform).m22, p = n.reduce((function (e, t) {
            var _b;
            var n = o.get(t.id);
            if (n) {
                var r_31 = ol(t.nodeElement);
                r_31.width && r_31.height && (n.width !== r_31.width || n.height !== r_31.height || t.forceUpdate) && (o.set(n.id, __assign(__assign(__assign({}, n), (_b = {}, _b[vl] = __assign(__assign({}, n[vl]), { handleBounds: { source: Pu(".source", t.nodeElement, f, u), target: Pu(".target", t.nodeElement, f, u) } }), _b)), r_31)), e.push({ id: n.id, type: "dimensions", dimensions: r_31 }));
            }
            return e;
        }), []); Xs(o, u); var h = i || a && !i && qs(t, __assign({ initial: !0 }, l)); e({ nodeInternals: new Map(o), fitViewOnInitDone: h }), (null === p || void 0 === p ? void 0 : p.length) > 0 && (null === r || void 0 === r || r(p)); }, updateNodePositions: function (e) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; var o = t().triggerNodeChanges, a = e.map((function (e) { var t = { id: e.id, type: "position", dragging: r }; return n && (t.positionAbsolute = e.positionAbsolute, t.position = e.position), t; })); o(a); }, triggerNodeChanges: function (n) { var _b = t(), r = _b.onNodesChange, o = _b.nodeInternals, a = _b.hasDefaultNodes, i = _b.nodeOrigin, l = _b.getNodes, s = _b.elevateNodesOnSelect; if (null !== n && void 0 !== n && n.length) {
            if (a) {
                var t_51 = Ks(vu(n, l()), o, i, s);
                e({ nodeInternals: t_51 });
            }
            null === r || void 0 === r || r(n);
        } }, addSelectedNodes: function (n) { var _b = t(), r = _b.multiSelectionActive, o = _b.edges, a = _b.getNodes; var i, l = null; r ? i = n.map((function (e) { return yu(e, !0); })) : (i = bu(a(), n), l = bu(o, [])), Js({ changedNodes: i, changedEdges: l, get: t, set: e }); }, addSelectedEdges: function (n) { var _b = t(), r = _b.multiSelectionActive, o = _b.edges, a = _b.getNodes; var i, l = null; r ? i = n.map((function (e) { return yu(e, !0); })) : (i = bu(o, n), l = bu(a(), [])), Js({ changedNodes: l, changedEdges: i, get: t, set: e }); }, unselectNodesAndEdges: function () { var _b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = _b.nodes, r = _b.edges; var _d = t(), o = _d.edges, a = _d.getNodes, i = r || o; Js({ changedNodes: (n || a()).map((function (e) { return (e.selected = !1, yu(e.id, !1)); })), changedEdges: i.map((function (e) { return yu(e.id, !1); })), get: t, set: e }); }, setMinZoom: function (n) { var _b = t(), r = _b.d3Zoom, o = _b.maxZoom; null === r || void 0 === r || r.scaleExtent([n, o]), e({ minZoom: n }); }, setMaxZoom: function (n) { var _b = t(), r = _b.d3Zoom, o = _b.minZoom; null === r || void 0 === r || r.scaleExtent([o, n]), e({ maxZoom: n }); }, setTranslateExtent: function (n) { var r; null === (r = t().d3Zoom) || void 0 === r || r.translateExtent(n), e({ translateExtent: n }); }, resetSelectedElements: function () { var _b = t(), n = _b.edges, r = _b.getNodes; Js({ changedNodes: r().filter((function (e) { return e.selected; })).map((function (e) { return yu(e.id, !1); })), changedEdges: n.filter((function (e) { return e.selected; })).map((function (e) { return yu(e.id, !1); })), get: t, set: e }); }, setNodeExtent: function (n) { var r = t().nodeInternals; r.forEach((function (e) { e.positionAbsolute = il(e.position, n); })), e({ nodeExtent: n, nodeInternals: new Map(r) }); }, panBy: function (e) { var _b = t(), n = _b.transform, r = _b.width, o = _b.height, a = _b.d3Zoom, i = _b.d3Selection, l = _b.translateExtent; if (!a || !i || !e.x && !e.y)
            return !1; var s = Ai.translate(n[0] + e.x, n[1] + e.y).scale(n[2]), u = [[0, 0], [r, o]], c = null === a || void 0 === a ? void 0 : a.constrain()(s, u, l); return a.transform(i, c), n[0] !== c.x || n[1] !== c.y || n[2] !== c.k; }, cancelConnection: function () { return e({ connectionNodeId: wc.connectionNodeId, connectionHandleId: wc.connectionHandleId, connectionHandleType: wc.connectionHandleType, connectionStatus: wc.connectionStatus, connectionStartHandle: wc.connectionStartHandle, connectionEndHandle: wc.connectionEndHandle }); }, reset: function () { return e(__assign({}, wc)); } })); }, t = Object.is, e ? Gn(e, t) : Gn; var e, t; }, Sc = function (e) { var n = e.children; var r = (0, t.useRef)(null); return r.current || (r.current = xc()), t.createElement(Ki, { value: r.current }, n); };
    Sc.displayName = "ReactFlowProvider";
    var Ec = function (e) { var n = e.children; return (0, t.useContext)(Xi) ? t.createElement(t.Fragment, null, n) : t.createElement(Sc, null, n); };
    Ec.displayName = "ReactFlowWrapper";
    var kc = { input: Ss, "default": ws, output: ks, group: Cs }, Cc = { "default": Yl, straight: Vl, step: Ul, smoothstep: Fl, simplebezier: Dl }, _c = [0, 0], Nc = [15, 15], Pc = { x: 0, y: 0, zoom: 1 }, Mc = { width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: 0 }, Oc = (0, t.forwardRef)((function (e, n) { var r = e.nodes, o = e.edges, a = e.defaultNodes, i = e.defaultEdges, l = e.className, _b = e.nodeTypes, s = _b === void 0 ? kc : _b, _d = e.edgeTypes, u = _d === void 0 ? Cc : _d, c = e.onNodeClick, d = e.onEdgeClick, f = e.onInit, p = e.onMove, h = e.onMoveStart, m = e.onMoveEnd, g = e.onConnect, v = e.onConnectStart, y = e.onConnectEnd, b = e.onClickConnectStart, w = e.onClickConnectEnd, x = e.onNodeMouseEnter, S = e.onNodeMouseMove, E = e.onNodeMouseLeave, k = e.onNodeContextMenu, C = e.onNodeDoubleClick, _ = e.onNodeDragStart, N = e.onNodeDrag, P = e.onNodeDragStop, M = e.onNodesDelete, O = e.onEdgesDelete, R = e.onSelectionChange, T = e.onSelectionDragStart, A = e.onSelectionDrag, z = e.onSelectionDragStop, I = e.onSelectionContextMenu, D = e.onSelectionStart, L = e.onSelectionEnd, _f = e.connectionMode, B = _f === void 0 ? Pl.Strict : _f, _g = e.connectionLineType, j = _g === void 0 ? Rl.Bezier : _g, Z = e.connectionLineStyle, F = e.connectionLineComponent, U = e.connectionLineContainerStyle, _h = e.deleteKeyCode, V = _h === void 0 ? "Backspace" : _h, _j = e.selectionKeyCode, W = _j === void 0 ? "Shift" : _j, _k = e.selectionOnDrag, H = _k === void 0 ? !1 : _k, _m = e.selectionMode, $ = _m === void 0 ? Ol.Full : _m, _p = e.panActivationKeyCode, Y = _p === void 0 ? "Space" : _p, _q = e.multiSelectionKeyCode, X = _q === void 0 ? (El() ? "Meta" : "Control") : _q, _v = e.zoomActivationKeyCode, K = _v === void 0 ? (El() ? "Meta" : "Control") : _v, _w = e.snapToGrid, q = _w === void 0 ? !1 : _w, _x = e.snapGrid, G = _x === void 0 ? Nc : _x, _y = e.onlyRenderVisibleElements, Q = _y === void 0 ? !1 : _y, _z = e.selectNodesOnDrag, J = _z === void 0 ? !0 : _z, ee = e.nodesDraggable, te = e.nodesConnectable, ne = e.nodesFocusable, _0 = e.nodeOrigin, re = _0 === void 0 ? _c : _0, oe = e.edgesFocusable, ae = e.edgesUpdatable, ie = e.elementsSelectable, _1 = e.defaultViewport, le = _1 === void 0 ? Pc : _1, _2 = e.minZoom, se = _2 === void 0 ? .5 : _2, _3 = e.maxZoom, ue = _3 === void 0 ? 2 : _3, _4 = e.translateExtent, ce = _4 === void 0 ? bc : _4, _5 = e.preventScrolling, de = _5 === void 0 ? !0 : _5, fe = e.nodeExtent, _6 = e.defaultMarkerColor, pe = _6 === void 0 ? "#b1b1b7" : _6, _7 = e.zoomOnScroll, he = _7 === void 0 ? !0 : _7, _8 = e.zoomOnPinch, me = _8 === void 0 ? !0 : _8, _9 = e.panOnScroll, ge = _9 === void 0 ? !1 : _9, _10 = e.panOnScrollSpeed, ve = _10 === void 0 ? .5 : _10, _11 = e.panOnScrollMode, ye = _11 === void 0 ? Ml.Free : _11, _12 = e.zoomOnDoubleClick, be = _12 === void 0 ? !0 : _12, _13 = e.panOnDrag, we = _13 === void 0 ? !0 : _13, xe = e.onPaneClick, Se = e.onPaneMouseEnter, Ee = e.onPaneMouseMove, ke = e.onPaneMouseLeave, Ce = e.onPaneScroll, _e = e.onPaneContextMenu, Ne = e.children, Pe = e.onEdgeUpdate, Me = e.onEdgeContextMenu, Oe = e.onEdgeDoubleClick, Re = e.onEdgeMouseEnter, Te = e.onEdgeMouseMove, Ae = e.onEdgeMouseLeave, ze = e.onEdgeUpdateStart, Ie = e.onEdgeUpdateEnd, _14 = e.edgeUpdaterRadius, De = _14 === void 0 ? 10 : _14, Le = e.onNodesChange, Be = e.onEdgesChange, _15 = e.noDragClassName, je = _15 === void 0 ? "nodrag" : _15, _16 = e.noWheelClassName, Ze = _16 === void 0 ? "nowheel" : _16, _17 = e.noPanClassName, Fe = _17 === void 0 ? "nopan" : _17, _18 = e.fitView, Ue = _18 === void 0 ? !1 : _18, Ve = e.fitViewOptions, _19 = e.connectOnClick, We = _19 === void 0 ? !0 : _19, He = e.attributionPosition, $e = e.proOptions, Ye = e.defaultEdgeOptions, _20 = e.elevateNodesOnSelect, Xe = _20 === void 0 ? !0 : _20, _21 = e.elevateEdgesOnSelect, Ke = _21 === void 0 ? !1 : _21, _22 = e.disableKeyboardA11y, qe = _22 === void 0 ? !1 : _22, _23 = e.autoPanOnConnect, Ge = _23 === void 0 ? !0 : _23, _24 = e.autoPanOnNodeDrag, Qe = _24 === void 0 ? !0 : _24, _25 = e.connectionRadius, Je = _25 === void 0 ? 20 : _25, et = e.isValidConnection, tt = e.onError, nt = e.style, rt = e.id, ot = e.nodeDragThreshold, at = __rest(e, ["nodes", "edges", "defaultNodes", "defaultEdges", "className", "nodeTypes", "edgeTypes", "onNodeClick", "onEdgeClick", "onInit", "onMove", "onMoveStart", "onMoveEnd", "onConnect", "onConnectStart", "onConnectEnd", "onClickConnectStart", "onClickConnectEnd", "onNodeMouseEnter", "onNodeMouseMove", "onNodeMouseLeave", "onNodeContextMenu", "onNodeDoubleClick", "onNodeDragStart", "onNodeDrag", "onNodeDragStop", "onNodesDelete", "onEdgesDelete", "onSelectionChange", "onSelectionDragStart", "onSelectionDrag", "onSelectionDragStop", "onSelectionContextMenu", "onSelectionStart", "onSelectionEnd", "connectionMode", "connectionLineType", "connectionLineStyle", "connectionLineComponent", "connectionLineContainerStyle", "deleteKeyCode", "selectionKeyCode", "selectionOnDrag", "selectionMode", "panActivationKeyCode", "multiSelectionKeyCode", "zoomActivationKeyCode", "snapToGrid", "snapGrid", "onlyRenderVisibleElements", "selectNodesOnDrag", "nodesDraggable", "nodesConnectable", "nodesFocusable", "nodeOrigin", "edgesFocusable", "edgesUpdatable", "elementsSelectable", "defaultViewport", "minZoom", "maxZoom", "translateExtent", "preventScrolling", "nodeExtent", "defaultMarkerColor", "zoomOnScroll", "zoomOnPinch", "panOnScroll", "panOnScrollSpeed", "panOnScrollMode", "zoomOnDoubleClick", "panOnDrag", "onPaneClick", "onPaneMouseEnter", "onPaneMouseMove", "onPaneMouseLeave", "onPaneScroll", "onPaneContextMenu", "children", "onEdgeUpdate", "onEdgeContextMenu", "onEdgeDoubleClick", "onEdgeMouseEnter", "onEdgeMouseMove", "onEdgeMouseLeave", "onEdgeUpdateStart", "onEdgeUpdateEnd", "edgeUpdaterRadius", "onNodesChange", "onEdgesChange", "noDragClassName", "noWheelClassName", "noPanClassName", "fitView", "fitViewOptions", "connectOnClick", "attributionPosition", "proOptions", "defaultEdgeOptions", "elevateNodesOnSelect", "elevateEdgesOnSelect", "disableKeyboardA11y", "autoPanOnConnect", "autoPanOnNodeDrag", "connectionRadius", "isValidConnection", "onError", "style", "id", "nodeDragThreshold"]); var it = rt || "1"; return t.createElement("div", __assign(__assign({}, at), { style: __assign(__assign({}, nt), Mc), ref: n, className: Vn(["react-flow", l]), "data-testid": "rf__wrapper", id: rt }), t.createElement(Ec, null, t.createElement(yc, { onInit: f, onMove: p, onMoveStart: h, onMoveEnd: m, onNodeClick: c, onEdgeClick: d, onNodeMouseEnter: x, onNodeMouseMove: S, onNodeMouseLeave: E, onNodeContextMenu: k, onNodeDoubleClick: C, nodeTypes: s, edgeTypes: u, connectionLineType: j, connectionLineStyle: Z, connectionLineComponent: F, connectionLineContainerStyle: U, selectionKeyCode: W, selectionOnDrag: H, selectionMode: $, deleteKeyCode: V, multiSelectionKeyCode: X, panActivationKeyCode: Y, zoomActivationKeyCode: K, onlyRenderVisibleElements: Q, selectNodesOnDrag: J, defaultViewport: le, translateExtent: ce, minZoom: se, maxZoom: ue, preventScrolling: de, zoomOnScroll: he, zoomOnPinch: me, zoomOnDoubleClick: be, panOnScroll: ge, panOnScrollSpeed: ve, panOnScrollMode: ye, panOnDrag: we, onPaneClick: xe, onPaneMouseEnter: Se, onPaneMouseMove: Ee, onPaneMouseLeave: ke, onPaneScroll: Ce, onPaneContextMenu: _e, onSelectionContextMenu: I, onSelectionStart: D, onSelectionEnd: L, onEdgeUpdate: Pe, onEdgeContextMenu: Me, onEdgeDoubleClick: Oe, onEdgeMouseEnter: Re, onEdgeMouseMove: Te, onEdgeMouseLeave: Ae, onEdgeUpdateStart: ze, onEdgeUpdateEnd: Ie, edgeUpdaterRadius: De, defaultMarkerColor: pe, noDragClassName: je, noWheelClassName: Ze, noPanClassName: Fe, elevateEdgesOnSelect: Ke, rfId: it, disableKeyboardA11y: qe, nodeOrigin: re, nodeExtent: fe }), t.createElement(Is, { nodes: r, edges: o, defaultNodes: a, defaultEdges: i, onConnect: g, onConnectStart: v, onConnectEnd: y, onClickConnectStart: b, onClickConnectEnd: w, nodesDraggable: ee, nodesConnectable: te, nodesFocusable: ne, edgesFocusable: oe, edgesUpdatable: ae, elementsSelectable: ie, elevateNodesOnSelect: Xe, minZoom: se, maxZoom: ue, nodeExtent: fe, onNodesChange: Le, onEdgesChange: Be, snapToGrid: q, snapGrid: G, connectionMode: B, translateExtent: ce, connectOnClick: We, defaultEdgeOptions: Ye, fitView: Ue, fitViewOptions: Ve, onNodesDelete: M, onEdgesDelete: O, onNodeDragStart: _, onNodeDrag: N, onNodeDragStop: P, onSelectionDrag: A, onSelectionDragStart: T, onSelectionDragStop: z, noPanClassName: Fe, nodeOrigin: re, rfId: it, autoPanOnConnect: Ge, autoPanOnNodeDrag: Qe, onError: tt, connectionRadius: Je, isValidConnection: et, nodeDragThreshold: ot }), t.createElement(Rs, { onSelectionChange: R }), Ne, t.createElement(nl, { proOptions: $e, position: He }), t.createElement(Vs, { rfId: it, disableKeyboardA11y: qe }))); }));
    Oc.displayName = "ReactFlow";
    function Rc(e) { return function (n) { var _b = (0, t.useState)(n), r = _b[0], o = _b[1], a = (0, t.useCallback)((function (t) { return o((function (n) { return e(t, n); })); }), []); return [r, o, a]; }; }
    var Tc = Rc(vu), Ac = Rc((function (e, t) { return gu(e, t); }));
    function zc() { return t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" }, t.createElement("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" })); }
    function Ic() { return t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5" }, t.createElement("path", { d: "M0 0h32v4.2H0z" })); }
    function Dc() { return t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30" }, t.createElement("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" })); }
    function Lc() { return t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" }, t.createElement("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" })); }
    function Bc() { return t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" }, t.createElement("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" })); }
    var jc = function (e) { var n = e.children, r = e.className, o = __rest(e, ["children", "className"]); return t.createElement("button", __assign({ type: "button", className: Vn(["react-flow__controls-button", r]) }, o), n); };
    jc.displayName = "ControlButton";
    var Zc = function (e) { return ({ isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable, minZoomReached: e.transform[2] <= e.minZoom, maxZoomReached: e.transform[2] >= e.maxZoom }); }, Fc = function (e) { var n = e.style, _b = e.showZoom, r = _b === void 0 ? !0 : _b, _d = e.showFitView, o = _d === void 0 ? !0 : _d, _f = e.showInteractive, a = _f === void 0 ? !0 : _f, i = e.fitViewOptions, l = e.onZoomIn, s = e.onZoomOut, u = e.onFitView, c = e.onInteractiveChange, d = e.className, f = e.children, _g = e.position, p = _g === void 0 ? "bottom-left" : _g; var h = Ji(), _h = (0, t.useState)(!1), m = _h[0], g = _h[1], _j = Qi(Zc, Qn), v = _j.isInteractive, y = _j.minZoomReached, b = _j.maxZoomReached, _k = ou(), w = _k.zoomIn, x = _k.zoomOut, S = _k.fitView; if ((0, t.useEffect)((function () { g(!0); }), []), !m)
        return null; return t.createElement(tl, { className: Vn(["react-flow__controls", d]), position: p, style: n, "data-testid": "rf__controls" }, r && t.createElement(t.Fragment, null, t.createElement(jc, { onClick: function () { w(), null === l || void 0 === l || l(); }, className: "react-flow__controls-zoomin", title: "zoom in", "aria-label": "zoom in", disabled: b }, t.createElement(zc, null)), t.createElement(jc, { onClick: function () { x(), null === s || void 0 === s || s(); }, className: "react-flow__controls-zoomout", title: "zoom out", "aria-label": "zoom out", disabled: y }, t.createElement(Ic, null))), o && t.createElement(jc, { className: "react-flow__controls-fitview", onClick: function () { S(i), null === u || void 0 === u || u(); }, title: "fit view", "aria-label": "fit view" }, t.createElement(Dc, null)), a && t.createElement(jc, { className: "react-flow__controls-interactive", onClick: function () { h.setState({ nodesDraggable: !v, nodesConnectable: !v, elementsSelectable: !v }), null === c || void 0 === c || c(!v); }, title: "toggle interactivity", "aria-label": "toggle interactivity" }, v ? t.createElement(Bc, null) : t.createElement(Lc, null)), f); };
    Fc.displayName = "Controls";
    var Uc, Vc = (0, t.memo)(Fc);
    function Wc(e) { var n = e.color, r = e.dimensions, o = e.lineWidth; return t.createElement("path", { stroke: n, strokeWidth: o, d: "M".concat(r[0] / 2, " 0 V").concat(r[1], " M0 ").concat(r[1] / 2, " H").concat(r[0]) }); }
    function Hc(e) { var n = e.color, r = e.radius; return t.createElement("circle", { cx: r, cy: r, r: r, fill: n }); }
    !function (e) { e.Lines = "lines", e.Dots = "dots", e.Cross = "cross"; }(Uc || (Uc = {}));
    var $c = (_k = {}, _k[Uc.Dots] = "#91919a", _k[Uc.Lines] = "#eee", _k[Uc.Cross] = "#e2e2e2", _k), Yc = (_m = {}, _m[Uc.Dots] = 1, _m[Uc.Lines] = 1, _m[Uc.Cross] = 6, _m), Xc = function (e) { return ({ transform: e.transform, patternId: "pattern-".concat(e.rfId) }); };
    function Kc(e) { var n = e.id, _b = e.variant, r = _b === void 0 ? Uc.Dots : _b, _d = e.gap, o = _d === void 0 ? 20 : _d, a = e.size, _f = e.lineWidth, i = _f === void 0 ? 1 : _f, _g = e.offset, l = _g === void 0 ? 2 : _g, s = e.color, u = e.style, c = e.className; var d = (0, t.useRef)(null), _h = Qi(Xc, Qn), f = _h.transform, p = _h.patternId, h = s || $c[r], m = a || Yc[r], g = r === Uc.Dots, v = r === Uc.Cross, y = Array.isArray(o) ? o : [o, o], b = [y[0] * f[2] || 1, y[1] * f[2] || 1], w = m * f[2], x = v ? [w, w] : b, S = g ? [w / l, w / l] : [x[0] / l, x[1] / l]; return t.createElement("svg", { className: Vn(["react-flow__background", c]), style: __assign(__assign({}, u), { position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }), ref: d, "data-testid": "rf__background" }, t.createElement("pattern", { id: p + n, x: f[0] % b[0], y: f[1] % b[1], width: b[0], height: b[1], patternUnits: "userSpaceOnUse", patternTransform: "translate(-".concat(S[0], ",-").concat(S[1], ")") }, g ? t.createElement(Hc, { color: h, radius: w / l }) : t.createElement(Wc, { dimensions: x, color: h, lineWidth: i })), t.createElement("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "url(#".concat(p + n, ")") })); }
    Kc.displayName = "Background";
    var qc = (0, t.memo)(Kc);
    var Gc = (0, t.memo)((function (e) { var t = e.data, n = e.isConnectable; return (0, Pe.jsx)(Pe.Fragment, { children: (0, Pe.jsxs)("div", { className: "class-node", children: [(0, Pe.jsx)("button", { value: t.classIndex, className: "button", onClick: t.onClick, children: t.classData.name }), (0, Pe.jsxs)("div", { className: "class-node", style: { textAlign: "left" }, children: [(0, Pe.jsxs)("h2", { children: ["Access: ", t.classData.access] }), (0, Pe.jsxs)("h2", { children: ["Extends: ", t.classData["extends"]] }), (0, Pe.jsxs)("h2", { children: ["Static: ", t.classData.static.toString()] }), (0, Pe.jsxs)("h2", { children: ["Abstract: ", t.classData.abstract.toString()] }), (0, Pe.jsxs)("h2", { children: ["Interface: ", t.classData.interface.toString()] }), (0, Pe.jsx)("h2", { children: "Attributes: " }), (0, Pe.jsx)("div", { className: "class-node", style: { textAlign: "left", fontSize: "75%" }, children: t.classData.attributes.map((function (e) { return (0, Pe.jsxs)("h5", { children: ["- ", e.name] }); })) }), (0, Pe.jsx)("h2", { children: "Methods: " }), (0, Pe.jsx)("div", { className: "class-node", style: { textAlign: "left", fontSize: "75%" }, children: t.classData.methods.map((function (e) { return (0, Pe.jsxs)("h5", { children: ["- ", e.name] }); })) })] })] }) }); })), Qc = [], Jc = [], ed = { classNode: Gc }, td = function (e) { var n = e.classData; var _b = Tc(Qc), r = _b[0], o = _b[1], a = _b[2], _d = Ac(Jc), i = _d[0], l = _d[1], s = _d[2], u = (0, t.useCallback)((function (e) { return l((function (t) { return Ql(e, t); })); }), [l]), _f = (0, t.useState)("1"), c = _f[0], d = _f[1], _g = (0, t.useState)([]), f = _g[0], p = _g[1], _h = (0, t.useState)([]), h = _h[0], m = _h[1], _j = (0, t.useState)(1), g = _j[0], v = _j[1]; (0, t.useEffect)((function () { 1 === g && d("1"); }), [g]); var y = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0; var t = { value: "".concat(g + 1), label: "".concat(e.name) }; p(__spreadArray(__spreadArray([], f, true), [t], false)), m(__spreadArray(__spreadArray([], h, true), [{ value: "".concat(g + 1), child: function () { return (0, Pe.jsxs)("div", { style: { textAlign: "left" }, children: [(0, Pe.jsx)("h1", { children: e.name }), (0, Pe.jsxs)("h2", { children: ["Access: ", e.access] }), (0, Pe.jsxs)("h2", { children: ["Extends: ", e["extends"]] }), (0, Pe.jsxs)("h2", { children: ["Static: ", e.static.toString()] }), (0, Pe.jsxs)("h2", { children: ["Abstract: ", e.abstract.toString()] }), (0, Pe.jsxs)("h2", { children: ["Interface: ", e.interface.toString()] }), (0, Pe.jsx)("h2", { children: "Attributes: " }), (0, Pe.jsx)("div", { style: { fontSize: "75%" }, children: e.attributes.map((function (e) { return (0, Pe.jsxs)("h3", { children: ["- ", e.name] }); })) }), (0, Pe.jsx)("h2", { children: "Methods: " }), (0, Pe.jsx)("div", { style: { fontSize: "75%" }, children: e.methods.map((function (e) { return (0, Pe.jsxs)("h3", { children: ["- ", e.name] }); })) })] }); } }], false)), v(g + 1), d("".concat(g + 1)); }; (0, t.useEffect)((function () { var e = function (e) { var t = Number(e.target.value), r = n[t]; y(r); }; o((function (t) { return n.map((function (t, n) { return ({ id: t.name, type: "classNode", position: { x: 200 * n, y: 0 }, data: { onClick: e, classData: t, classIndex: n } }); })); })); }), [n, o, y]); return (0, Pe.jsx)("div", { className: "", children: (0, Pe.jsxs)(Ut, { value: c, children: [(0, Pe.jsxs)(Dn, { onChange: function (e, t) { d(t); }, "aria-label": "lab API tabs example", className: " flex rounded-lg bg-gray-800 color-white w-full h-[65px] mb-4", children: [(0, Pe.jsx)(Zt, { label: "Main Tab", value: "1", className: " pt-4 bg-black text-white rounded-l-lg mx-1", style: { width: "150px", height: "72px", color: "white" } }), f.map((function (e) { return (0, Pe.jsx)(Zt, { icon: (0, Pe.jsx)(Un.Z, { onClick: function () { return (function (e) { var t = f.filter((function (t) { return t.value !== e; })); p(t); var n = h.filter((function (t) { return t.value !== e; })); m(n), v(g - 1), d("1"); })(e.value); } }), iconPosition: "end", className: "bg-white hover:bg-gray-900 mb-4", style: { color: "white" }, label: e.label, value: e.value }, e.value); }))] }), (0, Pe.jsx)(Fn, { value: "1", children: (0, Pe.jsx)("div", { style: { width: "610px", height: "440px" }, children: (0, Pe.jsxs)(Oc, { nodes: r, edges: i, onNodesChange: a, onEdgesChange: s, onConnect: u, proOptions: { hideAttribution: !0 }, nodeTypes: ed, children: [(0, Pe.jsx)(Vc, {}), (0, Pe.jsx)(qc, { variant: "dots", gap: 12, size: 1 })] }) }) }), h.map((function (e) { return (0, Pe.jsx)(Fn, { value: e.value, children: e.child() }, e.value); }))] }) }); }, nd = function () { var _b = (0, t.useState)([]), e = _b[0], n = _b[1]; return (0, Pe.jsx)("div", { className: "text-white mt-4 text-center", children: (0, Pe.jsxs)("div", { className: "bg-[#68666c] flex border-4 rounded-3xl", children: [(0, Pe.jsx)("div", { className: "w-2/8 p-2 bg-[#282729] rounded-3xl p-2 m-2 items-center justify-center", children: (0, Pe.jsx)("div", { className: "w-[300px] justify-center items-center", children: (0, Pe.jsxs)("header", { className: "flex flex-row mb-4", children: [(0, Pe.jsx)("img", { src: me, className: "w-[50px] mr-5" }), (0, Pe.jsx)("button", { className: "rounded-3xl", onClick: function () {
                                        return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0: return [4 /*yield*/, je()];
                                                case 1:
                                                    e = _b.sent();
                                                    n(e);
                                                    return [2 /*return*/];
                                            }
                                        }); });
                                    }, children: "Open Project Directory" })] }) }) }), (0, Pe.jsx)("div", { className: "w-6/8 bg-[#1b1b24] flex p-2 m-2 rounded-3xl border w-[680px] h-[580px] text-white", children: (0, Pe.jsx)("div", { className: "", children: (0, Pe.jsx)(td, { classData: e }) }) })] }) }); }, rd = function () { return (0, Pe.jsx)("div", { className: "flex justify-center items-center p-8 h-screen bg-transparent w-full", children: (0, Pe.jsxs)(pe, { children: [(0, Pe.jsx)(de, { path: "/", element: (0, Pe.jsx)(Me, {}) }), (0, Pe.jsx)(de, { path: "/Home", element: (0, Pe.jsx)(nd, {}) })] }) }); };
    o.createRoot(document.getElementById("root")).render((0, Pe.jsx)(t.StrictMode, { children: (0, Pe.jsx)(Se, { basename: "", children: (0, Pe.jsx)(rd, {}) }) })), (0, Oe.S1)(), Oe.U3.on("windowClose", (function () { Oe.l2.killProcess(); }));
})(); })();
//# sourceMappingURL=main.fe5d7d62.js.map
