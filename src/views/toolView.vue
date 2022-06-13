<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">沖煮器具</li>
    </ol>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="vertical-nav">
          <p>手工餅乾</p>
          <hr />
          <p>職人咖啡</p>
          <hr />
          <p>沖煮器具</p>
          <hr />
          <p>精選好物</p>
          <hr />
          <p>伴手禮盒</p>
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
nav {
  padding: 10px;
}
.vertical-nav {
  border: 1px solid rgb(189, 188, 188);
  /* margin-left: 5px; */
}
.vertical-nav p {
  margin: 10px;
  text-align: center;
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
</style>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.axios.get("/products").then((response) => {
      console.log(response);
      // this.products = response.data.data;
      this.products = response.data.data.filter((item) => {
        return item.category === "沖煮器具";
      });
      // this.cookieList = cookieList;
      // console.log("cookieList", cookieList);
    });
  },
};
</script>