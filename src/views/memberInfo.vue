<template>
  <div class="contain-fluid">
    <div class="row">
      <div
        class="col-xl-6 col-lg-6 col-md-6 col-sm-8 shopping_info border mx-auto"
      >
        <div class="col-5 mx-auto">
          <h1>會員資訊</h1>
          <p class="customer_name">姓名：{{ displayName }}</p>
          <p class="customer_name">Email：{{ email }}</p>
          <p class="customer_name">
            近期訂單：
            <router-link to="/memberOrder"
              ><button
                type="button"
                class="btn danger btn-outline-danger btn-sm"
              >
                查詢訂單
              </button></router-link
            >
          </p>
          <hr />
          <div class="logout">
            <a href="/" class="btn btn-primary" @click="logout()">登出</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayName: "",
      email: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("getLoginStatus");
    console.log("loginStatus", this.$store.state.loginStatus);
  },
  mounted() {
    this.axios.get("/user-info").then((response) => {
      console.log(response);
      this.displayName = response.data.displayName;
      this.email = response.data.email;
    });
  },

  methods: {
    async logout() {
      await this.axios.post("/logout").then((response) => {
        console.log("logout", response);
        this.$store.dispatch("getLoginStatus");
      });
    },
  },
};
</script>

<style>
.border {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin-bottom: 24px;
  min-height: 180px;
  padding: 20px;
}
h1 {
  text-align: center;
  padding: 10px 5px 10px 0;
}

p {
  text-align: left;
  padding-left: 5px;
  margin: 30px 0 10px 0;
}

.logout {
  text-align: center;
}

.btn-primary:hover {
  background-color: #ad6f4b !important;
}

.btn-primary {
  background-color: #734429;
  border: #734429;
  margin: 10px 0 30px 0;
}

hr {
  margin: 30px 0 20px 0;
}

.logout {
  margin: auto;
}
.shopping_info {
  border-right: 1px solid #c9bfbf;
}
.danger {
  width: 100px;
}
.no_recent_order {
  color: #9a9ea2;
}
.account_edit {
  color: #9a9ea2;
}
.account_edit:hover {
  color: #9a9ea2;
}
.value {
  color: #ff674f;
}
</style>