
// Union型
// 複数の型を一つの型にまとめられる

let unionVal: number | string = 1;
unionVal = "Hoge"
unionVal = false

function add(a: number|string, b: number|string): number|string {
    if (typeof a === 'number' && typeof b === 'number') {
        // typeof 演算子とif文で型を制約できる
        // 下はどちらもnumber型
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        // 下はどちらもstring型
        return a + b
    }
    throw new Error();
}

// 実行時のエラーをできる限りコンパイル時に検知できるようにするという思想を感じる 
// 歩留まりみたい
