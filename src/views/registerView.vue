<template>
  <div class="container my-5 w-25">
    <form>
      <div class="row">
        <div class="col">
          <h5 class="section-heading">會員註冊</h5>
        </div>
      </div>

      <div class="form-group">
        <label>名字</label>
        <input type="text" class="form-control form-control-lg"  v-model="displayName"/>
      </div>

      <div class="form-group">
        <label>信箱</label>
        <input type="email" class="form-control form-control-lg" v-model="email"/>
      </div>

      <div class="form-group">
        <label>密碼</label>
        <input type="password" class="form-control form-control-lg"  v-model="password"/>
      </div>

      <div  v-if="errors.length" class="alert alert-danger" role="alert">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
      <div  v-if="userExistMsg" class="alert alert-danger" role="alert">
        <p>{{userExistMsg}}</p>
      </div>
      <div  v-if="userCreateSuccessMsg" class="alert alert-success" role="alert">
        <p>{{userCreateSuccessMsg}}</p>
      </div>

      <button @click="postSignup" class="btn btn-dark btn-lg btn-block">註冊</button>

      <p class="forgot-password text-right">
        已經註冊過了?
        <router-link to="/login"><span>登入</span></router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            displayName: '',
            email: '',
            password: '',
            errors: [],
            userExistMsg: '',
            userCreateSuccessMsg: ''
        }
    },

    methods: {
        validEmail: function (email) {
          var emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailRule.test(email);
        },
        postSignup() {
            // console.log(this.axios)
            const submitForm = {
                displayName: this.displayName,
                email: this.email,
                password: this.password
            }
            this.axios.post('/signup', submitForm)
            .then((res) => {
              console.log(res.data)
              let status = res.data.hasUser
              switch (status){
                case 1 :
                  this.userCreateSuccessMsg = ''
                  this.userExistMsg = '此帳號已存在！請登入或使用其他 Email'
                  break;
                case 0 :
                  this.userExistMsg = ''
                  this.userCreateSuccessMsg = '註冊成功！'
                  let navigate = this.$router
                  setTimeout(function(){
                      navigate.push('/login');
                  },2000)
                  break;
              }
            })
            .catch((err)=>{
              console.log(err);
            })
        },
    }
}

</script>

<style scoped>
button {
  background-color: #734429;
  margin-top: 20px;
}
a {
  color: white;
}
span {
  color: #734429;
}
</style>