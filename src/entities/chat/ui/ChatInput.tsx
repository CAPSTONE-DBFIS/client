import { Box } from '@/shared/ui/Box'
import * as S from './Chat.css'
import Send from '@/shared/asset/icon/paper-airplane.svg?react'
import FileIcon from '@/shared/asset/icon/paper-clip.svg?react'
import { useEffect, useId, useState } from 'react'
import { Text } from '@/shared/ui/Text'
import { CustomSelect } from '@/entities/chat/ui/Select'
import { useAuthStore } from '@/entities/user/stores/AuthStore'
import { sourceType } from '@/entities/chat/type/chat.type'
import { PersonaType } from '@/entities/persona/type/persona.type'
import { getPersona } from '@/entities/persona/api/persona'

const LLM_MODELS = [
    { value: 'gpt-4o-mini', label: 'gpt-4o-mini' },
    { value: 'o4-mini', label: 'gpt-o4-mini' },
    { value: 'claude-3-7-sonnet-20250219', label: 'claude-3-7-sonnet' },
    { value: 'grok-3-mini-beta', label: 'grok-3-mini-beta' },
]
const LLM_MODELS_LABEL = [
    'gpt-4o-mini',
    'gpt-o4-mini',
    'claude-3-7-sonnet',
    'grok-3-mini-beta',
]

export const ChatInput = ({
    chatId,
    onStreamStart,
    onStreamUpdate,
    onStreamEnd,
    isfixedDisabled,
}: {
    chatId: number
    onStreamStart: (query: string) => void
    onStreamUpdate: (token?: string, links?: sourceType[], log?: string) => void
    onStreamEnd: () => void
    isfixedDisabled: boolean
}) => {
    const id = useId()
    const [inputValue, setInputValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [llmModelType, setLlmModelType] = useState('')
    const [personaName, setPersonaName] = useState('')
    const [files, setFiles] = useState<File[]>([])
    const [personaList, setPersonaList] = useState<PersonaType[]>([])
    const personaListName = personaList.map((persona) => persona.name)

    console.log(personaListName)
    useEffect(() => {
        getPersonaList()
    }, [])
    const validInput =
        inputValue.trim() !== '' && llmModelType !== '' && personaName !== ''

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
            const selectedModel = LLM_MODELS.find(
                (model) => model.label === llmModelType
            )?.value
            const selectedPersona = personaList.find(
                (p) => p.name === personaName
            )
            if (!selectedModel) {
                alert('모델 선택이 올바르지 않습니다.')
                return
            }
            if (!selectedPersona) {
                alert('선택한 페르소나가 존재하지 않습니다.')
                return
            }
            formData.append('query', query)
            formData.append('personaId', selectedPersona.id.toString())

            formData.append('llmModelType', selectedModel)
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
                        } else if (json.links) {
                            onStreamUpdate('', json.links)
                        } else if (json.log) {
                            onStreamUpdate('', [], json.log)
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
    const getPersonaList = async () => {
        const response = await getPersona()
        if (response.status === 200) {
            setPersonaList(response.data)
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
                        options={LLM_MODELS_LABEL}
                        value={llmModelType}
                        onChange={(val) => setLlmModelType(val)}
                        placeholder="모델 선택"
                    />
                    <CustomSelect
                        options={personaListName}
                        value={personaName}
                        onChange={(val) => setPersonaName(val)}
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
                            accept=".pdf,.docx,.hwp,.txt"
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
