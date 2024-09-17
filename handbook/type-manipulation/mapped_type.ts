// Mapped Tyoe
// ある型に基づいて別の型を定義する際に用いる

type Horse = {
    name: string
}

type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse
}

const conform: OnlyBoolsAndHorses = {
    del: true,
    rodney: false
}

// 別の型で定義したPropertyと同じ名称で作成する
type OptionFlags<T> = {
    [Props in keyof T]: boolean
}
type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
}
type FeatureOptions = OptionFlags<Features>

// Modifiersを除外できる
type CreateMutableType<T> = {
    -readonly [Property in keyof T]: T[Property]
}

type LockedAccount = {
    readonly id: string,
    readonly name: string
}


type UnlockedAccount = CreateMutableType<LockedAccount>

// as句を使うことで別名をつける
type Getters<T> = {
    [Prop in keyof T as `get${Capitalize<string & Prop>}` ]:() => T[Prop] 
}
type LazyPerson = Getters<Person>
