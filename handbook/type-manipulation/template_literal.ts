// template litral type
// string型のtemplateのようなことをliteral typeで行う

type World = "world"
type Greeting = `hello, ${World}`

// literal typeとして推論されるなら変数でも可能
const WorldString = "world"
type GreetingWithValue = `hello, ${typeof WorldString}`

// Union型を用いることで複数の埋め込みも可能
type Worlds = "world1" | "world2"
type GreetingFromUnionType = `hello, ${Worlds}`

// String型の値の操作を行うクラス
type GreetingToBeManupilated = "Hello, world"
type ShoutyGreeting = Uppercase<GreetingToBeManupilated>
type CapitalizedGreeting = Capitalize<GreetingToBeManupilated>
