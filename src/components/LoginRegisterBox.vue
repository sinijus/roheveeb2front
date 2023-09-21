<template>
  <div @keydown.enter="login()">
    <ModalRegister ref="modalRegisterRef"/>
    <div class="row justify-content-evenly">
      <div class="col col-4">
        <label class="custom-label" for="e-mail">Sisselogimine</label>
        <div class="input-group mb-2">
          <div class="input-group">
            <input v-model="email" type="text" class="form-control" placeholder="e-mail">
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div class="col col-4">
        <div class="input-group mb-2">
          <div class="input-group">
            <input v-model="password" type="password" class="form-control" placeholder="parool">
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div class="col col-4">
        <div class="input-group mb-2">
          <div class="input-group">
            <button type="button" class="btn btn-link" @click="openModalRegister()">Registreeri</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div class="col col-4">
        <div class="input-group mb-2">
          <div class="input-group">
            <button @click="login" type="button" class="btn btn-success">Logi sisse</button>
          </div>
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
import ModalRegister from "@/components/modal/ModalRegister.vue";
import MeasureUnitsDropdown from "@/components/MeasureUnitsDropdown.vue";
import {COMPANY} from "@/assets/script/role";

export default {
  name: 'LoginRegisterBox',
  components: {MeasureUnitsDropdown, ModalRegister},
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
      },
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
    openModalRegister() {
      this.$refs.modalRegisterRef.$refs.modalRef.openModal()
    },

    mandatoryFieldsAreFilled() {
      return this.email.length > 0 && this.password.length > 0;
    },

    sendLoginRequest() {
      this.$http.get('/login', {
            params: {
              email: this.email,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        sessionStorage.setItem('userId', this.loginResponse.userId)
        sessionStorage.setItem('roleName', this.loginResponse.roleName)
        sessionStorage.setItem('companyId', '0')
        this.$emit('event-update-nav-menu');
        router.push({name: 'shopRoute'})
      }).catch(error => {
        this.errorResponse = error.response.data
        alert(this.errorResponse.message)
        if (this.errorResponse.errorCode !== INCORRECT_CREDENTIALS) {
          router.push({name: 'errorRoute'})
        }
      })
    },


  }
}
</script>
