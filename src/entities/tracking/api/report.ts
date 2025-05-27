import axiosInstance from '@/shared/api/axios'

export const getLlm = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}`
    )
    return response
}

//긍부정
export const getSentiments = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}/sentiments_counts`
    )
    return response
}

//연관어
export const getRelatedWord = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}/related_word_counts`
    )
    return response
}

//언론사개수
export const getMedia = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}/media_counts`
    )
    return response
}

//일주일동안의기사수
export const getArticle = async (keywordId: number) => {
    const response = await axiosInstance.get(
        `/api/tracking-results/${keywordId}/article_counts`
    )
    return response
}
