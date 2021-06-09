<template>
  <article v-if="post" class="blog-detail">
    <!-- {{ post }} -->
    <SocialHead
      :title="post.title"
      :description="post.body[0].children[0].text"
      :image="post.imageUrl"
    />
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        :style="`background-image: url('${post.imageUrl}');`"
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
                {{ post.title }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <article class="pb-20 relative block bg-blue-900">
      <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 text-white">
            <block-content
              v-for="child in post.body"
              :key="child._id"
              :blocks="child"
            />
          </div>
        </div>
      </div>
    </article>
  </article>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]{_id, title, body, slug, 'imageId': mainImage.asset->_id, "imageUrl": mainImage.asset->url}`
    const post = await $sanity.fetch(query)
    return { post }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.body[0].children[0].text,
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'JobPosting',
            title: this.post.body[1].children[0].text,
            description:
              '<p>' +
              this.post.body
                .map((block) =>
                  block.children.map((child) => child.text).join('<br> ')
                )
                .join('<br> ') +
              '</p>',
            identifier: {
              '@type': 'PropertyValue',
              name: 'Hồ Thị Thắm',
              value: '84978333963',
            },
            datePosted: new Date().toISOString(),
            validThrough: new Date(
              Date.now() + 29 * 24 * 60 * 60 * 1000
            ).toISOString(),
            employmentType: 'CONTRACTOR',
            hiringOrganization: {
              '@type': 'Organization',
              name: 'Công Ty TNHH Liên Doanh Dịch Vụ Bảo Vệ Kawasaki Việt Nam',
              sameAs: 'https://baovekawasaki.tk',
              logo: 'https://baovekawasaki.tk/images/logo.png',
            },
            jobLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  'Tầng 1, nhà chung cư 12 tầng, Thị Trấn Quang Minh, Huyện Mê Linh, Thành phố Hà Nội, Việt Nam',
                addressLocality: 'Hà Nội',
                addressRegion: 'Hà Nội',
                postalCode: '12907',
                addressCountry: 'VN',
              },
            },
            baseSalary: {
              '@type': 'MonetaryAmount',
              currency: 'VND',
              value: {
                '@type': 'QuantitativeValue',
                minValue: 14000,
                maxValue: 16000,
                unitText: 'HOUR',
              },
            },
          },
        },
      ],
    }
  },
}
</script>
