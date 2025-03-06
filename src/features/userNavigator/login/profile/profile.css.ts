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
    }
})

export const notSelect = style({
    userSelect: 'none',
})

export const profileOptionBox = style({
    cursor: 'pointer',
})
