export const values = (formData: FormData) =>
    Object.fromEntries(formData.entries())

export const FormDataUtils = {
    values,
}
