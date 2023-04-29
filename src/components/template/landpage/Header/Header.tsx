import { FC, ReactNode, HTMLAttributes } from 'react'

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

const Header: FC<HeaderProps> = (props) => {
    const { children } = props

    const elementProps = props as HTMLAttributes<HTMLDivElement>

    return <header {...elementProps}>{children}</header>
}

export default Header
