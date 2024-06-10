<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
     
  
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <router-link to="/dashboard" class="d-block text-white">ປໍ້ຈົວວ່າງ ກ່າງເສີ</router-link>
          </div>
        </div>
  
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
            <li class="nav-item menu-open">
              <router-link to="/dashboard" class="nav-link text-bold">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>ໜ້າຫຼັກ</p>
              </router-link>
            </li>
            <li class="nav-item menu-open">
              <router-link to="/admin" class="nav-link text-bold">
                <i class="nav-icon fas fa-user"></i>
                <p>admin</p>
              </router-link>
            </li>
            <li class="nav-item menu-open">
              <router-link to="/daily" class="nav-link text-bold">
                <i class="nav-icon fas fa-calendar-day"></i>
                <p>ບັນທຶກປະຈຳວັນ</p>
              </router-link>
            </li>
            <li class="nav-item menu-open">
              <router-link to="/note" class="nav-link text-bold">
                <i class="nav-icon fas fa-book-open"></i>
                <p>ບັນທຶກທີ່ສຳຄັນ</p>
              </router-link>
            </li>
            <li class="nav-item menu-open">
              <router-link to="/upload_image" class="nav-link text-bold">
                <i class="nav-icon fas fa-image"></i>
                <p>ບັນທຶກຮູບພາບ</p>
              </router-link>
            </li>
            <li class="nav-item menu-open">
              <router-link to="/income_expenditure" class="nav-link text-bold">
                <i class="nav-icon fas fa-">₭</i>
                <p>ລາຍຮັບ / ລາຍຈ່າຍ</p>
              </router-link>
            </li>
            <li class="nav-item menu-open">
              <router-link to="/school_table" class="nav-link text-bold">
                <i class="nav-icon fas fa-table"></i>
                <p>ຕາຕະລາງຮຽນ</p>
              </router-link>
            </li>
            <li class="nav-item menu-open">
              <router-link to="/plan" class="nav-link text-bold">
                <i class="nav-icon fas fa-book"></i>
                <p>ແຜນການປີນີ້</p>
              </router-link>
            </li>
            <li class="nav-item menu-open">
            <button @click="logout" class="nav-link li-button text-bold">
              <i class="nav-icon fas fa-sign-out-alt"></i>
              <p>Logout</p></button>
          </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </template>
  
  <script>
  import { authState } from './auth';
  export default {
    name: 'SidebarComponent',
    methods: {
    logout() {
      authState.isAuthenticated = false;
      authState.user = null;
      // Redirect to login page if necessary
      this.$router.push('/');
      window.location.reload();
    }
  }
  }
  
  </script>
  <style>
  .li-button{
    text-align: start;
  }
  </style>
  