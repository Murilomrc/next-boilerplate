import React from 'react'

import PageError from '.'

const NoCorrectConfigurationPage = () => {
    const message =
        'Está página não possui as configurações necessárias para funcionar'

    return <PageError message={message} />
}

export default NoCorrectConfigurationPage
