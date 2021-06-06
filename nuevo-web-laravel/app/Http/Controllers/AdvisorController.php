<?php

namespace App\Http\Controllers;

use App\Models\Advisor;
use App\Models\User;
use App\Models\Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;

class AdvisorController extends Controller
{
    public function __construct()
    {
    }

    public function list(): \Illuminate\Http\JsonResponse
    {
        $advisors = [];

        $advisors[0] = new \stdClass();
        $advisors[0]->name = '황민식';
        $advisors[0]->themes = ['Growth', 'Tech'];
        $advisors[0]->description = '테스트 어드바이저 1입니다.';

        $advisors[1] = new \stdClass();
        $advisors[1]->name = '송주영';
        $advisors[1]->themes = ['Growth', 'Dividend'];
        $advisors[1]->description = '테스트 어드바이저 2입니다.';

        $advisors[2] = new \stdClass();
        $advisors[2]->name = '임종훈';
        $advisors[2]->themes = ['Growth'];
        $advisors[2]->description = '테스트 어드바이저 3입니다.';

        return $this->_json($advisors);
    }

    private function _json(mixed $data = [], int $status = 200): \Illuminate\Http\JsonResponse
    {
        return response()->json($data, $status);
    }
}
