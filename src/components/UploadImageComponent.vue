<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-primary text-bold">
                <marquee>ຍິນດີຕ້ອນຮັບລະບົບ daily</marquee>
              </h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- /.content-header -->
  
      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <!-- left column -->
            <div class="col-md-6">
              <h3 class="text-center text-bold text-primary">ຟອມການບັນທຶກຮູບພາບ</h3>
              <!-- general form elements -->
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">ບັນທຶກຮູບພາບ</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form @submit.prevent="uploadFile" ref="uploadForm">
                  <div class="card-body">
                    <div class="row">
                      <div class="form-group ml-5">
                        <label for="imageUpload">ຮູບພາບ <span class="text-danger">*</span></label>
                        <input
                          type="file"
                          class="form-control"
                          required
                          @change="onFileChange"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- /.card-body -->
  
                  <div class="card-footer">
                    <button type="submit" class="btn btn-primary">ອັບໂຫຼດ</button>
                  </div>
                </form>
              </div>
              <!-- /.card -->
            </div>
            <!--/.col (left) -->
  
            <!-- right column -->
            <div class="col-md-6">
              <h3 class="text-center text-bold text-primary">ຮູບພາບທັງໝົດ</h3>
              <div class="overflow-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>ລະຫັດ</th>
                      <th>ຮູບພາບ</th>
                      <th>ເວລາວັນທີ</th>
                      <th>ປຸ່ມຄຳສັ່ງ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="image in images" :key="image.id">
                      <td>{{ image.id }}</td>
                      <td><img :src="`https://api-note-dailes.onrender.com/uploads/${image.filename}`" alt="Uploaded Image" width="100"></td>
                      <td>{{ image.timestamp }}</td>
                      <td>
                          
                          <button
                            @click="confirmDeleteImage(image.id)"
                            class="btn btn-danger"
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!--/.col (right) -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
  </template>
  
  <script>
  import Swal from "sweetalert2";
  import axios from "axios";
  
  export default {
    name: "UploadImageComponent",
    data() {
      return {
        selectedFile: null,
        images: [],
        Image_ID: null,
      };
    },
    methods: {
      onFileChange(event) {
        this.selectedFile = event.target.files[0];
      },
      async uploadFile(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData();
        formData.append("image", this.selectedFile);
  
        try {
          const response = await axios.post("https://api-note-dailes.onrender.com/api/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(response.data);
          this.showSuccessMessage();
          this.resetForm(); // Reset the form after a successful upload
          this.fetchImages(); // Fetch the updated list of images
        } catch (error) {
          console.error("Error uploading file", error);
          this.showErrorMessage();
        }
      },
      async showSuccessMessage() {
        Swal.fire({
          title: "ບັນທຶກສຳເລັດ",
          text: "ຂໍ້ມູນໄດ້ຖືກບັນທຶກສຳເລັດແລ້ວ",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        });
      },
      async showErrorMessage() {
        Swal.fire({
          title: "ເກີດຂໍ້ຜິດພາດ",
          text: "ກະລຸນາກວດສອບອີກຄັ້ງ!",
          icon: "warning",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        });
      },
      async resetForm() {
        this.selectedFile = null;
        this.$refs.uploadForm.reset();
      },
      async fetchImages() {
        try {
          const response = await axios.get("https://api-note-dailes.onrender.com/api/images");
          this.images = response.data;
          this.timestamp = response.data;
        } catch (error) {
          console.error("Error fetching images", error);
        }
      },
      async confirmDeleteImage(Image_ID) {
        Swal.fire({
          title: "ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?",
          text: "ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່: " + Image_ID,
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "ຍົກເລີກ",
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "ຢືນຢັນ!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.deleteImage(Image_ID);
          }
        });
      },
  
     
      async deleteImage(Image_ID) {
        try {
          const response = await axios.delete(
            `https://api-note-dailes.onrender.com/api/delete-image/${Image_ID}`
          );
          console.log(response.data); // Log the response from the server
          Swal.fire({
            title: "ລົບລ້າງ!",
            text: "ຂໍ້ມູນໄດ້ຖືກລຶບສຳເລັດແລ້ວ",
            icon: "success",
            timer: 2000, // 2-3 seconds
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          }).then(() => {
            this.fetchImages(); // Fetch updated employee list
            this.resetForm(); // Reset the employee form
          });
          // Optionally, you can perform additional actions after successful deletion
        } catch (error) {
          console.error("Error deleting employee:", error);
          Swal.fire({
            title: "ລົບລ້າງ!",
            text: "ຂໍ້ມູນໄດ້ຖືກລຶບສຳເລັດແລ້ວ",
            icon: "error",
            timer: 2000, // 2-3 seconds
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          // Show error message
        }
      },
    },
    mounted() {
      this.fetchImages(); // Fetch the images when the component is mounted
    }
  };
  </script>
  
  <style scoped>
  /* Add any styles you need */
  </style>
  