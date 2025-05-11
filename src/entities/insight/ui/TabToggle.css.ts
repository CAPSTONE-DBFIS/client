import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const tabComponent = style({
    maxWidth: '100%',
    verticalAlign: 'middle',
})

export const tab = style({
    position: 'relative',
    padding: '8px 12px',
    borderRadius: '6px',
})

export const tabLink = style({
    padding: '0',
    margin: '0 auto',
    maxWidth: '400px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
})

export const anchor = recipe({
    base: {
        height: '36px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    variants: {
        active: {
            true: {
                color: 'var(--active-color)', // active 상태일 때만 색상 적용
            },
            false: {
                color: '#ccc', // 비활성화 상태
            },
        },
    },
})
