import { colors } from '@/app/token'
import { styleVariants, style } from '@vanilla-extract/css'

const Iicon = style({
    width: '6px',
    height: '6px',
    borderRadius: '50%',
})

export const iIconTypes = styleVariants({
    end: [Iicon, { backgroundColor: colors['red-75'] }],
    now: [Iicon, { backgroundColor: colors['blue-100'] }],
})
