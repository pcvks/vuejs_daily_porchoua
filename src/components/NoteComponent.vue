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
                        <h3 class="text-center text-bold text-primary">ຟອມເພີ່ມການບັນທຶກ</h3>
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">ບັນທຶກການບັນທຶກ</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form @submit.prevent="createNote">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group ml-5">
                                            <label for="exampleInputEmail1">ເນື້ອໃນ <span
                                                    class="text-danger">*</span></label>
                                            <textarea name="" id="" cols="20" rows="5" v-model="content" required class="form-control" placeholder="ກະລຸນາປ້ອນເນື້ອໃນ"></textarea>
                                        </div>
                                        <div class="form-group ml-5">
                                            <label for="exampleInputEmail1">ໂມດູລ <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required id="module"
                                                v-model="module" placeholder="ປ້ອນ module">
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
                            <h3 class="text-center text-bold text-primary">ເນື້ອໃນການບັນທຶກ</h3>
                        <div class="overflow-auto">
                            <div class="justify-content-between d-flex">
                                <p></p>
                                <router-link to="/print_note" class="btn btn-primary"><i class="fas fa-print mr-1"></i>Print PDF</router-link>
                            </div>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ລະຫັດ</th>
                                        <th>ເນື້ອໃນ</th>
                                        <th>ໂມດູລ</th>
                                        <th>ວັນທີ່ເວລາ</th>
                                        <th>ປຸ່ມຄຳສັ່ງ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="note in notes" :key="note.id">
                                        <td>{{ note.id }}</td>
                                        <td><b>{{ note.content }}</b></td>
                                        <td><b class="text-primary">{{ note.module }}</b></td>
                                        <td><b class="text-success">{{ note.timestamp }}</b></td>
                                        <td><button href="#" class="btn btn-warning" data-toggle="modal"
                                                @click="fetchNoteDetail(note.id)" data-target="#modal-lg"><i
                                                    class="fas fa-edit"></i></button>&nbsp;<button
                                                @click="confirmDelete(note.id)" class="btn btn-danger"><i
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
                        <h4 class="modal-title">ແກ້ໄຂຂໍ້ມູນ ການບັນທຶກ</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form enctype="multipart/form-data" @submit.prevent="updateNote">
                        <div class="modal-body">
                            <div class="row">
                                <div class="form-group ml-4">
                                    <label for="">ເນື້ອໃນ <span class="text-danger">*</span></label>
                                    <textarea name="" id="" cols="20" rows="5" v-model="updatedContent" class="form-control"></textarea>
                                </div>
                                <div class="form-group ml-4">
                                    <label for="">ໂມດູລ <span class="text-danger">*</span></label>
                                    <input type="text" placeholder="ກະລຸນາປ້ອນໂມດູ" v-model="updatedmodule" class="form">
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
    name: 'NodeComponent',
    data() {
        return {
            content: '',
            module: '',
            updatedContent: '',
            updatedmodule: '',
            Note_ID: null,
            notes: [],
        };
    },
    created() {
        this.fetchNote();
    },
    methods: {

        // for Admin
        async fetchNote() {
            try {
                const response = await axios.get('http://localhost:3000/api/note');
                if (Array.isArray(response.data)) {
                    this.notes = response.data;
                } else {
                    console.error('Invalid response format:', response.data);
                    this.showErrorMessage();
                }
            } catch (error) {
                console.error('Error fetching note:', error);
                this.showErrorMessage();
            }
        },
        async createNote() {
            try {
                const response = await axios.post('http://localhost:3000/api/create-note', {
                    content: this.content,
                    module: this.module,
                    timestamp: this.timestamp
                });
                console.log(response.data);
                // alert('Employee added successfully');
                this.showSuccessMessage();
                // Optionally, you can fetch the updated list of sale employees after adding a new employee
                this.fetchNote();
                this.resetNote_Form();
            } catch (error) {
                console.error('Error creating note:', error);
                // alert('Failed to create employee');
                this.showErrorMessage();
            }
        },

        // create Employee Machinist

        async resetNote_Form() {
            // Reset all form fields to their initial state
            this.content = '';
            this.module = '';
        },



        // function delete employee sale
        async confirmDelete(noteID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່: ' + noteID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteNote(noteID);
                }
            });
        },


        async deleteNote(noteID) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/delete-note/${noteID}`);
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
                    this.fetchNote(); // Fetch updated employee list
                    this.resetNote_Form(); // Reset the employee form
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
        async fetchNoteDetail(Note_ID) {
            this.Note_ID = Note_ID; // Set the current category ID
            try {
                const response = await axios.get(`http://localhost:3000/api/note/${Note_ID}`);
                this.updatedContent = response.data.content;// Set the existing category name to the input field
                this.updatedmodule = response.data.module;
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
            }
        },
        async updateNote() {
            try {
                const response = await axios.put(`http://localhost:3000/api/update-note/${this.Note_ID}`, {
                    content: this.updatedContent,
                    module: this.updatedmodule,
                });
                console.log(response.data);
                // Handle successful update (e.g., show success message, navigate to another page)
                // alert('Category updated successfully');
                this.showUpdateSuccessMessage();
                this.$router.push('/note'); // Navigate to categories list or another appropriate
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
                alert('Failed to update note');
            }
        }
        // Other methods...
    }
};
</script>