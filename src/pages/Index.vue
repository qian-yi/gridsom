<template>
  <Layout>
    <div style="min-height: 600px" v-loading="loading">
      <el-card shadow="never" style="min-height: 400px">
        <g-link :to="'blog-detail/' + blog.id">
          <div slot="header">
            <span>jghhj</span>
          </div>
        </g-link>
        <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71">
          发布 gjghjg <br />
          更新 hgj
        </div>
        <div
          style="
            font-size: 1.1rem;
            line-height: 1.5;
            color: #303133;
            border-bottom: 1px solid #e4e7ed;
            padding: 5px 0px 5px 0px;
          "
        >
          <pre style="font-family: '微软雅黑'">{{ blog.description }}</pre>
        </div>
        <!-- <div
          v-html="blog.content"
          class="markdown-body"
          style="padding-top: 20px"
        /> -->
      </el-card>
      <el-card
        shadow="never"
        style="
          margin-bottom: 20px;
          padding: 20px 0px 20px 0px;
          text-align: center;
        "
        v-if="!blog.id"
      >
        <font style="font-size: 30px; color: #dddddd">
          <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query {
  blog: allStrapiBlog{
    edges{
      node{
        id
        title
        content
        description
        created_at
        updated_at
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      query: {
        page: 1,
        pageSize: 1,
      },
      loading: false
    };
  },
  computed: {
    blog() {
      return this.$page.blog.edges[0].node;
    },
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
