<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            $table->uuid('UUID');
            $table->string('name', 100);
            $table->bigInteger('group_id')->unsigned();
            $table->string('email', 255)->unique();
            $table->string('password', 255);
            $table->rememberToken();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('accessed_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('group_id')->references('id')->on('groups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persons');
    }
}
