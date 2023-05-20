import type { FC, HTMLAttributes, ReactNode } from 'react'

export type ContentProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

const Content: FC<ContentProps> = (props) => {
    const { children, className } = props

    const elementClassName = ['flex-1', className].join(' ')
    const elementProps = props as HTMLAttributes<HTMLDivElement>

    return (
        <div {...elementProps} className={elementClassName}>
            {children}
        </div>
    )
}

export default Content
