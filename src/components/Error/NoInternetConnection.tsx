import React from 'react'

import PageError from '.'

const NoInternetConnectionPage = () => {
    const message = 'Sem conexão com a internet'

    return <PageError message={message} />
}

export default NoInternetConnectionPage
