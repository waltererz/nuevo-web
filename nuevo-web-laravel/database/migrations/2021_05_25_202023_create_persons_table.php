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
            $table->uuid('uuid');
            $table->string('unique_code', 255)->unique();
            $table->string('name', 100);
            $table->string('email', 255)->unique();
            $table->bigInteger('group_id')->unsigned();
            $table->text('remember_tokens')->nullable();
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
