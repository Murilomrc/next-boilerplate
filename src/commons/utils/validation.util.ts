import { cleanRegex, validateRegex } from '@/values/regex.value'

export const validateEmail = (email: string | undefined | null) =>
    email ? String(email).toLowerCase().match(validateRegex.email) : false

export const validateSemanticVersioning = (version: string) =>
    validateRegex.semanticVersioning.test(version)

export const validateHttpProtocol = (url: string) =>
    validateRegex.httpProtocol.test(url)

export const validatePhone = (value: string) =>
    validateRegex.phoneNumber.test(value)

export const validateCep = (
    value: string | number,
    formated: boolean = true
) => {
    const valueString = value.toString()
    if (typeof value === 'number' || !formated)
        return (
            valueString.length === 8 && validateRegex.number.test(valueString)
        )
    return validateRegex.cep.test(valueString)
}

export const validateDate = (value: string) => validateRegex.date.test(value)

export const validateDateBr = (value: string) =>
    validateRegex.dateBr.test(value)

export const validateCpf = (value: string | number) => {
    const cpf = value.toString().replace(cleanRegex.cpf, '')
    const digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10))
    let sum1 = 0,
        sum2 = 0,
        cpfLength = 11

    for (let i = 0; i < 9; i++) {
        sum1 += eval((Number(cpf.charAt(i)) * (cpfLength - 1)).toString())
        sum2 += eval((Number(cpf.charAt(i)) * cpfLength).toString())
        cpfLength--
    }
    sum1 = (sum1 * 10) % 11 === 10 ? 0 : (sum1 * 10) % 11
    sum2 = ((sum2 + 2 * sum1) * 10) % 11

    let digitoGerado = sum1 * 10 + sum2
    return digitoGerado === digitoDigitado
}

const valideCnpj = (value: string | number) => {
    const cnpj = value.toString().replace(cleanRegex.cnpj, '')
    const valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2)
    let dig1 = 0,
        dig2 = 0,
        digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)))

    for (let i = 0; i < valida.length; i++) {
        dig1 += i > 0 ? Number(cnpj.charAt(i - 1)) * valida[i] : 0
        dig2 += Number(cnpj.charAt(i)) * valida[i]
    }
    dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11)
    dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11)
    return dig1 * 10 + dig2 === +digito
}

export const ValidationUtils = {
    isEmail: validateEmail,
    isSemanticVersioning: validateSemanticVersioning,
    isPhone: validatePhone,
    isCep: validateCep,
    isDate: validateDate,
    isDateBr: validateDateBr,
    isCpf: validateCpf,
    isCnpj: valideCnpj,
    isHttpProtocol: validateHttpProtocol,
}
