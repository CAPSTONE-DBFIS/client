import { colors } from "@/app/token";
import { style } from "@vanilla-extract/css";

export const Icon = style({
    display: 'flex',
    flexDirection: 'column',
    width: '150px',
    height: '150px',
    padding: '23px 33px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    alignSelf: 'stretch',

    borderRadius: '12px',
    background: colors["neutral-30"],

})

