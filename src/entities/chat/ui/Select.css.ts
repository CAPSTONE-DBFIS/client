// Select.css.ts
import { style } from '@vanilla-extract/css'

export const container = style({
    position: 'relative',
    width: '100px',
    maxWidth: '200px',
})

export const selectBox = style({
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const dropdown = style({
    position: 'absolute',
    bottom: '100%', // ⬅️ 위로 열리게 설정
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: '8px',
    marginBottom: '6px',
    zIndex: 10,
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
})

export const option = style({
    padding: '5px 6px',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#f5f5f5',
    },
})
