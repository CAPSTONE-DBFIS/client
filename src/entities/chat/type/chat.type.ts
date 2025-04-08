import { Message } from '@/entities/message/type/message.type'

export interface Chat<T extends string> {
    id: T
    title: T
    messages: Message[]
}
