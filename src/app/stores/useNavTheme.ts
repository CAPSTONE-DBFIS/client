import { create } from 'zustand'
import { colors } from '../token'
import { devtools } from 'zustand/middleware'

// NavTheme 상태
type NavThemeState = {
    isNav: boolean
    navColor: keyof typeof colors
}
// NavTheme 액션
type NavThemeAction = {
    navController: {
        showNav: () => void
        hideNav: () => void
    }
    changeNavColor: (color: keyof typeof colors) => void
}

/**
 * NavTheme 상태와 액션을 관리하는 zustand store
 * @returns {NavThemeState & NavThemeAction} NavThemeState & NavThemeAction
 */
export const useNavThemeStore = create<NavThemeState & NavThemeAction>()(
    devtools((set) => ({
        isNav: true,
        navColor: 'white',
        navController: {
            showNav: () => set({ isNav: true }),
            hideNav: () => set({ isNav: false }),
        },
        changeNavColor: (navColor: keyof typeof colors) => set({ navColor }),
    }))
)
