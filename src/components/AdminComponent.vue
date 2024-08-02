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
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard v1</li>
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
                    <div class="col-md-6">
                        <h3 class="text-center text-bold text-primary">ຟອມເພີ່ມadmin</h3>
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">ບັນທຶກadmin</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form @submit.prevent="createAdmin_a">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group ml-5">
                                            <label for="exampleInputEmail1">ຊື່ <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required id="Name_a"
                                                v-model="Name_a" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-5">
                                            <label for="exampleInputEmail1">ອີເມວ <span
                                                    class="text-danger">*</span></label>
                                            <input type="email" class="form-control" required id="email_a"
                                                v-model="email_a" placeholder="email@gmail.com">
                                        </div><div class="form-group ml-5">
                                            <label for="exampleInputEmail1">ລະຫັດຜ່ານ <span
                                                    class="text-danger">*</span></label>
                                            <input type="password" class="form-control" required id="password_a"
                                                v-model="password_a" placeholder="********">
                                        </div>
                                        <div class="form-group ml-5">
                                            <label for="exampleInputEmail1">ເບີໂທ <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required id="phone_a"
                                                v-model="phone_a" placeholder="0207xxxxxxx">
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
                    <div class="col-md-6">

                        <!-- /.card -->
                        <h3 class="text-center text-bold text-primary">ລາຍຊື່admin</h3>
                        <div class="overflow-auto">
                            
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ລະຫັດ</th>
                                        <th>ຊື່</th>
                                        <th>ອີເມວ</th>
                                        <th>ເບີໂທ</th>
                                        <th>ເວລາວັນທີ</th>
                                        <th>ປຸ່ມຄຳສັ່ງ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="admin_a in admins_a" :key="admin_a.id">
                                        <td>{{ admin_a.id }}</td>
                                        <td>{{ admin_a.name }}</td>
                                        <td>{{ admin_a.email }}</td>
                                        <td>{{ admin_a.phone }}</td>
                                        <td><b class="text-success">{{ admin_a.timestamp }}</b></td>
                                        <td><button href="#" class="btn btn-warning" data-toggle="modal"
                                                @click="fetchAdminDetails(admin_a.id)" data-target="#modal-lg"><i
                                                    class="fas fa-edit"></i></button>&nbsp;<button
                                                @click="confirmDelete_a(admin_a.id)" class="btn btn-danger"><i
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
                        <h4 class="modal-title">ແກ້ໄຂຂໍ້ມູນ Admin</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form enctype="multipart/form-data" @submit.prevent="updateAdmin">
                        <div class="modal-body">
                            <div class="row">
                                <div class="form-group ml-4">
                                    <label for="">ຊື່ <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" required v-model="updatedName"
                                        placeholder="ກະລຸນາປ້ອນຊື່">
                                </div>
                                <div class="form-group ml-4">
                                    <label for="">ອີເມວ <span class="text-danger">*</span></label>
                                    <input type="email" class="form-control" required v-model="updatedemail"
                                        placeholder="email@gmail.com">
                                </div>
                                <div class="form-group ml-4">
                                    <label for="">ລະຫັດຜ່ານ <span class="text-danger">*</span></label>
                                    <input type="password" class="form-control" required v-model="updatedpassword"
                                        placeholder="********">
                                </div>
                                <div class="form-group ml-4">
                                    <label for="">ເບີໂທ <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" required v-model="updatedphone"
                                        placeholder="ກະລຸນາປ້ອນເບີໂທ">
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
    name: 'AdminComponent',
    data() {
        return {
            Name_a: '',
            email_a: '',
            password_a: '',
            phone_a: '',
            updatedName: '',
            updatedpassword: '',
            updatedphone: '',
            Admin_ID: null,
            admins_a: [],
        };
    },
    created() {
        this.fetchAdmins_a();
    },
    methods: {

        // for Admin
        async fetchAdmins_a() {
            try {
                const response = await axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/admin');
                if (Array.isArray(response.data)) {
                    this.admins_a = response.data;
                } else {
                    console.error('Invalid response format:', response.data);
                    this.showErrorMessage();
                }
            } catch (error) {
                console.error('Error fetching employees:', error);
                this.showErrorMessage();
            }
        },
        async createAdmin_a() {
            try {
                const response = await axios.post('https://nodejs-api-daily-porchoua.onrender.com/api/create-admin', {
                    name: this.Name_a,
                    email: this.email_a,
                    password: this.password_a,
                    phone: this.phone_a,
                    timestamp: this.timestamp
                });
                console.log(response.data);
                // alert('Employee added successfully');
                this.showSuccessMessage();
                // Optionally, you can fetch the updated list of sale employees after adding a new employee
                this.fetchAdmins_a();
                this.resetAdmin_a_Form();
            } catch (error) {
                console.error('Error creating employee:', error);
                // alert('Failed to create employee');
                this.showErrorMessage();
            }
        },

        // create Employee Machinist

        async resetAdmin_a_Form() {
            // Reset all form fields to their initial state
            this.Name_a = '';
            this.email_a = '';
            this.password_a = '';
            this.phone_a = '';
        },



        // function delete employee sale
        async confirmDelete_a(userId) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່: ' + userId,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteAdmin_a(userId);
                }
            });
        },


        async deleteAdmin_a(userId) {
            try {
                const response = await axios.delete(`https://nodejs-api-daily-porchoua.onrender.com/api/delete-admin/${userId}`);
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
                    this.fetchAdmins_a(); // Fetch updated employee list
                    this.resetAdmin_a_Form(); // Reset the employee form
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
        async fetchAdminDetails(Admin_ID) {
            this.Admin_ID = Admin_ID; // Set the current category ID
            try {
                const response = await axios.get(`https://nodejs-api-daily-porchoua.onrender.com/api/admin/${Admin_ID}`);
                this.updatedName = response.data.name;// Set the existing category name to the input field
                this.updatedemail = response.data.email;
                this.updatedpassword = '';
                this.updatedphone = response.data.phone;
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
            }
        },
        async updateAdmin() {
            try {
                const response = await axios.put(`https://nodejs-api-daily-porchoua.onrender.com/api/update-admin/${this.Admin_ID}`, {
                    name: this.updatedName,
                    email: this.updatedemail,
                    password: this.updatedpassword,
                    phone: this.updatedphone
                });
                console.log(response.data);
                // Handle successful update (e.g., show success message, navigate to another page)
                // alert('Category updated successfully');
                this.showUpdateSuccessMessage();
                this.$router.push('/admin'); // Navigate to categories list or another appropriate page
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
                alert('Failed to update admin');
            }
        }
        // Other methods...
    }
};
</script>