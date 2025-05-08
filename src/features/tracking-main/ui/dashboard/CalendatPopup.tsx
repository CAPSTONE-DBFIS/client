// component
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
// style
import { iIconTypes } from './styles/calendarPopup.css'

/**
 * Navigation -> UserNav -> CalendarPopup 컴포넌트
 * @returns {JsxElement}
 */

interface CalendarPopupProps {
    title: string
}

export const CalendarPopup: React.FC<CalendarPopupProps> = ({ title }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{
                width: '250px',
                padding: '10px 20px',
                gap: '10px',
            }}
        >
            <Text fontSize="headline" fontWeight="semibold">
                트렌드 리마인더
            </Text>
            <Box>
                <Box display="flex" alignItems="center" style={{ gap: '5px' }}>
                    <Box as={'i'} className={iIconTypes.end} />
                </Box>
                <Box display="flex" flexDirection="column">
                    <Text fontSize="subHeadline" color="neutral-900">
                        {title}
                    </Text>
                    <Text fontSize="subHeadline" color="neutral-300">
                        2024.12.31 - 2024.12.31
                    </Text>
                </Box>
            </Box>
            <Box>
                <Box display="flex" alignItems="center" style={{ gap: '5px' }}>
                    <Box as={'i'} className={iIconTypes.now} />
                    <Text fontSize="subHeadline" color="neutral-80">
                        현재
                    </Text>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Text fontSize="subHeadline" color="neutral-900">
                        B 분석
                    </Text>
                    <Text fontSize="subHeadline" color="neutral-300">
                        2024.12.31 - 2024.12.31
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
