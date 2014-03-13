// ==UserScript==
// @name Greasemonkey GoogleBack
// @namespace https://github.com/JanisE
// @include *.google.*
// @version 1
// @grant none
// ==/UserScript==

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "#res h3.r a:link {font-size: 16px !important; text-decoration: underline !important}";
document.head.appendChild(css);
