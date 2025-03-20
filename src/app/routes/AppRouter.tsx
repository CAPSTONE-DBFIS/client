import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { route } from './routes'
import { ProtectedRoute } from './ProtectedRoute'
// layout
import { Layout } from '../layout'
// pages
import { Home } from '@/pages/home'
import { Analysis } from '@/pages/analysis'
import { Tracking } from '@/pages/tracking'
import { Insight } from '@/pages/insight'
import { Management } from '@/pages/management'
import { Community } from '@/pages/community'
import { Auth } from '@/pages/auth/Auth'

// v7 부터 변경될 내용으로 추후 해결 필요
export default function AppRouter() {
    const isAuth = true
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
                            <ProtectedRoute isAuth={isAuth}>
                                <Analysis />
                            </ProtectedRoute>
                        }
                    />
                    {/* 추적 */}
                    <Route
                        path={route.TRACKING}
                        element={
                            <ProtectedRoute isAuth={isAuth}>
                                <Tracking />
                            </ProtectedRoute>
                        }
                    />
                    {/* 인사이트 */}
                    <Route
                        path={route.INSIGHT}
                        element={
                            <ProtectedRoute isAuth={isAuth}>
                                <Insight />
                            </ProtectedRoute>
                        }
                    />
                    {/* 커뮤니티 */}
                    <Route
                        path={route.COMMUNITY}
                        element={
                            <ProtectedRoute isAuth={isAuth}>
                                <Community />
                            </ProtectedRoute>
                        }
                    />
                    {/* 관리 */}
                    <Route
                        path={route.MANAGEMENT}
                        element={
                            <ProtectedRoute isAuth={isAuth}>
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
