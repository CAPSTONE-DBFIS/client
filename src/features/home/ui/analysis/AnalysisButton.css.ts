import { colors } from '@/app/token'
import { keyframes, style } from '@vanilla-extract/css'

export const container = style({
    width: '850px',
    minHeight: '32px',
    padding: '0px 20px',

    backgroundColor: colors['teal-500'],

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const growHeight = keyframes({
    '0%': { height: '0px' },
    '100%': { height: '175px' },
})

export const openedContainer = style({
    width: '760px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '6px 0px',
    animation: `${growHeight} 0.5s ease-out forwards`,
    overflow: 'hidden',
})

export const input = style({
    width: '620px',
    color: colors.white,
    borderBottom: `1px solid ${colors.white}`,
})

export const chatbotBtn = style({
    display: 'inline-flex',
    cursor: 'pointer',
    borderRadius: '8px',
    border: `1px solid ${colors['neutral-90']}`,

    padding: '6px 8px',

    ':hover': {
        border: `1px solid ${colors['white']}`,
    },
})
