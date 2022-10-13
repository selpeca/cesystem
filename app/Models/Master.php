<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Master extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'key',
        'name',
        'value',
        'parent_id',
        'hierarchy_id',
        'hierarchy_second_id',
        'description',
        'is_active',
        'created_by',
        'udpated_by',
        'deleted_by',
    ];
}
