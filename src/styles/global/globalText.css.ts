import { globalFontFace,style } from "@vanilla-extract/css";

/**
 * 기본 폰트 pretendard 폰트 로드
 * 400 : regular
 * 500 : medium 
 * 600 : semiBold
 * 700 : bold
 */
export const pretendard = 'globalPretendard'

globalFontFace(pretendard, [
    {
        src : 'url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff")',
        fontWeight : 400,
        fontStyle : 'regular'
    },
    {
        src : 'url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff") format("woff")',
        fontWeight : 500,
        fontStyle : 'medium'
    },
    {
        src : 'url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff") format("woff")',
        fontWeight : 600,
        fontStyle : 'semiBold'
    },
    {
        src : 'url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff") format("woff")',
        fontWeight : 700,
        fontStyle : 'bold'
    },
])

export const basicText = style({
    fontFamily: pretendard,
});

/**
 * logo에서 사용되는 futura 폰트 로드
 * 700 : bold
 */
export const futura = 'futura';

globalFontFace(futura, [
    {
        src : 'url("https://fonts.cdnfonts.com/css/futura-std-4") format("woff")',
        fontWeight : 700,
        fontStyle : 'bold'
    }
])

export const LogoText = style({
    fontFamily : futura,
})