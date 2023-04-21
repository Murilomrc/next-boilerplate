import { FC, ReactNode } from 'react'
import NextLink from 'next/link'

const NextLinkProps = typeof NextLink

export type LinkProps = {
    href: string
    children: ReactNode
}

const Link: FC<LinkProps> = (props) => {
    const { href, children, ...rest } = props
    return (
        <NextLink href={href} passHref>
            <a {...rest}>{children}</a>
        </NextLink>
    )
}

export default Link
