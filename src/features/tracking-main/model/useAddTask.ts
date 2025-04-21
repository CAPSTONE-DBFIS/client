import React, { useState } from 'react'

/**
 * @param {string} inputValue - 태그 입력 필드의 현재 값
 * @param {function} handleInputChange - 입력 필드 값 변경 핸들러
 * @param {boolean} isOpen - 드롭다운 열림/닫힘 상태
 * @param {function} onToggle - 드롭다운 열림/닫힘 상태를 토글하는 함수
 * @param {function} onOptionClicked - 드롭다운 옵션 선택 핸들러
 * @param {string} selectedPeriod - 선택된 기간 (드롭다운 값)
 * @param {function} onSubmit - 폼 제출 핸들러
 * @returns {Object}
 */
export const useAddTask = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('일주일마다 (기본)') //기간 선택
    const [isOpen, setIsOpen] = useState<boolean>(false) // 드롭다운 열림/닫힘 상태
    const [inputValue, setInputValue] = useState('') // 태그 입력 필드 값

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() // 기본 폼 제출 동작 방지

        const formData = new FormData(event.currentTarget)
        const startDate = formData.get('startDate') as string
        const endDate = formData.get('endDate') as string

        if (startDate && endDate) {
            //시작일이 종료일보다 큰 경우 메시지 출력
            if (new Date(startDate) > new Date(endDate)) {
                alert('종료날이 시작날보다 앞서 있습니다.')
                return
            }
        }

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value) // 입력 값 업데이트
    }

    const onToggle = () => setIsOpen(!isOpen) //드롭다운 열림/닫힘 함수

    const onOptionClicked = (value: string) => () => {
        setSelectedPeriod(value) //선택된 옵션
        setIsOpen(false) //드롭다운 닫기
    }

    return {
        inputValue,
        selectedPeriod,
        isOpen,
        handleInputChange,
        onToggle,
        onOptionClicked,
        onSubmit,
    }
}
