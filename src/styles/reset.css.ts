import { globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers/layers.css";

/**
 * 'display' 속성만 제외한 모든 "User-Agent-StyleSheet" 스타일을 제거합니다.
 * - "symbol *" 부분은 Firefox에서 발생하는 SVG 스프라이트 버그를 해결하기 위한 것입니다.
 * - "html" 요소는 제외되며, 그렇지 않으면 Chrome에서 CSS 하이픈(hyphens) 속성이 망가지는 버그가 발생합니다.
 *   (관련 문제: https://github.com/elad2412/the-new-css-reset/issues/36).
 **/
globalStyle(
  "*:where(:not(html, iframe, img, svg, video, audio):not(svg *, symbol *))",
  {
    "@layer": {
      [layers.reset]: {
        all: "unset",
        display: "revert",
      },
    },
  }
);

/**
 * 기본 box-sizing border-box로 설정
 */
globalStyle("*, *::before, *::after", {
  "@layer": {
    [layers.reset]: {
      boxSizing: "border-box",
    },
  },
});

/**
 * 모바일 사파리에서 가로 모드로 전환할 때 글꼴 크기가 자동으로 커지는 현상을 방지
 */
globalStyle("html", {
  "@layer": {
    [layers.reset]: {
      MozTextSizeAdjust: "none",
      WebkitTextSizeAdjust: "none",
      textSizeAdjust: "none",
    },
  },
});

/**
 * a 태그와 button 태그에 pointer 재적용
 */
globalStyle("a, button", {
  "@layer": {
    [layers.reset]: {
      cursor: "pointer",
    },
  },
});

/**
 * 리스트 스타일 제거 (불릿/넘버)
 */
globalStyle("ol, ul, menu, summary", {
  "@layer": {
    [layers.reset]: {
      listStyle: "none",
    },
  },
});

/**
 * 이미지 요소가 컨테이너의 크기를 넘지 않도록 설정
 */
globalStyle("img", {
  "@layer": {
    [layers.reset]: {
      maxInlineSize: "100%",
      maxBlockSize: "100%",
    },
  },
});

/**
 * input의 placeholder의 컬러를 지정하지 않음
 */
globalStyle("::placeholder", {
  "@layer": {
    [layers.reset]: {
      color: "unset",
    },
  },
});

/**
 * 모든 요소의 마진을 0으로 적용
 */
globalStyle("*", {
  "@layer": {
    [layers.reset]: {
      margin: 0,
    },
  },
});
