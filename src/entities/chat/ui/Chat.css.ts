import { style } from '@vanilla-extract/css'

export const profile = style({
    width: '24px',
    height: '24px',

    borderRadius: '50%',
})

export const button = style({
    minWidth: '32px',
    height: '32px',
    padding: '7px',
    borderRadius: '6px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '10px',
})

export const list = style({
    width: '670px',
    gap: '24px',
})

export const lists = style({
    display: 'flex',
    height: '700px',
    flexDirection: 'column',
    overflowY: 'auto',
    gap: '42px',
})
