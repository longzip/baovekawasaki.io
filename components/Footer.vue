<template>
  <div class="footer-06">
    <div class="container">
      <!-- Row 1 Starts -->
      <div class="row row1">
        <div class="col-lg-9 col-md-9 col-sm-9">
          <h2 class="mau-trang">
            Công ty bảo vệ Kawasaki - Tuyển dụng bảo vệ và việc làm bảo vệ ở hà
            nội
          </h2>
        </div>
        <!-- Social Icons Starts -->
        <div class="col-lg-3 col-md-3 col-sm-3">
          <ul class="social-icons">
            <li>
              <a href=""><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/tuyenbaovekawasaki"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href=""><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
        <!-- Social Icons Ends -->
      </div>
      <!-- Row 1 Ends -->
      <!-- Row 2 Starts -->
      <div class="row row2">
        <!-- Tags Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 clearfix tags">
          <h4 class="tieu-de">Làm bảo vệ tại hà nội</h4>
          <ul>
            <li v-for="(tuKhoa, index) in tuKhoas" :key="index">
              <a href="#">{{ tuKhoa }}</a>
            </li>
          </ul>
        </div>
        <!-- Tags Ends -->
        <!-- Recent Posts Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 recent-posts">
          <h4 class="tieu-de">Tìm việc làm bảo vệ hà nội</h4>
          <ul>
            <li v-for="job in jobs" :key="job._id">
              <nuxt-link :to="'/tuyen-dung/' + job.slug.current + '/'">{{
                job.title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- Recent Posts Ends -->
        <!-- From Blog Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 from-blog">
          <h4 class="tieu-de">Làm bảo vệ tại hà nội</h4>
          <ul>
            <li class="clearfix">
              <div class="picture">
                <img
                  src="~/assets/images/blog/footer/1.jpg"
                  alt="việc làm bảo vệ"
                />
              </div>
              <div class="info">
                <div class="caption">
                  <a href="#">Tìm việc làm bảo vệ bảo an ở tại hà nội?</a>
                </div>
                <div class="date">
                  Ngày đăng {{ new Date().toLocaleDateString() }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- From Blog Ends -->
        <!-- About Us Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 about">
          <h4 class="tieu-de">Bảo vệ ở hà nội</h4>
          <div class="description">
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
          <div class="call-mobile">
            <a id="callnowbutton" href="tel:0978333963">097 833 39 63</a
            ><i class="fa fa-phone"></i>
          </div>
          <!-- Your Chat Plugin code -->
          <div
            class="fb-customerchat"
            attribution="setup_tool"
            page_id="290853411569651"
          ></div>
        </div>
        <!-- About Us Ends -->
      </div>
      <!-- Row 2 Ends -->
    </div>
    <!-- Load Facebook SDK for JavaScript -->
    <script>
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v10.0',
        })
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    </script>

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
    <!-- Facebook Pixel Code -->
    <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = '2.0'
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/vi_VN/fbevents.js'
      )
      fbq('init', '241950547678859')
      fbq('track', 'PageView')
    </script>
  </div>
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
<style scoped>
.tieu-de {
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 30px;
}
</style>
