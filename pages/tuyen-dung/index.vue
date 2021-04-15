<template>
  <div class="blog-standard">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-lg-offset-1">
          <Post v-for="post in posts" :key="post._id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Post from '~/components/Post'
export default {
  components: {
    Post,
  },
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "post" && author._ref == '3aedb093-827e-46dc-bdc0-992b1a8b818c']{_id, title, body, slug, 'imageId': mainImage.asset->_id}`
    const posts = await $sanity.fetch(query)
    return { posts }
  },
  head() {
    return {
      title: 'Nộp hồ sơ xin làm nhân viên bảo vệ - Công ty bảo vệ Kawasaki',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Công Ty Bảo Vệ Kawasaki nhận hồ sơ xin làm bảo vệ, kcn khai quang tuyển dụng bảo vệ...',
        },
      ],
    }
  },
}
</script>
