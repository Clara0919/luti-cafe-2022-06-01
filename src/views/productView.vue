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
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NDI2MDY4NjNfNGEwNmY0NTQ5ODM5YWU2ZDBiMTAuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=5a1a12c9d1643bc8"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NDQyMzYwNTRfNWY4Zjk4YjU3NjM4ZjczNWU0ZmUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=172f380033a0d264"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NTM2Mzg1OTRfNjVjMWU0MWZiMzA2MGFjNTcwMTEuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=bfc5cc26529ec97f"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <h2>黑芝麻花生脆餅</h2>
        <p class="intro">
          無麩質 天然純手工製作 低溫烘焙，非油炸 無添加防腐劑, 無香料, 無蔗糖
          保留完整營養 嚴選天然飽滿日本黑芝麻 搭配低溫烘焙台灣台農11號花生
          雙重口味的撞擊味蕾 細緻酥脆的口感
        </p>
        <p class="price">建議售價</p>
        <h4>NT$250</h4>

        <div class="quantity input-group">
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

  <div class="text-center">
    <img id="main" src="images/pic1.jpg" alt="" />
  </div>
  <div class="tumbnails">
    <div class="pic-wrap" @click="changePic()">
      <img
        src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NTM2Mzg1OTRfNjVjMWU0MWZiMzA2MGFjNTcwMTEuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=bfc5cc26529ec97f"
        alt=""
      />
    </div>
    <div class="pic-wrap" @click="changePic()">
      <img
        src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NDQyMzYwNTRfNWY4Zjk4YjU3NjM4ZjczNWU0ZmUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=172f380033a0d264"
        alt=""
      />
    </div>
    <div class="pic-wrap" @click="changePic()">
      <img
        src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NTM2Mzg1OTRfNjVjMWU0MWZiMzA2MGFjNTcwMTEuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=bfc5cc26529ec97f"
        alt=""
      />
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

.intro {
  color: gray;
}

.price {
  margin-bottom: 0px;
}
h4 {
  color: #734429;
}
.quantity {
  border: #734429 solid 1px;
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

/* test */
.text-center {
  text-align: center;
}
.tumbnails {
  display: flex;
  justify-content: center;
}
.pic-wrap {
  width: 100px;
  height: 100px;
  margin: 10px;
}
.pic-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    changePic() {
      let pics = document.querySelectorAll(".pic-wrap");
      for (let i = 0; i < pics.length; i++) {
        pics[i].addEventListener("click", function () {
          let img = this.childNodes[0].src;
          // console.log(img)
          main.src = img;
        });
      }
    },
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