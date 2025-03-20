import { create } from 'zustand'
import { colors } from '../token'

// NavTheme 상태
type NavThemeState = {
    isNav: boolean
    navColor: string
}
// NavTheme 액션
type NavThemeAction = {
    showNav: () => void
    hideNav: () => void
    updateShowNav: (isNav: boolean) => void
    changeNavColor: (color: string) => void
}

/**
 * NavTheme 상태와 액션을 관리하는 zustand store
 * @returns {NavThemeState & NavThemeAction} NavThemeState & NavThemeAction
 */
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
