// components
import { Header } from '@/widgets/header'
// outlet
import { Outlet } from 'react-router-dom'

/**
 * layout 컴포넌트 - 시멘틱 태그
 * @returns {JsxElement}
 */
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
