<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <!-- <img
                class="h-8 w-8"
                src="/images/logo.png"
                alt="Công ty bảo vệ Kawasaki tuyển dụng"
              /> -->
            <a href="https://baovekawasaki.tk/" class="text-white font-medium"
              >Tuyển bảo vệ Kawasaki</a
            >
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-300 text-blue-600'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                ><svg
                  v-if="item.current"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 float-left pr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <use xlink:href="#zalo"></use></svg
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="open = !open"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="open" id="mobile-menu" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-300 text-blue-600'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          <svg
            v-if="item.current"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 float-left pr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <use xlink:href="#zalo"></use>
          </svg>
          {{ item.name }}</a
        >
      </div>
    </div>
  </nav>
</template>
<script>
const navigation = [
  { name: 'Trang chủ', href: '/', current: false },
  {
    name: 'Ứng tuyển ngay',
    href: 'https://www.lambaove.ga/ung-tuyen/',
    current: false,
  },
  { name: 'Blog', href: 'https://blog.lambaove.ga/', current: false },
  { name: 'Vào nhóm Zalo', href: 'https://zalo.me/g/acgaxu870', current: true },
]
export default {
  data() {
    const open = false

    return {
      navigation,
      open,
    }
  },
}
</script>
