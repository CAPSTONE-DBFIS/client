import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { route } from './routes'
import { ProtectedRoute } from './ProtectedRoute'
// layout
import { Layout } from '../layout'
// pages
import {
    Auth,
    Home,
    Analysis,
    Tracking,
    Insight,
    Management,
} from '@/pages'
import { useAuthStore } from '@/entities/user/stores/AuthStore'
// v7 부터 변경될 내용으로 추후 해결 필요
export default function AppRouter() {
    const isLoggined = useAuthStore((state) => state.isLoggedIn)
    return (
        <BrowserRouter future={{ v7_startTransition: false }}>
            <Routes>
                <Route path={route.HOME} element={<Layout />}>
                    {/* 기본 홈 */}
                    <Route index element={<Home />} />
                    {/* 분석 */}
                    <Route
                        path={route.ANALYSIS}
                        element={
                            <ProtectedRoute isAuth={isLoggined}>
                                <Analysis />
                            </ProtectedRoute>
                        }
                    />
                    {/* 추적 */}
                    <Route
                        path={route.TRACKING}
                        element={
                            <ProtectedRoute isAuth={isLoggined}>
                                <Tracking />
                            </ProtectedRoute>
                        }
                    />
                    {/* 인사이트 */}
                    <Route
                        path={route.INSIGHT}
                        element={
                            <ProtectedRoute isAuth={isLoggined}>
                                <Insight />
                            </ProtectedRoute>
                        }
                    />
                    {/* 관리 */}
                    <Route
                        path={route.MANAGEMENT}
                        element={
                            <ProtectedRoute isAuth={isLoggined}>
                                <Management />
                            </ProtectedRoute>
                        }
                    />
                    <Route path={route.AUTH} element={<Auth />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
