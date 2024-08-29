// Class（propertyの型とメソッドを持つ）を定義可能
// ES6のClassの定義＋Type annotation

class PersonWithClass {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName:string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}`
    }
}

let JohnWithClass = new PersonWithClass("hoge", "huga", "John")

// Access Modifiers
// property, methodの可視性を変更できる
// コンパイル時の可視性の検証であり，実行時には検証されないので注意

// Private（同じクラスからしかアクセスされない）
class PersonWithPrivate {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName:string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}`
    }
}

let JohnWithPrivate = new PersonWithPrivate("hoge", "huga", "John")
JohnWithPrivate.firstName

// Publich
// すべての場所からアクセス可能
// Access Modifierを指定しない場合はこれに設定される
JohnWithClass.firstName

// Protected
// そのClass自身とそのClassを継承しているClass（SubClass）からアクセス可能
class PersonWithProtected {
    protected ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName:string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}`
    }
}

// Readonly modifier
// Propertryをimmutableにできる

// Propetyの定義，またはコンストラクタ内でのみ代入可能
class PersonWithReadonly {
    readonly birthDate: Date;
    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }

    /**
     * setBirthDay
     */
    public setBirthDay(birthDate: Date) {
        this.birthDate = birthDate;
    }
    
}

// constは変数用であり，readonlyはClassのProperty用
