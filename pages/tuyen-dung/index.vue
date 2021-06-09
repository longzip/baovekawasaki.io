<template>
  <div>
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="background-image: url('/images/cong-ty-bao-ve-kawasaki-tuyen-dung.jpg');"
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-10 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">
                Thông báo tuyển dụng nhân viên bảo vệ
              </h1>
              <p class="mt-4 text-lg text-gray-300">
                Công ty bảo vệ kawasaki cần tuyển dụng nhân viên bảo vệ đi làm
                ngay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      <Post v-for="post in posts" :key="post._id" :post="post" />
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
