import { Box } from '@/shared/ui/Box'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

import Plus from '@/shared/asset/icon/plus.svg?react'
import Chat from '@/shared/asset/icon/chat.svg?react'
import Star from '@/shared/asset/icon/star.svg?react'
import Trash from '@/shared/asset/icon/trash.svg?react'
import Edit from '@/shared/asset/icon/pencil-alt.svg?react'
import { colors } from '@/app/token'
import * as S from './AnalysisSidebar.css'
import { useCallback, useEffect, useState } from 'react'
import {
    addChat,
    chatList,
    deleteChat,
    patchFavoriteChat,
    renameChat,
} from '@/features/chat/api/chat'
import { ChatType } from '@/features/chat/type/chat.type'

export const AnalysisSidebar = ({
    id,
    setId,
    userAnalysisStart,
}: {
    id: number
    setId: (id: number) => void
    userAnalysisStart: boolean
}) => {
    const [userChatList, setUserChatList] = useState<ChatType[]>([])
    const [teamChatList, setTeamChatList] = useState<ChatType[]>([])
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState(-1)
    const fetchChatList = useCallback(async () => {
        const response = await chatList()
        if (response.status === 200) {
            setUserChatList(response.data?.personalChatrooms)
            if (Object.keys(response.data?.projectChatrooms).length === 0) {
                setTeamChatList([])
            } else {
                setTeamChatList(response.data?.projectChatrooms)
            }
        }
    }, [])

    useEffect(() => {
        fetchChatList()
    }, [fetchChatList])

    useEffect(() => {
        if (userAnalysisStart) {
            fetchChatList()
        }
    }, [userAnalysisStart, fetchChatList])

    const postAddChat = async () => {
        const response = await addChat()
        if (response.status === 201) {
            await fetchChatList()
            setId(response.data.id)
        }
    }

    const delChat = async (id: number) => {
        await deleteChat(id)
        await fetchChatList()
        setId(-1)
    }

    const favoriteChat = async (id: number, value: boolean) => {
        const response = await patchFavoriteChat(id, value)
        if (response.status === 204) {
            await fetchChatList()
        }
        return response
    }
   
    const editChat = async (id: number, name: string) => {
        const response = await renameChat(id, name)
        if (response.status === 204) {
            await fetchChatList()
        }
    }
    return (
        <Box
            style={{ width: '100%' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box className={S.cell} style={{ padding: '24px 16px' }}>
                <Button
                    size="medium"
                    type="primary"
                    width="225px"
                    onClickFunc={postAddChat}
                >
                    <Plus fill={colors.white} width={20} height={20} />
                    <Text color="white">채팅 추가</Text>
                </Button>
            </Box>
            <Box className={S.listContainer}>
                <Box>
                    <Box className={S.cell}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            style={{ width: '100%', padding: '0 16px' }}
                        >
                            <Text fontSize="subHeadline" color="neutral-60">
                                팀 채팅
                            </Text>
                        </Box>
                    </Box>
                    <Box className={`${S.cell} ${S.chatList}`}>
                        {teamChatList?.map((value) => {
                            return (
                                <Box
                                    key={value.id}
                                    as="button"
                                    style={{ gap: '6px' }}
                                    className={`${S.chat} ${id === value.id ? S.selectedChat : ''}`}
                                    onClick={() => setId(value.id)}
                                >
                                    <Chat
                                        width={16}
                                        height={16}
                                        fill={
                                            id === value.id
                                                ? colors['teal-500']
                                                : colors['neutral-900']
                                        }
                                    />
                                    <Text
                                        className={S.chatName}
                                        color={
                                            id === value.id
                                                ? 'teal-500'
                                                : 'neutral-900'
                                        }
                                    >
                                        {value.name}
                                    </Text>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <Box>
                    <Box className={S.cell}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            style={{ width: '100%', padding: '0 16px' }}
                        >
                            <Text fontSize="subHeadline" color="neutral-60">
                                개인 채팅
                            </Text>
                        </Box>
                    </Box>
                    <Box className={`${S.cell} ${S.chatList}`}>
                        {userChatList.map((value) => {
                            return (
                                <Box
                                    key={value.id}
                                    as="button"
                                    style={{ gap: '6px' }}
                                    className={`${S.chat} ${id === value.id ? S.selectedChat : ''}`}
                                    onClick={() => setId(value.id)}
                                >
                                    <Chat
                                        width={16}
                                        height={16}
                                        fill={
                                            id === value.id
                                                ? colors['teal-500']
                                                : colors['neutral-900']
                                        }
                                    />
                                    {edit && value.id === editId ? (
                                        <input
                                            type="text"
                                            defaultValue={value.name}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    const newName =
                                                        e.currentTarget.value
                                                    if (
                                                        newName !== value.name
                                                    ) {
                                                        editChat(
                                                            value.id,
                                                            newName
                                                        )
                                                    }
                                                    setEdit(false)
                                                }
                                            }}
                                        />
                                    ) : (
                                        <Text
                                            className={S.chatName}
                                            color={
                                                id === value.id
                                                    ? 'teal-500'
                                                    : 'neutral-900'
                                            }
                                        >
                                            {value.name}
                                        </Text>
                                    )}

                                    {id === value.id && (
                                        <Box className={S.selectedEdit}>
                                            <Star
                                                width={16}
                                                height={16}
                                                fill={
                                                    value.favorite
                                                        ? colors['neutral-50']
                                                        : colors['neutral-900']
                                                }
                                                onClick={() =>
                                                    favoriteChat(
                                                        value.id,
                                                        !value.favorite
                                                    )
                                                }
                                            />
                                            <Trash
                                                width={16}
                                                height={16}
                                                onClick={() =>
                                                    delChat(value.id)
                                                }
                                            />
                                            <Edit
                                                width={16}
                                                height={16}
                                                onClick={() => {
                                                    setEdit(true)
                                                    setEditId(value.id)
                                                }}
                                            />
                                        </Box>
                                    )}
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <Box>
                    <Box className={S.cell}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            style={{ width: '100%', padding: '0 16px' }}
                        >
                            <Text fontSize="subHeadline" color="neutral-60">
                                즐겨 찾기
                            </Text>
                        </Box>
                        <Box className={`${S.cell} ${S.chatList}`}>
                            {userChatList
                                .filter((value) => value.favorite === true)
                                .map((value) => {
                                    return (
                                        <Box
                                            key={value.id}
                                            as="button"
                                            style={{ gap: '6px' }}
                                            className={`${S.chat} ${id === value.id ? S.selectedChat : ''}`}
                                            onClick={() => setId(value.id)}
                                        >
                                            <Chat
                                                width={16}
                                                height={16}
                                                fill={
                                                    id === value.id
                                                        ? colors['teal-500']
                                                        : colors['neutral-900']
                                                }
                                            />
                                            <Text
                                                className={S.chatName}
                                                color={
                                                    id === value.id
                                                        ? 'teal-500'
                                                        : 'neutral-900'
                                                }
                                            >
                                                {value.name}
                                            </Text>
                                        </Box>
                                    )
                                })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
