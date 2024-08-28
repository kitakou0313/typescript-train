// TypeScriptの関数
// JavaScriptの関数定義にtype annotationが追加

function addWithAnnotation(a:number, b:number): number {
    return a + b;
}

// type annotationで指定した型の値しか渡せない
addWithAnnotation(1, 2)
addWithAnnotation("a", "b")

// Functionの型
// parameter typeとreturn typeの2パートで構成される
// JavaScriptでは関数がfirst-class objectなのでこういう型定義もできる
let addWithFunctionType: (x: number, y: number) => number;
// 型が一致する無名関数を代入している
addWithFunctionType = function (x:number, y:number) {
    return x+y
}

// Optional parameter
// parametr名の後に?をつけることで任意の引数を定義できる
function multiply(a:number,b:number, c?:number) {
    // type annotationの型 と undefiedのUnion typeになる
    // 他の変数のようには使えない
    if (typeof c !== "undefined"){
        return a*b*c
    }
    return a * b * c
}
