<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">精選好物</li>
    </ol>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="vertical-nav">
          <p>手工餅乾</p>
          <hr />
          <p>職人咖啡</p>
          <hr />
          <p>沖煮器具</p>
          <hr />
          <p>精選好物</p>
          <hr />
          <p>伴手禮盒</p>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="col-lg-3 col-md-4 col-lg-5">
          <div class="card" style="width: 18rem">
            <img
              src="https://cdn1.cybassets.com/media/W1siZiIsIjIwODgzL3Byb2R1Y3RzLzM2NTg1MzM1LzE2NDg3MDMwNzdfNTU4MGMyM2I2MTAzOGJlNjE2MDIuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=157cfcf178a6d556"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <p class="card-text">產品名稱</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
nav {
  padding: 10px;
}
.vertical-nav {
  border: 1px solid rgb(189, 188, 188);
  /* margin-left: 5px; */
}
.vertical-nav p {
  margin: 10px;
  text-align: center;
}
hr {
  margin: 0px;
}
.row {
  padding: 10px;
}
.card-text {
  text-align: center;
}
</style>