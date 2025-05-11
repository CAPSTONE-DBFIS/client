import { colors, shadows } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const layout = style({
    marginTop: '30px',
    overflowY: 'auto',
})

export const deleteModal = style({
    padding: '20px',
    gap: '27px',
    width: '367px',
    height: '219px',
})
export const delBtn = style({
    border: `1px solid ${colors['red-300']} `,
    borderRadius: '12px',
    width: '100%',
    height: '43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
        '&:hover, &:active': {
            boxShadow: shadows['medium'],
        },
    },
})
export const backBtn = style({
    background: colors['teal-500'],
    border: `1px solid ${colors['teal-500']} `,
    borderRadius: '12px',
    display: 'flex',
    height: '43px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
        '&:hover, &:active': {
            boxShadow: shadows['medium'],
        },
    },
})

export const editModal = style({
    padding: '20px',
    width: '367px',
    gap: '24px',
})

export const editBtn = style({
    border: `1px solid ${colors['teal-500']} `,
    background: colors['teal-500'],
    borderRadius: '12px',
    width: '100%',
    height: '43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
        '&:hover, &:active': {
            boxShadow: shadows['medium'],
        },
    },
})

export const editBackBtn = style({
    border: `1px solid ${colors['teal-500']} `,
    borderRadius: '12px',
    display: 'flex',
    height: '43px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
        '&:hover, &:active': {
            boxShadow: shadows['medium'],
        },
    },
})

export const twoinput = style({
    padding: '4px 0',
    width: '100%',
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
    marginTop: '8px',
})

export const btn = style({
    padding: '12px 32px',
    border: `1px solid ${colors['neutral-900']}`,
    borderRadius: '10px',
})

export const select = style({
    width: '100%',
    height: '36px',
    padding: '0 10px',
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
    position: 'absolute',
    top: '100%',
    left: '0',
    zIndex: 10,
    width: '100%',
    backgroundColor: '#FAFBFB',
    border: '1px solid #B3B9C4',
    borderRadius: '6px',
    marginTop: '8px',
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
    height: '36px',
    padding: '0 10px',
    borderRadius: '1px',
    display: 'flex',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    borderBottom: `1px solid ${colors['neutral-30']}`,
    alignItems: 'center',
    ':last-child': {
        borderBottom: 'none',
    },
})
