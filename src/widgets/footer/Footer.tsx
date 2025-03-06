import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { footerColumn, footerContainer, footerWrapper } from './footer.css'

export const Footer = () => {
    return (
        <Box
            as="footer"
            background="neutral-10"
            display="flex"
            flexDirection="column"
            justifyContent='center'
            alignItems="center"
            className={footerContainer}
        >
            <Box
                className={footerWrapper}
                display="flex"
                flexDirection="column"
            >
                <Text fontSize="logo" fontWeight="bold" color="teal-200">
                    TRENDB
                </Text>
                <Box className={footerColumn}>
                    <Text fontSize="team" color="neutral-60">
                        Team.개발세발
                    </Text>
                    <Text fontSize="subHeadline" color="neutral-60">
                        고객센터 | 010-8934-6170
                    </Text>
                    <Text fontSize="subHeadline" color="neutral-60">
                        메일 | rla6170@hanyang.ac.kr
                    </Text>
                </Box>
                <Box className={footerColumn}>
                    <Text fontSize="subHeadline" color="neutral-60">
                        이용 약관
                    </Text>
                    <Text fontSize="subHeadline" color="neutral-60">
                        개인정보처리방침
                    </Text>
                    <Text fontSize="subHeadline" color="neutral-60">
                        문의하기
                    </Text>
                </Box>
                <Text fontSize="subHeadline" color="neutral-60">
                    ©2025 TRENDB. All rights reserved.
                </Text>
            </Box>
        </Box>
    )
}
