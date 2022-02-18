<template>
  <div class="app">
    <div class="app-header">
      <div class="app-header-logo">
        <img src="@/assets/webos.png" />
      </div>
      <div
        class="app-header-tab"
        :class="{ active: value === page_status.current_tab }"
        v-for="(value, key) in $tree"
        :key="key"
        @click="handleTabClick(value)"
      >
        {{ key }}
      </div>
    </div>
    <div class="app-main">
      <div class="app-main-navigator">
        <div
          class="app-main-navigator-section"
          v-for="(section, name) in page_status.current_tab"
          :key="name"
        >
          <div
            class="app-main-navigator-section-name"
            :class="{
              clickable: section.content,
              active: section === page_status.current_article,
            }"
            @click="handleArticleClick(section)"
          >
            {{ name }}
          </div>
          <template v-if="section.content !== undefined"> </template>
          <template v-else>
            <div
              class="app-main-navigator-section-article"
              :class="{
                active: article === page_status.current_article,
              }"
              v-for="(article, title) in section"
              :key="title"
              @click="handleArticleClick(article)"
            >
              {{ title }}
            </div>
          </template>
        </div>
      </div>
      <div class="app-main-content" v-html="page_status.current_article.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      page_config: {
        site_config: ["appstore"],
      },
      page_status: {
        current_tab: null,
        current_article: null,
      },
      page_data: {},
    };
  },
  mounted() {
    this.handleTabClick(this.$tree[Object.keys(this.$tree)[0]]);
  },
  methods: {
    handleTabClick(value) {
      if (this.page_config.site_config.includes(Object.keys(value)[0])) {
        window.open("//" + Object.keys(value)[0] + ".imgker.com");
        return;
      }
      this.page_status.current_tab = value;
      let tmp = value;
      while (!tmp.content) {
        tmp = tmp[Object.keys(tmp)[0]];
      }
      this.handleArticleClick(tmp);
    },
    handleArticleClick(article) {
      if (!article.content) return;
      this.page_status.current_article = article;
    },
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  user-select: none;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 1px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background: #cf46467a;
  }
}
.clickable {
  cursor: pointer;
  &:hover {
    color: #cf4647 !important;
    font-weight: bold !important;
  }
}
.active {
  text-decoration: underline;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .app-header {
    display: flex;
    background: #cf4647;
    color: white;
    padding: 0 12vw;
    align-items: center;
    position: fixed;
    width: 100vw;
    box-sizing: border-box;
    .app-header-logo {
      flex: 1;
      text-align: left;
      img {
        height: 60px;
      }
    }
    .app-header-tab {
      padding: 30px 15px;
      font-size: 18px;
      cursor: pointer;
    }
  }
  .app-main {
    display: flex;
    padding: 0 12vw;
    padding-top: 10vh;
    .app-main-navigator {
      position: fixed;
      height: 80vh;
      min-width: 10vw;
      padding: 0 40px;
      margin: 40px 0;
      text-align: right;
      border-right: 1px solid #d7dae2a2;
      overflow-y: scroll;
      .app-main-navigator-section {
        .app-main-navigator-section-name {
          color: black;
          padding: 12px 0;
          font-size: 20px;
          font-weight: bold;
          white-space: nowrap;
        }
        .app-main-navigator-section-article {
          font-weight: normal;
          font-size: 16px;
          padding: 4px 0;
          .clickable;
        }
      }
    }
    .app-main-content {
      margin-left: calc(10vw + 80px);
      background: white;
      padding: 50px;
      letter-spacing: 1px;
      line-height: 40px;
      img {
        width: 60vw;
      }
      table {
        td,
        th {
          border: 1px solid #e0e0e0;
          padding: 3px 12px;
        }
      }
      blockquote {
        padding: 5px 40px;
        margin: 10px !important;
        color: #777;
        border-left: 4px solid #ddd;
        background: rgba(221, 221, 221, 0.103);
      }
      a {
        color: #cf4647;
        font-weight: bold;
        padding: 0 5px;
      }

      pre {
        width: 60vw;
        word-wrap: normal;
        word-break: break-all;
        white-space: pre;
        overflow-x: scroll;
        margin: 10px 0 !important;
        overscroll-behavior-x: contain;
        border-radius: 4px;
        z-index: 0;
        padding: 1em;
        line-height: 1.5;
        color: #ccc;
        background: #2d2d2d;
      }
    }
  }
}
</style>
