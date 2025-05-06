import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const teamList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
})

export const teamLogo = style({
    display: 'flex',
    width: 25,
    height: 25,
    padding: '1px 7px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 8,
    background: colors['neutral-40'],
})

export const teamItem = style({
    padding: '0px 10px',
    width: '240px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
    borderRadius: 10,
    background: colors['neutral-10'],
})
