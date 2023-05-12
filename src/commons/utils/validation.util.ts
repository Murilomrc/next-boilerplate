const validateEmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validateEmail = (email: string | undefined | null) =>
    email ? String(email).toLowerCase().match(validateEmailRegex) : false

export const validateVersionFormat = (version: string) =>
    /^(?:\d+\.){2}\d+$/.test(version)

export const checkProtocol = (url: string) => /^https?:/.test(url)

export const ValidationUtils = {
    isEmail: validateEmail,
    isVersionFormat: validateVersionFormat,
}
