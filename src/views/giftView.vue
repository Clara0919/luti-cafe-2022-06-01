<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">伴手禮盒</li>
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

      <div class="col-lg-10">
        <template v-for="product in products">
          <div class="col-lg-3 col-md-4 col-lg-5">
            <div class="card" style="width: 18rem">
              <div class="hover">
                <router-link to="/product">
                  <img :src="product.imageUrlOne" class="card-img-top" alt="" />
                </router-link>
              </div>
              <div class="card-body">
                <p class="card-text">{{ product.title }}</p>
              </div>
            </div>
          </div>
        </template>
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
        return item.category === "伴手禮盒";
      });
      // this.cookieList = cookieList;
      // console.log("cookieList", cookieList);
    });
  },
};
</script>