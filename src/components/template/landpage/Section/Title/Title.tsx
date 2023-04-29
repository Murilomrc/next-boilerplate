import { FC } from 'react'

import Title, { TitleProps } from '../../Title'

export type SectionTitleProps = TitleProps

const SectionTitle: FC<SectionTitleProps> = (props) => {
    const { children, as = 'h2', text } = props

    const title = text || children
    const elementProps = props as TitleProps

    return (
        <Title {...elementProps} as={as}>
            {title}
        </Title>
    )
}

export default SectionTitle
