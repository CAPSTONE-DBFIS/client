import {
    deleteFileFolder,
    getDownload,
    postUpload,
    postfolder,
} from '@/entities/file/api/file'
import { useCallback } from 'react'
import { mime } from '../lib/mime'

export function useFileActions({
    teamId,
    currentFolderId,
    selectedFileId,
    selectedFileName,
    onFolderCreated,
}: {
    teamId: number
    currentFolderId: number | null
    selectedFileId: number | null
    selectedFileName: string | null
    onFolderCreated: () => void
}) {
    const handleDownload = useCallback(async () => {
        if (!selectedFileId || !selectedFileName) {
            alert('다운로드할 파일을 선택하세요.')
            return
        }
        const ext =
            selectedFileName.split('.').pop()?.toLowerCase() || 'octet-stream'
        const mimeType = mime[ext] || 'application/octet-stream'
        const res = await getDownload(teamId, selectedFileId)
        const blob = new Blob([res.data], { type: mimeType })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = selectedFileName
        a.click()
        URL.revokeObjectURL(url)
    }, [teamId, selectedFileId, selectedFileName])

    const handleUpload = useCallback(async () => {
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
                    console.log(response.data)
                    onFolderCreated() // 업로드 후 FileList 새로고침
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fileInput.click()
    }, [teamId, currentFolderId, onFolderCreated])

    const handleCreateFolder = useCallback(
        async (folderName: string) => {
            if (!teamId || folderName.trim() === '') {
                alert('팀 또는 폴더 이름이 없습니다.')
                return
            }

            try {
                const folderId = currentFolderId ?? null
                console.log('parentId:', folderId)
                const response = await postfolder(teamId, folderId, folderName)
                console.log(response.data)
                onFolderCreated() // 폴더 생성 후 FileList 새로고침
                return true
            } catch (error) {
                console.error(error)
                return false
            }
        },
        [teamId, currentFolderId, onFolderCreated]
    )

    const handleDelete = useCallback(async () => {
        if (selectedFileId !== null) {
            await deleteFileFolder(teamId, selectedFileId, undefined)
        } else if (currentFolderId !== null) {
            await deleteFileFolder(teamId, undefined, currentFolderId)
        } else {
            alert('삭제할 대상을 선택하세요.')
            return
        }
        onFolderCreated()
    }, [teamId, selectedFileId, currentFolderId, onFolderCreated])

    return {
        handleDownload,
        handleUpload,
        handleCreateFolder,
        handleDelete,
    }
}
