<template>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <!-- <h1 class="m-0 text-primary text-bold">
                            <marquee>ຍິນດີຕ້ອນຮັບລະບົບ daily</marquee>
                        </h1> -->
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/dashboard">ໜ້າຫຼັກ</router-link></li>
                            <li class="breadcrumb-item active">ແຜນບໍ່ສຳເລັດ</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
            <section class="content">
                <div class="container-fluid">
                    <h1 class="text-center text-primary"><b>ແຜນການທີ່ຍັງບໍ່ທັນສຳເລັດ</b></h1><br><br>
                    
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
                                        <th>ແຜນການປີນີ້</th>
                                        <th>ເປີເຊັນ</th>
                                        <th>ການເຄື່ອນໄຫວ</th>
                                        <th>ສະຖານະ</th>
                                        <th>ວັນທີ່ເວລາ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(plan, index) in plans" :key="plan.id">
                                        <td>{{ index + 1 }}</td>
                                        <td><b class="text-danger">{{ plan.plan_name }}</b></td>
                                        <td><b class="text-success">{{ plan.percent }} %</b></td>
                                        <td><b class="text-danger">{{ plan.active }} %</b></td>
                                        <td :class="plan.status === 0 ? 'text-danger' : 'text-success'">
                                            <b>{{ plan.status === 0 ? 'ຍັງບໍ່ສຳເລັດ' : 'ສຳເລັດແລ້ວ' }}</b>
                                        </td>
                                        <td><b class="text-success">{{ plan.timestamp }}</b></td>
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
        </div>
</template>
<script>

import axios from 'axios';
export default {
    name: 'PlanNotYetSuccessComponent',
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
            plans: [],
        };
    },
    created() {
        this.fetchPlanSuccess();
    },
    methods: {

        // for Admin
        async fetchPlanSuccess() {
            try {
                const response = await axios.get('https://api-note-dailes.onrender.com/api/plan_not_yet_success');
                if (Array.isArray(response.data)) {
                    this.plans = response.data;
                } else {
                    console.error('Invalid response format:', response.data);
                    this.showErrorMessage();
                }
            } catch (error) {
                console.error('Error fetching note:', error);
                this.showErrorMessage();
            }
        },
        async createPlanSuccess() {
            try {
                const response = await axios.post('https://api-note-dailes.onrender.com/api/create-plan', {
                    plan_name: this.plan_name,
                    percent: this.percent,
                    status: this.status,
                    timestamp: this.timestamp
                });
                console.log(response.data);
                // alert('Employee added successfully');
                this.showSuccessMessage();
                // Optionally, you can fetch the updated list of sale employees after adding a new employee
                this.fetchPlanSuccess();
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