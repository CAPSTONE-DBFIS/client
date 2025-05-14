export type messagesType = {
    id: number
    message: string
    createdAt: string
    response: string
    sender: string
    source?: sourceType[]
    log?: string[]
}

export type sourceType = {
    id: string
    title: string
    content: string
    url: string
}
