import { FC, ReactNode, HTMLAttributes } from 'react'

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

const Container: FC<ContainerProps> = (props) => {
    const { children, className } = props

    const elementClassName = [
        'flex-1 flex flex-col sm:flex-row',
        className,
    ].join(' ')
    const elementProps = props as HTMLAttributes<HTMLDivElement>

    return (
        <div {...elementProps} className={elementClassName}>
            {children}
        </div>
    )
}

export default Container
