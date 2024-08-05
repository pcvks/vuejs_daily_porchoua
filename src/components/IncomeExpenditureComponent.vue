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
              <li class="breadcrumb-item"><router-link to="./dashboard">ໜ້າຫຼັກ</router-link></li>
              <li class="breadcrumb-item active">ລາຍຮັບ/ລາຍຈ່າຍ</li>
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
          <div class="col-md-6">
            <!-- /.card -->
              <h3 class="text-center text-bold text-success">ລາຍຮັບທັງໝົດ</h3>
              <div class="justify-content-between d-flex">
                <a
                href="#"
                class="btn btn-success"
                data-toggle="modal"
                data-target="#modal-insertincome"
                ><i class="fas fa-plus mr-2"></i>ເພີ່ມລາຍຮັບ</a
              >
              <router-link
                to="/print_income"
                class="btn btn-success"
                data-toggle="modal"
                data-target="#modal-insertincome"
                ><i class="fas fa-print mr-2"></i>Print PDF</router-link
              >
              </div>
            <div class="overflow-auto">
              
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ລະຫັດ</th>
                    <th>ຈຳນວນເງິນ</th>
                    <th>ເຫດຜົນ</th>
                    <th>ສະຖານະ</th>
                    <th>ເວລາວັນທີ</th>
                    <th>ປຸ່ມຄຳສັ່ງ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="income_s in incomes_s" :key="income_s.id">
                    <td>{{ income_s.id }}</td>
                    <td><b class="text-success">{{ income_s.income }}</b></td>
                    <td><b>{{ income_s.income_reason }}</b></td>
                    <td><b class="text-success">{{ income_s.m_status }}</b></td>
                    <td><b class="text-success">{{ income_s.timestamp }}</b></td>
                    <td>
                      <button
                        href="#"
                        class="btn btn-warning"
                        data-toggle="modal"
                        @click="fetchIncomeDetails(income_s.id)"
                        data-target="#modal-lg"
                      >
                        <i class="fas fa-edit"></i></button
                      >&nbsp;<button
                        @click="confirmDeleteIncome_a(income_s.id)"
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
          <div class="col-md-6">
            <!-- /.card -->
              <h3 class="text-center text-bold text-danger">ລາຍຈ່າຍທັງໝົດ</h3>
              <div class="justify-content-between d-flex">
                <a
                href="#"
                class="btn btn-danger"
                data-toggle="modal"
                data-target="#modal-insertexpenditure"
                ><i class="fas fa-plus mr-2"></i>ເພີ່ມລາຍຈ່າຍ</a
              >
              <router-link
                to="/print_expenditure"
                class="btn btn-danger"
                data-toggle="modal"
                data-target="#modal-insertexpenditure"
                ><i class="fas fa-print mr-2"></i>Print PDF</router-link
              >
              </div>
            <div class="overflow-auto">
              
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ລະຫັດ</th>
                    <th>ຈຳນວນເງິນ</th>
                    <th>ເຫດຜົນ</th>
                    <th>ສະຖານະ</th>
                    <th>ເວລາວັນທີ</th>
                    <th>ປຸ່ມຄຳສັ່ງ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="expenditure_s in expenditures_s"
                    :key="expenditure_s.id"
                  >
                    <td>{{ expenditure_s.id }}</td>
                    <td><b class="text-danger">{{ expenditure_s.expenditure }}</b></td>
                    <td><b>{{ expenditure_s.expenditure_reason }}</b></td>
                    <td><b class="text-danger">{{ expenditure_s.m_status }}</b></td>
                    <td><b class="text-success">{{ expenditure_s.timestamp }}</b></td>
                    <td>
                      <button
                        href="#"
                        class="btn btn-warning"
                        data-toggle="modal"
                        @click="fetchExpenditureDetails(expenditure_s.id)"
                        data-target="#modal-editexpenditure"
                      >
                        <i class="fas fa-edit"></i></button
                      >&nbsp;<button
                        @click="confirmDeleteExpenditure_a(expenditure_s.id)"
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

    <div class="modal fade" id="modal-lg">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-info">
            <h4 class="modal-title">ແກ້ໄຂຂໍ້ມູນລາຍຮັບ</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form enctype="multipart/form-data" @submit.prevent="updateIncome">
            <div class="modal-body">
              <div class="row">
                <div class="form-group ml-4">
                  <label for=""
                    >ຈຳນວນເງິນ <span class="text-danger">*</span></label
                  >
                  <input
                    type="number"
                    class="form-control"
                    required
                    v-model="income_upd"
                    placeholder="ກະລຸນາປ້ອນຈຳນວນເງິນ"
                  />
                </div>

                <div class="form-group ml-4">
                  <label for=""
                    >ເຫດຜົນ <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="income_reason_upd"
                    placeholder="ໄດ້ຮັບມາຈາກ"
                  />
                </div>
                <div class="form-group ml-4">
                  <label for=""
                    >ສະຖານະ <span class="text-danger">*</span></label
                  >
                  <select
                    name=""
                    id=""
                    class="form-control"
                    v-model="m_status_upd"
                    required
                  >
                    <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                    <option value="ເງິນໃນບັນຊີ">-- ເງິນໃນບັນຊີ --</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                ຍົກເລີກ
              </button>
              <button type="submit" class="btn btn-info">ອັບເດດ</button>
            </div>
          </form>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

    <div class="modal fade" id="modal-editexpenditure">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-info">
            <h4 class="modal-title">ແກ້ໄຂຂໍ້ມູນ ລາຍຈ່າຍ</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form enctype="multipart/form-data" @submit.prevent="updateExpenditure">
            <div class="modal-body">
              <div class="row">
                <div class="form-group ml-4">
                  <label for=""
                    >ຈຳນວນເງິນ <span class="text-danger">*</span></label
                  >
                  <input
                    type="number"
                    class="form-control"
                    required
                    v-model="expenditure_upd"
                    placeholder="ກະລຸນາປ້ອນຈຳນວນເງິນ"
                  />
                </div>

                <div class="form-group ml-4">
                  <label for=""
                    >ເຫດຜົນ <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="expenditure_reason_upd"
                    placeholder="ເຫດຜົນທີ່ໃຊ້ເງິນ"
                  />
                </div>
                <div class="form-group ml-4">
                  <label for=""
                    >ສະຖານະ <span class="text-danger">*</span></label
                  >
                  <select
                    name=""
                    id=""
                    class="form-control"
                    v-model="m_status_upd"
                    required
                  >
                    <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                    <option value="ເງິນໃນບັນຊີ">-- ເງິນໃນບັນຊີ --</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                ຍົກເລີກ
              </button>
              <button type="submit" class="btn btn-info">ອັບເດດ</button>
            </div>
          </form>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

    <div class="modal fade" id="modal-insertincome">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-success">
            <h4 class="modal-title">ເພີ່ມລາຍຮັບ</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form enctype="multipart/form-data" @submit.prevent="createIncome">
            <div class="modal-body">
              <div class="row">
                <div class="form-group ml-4">
                  <label for=""
                    >ຈຳນວນເງິນ <span class="text-danger">*</span></label
                  >
                  <input
                    type="number"
                    class="form-control"
                    required
                    v-model="income_inp"
                    placeholder="ກະລຸນາປ້ອນຈຳນວນເງິນ"
                  />
                </div>

                <div class="form-group ml-4">
                  <label for=""
                    >ເຫດຜົນ <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="income_reason_inp"
                    placeholder="ໄດ້ຮັບມາຈາກ"
                  />
                </div>
                <div class="form-group ml-4">
                  <label for=""
                    >ສະຖານະ <span class="text-danger">*</span></label
                  >
                  <select
                    name=""
                    id=""
                    class="form-control"
                    v-model="m_status_inp"
                    required
                  >
                    <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                    <option value="ເງິນໃນບັນຊີ">-- ເງິນໃນບັນຊີ --</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                ຍົກເລີກ
              </button>
              <button type="submit" class="btn btn-success">ບັນທຶກ</button>
            </div>
          </form>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

    <div class="modal fade" id="modal-insertexpenditure">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h4 class="modal-title">ເພີ່ມລາຍຮັບ</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form enctype="multipart/form-data" @submit.prevent="createExpenditure">
            <div class="modal-body">
              <div class="row">
                <div class="form-group ml-4">
                  <label for=""
                    >ຈຳນວນເງິນ <span class="text-danger">*</span></label
                  >
                  <input
                    type="number"
                    class="form-control"
                    required
                    v-model="expenditure_inp"
                    placeholder="ກະລຸນາປ້ອນຈຳນວນເງິນ"
                  />
                </div>

                <div class="form-group ml-4">
                  <label for=""
                    >ເຫດຜົນ <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="expenditure_reason_inp"
                    placeholder="ເຫດຜົນທີ່ໃຊ້ເງິນ"
                  />
                </div>
                <div class="form-group ml-4">
                  <label for=""
                    >ສະຖານະ <span class="text-danger">*</span></label
                  >
                  <select
                    name=""
                    id=""
                    class="form-control"
                    v-model="m_status_inp"
                    required
                  >
                    <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                    <option value="ເງິນໃນບັນຊີ">-- ເງິນໃນບັນຊີ --</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-warning" data-dismiss="modal">
                ຍົກເລີກ
              </button>
              <button type="submit" class="btn btn-danger">ບັນທຶກ</button>
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
  name: "IncomeExpenditureComponent",
  data() {
    return {
      income_inp: "",
      income_reason_inp: "",
      expenditure_inp: "",
      expenditure_reason_inp: "",
      m_status_inp: "",
      income_upd: "",
      income_reason_upd: "",
      expenditure_upd: "",
      expenditure_reason_upd: "",
      m_status_upd: "",
      Income_ID: null,
      Expenditure_ID: null,
      incomes_s: [],
      expenditures_s: [],
    };
  },
  created() {
    this.fetchIncome_s();
    this.fetchExpenditure_s();
  },
  methods: {
    // for Income
    async fetchIncome_s() {
      try {
        const response = await axios.get("https://nodejs-api-daily-porchoua.onrender.com/api/income");
        if (Array.isArray(response.data)) {
          this.incomes_s = response.data;
        } else {
          console.error("Invalid response format:", response.data);
          this.showErrorMessage();
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
        this.showErrorMessage();
      }
    },

    async fetchExpenditure_s() {
      try {
        const response = await axios.get(
          "https://nodejs-api-daily-porchoua.onrender.com/api/expenditure"
        );
        if (Array.isArray(response.data)) {
          this.expenditures_s = response.data;
        } else {
          console.error("Invalid response format:", response.data);
          this.showErrorMessage();
        }
      } catch (error) {
        console.error("Error fetching expenditure:", error);
        this.showErrorMessage();
      }
    },

    async createIncome() {
      try {
        const response = await axios.post(
          "https://nodejs-api-daily-porchoua.onrender.com/api/create-income",
          {
            income: this.income_inp,
            income_reason: this.income_reason_inp,
            m_status: this.m_status_inp,
            timestamp: this.timestamp,
          }
        );
        console.log(response.data);
        // alert('Employee added successfully');
        this.showSuccessMessage();
        // Optionally, you can fetch the updated list of sale employees after adding a new employee
        this.fetchIncome_s();
        this.resetIncome_s_Form();
      } catch (error) {
        console.error("Error creating employee:", error);
        // alert('Failed to create employee');
        this.showErrorMessage();
      }
    },

    async createExpenditure() {
      try {
        const response = await axios.post(
          "https://nodejs-api-daily-porchoua.onrender.com/api/create-expenditure",
          {
            expenditure: this.expenditure_inp,
            expenditure_reason: this.expenditure_reason_inp,
            m_status: this.m_status_inp,
            timestamp: this.timestamp,
          }
        );
        console.log(response.data);
        // alert('Employee added successfully');
        this.showSuccessMessage();
        // Optionally, you can fetch the updated list of sale employees after adding a new employee
        this.fetchExpenditure_s();
        this.resetExpenditure_s_Form();
      } catch (error) {
        console.error("Error creating employee:", error);
        // alert('Failed to create employee');
        this.showErrorMessage();
      }
    },

    // create Employee Machinist

    async resetIncome_s_Form() {
      // Reset all form fields to their initial state
      this.income_inp = "";
      this.income_reason_inp = "";
      this.m_status_inp = "";
    },

    async resetExpenditure_s_Form() {
      // Reset all form fields to their initial state
      this.expenditure_inp = "";
      this.expenditure_reason_inp = "";
      this.m_status_inp = "";
    },

    // function delete employee sale
    async confirmDeleteIncome_a(Income_Id) {
      Swal.fire({
        title: "ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?",
        text: "ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່: " + Income_Id,
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "ຍົກເລີກ",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "ຢືນຢັນ!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteIncome(Income_Id);
        }
      });
    },

    async confirmDeleteExpenditure_a(Expenditure_ID) {
      Swal.fire({
        title: "ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?",
        text: "ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່: " + Expenditure_ID,
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "ຍົກເລີກ",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "ຢືນຢັນ!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteExpenditure(Expenditure_ID);
        }
      });
    },

    async deleteExpenditure(Expenditure_ID) {
      try {
        const response = await axios.delete(
          `https://nodejs-api-daily-porchoua.onrender.com/api/delete-daily/${Expenditure_ID}`
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
          this.fetchExpenditure_s(); // Fetch updated employee list
          this.resetExpenditure_s_Form(); // Reset the employee form
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

    async deleteIncome(Income_Id) {
      try {
        const response = await axios.delete(
          `https://nodejs-api-daily-porchoua.onrender.com/api/delete-daily/${Income_Id}`
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
          this.fetchIncome_s(); // Fetch updated employee list
          this.resetIncome_s_Form(); // Reset the employee form
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
    async showUpdateSuccessMessage() {
      Swal.fire({
        title: "ແກ້ໄຂສຳເລັດ",
        text: "ຂໍ້ມູນໄດ້ຖືກແກ້ໄຂສຳເລັດແລ້ວ",
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
    async fetchIncomeDetails(Income_ID) {
      this.Income_ID = Income_ID; // Set the current category ID
      try {
        const response = await axios.get(
          `https://nodejs-api-daily-porchoua.onrender.com/api/income/${Income_ID}`
        );
        this.income_upd = response.data.income; // Set the existing category name to the input field
        this.income_reason_upd = response.data.income_reason;
        this.m_status_upd = response.data.m_status;
      } catch (error) {
        console.error(error.response.data);
        // Handle error (e.g., show error message)
      }
    },
    async fetchExpenditureDetails(Expenditure_ID) {
      this.Expenditure_ID = Expenditure_ID; // Set the current category ID
      try {
        const response = await axios.get(
          `https://nodejs-api-daily-porchoua.onrender.com/api/expenditure/${Expenditure_ID}`
        );
        this.expenditure_upd = response.data.expenditure; // Set the existing category name to the input field
        this.expenditure_reason_upd = response.data.expenditure_reason;
        this.m_status_upd = response.data.m_status;
      } catch (error) {
        console.error(error.response.data);
        // Handle error (e.g., show error message)
      }
    },
    async updateIncome() {
      try {
        const response = await axios.put(
          `https://nodejs-api-daily-porchoua.onrender.com/api/update-income/${this.Income_ID}`,
          {
            income: this.income_upd,
            income_reason: this.income_reason_upd,
            m_status: this.m_status_upd,
          }
        );
        console.log(response.data);
        // Handle successful update (e.g., show success message, navigate to another page)
        // alert('Category updated successfully');
        this.showUpdateSuccessMessage();
        this.$router.push("/income_expenditure"); // Navigate to categories list or another appropriate page
      } catch (error) {
        console.error(error.response.data);
        // Handle error (e.g., show error message)
        alert("Failed to update admin");
      }
    },
    async updateExpenditure() {
      try {
        const response = await axios.put(
          `https://nodejs-api-daily-porchoua.onrender.com/api/update-expenditure/${this.Expenditure_ID}`,
          {
            expenditure: this.expenditure_upd,
            expenditure_reason: this.expenditure_reason_upd,
            m_status: this.m_status_upd,
          }
        );
        console.log(response.data);
        // Handle successful update (e.g., show success message, navigate to another page)
        // alert('Category updated successfully');
        this.showUpdateSuccessMessage();
        this.$router.push("/income_expenditure"); // Navigate to categories list or another appropriate page
      } catch (error) {
        console.error(error.response.data);
        // Handle error (e.g., show error message)
        alert("Failed to update admin");
      }
    },
    // Other methods...
  },
};
</script>
