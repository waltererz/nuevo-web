<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCloudsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clouds', function (Blueprint $table) {
            $table->id();
            $table->uuid('identifier');
            $table->bigInteger('person_id')->unsigned();
            $table->text('content');
            $table->integer('privacy_bounds');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('identifier')->references('identifier')->on('identifiers');
            $table->foreign('person_id')->references('id')->on('persons');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clouds');
    }
}
