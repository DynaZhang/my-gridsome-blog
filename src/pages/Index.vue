<template>
  <Layout>

    <!-- Page Header -->
    <header class="masthead" :style="`background-image: url('${process.env.GRIDSOME_API_URL}${$page.general.cover.url}')`">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{$page.general.title}}</h1>
              <span class="subheading">{{$page.general.sub_title}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <template v-for="post in $page.posts.data">
            <div class="post-preview" :key="post.node.id">
              <g-link :to="`/post/${post.node.id}`">
                <h2 class="post-title">{{post.node.Title}}</h2>
                <h3 class="post-subtitle">{{post.node.sub_title}}</h3>
              </g-link>
              <p class="post-meta">Posted by
                <g-link ro="/">{{post.node.created_by.firstname}}&nbsp;{{post.node.created_by.lastname}}</g-link>
                on {{post.node.created_at | formatDate}}
              </p>
              <p>
                  <span v-for="tag in post.node.tags" :key="tag.id">
                      <g-link :to="`/tag/${tag.id}`">{{tag.title}}</g-link>
                      &nbsp;&nbsp;
                  </span>
              </p>
            </div>
            <hr :key="post.node.id"/>
          </template>
          <!-- Pager -->
          <div class="clearfix">
            <Pager class="float-left" :info="$page.posts.pageInfo"/>
            <g-link class="btn btn-primary float-right" href="/">Older Posts &rarr;</g-link>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query ($page: Int) {
    posts: allStrapiPosts(perPage: 2, page: $page) @paginate {
        totalCount
        pageInfo {
            currentPage
            totalPages
            totalItems
        }
        data: edges {
            node {
                id
                Title
                sub_title
                content
                created_by {
                    lastname
                    firstname
                }
                created_at
                cover {
                    url
                }
                tags {
                    id
                    title
                }
            }
        }
    }
    general: strapiGeneral(id: 1) {
        id
        title
        sub_title
        cover {
            url
        }
    }
}
</page-query>

<script>
import {Pager} from 'gridsome';

export default {
    name: 'Index',
    components: {Pager},
    mounted() {
        console.log(this.$page)
    }
};
</script>

<style>

</style>
