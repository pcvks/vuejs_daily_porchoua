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
                            <h2 class="text-center text-primary text-bold">ໃບບິນບັນທຶກປະຈຳວັນ</h2> 
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
                            <p class="mr-5"><b class="text-primary">05:00-06:00</b><br><b class="text-danger">{{ five_six_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">06:00-07:00</b><br><b class="text-danger">{{ six_seven_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">07:00-08:00</b><br><b class="text-danger">{{ seven_eight_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">08:00-09:00</b><br><b class="text-danger">{{ eight_nine_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">09:00-10:00</b><br><b class="text-danger">{{ nine_ten_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">10:00-11:00</b><br><b class="text-danger">{{ ten_eleven_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">11:00-12:00</b><br><b class="text-danger">{{ eleven_twelve_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">12:00-13:00</b><br><b class="text-danger">{{ twelve_thirteen_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">13:00-14:00</b><br><b class="text-danger">{{ thirteen_fourteen_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">14:00-15:00</b><br><b class="text-danger">{{ fourteen_fifteen_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">15:00-16:00</b><br><b class="text-danger">{{ fifteen_sixteen_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">16:00-17:00</b><br><b class="text-danger">{{ sixteen_seventeen_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">17:00-18:00</b><br><b class="text-danger">{{ seventeen_eighteen_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">18:00-19:00</b><br><b class="text-danger">{{ eighteen_nineteen_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">19:00-20:00</b><br><b class="text-danger">{{ nineteen_twenty_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">20:00-21:00</b><br><b class="text-danger">{{ twenty_twentyone_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">21:00-22:00</b><br><b class="text-danger">{{ twentyone_twentytwo_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">22:00-23:00</b><br><b class="text-danger">{{ twentytwo_twentythree_dp }}</b></p>
                            <p class="mr-5"><b class="text-primary">23:00-05:00</b><br><b class="text-danger">{{ twentythree_five_dp }}</b></p>
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
import Swal from "sweetalert2";
import axios from "axios";

export default {
    name: "DailyItemComponent",
    data() {
        return {
            
            five_six_dp: '',
            six_seven_dp:'',
            seven_eight_dp:'',
            eight_nine_dp:'',
            nine_ten_dp:'',
            ten_eleven_dp:'',
            eleven_twelve_dp:'',
            twelve_thirteen_dp:'',
            thirteen_fourteen_dp:'',
            fourteen_fifteen_dp:'',
            fifteen_sixteen_dp:'',
            sixteen_seventeen_dp:'',
            seventeen_eighteen_dp:'',
            eighteen_nineteen_dp:'',
            nineteen_twenty_dp:'',
            twenty_twentyone_dp:'',
            twentyone_twentytwo_dp:'',
            twentytwo_twentythree_dp:'',
            twentythree_five_dp:'',
            day_dp: '',
            Daily_ID: null,
            dailies_d: [],
        };
    },
    created() {
        this.fetchDailyDetails();
    },
    methods: {
        // for daily
        
        // create Employee Machinist

        async fetchDailyDetails(Daily_ID) {
            this.Daily_ID = Daily_ID; // Set the current category ID
            try {
                const response = await axios.get(`https://api-note-dailes.onrender.com/api/daily/${Daily_ID}`);
                this.five_six_dp = response.data.five_six;
                this.six_seven_dp = response.data.six_seven;
                this.seven_eight_dp = response.data.seven_eight;
                this.eight_nine_dp = response.data.eight_nine;
                this.nine_ten_dp = response.data.nine_ten
                this.ten_eleven_dp = response.data.ten_eleven;
                this.eleven_twelve_dp = response.data.eleven_twelve;
                this.twelve_thirteen_dp = response.data.twelve_thirteen;
                this.thirteen_fourteen_dp = response.data.thirteen_fourteen;
                this.fourteen_fifteen_dp = response.data.fourteen_fifteen;
                this.fifteen_sixteen_dp = response.data.fifteen_sixteen;
                this.sixteen_seventeen_dp = response.data.sixteen_seventeen;
                this.seventeen_eighteen_dp = response.data.seventeen_eighteen;
                this.eighteen_nineteen_dp = response.data.eighteen_nineteen;
                this.nineteen_twenty_dp = response.data.nineteen_twenty;
                this.twenty_twentyone_dp = response.data.twenty_twentyone;
                this.twentyone_twentytwo_dp = response.data.twentyone_twentytwo;
                this.twentytwo_twentythree_dp = response.data.twentytwo_twentythree;
                this.twentythree_five_dp = response.data.twentythree_five;
                this.day_dp = response.data.days;
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
            }
        },
        
        // Other methods...
    }
};
</script>