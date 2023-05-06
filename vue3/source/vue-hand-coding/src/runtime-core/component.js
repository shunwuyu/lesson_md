let currentInstance = null
export function getCurrentInstance() {
    return currentInstance
}
export function setCurrentInstance(instance) {
    currentInstance = instance
}
let compile;
export function registerRuntimeCompiler(_compile) {
    compile = _compile;
}