<template>
  <div class="top-logo">
    <a href="#"
      ><img
        src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1642596708_0a75cb16_navbar_logo.png?1642596708"
        alt=""
    /></a>
  </div>
  <div class="user-cart d-flex justify-content-end">
    <router-link to="/login"><i class="bi bi-person"></i></router-link>
    <router-link to="/shopcart"><i class="bi bi-cart"></i></router-link>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid nav-box">
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"
                ><router-link to="/cookie">首頁</router-link></a
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                商品分類
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link to="/cookie">手工餅乾</router-link>
                </li>
                <li>
                  <router-link to="/coffee">職人咖啡</router-link>
                </li>
                <li>
                  <router-link to="/tool">沖煮器具</router-link>
                </li>
                <li>
                  <router-link to="/selection">精選好物</router-link>
                </li>
                <li>
                  <router-link to="/gift">伴手禮盒</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >關於露緹</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >店內菜單</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >聯絡我們</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <!-- footer -->
  <div>
    <div class="container-fluid footer">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="box">
            <img
              src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1642596708_0a75cb16_navbar_logo.png?1642596708"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <h6>璐緹咖啡館</h6>
          <hr />
          <p>02 2777 2303</p>
          <p>台北市松山區八德路二段437巷1弄1號1樓</p>
          <p>週一至週五 10:00-19:00</p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <h6>商品分類</h6>
          <hr />
          <a href="">手工餅乾</a><br />
          <a href="">職人咖啡</a><br />
          <a href="">沖煮器具</a><br />
          <a href="">精選好物</a><br />
          <a href="">伴手禮盒</a><br />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <h6>服務項目</h6>
          <hr />
          <a href="">關於璐緹</a><br />
          <a href="">店內菜單</a><br />
          <a href="">購物須知</a><br />
          <a href="">會議空間</a><br />
          <a href="">璐緹時光</a><br />
        </div>
      </div>
    </div>
    <div class="bottom-box">
      <p>Copyright © 切版工 All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

a {
  color: rgb(36, 36, 36);
}

a:hover {
  color: #734429;
}
.top-logo img {
  display: block;
  margin: 30px auto;
}

.bi {
  font-size: 30px;
  color: gray;
  padding: 10px;
}
.nav-box {
  display: flex;
  justify-content: center !important;
}
.footer {
  background-color: #f9f9f9;
  padding: 40px 40px 70px 40px;
}

.footer.box {
  max-width: 100px;
  max-height: 50px;
}

.footer img {
  object-fit: contain;
  width: 90%;
  height: 90%;
}

.footer h6 {
  color: #734429;
}

.bottom-box {
  text-align: center;
  align-items: center;
  background: #6b5f55;
  height: 50px;
  color: white;
}
.bottom-box p {
  margin: 0;
  line-height: 50px;
}
</style>
