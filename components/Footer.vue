<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Công ty bảo vệ Kawasaki</h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            Tuyển dụng bảo vệ và việc làm bảo vệ ở hà nội
          </h5>
          <div class="mt-6 w-full flex">
            <a
              href="tel:0978333963"
              rel="nofollow"
              class="flex"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <use xlink:href="#call"></use>
              </svg>
              <span class="pl-1">097 833 39 63</span></a
            >
            <a
              href="https://zalo.me/0978333963"
              rel="nofollow"
              class="ml-5 flex"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <use xlink:href="#zalo"></use>
              </svg>
              <span class="pl-1">Hỗ trợ trò chuyện miễn phí</span></a
            >
          </div>
          <p class="text-sm mt-6 text-blueGray-500 font-semibold">
            <strong
              >Thông tin TẬP ĐOÀN LIÊN DOANH DỊCH VỤ BẢO VỆ KAWASAKI VIỆT NHẬT:
              mã số thuế: 2500369783-002, Địa chỉ: Tầng 1, nhà chung cư 12 tầng,
              Thị Trấn Quang Minh, Huyện Mê Linh, Thành phố Hà Nội, Việt
              Nam:</strong
            ><br />
            <strong>Cần tuyển dụng bảo vệ hà nội</strong>
            <em>nhân viên bảo vệ và an ninh</em> tòa nhà, siêu thị, nhà máy làm
            việc tại KCN Khai Quang, Vĩnh Yên, KCN Bình Xuyên, KCN Thăng Long,
            Vĩnh Phúc hoặc KCN Bá Thiện, Vĩnh Phúc. Khu vực Phúc Yên, Xuân Hòa.
            KCN Quang Minh, Mê Linh, Hà Nội
          </p>
          <p>
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=44f7a756-5591-471b-b9fe-d4d507b77a18"
              title="DMCA.com Protection Status"
              class="dmca-badge"
            >
              <img
                src="https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=44f7a756-5591-471b-b9fe-d4d507b77a18"
                alt="DMCA.com Protection Status"
            /></a>
            <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
          </p>
        </div>
        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div
              class="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto"
            >
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                >Làm bảo vệ tại Hà Nội</span
              >
              <ul>
                <li v-for="job in jobs" :key="job._id" class="list-unstyled">
                  <nuxt-link :to="'/tuyen-dung/' + job.slug.current + '/'">{{
                    job.title
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
            <div
              class="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto"
            >
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                >Bảo vệ ở Hà Nội</span
              >
              <ul class="list-unstyled">
                <li v-for="(tuKhoa, index) in tuKhoas" :key="index">
                  <a href="/">{{ tuKhoa }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright ©
            <!-- -->2021<!-- -->
            Việc làm bảo vệ tại Hà Nội by<!-- -->
            <a
              href="https://lovanlong.ga/"
              class="text-blueGray-500 hover:text-blueGray-800"
              target="_blank"
              >Thiết kế web Vĩnh Phúc</a
            >.
          </div>
        </div>
      </div>

      <!-- Messenger Plugin chat Code -->
      <div id="fb-root"></div>

      <!-- Your Plugin chat code -->
      <div id="fb-customer-chat" class="fb-customerchat"></div>

      <script>
        var chatbox = document.getElementById('fb-customer-chat')
        chatbox.setAttribute('page_id', '102212361942672')
        chatbox.setAttribute('attribution', 'biz_inbox')
        window.fbAsyncInit = function () {
          FB.init({
            xfbml: true,
            version: 'v11.0',
          })
        }
        ;(function (d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s)
          js.id = id
          js.src =
            'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
          fjs.parentNode.insertBefore(js, fjs)
        })(document, 'script', 'facebook-jssdk')
      </script>
    </div>
    <div class="hidden">
      <svg id="call" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        ></path>
      </svg>
      <svg id="zalo" viewBox="0 0 460.1 436.6">
        <path
          d="m82.6 380.9c-1.8-.8-3.1-1.7-1-3.5 1.3-1 2.7-1.9 4.1-2.8 13.1-8.5 25.4-17.8 33.5-31.5 6.8-11.4 5.7-18.1-2.8-26.5-47.4-47.4-68.2-104.1-57.8-171.1 5.9-37.8 23.2-70.5 48.4-98.9 15.2-17.2 33.3-31.1 53.1-42.7 1.2-.7 2.9-.9 3.1-2.7-.4-1-1.1-.7-1.7-.7-33.7 0-67.4-.7-101 .2-32.2 1-60 25.9-59.9 61.6.2 104.3 0 208.6 0 313 0 32.4 24.7 59.5 57 60.7 27.3 1.1 54.6.2 82 .1 2 .1 4 .2 6 .2h144.4c36 0 72 .2 108 0 33.4 0 60.5-27 60.5-60.3v-.6-58.5c0-1.4.5-2.9-.4-4.4-1.8.1-2.5 1.6-3.5 2.6-19.4 19.5-42.3 35.2-67.4 46.3-61.5 27.1-124.1 29-187.6 7.2-5.5-2-11.5-2.2-17.2-.8-8.4 2.1-16.7 4.6-25 7.1-24.4 7.6-49.3 11-74.8 6zm72.5-168.5c1.7-2.2 2.6-3.5 3.6-4.8 13.1-16.6 26.2-33.2 39.3-49.9 3.8-4.8 7.6-9.7 10-15.5 2.8-6.6-.2-12.8-7-15.2-3-.9-6.2-1.3-9.4-1.1-17.8-.1-35.7-.1-53.5 0-2.5 0-5 .3-7.4.9-5.6 1.4-9 7.1-7.6 12.8 1 3.8 4 6.8 7.8 7.7 2.4.6 4.9.9 7.4.8 10.8.1 21.7 0 32.5.1 1.2 0 2.7-.8 3.6 1-.9 1.2-1.8 2.4-2.7 3.5-15.5 19.6-30.9 39.3-46.4 58.9-3.8 4.9-5.8 10.3-3 16.3s8.5 7.1 14.3 7.5c4.6.3 9.3.1 14 .1 16.2 0 32.3.1 48.5-.1 8.6-.1 13.2-5.3 12.3-13.3-.7-6.3-5-9.6-13-9.7-14.1-.1-28.2 0-43.3 0zm116-52.6c-12.5-10.9-26.3-11.6-39.8-3.6-16.4 9.6-22.4 25.3-20.4 43.5 1.9 17 9.3 30.9 27.1 36.6 11.1 3.6 21.4 2.3 30.5-5.1 2.4-1.9 3.1-1.5 4.8.6 3.3 4.2 9 5.8 14 3.9 5-1.5 8.3-6.1 8.3-11.3.1-20 .2-40 0-60-.1-8-7.6-13.1-15.4-11.5-4.3.9-6.7 3.8-9.1 6.9zm69.3 37.1c-.4 25 20.3 43.9 46.3 41.3 23.9-2.4 39.4-20.3 38.6-45.6-.8-25-19.4-42.1-44.9-41.3-23.9.7-40.8 19.9-40 45.6zm-8.8-19.9c0-15.7.1-31.3 0-47 0-8-5.1-13-12.7-12.9-7.4.1-12.3 5.1-12.4 12.8-.1 4.7 0 9.3 0 14v79.5c0 6.2 3.8 11.6 8.8 12.9 6.9 1.9 14-2.2 15.8-9.1.3-1.2.5-2.4.4-3.7.2-15.5.1-31 .1-46.5z"
          fill="#fdfefe"
        ></path>
        <path
          d="m139.5 436.2c-27.3 0-54.7.9-82-.1-32.3-1.3-57-28.4-57-60.7 0-104.3.2-208.6 0-313 0-35.7 27.9-60.6 60-61.5 33.6-.9 67.3-.2 101-.2.6 0 1.4-.3 1.7.7-.2 1.8-2 2-3.1 2.7-19.8 11.6-37.9 25.5-53.1 42.7-25.1 28.4-42.5 61-48.4 98.9-10.4 66.9 10.5 123.7 57.8 171.1 8.4 8.5 9.5 15.1 2.8 26.5-8.1 13.7-20.4 23-33.5 31.5-1.4.8-2.8 1.8-4.2 2.7-2.1 1.8-.8 2.7 1 3.5.4.9.9 1.7 1.5 2.5 11.5 10.2 22.4 21.1 33.7 31.5 5.3 4.9 10.6 10 15.7 15.1 2.1 1.9 5.6 2.5 6.1 6.1z"
          fill="#0180c7"
        ></path>
        <path
          d="m139.5 436.2c-.5-3.5-4-4.1-6.1-6.2-5.1-5.2-10.4-10.2-15.7-15.1-11.3-10.4-22.2-21.3-33.7-31.5-.6-.8-1.1-1.6-1.5-2.5 25.5 5 50.4 1.6 74.9-5.9 8.3-2.5 16.6-5 25-7.1 5.7-1.5 11.7-1.2 17.2.8 63.4 21.8 126 19.8 187.6-7.2 25.1-11.1 48-26.7 67.4-46.2 1-1 1.7-2.5 3.5-2.6.9 1.4.4 2.9.4 4.4v58.5c.2 33.4-26.6 60.6-60 60.9h-.5c-36 .2-72 0-108 0h-144.5c-2-.2-4-.3-6-.3z"
          fill="#0172b1"
        ></path>
        <path
          d="m155.1 212.4c15.1 0 29.3-.1 43.4 0 7.9.1 12.2 3.4 13 9.7.9 7.9-3.7 13.2-12.3 13.3-16.2.2-32.3.1-48.5.1-4.7 0-9.3.2-14-.1-5.8-.3-11.5-1.5-14.3-7.5s-.8-11.4 3-16.3c15.4-19.6 30.9-39.3 46.4-58.9.9-1.2 1.8-2.4 2.7-3.5-1-1.7-2.4-.9-3.6-1-10.8-.1-21.7 0-32.5-.1-2.5 0-5-.3-7.4-.8-5.7-1.3-9.2-7-7.9-12.6.9-3.8 3.9-6.9 7.7-7.8 2.4-.6 4.9-.9 7.4-.9 17.8-.1 35.7-.1 53.5 0 3.2-.1 6.3.3 9.4 1.1 6.8 2.3 9.7 8.6 7 15.2-2.4 5.7-6.2 10.6-10 15.5-13.1 16.7-26.2 33.3-39.3 49.8-1.1 1.3-2.1 2.6-3.7 4.8z"
          fill="#0180c7"
        ></path>
        <path
          d="m271.1 159.8c2.4-3.1 4.9-6 9-6.8 7.9-1.6 15.3 3.5 15.4 11.5.3 20 .2 40 0 60 0 5.2-3.4 9.8-8.3 11.3-5 1.9-10.7.4-14-3.9-1.7-2.1-2.4-2.5-4.8-.6-9.1 7.4-19.4 8.7-30.5 5.1-17.8-5.8-25.1-19.7-27.1-36.6-2.1-18.3 4-33.9 20.4-43.5 13.6-8.1 27.4-7.4 39.9 3.5zm-35.4 36.5c.2 4.4 1.6 8.6 4.2 12.1 5.4 7.2 15.7 8.7 23 3.3 1.2-.9 2.3-2 3.3-3.3 5.6-7.6 5.6-20.1 0-27.7-2.8-3.9-7.2-6.2-11.9-6.3-11-.7-18.7 7.8-18.6 21.9zm104.7.6c-.8-25.7 16.1-44.9 40.1-45.6 25.5-.8 44.1 16.3 44.9 41.3.8 25.3-14.7 43.2-38.6 45.6-26.1 2.6-46.8-16.3-46.4-41.3zm25.1-2.4c-.2 5 1.3 9.9 4.3 14 5.5 7.2 15.8 8.6 23 3 1.1-.8 2-1.8 2.9-2.8 5.8-7.6 5.8-20.4.1-28-2.8-3.8-7.2-6.2-11.9-6.3-10.8-.6-18.4 7.6-18.4 20.1zm-33.9-17.5c0 15.5.1 31 0 46.5.1 7.1-5.5 13-12.6 13.2-1.2 0-2.5-.1-3.7-.4-5-1.3-8.8-6.6-8.8-12.9v-79.5c0-4.7-.1-9.3 0-14 .1-7.7 5-12.7 12.4-12.7 7.6-.1 12.7 4.9 12.7 12.9.1 15.6 0 31.3 0 46.9z"
          fill="#0180c7"
        ></path>
        <path
          d="m235.7 196.3c-.1-14.1 7.6-22.6 18.5-22 4.7.2 9.1 2.5 11.9 6.4 5.6 7.5 5.6 20.1 0 27.7-5.4 7.2-15.7 8.7-23 3.3-1.2-.9-2.3-2-3.3-3.3-2.5-3.5-3.9-7.7-4.1-12.1zm129.8-1.8c0-12.4 7.6-20.7 18.4-20.1 4.7.1 9.1 2.5 11.9 6.3 5.7 7.6 5.7 20.5-.1 28-5.6 7.1-16 8.3-23.1 2.7-1.1-.8-2-1.8-2.8-2.9-3-4.1-4.4-9-4.3-14z"
          fill="#fdfefe"
        ></path>
        <path
          d="m66 1h328.1c35.9 0 65 29.1 65 65v303c0 35.9-29.1 65-65 65h-328.1c-35.9 0-65-29.1-65-65v-303c0-35.9 29.1-65 65-65z"
          fill="none"
          stroke="#0180c7"
          stroke-miterlimit="10"
          stroke-width="2"
        ></path>
      </svg>
    </div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-SFDXCZ47RJ"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'G-MPB69G6B3V')
    </script>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        {
          _id: '8ede167f-8925-4064-8022-ad45e023adb6',
          slug: {
            _type: 'slug',
            current:
              'tuyen-bao-ve-chung-cu-tai-ha-noi-viec-lam-bao-ve-bao-an-o',
          },
          title: 'Tuyển bảo vệ chung cư tại hà nội - Việc làm bảo vệ bảo ăn ở',
        },
      ],
      tuKhoas: [
        'tuyển bảo vệ chung cư tại hà nội',
        'bảo vệ lương cao tại hà nội',
        'tìm việc bảo vệ hà nội',
        'tìm việc bảo vệ ở hà nội',
        'tuyển nhân viên bảo vệ tại hà nội',
        'việc làm bảo vệ hà nội',
        'tuyển đội trưởng bảo vệ tại hà nội',
        'công ty bảo vệ tuyển dụng tại hà nội',
        'tuyển dụng bảo vệ tại hà nội',
        'tuyển dụng bảo vệ hà nội',
        'làm bảo vệ tại hà nội',
        'tìm việc làm bảo vệ chung cư tại hà nội',
        'tìm việc làm bảo vệ hà nội',
        'tuyển bảo vệ ở hà nội',
        'tìm bảo vệ tại hà nội',
        'tìm việc làm bảo vệ bảo an ở tại hà nội',
        'việc làm bảo vệ ở hà nội',
        'bảo vệ ở hà nội',
      ],
    }
  },
}
</script>
