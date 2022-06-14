<template>
  <div class="container my-5 w-25">
    <form>
      <div class="row">
        <div class="col">
          <h5 class="section-heading">會員登入</h5>
        </div>
      </div>

      <div class="form-group">
        <label><i class="bi bi-person"></i>帳號</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label><i class="bi bi-lock"></i>密碼</label>
        <input type="password" class="form-control form-control-lg" />
      </div>

      <div  v-if="errors.length" class="alert alert-danger" role="alert">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
      <div  v-if="noLoginMsg" class="alert alert-danger" role="alert">
        <p>{{noLoginMsg}}</p>
      </div>

      <button class="btn btn-lg" @click="postLogin">
        <router-link to="/admin"> 登入會員 </router-link>
      </button>

      <hr class="divider" />

      <div class="d-flex justify-content-between">
        <router-link to="/register">
          <span><i class="bi bi-person"></i>註冊會員</span>
        </router-link>
        <router-link to="/forgetpassword">
          <span><i class="bi bi-unlock"></i>忘記密碼</span>
        </router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
button {
  background-color: #734429 !important;
  margin-top: 20px;
}
a {
  color: white;
}

span {
  color: #734429 !important;
  padding-top: 30px;
}
</style>
 
<script>
  export default {
      inject: ['reload'],
      data() {
          return {
              email: '',
              password: '',
              errors: [],
              noLoginMsg: '',
          }
      },
      
      methods: {
          validEmail: function (email) {
            var emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRule.test(email);
          },

          postLogin() {
              const submitForm = {
                  email: this.email,
                  password: this.password
              }
              // console.log(submitForm)
              this.axios.post('/login', submitForm)
                  .then((res) => {
                    console.log(res.data)
                    let status = res.data.loginSuccess
                    switch (status){
                      case 0, 2 :
                        this.noLoginMsg = '找不到此 user 或密碼錯誤'
                        break;
                      case 1 :
                        this.reload()
                        this.$router.push('/')
                        break;
                    }
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                  })
                  }
          },
      }
</script> 