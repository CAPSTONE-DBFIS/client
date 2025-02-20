import { style } from '@vanilla-extract/css'

export const modalBackdrop = style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

export const modalContent = style({
    minWidth: '300px',
    backgroundColor: 'white',
    borderRadius: '4px',
})
