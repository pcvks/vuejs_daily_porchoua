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
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><router-link to="/dashboard">ໜ້າຫຼັກ</router-link></li>
                <li class="breadcrumb-item active">ຕາຕະລາງຮຽນ</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
  
      <!-- Main content -->
  
      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <!-- left column -->
  
            <!--/.col (left) -->
            <!-- right column -->
            <div class="col-md-12">
              <!-- /.card -->
                <h3 class="text-center text-bold text-primary">ຕາຕະລາງຮຽນ</h3>
                
              <div class="overflow-auto"><a
                  href="#"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal-insert_school_table"
                  ><i class="fas fa-plus mr-2"></i>ເພີ່ມຕາຕະລາງ</a
                >&nbsp;
                <a href="tel:+8562076589225" class="btn btn-success"><i class="fas fa-phone"></i>&nbsp;ຕິດຕໍ່</a>&nbsp;
                <a href="https://wa.me/+8562076589225" class="btn btn-success"><i class="fab fa-whatsapp"></i>&nbsp;Whatsapp</a>&nbsp;
                <a href="https://www.facebook.com/profile.php?id=100079975531285" class="btn btn-primary"><i class="fab fa-facebook"></i>&nbsp;Facebook</a>&nbsp;
                <a href="mailto:kangserpobtsuasvaaj@gmail.com" class="btn btn-primary"><i class="fab fa-envelope"></i>&nbsp;Mail</a>&nbsp;
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>ລະຫັດ</th>
                      <th>ວັນ</th>
                      <th>ຊົ່ວໂມງ 1</th>
                      <th>ຊົ່ວໂມງ 2</th>
                      <th>ຊົ່ວໂມງ 3</th>
                      <th>ຊົ່ວໂມງ 4</th>
                      <th>ເວລາວັນທີ</th>
                      <th>ປຸ່ມຄຳສັ່ງ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="school_table in school_tables" :key="school_table.id">
                      <td>{{ school_table.id }}</td>
                      <td>{{ school_table.day }}</td>
                      <td>{{ school_table.first_time }}</td>
                      <td>{{ school_table.second_time }}</td>
                      <td>{{ school_table.third_time }}</td>
                      <td>{{ school_table.fourth_time }}</td>
                      <td><b class="text-success">{{ school_table.timestamp }}</b></td>
                      <td>
                          
                        <button
                          @click="confirmDeleteSchool_Table_a(school_table.id)"
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
      <div class="modal fade" id="modal-insert_school_table">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-primary">
              <h4 class="modal-title">ເພີ່ມຕາຕະລາງ</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form enctype="multipart/form-data" @submit.prevent="createSchool_Table">
              <div class="modal-body">
                <div class="row">
                  <div class="form-group ml-4">
                    <label for=""
                      >ວັນ <span class="text-danger">*</span></label
                    >
                    <select name="" v-model="day_inp" id="" class="form-control">
                      <option value="">-- ກະລຸນາເລືອກ --</option>
                      <option value="ຈັນ">ຈັນ</option>
                      <option value="ອັງຄານ">ອັງຄານ</option>
                      <option value="ພຸດ">ພຸດ</option>
                      <option value="ພະຫັດ">ພະຫັດ</option>
                      <option value="ສຸກ">ສຸກ</option>
                    </select>
                  </div>
                  <div class="form-group ml-4">
                    <label for=""
                      >ຊົ່ວໂມງ 1 <span class="text-danger">*</span></label
                    >
                    <input type="text" v-model="first_time_inp" class="form-control" required placeholder="ຊົ່ວໂມງ 1">
                  </div>
                  <div class="form-group ml-4">
                    <label for=""
                      >ຊົ່ວໂມງ 2 <span class="text-danger">*</span></label
                    >
                    <input type="text" v-model="second_time_inp" class="form-control" required placeholder="ຊົ່ວໂມງ 2">
                  </div>
                  <div class="form-group ml-4">
                    <label for=""
                      >ຊົ່ວໂມງ 3 <span class="text-danger">*</span></label
                    >
                    <input type="text" v-model="third_time_inp" class="form-control" required placeholder="ຊົ່ວໂມງ 3">
                  </div>
                  <div class="form-group ml-4">
                    <label for=""
                      >ຊົ່ວໂມງ 4 <span class="text-danger">*</span></label
                    >
                    <input type="text" v-model="fourth_time_inp" class="form-control" required placeholder="ຊົ່ວໂມງ 4">
                  </div>
                  <div class="form-group ml-4">
                    <label for=""
                      >ຊົ່ວໂມງ 4 <span class="text-danger">*</span></label
                    >
                    <input type="date" class="form-control" required placeholder="ddmmyy">
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-danger" data-dismiss="modal">
                  ຍົກເລີກ
                </button>
                <button type="submit" class="btn btn-primary">ບັນທຶກ</button>
              </div>
            </form>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
  
      
    </div>
  </template>
  <script>
  import Swal from "sweetalert2";
  import axios from "axios";
  
  export default {
    name: "SchoolTableComponent",
    data() {
      return {
        day_inp: "",
        first_time_inp: "",
        second_time_inp: "",
        third_time_inp: "",
        School_Table_ID: null,
        school_tables: [],
      };
    },
    created() {
      this.fetchSchool_Table();
    },
    methods: {
      // for Income
      async fetchSchool_Table() {
        try {
          const response = await axios.get("https://nodejs-api-daily-porchoua.onrender.com/api/school_table");
          if (Array.isArray(response.data)) {
            this.school_tables = response.data;
          } else {
            console.error("Invalid response format:", response.data);
            this.showErrorMessage();
          }
        } catch (error) {
          console.error("Error fetching employees:", error);
          this.showErrorMessage();
        }
      },
  
  
      async createSchool_Table() {
        try {
          const response = await axios.post(
            "https://nodejs-api-daily-porchoua.onrender.com/api/create-school_table",
            {
              day: this.day_inp,
              first_time: this.first_time_inp,
              second_time: this.second_time_inp,
              third_time: this.third_time_inp,
              fourth_time: this.fourth_time_inp,
              timestamp: this.timestamp,
            }
          );
          console.log(response.data);
          // alert('Employee added successfully');
          this.showSuccessMessage();
          // Optionally, you can fetch the updated list of sale employees after adding a new employee
          this.fetchSchool_Table();
          this.resetSchool_Table_Form();
        } catch (error) {
          console.error("Error creating employee:", error);
          // alert('Failed to create employee');
          this.showErrorMessage();
        }
      },
  
      
  
      // create Employee Machinist
  
      async resetSchool_Table_Form() {
        // Reset all form fields to their initial state
        this.day_inp = "";
        this.first_time_inp = "";
        this.second_time_inp = "";
        this.third_time_inp = "";
        this.fourth_time_inp = "";
      },
      // function delete employee sale
      async confirmDeleteSchool_Table_a(School_Table_ID) {
        Swal.fire({
          title: "ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?",
          text: "ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່: " + School_Table_ID,
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "ຍົກເລີກ",
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "ຢືນຢັນ!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.deleteSchool_Table(School_Table_ID);
          }
        });
      },
  
     
      async deleteSchool_Table(School_Table_ID) {
        try {
          const response = await axios.delete(
            `https://nodejs-api-daily-porchoua.onrender.com/api/delete-school_table/${School_Table_ID}`
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
            this.fetchSchool_Table(); // Fetch updated employee list
            this.resetSchool_Table_Form(); // Reset the employee form
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
  
      // function delete employee machinist
  
      async showSuccessMessage() {
        Swal.fire({
          title: "ບັນທຶກສຳເລັດ",
          text: "ຂໍ້ມູນໄດ້ຖືກບັນທຶກສຳເລັດແລ້ວ",
          icon: "success",
          timer: 2000, // 2-3 seconds
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
          timer: 3000, // 2-3 seconds
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        });
      },
      
      
      // Other methods...
    },
  };
  </script>
  