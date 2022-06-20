<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10">
        <div class="h3 text-center my-5">購物車</div>
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
            <tr v-for="cartItem in cart" :key="cartItem.id">
              <td>
                <img class="product-pic" :src="cartItem.imageUrlOne" alt="" />
                <span class="product-name">{{ cartItem.title }}</span>
              </td>

              <td>
                <p class="price">NT${{ cartItem.price }}</p>
              </td>

              <td>
                <div class="quantity input-group">
                  <button
                    class="btn btn-default"
                    :class="{ disabled: minQuantity }"
                    @click="decrement(cartItem.id)"
                  >
                    -
                  </button>
                  <input
                    class="number"
                    type="number"
                    min="1.00"
                    :value="cartItem.quantity"
                  />
                  <button
                    class="btn btn-default"
                    @click="increment(cartItem.id)"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <p class="price">
                  {{ cartItem.quantity * cartItem.price }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary" @click="addOrder">立即結帳</button>
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
      cart: [], // [{id:1,q:3},{id:2,q:3}]
      // minQuantity: false,
    };
  },
  methods: {
    increment(id) {
      // this.products[id-1].cartItem.quantity++
      let flag = false;
      this.cart = this.cart.map((item) => {
        if (item.id == id) {
          item.quantity++;
          flag = true;
        } else {
          this.minQuantity = true;
        }
        return item;
      });
      // if(flag)this.cart.push({id,q:1})

      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    decrement(id) {
      // if (this.products[id-1].cartItem.quantity === 1) {
      //   this.products[id-1].cartItem.quantity = 1;
      // } else {
      //   this.products[id-1].cartItem.quantity--;
      // }
      // let obj = {
      //   id:id,
      //   q:this.products[id-1].cartItem.quantity
      // }
      let flag = false;
      this.cart = this.cart.map((item) => {
        if (item.id == id && item.quantity > 1) {
          item.quantity--;
          flag = true;
          // this.minQuantity = false;
        } else {
          // this.minQuantity = true;
        }
        return item;
      });
      // if(flag)this.cart.push({id,q:1})

      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addOrder() {
      let order = this.cart;
      localStorage.setItem("order", JSON.stringify(order));
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.$router.push("/memberOrder");
    },
  },
  mounted() {
    // if(localStorage.getItem('cart')){
    //   this.cart = JSON.parse(localStorage.getItem('cart'));
    // }else{
    //   this.cart = [];
    // }
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(this.cart);
    // this.products = JSON.parse(localStorage.getItem('products'))
    // console.log(this.products)
    // .filter((item) => {
    //   return item.id === this.cart.id;
    // })

    // this.axios.get("/cart").then((response) => {
    //   console.log(response);
    //   this.products = response.data
    //   console.log(response.data[0])

    // this.quantity = response.data[0].cartItem.quantity
    // });
    // this.axios.get("/cart-quantity").then((response) => {
    //   console.log("cart-quantity: "+response);
    //   // this.products = response.data
    //   // this.quantity = response.data.cartItem.quantity
    // });
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

.number {
  text-align: center;
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