import React from 'react'

import PageError from '.'

const FrontErrorPage = () => {
    const message = 'Ops! Algo deu errado.'
    const details =
        'Por favor, entre em contato com a administração do sistema para reportar o problema.'

    return <PageError message={message} details={details} />
}

export default FrontErrorPage
