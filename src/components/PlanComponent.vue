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
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/dashboard">ໜ້າຫຼັກ</router-link></li>
                            <li class="breadcrumb-item active">ແຜນການ</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <!-- left column -->
                    <div class="col-md-5">
                        <h3 class="text-center text-bold text-primary">ຟອມເພີ່ມແຜນການ</h3>
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">ບັນທຶກແຜນການ</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form @submit.prevent="createPlan">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group ml-4">
                                            <label for="exampleInputEmail1">ແຜນການປີນີ້ <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required id="Plan_name_inp"
                                                v-model="Plan_name_inp" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="exampleInputEmail1">ເປີເຊັນ <span
                                                    class="text-danger">*</span></label>
                                            <input type="number" class="form-control" required id="phone_a"
                                                v-model="percent_inp" placeholder="ຈຳນວນເປີເຊັນ %">
                                        </div>
                                    </div>
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">ບັນທຶກ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.card -->

                    </div>
                    <!--/.col (left) -->
                    <!-- right column -->
                    <div class="col-md-7">

                        <!-- /.card -->
                            <h3 class="text-center text-bold text-primary">ລາຍຊື່ແຜນການ</h3>
                        <div class="overflow-auto">
                            <div class="justify-content-between d-flex">
                                <router-link to="/plan_success" class="btn btn-sm btn-success"><i class="fas fa-arrow-circle-right mr-1"></i>ແຜນການທີ່ສຳເລັດແລ້ວ</router-link>
                                <router-link to="/plan_not_yet_success" class="btn btn-sm btn-danger"><i class="fas fa-arrow-circle-right mr-1"></i>ແຜນການທີ່ຍັງບໍ່ທັນສຳເລັດ</router-link>
                            </div>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ລະຫັດ</th>
                                        <th>ແຜນການປີນີ້</th>
                                        <th>ເປີເຊັນ</th>
                                        <th>ການເຄື່ອນໄຫວ</th>
                                        <th>ສະຖານະ</th>
                                        <th>ເວລາວັນທີ</th>
                                        <th>ປຸ່ມຄຳສັ່ງ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="plan in plans" :key="plan.id">
                                        <td>{{ plan.id }}</td>
                                        <td><b class="text-primary">{{ plan.plan_name }}</b></td>
                                        <td><b class="text-success">{{ plan.percent }} %</b></td>
                                        <td><b class="text-danger">{{ plan.active }} %</b></td>
                                        <td :class="plan.status === 0 ? 'text-danger' : 'text-success'">
                                            <b>{{ plan.status === 0 ? 'ຍັງບໍ່ສຳເລັດ' : 'ສຳເລັດແລ້ວ' }}</b>
                                        </td>
                                        <td><b class="text-success">{{ plan.timestamp }}</b></td>
                                        <td><button href="#" class="btn btn-warning" data-toggle="modal"
                                                @click="fetchPlanDetails(plan.id)" data-target="#modal-lg"><i
                                                    class="fas fa-edit"></i></button>&nbsp;<button
                                                @click="confirmDelete_a(plan.id)" class="btn btn-danger"><i
                                                    class="fas fa-times"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <!--/.col (right) -->
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->

        <div class="modal fade" id="modal-lg">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-info">
                        <h4 class="modal-title">ແກ້ໄຂຂໍ້ມູນແຜນການ</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form enctype="multipart/form-data" @submit.prevent="updatePlan">
                        <div class="modal-body">
                            <div class="row">
                                <div class="form-group ml-4">
                                    <label for="">ຊື່ <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" required v-model="updatedPlan_name"
                                        placeholder="ກະລຸນາປ້ອນຊື່">
                                </div>
                                <div class="form-group ml-4">
                                    <label for="">ເປີເຊັນ <span class="text-danger">*</span></label>
                                    <input type="number" class="form-control" required v-model="updatedpercent"
                                        placeholder="ກະລຸນາປ້ອນ %">
                                </div>
                                <div class="form-group ml-4">
                                    <label for="">ການເຄື່ອນໄຫວ <span class="text-danger">*</span></label>
                                    <input type="number" class="form-control" required v-model="updatedactive"
                                        placeholder="ກະລຸນາປ້ອນ %">
                                </div>
                                <div class="form-group ml-4">
                                    <label for="">ສະຖານະ <span class="text-danger">*</span></label>
                                    <select name="" id="" class="form-control" required v-model="updatedstatus">
                                        <option value="">-- ກະລຸນາເລືອກ --</option>
                                        <option value="1">ສຳເລັດແລ້ວ</option>
                                        <option value="0">ຍັງບໍ່ສຳເລັດ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">ຍົກເລີກ</button>
                            <button type="submit" class="btn btn-info">ອັບເດດ</button>
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
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
    name: 'PlanComponent',
    props: {
        plan: Object
    },
    computed: {
        statusClass() {
            return this.plan.status === 0 ? 'text-danger' : 'text-success';
        },
        statusText() {
            return this.plan.status === 0 ? 'not success' : 'success';
        }
    },
    data() {
        return {
            Plan_name_inp: '',
            percent_inp: '',
            updatedPlan_name: '',
            updatedpercent: '',
            updatedactive: '',
            updatedstatus: '',
            Plan_ID: null,
            plans: [],
        };
    },
    created() {
        this.fetchPlans();
    },
    methods: {

        // for Admin
        async fetchPlans() {
            try {
                const response = await axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/plan');
                if (Array.isArray(response.data)) {
                    this.plans = response.data;
                } else {
                    console.error('Invalid response format:', response.data);
                    this.showErrorMessage();
                }
            } catch (error) {
                console.error('Error fetching employees:', error);
                this.showErrorMessage();
            }
        },
        async createPlan() {
            try {
                const response = await axios.post('https://nodejs-api-daily-porchoua.onrender.com/api/create-plan', {
                    plan_name: this.Plan_name_inp,
                    active: this.active,
                    percent: this.percent_inp,
                    status: this.status,
                    timestamp: this.timestamp
                });
                console.log(response.data);
                // alert('Employee added successfully');
                this.showSuccessMessage();
                // Optionally, you can fetch the updated list of sale employees after adding a new employee
                this.fetchPlans();
                this.resetPlan_Form();
            } catch (error) {
                console.error('Error creating employee:', error);
                // alert('Failed to create employee');
                this.showErrorMessage();
            }
        },

        // create Employee Machinist

        async resetPlan_Form() {
            // Reset all form fields to their initial state
            this.Plan_name_inp = '';
            this.percent_inp = '';
            this.active_inp = '';
            this.status_inp = '';
        },



        // function delete employee sale
        async confirmDelete_a(Plan_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່: ' + Plan_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deletePlan(Plan_ID);
                }
            });
        },


        async deletePlan(Plan_ID) {
            try {
                const response = await axios.delete(`https://nodejs-api-daily-porchoua.onrender.com/api/delete-plan/${Plan_ID}`);
                console.log(response.data); // Log the response from the server
                Swal.fire({
                    title: "ລົບລ້າງ!",
                    text: "ຂໍ້ມູນໄດ້ຖືກລຶບສຳເລັດແລ້ວ",
                    icon: "success",
                    timer: 2000, // 2-3 seconds
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }).then(() => {
                    this.fetchPlans(); // Fetch updated employee list
                    this.resetPlan_Form(); // Reset the employee form
                });
                // Optionally, you can perform additional actions after successful deletion
            } catch (error) {
                console.error('Error deleting employee:', error);
                Swal.fire({
                    title: "ລົບລ້າງ!",
                    text: "ຂໍ້ມູນໄດ້ຖືກລຶບສຳເລັດແລ້ວ",
                    icon: "error",
                    timer: 2000, // 2-3 seconds
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
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
                }
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
        async fetchPlanDetails(Plan_ID) {
            this.Plan_ID = Plan_ID; // Set the current category ID
            try {
                const response = await axios.get(`https://nodejs-api-daily-porchoua.onrender.com/api/plan/${Plan_ID}`);
                this.updatedPlan_name = response.data.plan_name;// Set the existing category name to the input field
                this.updatedpercent = response.data.percent;
                this.updatedactive = response.data.active;
                this.updatedstatus = response.data.status;
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
            }
        },
        async updatePlan() {
            try {
                const response = await axios.put(`https://nodejs-api-daily-porchoua.onrender.com/api/update-plan/${this.Plan_ID}`, {
                    plan_name: this.updatedPlan_name,
                    percent: this.updatedpercent,
                    active: this.updatedactive,
                    status: this.updatedstatus,
                });
                console.log(response.data);
                // Handle successful update (e.g., show success message, navigate to another page)
                // alert('Category updated successfully');
                this.showUpdateSuccessMessage();
                this.$router.push('/plan'); // Navigate to categories list or another appropriate page
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
                alert('Failed to update plan');
            }
        }
        // Other methods...
    }
};
</script>