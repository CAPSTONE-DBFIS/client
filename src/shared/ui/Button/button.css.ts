import { colors } from '@/app/token'
import { recipe } from '@vanilla-extract/recipes'

export const button = recipe({
    base: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',

        whiteSpace: 'nowrap',
    },
    variants: {
        size: {
            small: {
                height: '32px',
                borderRadius: '6px',
                padding: '0px 10px',
            },
            medium: {
                height: '40px',
                borderRadius: '8px',
                padding: '0px 14px',
            },
            large: {
                height: '52px',
                borderRadius: '12px',
                padding: '0px 18px',
            },
        },
        color: {
            primary: {
                border: 'none',
                backgroundColor: colors['teal-300'],
                color: '#fff',
                ':hover': {
                    backgroundColor: colors['teal-400'],
                },
                ':active': {
                    backgroundColor: colors['teal-400'],
                },
                ':disabled': {
                    backgroundColor: '#C2C7D0',
                },
            },
            secondary: {
                border: 'none',
                backgroundColor: colors['teal-50'],
                color: colors['teal-500'],
                ':hover': {
                    backgroundColor: colors['teal-75'],
                },
                ':active': {
                    backgroundColor: colors['teal-100'],
                },
                ':disabled': {
                    backgroundColor: '#EBEDF0',
                },
            },
            tertiary: {
                backgroundColor: '#fff',
                color: colors['teal-500'],
                border: `1px solid ${colors['teal-500']}`,
                ':hover': {
                    backgroundColor: colors['teal-50'],
                },
                ':active': {
                    backgroundColor: colors['teal-75'],
                },
                ':disabled': {
                    backgroundColor: '#F5F6F7',
                    border: '1px solid #C2C7D0',
                },
            },
        },
    },
})
