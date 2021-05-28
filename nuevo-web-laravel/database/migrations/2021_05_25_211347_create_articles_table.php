<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('article_category_id')->unsigned();
            $table->bigInteger('person_id')->unsigned();
            $table->uuid('identifier');
            $table->string('subject', 255);
            $table->longText('content');
            $table->integer('privacy_bounds');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('article_category_id')->references('id')->on('article_categories');
            $table->foreign('person_id')->references('id')->on('persons');
            $table->foreign('identifier')->references('identifier')->on('identifiers');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
