import { colors } from '@/app/token'
import { keyframes, style, styleVariants } from '@vanilla-extract/css'

export const fadeRight = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
})
export const fadeLeft = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
})

export const toggleAuthContainer = style({
    width: '1025px',
    height: '800px',
    display: 'flex',
    padding: '0px 10px',
    alignItems: 'center',
    borderRadius: '20px',
    boxShadow:
        '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
})

export const pannelBase = style({
    width: '415px',
    height: '780px',
    backgroundColor: colors['teal-500'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',

    borderRadius: '20px',
    transition: 'transform 1.3s',
    zIndex: 2,
})

export const pannel = styleVariants({
    left: [pannelBase, { transform: 'translateX(0px)' }],
    right: [pannelBase, { transform: 'translateX(590px)' }],
})

export const contentBase = style({
    width: '600px',
    height: '800px',
    backgroundColor: colors['white'],
    zIndex: 1,
    transition: 'transform 1.3s',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

export const content = styleVariants({
    left: [
        contentBase,
        {
            animation: `${fadeLeft} 4s`,
            transform: 'translateX(-400px)',
        },
    ],
    right: [
        contentBase,
        {
            animation: `${fadeRight} 4s`,
            transform: 'translateX(0px)',
        },
    ],
})
