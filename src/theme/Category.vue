<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
      <app-post :link="post.link">
        <h3 slot="title">{{ post.title }}</h3>
        <span slot="content">
            {{ post.content }}
        </span>
      </app-post>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Post from './Post.vue'

  export default {
    components: {
      'app-post': Post
    },
    data() {
      return {
        id: this.$route.params.id,
        postsFrontEnd: [
          {id: 1, title: 'PWA stats', content: 'lorem sum'},
          {id: 2, title: 'Guide HTTP/2 Server push', content: 'lorem sum'},
          {id: 3, title: 'GraphQL', content: 'lorem sum'}
        ],
        postsMobile: [
          {id: 4, title: 'Mobile Apps', content: 'lorem sum'},
          {id: 5, title: 'Learn JS', content: 'lorem sum'},
          {id: 6, title: 'Vue custom directives', content: 'lorem sum'}
        ],
        posts: [
        ]
      }
    },
    methods: {
      loadPosts() {
        if (this.id === 'front-end') {
          this.posts = this.postsFrontEnd
        } else {
          this.posts = this.postsMobile
        }
      }
    },
    watch: {
      '$route'(to, from) {
        this.id = to.params.id
        this.loadPosts()
      }
    },
    created() {
      this.loadPosts()
    }
  }
</script>
