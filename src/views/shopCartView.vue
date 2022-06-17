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

            <tr v-for="cartItem in cart">
              <td>
                <img
                  :src="cartItem.imageUrlOne"
                  alt=""
                />
                <span class="product-name">{{ cartItem.title }}</span>
              </td>
              <td><p class="price">NT${{ cartItem.price }}</p></td>

              <td>
                <div class="quantity input-group">
                  <button class="btn btn-default" @click="decrement(cartItem.id)">
                    -
                  </button>


                  <input
                    type="number"
                    min="0.00"
                    :value="cartItem.quantity"
                  />


                  <button class="btn btn-default" @click="increment(cartItem.id)">
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

      cart:[]// [{id:1,q:3},{id:2,q:3}]
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
    increment(id) {
      // this.products[id-1].cartItem.quantity++
      let flag = false
      this.cart = this.cart.map(item=>{
        if(item.id==id){
          item.quantity++
          flag = true
        }
        return item
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
          item.quantity--
          flag = true
        }
        return item
      })
      // if(flag)this.cart.push({id,q:1})
      
      localStorage.setItem('cart',JSON.stringify(this.cart))
    },
  },
  mounted() {

    // if(localStorage.getItem('cart')){
    //   this.cart = JSON.parse(localStorage.getItem('cart'));
    // }else{
    //   this.cart = [];
    // }
    this.cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(this.cart)
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