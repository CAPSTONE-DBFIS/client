import { style } from '@vanilla-extract/css'

export const emptyContainer = style({
    height: 'calc(100% - 130px)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
})

export const exampleButton = style({
    backgroundColor: '#f5f6f7',
    border: '1px solid #dfe2e6',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '13px',
    color: '#354764',
    transition: 'background 0.2s ease',
})

export const summaryText = style({
    textAlign: 'center'
})