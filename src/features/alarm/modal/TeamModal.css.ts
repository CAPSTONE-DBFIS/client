import { style } from '@vanilla-extract/css'
import { colors } from '@/app/token'

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '400px',
    borderRadius: '4px',
    backgroundColor: colors['white'],
    padding: '30px',
})
