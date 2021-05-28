<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Identifier extends Model
{
    use HasFactory;

    protected $table = 'identifiers';
    protected $dateFormat = 'U';

    public $timestamps = true;
}
