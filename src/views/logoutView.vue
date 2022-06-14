<template>
  <div class="container my-5 w-25">
    <h3>您好，請問要登出嗎?</h3>
    <p>{{ user.displayName }}</p>
    <p>{{ user.email }}</p>

    <button
      type="submit"
      class="btn btn-dark btn-lg btn-block"
      @click="logOut"
    >
      登出
    </button>
  </div>
</template>

 
  <script>
export default {
  methods: {
    logout: function(){
      this.axios.post('/logout')
          .then((response) => {
            console.log(response.data)
            // this.$router.push('/')
            // this.$store.commit({
            //   type: 'updateLoginStatus',
            //   loginStatus: 0
            // })
          })
          .catch((err)=>{
            console.log(err);
          })
    },
  },

};
</script> 
