import { colors } from "@/app/token";
import { style } from "@vanilla-extract/css";

export const fileTable = style({
    display: 'grid',
})

export const fileTableRow = style({
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr',
    gap: '12px',
    padding: '12px 0px',
})

export const fileTableHeader = style({
    borderBottom: '1px solid ' + colors['neutral-30'],
})