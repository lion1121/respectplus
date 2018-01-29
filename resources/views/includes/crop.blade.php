
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-target="#modal" id="addUserPhoto" data-toggle="modal">
    Добавить фото пользователя
</button>

<!-- Modal -->
<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Cropper</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="img-container">
                    <img src="" alt="Picture" id="image"  class="" style="width: 100%; height: auto">
                </div>
            </div>
            <div class="modal-footer">
                <label for="">
                    <input type="file" class="btn btn-info" name="img" id="imgAdd" >
                </label>
                <button id="saveImg" type="button" class="btn btn-success" >Save</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

            </div>
        </div>
    </div>
</div>

