<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">首頁</a></li>
      <li class="breadcrumb-item"><a href="#">手工餅乾</a></li>
      <li class="breadcrumb-item active" aria-current="page">黑芝麻花生脆餅</li>
    </ol>
  </nav>
  <hr />
  <div class="container-fluid product-main">
    <div class="row d-flex justify-content-around">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <div class="box">
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NDQyMzYwNTRfNWY4Zjk4YjU3NjM4ZjczNWU0ZmUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=172f380033a0d264"
            alt=""
          />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <h2>黑芝麻花生脆餅</h2>
        <p>
          無麩質 天然純手工製作 低溫烘焙，非油炸 無添加防腐劑, 無香料, 無蔗糖
          保留完整營養 嚴選天然飽滿日本黑芝麻 搭配低溫烘焙台灣台農11號花生
          雙重口味的撞擊味蕾 細緻酥脆的口感
        </p>
        <p>建議售價</p>
        <h4>NT$250</h4>

        <div class="quantity input-group mt-4">
          <button class="btn btn-default" @click="decrement()">-</button>

          <input type="number" min="0.00" :value="quantity" />

          <button class="btn btn-default" @click="increment()">+</button>
        </div>
        <div class="add-cart">
          <input class="btn btn-outline" type="button" value="加入購物車" />
          <input class="btn btn-solid" type="button" value="直接購買" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.product-main {
  padding: 30px;
}
.box img {
  max-width: 100%;
}

.add-cart {
  margin-top: 50px;
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