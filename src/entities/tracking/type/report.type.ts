export interface IReportLlm {
    articleCntChange: string
    createdAt: string
    createdOrder: number
    id: number
    keyword: string
    llmDescription: string
}

export interface IReportSentiments {
    createOrder: number
    date: string
    negativeCount: number
    neutralCount: number
    positiveCount: number
}

export interface IReportKeyword {
    createdOrder: number
    date: string
    word: string
    frequency: number
}

export interface IReportNews {
    createdOrder: number
    date: string
    companyName: string
    frequency: number
}

export interface IReportArticle {
    createOrder: number
    date: string
    articleCount: number
}

export interface OverViewData extends IReportLlm {
    media: IReportNews[]
    article: IReportArticle[]
}

export interface KeywordData extends IReportLlm {
    relatedWord: IReportKeyword[]
    setiments: IReportSentiments[]
}
