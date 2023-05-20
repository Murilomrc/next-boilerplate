import type { FC } from 'react'

import Title, { TitleProps } from '../../Title'

export type SectionTitleProps = TitleProps

const SectionTitle: FC<SectionTitleProps> = (props) => {
    const { children, as, text } = props

    const title = text || children
    const elementProps = props as TitleProps

    return (
        <Title {...elementProps} as={as}>
            {title}
        </Title>
    )
}

SectionTitle.defaultProps = {
    as: 'h2',
}

export default SectionTitle
