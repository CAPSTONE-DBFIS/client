import { style } from '@vanilla-extract/css'

export const Container = style({
    boxSizing: 'border-box',
    padding: '20px 0px',
    height: `calc(100vh - 80px)`,
    display: 'flex',
    justifyContent: 'center',

    position: 'relative',
})
