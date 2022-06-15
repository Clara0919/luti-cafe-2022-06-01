<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">商品明細</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products">
              <td>
                <img
                  :src="product.imageUrlOne"
                  alt=""
                />
                <span class="product-name">{{ product.title }}</span>
              </td>
              <td><p class="price">NT${{ product.price }}</p></td>
              <td>
                <div class="quantity input-group">
                  <button class="btn btn-default" @click="decrement()">
                    -
                  </button>

                  <input type="number" min="0.00" :value="product.cartItem.quantity" />

                  <button class="btn btn-default" @click="increment()">
                    +
                  </button>
                </div>
              </td>
              <td>
                <p class="price">{{ quantity * 250 }}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary">立即結帳</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Quantity",
  data() {
    return {
      quantity: '',
      products: [],
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
  },
  mounted() {
    this.axios.get("/cart").then((response) => {
      console.log(response);
      this.products = response.data
      // this.quantity = response.data.cartItem.quantity
    });
  },
};
</script>
<style scoped>
.product-name {
  padding: 40px;
}
.btn-default {
  border: solid 1px gray;
}
td {
  vertical-align: middle;
}
.price {
  margin: 0px;
}
/* .btn {
  margin-right: 150px;
} */
</style>