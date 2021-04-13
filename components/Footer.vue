<template>
  <div class="footer-06">
    <div class="container">
      <!-- Row 1 Starts -->
      <div class="row row1">
        <div class="col-lg-9 col-md-9 col-sm-9">
          <h2 class="mau-trang">
            Công ty bảo vệ tại Vĩnh Phúc - Tuyển dụng bảo vệ
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
                href="https://www.facebook.com/baoveanninhphiabac"
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
          <h4 class="tieu-de">Từ khóa tìm kiếm</h4>
          <ul>
            <li v-for="(tuKhoa, index) in tuKhoas" :key="index">
              <a href="#">{{ tuKhoa }}</a>
            </li>
          </ul>
        </div>
        <!-- Tags Ends -->
        <!-- Recent Posts Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 recent-posts">
          <h4 class="tieu-de">Tin tuyển dụng mới nhất</h4>
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
          <h4 class="tieu-de">Xin làm bảo vệ</h4>
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
                  <a href="#">Tôi ở Vĩnh Phúc xin làm bảo vệ được không?</a>
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
          <h4 class="tieu-de">Việc làm bảo vệ ở Vĩnh Phúc</h4>
          <div class="description">
            <strong
              >Thông tin Công Ty TNHH Dịch Vụ Bảo Vệ An Ninh Phía Bắc ở Thị xã
              Phúc Yên, Vĩnh Phúc: mã số thuế: 2500506581, Địa chỉ: Số 56, Đường
              Lạc Long Quân, P. Hùng Vương, TP. Phúc Yên,Vĩnh Phúc:</strong
            ><br />
            <strong>Cần tuyển dụng</strong>
            <em>nhân viên bảo vệ và an ninh</em> tòa nhà, siêu thị, nhà máy làm
            việc tại KCN Khai Quang, Vĩnh Yên, KCN Bình Xuyên, KCN Thăng Long,
            Vĩnh Phúc hoặc KCN Bá Thiện, Vĩnh Phúc. Khu vực Phúc Yên, Xuân Hòa.
            KCN Quang Minh, Mê Linh, Hà Nội
            <p>
              <a
                href="//www.dmca.com/Protection/Status.aspx?ID=bbf30974-e49d-4f2c-9a49-5d833800ae9a"
                title="DMCA.com Protection Status"
                class="dmca-badge"
              >
                <img
                  src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=bbf30974-e49d-4f2c-9a49-5d833800ae9a"
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
            page_id="110522487140550"
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

    <!-- Your Chat Plugin code -->
    <div
      class="fb-customerchat"
      attribution="page_inbox"
      page_id="110763834427796"
    ></div>
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

      gtag('config', 'G-2G9ZM8JQ20')
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
          _id: '304bbbfc-5e79-4e0a-90a6-a93c4744a3e6',
          slug: {
            _type: 'slug',
            current:
              'tuyen-bao-ve-vinh-yen-can-gap-20-nhan-vien-bao-ve-ca-ngay-va-toi',
          },
          title:
            'Tuyển bảo vệ Vĩnh Yên Cần gấp 20 Nhân viên bảo vệ ca ngày và tối',
        },
      ],
      tuKhoas: [
        'tìm việc làm bảo vệ',
        'tuyển bảo vệ',
        'việc làm bảo vệ tại vĩnh phúc',
        'tìm việc làm bảo vệ ở vĩnh phúc',
        'việc làm vĩnh phúc',
        'tuyển nhân viên bảo vệ',
        'việc làm bảo vệ',
        'tuyển bảo vệ vĩnh phúc',
        'tuyển bảo vệ vĩnh yên',
        'việc làm tại vĩnh phúc',
        'tìm việc làm ở vĩnh phúc',
        'tuyển dụng việc làm vĩnh phúc',
        'tuyển bảo vệ tại vĩnh phúc',
        'tìm việc bảo vệ',
        'tuyển dụng tại vĩnh phúc',
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
