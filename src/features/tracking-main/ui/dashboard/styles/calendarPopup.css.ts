import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const progressSection = style({
    marginBottom: '16px',
})

export const progressBarContainer = style({
    height: '10px',
    backgroundColor: colors['neutral-30'],
    borderRadius: '100px',
    overflow: 'hidden',
})

export const progressBar = style({
    height: '100%',
    backgroundColor: colors['neutral-900'],
    borderRadius: '4px',
})
