// import文で読み込み
// asで別名として読み込みも可能
import { StringValidator } from "./Module";

import {DefaultValidator} from "./Default";

class EmailValidator implements DefaultValidator {
    validate(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s)
    }
}

export {EmailValidator}
