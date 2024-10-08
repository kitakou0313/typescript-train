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

// inheritance 
// 継承が使用可能

class PersonBaseClass {
    constructor(
        private firstName: string,
        private lastName: string
    ) {
        
    }

    getFullName(): string{
        return `${this.firstName} ${this.lastName}`
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends PersonBaseClass {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string
    ) {
        super(firstName, lastName)
    }

    // MethodのOverrideも可能
    describe(): string {
        return super.describe() + `:${ this.jobTitle}`
    }
}

let employeeWithInheritance = new Employee("John", "Doe", "Web developer")
employeeWithInheritance.getFullName()

// static properties, static methods
// 全てのインスタンスで共有されるproperty, method
class EmployeeWithStatic {
    private static headcount: number = 0;
    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string
    ) {
        EmployeeWithStatic.headcount += 1
    }

    public static getHeadcount(){
        return EmployeeWithStatic.headcount
    }
}

let JohnStatic = new EmployeeWithStatic(
    "John", "Doe", "FE Dev"
)
let janeStatic = new EmployeeWithStatic(
    "Jane", "Doe", "BE Dev"
)

// Abstract class
// 継承による実装を前提とするClass
// 一つ以上のAbstract methodsを定義
abstract class EmployeeWithAbstract {
    constructor(
        private name:string
    ) {}
    abstract getSalary(): number;

    getCompensationStatement(): string{
        return `${this.getSalary()}`
    }
}

// Abstrace classからはインスタンスの生成はできない
let employeeAbstract = new EmployeeWithAbstract("Bob")

class Fulltime extends EmployeeWithAbstract {
    constructor(
        name:string, private slary:number
    ) {
        super(name);
    }
    getSalary(): number {
        return this.slary
    }
}
