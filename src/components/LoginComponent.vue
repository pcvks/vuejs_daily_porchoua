<template>
    <div class="hold-transition login-page login-background">
      <div class="login-box">
        <div class="card">
          <div class="card-body">
            <p class="login-box-msg">
              <img src="../assets/images/logo.jpg" alt="Logo" style="border-radius: 80%; width:60%; height:60%;">
            </p>
            <h1 class="text-center text-primary"><b>ເຂົ້າສູ່ລະບົບ</b></h1>
            <form @submit.prevent="login">
              <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="phone" placeholder="ເບີໂທ" required>
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-phone"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="password" class="form-control" v-model="password" placeholder="ລະຫັດຜ່ານ" required>
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-key"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember">
                    <label for="remember">
                      ຍັງຈື່ລະຫັດບໍ?
                    </label>
                  </div>
                </div>
                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block"><i
                      class="fas fa-sign-out-alt">Login</i></button>
                </div>
              </div>
            </form>
            <p v-if="error" class="text-danger">{{ error }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  import axios from 'axios';
  import { authState } from '../auth';
  
  export default {
    name: "LoginComponent",
    data() {
      return {
        phone: '',
        password: '',
        error: null
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('https://nodejs-api-daily-porchoua.onrender.com/login', {
            phone: this.phone,
            password: this.password
          });
  
          if (response.data.error) {
            this.error = response.data.message;
          } else {
            this.error = null;
            // Update authentication state
            authState.isAuthenticated = true;
            authState.user = response.data.user;
            // Redirect to dashboard
            this.showWelcomeMessage();
            this.$router.push('/dashboard');
          }
        } catch (error) {
          this.showErrorMessage();
        }
      },
      async showWelcomeMessage() {
        Swal.fire({
          title: "ຍິນດີຕ້ອນຮັບ",
          text: "ເຂົ້າສູ່ລະບົບ daily",
          icon: "success",
          timer: 2000, // 2-3 seconds
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          }
        });
      },
      async showErrorMessage() {
        Swal.fire({
          title: "ເກີດຂໍ້ຜິດພາດ",
          text: "ກະລຸນາກວດສອບອີກຄັ້ງ!",
          icon: "warning",
          timer: 3000, // 2-3 seconds
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          }
        });
      },
    }
  };
  </script>