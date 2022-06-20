<template>
  <!-- <div class="container">
    <div id="order_container" class="col-lg-8 col-xs-12 mx-auto">
      <div class="row">
        <div id="order_table">
          <div class="empty">
            <div class="text-center order">您的帳號目前沒有訂單</div>
          </div>
        </div> -->

  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10">
        <div class="h3 text-center my-5">訂單資訊</div>
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
            <tr v-for="orderItem in order" :key="orderItem.id">
              <td>
                <img class="product-pic" :src="orderItem.imageUrlOne" alt="" />
                <span class="product-name">{{ orderItem.title }}</span>
              </td>

              <td>
                <p class="price">NT${{ orderItem.price }}</p>
              </td>

              <td>
                <div>{{orderItem.quantity}}</div>
              </td>
              <td>
                <p class="price">
                  NT${{ orderItem.quantity * orderItem.price }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

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


<script>
export default {
  name: "Quantity",
  data() {
    return {
      order: [],
    };
  },
  methods: {},
  mounted() {
    this.order = JSON.parse(localStorage.getItem("order")) || [];
    console.log(this.order);
  },
};
</script>

