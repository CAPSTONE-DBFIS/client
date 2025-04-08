import { Box } from '@/shared/ui/Box'
import * as style from './styles/dashboard.css'
import { Calendar } from './Calendar'
import { List } from './List'
import { tasks } from '../../const/tasks'
import { useState } from 'react'
import Modal from '@/shared/ui/Modal/Modal'
import { useModal } from '@/shared/lib/hooks/useModal'
import { Text } from '@/shared/ui/Text'
interface IDashboard {
    activeView: string
}

/**
 * 메인 콘텐츠 영역 중 달력/리스트에 해당하는 콘텐츠를 보여주는 대시보드
 * @param {string} activeView - 현재 활성화된 뷰 ('calendar' 또는 'list')
 * @returns {JSX.Element}
 */

export const Dashboard = ({ activeView }: IDashboard) => {
    // 작업들 상태 관리
    const [taskArray, setTaskArray] = useState(tasks)
    // 작업 추가 모달에 대한 상태
    const { modalConfig, toggleModal } = useModal()
    //삭제할 작업 ID 저장
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)

    // 작업 삭제 핸들러
    const handleDeleteTask = () => {
        if (selectedTaskId) {
            setTaskArray((prev) =>
                prev.filter((task) => task.id !== selectedTaskId)
            )
            setSelectedTaskId(null) // 삭제 후 선택된 작업 ID 초기화
            toggleModal() // 모달 닫기
        }
    }

    // 삭제 확인 모달 열기
    const openDeleteModal = (id: string) => {
        setSelectedTaskId(id) // 삭제할 작업 ID 저장
        toggleModal() // 모달 열기
    }
    return (
        <Box className={style.layout}>
            {activeView === 'calendar' ? (
                // 캘린더 뷰 컴포넌트
                <Calendar />
            ) : (
                // 리스트 뷰 컴포넌트
                <Box>
                    {taskArray.map((task) => (
                        <List
                            key={task.id}
                            task={task}
                            handleDeleteTask={() => openDeleteModal(task.id)}
                        />
                    ))}
                </Box>
            )}

            {/* 삭제 확인 모달 */}
            {modalConfig.open && (
                <Modal modalConfig={modalConfig}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        className={style.deleteModal}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            style={{ gap: '10px' }}
                        >
                            <Text fontSize="title1">
                                정말 작업을 삭제하시겠습니까?
                            </Text>
                            <Text fontSize="title3" color="neutral-200">
                                삭제 후 되돌릴 수 없습니다.
                            </Text>
                        </Box>

                        <Box
                            display="flex"
                            style={{ gap: '18px', width: '100%' }}
                        >
                            <Box
                                className={style.delBtn}
                                onClick={handleDeleteTask}
                            >
                                <Text color="red-300" fontSize="title2">
                                    삭제
                                </Text>
                            </Box>
                            <Box
                                className={style.backBtn}
                                onClick={toggleModal}
                            >
                                <Text color="white" fontSize="title2">
                                    취소
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            )}
        </Box>
    )
}
