export const categories = [
    '전체',
    'IT 일반',
    '과학/일반',
    '통신/뉴미디어',
    '인터넷/SNS',
    '컴퓨터',
    '모바일',
    '보안/해킹',
] as const

export type Category = (typeof categories)[number]

export interface CategoryList {
    count: number
    name: Category
}
