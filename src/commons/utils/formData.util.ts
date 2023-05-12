export const values = (formData: FormData) =>
    Object.fromEntries(formData.entries())

const formDataToJson = (formData: FormData) => {
    const data = {} as any

    for (const [key, value] of formData.entries()) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const oldValue = data[key]
            if (!Array.isArray(data[key])) {
                data[key] = []
                data[key].push(oldValue)
            }
            data[key].push(value)
            continue
        }
        data[key] = value
    }
    return data
}

export const FormDataUtils = {
    values,
    toJson: formDataToJson,
}
