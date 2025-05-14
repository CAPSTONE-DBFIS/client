import axiosInstance from '@/shared/api/axios'

export const getDomesticInsight = async (date: string) => {
    const response = await axiosInstance.get('/api/insight?date=' + date)
    return response
}

export const getOverseasInsight = async (date: string) => {
    const response = await axiosInstance.get(
        '/api/insight/foreign?date=' + date
    )
    return response
}

export const getDomesticWeeklyInsight = async (date: string) => {
    const response = await axiosInstance.get('/api/insight/weekly?date=' + date)
    return response
}

export const getOverseasWeeklyInsight = async (date: string) => {
    const response = await axiosInstance.get(
        '/api/insight/foreign/weekly?date=' + date
    )
    return response
}

export const getCaegoryInsight = async (category: boolean) => {
    const response = await axiosInstance.get(
        '/api/insight/categories?foreign=' + category
    )
    return response
}

export const getInsightSeach = async (
    keyword: string,
    startDate: string,
    endDate: string,
    category?: string | null,
    foreign = false
) => {
    const allCategory = category === '전체' ? null : category
    const response = await axiosInstance.get('/api/insight/search', {
        params: {
            keyword: keyword,
            startDate: startDate,
            endDate: endDate,
            category: allCategory,
            foreign: foreign,
        },
    })
    return response
}
