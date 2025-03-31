import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const layout = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: `${colors['neutral-10']}`,
})
