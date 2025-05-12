import Button from '@/entities/file/ui/Button'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './FileList.css'
import FolderIcon from '@/shared/asset/icon/folder.svg?react'
import FileIcon from '@/shared/asset/icon/clipboard-copy.svg?react'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { SortType } from '@/entities/file/model/sortFiles'
import { useFolderHistory } from '../lib/useFolderHistory'
import { useFileList } from '@/entities/file/model/useFileList'

export interface FileListHandle {
    refetch: () => void
}

interface FileListProps {
    teamId: number
    onFileSelect: (fileId: number | null, fileName: string | null) => void
    onFolderChange: (folderId: number | null) => void
}

const FileList = forwardRef<FileListHandle, FileListProps>(
    ({ teamId, onFileSelect, onFolderChange }, ref) => {
        const [sortOrder, setSortOrder] = useState<SortType>('recent')
        const [selectedFileId, setSelectedFileId] = useState<number | null>(
            null
        )
        const [lastClickedFolder, setLastClickedFolder] = useState<
            number | null
        >(null)

        const { currentFolderId, goToFolder, goBack } = useFolderHistory(0)

        const { files, refetch } = useFileList(
            teamId,
            currentFolderId,
            sortOrder
        )

        useImperativeHandle(ref, () => ({
            refetch,
        }))

        useEffect(() => {
            onFolderChange(currentFolderId)
        }, [currentFolderId, onFolderChange])

        const handleSort = (order: SortType) => {
            setSortOrder(order)
        }

        const handleFolderClick = (id: number) => {
            if (lastClickedFolder === id) {
                goToFolder(id)
                setLastClickedFolder(null)
                onFolderChange(id)
            } else {
                setLastClickedFolder(id)
                onFolderChange(id)
                setTimeout(() => {
                    if (lastClickedFolder === id) {
                        setLastClickedFolder(null)
                    }
                }, 2000)
            }
        }

        const handleGoBack = () => {
            goBack()
            onFolderChange(currentFolderId) // updated inside goBack
        }

        const handleFileClick = (fileId: number, fileName: string) => {
            setSelectedFileId(fileId)
            setLastClickedFolder(null)
            onFileSelect(fileId, fileName)
            onFolderChange(null)
        }

        return (
            <Box
                display="flex"
                flexDirection="column"
                style={{ gap: '12px', paddingTop: '18px' }}
            >
                <Text>All files</Text>
                <Box display="flex" style={{ gap: '4px' }}>
                    <Button
                        onClick={() => handleSort('recent')}
                        isActive={sortOrder === 'recent'}
                    >
                        최근 순
                    </Button>
                    <Button
                        onClick={() => handleSort('oldest')}
                        isActive={sortOrder === 'oldest'}
                    >
                        오래된 순
                    </Button>
                    <Button
                        onClick={() => handleSort('name')}
                        isActive={sortOrder === 'name'}
                    >
                        이름 순
                    </Button>
                </Box>
                <Box className={S.fileTable}>
                    <Box className={S.fileTableRow + ' ' + S.fileTableHeader}>
                        <Text fontSize="title3">이름</Text>
                        <Text fontSize="title3">확장자</Text>
                        <Text fontSize="title3">소유자</Text>
                    </Box>
                    {currentFolderId !== 0 && (
                        <Box
                            className={S.goBackRow}
                            onClick={() => {
                                handleGoBack()
                            }}
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                style={{ gap: '8px' }}
                            >
                                <FolderIcon width={20} height={20} />
                                <Text>/</Text>
                            </Box>
                            <Text>FOLDER</Text>
                            <Text>-</Text>
                        </Box>
                    )}
                    {files.map((file) => (
                        <Box
                            key={file.id}
                            className={`${S.fileTableRow} ${
                                selectedFileId === file.id ? S.selectedRow : ''
                            }`}
                            onClick={() =>
                                file.type === 'FOLDER'
                                    ? handleFolderClick(file.id)
                                    : handleFileClick(file.id, file.name)
                            }
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                style={{ gap: '8px' }}
                            >
                                {file.type === 'FOLDER' ? (
                                    <FolderIcon width={20} height={20} />
                                ) : (
                                    <FileIcon width={20} height={20} />
                                )}
                                <Text color="neutral-800">{file.name}</Text>
                            </Box>
                            <Text color="neutral-800">{file.type}</Text>
                            <Text color="neutral-800">{file.uploaderId}</Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        )
    }
)
export default FileList
