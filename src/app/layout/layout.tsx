import Header from '@/widgets/header/Header'
import { Outlet } from 'react-router-dom'

export function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}
