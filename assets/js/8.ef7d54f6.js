(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{206:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"其它问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 其它问题")]),a._v(" "),t("h4",{attrs:{id:"_1-怎样将debug和release编译进行区分。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-怎样将debug和release编译进行区分。","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.怎样将Debug和Release编译进行区分。")]),a._v(" "),t("h5",{attrs:{id:"a-在debug模式下生成的名称后面加一个d"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-在debug模式下生成的名称后面加一个d","aria-hidden":"true"}},[a._v("#")]),a._v(" a.在Debug模式下生成的名称后面加一个d")]),a._v(" "),t("div",{staticClass:"language-cmake extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cmake"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("CMAKE_DEBUG_POSTFIX")]),a._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("通过这个指令，生成的lib和dll文件名称都会有一个d后缀。但是生成的exe可能后面不会带d，需要加上下面这条指令：")]),a._v(" "),t("div",{staticClass:"language-cmake extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cmake"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set_target_properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("OUTPUT_NAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("PROPERTIES")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("DEBUG_POSTFIX")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("CMAKE_DEBUG_POSTFIX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h5",{attrs:{id:"b-debug和release分别生成在指定不同目录下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-debug和release分别生成在指定不同目录下","aria-hidden":"true"}},[a._v("#")]),a._v(" b.Debug和Release分别生成在指定不同目录下")]),a._v(" "),t("p",[a._v("比如debug编译后生成在文件夹D:/a下，release编译后生成在文件夹D:/b下。\n暂无好的解决办法，可以通过生成后事件将文件拷过去。")]),a._v(" "),t("h4",{attrs:{id:"_2-怎样将debug和release分别安装在不同文件夹下？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-怎样将debug和release分别安装在不同文件夹下？","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.怎样将Debug和Release分别安装在不同文件夹下？")]),a._v(" "),t("div",{staticClass:"language-cmake extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cmake"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("install")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TARGETS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("OUTPUT_NAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        CONFIGURATIONS Debug\n        RUNTIME DESTINATION Debug/bin\n        LIBRARY DESTINATION Debug/lib\n        ARCHIVE DESTINATION Debug/lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("install")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TARGETS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("OUTPUT_NAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        CONFIGURATIONS Release\n        RUNTIME DESTINATION Release/bin\n        LIBRARY DESTINATION Release/lib\n        ARCHIVE DESTINATION Release/lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);