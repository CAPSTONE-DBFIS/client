import { Box } from '@/shared/ui/Box'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import * as S from './AddChat.css'
import { TextInput } from '@/shared/ui/Input/TextInput'

export const AddChat = ({ hideModal }: { hideModal: () => void }) => {
    return (
        <Box className={S.container}>
            <Text fontSize="title1">채팅 추가</Text>
            <Box as={'label'} className={S.label}>
                <Text>Chat title</Text>
                <TextInput size="medium" placeholder="채팅 내용 입력..." />
            </Box>
            <Box display="flex" style={{ gap: '24px' }}>
                <Button size="medium" type="primary" width="150px">
                    완료
                </Button>
                <Button
                    size="medium"
                    type="tertiary"
                    width="150px"
                    onClickFunc={hideModal}
                >
                    취소
                </Button>
            </Box>
        </Box>
    )
}
