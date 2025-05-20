import axiosInstance from '@/shared/api/axios'

export const putProject = async (
    projectId: number,
    body: {
        name: string
    }
) => {
    const response = await axiosInstance.put(
        `/api/trprojects/${projectId}`,
        body
    )
    return response
}

export const delProject = async (projectId: number) => {
    const response = await axiosInstance.delete(`/api/trprojects/${projectId}`)
    return response
}

export const postProject = async (body: { teamId: number; name: string }) => {
    const response = await axiosInstance.post(`/api/trprojects`, body)
    return response
}

export const getProject = async (projectId?: number) => {
    const url = projectId
        ? `/api/trprojects/my/${projectId}`
        : `/api/trprojects/my`

    const response = await axiosInstance.get(url)
    return response
}

export const getReport = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}`
    )
    return response
}

export const putKeyword = async (
    id: number,
    body: {
        trackingInterval: number
        startDate: string
        endDate: string
    }
) => {
    const response = await axiosInstance.put(
        `/api/tracking-keywords/${id}`,
        body
    )
    return response
}

export const delKeyword = async (id: number) => {
    const response = await axiosInstance.delete(`/api/tracking-keywords/${id}`)
    return response
}

export const postKeyword = async (body: {
    keyword: string
    startDate: string
    endDate: string
    trackingInterval: number
    projectId: number
}) => {
    const response = await axiosInstance.post(`/api/tracking-keywords`, body)
    return response
}

export const getKeyword = async (id?: number) => {
    const url = id ? `/api/tracking-keywords/${id}` : `/api/tracking-keywords`

    const response = await axiosInstance.get(url)
    return response
}
