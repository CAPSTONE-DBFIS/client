import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const cell = style({
    width: '100%',
    padding: '12px 0px',
    borderBottom: `1px solid ${colors['neutral-10']}`,

    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
})
export const listContainer = style({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: '18px',
})

export const chatList = style({
    maxHeight: '150px',
    overflowY: 'auto',
    position: 'relative',
})

export const chat = style({
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '20px 0px 0px 20px',
})

export const selectedChat = style({
    backgroundColor: colors['neutral-10'],
})

export const selectedEdit = style({
    borderRadius: '20px 0px 0px 20px',
    backgroundColor: colors['neutral-20'],

    position: 'absolute',
    right: '0px',
    bottom: '0',
    width: '80px',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
})

export const chatName = style({
    width: '180px',
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis', // 로 ... 을 만들기
    whiteSpace: 'nowrap', // 아래줄로 내려가는 것을 막기위해
    wordBreak: 'break-all',
})
