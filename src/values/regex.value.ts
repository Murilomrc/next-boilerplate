export const validateRegex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    cep: /\d{5}\-\d{3}/,
    number: /^\d+$/,
    semanticVersioning: /^(?:\d+\.){2}\d+$/,
    phoneNumber: /\(\d{2}\)\ \d{4}\-\d{4}/,
    httpProtocol: /^https?:/,
    date: /\d{4}\-\d{2}\-\d{2}/,
    dateBr: /\d{2}\/\d{2}\/\d{4}/,
}

export const cleanRegex = {
    cpf: /\.|\-/g,
    cnpj: /\.|\-|\//g,
    keepOnlyDigits: /\D/g,
}

export const maskRegex = {
    cpf: /(\d{3})(\d{3})(\d{3})(\d{2})/g,
    cnpj: /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    cep: /(\d{5})(\d)/,
    phone: {
        ddd: /^(\d*)/,
        part1: /^(\d\d)(\d{0,5})/,
        part2Phone: /^(\d\d)(\d{4})(\d{0,4}).*/,
        part2Cellphone: /^(\d\d)(\d{5})(\d{4}).*/,
    },
}

export const RegexValues = {
    validate: validateRegex,
    clean: cleanRegex,
    mask: maskRegex,
}
