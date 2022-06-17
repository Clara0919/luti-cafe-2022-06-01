<template>
  <div class="container ">
    <div class="row border col-xl-8 mx-auto">
        <div class="col-4 shopping_info">
            <div class="customer_name">姓名：{{displayName}}</div> 
            <div class="customer_name">Email：{{email}}</div> 
            <a href="/" class="btn btn-outline-secondary" @click="logout()">登出</a>
            <!-- <router-link to="/" class="btn btn-outline-secondary" @click.prevent="logout()">登出</router-link> -->
        </div>
        <div class="total col-4 ">
            <!-- <div class="total_spent item">
                <span class="text">總累計消費金額</span>
                <span class="value"><span class="money_tag" data-currency-from="TWD" data-amount="0.0">NT$0</span></span>
            </div>
            <div class="total_bonus_points item">
                <span class="text">可用紅利點數</span>
                <span class="value">100</span>
                <span class="text">點</span>
            </div>
            <div class="total_coupons item">
                <span class="text">專屬優惠券</span>
                <a href="/account/coupons" class="value" style="text-decoration: underline;">0</a>
                <span class="text">張</span>
            </div>
            <br> -->
                
            <router-link to="/memberOrder"><button type="button" class="btn danger btn-outline-danger ">查詢訂單</button></router-link>
        </div>
    </div>
    <!-- <div class="container">
        <div class="row  col-xl-8 mx-auto">
            <div id="recent_order_table">
                <h5>近期訂單</h5>
                <span class="no_recent_order">近期無新訂單</span>
            </div>
        </div>
    </div> -->
  </div>
  
</template>

<script>

export default {
    data(){
        return {
            displayName: '',
            email: ''
        }
    },
    async mounted() {
      await this.$store.dispatch('getLoginStatus')
      console.log('loginStatus', this.$store.state.loginStatus)
    },
    mounted(){
        this.axios.get("/user-info").then((response) => {
            console.log(response);
            this.displayName = response.data.displayName
            this.email = response.data.email

        })
    },

    methods: {
        async logout() {
            await this.axios.post('/logout').then((response) => {
                console.log("logout", response)
                this.$store.dispatch('getLoginStatus')
            })
        }
    },



}


</script>

<style>
.border {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin-bottom: 24px;
  min-height: 180px;
  padding: 20px;
}
.shopping_info {
  border-right: 1px solid #c9bfbf;
}
.danger{
    width: 170px; 
}
.no_recent_order{
    color: #9a9ea2;
}
.account_edit{
    color: #9a9ea2;
}
.account_edit:hover{
    color: #9a9ea2;
}
.value{
    color: #ff674f;
}
</style>