<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function home()
    {
        return "ghghjg";
        //return view("welcome");
    }
    public function register(Request $request)
    {
        $user  = new User();
        $user->name = $request->input('name');
        $user->email = $request->email;
        $user->pays = $request->pays;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }
    public function login(Request $request)
    {
        $email = $request->email;
        $user = User::where("email", $email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return ["error" => "email or password is not matched"];
        }
        return $user;
    }
}
