import { Box } from '@/shared/ui/Box'
import * as style from './styles/dashboard.css'
import { Calendar } from './Calendar'
import { List } from './List'
import { useCallback, useEffect, useState } from 'react'
import Modal from '@/shared/ui/Modal/Modal'
import { useModal } from '@/shared/lib/hooks/useModal'
import { Text } from '@/shared/ui/Text'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { useAddTask } from '../../model/useAddTask'
import Down from '@/shared/asset/icon/cheveron-down.svg?react'
import { getCalendar, getList } from '@/entities/tracking/api/tracking'
import {
    ITrackingKeyword,
    ITrackingList,
    ITrackingProject,
    ListWithDate,
} from '@/entities/tracking/type/tracking.type'
import { useTrackingState } from '@/entities/tracking/store/trackingStore'

interface IDashboard {
    activeView: string
    projects: ITrackingProject[]
    onReportSelect: (id: number) => void
}
/**
 * 메인 콘텐츠 영역 중 달력/리스트에 해당하는 콘텐츠를 보여주는 대시보드
 * @param {string} activeView - 현재 활성화된 뷰 ('calendar' 또는 'list')
 * @param {function} handleDeleteTask - 작업 삭제 핸들러
 * @param {function} openDeleteModal - 작업 삭제 재확인 모달 함수
 * @param {function} handleEditTask - 작업 수정 핸들러
 * @param {function} openEditModal - 작업 수정정 모달 함수
 *
 * @returns {JSX.Element}
 */

