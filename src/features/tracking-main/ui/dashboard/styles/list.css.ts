import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const layout = style({
    height: 'auto',
    border: `1.5px solid ${colors['neutral-10']}`,
    borderRadius: '5px',
    padding: '16px 0',
    marginBottom: '25px',
})
export const header = style({
    padding: '0px 20px 16px 20px',
    borderBottom: `1.5px solid ${colors['neutral-20']}`,
})

export const mainData = style({
    margin: '16px 32px',
    gap: '8px',
})

export const tag = style({
    height: '22px',
    padding: '4px 8px',
    backgroundColor: colors['blue-50'],
    borderRadius: '10px',
    marginRight: '8px',
})

export const progressSection = style({
    marginBottom: '16px',
})

export const progressBarContainer = style({
    height: '10px',
    backgroundColor: colors['neutral-30'],
    borderRadius: '4px',
    overflow: 'hidden',
})

export const progressBar = style({
    height: '100%',
    backgroundColor: colors['neutral-900'],
    borderRadius: '4px',
})

export const showMenu = style({
    width: '90px',
    height: 'auto',
    maxHeight: '200px',
    position: 'absolute',
    top: '50px',
    right: '8px',
    transition: 'max-height 0.5s ease-in-out',
    zIndex: '10',
    border: '1px solid #B3B9C4',
    borderRadius: '10px',
    overflow: 'hidden',
})

export const listItem = style({
    padding: '11px 15px',
    borderBottom: '1px solid #B3B9C4',
    background: colors['neutral-20'],
    fontWeight: '600',

    ':last-child': {
        border: 'none',
    },
    ':hover': {
        background: colors['teal-500'],
    },
    ':active': {
        background: colors['teal-500'],
    },
})

export const listItemText = style({
    selectors: {
        [`${listItem}:hover &, ${listItem}:active &`]: {
            color: colors['white'], // 호버 및 클릭 시 텍스트 색상 변경
        },
    },
})

export const hideMenu = style({
    maxHeight: '0px',
    overflow: 'hidden',
})
