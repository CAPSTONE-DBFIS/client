import { style } from '@vanilla-extract/css'

export const toastContainerStyle = style({
    position: 'relative',
    width: '300px',
})

export const toastStyle = style({
    width: '300px',
    minHeight: '50px',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '6px',

    marginBottom: '12px',
})

export const toastStackStyle = style({
    position: 'absolute',
    transform: 'translate3d(0, var(--y), 0) scale(var(--s))',
    transition: 'transform 0.3s',
    zIndex: 100,
})
