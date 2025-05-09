import { colors } from '@/app/token'
import { style, styleVariants } from '@vanilla-extract/css'

export const layout = style({
    width: '240px',

    gap: '12px',
})

export const headerContainer = style({
    gap: '6px',
    display: 'flex',
    flexDirection: 'column',
})

export const sectionHeader = style({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 8px 12px 8px',
})

export const menuItem = style({
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '19px',
    cursor: 'pointer',
    gap: '16px',
    borderRadius: '20px 0 0 20px',
    ':hover': {
        backgroundColor: `${colors['neutral-10']}`,
    },
})

export const menuItemClick = styleVariants({
    // 기본 상태
    default: {},
    // 선택된 상태
    selected: {
        backgroundColor: `${colors['neutral-10']}`,
    },
})

export const hoverItem = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '34px',
    height: '36px',
    borderRadius: '20px 0 0 20px',
    backgroundColor: `${colors['neutral-20']}`,
})

export const menuItemIcon = style({
    marginRight: '10px',
    fontSize: '12px',
    width: '20px',
    display: 'flex',
    justifyContent: 'center',
})

export const menuItemText = style({
    fontSize: '14px',
    marginLeft: '16px',
})

export const taskItem = style({
    display: 'flex',
    alignItems: 'center',
    padding: '5.5px 12px',
    borderRadius: '10px',
    gap: '16px',

    ':hover': {
        backgroundColor: `${colors['neutral-10']}`,
    },
})

export const clickTaskItem = style({
    display: 'flex',
    alignItems: 'center',
    padding: '5.5px 12px',
    borderRadius: '10px',
    gap: '12px',
    margin: '0 10px 6px 10px',
    backgroundColor: `${colors['neutral-10']}`,
})

export const taskIcon = style({
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: `${colors['neutral-900']}`,
    color: 'white',
})

export const selectedTaskIcon = style({
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: `${colors['neutral-40']}`,
    color: `${colors['neutral-900']}`,
})
