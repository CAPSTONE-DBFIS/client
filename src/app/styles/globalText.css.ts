import { globalFontFace, style } from '@vanilla-extract/css'
// futura
import futuraFont from '@/shared/asset/font/futur.woff'
// jalnan
import jalnan2 from '@/shared/asset/font/Jalnan2.woff'
// pretendard
import pretendardRegular from '@/shared/asset/font/Pretendard-Regular.woff'
import pretendardMedium from '@/shared/asset/font/Pretendard-Medium.woff'
import pretendardSemibold from '@/shared/asset/font/Pretendard-SemiBold.woff'
import pretendardBold from '@/shared/asset/font/Pretendard-Bold.woff'

/**
 * 기본 폰트 pretendard 폰트 로드
 * 400 : regular
 * 500 : medium
 * 600 : semiBold
 * 700 : bold
 */
export const pretendard = 'pretendard'

globalFontFace(pretendard, [
    {
        src: pretendardRegular,
        fontWeight: 400,
        fontStyle: 'regular',
    },
    {
        src: pretendardMedium,
        fontWeight: 500,
        fontStyle: 'medium',
    },
    {
        src: pretendardSemibold,
        fontWeight: 600,
        fontStyle: 'semiBold',
    },
    {
        src: pretendardBold,
        fontWeight: 700,
        fontStyle: 'bold',
    },
])

export const basicText = style({
    fontFamily: pretendard,
})

/**
 * logo에서 사용되는 futura 폰트 로드
 * 700 : bold
 */
export const futura = 'futura'

globalFontFace(futura, [
    {
        src: futuraFont,
        fontWeight: 700,
        fontStyle: 'bold',
    },
])

export const LogoText = style({
    fontFamily: futura,
})

/**
 * team 이름 사용 jalnan 2 체
 * regular weight
 */

export const jalnan = 'jalnan'

globalFontFace(jalnan, [
    {
        src: jalnan2,
        fontWeight: 500,
        fontStyle: 'regular',
    },
])
