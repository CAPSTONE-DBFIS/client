import { style } from '@vanilla-extract/css'

export const userNavContainer = style({
    gap: '20px',
})

export const btnBox = style({
    gap: '16px',
    "@media": {
        'screen and (max-width: 810px)' : {
            display: "none"
        }
    }
})