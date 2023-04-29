import { FC, ReactNode, HTMLAttributes } from 'react'

type AsideSide = 'left' | 'right'

export type AsideProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
    align?: AsideSide
}

const Aside: FC<AsideProps> = (props) => {
    const { children, align, className } = props

    const alignSide = align === 'left' ? 'order-first' : ''
    const elementClassName = [alignSide, className].join(' ')
    const elementProps = props as HTMLAttributes<HTMLDivElement>

    return (
        <aside {...elementProps} className={elementClassName}>
            {children}
        </aside>
    )
}

export default Aside
