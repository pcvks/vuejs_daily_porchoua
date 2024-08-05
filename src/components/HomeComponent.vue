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
                            <li class="breadcrumb-item"><router-link>ໜ້າຫຼັກ</router-link></li>
                            <li class="breadcrumb-item active">Dashboard</li>
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
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-info">
                            <div class="inner">
                                <h4 class="text-bold">{{ sum_incomes }} ₭</h4>
                                <p>ລາຍຮັບທັງໝົດ</p>
                            </div>
                            <div class="icon">
                                <i class="fas">₭</i>
                            </div>
                            <a href="./incomedetailform.php" class="small-box-footer">ລາຍລະອຽດ<i
                                    class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-danger">
                            <div class="inner">
                                <h4 class="text-bold">{{ sum_expenditures }} ₭</h4>
                                <p>ລາຍຈ່າຍທັງໝົດ</p>
                            </div>
                            <div class="icon">
                                <i class="fas">₭</i>
                            </div>
                            <a href="./expendituredetailform.php" class="small-box-footer">ລາຍລະອຽດ<i
                                    class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-warning">
                            <div class="inner">
                                <h4 class="text-bold">{{ sum_money_remainings }} ₭</h4>
                                <p>ເງິນທີ່ເຫຼືອ</p>
                            </div>
                            <div class="icon">
                                <i class="fas">₭</i>
                            </div>
                            <a href="./moneynotyetused.php" class="small-box-footer">ລາຍລະອຽດ<i
                                    class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-success">
                            <div class="inner">
                                <h4 class="text-bold">{{ sum_expenditure_todays }} ₭</h4>
                                <p>ລາຍຈ່າຍມື້ນີ້</p>
                            </div>
                            <div class="icon">
                                <i class="fas">₭</i>
                            </div>
                            <a href="./expendituretodayform.php" class="small-box-footer">ລາຍລະອຽດ<i
                                    class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box">
                            <span class="info-box-icon bg-info elevation-1"><i class="fas fa-book"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">ແຜນການປີນີ້</span>
                                <span class="info-box-number">{{ count_plans }}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-book"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">ແຜນການປີນີ້ທີ່ຍັງບໍ່ສຳເລັດ</span>
                                <span class="info-box-number">{{ count_plan_not_yet_successes }}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->

                    <!-- fix for small devices only -->
                    <div class="clearfix hidden-md-up"></div>
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-book"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">ແຜນການປີນີ້ສຳເລັດແລ້ວ</span>
                                <span class="info-box-number">{{ count_plan_successes }}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-success elevation-1"><i
                                    class="fas fa-calendar-day"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">ຈຳນວນມື້</span>
                                <span class="info-box-number">{{ count_days }}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->

                </div>


                <!-- /.row -->
                <!-- Main row -->
                <div class="row">
                    <div class="col-md-12" style="overflow: auto;">
                        <table class="table table-striped ">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>5:00-6:00</th>
                                    <th>6:00-7:00</th>
                                    <th>7:00-8:00</th>
                                    <th>8:00-9:00</th>
                                    <th>9:00-10:00</th>
                                    <th>10:00-11:00</th>
                                    <th>11:00-12:00</th>
                                    <th>12:00-13:00</th>
                                    <th>13:00-14:00</th>
                                    <th>14:00-15:00</th>
                                    <th>15:00-16:00</th>
                                    <th>16:00-17:00</th>
                                    <th>17:00-18:00</th>
                                    <th>18:00-19:00</th>
                                    <th>19:00-20:00</th>
                                    <th>20:00-21:00</th>
                                    <th>21:00-22:00</th>
                                    <th>22:00-23:00</th>
                                    <th>23:00-5:00</th>
                                    <th>ມື້ວັນ</th>
                                    <th>ວັນທີ່ & ເວລາ</th>
                                    <th>ປຸ່ມຄຳສັ່ງ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="daily_d in dailies_d" :key="daily_d.id">
                                        <td>{{ daily_d.id }}</td>
                                        <td>{{ daily_d.five_six }}</td>
                                        <td>{{ daily_d.six_seven }}</td>
                                        <td>{{ daily_d.seven_eight }}</td>
                                        <td>{{ daily_d.eight_nine }}</td>
                                        <td>{{ daily_d.nine_ten }}</td>
                                        <td>{{ daily_d.ten_eleven }}</td>
                                        <td>{{ daily_d.eleven_twelve }}</td>
                                        <td>{{ daily_d.twelve_thirteen }}</td>
                                        <td>{{ daily_d.thirteen_fourteen }}</td>
                                        <td>{{ daily_d.fourteen_fifteen }}</td>
                                        <td>{{ daily_d.fifteen_sixteen }}</td>
                                        <td>{{ daily_d.sixteen_seventeen }}</td>
                                        <td>{{ daily_d.seventeen_eighteen }}</td>
                                        <td>{{ daily_d.eighteen_nineteen }}</td>
                                        <td>{{ daily_d.nineteen_twenty }}</td>
                                        <td>{{ daily_d.twenty_twentyone }}</td>
                                        <td>{{ daily_d.twentyone_twentytwo }}</td>
                                        <td>{{ daily_d.twentytwo_twentythree }}</td>
                                        <td>{{ daily_d.twentythree_five }}</td>
                                        <td>{{ daily_d.day }}</td>
                                        <td><b class="text-success">{{ daily_d.timestamp }}</b></td>
                                        <td><button href="#" class="btn btn-warning" data-toggle="modal"
                                                @click="fetchDailyDetails(daily_d.id)" data-target="#modal-lg"><i
                                                    class="fas fa-edit"></i></button>&nbsp;<button
                                                @click="confirmDelete_d(daily_d.id)" class="btn btn-danger"><i
                                                    class="fas fa-times"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- /.row (main row) -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
    name: "HomeComponent",
    data() {
        return {
            five_six_d: '',
            six_seven_d:'',
            seven_eight_d:'',
            eight_nine_d:'',
            nine_ten_d:'',
            ten_eleven_d:'',
            eleven_twelve_d:'',
            twelve_thirteen_d:'',
            thirteen_fourteen_d:'',
            fourteen_fifteen_d:'',
            fifteen_sixteen_d:'',
            sixteen_seventeen_d:'',
            seventeen_eighteen_d:'',
            eighteen_nineteen_d:'',
            nineteen_twenty_d:'',
            twenty_twentyone_d:'',
            twentyone_twentytwo_d:'',
            twentytwo_twentythree_d:'',
            twentythree_five_d:'',
            day_d: '',
            Daily_ID: null,
            dailies_d: [],
            count_plans: 0,
            count_plan_successes: 0,
            count_plan_not_yet_successes: 0,
            count_days: 0,
            sum_incomes: 0,
            sum_expenditures: 0,
            sum_money_remainings: 0,
            sum_expenditure_todays: 0
        };
    },
    created() {
        this.fetchDaily_d();
    },
    mounted(){
        this.fetchCountPlan();
        this.fetchCountPlanSuccess();
        this.fetchCountPlanNotYetSuccess();
        this.fetchCountDay();
        this.fetchSumIncome();
        this.fetchSumExpenditure();
        this.fetchSumMoneyRemaining();
        this.fetchSumExpenditureToday();
    },
    methods: {
        // for daily
        async fetchDaily_d() {
            try {
                const response = await axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/daily');
                if (Array.isArray(response.data)) {
                    this.dailies_d = response.data;
                }else{
                    console.error('Invalid response format:', response.data);
                    this.showErrorMessage();
                }
            }   catch (error) {
                console.error('Error fetching daily:', error);
                this.showErrorMessage();
            }
        },
        async createDaily_d() {
            try {
                const response = await axios.post('https://nodejs-api-daily-porchoua.onrender.com/api/create-admin', {
                    five_six: this.five_six_d,
                    six_seven: this.six_seven_d,
                    seven_eight: this.seven_eight_d,
                    eight_nine: this.eight_nine_d,
                    nine_ten: this.nine_ten_d,
                    ten_eleven: this.ten_eleven_d,
                    eleven_twelve: this.eleven_twelve_d,
                    twelve_thirteen: this.twelve_thirteen_d,
                    thirteen_fourteen: this.thirteen_fourteen_d,
                    fourteen_fifteen: this.fourteen_fifteen_d,
                    fifteen_sixteen: this.fifteen_sixteen_d,
                    sixteen_seventeen: this.sixteen_seventeen_d,
                    seventeen_eighteen: this.seventeen_eighteen_d,
                    eighteen_nineteen: this.eighteen_nineteen_d,
                    nineteen_twenty: this.nineteen_twenty_d,
                    twenty_twentyone: this.twenty_twentyone_d,
                    twentyone_twentytwo: this.twentyone_twentytwo_d,
                    twentytwo_twentythree: this.twentytwo_twentythree_d,
                    twentythree_five: this.twentythree_five_d,
                    day_d: this.day_d,
                    timestamp: this.timestamp
                });
                console.log(response.data);
                // alert('Employee added successfully');
                this.showSuccessMessage();
                // Optionally, you can fetch the updated list of sale employees after adding a new employee
                this.fetchDaily_d();
                this.resetDaily_d_Form();
            } catch (error) {
                console.error('Error creating employee:', error);
                // alert('Failed to create employee');
                this.showErrorMessage();
            }
        },

        // create Employee Machinist

        async resetDaily_d_Form() {
            // Reset all form fields to their initial state
            this.five_six_d = '',
            this.six_seven_d ='',
            this.seven_eight_d ='',
            this.eight_nine_d ='',
            this.nine_ten_d ='',
            this.ten_eleven_d ='',
            this.eleven_twelve_d ='',
            this.twelve_thirteen_d ='',
            this.thirteen_fourteen_d ='',
            this.fourteen_fifteen_d ='',
            this.fifteen_sixteen_d ='',
            this.sixteen_seventeen_d ='',
            this.seventeen_eighteen_d ='',
            this.eighteen_nineteen_d ='',
            this.nineteen_twenty_d ='',
            this.twenty_twentyone_d ='',
            this.twentyone_twentytwo_d ='',
            this.twentytwo_twentythree_d ='',
            this.twentythree_five_d ='',
            this.day_d = ''
        },


        // function delete employee sale
        async confirmDelete_d(Daily_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່: ' + Daily_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteDaily_d(Daily_ID);
                }
            });
        },


        async deleteDaily_d(Daily_ID) {
            try {
                const response = await axios.delete(`https://nodejs-api-daily-porchoua.onrender.com/api/delete-daily/${Daily_ID}`);
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
                    this.fetchDaily_d(); // Fetch updated employee list
                    this.resetDaily_d_Form(); // Reset the employee form
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
        async fetchDailyDetails(Daily_ID) {
            this.Daily_ID = Daily_ID; // Set the current category ID
            try {
                const response = await axios.get(`https://nodejs-api-daily-porchoua.onrender.com/api/daily/${Daily_ID}`);
                this.updatedName = response.data.name;// Set the existing category name to the input field
                this.updatedemail = response.data.email;
                this.updatedpassword = '';
                this.updatedphone = response.data.phone;
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
            }
        },
        
        async fetchCountPlan() {
            axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/count-plan')
                .then(response => {
                    this.count_plans = response.data.count_plan;
                })
                .catch(error => {
                    console.error('There was an error fetching the count:', error);
                });
        },
        
        async fetchCountPlanSuccess() {
            axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/count-plan_success')
                .then(response => {
                    this.count_plan_successes = response.data.count_plan_success;
                })
                .catch(error => {
                    console.error('There was an error fetching the count:', error);
                });
        },
        
        async fetchCountPlanNotYetSuccess() {
            axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/count-plan_not_yet_success')
                .then(response => {
                    this.count_plan_not_yet_successes = response.data.count_plan_not_yet_success;
                })
                .catch(error => {
                    console.error('There was an error fetching the count:', error);
                });
        },
        async fetchCountDay() {
            axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/count-day')
                .then(response => {
                    this.count_days = response.data.count_day;
                })
                .catch(error => {
                    console.error('There was an error fetching the count:', error);
                });
        },
        async fetchSumIncome() {
            axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/sum-income')
                .then(response => {
                    this.sum_incomes = response.data.sum_income;
                })
                .catch(error => {
                    console.error('There was an error fetching the count:', error);
                });
        },
        async fetchSumExpenditure() {
            axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/sum-expenditure')
                .then(response => {
                    this.sum_expenditures = response.data.sum_expenditure;
                })
                .catch(error => {
                    console.error('There was an error fetching the count:', error);
                });
        },
        async fetchSumMoneyRemaining() {
            axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/sum-money_remaining')
                .then(response => {
                    this.sum_money_remainings = response.data.sum_money_remaining;
                })
                .catch(error => {
                    console.error('There was an error fetching the count:', error);
                });
        },
        async fetchSumExpenditureToday() {
            axios.get('https://nodejs-api-daily-porchoua.onrender.com/api/sum-expenditure_today')
                .then(response => {
                    this.sum_expenditure_todays = response.data.sum_expenditure_today;
                })
                .catch(error => {
                    console.error('There was an error fetching the count:', error);
                });
        },
        
        // Other methods...
    }
};
</script>