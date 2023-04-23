const appName = 'Reserva Slot'
const logStyle =
    'background: #71c7ec; border-radius: 3px; color: #fff; padding: 0 4px'
const logErrorStyle =
    'background: #C62828; border-radius: 3px; color: #fff; padding: 0 4px'

const errorProps = (message: any, tag: string) => ({
    tag,
    path: window.location.pathname,
    timestamp: new Date().toISOString(),
    error: message,
})

export const log = (message: any, tag: string = '') => {
    console.log(`%c${appName} - ${tag ? `${tag} ` : ''}Log`, logStyle, message)
}

export const error = (message: any, tag: string = '') => {
    console.error(
        `%c${appName} - ${tag ? `${tag} ` : ''}Error`,
        logErrorStyle,
        errorProps(message, tag)
    )
}

export const LogUtils = {
    log,
    error,
}
