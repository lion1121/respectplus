<template>
    <div v-bind:class="{show: formShow}" class="modal fade">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title text-center">Відправте нам повідомлення, ми Вам передзвонимо</h4>
<!--                    <button type="button" class="close" data-dismiss="modal">&times;</button>-->
                    <button type="button" class="close" data-dismiss="modal" @click.prevent="closeForm">&times;</button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <form @submit.prevent="sendMessage">
                        <div class="form-group row">
                            <label for="typeOperation" class="col-md-3 col-form-label">Я б хотів(ла):</label>
                            <div class="col-md-9">
                                <select type="text" name="operation" class="form-control" id="typeOperation" v-model="form.objOperation" >
                                    <option>Купити</option>
                                    <option>Продати</option>
                                    <option>Арендувати</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="typeObject" class="col-md-3 col-form-label">Нерухомість:</label>
                            <div class="col-md-9">
                                <select type="text" name="type" class="form-control" id="typeObject" v-model="form.objType" >
                                    <option >Дім</option>
                                    <option >Квартиру</option>
                                    <option>Земельну ділянку</option>
                                    <option >Гараж</option>
                                    <option >Комерційну будівлю</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="userphone" class="col-md-3 col-form-label">Мій номер телефону:</label>
                            <div class="col-md-9">
                                <input type="text" name="phone" required class="form-control" id="userphone"
                                       placeholder="Введіть номер телефону" v-model="form.userPhone">
                            </div>
                            <p class="required_field text-center w-100"></p>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-md-3 col-form-label">Мій email:</label>
                            <div class="col-md-9">
                                <input type="email" required name="email" class="form-control" id="email"
                                       placeholder="Введіть e-mail" v-model="form.userEmail">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-3 col-form-label">Мене звуть:</label>
                            <div class="col-md-9">
                                <input type="text" required name="name" class="form-control" id="name"
                                       placeholder="Ваше им'я" v-model="form.userName">

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="extratext" class="col-md-3 col-form-label">Додатково:</label>
                            <div class="col-md-9">
                            <textarea required type="text" name="extratext" class="form-control custom_textarea"
                                      id="extratext" v-model="form.extraInfo"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button id="storeMessage" v-bind:class="{disabled:status}" class="btn btn-secondary new_ad_sent" >Надіслати</button>

                        </div>
                        <div class="alert-success w-100">
                            <p v-bind:class="{block:messageShow}" class="success_message text-center pt-2 pb-2">{{message}}</p>
                        </div>
                    </form>

                </div>

                <!-- Modal footer -->


            </div>
        </div>
    </div>
</template>

<script>
    import {bus} from '../app.js';

    export default {
        mounted() {

        },
        data(){
            return {
                message:'Оголошення успішно відправлено, мі з Вами зв\'яжемося!',
                status: false,
                messageShow: false,
                formShow: false,
                form: {
                    objOperation:'Купити',
                    objType:'Квартиру',
                    userPhone:'',
                    userEmail:'',
                    userName:'',
                    extraInfo:'',
                }
            }
        },
        created(){
                bus.$on('invoke', () => {
                    this.formShow = true;
                    console.log('success');
                });
        },
        methods:{
            closeForm(){
                this.formShow = false;
            },
            sendMessage(){
                this.status = true;
                this.messageShow= true;
                axios.post('/storeMessage', this.form)
                    .then(res => {
                        this.status = false;
                    })
                    .catch(function (err) {

                    });
            },
            invokeMessageform()
            {
                this.formShow = true;
            }
        }
    }
</script>

<style scoped>
    .block {
        display: block;
    }
    .show {
        display: block;
    }
</style>