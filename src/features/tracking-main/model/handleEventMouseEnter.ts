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

    // 팝업 크기
    const popupWidth = 250
    const popupHeight = 120
    const offsetX = 0
    const offsetY = 16

    let top = mouseY + offsetY
    let left = mouseX + offsetX

    // 화면 밖으로 나가는지 확인
    if (mouseX + offsetX + popupWidth > window.innerWidth) {
        left = mouseX - popupWidth - offsetX
    }

    if (mouseY + offsetY + popupHeight > window.innerHeight) {
        top = mouseY - popupHeight - offsetY
    }

    return { top, left }
}
