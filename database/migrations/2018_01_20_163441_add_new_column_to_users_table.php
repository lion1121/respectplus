<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewColumnToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('surname');
            $table->string('patronymic');
            $table->integer('photo_id')->unsigned()->index();
            $table->integer('is_active')->default(0);
            $table->integer('role_id');
            $table->integer('phone_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('surname');
            $table->dropColumn('patronymic');
            $table->dropColumn('photo_id');
            $table->dropColumn('is_active');
            $table->dropColumn('role_id');
            $table->dropColumn('phone_id');
            $table->dropColumn('photo_id');
        });
    }
}
