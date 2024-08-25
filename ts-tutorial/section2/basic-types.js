// number type
var price;
price = 1000;
// 小数も含む
price = 1.1;
// 2進数，16進数も可能
var bin = 1;
// string type
var firstName;
firstName = "hoge";
firstName = "\n hogehoge\n";
firstName = "".concat(price);
// boolean
var flag;
flag = false;
flag = !(flag);
// Boolean typeがあるがこれはJavaScriptのもの
// obeject type
// primitive型以外の全ての値に該当するType
// primitive型の一覧
// number, bigint, string, boolean, null, undefined, symbol
var employee;
employee = {
    firstName: "hoge",
    lastName: "fuga"
};
employee = {
    firstName2: "hoge",
    lastName: "fuga"
};
// 定義時に持つPropertyと型を定められる
// 基本こちらを使う方がよさそう（異なるPropertyをもつ値の代入を防げる　上はできない）
var employee2;
employee2 = {
    firstName: "hoge",
    lastName: "fuga"
};
// primitive型の値は代入できない
employee = 10;
employee2.firstName;
// object != Objectなので注意
// empty type
// object型かつpropertyを定義する場合の特別な例っぽい
var vacant = {};
// propetyを持たないので下記はコンパイル時にエラー
vacant.hoge;
// Object型なので以下は実行可能
vacant.toString();
// Array types
var skills = ["Test"];
skills[1] = "Problem solving";
skills.push("HogeHoge");
// 互換性のない型の値の代入を防げる
skills.push(100);
var skill = skills[100];
// JavaScriptのpropertyもアクセス可能
console.log(skills.length);
var series = [1, 2, 3];
var double = series.map(function (e) { e * 2; });
// 複数の型の値を保持するArray
// Union型になる
var scores = ["HogeHuga", 1, 2, ["Hoge"]];
// type inferenceすると変数の型もUnion型になる
var score = scores[1];
// Union型の変数で参照できるpropertyはどうなるのか
var scores2 = [[1], ["Hoge"]];
var score2 = scores2[1];
// Array型であることは共通しているのでArray型のlengthが利用できる
score2.length;
var scores3 = [1, ["Hoge"]];
var score3 = scores3[1];
// Object型のものしか使えない
score3.toString;
// Union型の変数の場合，共通する型のproperty, methodしか参照できなさそう
// Tuple型
// 要素数，順番，型が一致している制約が追加されたArray型のような型
var skillTuple;
skillTuple = ["Math", 100];
skillTuple = [100, "Math"];
var colorTuple = [255, 255, 255];
// 型推論させるとArrayが優先される
var color2Tuple = [255, 255, 255];
// ? postfixを使用することでOptionの要素を定義できる
var colorTupleWithOptional;
colorTupleWithOptional = [255, 255, 255];
colorTupleWithOptional = [255, 255, 255, 1];
// Enum型
// 定められた値の集合を表す型
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
})(Month || (Month = {}));
function isJan(month) {
    switch (month) {
        case Month.Jan:
            return true;
        default:
            return false;
    }
}
isJan(Month.Jan);
// numberを与えても実行可能
isJan(1);
