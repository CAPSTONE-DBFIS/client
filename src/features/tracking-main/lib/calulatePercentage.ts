/**
 * 시작 날짜와 끝 날짜를 기준으로 진행률 계산
 * @param {Date} startDate - 시작 날짜
 * @param {Date | null} endDate - 끝 날짜
 * @returns {number}
 */
export const calculatePercentage = (
    startDate: Date,
    endDate: Date | null
): number => {
    if (!endDate) return 0

    const currentDate = new Date()
    const totalDuration = endDate.getTime() - startDate.getTime()
    const elapsedDuration = currentDate.getTime() - startDate.getTime()

    return Math.max(0, Math.min(100, (elapsedDuration / totalDuration) * 100))
}
