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

// Default parameter
function applyDiscount(price:number, discount:number = 0.05) {
    return price * (1 - discount)
}
applyDiscount(100)
applyDiscount(100, 0.1)

// 型の定義では使えない
let promotion: (price: number, discount: number = 0.05) => number

// Rest parameter
// 数が確定しない引数を扱う
function getTotalWithRestParam(...numbers:number[]): number {
    let total = 0
    numbers.forEach((num) => {
        total += num
    })
    return total
}
getTotalWithRestParam()
getTotalWithRestParam(1)
getTotalWithRestParam(1,2,3,4)

function combine(...args:(number | string)[]): [number, string] {
    let total = 0
    let str = ""

    args.forEach((arg) => {
        if (typeof arg === "number") {
            total += arg
        } else {
            str += arg
        }
    })

    return [total, str]
}

// FunctionのOverload
// JavaなどのOverload（型が異なる複数の関数を定義する）とは別 

function addWithOverload(a: number, b:number): number;
function addWithOverload(a: string, b:string): string;

function addWithOverload(a: any, b:any):any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    }else if (typeof a === "string" && typeof b === "string"){
        return a + b
    }else{
        throw new Error("Invalid arguemnts")
    }
}

// Any型で定義した引数，返り値の型を事前に定義したSignatureで狭めるイメージ
addWithOverload(10, 20)
addWithOverload("aa", "bb")
// 処理の実装時に引数の型が未確定になることを考慮する必要のないJavaのOverloadとは確かに異なる

// 受け取る引数の数が異なるOverloadの場合
// 実装時に必須となる引数の数はそろえる必要があるので超過した分はOptionalにする必要がある
function sumWithOverload(a: number, b: number): number;
function sumWithOverload(a: number, b: number, c:number): number;
function sumWithOverload(a: number, b: number, c?:number): number{
    if(c) {
        return a + b+ c
    }
    return a + b
};

// Classのmethod（Classのpropertyとして定義された関数）でもOverload可能
