import { createStore } from 'zustand'
import { persist } from 'zustand/middleware'

type UserType = {
    memberId: string
    name: string
    department: string
    accessToken: string
    refreshToken: string
}

type AuthType = {
    userData: UserType
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}

type AuthAction = {
    setMemberId: (id: string) => void
    setAccessToken: (token: string) => void
    setRefreshToken: (token: string) => void
    setToken: (accessToken: string, refreshToken: string) => void
    setName: (name: string) => void
    setDepartment: (department: string) => void
}

export const useAuthStore = createStore(
    persist<AuthType & AuthAction>(
        (set) => ({
            isLoggedIn: false,
            userData: {
                memberId: '',
                accessToken: '',
                refreshToken: '',
                name: '',
                department: '',
            },
            login: () => set({ isLoggedIn: true }),
            logout: () =>
                set({
                    isLoggedIn: false,
                    userData: {
                        memberId: '',
                        accessToken: '',
                        refreshToken: '',
                        department: '',
                        name: '',
                    },
                }),
            accessToken: '',
            refreshToken: '',
            setMemberId: (id) =>
                set((state) => ({
                    userData: { ...state.userData, memberId: id },
                })),
            setAccessToken: (token) =>
                set((state) => ({
                    userData: { ...state.userData, accessToken: token },
                })),
            setRefreshToken: (token) =>
                set((state) => ({
                    userData: { ...state.userData, refreshToken: token },
                })),
            setToken: (accessToken, refreshToken) =>
                set((state) => ({
                    userData: { ...state.userData, accessToken, refreshToken },
                })),
            setName: (name) =>
                set((state) => ({
                    userData: { ...state.userData, name },
                })),
            setDepartment: (department) =>
                set((state) => ({
                    userData: { ...state.userData, department },
                })),
        }),
        {
            name: 'userInfoStorage',
        }
    )
)
