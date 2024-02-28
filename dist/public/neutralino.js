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
var Neutralino = function (e) {
    "use strict";
    function t(e, t, n, o) { return new (n || (n = Promise))((function (i, r) { function s(e) { try {
        c(o.next(e));
    }
    catch (e) {
        r(e);
    } } function a(e) { try {
        c(o["throw"](e));
    }
    catch (e) {
        r(e);
    } } function c(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(s, a); } c((o = o.apply(e, t || [])).next()); })); }
    function n() { return f("extensions.getStats"); }
    var o = { __proto__: null, dispatch: function (e, o, i) {
            var _this = this;
            return new Promise((function (r, s) { return t(_this, void 0, void 0, (function () { var t, t_1, e_1; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, n()];
                    case 1:
                        t = _a.sent();
                        if (!t.loaded.includes(e)) return [3 /*break*/, 8];
                        if (!t.connected.includes(e)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, f("extensions.dispatch", { extensionId: e, event: o, data: i })];
                    case 3:
                        t_1 = _a.sent();
                        r(t_1);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        s(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        !function (e, t) { e in d ? d[e].push(t) : d[e] = [t]; }(e, { method: "extensions.dispatch", data: { extensionId: e, event: o, data: i }, resolve: r, reject: s });
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        s({ code: "NE_EX_EXTNOTL", message: "".concat(e, " is not loaded") });
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            }); })); }));
        }, broadcast: function (e, t) { return f("extensions.broadcast", { event: e, data: t }); }, getStats: n };
    function i(e, t) { return window.addEventListener(e, t), Promise.resolve({ success: !0, message: "Event listener added" }); }
    function r(e, t) { var n = new CustomEvent(e, { detail: t }); return window.dispatchEvent(n), Promise.resolve({ success: !0, message: "Message dispatched" }); }
    function s(e) { var t = window.atob(e), n = t.length, o = new Uint8Array(n); for (var e_2 = 0; e_2 < n; e_2++)
        o[e_2] = t.charCodeAt(e_2); return o.buffer; }
    var a, c = {}, u = [], d = {};
    function l() { window.NL_TOKEN && sessionStorage.setItem("NL_TOKEN", window.NL_TOKEN), a = new WebSocket("ws://".concat(window.location.hostname, ":").concat(window.NL_PORT)), function () {
        var _this = this;
        if (i("ready", (function () { return t(_this, void 0, void 0, (function () { var e, _i, _a, t_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, p(u)];
                case 1:
                    if (_b.sent(), !window.NL_EXTENABLED)
                        return [2 /*return*/];
                    return [4 /*yield*/, n()];
                case 2:
                    e = _b.sent();
                    for (_i = 0, _a = e.connected; _i < _a.length; _i++) {
                        t_2 = _a[_i];
                        r("extensionReady", t_2);
                    }
                    return [2 /*return*/];
            }
        }); })); })), i("extClientConnect", (function (e) { r("extensionReady", e.detail); })), !window.NL_EXTENABLED)
            return;
        i("extensionReady", (function (e) { return t(_this, void 0, void 0, (function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = e.detail in d;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, p(d[e.detail])];
                case 1:
                    _a = (_b.sent(), delete d[e.detail]);
                    _b.label = 2;
                case 2:
                    _a;
                    return [2 /*return*/];
            }
        }); })); }));
    }(), function () {
        var _this = this;
        a.addEventListener("message", (function (e) { var t, n, o; var i = JSON.parse(e.data); i.id && i.id in c ? ((null === (t = i.data) || void 0 === t ? void 0 : t.error) ? (c[i.id].reject(i.data.error), "NE_RT_INVTOKN" == i.data.error.code && (a.close(), document.body.innerText = "", document.write("<code>NE_RT_INVTOKN</code>: Neutralinojs application configuration prevents accepting native calls from this client."))) : (null === (n = i.data) || void 0 === n ? void 0 : n.success) && c[i.id].resolve(i.data.hasOwnProperty("returnValue") ? i.data.returnValue : i.data), delete c[i.id]) : i.event && ("openedFile" == i.event && "dataBinary" == (null === (o = null == i ? void 0 : i.data) || void 0 === o ? void 0 : o.action) && (i.data.data = s(i.data.data)), r(i.event, i.data)); })), a.addEventListener("open", (function (e) { return t(_this, void 0, void 0, (function () { return __generator(this, function (_a) {
            r("ready");
            return [2 /*return*/];
        }); })); })), a.addEventListener("close", (function (e) { return t(_this, void 0, void 0, (function () { return __generator(this, function (_a) {
            r("serverOffline", { code: "NE_CL_NSEROFF", message: "Neutralino server is offline. Try restarting the application" });
            return [2 /*return*/];
        }); })); }));
    }(); }
    function f(e, t) { return new Promise((function (n, o) { if ((null == a ? void 0 : a.readyState) != WebSocket.OPEN)
        return i = { method: e, data: t, resolve: n, reject: o }, void u.push(i); var i; var r = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (function (e) { return (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16); })), s = window.NL_TOKEN || sessionStorage.getItem("NL_TOKEN") || ""; c[r] = { resolve: n, reject: o }, a.send(JSON.stringify({ id: r, method: e, data: t, accessToken: s })); })); }
    function p(e) { return t(this, void 0, void 0, (function () { var t_3, e_4, e_3; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(e.length > 0)) return [3 /*break*/, 5];
                t_3 = e.shift();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, f(t_3.method, t_3.data)];
            case 2:
                e_4 = _a.sent();
                t_3.resolve(e_4);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                t_3.reject(e_3);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 0];
            case 5: return [2 /*return*/];
        }
    }); })); }
    function g(e, t) { return f("filesystem.writeBinaryFile", { path: e, data: m(t) }); }
    function m(e) { var t = new Uint8Array(e), n = ""; for (var _i = 0, t_4 = t; _i < t_4.length; _i++) {
        var e_5 = t_4[_i];
        n += String.fromCharCode(e_5);
    } return window.btoa(n); }
    var w, v, _ = { __proto__: null, createDirectory: function (e) { return f("filesystem.createDirectory", { path: e }); }, removeDirectory: function (e) { return f("filesystem.removeDirectory", { path: e }); }, writeFile: function (e, t) { return f("filesystem.writeFile", { path: e, data: t }); }, appendFile: function (e, t) { return f("filesystem.appendFile", { path: e, data: t }); }, writeBinaryFile: g, appendBinaryFile: function (e, t) { return f("filesystem.appendBinaryFile", { path: e, data: m(t) }); }, readFile: function (e, t) { return f("filesystem.readFile", Object.assign({ path: e }, t)); }, readBinaryFile: function (e, t) { return new Promise((function (n, o) { f("filesystem.readBinaryFile", Object.assign({ path: e }, t)).then((function (e) { n(s(e)); }))["catch"]((function (e) { o(e); })); })); }, openFile: function (e) { return f("filesystem.openFile", { path: e }); }, createWatcher: function (e) { return f("filesystem.createWatcher", { path: e }); }, removeWatcher: function (e) { return f("filesystem.removeWatcher", { id: e }); }, getWatchers: function () { return f("filesystem.getWatchers"); }, updateOpenedFile: function (e, t, n) { return f("filesystem.updateOpenedFile", { id: e, event: t, data: n }); }, getOpenedFileInfo: function (e) { return f("filesystem.getOpenedFileInfo", { id: e }); }, removeFile: function (e) { return f("filesystem.removeFile", { path: e }); }, readDirectory: function (e) { return f("filesystem.readDirectory", { path: e }); }, copyFile: function (e, t) { return f("filesystem.copyFile", { source: e, destination: t }); }, moveFile: function (e, t) { return f("filesystem.moveFile", { source: e, destination: t }); }, getStats: function (e) { return f("filesystem.getStats", { path: e }); } };
    function h(e, t) { return f("os.execCommand", Object.assign({ command: e }, t)); }
    !function (e) { e.WARNING = "WARNING", e.ERROR = "ERROR", e.INFO = "INFO", e.QUESTION = "QUESTION"; }(w || (w = {})), function (e) { e.OK = "OK", e.OK_CANCEL = "OK_CANCEL", e.YES_NO = "YES_NO", e.YES_NO_CANCEL = "YES_NO_CANCEL", e.RETRY_CANCEL = "RETRY_CANCEL", e.ABORT_RETRY_IGNORE = "ABORT_RETRY_IGNORE"; }(v || (v = {}));
    var y = { __proto__: null, get Icon() { return w; }, get MessageBoxChoice() { return v; }, execCommand: h, spawnProcess: function (e, t) { return f("os.spawnProcess", { command: e, cwd: t }); }, updateSpawnedProcess: function (e, t, n) { return f("os.updateSpawnedProcess", { id: e, event: t, data: n }); }, getSpawnedProcesses: function () { return f("os.getSpawnedProcesses"); }, getEnv: function (e) { return f("os.getEnv", { key: e }); }, getEnvs: function () { return f("os.getEnvs"); }, showOpenDialog: function (e, t) { return f("os.showOpenDialog", Object.assign({ title: e }, t)); }, showFolderDialog: function (e, t) { return f("os.showFolderDialog", Object.assign({ title: e }, t)); }, showSaveDialog: function (e, t) { return f("os.showSaveDialog", Object.assign({ title: e }, t)); }, showNotification: function (e, t, n) { return f("os.showNotification", { title: e, content: t, icon: n }); }, showMessageBox: function (e, t, n, o) { return f("os.showMessageBox", { title: e, content: t, choice: n, icon: o }); }, setTray: function (e) { return f("os.setTray", e); }, open: function (e) { return f("os.open", { url: e }); }, getPath: function (e) { return f("os.getPath", { name: e }); } };
    var N = { __proto__: null, getMemoryInfo: function () { return f("computer.getMemoryInfo"); }, getArch: function () { return f("computer.getArch"); }, getKernelInfo: function () { return f("computer.getKernelInfo"); }, getOSInfo: function () { return f("computer.getOSInfo"); }, getCPUInfo: function () { return f("computer.getCPUInfo"); }, getDisplays: function () { return f("computer.getDisplays"); }, getMousePosition: function () { return f("computer.getMousePosition"); } };
    var E, O = { __proto__: null, setData: function (e, t) { return f("storage.setData", { key: e, data: t }); }, getData: function (e) { return f("storage.getData", { key: e }); }, getKeys: function () { return f("storage.getKeys"); } };
    function R(e, t) { return f("debug.log", { message: e, type: t }); }
    !function (e) { e.WARNING = "WARNING", e.ERROR = "ERROR", e.INFO = "INFO"; }(E || (E = {}));
    var b = { __proto__: null, get LoggerType() { return E; }, log: R };
    function T(e) { return f("app.exit", { code: e }); }
    var S = { __proto__: null, exit: T, killProcess: function () { return f("app.killProcess"); }, restartProcess: function (e) {
            var _this = this;
            return new Promise((function (n) { return t(_this, void 0, void 0, (function () { var t; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = window.NL_ARGS.reduce((function (e, t) { return (t.includes(" ") && (t = "\"".concat(t, "\"")), e += " " + t); }), "");
                        (null == e ? void 0 : e.args) && (t += " " + e.args);
                        return [4 /*yield*/, h(t, { background: !0 })];
                    case 1:
                        _a.sent(), T(), n();
                        return [2 /*return*/];
                }
            }); })); }));
        }, getConfig: function () { return f("app.getConfig"); }, broadcast: function (e, t) { return f("app.broadcast", { event: e, data: t }); } };
    var P = new WeakMap;
    function D(e, t) { return f("window.move", { x: e, y: t }); }
    function L() { return f("window.getSize"); }
    var F = { __proto__: null, setTitle: function (e) { return f("window.setTitle", { title: e }); }, getTitle: function () { return f("window.getTitle"); }, maximize: function () { return f("window.maximize"); }, unmaximize: function () { return f("window.unmaximize"); }, isMaximized: function () { return f("window.isMaximized"); }, minimize: function () { return f("window.minimize"); }, setFullScreen: function () { return f("window.setFullScreen"); }, exitFullScreen: function () { return f("window.exitFullScreen"); }, isFullScreen: function () { return f("window.isFullScreen"); }, show: function () { return f("window.show"); }, hide: function () { return f("window.hide"); }, isVisible: function () { return f("window.isVisible"); }, focus: function () { return f("window.focus"); }, setIcon: function (e) { return f("window.setIcon", { icon: e }); }, move: D, center: function () { return f("window.center"); }, setDraggableRegion: function (e) { return new Promise((function (n, o) { var i = e instanceof Element ? e : document.getElementById(e); var r = 0, s = 0, a = 0, c = !1, u = performance.now(); if (!i)
            return o({ code: "NE_WD_DOMNOTF", message: "Unable to find DOM element" }); if (P.has(i))
            return o({ code: "NE_WD_ALRDREL", message: "This DOM element is already an active draggable region" }); function d(e) { return t(this, void 0, void 0, (function () { var t_5, n_1; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!c) return [3 /*break*/, 2];
                    t_5 = performance.now(), n_1 = t_5 - u;
                    if (n_1 < 5)
                        return [2 /*return*/];
                    u = t_5 - (n_1 - 5);
                    return [4 /*yield*/, D(e.screenX - r, e.screenY - s)];
                case 1: return [2 /*return*/, void (_a.sent())];
                case 2:
                    a = Math.sqrt(e.movementX * e.movementX + e.movementY * e.movementY), a >= 10 && (c = !0, i.setPointerCapture(e.pointerId));
                    return [2 /*return*/];
            }
        }); })); } function l(e) { 0 === e.button && (r = e.clientX, s = e.clientY, i.addEventListener("pointermove", d)); } function f(e) { i.removeEventListener("pointermove", d), i.releasePointerCapture(e.pointerId); } i.addEventListener("pointerdown", l), i.addEventListener("pointerup", f), P.set(i, { pointerdown: l, pointerup: f }), n({ success: !0, message: "Draggable region was activated" }); })); }, unsetDraggableRegion: function (e) { return new Promise((function (t, n) { var o = e instanceof Element ? e : document.getElementById(e); if (!o)
            return n({ code: "NE_WD_DOMNOTF", message: "Unable to find DOM element" }); if (!P.has(o))
            return n({ code: "NE_WD_NOTDRRE", message: "DOM element is not an active draggable region" }); var _a = P.get(o), i = _a.pointerdown, r = _a.pointerup; o.removeEventListener("pointerdown", i), o.removeEventListener("pointerup", r), P["delete"](o), t({ success: !0, message: "Draggable region was deactivated" }); })); }, setSize: function (e) {
            var _this = this;
            return new Promise((function (n, o) { return t(_this, void 0, void 0, (function () { var t; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, L()];
                    case 1:
                        t = _a.sent();
                        f("window.setSize", e = Object.assign(Object.assign({}, t), e)).then((function (e) { n(e); }))["catch"]((function (e) { o(e); }));
                        return [2 /*return*/];
                }
            }); })); }));
        }, getSize: L, getPosition: function () { return f("window.getPosition"); }, setAlwaysOnTop: function (e) { return f("window.setAlwaysOnTop", { onTop: e }); }, create: function (e, t) { return new Promise((function (n, o) { function i(e) { return "string" != typeof e || (e = e.trim()).includes(" ") && (e = "\"".concat(e, "\"")), e; } t = Object.assign(Object.assign({}, t), { useSavedState: !1 }); var r = window.NL_ARGS.reduce((function (e, t, n) { return ((t.includes("--path=") || t.includes("--debug-mode") || t.includes("--load-dir-res") || 0 == n) && (e += " " + i(t)), e); }), ""); r += " --url=" + i(e); for (var e_6 in t) {
            if ("processArgs" == e_6)
                continue;
            r += " --window".concat(e_6.replace(/[A-Z]|^[a-z]/g, (function (e) { return "-" + e.toLowerCase(); })), "=").concat(i(t[e_6]));
        } t && t.processArgs && (r += " " + t.processArgs), h(r, { background: !0 }).then((function (e) { n(e); }))["catch"]((function (e) { o(e); })); })); } };
    var I = { __proto__: null, broadcast: function (e, t) { return f("events.broadcast", { event: e, data: t }); }, on: i, off: function (e, t) { return window.removeEventListener(e, t), Promise.resolve({ success: !0, message: "Event listener removed" }); }, dispatch: r };
    var C = null;
    var x = { __proto__: null, checkForUpdates: function (e) {
            var _this = this;
            return new Promise((function (n, o) { return t(_this, void 0, void 0, (function () { var t_6, _a, _b, e_7; return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!e)
                            return [2 /*return*/, o({ code: "NE_RT_NATRTER", message: "Missing require parameter: url" })];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(e)];
                    case 2:
                        t_6 = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, t_6.text()];
                    case 3:
                        C = _b.apply(_a, [_c.sent()]), !function (e) { return !!(e.applicationId && e.applicationId == window.NL_APPID && e.version && e.resourcesURL); }(C) ? o({ code: "NE_UP_CUPDMER", message: "Invalid update manifest or mismatching applicationId" }) : n(C);
                        return [3 /*break*/, 5];
                    case 4:
                        e_7 = _c.sent();
                        o({ code: "NE_UP_CUPDERR", message: "Unable to fetch update manifest" });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            }); })); }));
        }, install: function () {
            var _this = this;
            return new Promise((function (e, n) { return t(_this, void 0, void 0, (function () { var t_7, n_2, e_8; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!C)
                            return [2 /*return*/, n({ code: "NE_UP_UPDNOUF", message: "No update manifest loaded" })];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch(C.resourcesURL)];
                    case 2:
                        t_7 = _a.sent();
                        return [4 /*yield*/, t_7.arrayBuffer()];
                    case 3:
                        n_2 = _a.sent();
                        return [4 /*yield*/, g(window.NL_PATH + "/resources.neu", n_2)];
                    case 4:
                        _a.sent(), e({ success: !0, message: "Update installed. Restart the process to see updates" });
                        return [3 /*break*/, 6];
                    case 5:
                        e_8 = _a.sent();
                        n({ code: "NE_UP_UPDINER", message: "Update installation error" });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            }); })); }));
        } };
    var A = { __proto__: null, readText: function (e, t) { return f("clipboard.readText", { key: e, data: t }); }, writeText: function (e) { return f("clipboard.writeText", { data: e }); } };
    var M = { __proto__: null, getMethods: function () { return f("custom.getMethods"); } };
    var U = !1;
    return e.app = S, e.clipboard = A, e.computer = N, e.custom = M, e.debug = b, e.events = I, e.extensions = o, e.filesystem = _, e.init = function (e) {
        var _this = this;
        if (e === void 0) { e = {}; }
        if (e = Object.assign({ exportCustomMethods: !0 }, e), !U) {
            if (l(), window.NL_ARGS.find((function (e) { return "--neu-dev-auto-reload" == e; })) && i("neuDev_reloadApp", (function () { return t(_this, void 0, void 0, (function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, R("Reloading the application...")];
                    case 1:
                        _a.sent(), location.reload();
                        return [2 /*return*/];
                }
            }); })); })), e.exportCustomMethods && window.NL_CMETHODS && window.NL_CMETHODS.length > 0) {
                var _loop_1 = function (e_9) {
                    Neutralino.custom[e_9] = function () {
                        var _a;
                        var t = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            t[_i] = arguments[_i];
                        }
                        var n = {};
                        for (var _b = 0, _c = t.entries(); _b < _c.length; _b++) {
                            var _d = _c[_b], e_10 = _d[0], o_1 = _d[1];
                            n = "object" != typeof o_1 || Array.isArray(o_1) || null == o_1 ? Object.assign(Object.assign({}, n), (_a = {}, _a["arg" + e_10] = o_1, _a)) : Object.assign(Object.assign({}, n), o_1);
                        }
                        return f("custom." + e_9, n);
                    };
                };
                for (var _i = 0, _a = window.NL_CMETHODS; _i < _a.length; _i++) {
                    var e_9 = _a[_i];
                    _loop_1(e_9);
                }
            }
            window.NL_CVERSION = "3.12.0", window.NL_CCOMMIT = "043cc4f11ec6c545b8c747bddf3370871bd7b96a", U = !0;
        }
    }, e.os = y, e.storage = O, e.updater = x, e.window = F, e;
}({});
