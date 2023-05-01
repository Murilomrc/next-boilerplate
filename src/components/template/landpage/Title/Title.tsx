import { typography } from '@/values/design-system/tokens.value'
import { FC, ReactNode, HTMLAttributes } from 'react'

type TitleAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TitleProps = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode
    text?: string
    as?: TitleAs
}

const Title: FC<TitleProps> = (props) => {
    const { children, as = 'h1', text } = props

    const className = [typography.heading[as], props.className].join(' ')
    const title = text || children
    const TitleElement = as
    const elementProps = props as HTMLAttributes<HTMLDivElement>

    return (
        <TitleElement {...elementProps} className={className}>
            {title}
        </TitleElement>
    )
}

export default Title
