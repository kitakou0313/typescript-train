// Generics
// 関数，Class, Interfaceを異なる型間で再利用可能にする機能

// 定義時に型パラメータを指定できる
function getRandomItem<T>(items:T[]):T {
    let randomIndex = Math.floor(
        Math.random() * items.length
    )

    return items[randomIndex]
}

let numbers = [1,2,3,4,5];
let strings = ["A", "B", "C"];

// 呼び出し時に型パラメータに型名を渡す
// Type inferenceで明示的に指定しなくても推論される
let randomEle = getRandomItem<number>(numbers);
randomEle = getRandomItem(numbers);
randomEle = getRandomItem(strings);

function mergeGenerics<U, V>(obj1:U, obj2:V) {
    return {
        ...obj1,...obj2
    }
}

let resultWithGenerics = mergeGenerics(
    { name: 'John' },
    {id: 12345}
);

// Genericsに制約を付加できる
function mergeWithConstraint<U extends object, V extends object>(obj1:U, obj2:V) {
    return {
        ...obj1,...obj2
    }
}

let result1 = mergeWithConstraint({name:"John"}, {id:12345});
// object型の子クラスではないnumber型の値は渡せない
let result2 = mergeWithConstraint({name:"John"}, 100);

// Type Constraintsに型パラメータを使用できる
// keyof operatorで渡した型のkeyのliteralから構成されるUnion型が得られる
function propWithConstraints<T, K extends keyof T>(obj1: T, key: K) {
    return obj1[key];
}

propWithConstraints({name: "John"}, "name")
propWithConstraints({name: "John"}, "age")

// GenericsとClass
// 関数などの定義と同様に型パラメータを設定できる

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number){};

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T){
        if (this.isFull()) {
            throw new Error();
        }
        this.elements.push(element)
    }
    pop(): T{
        if(this.isEmpty()){
            throw new Error()
        }
        return this.elements.pop() as T;
    }
}

let numbersStack = new Stack<number>(4);
let stringStack = new Stack<string>(4);

let numbersStackEle = numbersStack.pop();
let stringStackEle = stringStack.pop();

// InterfaceでGenericsを使う
// TSのGenericsはObject, Method, Classがある
// 例1 objectのkeyとvalueの型指定
interface PairGenerics<K, V>{
    key: K,
    value: V
}

let month: PairGenerics<string, number> = {
    key: "Jan",
    value: 1
}

// 例2 Class向けinterfaceでの使用
interface Collection<T>{
    add(o:T): void,
    remove(o:T): void
}

// Classの定義で型パラメータを定義し，それをinterfaceに渡している
class ListWithGenericeIF<T> implements Collection<T>{
    private items: T[] = []
    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let indexOfo = this.items.indexOf(o);
        if (indexOfo > -1) {
            this.items.splice(indexOfo, 1)
        }
    }
}

let listOfGenerics = new ListWithGenericeIF<string>();
listOfGenerics.add("1")
listOfGenerics.remove("1")

// 例3 indexの型を決められる
interface Option<T> {
    [name: string]: T
}
let inputOption: Option<boolean> = {
    "disabled": true,
    "visible": false
}
