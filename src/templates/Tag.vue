<template>
    <Layout>

        <!-- Page Header -->
        <header class="masthead" style="background-image: url('img/home-bg.jpg')">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                <h1># {{$page.tag.title}}</h1>
                </div>
            </div>
            </div>
        </div>
        </header>

        <!-- Main Content -->
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
            <template v-for="post in $page.tag.posts">
                <div class="post-preview" :key="post.id">
                    <g-link :to="`/post/${post.id}`">
                        <h2 class="post-title">{{post.Title}}</h2>
                        <h3 class="post-subtitle">{{post.sub_title}}</h3>
                    </g-link>
                    <p class="post-meta">Posted on {{post.created_at | formatDate}}</p>
                </div>
                <hr :key="post.id"/>
            </template>
            <!-- Pager -->
            <div class="clearfix">
                <g-link class="btn btn-primary float-right" href="/">Older Posts &rarr;</g-link>
            </div>
            </div>
        </div>
        </div>

    </Layout>
</template>

<page-query>
query ($id: ID!) {
    tag: strapiTags(id: $id) {
        id
        title
        posts {
            id
            Title
            sub_title
            created_at
            created_by
        }
    }
}
</page-query>

<script>
export default {
    name: 'Tag',
    mounted() {
        console.log(this.$page)
    }
}
</script>

<style>

</style>