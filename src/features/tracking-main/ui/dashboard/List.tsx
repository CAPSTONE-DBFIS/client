//components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
//css
import * as style from './styles/list.css'
//icon
import Menu from '@/shared/asset/icon/dots-vertical.svg?react'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
import { ListWithDate } from '@/entities/tracking/type/tracking.type'
import { calculatePercentage } from '../../lib/calulatePercentage'

interface IListProps {
    task: ListWithDate
    handleDeleteTask: (id: number) => void // 삭제 함수
    handleEditTask: (id: number) => void // 수정 함수
    onClick: () => void // 리스트 클릭 이벤트
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
 * @param {function} handleClickOutside - 메뉴 외부 클릭감지
 *
 * @returns {JSX.Element}
 */

export const List: React.FC<IListProps> = ({
    task,
    handleDeleteTask,
    handleEditTask,
    onClick,
}) => {
    // 메뉴 열림, 닫힘 상태
    const [menuOpen, setMenuOpen] = useState(false)
    // 메뉴 영역 감지용 ref
    const menuRef = useRef<HTMLDivElement>(null)
    const percentage = calculatePercentage(
        new Date(task.startDate),
        new Date(task.endDate)
    )
    useClickOutside(menuRef, () => setMenuOpen(false))

    // 메뉴 클릭시 상태 변경
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    // 작업 수정 핸들러
    const handleEdit = () => {
        handleEditTask(task.id)
        setMenuOpen(false)
    }

    // 작업 삭제 핸들러
    const handleDelete = () => {
        handleDeleteTask(task.id) // 삭제 함수 호출
        setMenuOpen(false) // 메뉴 닫기
    }

    return (
        <Box style={{ position: 'relative', zIndex: '0' }} onClick={onClick}>
            <Box className={style.layout} background={'white'}>
                {/* 헤더: 제목 및 메뉴 버튼 */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                    className={style.header}
                >
                    <Text fontSize="title2" fontWeight="medium">
                        {task.keyword}
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
                        <Text fontSize="title1">{task.createdOrder}</Text>
                        <Text fontSize="body" color="neutral-90">
                            생성 보고서
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
                            {task.articleCountReport}{' '}
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
                        <Text fontSize="title1">{Math.floor(percentage)}%</Text>
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
                                style={{ width: `${percentage}%` }}
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
                </Box>
            </Box>
            {/* 메뉴 */}
            <Box
                ref={menuRef}
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
                <Box as={'li'} className={style.listItem} onClick={handleEdit}>
                    <Text fontSize="title3" className={style.listItemText}>
                        작업 수정
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
