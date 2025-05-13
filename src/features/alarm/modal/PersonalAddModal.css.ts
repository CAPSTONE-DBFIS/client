import { style } from '@vanilla-extract/css'
import { colors } from '@/app/token'

export const container = style({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors['white'],
    padding: '5px 0 30px 0',
})
