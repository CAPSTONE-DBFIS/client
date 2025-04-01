import { positionsType } from '@/features/signup/type/position.type'

export const positions: positionsType[] = [
    {
        type: '개발',
        children: ['웹', '모바일', '데이터베이스'],
    },
    {
        type: '디자인',
        children: ['UI/UX', '그래픽', '제품'],
    },
    {
        type: '마케팅',
        children: ['디지털', '콘텐츠', '소셜미디어', 'SEO'],
    },
    {
        type: '데이터분석',
        children: ['인공지능', '빅데이터'],
    },
    {
        type: 'IT보안',
        children: ['정보', '네트워크', '사이버', '컨설팅'],
    },
    {
        type: '프로젝트 관리',
        children: ['프로젝트', '제품', '애자일', '스크럼'],
    },
    {
        type: '인사(HR)',
        children: ['인사관리', '채용', '교육및개발', '복리및후생'],
    },
    {
        type: '재무 및 회계',
        children: ['재무분석', '회계', '세무', '채무'],
    },
    {
        type: '고객서비스',
        children: ['지원', '경험', '기술', '콜센터'],
    },
    {
        type: '생산 및 운영',
        children: ['운영', '품질', '공급', '제조'],
    },
] as const
