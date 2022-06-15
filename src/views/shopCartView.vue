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
                  <button class="btn btn-default" @click="decrement(product.cartItem.id)">
                    -
                  </button>

                  <input type="number" min="0.00" :value="product.cartItem.quantity" />

                  <button class="btn btn-default" @click="increment(product.cartItem.id)">
                    +
                  </button>
                </div>
              </td>
              <td>
                <p class="price">{{ product.cartItem.quantity * 250 }}</p>
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
      // quantity: ,
      products: [],
      cart:[]// [{id:1,q:3},{id:2,q:3}]
    };
  },
  methods: {
    increment(id) {
      // this.products[id-1].cartItem.quantity++
      let flag = false
      this.cart = this.cart.map(item=>{
        if(item.id==id){
          item.q++
          flag = true
        }
      })
      // if(flag)this.cart.push({id,q:1})
      
      localStorage.setItem('cart',JSON.stringify(this.cart))
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
      let flag = false
      this.cart = this.cart.map(item=>{
        if(item.id==id){
          item.q--
          flag = true
        }
      })
      // if(flag)this.cart.push({id,q:1})
      
      localStorage.setItem('cart',JSON.stringify(this.cart))
    },
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart'))
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