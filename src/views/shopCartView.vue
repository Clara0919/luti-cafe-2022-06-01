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
            <tr>
              <td>
                <img
                  src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NDI2MDY4NjNfNGEwNmY0NTQ5ODM5YWU2ZDBiMTAuanBlZyJdLFsicCIsInRodW1iIiwiMTYweDE2MCMiXV0.jpeg?sha=c9210b598466573c"
                  alt=""
                />
                <span class="product-name">黑芝麻花生脆餅</span>
              </td>
              <td><p class="price">250</p></td>
              <td>
                <div class="quantity input-group">
                  <button class="btn btn-default" @click="decrement()">
                    -
                  </button>

                  <input type="number" min="0.00" :value="quantity" />

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
      quantity: 1,
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