import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthType = {
    memberId: string
    name: string
    department: string
    accessToken: string
    refreshToken: string
    isLoggedIn: boolean
    login: () => void
    logout: () => void
    setMemberId: (id: string) => void
    setAccessToken: (token: string) => void
    setRefreshToken: (token: string) => void
    setToken: (accessToken: string, refreshToken: string) => void
    setName: (name: string) => void
    setDepartment: (department: string) => void
}
export const useAuthStore = create(
    persist<AuthType>(
        (set) => ({
            isLoggedIn: false,
            memberId: '',
            name: '',
            department: '',
            accessToken: '',
            refreshToken: '',
            login: () => set({ isLoggedIn: true }),
            logout: () =>
                set({
                    isLoggedIn: false,
                    memberId: '',
                    name: '',
                    department: '',
                    accessToken: '',
                    refreshToken: '',
                }),
            setMemberId: (id) => set({ memberId: id }),
            setAccessToken: (token) => set({ accessToken: token }),
            setRefreshToken: (token) => set({ refreshToken: token }),
            setToken: (accessToken, refreshToken) =>
                set({ accessToken, refreshToken }),
            setName: (name) => set({ name }),
            setDepartment: (department) => set({ department }),
        }),
        {
            name: 'userInfoStorage',
        }
    )
)
