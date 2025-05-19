import React, { useState } from 'react'
//components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { TextInput } from '@/shared/ui/Input/TextInput'
//model
import { useAddTask } from '../model/useAddTask'
//css
import * as style from './styles/addtask.css'
import { colors } from '@/app/token'
// svg
import Down from '@/shared/asset/icon/cheveron-down.svg?react'
import { postKeyword } from '@/entities/tracking/api/tracking'
import { useTrackingStore } from '@/entities/tracking/store/trackingStore'

interface IAddTask {
    onClose: () => void
}

/**
 * 분석 작업을 추가하기 위한 모달창
 * @param {function} onClose - 모달 창을 닫는 함수
 * @returns {React.ReactElement}
 *
 * @remarks
 * - 키워드를 입력해해 분석시 사용될 키워드(태그)를 추가할 수 있습니다.
 * - 보고서 생성 주기를 선택하고 시작일과 종료일을 설정할 수 있습니다.
 */

export const AddTask: React.FC<IAddTask> = ({ onClose }) => {
    const {
        inputValue,
        selectedPeriod,
        isOpen,
        handleInputChange,
        onToggle,
        onOptionClicked,
    } = useAddTask()
    const selectedProject = useTrackingStore((state) => state.selectedProject)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const trackingInterval = (period: string) => {
        switch (period) {
            case '일주일마다':
                return 7
            case '2주일마다':
                return 14
            case '1개월마다':
                return 30
            default:
                return 7
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await postKeyword({
                keyword: inputValue,
                startDate,
                endDate,
                trackingInterval: trackingInterval(selectedPeriod),
                projectId: selectedProject?.id ?? 0,
            })
            onClose()
        } catch (error) {
            alert(
                '작업 추가에 실패했습니다: ' + (error as Error)?.message || ''
            )
        }
    }

    return (
        <Box background={'white'} className={style.layout}>
            <Box as={'header'} className={style.header}>
                <Text fontSize="title1" fontWeight="semibold">
                    트렌드 작업 추가
                </Text>
            </Box>
            <Box as={'form'} onSubmit={handleSubmit}>
                {/* 키워드설정 */}
                <Box className={style.section}>
                    <Box display="flex" alignItems="center">
                        <Text
                            className={style.number}
                            color={'white'}
                            fontSize="title2"
                        >
                            1
                        </Text>
                        <Text fontSize="title1">분석할 키워드 설정</Text>
                    </Box>

                    <Box
                        className={style.input}
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '8px' }}
                    >
                        <Box as={'label'} htmlFor="keyword">
                            <Text fontSize="title2" color="neutral-90">
                                트렌드 키워드 입력
                            </Text>
                        </Box>

                        <Box
                            as={'input'}
                            className={style.keywoard}
                            placeholder="분석할 키워드를 입력하세요."
                            type="text"
                            name="keyword"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </Box>
                </Box>

                {/* 주기설정 */}
                <Box className={style.section}>
                    <Box display="flex" alignItems="center">
                        <Text
                            className={style.number}
                            color={'white'}
                            fontSize="title2"
                        >
                            2
                        </Text>
                        <Text fontSize="title1">보고서 생성 주기 설정</Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '12px' }}
                    >
                        <Box
                            className={style.input}
                            display="flex"
                            flexDirection="column"
                            style={{ gap: '8px' }}
                        >
                            <Box as={'label'} htmlFor="period">
                                <Text fontSize="title2" color="neutral-90">
                                    주기 선택
                                </Text>
                            </Box>
                            <Box style={{ position: 'relative' }}>
                                <Box>
                                    <Box className={style.dropdownContainer}>
                                        <Box
                                            onClick={onToggle}
                                            className={style.select}
                                            display="flex"
                                            justifyContent="space-between"
                                        >
                                            <Text fontSize="title2">
                                                {selectedPeriod}
                                            </Text>
                                            <Down />
                                        </Box>

                                        {isOpen && (
                                            <Box>
                                                {[
                                                    '일주일마다',
                                                    '2주일마다',
                                                    '1개월마다',
                                                ].map((option) => (
                                                    <Box
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
                                                            fontSize="title2"
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
                                        )}
                                    </Box>
                                </Box>

                                {/* 주가선택 값 받기 위한 숨긴 input필드 */}
                                <Box
                                    as={'input'}
                                    type="hidden"
                                    name="period"
                                    value={selectedPeriod} // 선택된 기간 값
                                />
                            </Box>

                            <Box
                                display="flex"
                                style={{ gap: '12px' }}
                                width={'100%'}
                            >
                                <Box
                                    className={style.twoinput}
                                    display="flex"
                                    flexDirection="column"
                                    style={{ gap: '8px' }}
                                >
                                    <Box as={'label'} htmlFor="startDate">
                                        <Text
                                            fontSize="title2"
                                            color="neutral-90"
                                        >
                                            시작일
                                        </Text>
                                    </Box>
                                    <TextInput
                                        type="date"
                                        name="startDate"
                                        size="large"
                                        width="100%"
                                        placeholder="날짜 범위를 선택해주세요."
                                        height="58px"
                                        required
                                        value={startDate}
                                        onChange={(e) =>
                                            setStartDate(e.target.value)
                                        }
                                    />
                                </Box>
                                <Box
                                    className={style.twoinput}
                                    display="flex"
                                    flexDirection="column"
                                    style={{ gap: '8px' }}
                                >
                                    <Box as={'label'} htmlFor="endtDate">
                                        <Text
                                            fontSize="title2"
                                            color="neutral-90"
                                        >
                                            종료일
                                        </Text>
                                    </Box>
                                    <TextInput
                                        type="date"
                                        name="endDate"
                                        size="large"
                                        width="100%"
                                        placeholder="날짜 범위를 선택해주세요."
                                        height="58px"
                                        required
                                        value={endDate}
                                        onChange={(e) =>
                                            setEndDate(e.target.value)
                                        }
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    style={{
                        padding: '24px',
                        borderTop: `2px solid ${colors['neutral-20']}`,
                    }}
                >
                    <Box onClick={onClose} as={'button'} className={style.btn}>
                        <Text fontSize="title2">취소</Text>
                    </Box>
                    <Box
                        as={'button'}
                        type="submit"
                        className={style.btn}
                        background={'neutral-900'}
                    >
                        <Text fontSize="title2" color="white">
                            작업 시작
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
