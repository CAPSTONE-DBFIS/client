import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { colors, fontSizes, fontWeights } from '../token/token'

/**
 * responsiveProperties : Box 모델과 관련된 CSS 속성을 정의
 */
const responsiveProperties = defineProperties({
    properties: {
        display: ['none', 'block', 'inline-block', 'flex', 'grid'],
        flexDirection: ['row', 'column'],
        justifyContent: [
            'center',
            'flex-start',
            'flex-end',
            'space-between',
            'space-around',
        ],
        alignItems: ['center', 'flex-start', 'flex-end', 'stretch'],
        placeItems: ['center', 'flex-start', 'flex-end', 'stretch'],
    },
})

/**
 * colorProperties : 색상과 관련된 CSS 속성을 정의
 */
const colorProperties = defineProperties({
    conditions: {
        lightMode: {},
    },
    defaultCondition: 'lightMode',
    properties: {
        color: colors,
        background: colors,
    },
})

/**
 * typeScaleProperties : 텍스트와 관련된 CSS 속성을 정의
 */
const typeScaleProperties = defineProperties({
    properties: {
        fontSize: fontSizes,
        fontWeight: fontWeights,
    },
})

/**
 * sprinkles : Sprinkle 객체
 */
export const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties,
    typeScaleProperties
)

/**
 * Sprinkles : Sprinkle 객체 타입
 */
export type Sprinkles = Parameters<typeof sprinkles>[0]
