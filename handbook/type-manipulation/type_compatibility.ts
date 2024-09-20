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
