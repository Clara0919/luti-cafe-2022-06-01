<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">精選好物</li>
    </ol>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 gy-4">
        <div class="vertical-nav">
          <router-link to="/cookie"><p>手工餅乾</p></router-link>
          <hr />
          <router-link to="/coffee"><p>職人咖啡</p></router-link>
          <hr />
          <router-link to="/tool"><p>沖煮器具</p></router-link>
          <hr />
          <router-link to="/selection"><p>精選好物</p></router-link>
          <hr />
          <router-link to="/gift"><p>伴手禮盒</p></router-link>
        </div>
      </div>

      <div class="col-10">
        <div class="row row2">
          <template v-for="product in products" :key="product.id">
            <div class="col-lg-3 col-md-4 col-sm-5 gy-4">
              <div class="card">
                <router-link :to="`/product/${product.id}`">
                  <div class="hover">
                    <img
                      :src="product.imageUrlOne"
                      class="card-img-top"
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <p class="card-text">{{ product.title }}</p>
                    <p class="card-text price">
                      <strong>NT${{ product.price }}</strong>
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  font-family: "Noto Sans SC", sans-serif;
}
nav {
  padding: 10px;
}
.vertical-nav {
  border: 1px solid rgb(189, 188, 188);
  /* margin-left: 5px; */
}
.vertical-nav p {
  padding: 10px 0 10px 0;
  margin: 10px;
  text-align: center;
  color: #3f2516;
}
a {
  color: rgb(51, 51, 51);
  text-decoration: none;
}
hr {
  margin: 0px;
}
.row {
  padding: 10px;
}
.card-text {
  text-align: center;
}
.price {
  color: #734429;
}
.row2 {
  padding-top: 0;
}
</style>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem("products")).filter(
      (item) => {
        return item.category === "selection";
      }
    );
  },
};
</script>