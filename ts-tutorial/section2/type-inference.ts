// 型推論
// 代入する値ともに初期化すると変数の型が推論される
let counter2 = 0;

// 関数の引数のデフォルト値や返り値を指定すると自動で引数の値が決定される
function incrementCounter(counter: number, max=100) {
    return counter++;
}

// Array型の要素の型推論の際，全ての要素に共通する型を選択する(the best common type algorithm)．
let items = [1,2,3];
let items2 = [1,2,3,null];
let items3 = [0, 1, null, 'Hi'];
let items4 = [new Date(), new RegExp('\d+')];
// 上の4例はすべてUnion型なので変わらなくない？
// items3, item4の違いはJavaScriptの型変換を考慮しているのかも（number <-> string）

// Contextual typing
// 引数の場所により型を推論する
// 下の例ではevent変数はMouseEvent型であることが推論できる
document.addEventListener("click", function (event) {
    console.log(event.button)    
})
// 下の例ではevent変数はEvenet型であることが推論できる -> MouseEvent型の持つpropertyは利用不可
document.addEventListener("scroll", function (event) {
    console.log(event.button)    
})
// 第一引数に与える値によって他の値の型が変わるのは実行時に型が変わってしまうのでは...？
// -> string型の変数にしたらeventがEvent型になったので矛盾しない範囲で推論していそう
