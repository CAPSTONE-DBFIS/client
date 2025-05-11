import { style } from '@vanilla-extract/css'

export const container = style({
    display: 'flex',
    padding: '12px 0px',
    justifyContent: 'center',
})

export const wrapper = style({
    width: '1600px',
    minHeight: '100vh',
    padding: '24px',
    borderRadius: '12px',
    background: '#ffffff',

    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
})
