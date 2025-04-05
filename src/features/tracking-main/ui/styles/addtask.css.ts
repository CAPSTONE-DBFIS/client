import { colors, fontSizes } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const layout = style({
    height: 'auto',
    width: '1019px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxSizing: 'border-box',
})

export const header = style({
    padding: '24px 24px',
    borderBottom: `2px solid ${colors['neutral-20']}`,
})

export const number = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: colors['neutral-900'],
    borderRadius: '99px',
    height: '30px',
    width: '30px',
    marginRight: '8px',
})

export const input = style({
    padding: '24px 38px 0 38px',
})

export const keywoard = style({
    width: '100%',
    height: '58px',
    padding: '0 18px',
    marginBottom: '8px',
    fontSize: `${fontSizes['title2']}`,
    border: '1px solid #B3B9C4',
    borderRadius: '12px',
    backgroundColor: '#FAFBFB',
    selectors: {
        '&:hover': {
            boxShadow: '0px 0px 0px 4px #E6F4F6',
        },
        '&:focus': {
            borderColor: colors['teal-200'],
        },
        '&::placeholder': {
            color: '#6B788E',
        },
    },
})

export const twoinput = style({
    padding: '4px 0',
    width: '893px',
})

export const section = style({
    padding: '20px 24px',
})

export const tag = style({
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    padding: '6px 12px',
    backgroundColor: colors['blue-50'],
    borderRadius: '16px',
    marginRight: '12px',
})

export const btn = style({
    padding: '12px 32px',
    border: `1px solid ${colors['neutral-900']}`,
    borderRadius: '10px',
})

export const select = style({
    width: '100%',
    height: '58px',
    padding: '0 16px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    color: colors['neutral-900'],
    borderBottom: `1px solid ${colors['neutral-30']}`,
    ':focus': {
        borderColor: colors['teal-200'],
    },
})

export const dropdownContainer = style({
    backgroundColor: '#FAFBFB',
    border: '1px solid #B3B9C4',
    borderRadius: '12px',
})

export const dropdownButton = style({
    alignItems: 'center',
    width: '100%',
    height: '58px',
    padding: '16px 8px',
    background: 'white',
    border: `1px solid ${colors['neutral-20']}`,
    borderRadius: '4px',
    cursor: 'pointer',
})

export const dropdownOption = style({
    display: 'flex',
    width: '100%',
    padding: '18px 16px',
    textAlign: 'left',
    cursor: 'pointer',
    borderBottom: `1px solid ${colors['neutral-30']}`,

    ':last-child': {
        borderBottom: 'none',
    },
    ':hover': {
        background: colors['neutral-20'],
    },
})
