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
import { useState } from 'react'
import {
    deleteFileFolder,
    getDownload,
    postUpload,
    postfolder,
} from '@/entities/file/api/file'

interface ITeam {
    teamName: string
    members: { name: string }[]
    selectedFileId: number | null
    selectedFileName: string | null
    teamId: number
    currentFolderId: number | null
    onFolderCreated: () => void
}

export const Header: React.FC<ITeam & { onFolderCreated: () => void }> = ({
    teamName,
    members,
    selectedFileId,
    selectedFileName,
    teamId,
    currentFolderId,
    onFolderCreated,
}) => {
    const [activeButton, setActiveButton] = useState<string | null>(null)
    const [folderName, setFolderName] = useState('') //폴더업로드

    const handleButtonClick = (buttonId: string) => {
        setActiveButton(buttonId)
    }

    //다운로드
    const handleDownloadClick = async () => {
        if (!selectedFileId || !selectedFileName) {
            alert('다운로드할 파일을 선택하세요.')
            return
        }

        try {
            const extensionToMime: Record<string, string> = {
                pdf: 'application/pdf',
                docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                hwp: 'application/x-hwp',
                txt: 'text/plain',
                png: 'image/png',
                jpg: 'image/jpeg',
                jpeg: 'image/jpeg',
            }

            const extension =
                selectedFileName.split('.').pop()?.toLowerCase() ||
                'octet-stream'
            const mimeType =
                extensionToMime[extension] || 'application/octet-stream'

            const response = await getDownload(teamId, selectedFileId)

            const blob = new Blob([response.data], { type: mimeType })

            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = selectedFileName
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)

            console.log('다운로드 완료')
        } catch (error) {
            console.error(error)
        }
    }
    //업로드
    const handleUploadClick = async () => {
        if (!teamId) {
            alert('업로드할 팀을 선택하세요.')
            return
        }

        const allowedExtensions = ['pdf', 'docx', 'hwp', 'txt']

        const fileInput = document.createElement('input')
        fileInput.type = 'file'

        fileInput.onchange = async (event: Event) => {
            const target = event.target as HTMLInputElement
            if (target.files && target.files[0]) {
                const file = target.files[0]
                const extension = file.name.split('.').pop()?.toLowerCase()

                if (!extension || !allowedExtensions.includes(extension)) {
                    alert('허용되지 않은 파일 형식입니다.')
                    return
                }

                const formData = new FormData()
                formData.append('file', file)

                try {
                    const folderId = currentFolderId ?? null
                    console.log('업로드 대상 폴더 ID:', folderId)

                    const response = await postUpload(
                        teamId,
                        folderId,
                        formData
                    )
                    console.log('업로드 성공:', response.data)
                    onFolderCreated() // 업로드 후 FileList 새로고침
                } catch (error) {
                    console.error('업로드 실패:', error)
                }
            }
        }

        fileInput.click()
    }
    //폴더생성
    const handleCreateFolder = async () => {
        if (!teamId || folderName.trim() === '') {
            alert('팀 또는 폴더 이름이 없습니다.')
            return
        }

        try {
            const folderId = currentFolderId ?? null
            console.log('parentId:', folderId)
            const response = await postfolder(teamId, folderId, folderName)
            console.log(response.data)
            setFolderName('') // 입력창 초기화
            onFolderCreated() // 폴더 생성 후 FileList 새로고침
        } catch (error) {
            console.error(error)
        }
    }

    //삭제
    const handleDeleteClick = async () => {
        if (!teamId) {
            alert('삭제할 팀을 선택하세요.')
            return
        }

        if (selectedFileId !== null) {
            // ✅ 파일 삭제
            try {
                const response = await deleteFileFolder(
                    teamId,
                    selectedFileId,
                    undefined
                )
                console.log('✅ 파일 삭제 성공', response.data)
                onFolderCreated()
            } catch (error) {
                console.error('❌ 파일 삭제 실패:', error)
            }
        } else if (currentFolderId !== null) {
            // ✅ 폴더 삭제
            try {
                const response = await deleteFileFolder(
                    teamId,
                    undefined,
                    currentFolderId
                )
                console.log('✅ 폴더 삭제 성공', response.data)
                onFolderCreated()
            } catch (error) {
                console.error('❌ 폴더 삭제 실패:', error)
            }
        } else {
            alert('삭제할 파일 또는 폴더를 선택하세요.')
        }
    }

    return (
        <Box display="flex" flexDirection="column" style={{ gap: '20px' }}>
            <Box display="flex" alignItems="center" style={{ gap: '20px' }}>
                <Text color="neutral-900" fontSize="title2" fontWeight="medium">
                    {teamName}
                </Text>
                <Box display="flex" alignItems="center" style={{ gap: '4px' }}>
                    <StorageIcon width={16} height={16} fill="#7A8699" />
                    <Text fontSize="headline" color="neutral-100">
                        팀 스토리지
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
                            handleButtonClick('download')
                            handleDownloadClick()
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
                            handleButtonClick('upload')
                            handleUploadClick()
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
                        onClickFunc={() => {
                            handleButtonClick('createFolder')
                            handleCreateFolder()
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
                            console.log('삭제 버튼 클릭됨')
                            handleButtonClick('delete')
                            handleDeleteClick()
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
