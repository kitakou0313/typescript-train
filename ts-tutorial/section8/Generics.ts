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
