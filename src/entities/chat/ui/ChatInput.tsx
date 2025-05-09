import { Box } from '@/shared/ui/Box'
import * as S from './Chat.css'
import Send from '@/shared/asset/icon/paper-airplane.svg?react'
import FileIcon from '@/shared/asset/icon/paper-clip.svg?react'
import { useId, useState } from 'react'
import { Text } from '@/shared/ui/Text'
import { CustomSelect } from '@/entities/chat/ui/Select'
import { useAuthStore } from '@/entities/user/stores/AuthStore'

const LLM_MODELS = [
    'gpt-4o-mini',
    'gpt-4o',
    'Claude 3.5 Haiku',
    'Claude 3.5 Sonnet',
]
const PERSONAS = ['기본타입']

export const ChatInput = ({
    chatId,
    onStreamStart,
    onStreamUpdate,
    onStreamEnd,
    isfixedDisabled,
}: {
    chatId: number
    onStreamStart: (query: string) => void
    onStreamUpdate: (token: string) => void
    onStreamEnd: () => void
    isfixedDisabled: boolean
}) => {
    const id = useId()
    const [inputValue, setInputValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [llmModelType, setLlmModelType] = useState('')
    const [personaId, setPersonaId] = useState('')
    const [files, setFiles] = useState<File[]>([])

    const validInput =
        inputValue.trim() !== '' && llmModelType !== '' && personaId !== ''

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !loading && validInput) {
            handleOnSubmit()
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files
        if (fileList) {
            setFiles(Array.from(fileList))
        }
    }

    const handleOnSubmit = async () => {
        if (inputValue.trim() === '') return

        const query = inputValue
        setLoading(true)

        try {
            const formData = new FormData()
            formData.append('query', query)
            formData.append('personaId', '1')
            formData.append('llmModelType', llmModelType)
            files.forEach((file) => {
                formData.append('files', file)
            })
            formData.append('files', JSON.stringify([]))
            const token = useAuthStore.getState().accessToken
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}api/chatbot/chatroom/${chatId}/agent-query`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            )

            const reader = response.body?.getReader()
            const decoder = new TextDecoder('utf-8')

            if (!reader) throw new Error('No response body')

            let buffer = ''
            onStreamStart(query)
            setInputValue('')

            // eslint-disable-next-line no-constant-condition
            while (true) {
                const { value, done } = await reader.read()
                if (done) break
                buffer += decoder.decode(value, { stream: true })
                const parts = buffer.split('\n\n')
                buffer = parts.pop() || ''
                for (const part of parts) {
                    const clean = part.replace(/^data:\s*/, '').trim()

                    if (!clean || clean === '[DONE]') continue

                    // JSON 검증
                    if (!clean.startsWith('{') || !clean.endsWith('}')) {
                        console.warn('Skipped non-JSON part:', clean)
                        continue
                    }

                    try {
                        const json = JSON.parse(clean)

                        if (json.token) {
                            onStreamUpdate(json.token)
                        }
                    } catch {
                        console.warn('Invalid JSON:', clean)
                    }
                }
            }
        } catch (err) {
            console.error('Stream error:', err)
        } finally {
            setLoading(false)
            onStreamEnd()
        }
    }
    return (
        <Box
            as={'label'}
            className={S.inputContainer}
            background="white"
            htmlFor={id}
            style={{
                position: !isfixedDisabled ? 'fixed' : 'static',
            }}
        >
            <Box display="flex" style={{ gap: '14px' }} flexDirection="column">
                <Box className={S.inputSelect}>
                    <CustomSelect
                        options={LLM_MODELS}
                        value={llmModelType}
                        onChange={(val) => setLlmModelType(val)}
                        placeholder="모델 선택"
                    />
                    <CustomSelect
                        options={PERSONAS}
                        value={personaId}
                        onChange={(val) => setPersonaId(val)}
                        placeholder="페르소나 선택"
                    />

                    <Box
                        as={'label'}
                        display="flex"
                        alignItems="center"
                        style={{ gap: '2px' }}
                        onClick={() => setFiles([])}
                        htmlFor="analyis-file"
                    >
                        <input
                            type="file"
                            multiple
                            accept="image/*, pdf, docs"
                            hidden
                            id="analyis-file"
                            onChange={handleFileChange}
                        />
                        <FileIcon width={12} height={12} />
                        <Text fontSize="subHeadline" color="neutral-900">
                            {files.length > 0
                                ? `${files.length}개 파일 첨부됨`
                                : '파일 첨부'}
                        </Text>
                    </Box>
                </Box>
                <Box
                    as={'input'}
                    placeholder="검색어를 입력해주세요."
                    className={S.input}
                    id={id}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                    value={inputValue}
                />
            </Box>

            <Box
                as={'button'}
                className={S.inputBtn}
                onClick={() => handleOnSubmit()}
                disabled={loading || !validInput}
                style={{
                    background: validInput && !loading ? '#006644' : '#ccc',
                }}
            >
                <Send
                    width={16}
                    height={16}
                    style={{ transform: 'rotate(45deg)' }}
                    fill={'#ffffff'}
                />
            </Box>
        </Box>
    )
}
