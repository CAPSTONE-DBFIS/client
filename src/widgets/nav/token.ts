type NavlistProp = {
    url: string
    name: string
    key: string
}

export const navList: NavlistProp[] = [
    { name: '분석', url: '/analysis', key: 'nav-list-analysis' },
    { name: '추적', url: '/tracking', key: 'nav-list-tracking' },
    { name: '인사이트', url: '/insight', key: 'nav-list-insight' },
    { name: '커뮤니티', url: '/community', key: 'nav-list-community' },
    { name: '관리', url: '/management', key: 'nav-list-management' },
] as const
