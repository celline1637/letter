import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
* {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
  box-sizing: border-box;
  font-family: 'NeoDunggeunmo','NeoDunggeunmo Code', 'Noto Sans', sans-serif ;
  -webkit-tap-highlight-color : transparent;
}
html,
body {
  height: 100%;
  font-family: 'NeoDunggeunmo','NeoDunggeunmo Code', 'Noto Sans', sans-serif ;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
}
body,
div,
select,
textarea,
input,
p,
pre {
  border: 0;
  outline: none;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
p,
blockquote,
table,
th,
td,
embed,
object,
textarea,
a,
img {
  padding: 0;
  margin: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
table img {
  vertical-align: middle;
}
select,
input,
table tr td,
table tr th {
  vertical-align: middle;
}
form,
fieldset,
abbr,
acronym {
  border: 0;
}
img {
  border: 0;
  vertical-align: top;
}
address,
caption,
cite,
code,
dfn,
em,
h1,
h2,
h3,
h4,
h5,
h6,
th,
a,
var {
  font-weight: normal;
  font-style: normal;
}
ol,
ul,
li {
  list-style: none;
}
table td a {
  display: inline-block;
}
table caption {
  display: none;
}
a {
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  cursor: pointer;
  pointer-events: all;
  text-decoration: none;
  outline: none;
  color: inherit;
  unicode-bidi: embed;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  cursor: default;
}

#accessibility,
hr,
caption,
legend {
  position: absolute;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  visibility: hidden;
  text-indent: -5000px;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

figure figcaption,
figure img {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  opacity: 0;
}

#__next {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}

/* #__next.overflow-hidden {
  overflow: hidden;
} */

#modal-root {
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 1001;
}

// 모달
.ril__toolbar {
  display: none !important;
}
.ril__outer {
  background-color: rgba(0, 0, 0, 0.8) !important;
  transition: none !important;
  animation-duration: 0ms !important;
}

.ellipsis {
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.lock {
  overflow: hidden;
}
`
);

export default GlobalStyle;
