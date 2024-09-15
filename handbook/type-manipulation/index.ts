// Indexed Access Types
type PersonIndex = { age: number; name: string; alive: boolean };

// "age"と"name" propertyに対応した値のUnion型
type I1 = PersonIndex["age" | "name"]
type I2 = PersonIndex[keyof PersonIndex]
