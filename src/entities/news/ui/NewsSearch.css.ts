import { style } from '@vanilla-extract/css'

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px 24px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
})
