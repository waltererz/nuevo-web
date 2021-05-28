<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cloud extends Model
{
    use HasFactory;

    protected $table = 'clouds';
    protected $dateFormat = 'U';

    public $timestamps = true;
}
