import { HeadingValues, typography } from '@/values/design-system/tokens'
import type { FC, HTMLAttributes, ReactNode } from 'react'

type TitleAs = HeadingValues

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
    const test = ''

    return (
        <TitleElement {...elementProps} className={className}>
            {title}
        </TitleElement>
    )
}

export default Title
