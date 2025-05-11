// components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
// style
import { notSelect, profileContainer, profileTextBox } from './profile.css'
import { ProfileOption } from './ProfileOption'
import { useAuthStore } from '@/entities/user/stores/AuthStore'
/**
 * navigate 오른쪽 사용자 전용 navigate 컴포넌트
 * @returns {JsxElement}
 */
export const Profile = () => {
    const name = useAuthStore((state) => state.name)
    const department = useAuthStore((state) => state.department)

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
                    {name}
                </Text>
                <Text fontWeight="regular" className={notSelect}>
                    {department}
                </Text>
            </Box>
            <ProfileOption />
        </Box>
    )
}
