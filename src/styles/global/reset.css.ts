import { globalStyle } from '@vanilla-extract/css'
import * as layers from '../layers/layers.css'
/**
 * 'display' 속성만 제외한 모든 "User-Agent-StyleSheet" 스타일을 제거합니다.
 * - "symbol *" 부분은 Firefox에서 발생하는 SVG 스프라이트 버그를 해결하기 위한 것입니다.
 * - "html" 요소는 제외되며, 그렇지 않으면 Chrome에서 CSS 하이픈(hyphens) 속성이 망가지는 버그가 발생합니다.
 *   (관련 문제: https://github.com/elad2412/the-new-css-reset/issues/36).
 **/
globalStyle(
    '*:where(:not(html, iframe, img, svg, video, audio):not(svg *, symbol *))',
    {
        '@layer': {
            [layers.reset]: {
                all: 'unset',
                display: 'revert',
            },
        },
    }
)

/**
 * 기본 box-sizing border-box로 설정
 */
globalStyle('*, *::before, *::after', {
    '@layer': {
        [layers.reset]: {
            boxSizing: 'border-box',
        },
    },
})

/**
 * 사파리 브라우저 관련 스타일
 */

/**
 * 모바일 사파리에서 가로 모드로 전환할 때 글꼴 크기가 자동으로 커지는 현상을 방지
 */
globalStyle('html', {
    '@layer': {
        [layers.reset]: {
            MozTextSizeAdjust: 'none',
            WebkitTextSizeAdjust: 'none',
            textSizeAdjust: 'none',
        },
    },
})
/**
 * 사파리 브라우저에서 user-select:none을 적용할 때 발생할 수 있는 문제를 방지하고, 텍스트 입력 요소가 정상적으로 동작
 */
globalStyle('input, textarea', {
    '@layer': {
        [layers.reset]: {
            WebkitUserSelect: 'auto',
        },
    },
})

/**
 * 사파리 브라우저에서 textarea 요소의 white-space 속성을 기본값으로 되돌리기 위해 사용됩니다.
 */
globalStyle('textarea', {
    '@layer': {
        [layers.reset]: {
            whiteSpace: 'revert',
        },
    },
})
/**
 * draggable 속성이 있는 요소에서 드래그 기능이 제대로 작동하도록 설정
 * Apply back the draggable feature - exist only in Chromium and Safari
 */
globalStyle(':where([draggable="true"])', {
    '@layer': {
        [layers.reset]: {
            // @ts-expect-error: -webkit-user-drag is a non-standard property
            WebkitUserDrag: 'element',
        },
    },
})

/**
 * a 태그와 button 태그에 pointer 재적용
 */
/**
 * pre 태그의 브라우저 기본 스타일을 복원, box-sizing border-box 설정
 * Preformatted text - use only for this feature
 */
globalStyle(':where(pre)', {
    '@layer': {
        [layers.reset]: {
            all: 'revert',
            boxSizing: 'border-box',
        },
    },
})

/**
 * input의 placeholder의 컬러를 지정하지 않음
 */
globalStyle('::placeholder', {
    '@layer': {
        [layers.reset]: {
            color: 'unset',
        },
    },
})

/**
 * hidden 속성을 가진 요소의 display none을 적용
 */
globalStyle(':where([hidden])', {
    '@layer': {
        [layers.reset]: {
            display: 'none',
        },
    },
})

/**
 * a 태그와 button 태그에 pointer 재적용
 */
globalStyle('a, button', {
    '@layer': {
        [layers.reset]: {
            cursor: 'pointer',
        },
    },
})

/**
 * 리스트 스타일 제거 (불릿/넘버)
 */
globalStyle('ol, ul, menu, summary', {
    '@layer': {
        [layers.reset]: {
            listStyle: 'none',
        },
    },
})

/**
 * 이미지 요소가 컨테이너의 크기를 넘지 않도록 설정
 */
globalStyle('img', {
    '@layer': {
        [layers.reset]: {
            maxInlineSize: '100%',
            maxBlockSize: '100%',
        },
    },
})

/**
 * input의 placeholder의 컬러를 지정하지 않음
 */
globalStyle('::placeholder', {
    '@layer': {
        [layers.reset]: {
            color: 'unset',
        },
    },
})

/**
 * 모든 요소의 마진, 패딩을 0으로 적용
 */
globalStyle('*', {
    '@layer': {
        [layers.reset]: {
            margin: 0,
            padding: 0,
        },
    },
})

/**
 * 모든 스크롤 가능한 요소의 스크롤 동작을 부드럽게 설정합니다 .
 */
globalStyle('html:focus-within', {
    '@layer': {
        [layers.components]: {
            scrollBehavior: 'smooth',
        },
    },
})
