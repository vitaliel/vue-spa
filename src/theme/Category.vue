<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
      <div class="card">
        <div class="card-content">
          <h3>{{ post.title }}</h3>
          {{ post.content }}
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" :href="post.link" target="_blank">Read more</a>
        </footer>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        posts: [
          {id: 1, title: 'PWA stats', content: 'lorem sum'},
          {id: 2, title: 'Guide HTTP/2 Server push', content: 'lorem sum'},
          {id: 3, title: 'GraphQL', content: 'lorem sum'},
          {id: 4, title: 'Mobile Apps', content: 'lorem sum'},
          {id: 5, title: 'Learn JS', content: 'lorem sum'},
          {id: 6, title: 'Vue custom directives', content: 'lorem sum'}
        ]
      }
    }
  }
</script>
