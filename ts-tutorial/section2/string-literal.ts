// String Literal Type
// String型のある値のみ受け入れる型
// String型のEnumみたいな感じ

let click: "click";

click = "click";
click = "double click"

type MyMouseEvent = "click" | "dblclick" | "mouseup" | "mousedown";
let mouseEvent: MyMouseEvent;
mouseEvent = "click";
mouseEvent = "mousedown"
mouseEvent = "scroll"

// 下でString型の値を指定すると残りの引数の型が変化するのは，このstring literal型に解決されていたから
document.addEventListener("click", function (event) {
    console.log(event.button)    
})
