import { style } from '@vanilla-extract/css'

export const profile = style({
    width: '24px',
    height: '24px',

    borderRadius: '50%',
})

export const button = style({
    minWidth: '32px',
    height: '32px',
    padding: '7px',
    borderRadius: '6px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '10px',
})

export const list = style({
    minWidth: '1200px',
    gap: '24px',
})

export const listContainer = style({
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 200px)',
})

export const lists = style({
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100vh - 100px)',
    overflowY: 'auto',
    gap: '42px',
})

export const inputContainer = style({
    bottom: '20px',
    width: '1200px',
    height: '90px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
    background: 'white',
    borderRadius: '30px',
    boxShadow:
        '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
    zIndex: 10,
})

export const input = style({
    width: '100%',
    height: '100%',
    padding: '0 16px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '16px',
    color: '#091E42 ',
    selectors: {
        '&::placeholder': {
            color: '#5D6B82',
        },
    },
})

export const inputSelect = style({
    width: '100%',
    height: '100%',
    padding: '0 16px',

    display: 'flex',
    gap: '24px',
})

export const inputBtn = style({
    width: '38px',
    height: '38px',

    flexShrink: 0,
    backgroundColor: '#005665',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const response = style({
    fontFamily: 'Pretendard',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

export const bottomPadding = style({
})
