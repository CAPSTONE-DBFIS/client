import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const InfoContainer = style({
    width: '280px',
    height: '300px',
    borderRadius: '10px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',

    backgroundColor: colors['neutral-20'],
})
export const InfoCell = style({
    width: '240px',
    height: '55px',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: colors['white'],

    display: 'flex',
    alignItems: 'center',
    gap: '10px',
})
