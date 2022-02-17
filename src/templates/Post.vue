<template>
    <Layout>
        <!-- Page Header -->
        <header class="masthead" :style="`background-image: url('${$page.post.cover ? 'process.env.GRIDSOME_API_URL' + $page.post.cover.url : 'img/post-bg.jpg'}')`">
            <div class="overlay"></div>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-heading">
                        <h1>{{$page.post.Title}}</h1>
                        <h2 class="subheading">{{$page.post.sub_title}}</h2>
                        <span class="meta">Posted by
                        <g-link ro="/">{{$page.post.created_by.firstname}}&nbsp;{{$page.post.created_by.lastname}}</g-link>
                        on {{$page.post.created_at | formatDate}}</span>
                    </div>
                </div>
            </div>
            </div>
        </header>

        <!-- Post Content -->
        <article>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto" v-html="content"></div>
                </div>
            </div>
        </article>

    </Layout>
</template>

<page-query>
query ($id: ID!) {
    post: strapiPosts(id: $id) {
        id
        Title
        sub_title
        content
        tags {
            id
            title
        }
        cover {
            url
        }
        created_by {
            firstname
            lastname
        }
        created_at
    }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it';
export default {
    name: 'Post',
    computed: {
        content() {
            const markdownIt = new MarkdownIt();
            const result = markdownIt.render(this.$page.post.content); 
            return result;
        }
    }
}
</script>

<style scoped>

</style>