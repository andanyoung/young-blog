// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";
import dayjs from "dayjs";

// docs/.vuepress/config/baiduCode.ts
var baiduCode_default = "38f8e9f6c1f857ba305eb69cad6eea19";

// docs/.vuepress/config/htmlModules.ts
var htmlModule = {};
var htmlModules_default = htmlModule;

// docs/.vuepress/config.ts
var DOMAIN_NAME = "blog.admin4j.com";
var WEB_SITE = `https://${DOMAIN_NAME}`;
var config_default = defineConfig4CustomTheme({
  theme: "vdoing",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Young's blog",
      description: "Young\u4E36java\u540E\u7AEF\u6280\u672F\u535A\u5BA2,\u4E13\u6CE8\u540E\u7AEF\u5B66\u4E60\u4E0E\u603B\u7ED3\u3002\u64C5\u957Fspring boot,JAVA\u57FA\u7840\u603B\u7ED3,\u7B49\u65B9\u9762\u7684\u77E5\u8BC6,\u5173\u6CE8spring,\u67B6\u6784,elasticsearch,mysql\u9886\u57DF."
    }
  },
  themeConfig: {
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "Spring", link: "/Spring/" },
      {
        text: "\u524D\u7AEF",
        link: "/web/",
        items: [
          {
            text: "\u524D\u7AEF\u6587\u7AE01",
            items: [{ text: "JavaScript", link: "/pages/8143cc480faf9a11/" }]
          },
          {
            text: "\u5B66\u4E60\u7B14\u8BB0",
            items: [
              { text: "\u300AJavaScript\u6559\u7A0B\u300B", link: "/note/javascript/" },
              { text: "\u300AJavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u300B", link: "/note/js/" },
              { text: "\u300AES6 \u6559\u7A0B\u300B", link: "/note/es6/" },
              { text: "\u300AVue\u300B", link: "/note/vue/" },
              { text: "\u300AReact\u300B", link: "/note/react/" },
              {
                text: "\u300ATypeScript \u4ECE\u96F6\u5B9E\u73B0 axios\u300B",
                link: "/note/typescript-axios/"
              },
              {
                text: "\u300AGit\u300B",
                link: "/note/git/"
              },
              {
                text: "TypeScript",
                link: "/pages/51afd6/"
              },
              {
                text: "JS\u8BBE\u8BA1\u6A21\u5F0F\u603B\u7ED3",
                link: "/pages/4643cd/"
              }
            ]
          }
        ]
      },
      {
        text: "\u9875\u9762",
        link: "/ui/",
        items: [
          { text: "HTML", link: "/pages/8309a5b876fc95e3/" },
          { text: "CSS", link: "/pages/0a83b083bdf257cb/" }
        ]
      },
      {
        text: "\u6280\u672F",
        link: "/technology/",
        items: [
          { text: "\u6280\u672F\u6587\u6863", link: "/pages/9a7ee40fc232253e/" },
          { text: "GitHub\u6280\u5DE7", link: "/pages/4c778760be26d8b3/" },
          { text: "Nodejs", link: "/pages/117708e0af7f0bd9/" },
          { text: "\u535A\u5BA2\u642D\u5EFA", link: "/pages/41f87d890d0a02af/" }
        ]
      },
      {
        text: "\u66F4\u591A",
        link: "/more/",
        items: [
          { text: "\u5B66\u4E60", link: "/pages/f2a556/" },
          { text: "\u9762\u8BD5", link: "/pages/aea6571b7a8bae86/" },
          { text: "\u5FC3\u60C5\u6742\u8D27", link: "/pages/2d615df9a36a98ed/" },
          { text: "\u5B9E\u7528\u6280\u5DE7", link: "/pages/baaa02/" },
          { text: "\u53CB\u60C5\u94FE\u63A5", link: "/friends/" }
        ]
      },
      { text: "\u5173\u4E8E", link: "/about/" },
      {
        text: "\u6536\u85CF",
        link: "/pages/beb6c0bd8a66cea6/"
      },
      {
        text: "\u7D22\u5F15",
        link: "/archives/",
        items: [
          { text: "\u5206\u7C7B", link: "/categories/" },
          { text: "\u6807\u7B7E", link: "/tags/" },
          { text: "\u5F52\u6863", link: "/archives/" }
        ]
      }
    ],
    sidebarDepth: 2,
    logo: "/img/logo.png",
    repo: "andanyang/vuepress-theme-vdoing",
    searchMaxSuggestions: 10,
    lastUpdated: "\u4E0A\u6B21\u66F4\u65B0",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "\u7F16\u8F91",
    sidebar: "structuring",
    author: {
      name: "andanyang",
      link: "https://github.com/andanyang"
    },
    blogger: {
      avatar: "/img/logo.png",
      name: "Young",
      slogan: ""
    },
    social: {
      icons: [
        {
          iconClass: "icon-youjian",
          title: "\u53D1\u90AE\u4EF6",
          link: "mailto:1218853253@qq.com"
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/andanyang"
        },
        {
          iconClass: "icon-erji",
          title: "\u542C\u97F3\u4E50",
          link: "https://music.163.com/#/playlist?id=755597173"
        }
      ]
    },
    footer: {
      createYear: 2019,
      copyrightInfo: 'Young | <a href="https://github.com/andanyoung/young-blog/blob/master/LICENSE" target="_blank">MIT License</a> <br/> <a  href="https://beian.miit.gov.cn/" target="_blank">\u6D59ICP\u590720002744\u53F7</a>'
    },
    extendFrontmatter: {
      author: {
        name: "andanyang",
        link: "https://github.com/andanyoung"
      }
    },
    htmlModules: htmlModules_default
  },
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u524D\u7AEF\u535A\u5BA2,\u4E2A\u4EBA\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u6846\u67B6,web\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5\u9898,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown"
      }
    ],
    ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }],
    ["meta", { name: "theme-color", content: "#11a8cd" }]
  ],
  plugins: [
    [
      "sitemap",
      {
        hostname: WEB_SITE
      }
    ],
    "vuepress-plugin-baidu-autopush",
    [
      "vuepress-plugin-baidu-tongji",
      {
        hm: baiduCode_default
      }
    ],
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "\u5728MDN\u4E2D\u641C\u7D22",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=",
            behindUrl: ""
          },
          {
            title: "\u5728Runoob\u4E2D\u641C\u7D22",
            frontUrl: "https://www.runoob.com/?s="
          },
          {
            title: "\u5728Vue API\u4E2D\u641C\u7D22",
            frontUrl: "https://cn.vuejs.org/v2/api/#"
          },
          {
            title: "\u5728Bing\u4E2D\u641C\u7D22",
            frontUrl: "https://cn.bing.com/search?q="
          },
          {
            title: "\u901A\u8FC7\u767E\u5EA6\u641C\u7D22\u672C\u7AD9\u7684",
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`
          }
        ]
      }
    ],
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside'
        ],
        copyMessage: "\u590D\u5236\u6210\u529F",
        duration: 1e3,
        showInMobile: false
      }
    ],
    [
      "demo-block",
      {
        settings: {
          jsfiddle: false,
          codepen: true,
          horizontal: false
        }
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ],
    [
      "vuepress-plugin-comment",
      {
        choosen: "gitalk",
        options: {
          clientID: "60e9795f00c27deea1f1",
          clientSecret: "659d426b9e222e0e2143a3d7c83b784f2a07dd63",
          repo: "gitalk",
          owner: "aoooooooo",
          admin: ["aoooooooo", "1218853253@qq.com"],
          pagerDirection: "last",
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>",
          title: "\u300C\u8BC4\u8BBA\u300D<%- frontmatter.title %>",
          labels: ["Gitalk", "Comment"],
          body: "\u9875\u9762\uFF1A<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>",
          createIssueManually: true
        }
      }
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
  },
  extraWatchFiles: [".vuepress/config.ts", ".vuepress/config/htmlModules.ts"]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9iYWlkdUNvZGUudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnL2h0bWxNb2R1bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogXHU2M0QwXHU3OTNBXHVGRjFBXHU1OTgyXHU2MEE4XHU2MEYzXHU0RjdGXHU3NTI4SlNcdTcyNDhcdTY3MkNcdTc2ODRcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTUzRUZcdTUzQzJcdTgwMDNcdUZGMUFodHRwczovL2dpdGh1Yi5jb20vYW5kYW55YW5nL3Z1ZXByZXNzLXRoZW1lLXZkb2luZy90cmVlL2EyZjAzZTk5M2RkMmYyYTNhZmRjNTdjZjcyYWRmYzZmMWI2YjBjMzIvZG9jcy8udnVlcHJlc3NcclxuICovXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWUsIFVzZXJQbHVnaW5zIH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBWZG9pbmdUaGVtZUNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS12ZG9pbmcvdHlwZXNcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgYmFpZHVDb2RlIGZyb20gXCIuL2NvbmZpZy9iYWlkdUNvZGVcIjsgLy8gXHU3NjdFXHU1RUE2XHU3RURGXHU4QkExaG1cdTc4MDFcclxuaW1wb3J0IGh0bWxNb2R1bGVzIGZyb20gXCIuL2NvbmZpZy9odG1sTW9kdWxlc1wiOyAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYzRDJcdTUxNjVcdTc2ODRodG1sXHU1NzU3XHJcblxyXG5jb25zdCBET01BSU5fTkFNRSA9IFwiYmxvZy5hZG1pbjRqLmNvbVwiOyAvLyBcdTU3REZcdTU0MEQgKFx1NEUwRFx1NUUyNmh0dHBzKVxyXG5jb25zdCBXRUJfU0lURSA9IGBodHRwczovLyR7RE9NQUlOX05BTUV9YDsgLy8gXHU3RjUxXHU1NzQwXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWU8VmRvaW5nVGhlbWVDb25maWc+KHtcclxuICB0aGVtZTogXCJ2ZG9pbmdcIiwgLy8gXHU0RjdGXHU3NTI4bnBtXHU0RTNCXHU5ODk4XHU1MzA1XHJcbiAgLy8gdGhlbWU6IHJlc29sdmUoXCJEOlxcXFx3b3Jrc3BhY2VcXFxcdnVlcHJlc3MtdGhlbWUteW91bmdcXFxcZG9jc1xcXFwudnVlcHJlc3NcIiwgJy4uLy4uL3Zkb2luZycpLCAvLyBcdTRGN0ZcdTc1MjhcdTY3MkNcdTU3MzBcdTRFM0JcdTk4OThcdTUzMDVcclxuXHJcbiAgbG9jYWxlczoge1xyXG4gICAgXCIvXCI6IHtcclxuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gICAgICB0aXRsZTogXCJZb3VuZydzIGJsb2dcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJZb3VuZ1x1NEUzNmphdmFcdTU0MEVcdTdBRUZcdTYyODBcdTY3MkZcdTUzNUFcdTVCQTIsXHU0RTEzXHU2Q0U4XHU1NDBFXHU3QUVGXHU1QjY2XHU0RTYwXHU0RTBFXHU2MDNCXHU3RUQzXHUzMDAyXHU2NEM1XHU5NTdGc3ByaW5nIGJvb3QsSkFWQVx1NTdGQVx1Nzg0MFx1NjAzQlx1N0VEMyxcdTdCNDlcdTY1QjlcdTk3NjJcdTc2ODRcdTc3RTVcdThCQzYsXHU1MTczXHU2Q0U4c3ByaW5nLFx1NjdCNlx1Njc4NCxlbGFzdGljc2VhcmNoLG15c3FsXHU5ODg2XHU1N0RGLlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIGJhc2U6ICcvJywgLy8gXHU5RUQ4XHU4QkE0Jy8nXHUzMDAyXHU1OTgyXHU2NzlDXHU0RjYwXHU2MEYzXHU1QzA2XHU0RjYwXHU3Njg0XHU3RjUxXHU3QUQ5XHU5MEU4XHU3RjcyXHU1MjMwXHU1OTgyIGh0dHBzOi8vZm9vLmdpdGh1Yi5pby9iYXIvXHVGRjBDXHU5MEEzXHU0RTQ4IGJhc2UgXHU1RTk0XHU4QkU1XHU4OEFCXHU4QkJFXHU3RjZFXHU2MjEwIFwiL2Jhci9cIixcdUZGMDhcdTU0MjZcdTUyMTlcdTk4NzVcdTk3NjJcdTVDMDZcdTU5MzFcdTUzQkJcdTY4MzdcdTVGMEZcdTdCNDlcdTY1ODdcdTRFRjZcdUZGMDlcclxuXHJcbiAgLy8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIC8vIFx1NUJGQ1x1ODIyQVx1OTE0RFx1N0Y2RVxyXG4gICAgbmF2OiBbXHJcbiAgICAgIHsgdGV4dDogXCJcdTk5OTZcdTk4NzVcIiwgbGluazogXCIvXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlNwcmluZ1wiLCBsaW5rOiBcIi9TcHJpbmcvXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1MjREXHU3QUVGXCIsXHJcbiAgICAgICAgbGluazogXCIvd2ViL1wiLCAvL1x1NzZFRVx1NUY1NVx1OTg3NVx1OTRGRVx1NjNBNVx1RkYwQ1x1NkI2NFx1NTkwNGxpbmtcdTY2MkZ2ZG9pbmdcdTRFM0JcdTk4OThcdTY1QjBcdTU4OUVcdTc2ODRcdTkxNERcdTdGNkVcdTk4NzlcdUZGMENcdTY3MDlcdTRFOENcdTdFQTdcdTVCRkNcdTgyMkFcdTY1RjZcdUZGMENcdTUzRUZcdTRFRTVcdTcwQjlcdTUxRkJcdTRFMDBcdTdFQTdcdTVCRkNcdTgyMkFcdThERjNcdTUyMzBcdTc2RUVcdTVGNTVcdTk4NzVcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgLy8gXHU4QkY0XHU2NjBFXHVGRjFBXHU0RUU1XHU0RTBCXHU2MjQwXHU2NzA5bGlua1x1NzY4NFx1NTAzQ1x1NTNFQVx1NjYyRlx1NTcyOFx1NzZGOFx1NUU5NG1kXHU2NTg3XHU0RUY2XHU1OTM0XHU5MEU4XHU1QjlBXHU0RTQ5XHU3Njg0XHU2QzM4XHU0RTQ1XHU5NEZFXHU2M0E1XHVGRjA4XHU0RTBEXHU2NjJGXHU0RUMwXHU0RTQ4XHU3Mjc5XHU2QjhBXHU3RjE2XHU3ODAxXHVGRjA5XHUzMDAyXHU1M0U2XHU1OTE2XHVGRjBDXHU2Q0U4XHU2MTBGXHU3RUQzXHU1QzNFXHU2NjJGXHU2NzA5XHU2NTlDXHU2NzYwXHU3Njg0XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU1MjREXHU3QUVGXHU2NTg3XHU3QUUwMVwiLFxyXG4gICAgICAgICAgICBpdGVtczogW3sgdGV4dDogXCJKYXZhU2NyaXB0XCIsIGxpbms6IFwiL3BhZ2VzLzgxNDNjYzQ4MGZhZjlhMTEvXCIgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1NUI2Nlx1NEU2MFx1N0IxNFx1OEJCMFwiLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogXCJcdTMwMEFKYXZhU2NyaXB0XHU2NTU5XHU3QTBCXHUzMDBCXCIsIGxpbms6IFwiL25vdGUvamF2YXNjcmlwdC9cIiB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogXCJcdTMwMEFKYXZhU2NyaXB0XHU5QUQ4XHU3RUE3XHU3QTBCXHU1RThGXHU4QkJFXHU4QkExXHUzMDBCXCIsIGxpbms6IFwiL25vdGUvanMvXCIgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6IFwiXHUzMDBBRVM2IFx1NjU1OVx1N0EwQlx1MzAwQlwiLCBsaW5rOiBcIi9ub3RlL2VzNi9cIiB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogXCJcdTMwMEFWdWVcdTMwMEJcIiwgbGluazogXCIvbm90ZS92dWUvXCIgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6IFwiXHUzMDBBUmVhY3RcdTMwMEJcIiwgbGluazogXCIvbm90ZS9yZWFjdC9cIiB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHUzMDBBVHlwZVNjcmlwdCBcdTRFQ0VcdTk2RjZcdTVCOUVcdTczQjAgYXhpb3NcdTMwMEJcIixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiL25vdGUvdHlwZXNjcmlwdC1heGlvcy9cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHUzMDBBR2l0XHUzMDBCXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9ub3RlL2dpdC9cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVHlwZVNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCIvcGFnZXMvNTFhZmQ2L1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJKU1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1NjAzQlx1N0VEM1wiLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCIvcGFnZXMvNDY0M2NkL1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1OTg3NVx1OTc2MlwiLFxyXG4gICAgICAgIGxpbms6IFwiL3VpL1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiSFRNTFwiLCBsaW5rOiBcIi9wYWdlcy84MzA5YTViODc2ZmM5NWUzL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQ1NTXCIsIGxpbms6IFwiL3BhZ2VzLzBhODNiMDgzYmRmMjU3Y2IvXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTYyODBcdTY3MkZcIixcclxuICAgICAgICBsaW5rOiBcIi90ZWNobm9sb2d5L1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2MjgwXHU2NzJGXHU2NTg3XHU2ODYzXCIsIGxpbms6IFwiL3BhZ2VzLzlhN2VlNDBmYzIzMjI1M2UvXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJHaXRIdWJcdTYyODBcdTVERTdcIiwgbGluazogXCIvcGFnZXMvNGM3Nzg3NjBiZTI2ZDhiMy9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIk5vZGVqc1wiLCBsaW5rOiBcIi9wYWdlcy8xMTc3MDhlMGFmN2YwYmQ5L1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1MzVBXHU1QkEyXHU2NDJEXHU1RUZBXCIsIGxpbms6IFwiL3BhZ2VzLzQxZjg3ZDg5MGQwYTAyYWYvXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTY2RjRcdTU5MUFcIixcclxuICAgICAgICBsaW5rOiBcIi9tb3JlL1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1QjY2XHU0RTYwXCIsIGxpbms6IFwiL3BhZ2VzL2YyYTU1Ni9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1OTc2Mlx1OEJENVwiLCBsaW5rOiBcIi9wYWdlcy9hZWE2NTcxYjdhOGJhZTg2L1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1RkMzXHU2MEM1XHU2NzQyXHU4RDI3XCIsIGxpbms6IFwiL3BhZ2VzLzJkNjE1ZGY5YTM2YTk4ZWQvXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTVCOUVcdTc1MjhcdTYyODBcdTVERTdcIiwgbGluazogXCIvcGFnZXMvYmFhYTAyL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1M0NCXHU2MEM1XHU5NEZFXHU2M0E1XCIsIGxpbms6IFwiL2ZyaWVuZHMvXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6IFwiXHU1MTczXHU0RThFXCIsIGxpbms6IFwiL2Fib3V0L1wiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NjUzNlx1ODVDRlwiLFxyXG4gICAgICAgIGxpbms6IFwiL3BhZ2VzL2JlYjZjMGJkOGE2NmNlYTYvXCIsXHJcbiAgICAgICAgLy8gaXRlbXM6IFtcclxuICAgICAgICAvLyAgIHsgdGV4dDogJ1x1N0Y1MVx1N0FEOScsIGxpbms6ICcvcGFnZXMvYmViNmMwYmQ4YTY2Y2VhNi8nIH0sXHJcbiAgICAgICAgLy8gICB7IHRleHQ6ICdcdThENDRcdTZFOTAnLCBsaW5rOiAnL3BhZ2VzL2VlZTgzYTkyMTFhNzBmOWQvJyB9LFxyXG4gICAgICAgIC8vICAgeyB0ZXh0OiAnVnVlXHU4RDQ0XHU2RTkwJywgbGluazogJy9wYWdlcy8xMmRmOGFjZTUyZDQ5M2Y2LycgfSxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTdEMjJcdTVGMTVcIixcclxuICAgICAgICBsaW5rOiBcIi9hcmNoaXZlcy9cIixcclxuICAgICAgICBpd