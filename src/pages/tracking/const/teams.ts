import { ITeam } from '../types/team.types'

export const teams: ITeam[] = [
    {
        id: 1,
        name: '1팀',
        projects: [
            { id: 1, name: '00프로젝트' },
            { id: 2, name: '**프로젝트' },
            { id: 3, name: '$$프로젝트' },
        ],
    },
    {
        id: 2,
        name: '2팀',
        projects: [
            { id: 4, name: 'Alpha 프로젝트' },
            { id: 5, name: 'Beta 프로젝트' },
        ],
    },
    {
        id: 3,
        name: '3팀',
        projects: [
            { id: 6, name: 'Gamma 프로젝트' },
            { id: 7, name: 'Delta 프로젝트' },
        ],
    },
]
