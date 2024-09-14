// callableなものをinterfaceやtypeの一種として表現できる
interface StringCallable {
    (): string
}
const foo: StringCallable
const res = foo();
