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
    constructors: MethodModel[]
    filePath: string,
    line: number
}
export interface Members {
    attributes: VariableModel[],
    methods: MethodModel[],
    constructors: MethodModel[]
}
export function GetModelAccess(dataModel) : string {
    let acc = dataModel.modifiers.filter(element => ACCESS_MODIFIERS.includes(element))[0];
    return acc === undefined ? "default" : acc;
}
export function GetModelStatic(dataModel) : boolean {
    return dataModel.modifiers.includes("static");
}
export function GetModelFinal(dataModel) : boolean {
    return dataModel.modifiers.includes("final");
}
export function GetModelAbstract(dataModel) : boolean {
    return dataModel.modifiers.includes("abstract");
}