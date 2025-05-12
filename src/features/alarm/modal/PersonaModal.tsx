import { Box } from '@/shared/ui/Box'
import * as S from './PersonaModal.css'
import { Text } from '@/shared/ui/Text'
import { useEffect, useState } from 'react'
import Edit from '@/shared/asset/icon/pencil-alt.svg?react'
import Trash from '@/shared/asset/icon/trash.svg?react'
import { Button } from '@/shared/ui/Button'
import {
    delPersona,
    getPersona,
    postPersona,
    putPersona,
} from '@/entities/user/api/persona'
import { PersonaAddModal } from './PersonalAddModal'
import { motion } from 'framer-motion'

interface Persona {
    id: number
    name: string
    preset: boolean
    prompt: string
}

interface IPersonaModal {
    onClose: () => void
}

export const PersonaModal: React.FC<IPersonaModal> = ({ onClose }) => {
    const [personas, setPersonas] = useState<Persona[]>([])
    const [isAddModalVisible, setIsAddModalVisible] = useState(false) // 추가 컴포넌트 표시 상태
    const [selectedPersonaId, setSelectedPersonaId] = useState<number | null>(
        null
    )
    const [newPersona, setNewPersona] = useState({ name: '', prompt: '' })
    const [isEditMode, setIsEditMode] = useState(false)
    const [editingPersonaId, setEditingPersonaId] = useState<number | null>(
        null
    )
    const [alertMessage, setAlertMessage] = useState('')

    //조회
    useEffect(() => {
        const fetchPersonas = async () => {
            try {
                const response = await getPersona()
                setPersonas(response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchPersonas()
    }, [])

    const showAlertMessage = (msg: string) => {
        setAlertMessage(msg)

        setTimeout(() => {
            setAlertMessage('')
        }, 3000)
    }

    //삭제
    const handleDeletePersona = async (id: number) => {
        const persona = personas.find((p) => p.id === id)
        if (persona?.preset === true) {
            showAlertMessage('개인 페르소나만 삭제, 수정할 수 있습니다.')
            return
        }
        try {
            await delPersona(id)
            setPersonas(personas.filter((persona) => persona.id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    const handleRowClick = (id: number) => {
        setSelectedPersonaId((prevId) => (prevId === id ? null : id))
    }

    // 추가
    const handleAddPersona = async () => {
        try {
            const response = await postPersona({
                name: newPersona.name,
                prompt: newPersona.prompt,
                preset: false,
            })
            setPersonas([...personas, response.data])
            setIsAddModalVisible(false)
            setNewPersona({ name: '', prompt: '' })
            setAlertMessage('')
        } catch (error) {
            console.error(error)
        }
    }

    //수정
    const handleEditPersonaSubmit = async () => {
        if (!editingPersonaId) return
        try {
            await putPersona(editingPersonaId, {
                name: newPersona.name,
                prompt: newPersona.prompt,
                active: false,
            })

            resetModal()
            setAlertMessage('')
        } catch (error) {
            console.error(error)
        }
    }

    const handleEditClick = (persona: Persona) => {
        if (persona.preset === true) {
            showAlertMessage('개인 페르소나만 삭제, 수정할 수 있습니다.')
            return
        }
        setNewPersona({ name: persona.name, prompt: persona.prompt })
        setEditingPersonaId(persona.id)
        setIsEditMode(true)
        setIsAddModalVisible(true)
    }

    const resetModal = async () => {
        setIsAddModalVisible(false)
        setIsEditMode(false)
        setEditingPersonaId(null)
        setNewPersona({ name: '', prompt: '' })
        setAlertMessage('')
        try {
            const response = await getPersona()
            setPersonas(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Box>
            <Box display="flex" flexDirection="column" className={S.container}>
                <Text fontSize="title1" fontWeight="semibold">
                    페르소나 설정
                </Text>
                <Box
                    display="flex"
                    flexDirection="row"
                    style={{ width: '100%', gap: '20px' }}
                >
                    <Box className={S.tableContainer}>
                        <Box className={S.tableHeader}>
                            <Box className={S.nameCell}>
                                <Text fontSize="title3" color="neutral-70">
                                    NAME
                                </Text>
                            </Box>
                            <Box className={S.presetCell}>
                                <Text fontSize="title3" color="neutral-70">
                                    PRESET
                                </Text>
                            </Box>
                            <Box className={S.actionsCell}>
                                <Text fontSize="title3" color="neutral-70">
                                    ACTIONS
                                </Text>
                            </Box>
                        </Box>

                        <Box className={S.rowBox}>
                            {personas.map((persona) => (
                                <Box>
                                    <Box
                                        key={persona.id}
                                        className={S.tableRow}
                                        onClick={() =>
                                            handleRowClick(persona.id)
                                        }
                                    >
                                        <Box className={S.nameCell}>
                                            <Text>{persona.name}</Text>
                                        </Box>
                                        <Box className={S.presetCell}>
                                            <Box
                                                className={
                                                    persona.preset
                                                        ? S.basicPresetTag
                                                        : S.customPresetTag
                                                }
                                            >
                                                <Text fontSize="body">
                                                    {persona.preset
                                                        ? '기본'
                                                        : '개인'}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box className={S.actionsCell}>
                                            <Box className={S.actionButtons}>
                                                <Box
                                                    as={'button'}
                                                    className={S.actionButton}
                                                    aria-label="Edit"
                                                    onClick={() =>
                                                        handleEditClick(persona)
                                                    }
                                                >
                                                    <Edit
                                                        width={14}
                                                        height={14}
                                                    />
                                                </Box>
                                                <Box
                                                    as={'button'}
                                                    className={S.actionButton}
                                                    aria-label="Delete"
                                                    onClick={() =>
                                                        handleDeletePersona(
                                                            persona.id
                                                        )
                                                    }
                                                >
                                                    <Trash
                                                        width={14}
                                                        height={14}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    {selectedPersonaId === persona.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <Box style={{ padding: '0 6px' }}>
                                                <Text
                                                    fontSize="body"
                                                    color="neutral-500"
                                                >
                                                    {persona.prompt}
                                                </Text>
                                            </Box>
                                        </motion.div>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                {/* 추가 컴포넌트 */}
                {isAddModalVisible && (
                    <PersonaAddModal
                        newPersona={newPersona}
                        setNewPersona={setNewPersona}
                    />
                )}
                {alertMessage && (
                    <Box style={{ marginTop: '8px' }}>
                        <Text fontSize="body" color="red-100">
                            {alertMessage}
                        </Text>
                    </Box>
                )}
                <Box display="flex" style={{ gap: '24px', marginTop: '12px' }}>
                    <Button
                        width="100%"
                        size="medium"
                        type="tertiary"
                        fontSize="title3"
                        onClickFunc={onClose}
                    >
                        이전
                    </Button>
                    <Button
                        width="100%"
                        size="medium"
                        type="primary"
                        fontSize="title3"
                        onClickFunc={() => {
                            if (isAddModalVisible) {
                                if (isEditMode) {
                                    handleEditPersonaSubmit()
                                } else {
                                    handleAddPersona()
                                }
                            } else {
                                setIsAddModalVisible(true)
                            }
                        }}
                    >
                        {isEditMode ? '수정' : '추가'}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
