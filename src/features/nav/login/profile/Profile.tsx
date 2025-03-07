// components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
// style
import { notSelect, profileContainer, profileTextBox } from './profile.css'
import { ProfileOption } from './ProfileOption'
/**
 * navigate 오른쪽 사용자 전용 navigate 컴포넌트
 * @returns {JsxElement}
 */
export const Profile = () => {
    return (
        <Box display="flex" alignItems="center" className={profileContainer}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                className={profileTextBox}
            >
                <Text
                    fontSize="headline"
                    fontWeight="bold"
                    className={notSelect}
                >
                    김세현
                </Text>
                <Text fontWeight="regular" className={notSelect}>
                    트렌드 챗봇 설계팀
                </Text>
            </Box>
            <ProfileOption />
        </Box>
    )
}
