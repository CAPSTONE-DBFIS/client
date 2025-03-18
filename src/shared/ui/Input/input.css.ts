import { colors, fontSizes, fontWeights } from '@/app/token'
import { recipe } from '@vanilla-extract/recipes'

export const textLabel = recipe({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#FAFBFB',
        border: '1px solid #B3B9C4',
        color: colors['neutral-900'],
        ':focus': {
            borderColor: colors['teal-200'],
        },
        ':disabled': {},
    },
    variants: {
        size: {
            small: {
                gap: '0px',
                height: '32px',
                padding: '0 10px',
                borderRadius: '6px',
                ':hover': {
                    boxShadow: '0px 0px 0px 4px rgba(63, 81, 181, 0.2)',
                },
            },
            medium: {
                gap: '4px',
                height: '40px',
                padding: '0 14px',
                borderRadius: '8px',
                ':hover': {
                    boxShadow: '0px 0px 0px 4px rgba(63, 81, 181, 0.2)',
                },
            },
            large: {
                gap: '8px',
                height: '52px',
                padding: '0 18px',
                borderRadius: '12px',
                ':hover': {
                    boxShadow: '0px 0px 0px 4px #E6F4F6',
                },
            },
        },
    },
})

export const textInput = recipe({
    base: {
        ':placeholder-shown': {
            color: colors['neutral-200'],
        },
    },
    variants: {
        size: {
            small: {
                fontSize: fontSizes.body.fontSize,
                lineHeight: fontSizes.body.lineHeight,
                fontWeight: fontWeights.regular,
            },
            medium: {
                fontSize: fontSizes.title3.fontSize,
                lineHeight: fontSizes.title3.lineHeight,
                fontWeight: fontWeights.regular,
            },
            large: {
                fontSize: fontSizes.title2.fontSize,
                lineHeight: fontSizes.title2.lineHeight,
                fontWeight: fontWeights.regular,
            },
        },
    },
})
