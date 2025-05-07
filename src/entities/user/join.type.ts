export interface IJoin {
    id: string
    name: string
    nickname: string
    email: string
    phone: string
    password: string
    department: string
    role: string
}

export type JoinKey = keyof IJoin
