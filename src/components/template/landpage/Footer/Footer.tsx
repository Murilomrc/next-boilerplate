import type { FC, HTMLAttributes, ReactNode } from 'react'

export type FooterProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

const Footer: FC<FooterProps> = (props) => {
    const { children } = props

    const elementProps = props as HTMLAttributes<HTMLDivElement>

    return <footer {...elementProps}>{children}</footer>
}

export default Footer
