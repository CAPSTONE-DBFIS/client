import { Box } from '@/shared/ui/Box'
import * as style from './styles/dashboard.css'
import { Calendar } from './Calendar'
import { List } from './List'
import { tasks } from '../../const/tasks'
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
                <Calendar />
            ) : (
                // 리스트 뷰 컴포넌트
                <Box>
                    {tasks.map((task) => (
                        <List key={task.id} task={task} />
                    ))}
                </Box>
            )}
        </Box>
    )
}
