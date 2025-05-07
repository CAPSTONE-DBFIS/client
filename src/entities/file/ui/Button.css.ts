import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const Container = style({
    display: 'flex',
    minWidth: '61px',
    height: '22px',
    padding: '0px 12px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',

    borderRadius: '12px',
    border: '1px solid ' + colors['neutral-700'],
    opacity: '0.9',
})
