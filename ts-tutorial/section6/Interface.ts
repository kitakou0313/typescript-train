// Interface
// 他のコードとの関わり方を定義する機能
// TSではobject，function，classに定義できる

// objectのinterface
// Property名とその型を定義できる
interface PersonInterface {
    firstName: string,
    lastName: string
}

// object定義時にPropertyを明記する方法があったが，それよりreusableなので良さそう

function getFullName(person:PersonInterface) {
    return `${person.firstName}, ${person.lastName}`
}

function getFullNameWithDestracting({firstName, lastName}:PersonInterface) {
    return `${firstName}, ${lastName}`
}

// 定義されたinterfaceに含まれるpropertyを持つobjectであれば引数に取れる
let Jane = {
    firstName: "Jane",
    middleName: "K",
    lastName: "Doe"
}
getFullNameWithDestracting(Jane)

// Optioan, readonlyも使用可能
interface PersonIfOptionalReadonly {
    firstName: string,
    lastName: string,
    middleName?: string
    readonly ssn: string
}

// Function interface
// parameterの型，返り値の型で定義
interface StringFormat {
    (str: string, isUpper: boolean): string,
    // 複数定義もできた
    // (str: number, isUpper: boolean): string
}

// Type annotationで使用可能
let format: StringFormat
format = function (str:string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase(): str.toLocaleLowerCase()
}
format = function (str:number, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase(): str.toLocaleLowerCase()
}

// interfaceを実装した関数が呼び出す側がinterfaceで規定されたparameterを渡すことをコンパイル時に確認する
// 実装時は必ずしも定義する必要はない
let lowerCase: StringFormat
lowerCase = function (str: string) {
    return str.toLocaleLowerCase()
}
lowerCase("Hoge")
lowerCase("Hoge", false)

// Class Type
// メソッド名, パラメータ，返り値の型で定義される
interface Json {
    toJson(rawString:string): string
}

class PersonJson implements Json {
    constructor(
        private name: string
    ) {
        
    }
    toJson(rawString: string): string {
        return rawString + this.name
    }
}

// Interfaceの拡張
// 既存のinterfaceにメソッドの定義を追加する
// 既存のinterfaceを壊さず，新たに定義する場合に有効
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable{
    later(email: string,after: number): boolean
}

// 拡張後のメソッドも含めて定義する
class Mail implements FutureMailable{
    later(email: string, after: number): boolean {
        return true
    }
    queue(email: string): boolean {
        return true
    }
    send(email: string): boolean {
        return true
    }
}

// 複数のinterfaceをextendsできる
interface A {
    a():boolean
}
interface B {
    b():boolean
}
interface C extends A, B{
    c(): boolean
}

class CClass implements C{
    a(): boolean {
        return false
    }
    b(): boolean {
        return false
    }
    c(): boolean {
        return false
    }
}

// Classをextendsしたinterfaceも作成可能
// private, protectedのアクセス制御が行われたproperty, methodも継承される
// そのため，このinterfaceをimplementsできるのは元のClassのsubclassのみ

class Control {
    private state: boolean = false
}

interface StatefulControle extends Control{
    enable(): void
}

// ControlのSub classなのでimplementsできる
class Button extends Control implements StatefulControle {
    enable(): void {
        
    }
}
// ControlのSub classではないためimplements不可
// state propertyを実装する必要があるが，
// - private propertyなのでsub classから参照不可
// - 衝突するためsub class側では定義不可 
class Label implements StatefulControle {
    enable(): void {
    }
}
