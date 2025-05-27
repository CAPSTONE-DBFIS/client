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

export const getCalendar = async (id?: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-keywords/project/${id}`
    )
    return response
}

export const getList = async (projectId?: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/list/${projectId}`
    )
    return response
}

export const getListWord = async (projectId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/list/${projectId}/related_word`
    )
    return response
}

//보고서
export const getLlm = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}`
    )
    return response
}

export const getSentiments = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}/sentiments_counts`
    )
    return response
}

export const getRelatedWord = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}/related_word_counts`
    )
    return response
}
export const getMedia = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}/media_counts`
    )
    return response
}

export const getArticle = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}/article_counts`
    )
    return response
}