export const Dashboard = ({
    activeView,
    projects,
    onReportSelect,
}: IDashboard) => {
    const { selectedPeriod, isOpen, onToggle, onOptionClicked, onSubmit } =
        useAddTask()
    //캘린더 작업관리
    const [calTasks, setCalTasks] = useState<ITrackingKeyword[]>([])
    //리스트 작업관리
    const [listTasks, setListTasks] = useState<ITrackingList[]>([])

    const selectedProject = useTrackingState((state) => state.selectedProject)
    const [mergedListTasks, setMergedListTasks] = useState<ListWithDate[]>([])

    const fetchKeywords = useCallback(async () => {
        try {
            const projectId = selectedProject?.id ?? projects[0]?.id ?? 1
            const calendar = await getCalendar(projectId)

            const list = await getList(projectId)
            setCalTasks(calendar.data)
            setListTasks(list.data)
        } catch (error) {
            if (error) {
                alert('키워드 조회를 실패하였습니다.')
            }
        }
    }, [selectedProject?.id, projects])
    useEffect(() => {
        fetchKeywords()
    }, [fetchKeywords])
    useEffect(() => {
        if (listTasks.length === 0 || calTasks.length === 0) return

        const merged = listTasks.map((listTask) => {
            const calTask = calTasks.find((cal) => cal.id === listTask.id)
            return {
                ...listTask,
                startDate: calTask?.startDate ?? '',
                endDate: calTask?.endDate ?? '',
            }
        })
        setMergedListTasks(merged)
    }, [listTasks, calTasks])
    // useEffect(() => {
    //     if (tasks.length === 0) return
    //     const fetchReports = async () => {
    //         const reports: { [keywordId: number]: ITrackingReport | null } = {}
    //         await Promise.all(
    //             tasks.map(async (task) => {
    //                 try {
    //                     const reportRes = await getReport(task.id)
    //                     reports[task.id] = reportRes.data
    //                     console.log(reports[task.id])
    //                 } catch {
    //                     reports[task.id] = null
    //                 }
    //             })
    //         )
    //         setReportData(reports)
    //     }
    //     fetchReports()
    // }, [tasks])

    // 작업 추가 모달에 대한 상태
    const { modalConfig, toggleModal } = useModal()
    //삭제/수정할 작업 ID 저장
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

    // 수정 모달의 초기값 상태
    const [editEndDate, setEditEndDate] = useState<string>()

    // 작업 삭제 핸들러
    const handleDeleteTask = () => {
        if (selectedTaskId) {
            setListTasks((prev) =>
                prev.filter((task) => task.id !== selectedTaskId)
            )
            setSelectedTaskId(null) // 삭제 후 선택된 작업 ID 초기화
            toggleModal() // 모달 닫기
        }
    }

    // 작업 수정 핸들러
    const handleEeditTask = () => {
        if (selectedTaskId && editEndDate) {
            setListTasks((prev) =>
                prev.map((task) =>
                    task.id === selectedTaskId
                        ? { ...task, endDate: editEndDate }
                        : task
                )
            )
            setSelectedTaskId(null) // 수정 후 선택된 작업 ID 초기화
            toggleModal() // 모달 닫기
        }
    }

    // 삭제 확인 모달 열기
    const openDeleteModal = (id: number) => {
        setSelectedTaskId(id) // 삭제할 작업 ID 저장
        toggleModal() // 모달 열기
    }

    // 수정 모달 열기
    const openEditModal = (id: number) => {
        setSelectedTaskId(id)
        const taskToEdit = listTasks.find((task) => task.id === id)
        if (taskToEdit) {
            setEditEndDate(taskToEdit.endDate)
        }
        toggleModal() // 모달 열기
    }

    return (
        <Box className={style.layout}>
            {activeView === 'calendar' ? (
                // 캘린더 뷰 컴포넌트
                <Calendar tasks={calTasks} />
            ) : (
                // 리스트 뷰 컴포넌트
                <Box>
                    {mergedListTasks.map((task) => (
                        <List
                            key={task.id}
                            task={task}
                            handleDeleteTask={() => openDeleteModal(task.id)}
                            handleEditTask={() => openEditModal(task.id)}
                            onClick={() => onReportSelect(task.id)}
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

            {/* 수정 모달 */}
            {modalConfig.open && selectedTaskId && (
                <Modal modalConfig={modalConfig}>
                    <Box
                        as={'form'}
                        onSubmit={onSubmit}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        className={style.editModal}
                    >
                        <Box>
                            <Box style={{ paddingBottom: '15px' }}>
                                <Text fontSize="title1">작업 수정</Text>
                            </Box>
                            <Box>
                                <Box as={'label'} htmlFor="period">
                                    <Text
                                        fontSize="subHeadline"
                                        color="neutral-90"
                                    >
                                        주기 선택
                                    </Text>
                                </Box>
                                <Box style={{ position: 'relative' }}>
                                    <Box className={style.dropdownContainer}>
                                        <Box
                                            onClick={onToggle}
                                            className={style.select}
                                            display="flex"
                                            justifyContent="space-between"
                                        >
                                            <Text fontSize="body">
                                                {selectedPeriod}
                                            </Text>
                                            <Down width={15} height={15} />
                                        </Box>

                                        {isOpen && (
                                            <Box
                                                style={{ position: 'relative' }}
                                            >
                                                <Box>
                                                    {[
                                                        '일주일마다',
                                                        '2주일마다',
                                                        '1개월마다',
                                                    ].map((option) => (
                                                        <Box
                                                            as={'button'}
                                                            type="button"
                                                            key={option}
                                                            className={
                                                                style.dropdownOption
                                                            }
                                                            onClick={onOptionClicked(
                                                                option
                                                            )}
                                                        >
                                                            <Text
                                                                fontSize="body"
                                                                color={
                                                                    option ===
                                                                    selectedPeriod
                                                                        ? 'neutral-900'
                                                                        : 'neutral-100'
                                                                }
                                                            >
                                                                {option}
                                                            </Text>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Box>
                                        )}
                                        {/* 주가선택 값 받기 위한 숨긴 input필드 */}
                                        <Box
                                            as={'input'}
                                            type="hidden"
                                            name="period"
                                            value={selectedPeriod} // 선택된 기간 값
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    className={style.twoinput}
                                    display="flex"
                                    flexDirection="column"
                                    style={{ marginTop: '50px' }}
                                >
                                    <Box
                                        as={'label'}
                                        htmlFor="endtDate"
                                        style={{ marginBottom: '8px' }}
                                    >
                                        <Text
                                            fontSize="subHeadline"
                                            color="neutral-90"
                                        >
                                            종료일
                                        </Text>
                                    </Box>
                                    <TextInput
                                        type="date"
                                        name="endDate"
                                        size="small"
                                        width="100%"
                                        placeholder="날짜 범위를 선택해주세요."
                                        height="36px"
                                        value={editEndDate}
                                        onChange={(e) =>
                                            setEditEndDate(e.target.value)
                                        }
                                        required
                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            display="flex"
                            style={{ gap: '18px', width: '100%' }}
                        >
                            <Box
                                className={style.editBtn}
                                onClick={handleEeditTask}
                            >
                                <Text color="white" fontSize="title2">
                                    완료
                                </Text>
                            </Box>
                            <Box
                                className={style.editBackBtn}
                                onClick={toggleModal}
                            >
                                <Text color="teal-500" fontSize="title2">
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
