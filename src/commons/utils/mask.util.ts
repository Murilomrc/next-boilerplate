import { cleanRegex, maskRegex } from '@/values/regex.value'

export const cpfMask = (value: string | number, type: number = 1) => {
    if (type === 1)
        return value
            .toString()
            .replace(cleanRegex.keepOnlyDigits, '')
            .match(/.{1,3}/g)!
            .join('.')
            .replace(/\.(?=[^.]*$)/, '-')
    if (type === 2)
        return value
            .toString()
            .replace(cleanRegex.keepOnlyDigits, '')
            .replace(maskRegex.cpf, '$1.$2.$3-$4')
}

export const cnpjMask = (value: string | number, type: number = 1) => {
    if (type === 1)
        return value
            .toString()
            .replace(cleanRegex.keepOnlyDigits, '')
            .replace(maskRegex.cnpj, '$1.$2.$3/$4-$5')
}

export const cepMask = (value: string | number, type: number = 1) => {
    if (type === 1)
        return value
            .toString()
            .replace(cleanRegex.keepOnlyDigits, '')
            .replace(maskRegex.cep, '$1-$2')
}

const phoneMask = (value: string | number) => {
    value = value
        .toString()
        .replace(cleanRegex.keepOnlyDigits, '')
        .replace(/^0/, '')
    if (value.length > 10) {
        return value.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
    } else if (value.length > 5) {
        return value.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3')
    } else if (value.length > 2) {
        return value.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
    } else {
        return value.replace(/^(\d*)/, '($1')
    }
}

export const MaskUtils = {
    cpf: cpfMask,
    cnpj: cnpjMask,
    cep: cepMask,
    phone: phoneMask,
}
