import { departmentListType } from '@/features/signup/type/department.type'

export const DEPARTMENT_LIST: departmentListType[] = [
    {
        id: 'dt:li:fis',
        companyName: 'DB.fis',
        departments: [
            {
                department: '관리',
                children: [
                    {
                        department: '총무',
                    },
                    {
                        department: '관리',
                    },
                    {
                        department: '인사',
                    },
                ],
            },
            {
                department: '기술',
                children: [
                    {
                        department: '품질관리',
                    },
                ],
            },
            {
                department: '생산',
                children: [
                    {
                        department: '생산',
                    },
                    {
                        department: '상품관리',
                    },
                    {
                        department: '기술',
                    },
                ],
            },
            {
                department: '영업',
                children: [
                    {
                        department: '국내',
                    },
                    {
                        department: '해외',
                    },
                ],
            },
            {
                department: '개발',
                children: [
                    {
                        department: '모바일',
                    },
                    {
                        department: 'PC',
                    },
                    {
                        department: '보안',
                    },
                    {
                        department: '통신',
                    },
                ],
            },
        ],
    },
    {
        id: 'dt:li:inc',
        companyName: 'DB.inc',
        departments: [
            {
                department: '관리',
                children: [
                    {
                        department: '총무',
                    },
                    {
                        department: '관리',
                    },
                    {
                        department: '인사',
                    },
                ],
            },
            {
                department: '기술',
                children: [
                    {
                        department: '품질관리',
                    },
                ],
            },
            {
                department: '생산',
                children: [
                    {
                        department: '생산',
                    },
                    {
                        department: '상품관리',
                    },
                    {
                        department: '기술',
                    },
                ],
            },
            {
                department: '영업',
                children: [
                    {
                        department: '국내',
                    },
                    {
                        department: '해외',
                    },
                ],
            },
            {
                department: '개발',
                children: [
                    {
                        department: '모바일',
                    },
                    {
                        department: 'PC',
                    },
                    {
                        department: '보안',
                    },
                    {
                        department: '통신',
                    },
                ],
            },
        ],
    },
] as const
