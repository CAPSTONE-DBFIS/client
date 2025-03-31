import { Box } from '@/shared/ui/Box'
import * as style from './styles/Dashboard.css'
import { Calender } from './Calender'
import { List } from './List'
interface IDashboard {
    activeView: string
}

/**
 * 메인 콘텐츠 영역 중 달력/리스트에 해당하는 콘텐츠를 보여주는 대시보드
 * @param {string} activeView - 현재 활성화된 뷰 ('calendar' 또는 'list')
 * @returns {JSX.Element}
 */
export const Dashboard = ({ activeView }: IDashboard) => {
    return (
        <Box className={style.layout}>
            {activeView === 'calendar' ? (
                // 캘린더 뷰 컴포넌트
                <Calender />
            ) : (
                // 리스트 뷰 컴포넌트
                <List />
            )}
        </Box>
    )
}
