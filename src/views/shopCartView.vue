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
            <tr v-for="product in cart" :key="product.id">
              <td>
                <img :src="product.imageUrlOne" alt="" class="product-pic" />
                <span class="product-name">{{ product.title }}</span>
              </td>
              <td>
                <p class="price">{{ product.price }}</p>
              </td>
              <td>
                <div class="quantity input-group">
                  <button class="btn btn-default" @click="decrement()">
                    -
                  </button>

                  <input
                    type="number"
                    min="0.00"
                    :value="product.cartItem.quantity"
                  />

                  <button class="btn btn-default" @click="increment()">
                    +
                  </button>
                </div>
              </td>
              <td>
                <p class="price">
                  {{ product.cartItem.quantity * product.price }}
                </p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <!-- <td>{{ product.amount }}</td> -->
            </tr>

            <!-- <tr class="total-price">
              <td></td>
              <td></td>
              <td></td>
              <td>金額總計：{{ sum }}</td>
            </tr> -->
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
      cart: [],
      quantity: "",
      price: "",
      title: "",
      amount: "",
    };
  },
  computed: {
    // sum() {
    //   var totalPrice = 0;
    //   this.cart.forEach(function () {
    //     totalPrice += product.cartItem.quantity * product.price;
    //   });
    //   return totalPrice;
    // },
    // countQuantity: function () {
    //   var countQuantity = 0;
    //   for (var i in this.cart) {
    //     countQuantity += parseInt(this.cart[i].quantity);
    //   }
    //   return countQuantity;
    // },
    // countTotal: function () {
    //   var countTotal = 0;
    //   for (var i in this.incart) {
    //     countTotal += parseInt(this.incart[i].quantity * this.incart[i].price);
    //   }
    //   return countTotal;
    // },
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
      this.cart = response.data;
    });
  },
};
</script>
<style scoped>
.product-name {
  padding: 40px;
}
.product-pic {
  object-fit: cover;
  max-height: 120px;
}
.total-price {
  text-align: left;
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