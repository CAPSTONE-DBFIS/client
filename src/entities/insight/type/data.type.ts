export type InsightDataType = {
    id: number
    keyword: string
    frequency: number
}

export interface InsightDataDailyType extends InsightDataType {
    foreign: boolean
    rank: number
    rankChange?: number | null
    relatedKeywords: RelatedDataType[]
}

export interface RelatedDataType extends Omit<InsightDataType, 'keyword'> {
    relatedKeyword: string
}

export type CurrentKeywordType = {
    isDaily: boolean
    keyword: string
}
