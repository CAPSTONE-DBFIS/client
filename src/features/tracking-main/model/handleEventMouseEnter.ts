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
    const offsetX = 250

    const offsetY = -1320

    // 초기 위치 계산
    let top = mouseY - popupHeight + offsetY
    let left = mouseX - popupWidth + offsetX

    // 화면 크기와 스크롤을 반영하여 위치 조정
    const viewportWidth = window.innerWidth + scrollX
    const viewportHeight = window.innerHeight + scrollY + offsetY

    // 오른쪽으로 넘칠 경우
    if (left + popupWidth > viewportWidth) {
        left = mouseX - offsetX
    }
    // 왼쪽으로 넘칠 경우
    if (left < scrollX) {
        left = mouseX + offsetX
    }

    // 아래로 넘칠 경우
    if (top + popupHeight > viewportHeight) {
        top = mouseY - popupHeight - offsetY
    }
    // 위로 넘칠 경우
    if (top < scrollY) {
        top = mouseY + offsetY
    }

    return { top, left }
}
