import { Component, ErrorInfo, ReactNode } from 'react'

import { LogUtils } from '@/commons/utils/log.util'
import FrontErrorPage from '../Error/FrontError'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
    error?: string | Error | undefined
    errorInfo?: ErrorInfo | undefined
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error: error?.stack }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        LogUtils.error(`${error}`)
    }

    public render() {
        if (this.state.hasError) return <FrontErrorPage />
        return this.props.children
    }
}

export default ErrorBoundary
