interface EventInfo {
    jsEvent: {
        clientX: number
        clientY: number
    }
}

/**
 * 마우스 위치에 따른 팝업 위치 설정
 * @param {EventInfo} info - 마우스 좌표를 포함하는 이벤트 정보
 * @returns {Object} - top, left 반환
 * @property {number} top - top 위치 계산
 * @property {number} left - left 위치 계산
 */

export const eventMouseEnter = ({ info }: { info: EventInfo }) => {
    const mouseX = info.jsEvent.clientX
    const mouseY = info.jsEvent.clientY
    const scrollY = window.scrollY
    const scrollX = window.scrollX

    const popupWidth = 250
    const popupHeight = 120
    const offsetX = 12
    const offsetY = -1320

    // 진짜 마우스 위치 기준 위치 계산
    let top = mouseY + scrollY + offsetY
    let left = mouseX + scrollX + offsetX

    // 오른쪽/아래로 넘치면 반대로 띄우기
    if (left + popupWidth > window.innerWidth + scrollX) {
        left = mouseX + scrollX - popupWidth - offsetX
    }
    if (top + popupHeight > window.innerHeight + scrollY) {
        top = mouseY + scrollY - popupHeight - offsetY
    }
    return { top, left }
}
