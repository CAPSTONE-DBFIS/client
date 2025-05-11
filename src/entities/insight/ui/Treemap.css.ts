import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%',
    height: '500px',
    background: '#fff',
    borderRadius: '12px',
    padding: '16px 24px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 8px',

    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
})

export const wrapper = style({
    width: '100%',
    height: '400px',
})
