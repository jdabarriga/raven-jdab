const ACCESS_MODIFIERS = ["public", "private", "protected"];

export interface VariableModel {
    name: string,
    value: string,
    type: string,
    modifiers: string[],
    line: number
}
export interface MethodModel {
    name: string,
    parameters: VariableModel[],
    return: string,
    modifiers: string[],
    generics: string[],
    line: number
}
export interface ClassModel {
    name: string,
    attributes: VariableModel[],
    methods: MethodModel[],
    interface: boolean,
    extends: string,
    implements: string[],
    modifiers: string[],
    generics: string[],
    filePath: string,
    line: number
}
export interface Members {
    attributes: VariableModel[],
    methods: MethodModel[]
}
export function GetModelAccess(dataModel) {
    return dataModel.modifiers.filter(element => ACCESS_MODIFIERS.includes(element))[0];
}
export function GetModelStatic(dataModel) {
    return dataModel.modifiers.includes("static");
}
export function GetModelFinal(dataModel) {
    return dataModel.modifiers.includes("final");
}
export function GetModelAbstract(dataModel) {
    return dataModel.modifiers.includes("abstract");
}