<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObjectPhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('object_photos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('object_id')->unsigned()->index()->nullable();
            $table->string('file');
            $table->timestamps();

            $table->foreign('object_id')->references('id')->on('objects')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('object_photos');
    }
}
