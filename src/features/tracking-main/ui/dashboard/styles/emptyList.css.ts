import { colors, shadows } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 40px',
    minHeight: '400px',
    textAlign: 'center',
    border: `1.5px dashed ${colors['neutral-30']}`,
    background: 'linear-gradient(135deg, #f8fafc 0%,rgba(9, 30, 66, 0.02)100%)',
    borderRadius: '16px',
})

export const iconContainer = style({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '24px',
})

export const featureList = style({
    gap: '16px',
    marginBottom: '32px',
    width: '100%',
    maxWidth: '320px',
})

export const featureIcon = style({
    width: '32px',
    height: '32px',
    backgroundColor: colors['blue-50'],
    borderRadius: '6px',
    flexShrink: 0,
})

export const button = style({
    backgroundColor: colors['neutral-900'],

    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    ':hover': {
        boxShadow: shadows.large,
    },
})
