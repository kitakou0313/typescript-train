// ES6からサポートされたmoduleをTypeScriptでもサポートしている

// ModuleはそのScopeでのみ実行される
// export文で明示的に公開したもののみがmodule外から利用可能

interface Validator {
    isValid(s: string): boolean
}

// export { Validator }
// asで別の名前としてexportも可能
export { Validator as StringValidator}
