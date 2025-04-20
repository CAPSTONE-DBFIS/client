//components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
//css
import * as style from './styles/list.css'
//icon
import Menu from '@/shared/asset/icon/dots-vertical.svg?react'
import { useState } from 'react'
interface ITaskdata {
    id: string
    title: string
    keywords: number
    dataPoints: number
    percentage: number
    startDate: string
    endDate: string
    tags: string[]
}
interface IListProps {
    task: ITaskdata
    handleDeleteTask: (id: string) => void // 삭제 함수
}
/**
 * 대시보드 중 리스트
 * @param {string} id - 작업 고유 식별자
 * @param {string} title - 제목
 * @param {number} keywords - 키워드(=태그) 수
 * @param {number} dataPoints - 데이터 포인트
 * @param {number} percentage - 진행률(%)
 * @param {string} startDate - 시작 날짜
 * @param {string} endDate - 예상 종료 날짜
 * @param {string[]} tags - 태그
 * @param {function} handleDeleteTask - 작업삭제핸들러
 *
 * @returns {JSX.Element}
 */

export const List: React.FC<IListProps> = ({ task, handleDeleteTask }) => {
    // 메뉴 열림, 닫힘 상태
    const [menuOpen, setMenuOpen] = useState(false)

    // 메뉴 클릭시 상태 변경경
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    // 작업 수정 핸들러
    const handleEditTitle = () => {
        console.log('작업 수정')
        setMenuOpen(false)
    }

    // 작업 삭제 핸들러
    const handleDelete = () => {
        handleDeleteTask(task.id) // 삭제 함수 호출
        setMenuOpen(false) // 메뉴 닫기
    }

    return (
        <Box style={{ position: 'relative' }}>
            <Box className={style.layout} background={'white'}>
                {/* 헤더: 제목 및 메뉴 버튼 */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                    className={style.header}
                >
                    <Text fontSize="title2" fontWeight="medium">
                        {task.title}
                    </Text>
                    <Menu onClick={toggleMenu} />
                </Box>

                <Box display="flex" justifyContent="center">
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        className={style.mainData}
                    >
                        <Text fontSize="title1">{task.keywords}</Text>
                        <Text fontSize="body" color="neutral-90">
                            연관 키워드
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        className={style.mainData}
                    >
                        <Text fontSize="title1">
                            {/* 숫자 구분자 */}
                            {task.dataPoints.toLocaleString()}{' '}
                        </Text>
                        <Text fontSize="body" color="neutral-90">
                            데이터 포인트
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        className={style.mainData}
                    >
                        <Text fontSize="title1">{task.percentage}%</Text>
                        <Text fontSize="body" color="neutral-90">
                            진행률
                        </Text>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '16px', margin: '0 24px' }}
                >
                    <Text fontSize="headline" fontWeight="medium">
                        진행상황
                    </Text>

                    <Box>
                        <Box className={style.progressBarContainer}>
                            <Box
                                className={style.progressBar}
                                style={{ width: `${task.percentage}%` }}
                            />
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            style={{ marginTop: '12px' }}
                        >
                            <Text
                                fontSize="headline"
                                fontWeight="bold"
                                color="neutral-90"
                            >
                                시작: {task.startDate}
                            </Text>
                            <Text
                                fontSize="headline"
                                fontWeight="bold"
                                color="neutral-90"
                            >
                                예상 완료: {task.endDate}
                            </Text>
                        </Box>
                    </Box>

                    <Box>
                        {task.tags.map((tag) => (
                            <Text key={tag} className={style.tag}>
                                {tag}
                            </Text>
                        ))}
                    </Box>
                </Box>
            </Box>
            {/* 메뉴 */}
            <Box
                className={menuOpen ? style.showMenu : style.hideMenu}
                as={'ul'}
            >
                <Box
                    as={'li'}
                    className={style.listItem}
                    onClick={handleDelete}
                >
                    <Text fontSize="title3" className={style.listItemText}>
                        작업 삭제
                    </Text>
                </Box>
                <Box
                    as={'li'}
                    className={style.listItem}
                    onClick={handleEditTitle}
                >
                    <Text fontSize="title3" className={style.listItemText}>
                        작업 수정
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
