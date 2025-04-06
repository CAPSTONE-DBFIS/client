import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '154px',
    height: '32px',
    borderRadius: '50px',
    backgroundColor: colors['teal-500'],

    display: 'flex',
    alignItems: 'center',
    padding: '8px 20px',
})
