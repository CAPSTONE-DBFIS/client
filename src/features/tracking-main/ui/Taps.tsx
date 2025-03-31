import { Box } from '@/shared/ui/Box'
import * as style from './styles/taps.css'
import { Text } from '@/shared/ui/Text'
interface ITaps {
    selectedTaps: string
    onTapsChange: (view: string) => void
}
/**
 * 메인 콘텐츠 영역 중 캘린더/리스트 탭 선택
 * @param {string} selectedTaps - 활성화된 뷰
 * @param {function} onTapsChange - 뷰 변경 핸들러
 * @returns {JSX.Element}
 */
export const Taps = ({ selectedTaps, onTapsChange }: ITaps) => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={style.layout}
        >
            <Box display="flex">
                <Box
                    as={'button'}
                    className={`${style.tap} ${selectedTaps === 'calendar' ? style.selectedTap : ''}`}
                    onClick={() => onTapsChange('calendar')}
                >
                    <Text fontSize="title3" fontWeight="semibold">
                        켈린더
                    </Text>
                </Box>

                <Box
                    as={'button'}
                    className={`${style.tap} ${selectedTaps === 'list' ? style.selectedTap : ''}`}
                    onClick={() => onTapsChange('list')}
                >
                    <Text fontSize="title3" fontWeight="semibold">
                        리스트
                    </Text>
                </Box>
            </Box>
            <Box
                as={'button'}
                display="flex"
                alignItems="center"
                background={'neutral-900'}
                className={style.taskBtn}
            >
                <Text color="white" fontSize="title3" fontWeight="semibold">
                    작업 추가
                </Text>
            </Box>
        </Box>
    )
}
