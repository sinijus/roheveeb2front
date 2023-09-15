<template>
  <div class="col col-3">
    <div class="row justify-content-right" @keydown.enter="login">
      <div>
        <input v-model="email" type="text" class="form-control" placeholder="e-mail" aria-describedby="addon-wrapping">
        <input v-model="password" type="text" class="form-control" placeholder="parool"
               aria-describedby="addon-wrapping">
      </div>
      <div>
        <div>
          <button type="button" class="btn btn-link" >Registreeri</button>
        </div>
        <div>
          <button @click="login" type="button" class="btn btn-success">Logi sisse</button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {HOME_VIEW_INTRODUCTION} from "@/assets/text/text.storage";
import router from "@/router";
import {INCORRECT_CREDENTIALS} from "@/assets/script/error.code";
import {FILL_MANDATORY_FIELDS} from "@/assets/script/error.message";

export default {
  name: 'LoginRegisterBox',
  data() {
    return {
      introductionText: HOME_VIEW_INTRODUCTION,
      email: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    login() {
      if (this.mandatoryFieldsAreFilled()) {
        this.sendLoginRequest()
      } else {
        alert(FILL_MANDATORY_FIELDS)
      }
    },

    mandatoryFieldsAreFilled() {
      return this.email.length > 0 && this.password.length > 0;
    },

    sendLoginRequest() {
      this.$http.get( '/login',{
            params: {
              email: this.email,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        sessionStorage.setItem('userId', this.loginResponse.userId)
        sessionStorage.setItem('roleName', this.loginResponse.roleName)
        router.push({name: 'shopRoute'})
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        this.errorResponse = error.response.data
        alert(this.errorResponse.message)
        if (this.errorResponse.errorCode !== INCORRECT_CREDENTIALS) {
          router.push({name: 'errorRoute'})
        }
      })
    }
  }
}
</script>