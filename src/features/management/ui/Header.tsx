import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import StorageIcon from '@/shared/asset/icon/archive.svg?react'
import GroupIcon from '@/shared/asset/icon/user-group.svg?react'
import SearchIcon from '@/shared/asset/icon/search.svg?react'
import DownloadIcon from '@/shared/asset/icon/cloud-download.svg?react'
import UploadIcon from '@/shared/asset/icon/cloud-upload.svg?react'
import FolderIcon from '@/shared/asset/icon/folder-add.svg?react'
import TrashIcon from '@/shared/asset/icon/folder-remove.svg?react'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Button } from '@/shared/ui/Button'
import { useEffect, useState } from 'react'
import { useFileActions } from '../model/fileAction'
import { getFileStorage } from '@/entities/file/api/file'
import { IStorage } from '@/entities/file/type/IFileItem.type'

interface ITeam {
    teamName: string
    members: { name: string }[]
    selectedFileId: number | null
    selectedFileName: string | null
    teamId: number
    currentFolderId: number | null
    onFolderCreated: () => void
    selectedItemType: 'file' | 'folder' | null
}

export const Header: React.FC<ITeam & { onFolderCreated: () => void }> = ({
    teamName,
    members,
    selectedFileId,
    selectedFileName,
    teamId,
    currentFolderId,
    onFolderCreated,
    selectedItemType,
}) => {
    const [activeButton, setActiveButton] = useState<string | null>(null)
    const [folderName, setFolderName] = useState('') //폴더업로드
    const [storage, setStorage] = useState<IStorage>()

    const { handleDownload, handleUpload, handleCreateFolder, handleDelete } =
        useFileActions({
            teamId,
            currentFolderId,
            selectedFileId,
            selectedFileName,
            onFolderCreated,
            selectedItemType,
        })

    useEffect(() => {
        const fetchStorage = async () => {
            try {
                const response = await getFileStorage(teamId)
                setStorage(response.data)
                console.log(storage)
            } catch (error) {
                console.error(error)
            }
        }
        if (teamId) {
            fetchStorage()
        }
    }, [teamId])

    return (
        <Box display="flex" flexDirection="column" style={{ gap: '20px' }}>
            <Box display="flex" alignItems="center" style={{ gap: '20px' }}>
                <Text color="neutral-900" fontSize="title2" fontWeight="medium">
                    {teamName}
                </Text>
                <Box display="flex" alignItems="center" style={{ gap: '4px' }}>
                    <StorageIcon width={16} height={16} fill="#7A8699" />
                    <Text fontSize="headline" color="neutral-100">
                        팀 스토리지 사용량 : {storage?.usedMegaBytes}MB /{' '}
                        {storage?.limitMegaBytes}MB
                    </Text>
                </Box>
            </Box>
            <Box display="flex" alignItems="flex-end" style={{ gap: '12px' }}>
                <GroupIcon width={16} height={16} fill="#5D6B82" />

                {members.map((member, index) => (
                    <Text
                        key={index}
                        fontSize="headline"
                        color="neutral-300"
                        fontWeight="semibold"
                    >
                        {member.name}
                    </Text>
                ))}
            </Box>
            <Box>
                <TextInput
                    placeholder="생성할 폴더 이름을 적어주세요 "
                    leftIcon={<SearchIcon />}
                    width="300px"
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                />
            </Box>
            <Box>
                <Box display="flex" style={{ gap: '4px' }}>
                    <Button
                        size="medium"
                        type={
                            activeButton === 'download' ? 'primary' : 'tertiary'
                        }
                        width="140px"
                        onClickFunc={() => {
                            setActiveButton('download')
                            handleDownload()
                        }}
                    >
                        <DownloadIcon
                            fill={
                                activeButton === 'download' ? '#fff' : '#005665'
                            }
                        />
                        다운로드
                    </Button>
                    <Button
                        size="medium"
                        type={
                            activeButton === 'upload' ? 'primary' : 'tertiary'
                        }
                        width="140px"
                        onClickFunc={() => {
                            console.log(
                                '[HEADER] 업로드 실행. folderId =',
                                currentFolderId
                            )
                            setActiveButton('upload')
                            handleUpload()
                        }}
                    >
                        <UploadIcon
                            fill={
                                activeButton === 'upload' ? '#fff' : '#005665'
                            }
                        />
                        업로드
                    </Button>
                    <Button
                        size="medium"
                        type={
                            activeButton === 'createFolder'
                                ? 'primary'
                                : 'tertiary'
                        }
                        width="140px"
                        onClickFunc={async () => {
                            setActiveButton('create')
                            const success = await handleCreateFolder(folderName)
                            if (success) {
                                setFolderName('') // 초기화
                            }
                        }}
                    >
                        <FolderIcon
                            fill={
                                activeButton === 'createFolder'
                                    ? '#fff'
                                    : '#005665'
                            }
                        />
                        폴더 생성
                    </Button>
                    <Button
                        size="medium"
                        type={
                            activeButton === 'delete' ? 'primary' : 'tertiary'
                        }
                        width="140px"
                        onClickFunc={() => {
                            setActiveButton('delete')
                            console.log('selectedFileId:', selectedFileId)
                            console.log('currentFolderId:', currentFolderId)
                            if (
                                selectedItemType === 'file' &&
                                selectedFileId !== null
                            ) {
                                handleDelete('file')
                            } else if (
                                selectedItemType === 'folder' &&
                                currentFolderId !== null
                            ) {
                                handleDelete('folder')
                            } else {
                                alert('삭제할 대상을 선택하세요.')
                            }
                        }}
                    >
                        <TrashIcon
                            fill={
                                activeButton === 'delete' ? '#fff' : '#005665'
                            }
                        />
                        삭제
                    </Button>
                </Box>
                <Text fontSize="subHeadline" color="neutral-50">
                    *특정 파일(pdf, word, hwp, excel)만 수집가능해요!
                </Text>
            </Box>
        </Box>
    )
}
