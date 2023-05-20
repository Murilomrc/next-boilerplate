import type { FC, HTMLAttributes, ReactNode } from 'react'

import SectionTitle from './Title'

type SectionAs = 'section' | 'div' | 'main'

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode
    as?: SectionAs
}

export type SectionCompoundProps = {
    Title: typeof SectionTitle
}

const Section: FC<SectionProps> & SectionCompoundProps = (props) => {
    const { children, as = 'section' } = props

    const SectionElement = as
    const elementProps = props as HTMLAttributes<HTMLDivElement>

    return (
        <SectionElement className="py-[6vh]" {...elementProps}>
            <div className="container mx-auto px-4">{children}</div>
        </SectionElement>
    )
}
Section.Title = SectionTitle

Section.defaultProps = {
    as: 'section',
}

export default Section
