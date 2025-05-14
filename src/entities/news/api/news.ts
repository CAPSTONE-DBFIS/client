import axiosInstance from '@/shared/api/axios'

export const getSentiment = async (
    keyword: string,
    startDate: string,
    endDate: string,
    category?: string | null,
    foreign = false
) => {
    const allCategory = category === '전체' ? null : category
    const response = await axiosInstance.get(
        '/api/insight/sentiment-analysis',
        {
            params: {
                keyword: keyword,
                startDate: startDate,
                endDate: endDate,
                category: allCategory,
                foreign: foreign,
            },
        }
    )
    return response
}
