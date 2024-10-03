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
                        <a href="#" class="btn btn-primary" data-toggle="modal"
                                            data-target="#modal-insert"><i class="fas fa-plus mr-2"></i>ເພີ່ມການບັນທຶກ</a>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/dashboard">ໜ້າຫຼັກ</router-link></li>
                            <li class="breadcrumb-item active">ຊີວິດປະຈຳວັນ</li>
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
                    <div class="col-md-12" style="overflow: auto;">
                        <table class="table table-striped ">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>5:00- 6:00</th>
                                    <th>6:00- 7:00</th>
                                    <th>7:00- 8:00</th>
                                    <th>8:00- 9:00</th>
                                    <th>9:00- 10:00</th>
                                    <th>10:00- 11:00</th>
                                    <th>11:00- 12:00</th>
                                    <th>12:00- 13:00</th>
                                    <th>13:00- 14:00</th>
                                    <th>14:00- 15:00</th>
                                    <th>15:00- 16:00</th>
                                    <th>16:00- 17:00</th>
                                    <th>17:00- 18:00</th>
                                    <th>18:00- 19:00</th>
                                    <th>19:00- 20:00</th>
                                    <th>20:00- 21:00</th>
                                    <th>21:00- 22:00</th>
                                    <th>22:00- 23:00</th>
                                    <th>23:00- 5:00</th>
                                    <th>ມື້ວັນ</th>
                                    <th>ວັນທີ່ & ເວລາ</th>
                                    <th>ປຸ່ມຄຳສັ່ງ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(daily_d, index) in dailies_d" :key="daily_d.id">
                                        <td>{{ index + 1 }}</td>
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
                                        <td>{{ daily_d.days }}</td>
                                        <td><b class="text-success">{{ daily_d.timestamp }}</b></td>
                                        <td><button href="#" class="btn btn-warning" data-toggle="modal"
                                                @click="fetchDailyDetails(daily_d.id)" data-target="#modal-lg"><i
                                                    class="fas fa-edit"></i></button><button
                                                @click="confirmDelete_d(daily_d.id)" class="btn btn-danger"><i
                                                    class="fas fa-times"></i></button>
                                                    <button href="#" class="btn btn-success" data-toggle="modal"
                                                @click="fetchDailyDetails(daily_d.id)" data-target="#modal-view"><i
                                                    class="fas fa-eye"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="modal fade" id="modal-lg">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header bg-info">
                                <h4 class="modal-title">ແກ້ໄຂຂໍ້ມູນກິດຈະກຳ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="updateDaily">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-4">
                                            <label for="">5:00 - 6:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="five_six_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">6:00 - 7:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="six_seven_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">7:00 - 8:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="seven_eight_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">8:00 - 9:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eight_nine_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">9:00 - 10:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="nine_ten_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">10:00 - 11:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="ten_eleven_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">11:00 - 12:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eleven_twelve_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">12:00 - 13:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twelve_thirteen_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">13:00 - 14:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="thirteen_fourteen_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">14:00 - 15:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="fourteen_fifteen_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">15:00 - 16:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="fifteen_sixteen_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">16:00 - 17:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="sixteen_seventeen_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">17:00 - 18:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="seventeen_eighteen_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">18:00 - 19:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eighteen_nineteen_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">19:00 - 20:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="nineteen_twenty_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">20:00 - 21:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twenty_twentyone_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">21:00 - 22:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentyone_twentytwo_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">22:00 - 23:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentytwo_twentythree_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">23:00 - 5:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentythree_five_dp"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">ວັນ<span class="text-danger">*</span></label>
                                            <select name="" id="" class="form-control" required v-model="day_dp">
                                                <option value="">-- ກະລຸນາເລືອກ --</option>
                                                <option value="ຈັນ">-- ຈັນ --</option>
                                                <option value="ອັງຄານ">-- ອັງຄານ --</option>
                                                <option value="ພຸດ">-- ພຸດ --</option>
                                                <option value="ພະຫັດ">-- ພະຫັດ --</option>
                                                <option value="ສຸກ">-- ສຸກ --</option>
                                                <option value="ເສົາ">-- ເສົາ --</option>
                                                <option value="ທິດ">-- ທິດ --</option>
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
                <div class="modal fade" id="modal-insert">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header bg-primary">
                                <h4 class="modal-title">ເພີ່ມຂໍ້ມູນກິດຈະກຳ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="createDaily_d">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-4">
                                            <label for="">5:00 - 6:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="five_six_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">6:00 - 7:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="six_seven_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">7:00 - 8:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="seven_eight_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">8:00 - 9:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eight_nine_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">9:00 - 10:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="nine_ten_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">10:00 - 11:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="ten_eleven_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">11:00 - 12:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eleven_twelve_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">12:00 - 13:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twelve_thirteen_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">13:00 - 14:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="thirteen_fourteen_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">14:00 - 15:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="fourteen_fifteen_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">15:00 - 16:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="fifteen_sixteen_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">16:00 - 17:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="sixteen_seventeen_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">17:00 - 18:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="seventeen_eighteen_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">18:00 - 19:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eighteen_nineteen_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">19:00 - 20:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="nineteen_twenty_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">20:00 - 21:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twenty_twentyone_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">21:00 - 22:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentyone_twentytwo_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">22:00 - 23:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentytwo_twentythree_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">23:00 - 5:00 <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentythree_five_d"
                                                placeholder="ກະລຸນາປ້ອນສິ່ງທີ່ກະທຳ">
                                        </div>
                                        <div class="form-group ml-4">
                                            <label for="">ວັນ<span class="text-danger">*</span></label>
                                            <select name="" id="" class="form-control" required v-model="day_d">
                                                <option value="">-- ກະລຸນາເລືອກ --</option>
                                                <option value="ຈັນ">-- ຈັນ --</option>
                                                <option value="ອັງຄານ">-- ອັງຄານ --</option>
                                                <option value="ພຸດ">-- ພຸດ --</option>
                                                <option value="ພະຫັດ">-- ພະຫັດ --</option>
                                                <option value="ສຸກ">-- ສຸກ --</option>
                                                <option value="ເສົາ">-- ເສົາ --</option>
                                                <option value="ທິດ">-- ທິດ --</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-primary">ບັນທຶກ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <div class="modal fade" id="modal-view">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header bg-success">
                                <h4 class="modal-title">ລາຍລະອຽດ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            
                                <div class="modal-body">
                                    <div class="row">
                                        <p class="mr-5"><b class="text-success">05:00-06:00</b><br><b class="text-danger">{{ five_six_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">06:00-07:00</b><br><b class="text-danger">{{ six_seven_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">07:00-08:00</b><br><b class="text-danger">{{ seven_eight_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">08:00-09:00</b><br><b class="text-danger">{{ eight_nine_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">09:00-10:00</b><br><b class="text-danger">{{ nine_ten_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">10:00-11:00</b><br><b class="text-danger">{{ ten_eleven_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">11:00-12:00</b><br><b class="text-danger">{{ eleven_twelve_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">12:00-13:00</b><br><b class="text-danger">{{ twelve_thirteen_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">13:00-14:00</b><br><b class="text-danger">{{ thirteen_fourteen_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">14:00-15:00</b><br><b class="text-danger">{{ fourteen_fifteen_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">15:00-16:00</b><br><b class="text-danger">{{ fifteen_sixteen_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">16:00-17:00</b><br><b class="text-danger">{{ sixteen_seventeen_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">17:00-18:00</b><br><b class="text-danger">{{ seventeen_eighteen_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">18:00-19:00</b><br><b class="text-danger">{{ eighteen_nineteen_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">19:00-20:00</b><br><b class="text-danger">{{ nineteen_twenty_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">20:00-21:00</b><br><b class="text-danger">{{ twenty_twentyone_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">21:00-22:00</b><br><b class="text-danger">{{ twentyone_twentytwo_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">22:00-23:00</b><br><b class="text-danger">{{ twentytwo_twentythree_dp }}</b></p>
                                    <p class="mr-5"><b class="text-success">23:00-05:00</b><br><b class="text-danger">{{ twentythree_five_dp }}</b></p> 
                                    <p class="mr-5"><b class="text-success">ວັນ</b><br><b class="text-danger">{{ day_dp }}</b></p> 
                                    </div>
                                </div>
                                <div class="modal-footer w-100">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">ຍົກເລີກ</button>
                                    
                                </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
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
    name: "DailyComponent",
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
        this.fetchDaily_d();
    },
    methods: {
        // for daily
        async fetchDaily_d() {
            try {
                const response = await axios.get('https://api-note-dailes.onrender.com/api/daily');
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
                const response = await axios.post('https://api-note-dailes.onrender.com/api/create-daily', {
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
                    days: this.day_d,
                    timestamp: this.timestamp
                });
                console.log(response.data);
                // alert('Employee added successfully');
                this.showSuccessMessage();
                // Optionally, you can fetch the updated list of sale employees after adding a new employee
                this.fetchDaily_d();
                this.resetDaily_d_Form();
            } catch (error) {
                console.error('Error creating employee:', error.data.response);
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
                const response = await axios.delete(`https://api-note-dailes.onrender.com/api/delete-daily/${Daily_ID}`);
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
        async updateDaily() {
            try {
                const response = await axios.put(`https://api-note-dailes.onrender.com/api/update-daily/${this.Daily_ID}`, {
                    five_six: this.five_six_dp,
                    six_seven: this.six_seven_dp,
                    seven_eight: this.seven_eight_dp,
                    eight_nine: this.eight_nine_dp,
                    nine_ten: this.nine_ten_dp,
                    ten_eleven: this.ten_eleven_dp,
                    eleven_twelve: this.eleven_twelve_dp,
                    twelve_thirteen: this.twelve_thirteen_dp,
                    thirteen_fourteen: this.thirteen_fourteen_dp,
                    fourteen_fifteen: this.fourteen_fifteen_dp,
                    fifteen_sixteen: this.fifteen_sixteen_dp,
                    sixteen_seventeen: this.sixteen_seventeen_dp,
                    seventeen_eighteen: this.seventeen_eighteen_dp,
                    eighteen_nineteen: this.eighteen_nineteen_dp,
                    nineteen_twenty: this.nineteen_twenty_dp,
                    twenty_twentyone: this.twenty_twentyone_dp,
                    twentyone_twentytwo: this.twentyone_twentytwo_dp,
                    twentytwo_twentythree: this.twentytwo_twentythree_dp,
                    twentythree_five: this.twentythree_five_dp,
                    days: this.day_dp
                });
                console.log(response.data);
                // Handle successful update (e.g., show success message, navigate to another page)
                // alert('Category updated successfully');
                this.showUpdateSuccessMessage();
                this.$router.push('/daily'); // Navigate to categories list or another appropriate page
            } catch (error) {
                console.error(error.response.data);
                // Handle error (e.g., show error message)
                alert('Failed to update daily');
            }
        }
        // Other methods...
    }
};
</script>