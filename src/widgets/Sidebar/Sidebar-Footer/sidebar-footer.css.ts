import { style } from '@vanilla-extract/css'
import { colors, shadows } from '@/app/token'

export const footer = style({
    width: '225px',
    gap: '11px',
    margin: '20px 17px',
    position: 'absolute',
    bottom: '0',
})

export const footerItem = style({
    flexDirection: 'row',
    height: '45px',
    padding: '10px 10.5px',
    border: `1px solid ${colors['neutral-30']} `,
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    ':hover': {
        boxShadow: `${shadows['small']}`,
    },
})

export const circle = style({
    height: '24px',
    width: '24px',
    borderRadius: '99px',
    backgroundColor: `${colors['neutral-20']}`,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
})

export const user = style({
    height: '24px',
    width: '24px',
    borderRadius: '99px',
    backgroundColor: `${colors['neutral-900']}`,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
})

export const footerText = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
})
