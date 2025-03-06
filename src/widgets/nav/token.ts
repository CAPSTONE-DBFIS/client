type NavlistProp = {
    url: string
    name: string
}

export const navList: NavlistProp[] = [
    { name: '분석', url: '/analysis' },
    { name: '추적', url: '/tracking' },
    { name: '인사이트', url: '/insight' },
    { name: '커뮤니티', url: '/community' },
    { name: '관리', url: '/management' },
] as const
