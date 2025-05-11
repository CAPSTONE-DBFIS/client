import Button from '@/entities/file/ui/Button'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './FileList.css'
import FolderIcon from '@/shared/asset/icon/folder.svg?react'
import FileIcon from '@/shared/asset/icon/clipboard-copy.svg?react'
import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react'
import { getFolder } from '@/entities/file/api/file'

interface IFileItem {
    id: number
    name: string
    type: string
    size?: number
    uploaderId: string
}

export interface FileListHandle {
    refetch: () => void
}

const FileList = forwardRef<
    FileListHandle,
    {
        teamId: number
        onFileSelect: (fileId: number | null, fileName: string | null) => void
        onFolderChange: (folderId: number | null) => void
    }
>(({ teamId, onFileSelect, onFolderChange }, ref) => {
    const [folderId, setFolderId] = useState<number | null>(null)
    const [folderHistory, setFolderHistory] = useState<number[]>([]) // 폴더 이동 기록

    const [files, setFiles] = useState<IFileItem[]>([])
    const [selectedFileId, setSelectedFileId] = useState<number | null>(null)
    const [sortOrder, setSortOrder] = useState<
        'recent' | 'oldest' | 'name' | null
    >(null)
    const [lastClickedFolder, setLastClickedFolder] = useState<number | null>(
        null
    ) // 마지막으로 클릭한 폴더 ID

    const [selectedSort, setSelectedSort] = useState<
        'recent' | 'oldest' | 'name' | null
    >(null)

    const fetchFolderContents = useCallback(async () => {
        try {
            const response = await getFolder(teamId, folderId || 0)
            const rawFiles = [...response.data]
            rawFiles.sort((a, b) => {
                if (sortOrder === 'recent') return b.id - a.id
                if (sortOrder === 'oldest') return a.id - b.id
                if (sortOrder === 'name') return a.name.localeCompare(b.name)
                return 0
            })
            console.log(rawFiles)

            setFiles(rawFiles)
        } catch (error) {
            console.error(error)
        }
    }, [teamId, folderId, sortOrder])

    useEffect(() => {
        fetchFolderContents()
    }, [fetchFolderContents])

    useImperativeHandle(ref, () => ({
        refetch: fetchFolderContents,
    }))

    const handleFolderClick = (id: number) => {
        if (lastClickedFolder === id) {
            // 두 번째 클릭: 폴더 진입
            setFolderHistory((prev) => [...prev, folderId || 0])
            setFolderId(id)
            setLastClickedFolder(null)
            onFolderChange(id)
        } else {
            // 첫 번째 클릭: 선택만
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
        if (folderHistory.length > 0) {
            const previousFolderId = folderHistory[folderHistory.length - 1]
            setFolderHistory((prevHistory) =>
                prevHistory.slice(0, prevHistory.length - 1)
            )
            setFolderId(previousFolderId)
            onFolderChange(previousFolderId)
        } else {
            setFolderHistory([]) // 초기화화
            setFolderId(null)
            onFolderChange(null) // 루트
        }
    }

    // 정렬
    const handleSort = (order: 'recent' | 'oldest' | 'name') => {
        setSortOrder(order)
        setSelectedSort(order)
    }
    //파일클릭
    const handleFileClick = async (fileId: number, fileName: string) => {
        console.log(fileId, fileName)
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
                    isActive={selectedSort === 'recent'}
                >
                    최근 순
                </Button>
                <Button
                    onClick={() => handleSort('oldest')}
                    isActive={selectedSort === 'oldest'}
                >
                    오래된 순
                </Button>
                <Button
                    onClick={() => handleSort('name')}
                    isActive={selectedSort === 'name'}
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
                {folderId !== null && (
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
})
export default FileList
