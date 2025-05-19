import axiosInstance from '@/shared/api/axios'

export const postTeams = async (body: {
    name: string
    description: string
    role: string
}) => {
    const response = await axiosInstance.post(`/api/teams`, body)
    return response
}

export const postTeamMember = async (
    teamId: number,
    body: {
        memberId: string
        role: string
        teamRole: string
    }
) => {
    const response = await axiosInstance.post(
        `/api/teams/${teamId}/members`,
        body
    )
    return response
}

export const getMyTeams = async () => {
    const response = await axiosInstance.get(`/api/teams/my-teams`)
    return response
}
