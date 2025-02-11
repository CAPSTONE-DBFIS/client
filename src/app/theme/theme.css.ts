import { createGlobalTheme } from '@vanilla-extract/css'
import { colors, shadows } from '../token/token'
import { futura, pretendard } from '../styles/globalText.css'

export const vars = createGlobalTheme(':root', {
    // design system color(neutral, blue, red, yellow, green, teal)
    colors,
    // design system shadow(small, medium, large, xlarge)
    shadows,
    // typography 사용이 아닌 css 변수로 사용이 필요할 경우 -- 미권장
    font: {
        basic: pretendard,
        logo: futura,
    },
})
