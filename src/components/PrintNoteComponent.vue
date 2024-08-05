<template>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <h4 class="mt-2 text-center text-bold">ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</h4>
            <h4 class="mt-2 text-center text-bold">ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ</h4><br>
            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-5"></div>
                        <div class="col-md-2">
                            <h1 class="text-center text-primary"><b>Daily</b></h1><br><br>
                            <!-- <img src="image/logo.jpg" alt="Logo" class="w-50 h-100 rounded-circle">   -->
                        </div>
                        <div class="col-md-5"></div>
                    </div>
                    <div class="row">

                        <div class="col-md-2"></div>
                        <div class="col-md-2">
                            <h5 class="text-bold">ຊື່ຜູ້ດູແລ: ແອັດມິນ</h5>
                        </div>
                        <div class="col-md-4">
                            <h2 class="text-center text-primary text-bold">ໃບບິນການບັນທຶກ</h2> 
                        </div>
                        <div class="col-md-3">
                            <h6 class="text-bold" id="datetime">
                                <date-time-component></date-time-component>
                            </h6>
                        </div>

                    </div><br>
                    <div class="row">
                        <!-- left column -->
                        <div class="col-md-1"></div>
                        <!--/.col (left) -->
                        <!-- right column -->
                        <div class="col-md-10" style="overflow: auto;">
                            <table class="table table-striped ">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ເນື້ອໃນ</th>
                                        <th>ວັນທີ່ເວລາ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="note in notes" :key="note.id">
                                        <td>{{ note.id }}</td>
                                        <td><b>{{ note.content }}</b></td>
                                        <td><b class="text-success">{{ note.timestamp }}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--/.col (right) -->

                        <div class="col-md-1"></div>
                    </div>

                    <!-- /.row -->
                </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div><br>
        <div class="row">
            <div class="col-md-5"></div>
            <div class="col-md-2">
                <h1 class="text-center text-bold">ຂໍຂອບໃຈ</h1>
                <!-- <img src="image/logo.jpg" alt="Logo" class="w-50 h-100 rounded-circle">   -->
            </div>
            <div class="col-md-5"></div>
        </div><br><br>
</template>
<script>

import axios from 'axios';
import DateTimeComponent from './DateTimeComponent.vue';
export default {
    name: 'PrintNoteComponent',
    components: {
    DateTimeComponent
  },
    data() {
        return {
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
                const response = await axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/note');
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
                const response = await axios.post('https://nodejs-api-daily-porchoua.onrender.com/api/create-note', {
                    content: this.content,
                    module: this.module,
                    timestamp: this.timestamp
                });
                console.log(response.data);
                // alert('Employee added successfully');
                this.showSuccessMessage();
                // Optionally, you can fetch the updated list of sale employees after adding a new employee
                this.fetchExpenditure();
                this.resetNote_Form();
            } catch (error) {
                console.error('Error creating note:', error);
                // alert('Failed to create employee');
                this.showErrorMessage();
            }
        },

        // Other methods...
    }
};
</script>