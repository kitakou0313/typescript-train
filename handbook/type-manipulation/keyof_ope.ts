// keyof Operator
// objectのkey名のstring, numeric literal union typeを返す

type Point = {x:number, y:number, name:string}
type KeysOfPoint = keyof Point;

const key: KeysOfPoint = "name";

// Index signatureを持つ場合，keyのtypeを返す
type Arrayish = {[n: number]: string};
type KeyOfArrayish = keyof Arrayish;

type Mapish = {[k: string]: boolean};
type M = keyof Mapish
// stringとnumberのUnion typeだが，これはJSのobject keyはstring型を強制されるため
// 上の例と逆では?
