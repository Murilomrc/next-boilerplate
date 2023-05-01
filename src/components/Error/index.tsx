import React, { FunctionComponent } from 'react'

interface ButtonProps {
    label: string
    onClick: () => void
}

interface PageErrorProps {
    message: string
    statusCode?: number
    details?: string
    button?: ButtonProps
}

const PageError: FunctionComponent<PageErrorProps> = (props) => {
    const { message, statusCode, details, button } = props

    const statusCodeMessage = statusCode ? `Erro ${statusCode} - ` : ''
    const pageMessage = `${statusCodeMessage}${message}`

    return (
        <div>
            <div className="text-center pt50-xs pb50-xs">
                <h2>{pageMessage}</h2>
                {details && <p>{details}</p>}
                <br />
                {button && (
                    <button onClick={button.onClick}>{button.label}</button>
                )}
            </div>
        </div>
    )
}

export default PageError
