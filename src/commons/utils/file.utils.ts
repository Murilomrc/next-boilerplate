const buildAnchorElement = (
    url: string,
    filename?: string,
    target?: string,
    rel?: string
): HTMLAnchorElement => {
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    if (filename) a.download = filename
    if (target) a.target = target
    if (rel) a.rel = rel
    return a
}

export const fileDownload = (
    blob: Blob | MediaSource | undefined,
    filename: string | undefined
) => {
    const navigator = window.navigator
    if (blob) {
        if (navigator.hasOwnProperty('msSaveOrOpenBlob')) {
            // @ts-ignore: Unreachable code error
            navigator.msSaveOrOpenBlob(blob, filename)
        } else {
            const url = window.URL.createObjectURL(blob)
            const a = buildAnchorElement(url, filename)
            a.click()
            setTimeout(() => {
                window.URL.revokeObjectURL(url)
                document.body.removeChild(a)
            }, 0)
        }
    }
}

export const filePdfLink = (blob: Blob | MediaSource) => {
    const url = window.URL.createObjectURL(blob)
    const a = buildAnchorElement(url, undefined, '_blank', 'application/pdf')
    a.click()
    setTimeout(() => {
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
    }, 0)
}

export const buildFileName = (fileName: string = 'Arquivo') =>
    fileName.includes('.') ? fileName.split('.').shift() : fileName

export const buildExtension = (fileName?: string, fileType?: string) => {
    if (fileName?.includes('.')) return fileName?.toLowerCase().split('.').pop()
    else return fileType?.toLowerCase().split('/').pop()
}

export const fetchByLink = async (link: string, fileType?: string) =>
    await fetch(link).then((res) => res.blob())

export const FileUtils = {
    download: fileDownload,
    buildFileName,
    buildExtension,
    fetchByLink,
    pdf: filePdfLink,
}
