// import文で読み込み
// asで別名として読み込みも可能
import { StringValidator } from "./Module";

class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s)
    }
}

export {EmailValidator}
