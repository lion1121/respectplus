<div class="modal fade" id="myModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title text-center">Отправьте нам сообщение, Вам перезвонят</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">

                <form>
                    {{ csrf_field() }}

                    <div class="form-group row">
                        <label for="typeOperation" class="col-md-3 col-form-label">Я бы хотел(а):</label>
                        <div class="col-md-9">
                            <select type="text" name="operation" class="form-control" id="typeOperation">
                                <option value="Купить">Купить</option>
                                <option value="Продать">Продать</option>
                                <option value="Арендовать">Арендовать</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="typeObject" class="col-md-3 col-form-label">Недвижимость:</label>
                        <div class="col-md-9">
                            <select type="text" name="type" class="form-control" id="typeObject">
                                <option value="Дом">Дом</option>
                                <option value="Квартиру">Квартиру</option>
                                <option value="Участок земли">Участок земли</option>
                                <option value="Гараж">Гараж</option>
                                <option value="Коммерческое здание">Коммерческое здание</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="userphone" class="col-md-3 col-form-label">Мой номер телефона:</label>
                        <div class="col-md-9">
                            <input type="text" name="phone" required class="form-control" id="userphone"
                                   placeholder="Введите номер телефона" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-3 col-form-label">Мой email:</label>
                        <div class="col-md-9">
                            <input type="email" name="email" class="form-control" id="email"
                                   placeholder="Введите e-mail"  >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="name" class="col-md-3 col-form-label">Меня зовут:</label>
                        <div class="col-md-9">
                            <input type="text" name="name" class="form-control" id="name"
                                   placeholder="Ваше имя">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="extratext" class="col-md-3 col-form-label">Дополнительно:</label>
                        <div class="col-md-9">
                            <textarea type="text" name="extratext" class="form-control custom_textarea"
                                      id="extratext"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="storeMessage" class="btn btn-secondary new_ad_sent">Отправить</button>

                    </div>
                    <div class="alert-success w-100">
                        <p class="success_message text-center pt-2 pb-2"></p>
                    </div>
                </form>

            </div>

            <!-- Modal footer -->


        </div>
    </div>
</div>