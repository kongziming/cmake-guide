module.exports = {
  title: "CMake教程",
  description: "简易CMake教程",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.ico"
      }
    ]
  ],
  themeConfig: {
    nav: [{
        text: "首页",
        link: "/"
      },
      {
        text: "概述",
        link: "/intro/"
      },
      {
        text: "使用文档",
        link: "/guide/"
      }
    ],
    sidebar: {
      "/intro/": [
        ["", "CMake简介"]
      ],
      "/guide/": [
        ["", "基本规则"],
        ["build", "构建工程"],
        ["variables", "常用变量"],
        ["others", "其它"]
      ]
    }
  },
  plugins: ["@vuepress/back-to-top"],
  base: "/cmake-guide/"
};