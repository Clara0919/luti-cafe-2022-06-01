<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">手工餅乾</li>
    </ol>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 gy-4">
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
                    <h5 class="card-text">{{ product.title }}</h5>
                    <h6 class="card-text price">
                      <strong>NT${{ product.price }}</strong>
                    </h6>
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
  margin: 10px;
  text-align: center;

  color: #3f2516;
}

.vertical-nav p:hover {
  color: #734429;
}

a {
  color: rgb(51, 51, 51);
  text-decoration: none;
}
a:hover {
  color: #734429;
}
hr {
  margin: 0px;
}
.row {
  padding: 10px;
}
h5 {
  font-size: 16px;
  margin-bottom: 15px;
  color: rgb(45, 45, 45);
}

h5:hover {
  color: #734429;
}

h5,
h6 {
  text-align: center;
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
    // this.axios.get("/products").then((response) => {
    //   console.log(response);
    //   // this.products = response.data.data;
    //   this.products = response.data.data.filter((item) => {
    //     return item.category === "cookie";
    //   });
    // });

    //改從localStorage存取
    this.products = JSON.parse(localStorage.getItem("products")).filter(
      (item) => {
        return item.category === "cookie";
      }
    );
  },
};
</script>