import type { FC, HTMLAttributes, ReactNode } from 'react'

export type TemplateContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

const TemplateContainer: FC<TemplateContainerProps> = (props) => {
    const { children, className } = props

    const elementClassName = [
        'body min-h-screen flex flex-col',
        className,
    ].join(' ')
    const elementProps = props as HTMLAttributes<HTMLDivElement>

    return (
        <div className={elementClassName} {...elementProps}>
            {children}
        </div>
    )
}

TemplateContainer.defaultProps = {
    className: '',
}

export default TemplateContainer
