import axiosInstance from '@/shared/api/axios'

export const getSentiment = async (
    keyword: string,
    startDate: string,
    endDate: string,
    category?: string | null,
    foreign = false
) => {
    const response = await axiosInstance.get(
        '/api/insight/sentiment-analysis',
        {
            params: {
                keyword: keyword,
                startDate: startDate,
                endDate: endDate,
                category: category,
                foreign: foreign,
            },
        }
    )
    return response
}
