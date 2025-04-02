import { keyframes, style, styleVariants } from '@vanilla-extract/css'

const popupDefault = style({
    position: 'absolute',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'default',
    zIndex: 10,
})

const topShadow = style({
    boxShadow:
        'rgba(0, 0, 0, 0.1) -10px -10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px',
})

const bottomShadow = style({
    boxShadow:
        'rgba(0, 0, 0, 0.1) -10px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px',
})

export const popupArrow = styleVariants({
    top: [
        popupDefault,
        topShadow,
        {
            '::after': {
                position: 'absolute',
                borderTop: '0px solid transparent',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '10px solid #fff',
                content: '',
                top: '-5px',
                left: '0px',
            },
        },
    ],
    bottom: [
        popupDefault,
        bottomShadow,
        {
            '::after': {
                position: 'absolute',
                borderTop: '10px solid #fff',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '0px solid transparent',
                content: '',
                left: '0px',
                bottom: '-5px',
            },
        },
    ],
    none: [popupDefault, bottomShadow],
})

const popupKeyframes = keyframes({
    '0%': {
        transform: 'scale(0.5)',
    },
    '50%': {
        transform: 'scale(1.05)',
    },
    '100%': {
        transform: 'scale(1)',
    },
})

export const popupAnimation = style({
    animation: `${popupKeyframes} 0.5s ease forwards`,
})
