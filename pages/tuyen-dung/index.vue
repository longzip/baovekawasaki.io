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
    // const querySave = groq`*[_type == 'post' && author._ref == '2a7d74a8-83da-4dd0-9c0f-9f3bce87a51f']{_id, title, slug}`
    const query = groq`*[_type == "post" && author._ref == '7b426352-eb03-42da-8356-16dd25119f1e']{_id, title, body, slug, 'imageId': mainImage.asset->_id}`
    const posts = await $sanity.fetch(query)
    return { posts }
  },
  head() {
    return {
      title: 'Nộp hồ sơ xin làm nhân viên bảo vệ -Công ty bảo vệ tại Vĩnh Phúc',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Công Ty Tnhh Dịch Vụ Bảo Vệ An Ninh Phía Bắc, Lạc Long Quân, Hùng Vương, Phúc Yên, Vĩnh Phúc nhận hồ sơ xin làm bảo vệ, kcn khai quang tuyển dụng bảo vệ...',
        },
      ],
    }
  },
}
</script>
