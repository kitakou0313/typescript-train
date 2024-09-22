// 型の互換性はstructural subtypingに基づく
// structural subtyping...型の互換性をそのmemberによってのみ考える方法

interface Pet {
    name: string
}
class Dog {
    /**
     *
     */
    constructor(public name: string) {
    }
}

let pet: Pet
// name memberを両方持つため代入可能
pet = new Dog("Hoge")
// nominally-typedなJavaなどでは明示的にinterfaceを実装していることを示さなければならない

// TypeScriptの型システムの健全性(soundness)
// コンパイル時に安全と検出できないオペレーションが許可されている

// 前提
// 変数の型に含まれるproperty全てを値が持つ -> 代入可能
let dog = {name:"Lassie", owner: "Rudd"}
pet = dog
// 関数の引数も同じ
function greet(pet:Pet) {
    console.log("Hello, " + pet.name)
} 
greet(pet)

// object型の値では既知のpropertyしか指定できない点に注意
// Pet interface型を明示的に指定した場合は owner propetyが指定できない
let dogError:Pet = {name:"Lassie", owner: "Rudd"}
