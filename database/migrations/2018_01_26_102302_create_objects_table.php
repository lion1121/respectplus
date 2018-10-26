<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('objects', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->string('title');
            $table->text('body');
            $table->integer('object_type_id')->index();
            $table->integer('object_operation_id')->index();
            $table->integer('object_place_id')->index();
            $table->integer('area')->nullable();
            $table->integer('flat_count')->nullable();
            $table->timestamps();
        });

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('objects');
    }


}
