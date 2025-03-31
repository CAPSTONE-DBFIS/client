import { style } from '@vanilla-extract/css'
import { colors, fonts } from '@/app/token'
export const sidebarContainer = style({
    display: 'flex',
    flexDirection: 'column',
    width: '259px',
    backgroundColor: 'white',
    // border: '1px solid black',
    borderRadius: '20px',
    position: 'relative',
    top: '30px',
    marginBottom: '37px',
    height: 'calc(100vh - 80px)',
})

export const header = style({
    width: 'inherit',
    padding: '20px 8px 12px 8px',
    borderBottom: `1.5px solid ${colors['neutral-20']}`,
    color: `${colors['neutral-300']}`,
    fontFamily: `${fonts['futura']}`,
    fontSize: '11px',
})

export const main = style({
    padding: '12px 10px ',
})
