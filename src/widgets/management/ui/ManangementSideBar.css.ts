import { colors } from '@/app/token'
import { style, styleVariants } from '@vanilla-extract/css'

export const headerContainer = style({
    gap: '6px',
    display: 'flex',
    flexDirection: 'column',
})

export const sectionHeader = style({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 18px',
})

export const menuItemClick = styleVariants({
    // 기본 상태
    default: {},
    // 선택된 상태
    selected: {
        backgroundColor: `${colors['neutral-10']}`,
    },
})

export const teamItem = style({
    display: 'flex',
    alignItems: 'center',
    padding: '5.5px 12px',
    borderRadius: '10px',
    gap: '12px',
    margin: '0 10px 6px 10px',
    ':hover': {
        backgroundColor: `${colors['neutral-10']}`,
    },
})

export const teamIcon = style({
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: `${colors['neutral-900']}`,
    color: 'white',
})

export const selectedTeamIcon = style({
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: `${colors['neutral-40']}`,
    color: `${colors['neutral-900']}`,
})

export const projectBox = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
})
