import { style } from '@vanilla-extract/css'

export const container = style({
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '360px',
    gap: '8px',
    padding: '16px 24px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    ':hover': {
        border: '1px solid #006374',
    },
    cursor: 'pointer',
})

export const wrapper = style({})

export const content = style({
    display: '-webkit-box',
    WebkitLineClamp: 5, // 보여줄 줄 수
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
})

export const typeLabel = style({
    padding: '2px 8px',
    borderRadius: '12px',
    backgroundColor: '#f2f4f6',
    width: 'fit-content',
})

export const image = style({
    minWidth: '240px',
    maxWidth: '240px',
    objectFit: 'cover',
    borderRadius: '12px',
    border: '1px solid #f2f4f6',
})

export const newsContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxHeight: '700px',
    minHeight: '300px',
    overflowY: 'auto',
    marginTop: '48px',
})
