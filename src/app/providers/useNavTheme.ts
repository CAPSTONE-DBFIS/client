import { create } from 'zustand'
import { colors } from '../token'

type NavThemeState = {
    isNav: boolean
    navColor: string
}
type NavThemeAction = {
    showNav: () => void
    hideNav: () => void
    updateShowNav: (isNav: boolean) => void
    changeNavColor: (color: string) => void
}

export const useNavThemeStore = create<NavThemeState & NavThemeAction>()(
    (set) => ({
        isNav: true,
        navColor: colors.white,
        showNav: () => set({ isNav: true }),
        hideNav: () => set({ isNav: false }),
        updateShowNav: (isNav) => set({ isNav }),
        changeNavColor: (navColor) => set({ navColor }),
    })
)
