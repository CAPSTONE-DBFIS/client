import axiosInstance from '@/shared/api/axios'

export const getTeams = async () => {
    const response = await axiosInstance.get('/api/teams/my-teams')
    return response
}

export const getFolder = async (teamId: number, folderId?: number) => {
    const url = folderId
        ? `/api/teams/${teamId}/folders/${folderId}/contents`
        : `/api/teams/${teamId}/folders/contents`

    const response = await axiosInstance.get(url)
    return response
}

export const getRecommend = async (teamId: number) => {
    const response = await axiosInstance.get(
        `/api/teams/${teamId}/files/recommend`
    )
    return response
}

export const postUpload = async (
    teamId: number,
    folderId: number | null,
    formData: FormData
) => {
    const response = await axiosInstance.post(
        `/api/teams/${teamId}/folders/${folderId}/files`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    )
    return response
}

export const postfolder = async (
    teamId: number,
    parentId: number | null,
    name: string
) => {
    const response = await axiosInstance.post(`/api/teams/${teamId}/folders`, {
        teamId,
        parentId,
        name,
    })
    return response
}

export const getDownload = async (teamId: number, fileId: number) => {
    return await axiosInstance.get(`/api/teams/${teamId}/files/${fileId}`, {
        responseType: 'arraybuffer', // 바이너리 데이터로 받기
    })
}

export const deleteFileFolder = async (
    teamId: number,
    fileId?: number,
    folderId?: number
) => {
    if (folderId !== undefined && folderId !== null) {
        return await axiosInstance.delete(
            `/api/teams/${teamId}/folders/${folderId}`
        )
    }

    if (fileId !== undefined && fileId !== null) {
        return await axiosInstance.delete(
            `/api/teams/${teamId}/files/${fileId}`
        )
    }

    throw new Error('삭제할 파일 또는 폴더 ID가 필요합니다.')
}
