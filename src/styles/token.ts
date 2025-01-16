import { futura, pretendard } from "./global/globalText.css"

export const fonts = {} as const

export const fontSizes = {
    largeTitle: {
        fontFamily : pretendard,
        fontSize: 26,
        lineHeight: '32px',
    },
    title1: {
        fontFamily : pretendard,
        fontSize: 22,
        lineHeight: '26px',
    },
    title2: {
        fontFamily : pretendard,
        fontSize: 17,
        lineHeight: '22px',
    },
    title3: {
        fontFamily : pretendard,
        fontSize: 15,
        lineHeight: '20px',
    },
    headline: {
        fontFamily : pretendard,
        fontSize: 13,
        lineHeight: '16px',
    },
    subHeadline: {
        fontFamily : pretendard,
        fontSize: 11,
        lineHeight: '14px',
    },
    body: {
        fontFamily : pretendard,
        fontSize: 13,
        lineHeight: '16px',
    },
    caption: {
        fontFamily : pretendard,
        fontSize: 10,
        lineHeight: '13px',
    },
    logo : {
        fontFamily : futura,
        fontSize : 10,
        lineHeight : '13px'
    }
} as const

export const fontWeights = {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
} as const

export const colors = {
    // neutral 텍스트 기본 색상
    'neutral-0': '#000000',
    'neutral-100': '#7a8699',
    'neutral-200': '#6b788e',
    'neutral-300': '#5d6b82',
    'neutral-400': '#505f79',
    'neutral-500': '#42526d',
    'neutral-600': '#354764',
    'neutral-700': '#243757',
    'neutral-800': '#15294b',
    'neutral-900': '#091e42',
    // blue 파란색
    'blue-50': '#e6f0ff',
    'blue-75': '#96c0ff',
    'blue-100': '#6ba6ff',
    'blue-200': '#2b7fff',
    'blue-300': '#0065ff',
    'blue-400': '#0047b3',
    'blue-500': '#003e9c',
    // red 빨간색
    'red-50': '#f9e9e6',
    'red-75': '#e5a696',
    'red-100': '#da816b',
    'red-200': '#ca4b2b',
    'red-300': '#bf2600',
    'red-400': '#861b00',
    'red-500': '#751700',
    // yellow 노란색
    'yellow-50': '#fff3e6',
    'yellow-75': '#ffcf96',
    'yellow-100': '#ffbc6b',
    'yellow-200': '#ff9f2b',
    'yellow-300': '#ff8b00',
    'yellow-400': '#b36100',
    'yellow-500': '#9c5500',
    // green 초록색
    'green-50': '#e6f0ec',
    'green-75': '#96c0b2',
    'green-100': '#6ba693',
    'green-200': '#2b8064',
    'green-300': '#006644',
    'green-400': '#004730',
    'green-500': '#003e29',
    // teal 청록색
    'teal-50': '#e6f4f6',
    'teal-75': '#96d0db',
    'teal-100': '#6bbdcb',
    'teal-200': '#2ba0b5',
    'teal-300': '#008da6',
    'teal-400': '#006374',
    'teal-500': '#005665',
} as const

export const shadows = {
    small: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    medium: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
    large: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xlarge: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
} as const
