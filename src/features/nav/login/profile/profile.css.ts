import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const profileContainer = style({
    gap: '10px',
})

export const profileTextBox = style({
    '@media': {
        'screen and (max-width: 700px)': {
            display: 'none',
        },
    },
})

export const profileImgBox = style({
    width: '40px',
    height: '40px',
    border: `1px solid ${colors['teal-500']}`,
    borderRadius: '50%',
    backgroundColor: '#FAFBFB',
    ':hover': {
        border: `1px solid ${colors['teal-100']}`,
    },
})

export const notSelect = style({
    userSelect: 'none',
})

export const profileOptionBox = style({
    cursor: 'pointer',
})

export const profileOptionMenu = style({
    width: '110px',
    display: 'flex',
    flexDirection: 'column',
})

export const profileOptionMenuCell = style({
    backgroundColor: colors['neutral-10'],
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 10px',
    gap: '10px',
    ':hover': {
        backgroundColor: colors.white,
        color: colors['teal-500'],
    },
    ':first-child': {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
    },
    ':last-child': {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
    },
})
