import { Box } from '@/shared/ui/Box'
import * as S from './PersonalAddModal.css'
import { Text } from '@/shared/ui/Text'
import { TextInput } from '@/shared/ui/Input/TextInput'

interface IPersonaAddModal {
    newPersona: { name: string; prompt: string }
    setNewPersona: React.Dispatch<
        React.SetStateAction<{ name: string; prompt: string }>
    >
}

export const PersonaAddModal: React.FC<IPersonaAddModal> = ({
    newPersona,
    setNewPersona,
}) => {
    return (
        <Box display="flex" flexDirection="column" className={S.container}>
            <Box display="flex" flexDirection="column" style={{ gap: '10px' }}>
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '4px' }}
                >
                    <Box as={'label'} htmlFor="keyword">
                        <Text fontSize="title3" color="neutral-90">
                            이름
                        </Text>
                    </Box>
                    <TextInput
                        placeholder="챗봇 이름을 입력해주세요."
                        height="42px"
                        value={newPersona.name}
                        onChange={(e) =>
                            setNewPersona((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                    />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '4px' }}
                >
                    <Box as={'label'} htmlFor="keyword">
                        <Text fontSize="title3" color="neutral-90">
                            프롬프트
                        </Text>
                    </Box>
                    <TextInput
                        placeholder="챗봇의 성격이나 역할을 설명해주세요."
                        height="42px"
                        width="100%"
                        value={newPersona.prompt}
                        onChange={(e) =>
                            setNewPersona((prev) => ({
                                ...prev,
                                prompt: e.target.value,
                            }))
                        }
                    />
                </Box>
            </Box>
        </Box>
    )
}
