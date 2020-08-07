<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginView()
    {
        return view('auth.login');
    }

    public function registerView()
    {
        return view('auth.register');
    }

    public function login(Request $request)
    {
        $username = $request->username;
        $password = $request->password;

        // if (Auth::attempt(['username' => $username, 'password' => $password, 'active' => 1])) {
        if (Auth::attempt(['username' => $username, 'password' => $password])) {
            return redirect('/');
        }

        $this->data['user'] = User::where('username', $request->username)->first();
        if (!$this->data['user']) {
            return redirect()->back()->withErrors(['username' => 'Username is incorrect.']);
        }

        if (!Hash::check($request->password, $this->data['user']->password)) {
            return redirect()->back()->withErrors(['password' => 'Password is incorrect.']);
        }

        // if (!$this->data['user']->active) {
        //     return redirect()->back()->withErrors(['active' => 'Your account is not active yet. Please contact admin for support.']);
        // }

        return redirect()->back();
    }

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'username' => 'required|unique:users',
            'password' => 'required|confirmed'
        ]);

        $user = User::create(request(['first_name', 'last_name', 'username', 'password', 'active']));
        // $user = User::create(request(['first_name', 'last_name', 'username', 'password', 'active', 'role_id', 'role_name']));

        // active is set to 1 by default
        // Auth::login($user);

        return redirect()->back();
    }

    public function logout()
    {
        Auth::logout();

        return redirect('/');
    }
}
