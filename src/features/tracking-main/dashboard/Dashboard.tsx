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

const tasks = [
    {
        id: '1',
        title: 'OO전자 분석',
        keywords: 16,
        dataPoints: 9345,
        percentage: 25,
        startDate: '2025.03.10',
        endDate: '2025.03.25',
        tags: ['폴더블', '프리미엄 시장', '반도체', '스마트폰'],
    },
    {
        id: '2',
        title: '양자컴퓨팅 연구',
        keywords: 10,
        dataPoints: 6251,
        percentage: 85,
        startDate: '2025.02.25',
        endDate: '2025.03.15',
        tags: ['IBM', '양자암호화', '양자우위', '구글'],
    },
]

export const Dashboard = ({ activeView }: IDashboard) => {
    return (
        <Box className={style.layout}>
            {activeView === 'calendar' ? (
                // 캘린더 뷰 컴포넌트
                <Calender />
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
