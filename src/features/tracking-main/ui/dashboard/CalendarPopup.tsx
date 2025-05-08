// component
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { ITask } from '../../types/task.type'
import * as style from './styles/calendarPopup.css'
import { calculatePercentage } from '../../model/calulatePercentage'
/**
 * Navigation -> UserNav -> CalendarPopup 컴포넌트
 * @returns {JsxElement}
 */

export const CalendarPopup = ({ title, startDate, endDate }: ITask) => {
    const percentage = calculatePercentage(
        new Date(startDate),
        new Date(endDate)
    )
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{
                width: '250px',
                padding: '15px 20px',
                gap: '10px',
            }}
        >
            <Text fontSize="headline" fontWeight="semibold">
                {title}
            </Text>

            <Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '4px' }}
                >
                    <Text fontSize="subHeadline" color="neutral-300">
                        {startDate} - {endDate}
                    </Text>
                    <Box className={style.progressBarContainer}>
                        <Box
                            className={style.progressBar}
                            style={{ width: `${percentage}%` }}
                        />
                    </Box>
                    <Text fontSize="subHeadline" align="right">
                        진행률 {percentage.toFixed(0)}%
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
