import { useEffect, useState, useCallback } from 'react'
import { getFolder } from '@/entities/file/api/file'
import { sortFiles, SortType } from './sortFiles'
import { IFileItem } from '../type/IFileItem.type'

export function useFileList(
    teamId: number,
    folderId: number | null,
    sortOrder: SortType
) {
    const [files, setFiles] = useState<IFileItem[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<unknown>(null)

    const fetchFiles = useCallback(async () => {
        setLoading(true)
        try {
            const res = await getFolder(teamId, folderId ?? 0)
            const sorted = sortFiles(res.data, sortOrder)
            setFiles(sorted)
            setError(null)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }, [teamId, folderId, sortOrder])

    useEffect(() => {
        fetchFiles()
    }, [fetchFiles])

    return {
        files,
        refetch: fetchFiles,
        loading,
        error,
    }
}
