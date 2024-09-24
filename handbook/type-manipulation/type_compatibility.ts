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

// 関数の比較
let x_function = (a: number) => 0;
let y_function = (b: number, s: string) => 0

y_function = x_function;
x_function = y_function;

// 関数の比較
// 1. 代入する値（x_function）の全ての引数の型が代入される変数の型（y_function）の引数の型と互換性があるか検証
//   引数名は不一致で問題ない
//   上の例ではaがbに互換性があるので代入可能
//   下の例はsに互換性のある引数がx_functionになかったため互換性が無い

y_function(111, "hoge")
// 第二引数が無視されるが，これはJavaScriptでは追加の引数を無視する実装が一般的なため

// 2. 返り値は代入される変数の型のpropertyをすべて持つか（= subtypeか）で判定されている

let x_function_return = () => ({name: "Alice"})
let y_function_return = () => ({name: "Alice", location: "Seatle"})

x_function_return = y_function_return
y_function_return = x_function_return

// 共通する考え方として，代入される変数の型に期待されるinterfaceと返り値を満たせる場合に互換性があると判定されていそう
//   引数の場合...代入される変数の型の引数で呼び出されてもエラーが起きない関数であればよい -> 必要な引数が渡されば引数が捨てられても良い
//   返り値の場合...代入される変数の型の後続処理で参照されるよう，propretyが含まれればよい -> 必要なpropetyを持つなら多くても問題ない

// Enumの互換性
// number型とは互換性がある
// 他のEnum型とは互換性が無い
enum Status {
    Ready,
    Waiting
}
enum Color {
    Red, 
    Blue, 
    Green
}

let statusCompati: Status = Status.Ready
statusCompati = 1
statusCompati = Color.Blue

// Classの互換性
// instanceのmemberのみ比較される
// static memberやコンストラクタは考慮されない

class AnimalForCompati {
    feet: number;
    constructor(name:string, numFeet: number){}
}

class SizeForCompati {
    feet: number;
    constructor(numFeet: number) {}
}

let a: AnimalForCompati
let b: SizeForCompati

// Constructorのシグネチャが異なっても代入可能
a = b;
b = a;

// Private, Protectedなmemberは影響する
class AnimalWithPrivate {
    feet: number
    private name: string
    constructor(name:string ,numFeet: number) {
    }
}

let c: AnimalWithPrivate
// Source Type(AnimalForCompati)にTarget TypeのPrivete member(name)が無いので代入不可
c = a
// Source Type(AnimalWithPrivate)にPrivate memberが無く互換性があるため代入可能
a = c

c = b
b = c
