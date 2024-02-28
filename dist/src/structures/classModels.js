"use strict";
// @ts-nocheck
exports.__esModule = true;
exports.ClassModelDefaults = exports.MethodModelDefaults = exports.VariableModelDefaults = void 0;
exports.VariableModelDefaults = {
    name: "",
    value: undefined,
    type: "",
    access: "private",
    static: false,
    final: false
};
exports.MethodModelDefaults = {
    name: "",
    parameters: [],
    "return": "",
    access: "private",
    static: false,
    final: false
};
exports.ClassModelDefaults = {
    name: "",
    attributes: [],
    methods: [],
    abstract: false,
    interface: false,
    access: "public",
    "extends": "",
    static: false,
    implements: []
};
