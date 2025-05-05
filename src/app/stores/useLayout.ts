import { create } from 'zustand'
import { colors } from '../token'
import { devtools } from 'zustand/middleware'

// NavTheme 상태
type layoutState = {
    isNav: boolean
    isFooter: boolean
    navColor: keyof typeof colors
}
// NavTheme 액션
type layoutAction = {
    navController: {
        showNav: () => void
        hideNav: () => void
    }
    footerController: {
        showFooter: () => void
        hideFooter: () => void
    }
    changeNavColor: (color: keyof typeof colors) => void
}

/**
 * NavTheme 상태와 액션을 관리하는 zustand store
 * @returns {layoutAction & layoutState} NavThemeState & NavThemeAction
 */
export const useLayoutStore = create<layoutAction & layoutState>()(
    devtools((set) => ({
        isNav: true,
        isFooter: true,
        navColor: 'white',
        navController: {
            showNav: () => set({ isNav: true }),
            hideNav: () => set({ isNav: false }),
        },
        footerController: {
            showFooter: () => set({ isFooter: true }),
            hideFooter: () => set({ isFooter: false }),
        },
        changeNavColor: (navColor: keyof typeof colors) => set({ navColor }),
    }))
)
