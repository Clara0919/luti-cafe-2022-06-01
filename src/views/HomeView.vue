<template>
  <!-- banner -->

  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1645073996_c97c3701_main_slider_item_2_lg.jpg?1645073996"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1645074136_b9a4ab3a_main_slider_item_5_lg.jpg?1645074136"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1648744592_2acc094b_main_slider_item_1_lg.jpg?1648744592"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1648744592_2acc094b_main_slider_item_1_lg.jpg?1648744592"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- about luti -->

  <div class="container-fluid aboutus">
    <h4>關於璐緹</h4>
    <hr />
    <div class="row d-flex justify-content-center">
      <div class="col-lg-9 col-md-10 col-sm-10 px-4">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1642522122_8d739cdc_index_2_blocks_image_1.jpg?1642522123"
          alt=""
        />
      </div>
      <div class="col-lg-3 col-md-10 col-sm-10 px-4">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1642522128_39246ca2_index_2_blocks_image_2.jpg?1642522128"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- popular products -->
  <div class="container-fluid px-4">
    <h4>熱銷商品</h4>
    <hr />
    <div class="row g-3">
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <!-- 再開一個card把bootstrap的card包起來，因為bootstrap的card有一些特殊設定，所以gx會無法work -->
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1Mjc3LzE2NDI1NzgzODJfZDE3YWFlNDYxYjJmMDRkOWZlMjUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=f74b188a322c62b7"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">璐緹幸福好禮</h5>
            <span class="card-text original-price"> NT$760</span>
            <span class="card-text"> NT$670</span>
            <br />
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <!-- style="width: 18rem;" -->
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MjgzLzE2NDI1Nzg2MzJfNjQwYmY4ZjJlODZiZWZkOWYyZjUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=b7728dc021c48d1e"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">璐緹金喜好禮</h5>
            <span class="card-text original-price"> NT$860</span>
            <span class="card-text"> NT$790</span><br />
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <!-- style="width: 18rem;" -->
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MzAyLzE2NDI1Nzg4NzVfYjExNTlhM2YwMzg2NzlhMTM0NjQuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=5d72e0eee2283340"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">璐緹經典獨家好禮</h5>
            <span class="card-text original-price"> NT$950</span>
            <span class="card-text"> NT$1090</span><br />
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <!-- style="width: 18rem;" -->
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDIwOTgzLzE2NTE0NzYyNDVfYjUyZjE0MzcyNDA2ZGQ5MmJjZGIuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=b1fd53574d2bb623"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">綜合曲奇餅乾罐</h5>
            <span class="card-text"> NT$260</span><br />
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <!-- style="width: 18rem;" -->
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDIxMTM2LzE2NDI0NzUyOThfNzI5N2IyZTQwMThkMjNjMTFlYjYuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=c83dd0eff64386e2"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">璐緹嚴選掛耳咖啡</h5>
            <span class="card-text original-price"> NT$175</span>
            <span class="card-text"> NT$160</span><br />
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <!-- style="width: 18rem;" -->
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MDg5LzE2NDI2MDY4NjNfNGEwNmY0NTQ5ODM5YWU2ZDBiMTAuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=5a1a12c9d1643bc8"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">黑芝麻花生脆餅</h5>
            <span class="card-text"> NT$250</span><br />
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <!-- style="width: 18rem;" -->
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDIwOTcwLzE2NDI0NzMyMDBfNGZlZjQwMTdmYTY3Y2Y3ZGQ2ZGUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=80838a03de09c891"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">燕麥堅果餅</h5>
            <span class="card-text"> NT$250</span><br />
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <!-- style="width: 18rem;" -->
          <img
            src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDIyMjYxLzE2NDI0OTEwNjBfYzQzMWExYTk2NzI1MDQ5ZTBlZjMuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=538213d5c9c659f4"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">璐緹嚴選綜合豆</h5>
            <span class="card-text original-price"> NT$450</span>
            <span class="card-text"> NT$350</span><br />
            <a href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid px-4">
    <div class="row gx-4">
      <!-- member-gift -->
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="member-gift">
          <h4 class="dontselect">會員有禮</h4>
          <div class="box">
            <img
              src="https://cdn1.cybassets.com/s/files/20883/theme/75080/assets/img/1645074293_5689a957_index_2_blogs_news_image.jpg?1645074293"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- news -->
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="news">
          <h4 class="dontselect">最新消息</h4>
          <div class="d-flex flex-column news-box">
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://cdn1.cybassets.com/s/files/20883/ckeditor/pictures/content_2f24531b-14ed-42c3-9c3e-cdf3aadf2f60.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">餅乾任選五罐即贈精美小禮物</h5>
                    <p class="card-text">
                      即日起～手工餅乾任選五罐購買 就會隨機贈送一份精美小禮物喔⋯
                    </p>
                    <p class="card-text">
                      <small class="text-muted">繼續閱讀...</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://cdn1.cybassets.com/s/files/20883/ckeditor/pictures/content_4156d353-de22-494f-9c19-dd92686ce93d.jpeg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">春假限定～滿399免運優惠延長！</h5>
                    <p class="card-text">
                      春假限定～ 優惠一：滿$399免運 優惠期間延長到五月⋯
                    </p>
                    <p class="card-text">
                      <small class="text-muted">繼續閱讀...</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://cdn1.cybassets.com/s/files/20883/ckeditor/pictures/content_93106525-66a2-4df4-bbea-90b15cc4b576.jpeg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">38女王節 寵粉回饋</h5>
                    <p class="card-text">紅豆麻吉燒 紅豆麻吉燒 &l⋯</p>
                    <p class="card-text">
                      <small class="text-muted">繼續閱讀...</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/280859264_1673086199711313_1081463978888406449_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9BliQlAr_ZYAX-jovSR&tn=E9KWF5PsMDIh9MHx&_nc_ht=scontent.ftpe7-4.fna&oh=00_AT_Q2jpmieqlSDtsMVFZpdgb0M7YZj8R55Im__S03ICphQ&oe=628D0A86"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">三月活動：消費滿額送好禮！</h5>
                    <p class="card-text">
                      歡慶璐緹新官網＆購物商城上線 新介面為你服務，消費滿額送好⋯
                    </p>
                    <p class="card-text">
                      <small class="text-muted">繼續閱讀...</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row category">
      <div class="col-lg-2 col-md-4 col-sm-6 p-0">
        <img
          src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MjgzLzE2NDI1Nzg2MzJfNjQwYmY4ZjJlODZiZWZkOWYyZjUuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=b7728dc021c48d1e"
          alt=""
        />
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 p-0">
        <img
          src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDIwOTgzLzE2NTE0NzYyNDVfYjUyZjE0MzcyNDA2ZGQ5MmJjZGIuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=b1fd53574d2bb623"
          alt=""
        />
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 p-0">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/ckeditor/pictures/content_c1f8752e-d4fc-4f74-956c-16339f9e037d.jpg"
          alt=""
        />
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 p-0">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/ckeditor/pictures/content_a2752b9e-9c1a-4121-b73c-2d7e0dc56987.jpg"
          alt=""
        />
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 p-0">
        <img
          src="https://cdn1.cybassets.com/s/files/20883/ckeditor/pictures/content_86ae3669-3597-401c-802e-6f42d31e1652.jpg"
          alt=""
        />
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 p-0">
        <img
          src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2MDI1MzAyLzE2NDI1Nzg4NzVfYjExNTlhM2YwMzg2NzlhMTM0NjQuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=5d72e0eee2283340"
          alt=""
        />
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

.aboutus img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

h4:not(.dontselect) {
  text-align: center;
  padding-top: 50px;
  color: rgb(59, 59, 59);
}

.dontselect {
  text-align: center;
  color: rgb(59, 59, 59);
}

.original-price {
  text-decoration: line-through;
}

.member-gift {
  padding: 50px 0;
}

.member-gift .box {
  border: 1.5px solid rgb(203, 201, 201);
  border-radius: 3px;
}

.member-gift img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.news {
  padding: 50px 0;
}

.news-box {
  border: 1.5px solid rgb(203, 201, 201);
  border-radius: 3px;
  overflow: scroll;
  max-height: 604px;
}

.news img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.category img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.test {
  background-color: red;
  width: 200px;
  height: 200px;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
