import { colors } from '@/app/token'
import { keyframes, style, styleVariants } from '@vanilla-extract/css'

export const header = style({
    borderBottom: `1px solid ${colors['neutral-30']}`,

    width: '1024px',
    gap: '12px',
    paddingBottom: '24px',
})

const slideLeft = keyframes({
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
})

const slideRight = keyframes({
    '0%': { transform: 'translateX(-50%)' },
    '100%': { transform: 'translateX(0)' },
})

export const sliderWrapper = style({
    overflow: 'hidden',
    width: '100%',
    height: '120px',
    backgroundColor: '#fff',
})

export const slideTrack = style({
    display: 'flex',
    width: '1200px',

    ':hover': {
        animationPlayState: 'paused',
    },
})

export const slideTrackType = styleVariants({
    left: [slideTrack, { animation: `${slideLeft} 60s linear infinite` }],
    right: [slideTrack, { animation: `${slideRight} 60s linear infinite` }],
})

export const slideItem = style({
    flex: '0 0 auto',
    width: '200px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10px',
})

export const slideItemImg = style({
    width: '80px',
    height: 'auto',
    objectFit: 'contain',
})
