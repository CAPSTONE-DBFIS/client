export type ChatType = {
    id: number
    name: string
    type: 'PERSONAL' | 'PROJECT'
    projectId: null | string
    favorite: boolean
}

export type llmModelType =
    | 'gpt-4o-mini'
    | 'gpt-4o'
    | 'claude-3-5-haiku-20241022'
    | 'claude-3-5-sonnet-20241022'
    | 'gemini-1.5-flash'
