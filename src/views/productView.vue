<template>
  <!-- <template v-for="product in products" :key="product.id"> -->
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">首頁</a></li>
      <li class="breadcrumb-item"><a href="#">手工餅乾</a></li>
      <li class="breadcrumb-item active" aria-current="page">
        {{ title }}
      </li>
    </ol>
  </nav>
  <hr />

  <div class="container-fluid product-main">
    <div class="row d-flex justify-content-around">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="imageUrlOne" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="imageUrlTwo" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="imageUrlThree" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12">
        <h2>{{ title }}</h2>
        <p class="intro">
          {{ description }}
        </p>
        <p class="price">建議售價</p>
        <h4>{{ price }}</h4>

        <div class="quantity input-group">
          <button class="btn btn-default" @click="decrement()">-</button>

          <input class="number" type="number" min="0.00" :value="quantity" />

          <button class="btn btn-default" @click="increment()">+</button>
        </div>
        <div class="add-cart">
          <router-link to="/shopCart"
            ><input class="btn btn-outline" type="button" value="加入購物車"
          /></router-link>
          <input class="btn btn-solid" type="button" value="直接購買" />
        </div>
      </div>
    </div>
  </div>
  <!-- </template> -->
</template>
<style scoped>
a {
  color: gray;
}
a:hover {
  color: #734429;
}

.product-main {
  padding: 30px;
}

img {
  object-fit: cover;
  height: 400px;
  max-width: 100%;
}
.intro {
  color: gray;
  padding-top: 30px;
}

.price {
  margin-bottom: 0px;
  padding-top: 30px;
}
h4 {
  color: #734429;
}
.quantity {
  padding-top: 30px;
}
.number {
  text-align: center;
}

.add-cart {
  margin-top: 20px;
}
.btn-default {
  border: solid 1px gray;
}

.btn-solid {
  border: 1px solid #734429;
  border-radius: 4px;
  background: #734429;
  color: white;
}

.btn-outline {
  border: 1px solid #734429;
  border-radius: 4px;
}
</style>
<script>
export default {
  name: "Quantity",
  data() {
    return {
      quantity: 1,
      products: [],
      productDetail: [],
      price: [],
      title: [],
      imageUrlOne: [],
      imageUrlTwo: [],
      description: [],
    };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 1) {
        this.quantity = 1;
      } else {
        this.quantity--;
      }
    },
    // changePic() {
    //   let pics = document.querySelectorAll(".pic-wrap");
    //   let main = document.querySelector("#main");
    //   for (let i = 0; i < pics.length; i++) {
    //     pics[i].addEventListener("click", function () {
    //       let img = this.childNodes[0].src;
    //       // console.log(img)
    //       main.src = img;
    //     });
    //   }
    // },
  },
  mounted() {
    let vm = this;
    vm.axios.get("/products").then(async (response) => {
      console.log(response);
      vm.productDetail = await response.data.data;
      vm.productDetail.forEach(function (item, index) {
        if (item.id == vm.$route.params.productId) {
          vm.price = item.price;
          vm.title = item.title;
          vm.imageUrlOne = item.imageUrlOne;
          vm.imageUrlTwo = item.imageUrlTwo;
          vm.imageUrlThree = item.imageUrlThree;
          vm.description = item.description;
        }
      });
      // this.products = response.data.data.filter((item) => {
      //   return item.category === "手工餅乾";
      // });
      // this.cookieList = cookieList;
      // console.log("cookieList", cookieList);
    });
  },
};
/*
        let pics=document.querySelectorAll(".pic-wrap img");
        let main=document.querySelector("#main")
        for(let i=0;i<pics.length;i++){
            pics[i].addEventListener("click", function(){
                let img=this.src;
                // console.log(img)
                main.src=img
            })
        }
        */
</script>