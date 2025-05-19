import { Box } from '@/shared/ui/Box'
import { Sidebar } from '@/widgets/Sidebar'
import * as S from './Management.css'
import { Header } from '@/features/management/ui/Header'
import Suggestions from '@/features/management/ui/Suggestions'
import FileList, { FileListHandle } from '@/features/management/ui/FileList'
import ManagementSideBar from '@/features/management/ui/ManagementSideBar'
import { useEffect, useRef, useState } from 'react'
import { getTeams } from '@/entities/file/api/file'
import { colors } from '@/app/token'

interface Team {
    teamId: number
    teamName: string
    members: { name: string }[]
    currentFolderId: number | null
}

export const Management = () => {
    const [teamItems, setTeamItems] = useState<Team[]>([])
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
    const [selectedFileId, setSelectedFileId] = useState<number | null>(null)
    const [selectedFileName, setSelectedFileName] = useState<string | null>(
        null
    )
    const [currentFolderId, setCurrentFolderId] = useState<number | null>(null)
    const [selectedItemType, setSelectedItemType] = useState<
        'file' | 'folder' | null
    >(null)

    const fileListRef = useRef<FileListHandle>(null) //파일생성후REFETCH
    const handleFolderCreated = () => {
        fileListRef.current?.refetch() // 폴더 생성 후 데이터 새로고침
    }
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await getTeams()
                setTeamItems(response.data)
                setSelectedTeam(response.data[0]) // 첫 번째 팀 선택
            } catch (error) {
                console.error(error)
            }
        }

        fetchTeams()
    }, [])

    const handleTeamSelect = (teamId: number) => {
        const team = teamItems.find((team) => team.teamId === teamId)
        if (team) {
            setSelectedTeam(team)
        }
    }

    const handleFileSelect = (
        fileId: number | null,
        fileName: string | null,
        type: 'file' | 'folder' | null
    ) => {
        setSelectedFileId(fileId)
        setSelectedFileName(fileName)

        setSelectedItemType(type)
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            style={{ background: colors['neutral-10'] }}
        >
            <Box className={S.layout}>
                <Sidebar headerText="관리">
                    <ManagementSideBar
                        teamItems={teamItems}
                        selectedTeamId={selectedTeam?.teamId || null}
                        onTeamSelect={handleTeamSelect}
                    />
                </Sidebar>
                <Box className={S.main}>
                    <Header
                        teamName={selectedTeam?.teamName || '팀 이름 없음'}
                        members={selectedTeam?.members || []}
                        selectedFileId={selectedFileId} // 선택된 파일 ID 전달
                        selectedFileName={selectedFileName}
                        teamId={selectedTeam?.teamId || 0} // 팀 ID 전달
                        currentFolderId={currentFolderId}
                        onFolderCreated={handleFolderCreated}
                        selectedItemType={selectedItemType}
                    />
                    <Suggestions teamId={selectedTeam?.teamId || 0} />
                    {selectedTeam && (
                        <FileList
                            ref={fileListRef} // FileList의 ref 전달
                            teamId={selectedTeam.teamId}
                            onFileSelect={(id, name, type) =>
                                handleFileSelect(id, name, type)
                            }
                            onFolderChange={setCurrentFolderId}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    )
}
