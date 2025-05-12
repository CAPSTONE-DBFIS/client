import { colors } from "@/app/token";
import { style } from "@vanilla-extract/css";

export const container = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '4px 8px',
    borderRadius: '4px',
    width: 'fit-content',
    backgroundColor: colors["teal-500"],

    marginTop: '24px',
    position: 'relative',
})

export const modalContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px',

    width: '800px',
    height: '500px',
    overflowY: 'scroll',
    borderRadius: '12px',
    position: 'fixed',
    top: '10%',
    left: '30%',
    backgroundColor: colors["white"],
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    zIndex: 1000,
})

export const anchor = style({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
    color: colors["teal-500"],
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',

    ':hover': {
        textDecoration: 'underline',
    },
})

export const sourceBox = style({
    borderTop: `1px solid ${colors["neutral-200"]}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '12px 8px',
})

export const button = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '4px 8px',
    borderRadius: '4px',
    width: 'fit-content',
    backgroundColor: colors["teal-500"],
})