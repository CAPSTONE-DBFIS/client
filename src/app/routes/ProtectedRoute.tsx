import { Navigate } from 'react-router-dom'

interface IProtectedRoute {
    children: React.ReactNode
    isAuth: boolean
}
export const ProtectedRoute: React.FC<IProtectedRoute> = ({
    children,
    isAuth,
}) => {
    if (!isAuth) return <Navigate to={'/'} replace={true} />
    return children
}
