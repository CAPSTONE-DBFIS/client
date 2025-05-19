import { style } from '@vanilla-extract/css'
import { colors } from '@/app/token'

export const buttonStyle = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '25px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: colors['white'],
    padding: '0px 10px',
    transition: 'background-color 0.2s ease',
    ':hover': {
        backgroundColor: colors['neutral-20'],
    },
    ':active': {
        backgroundColor: colors['neutral-30'],
    },
})
