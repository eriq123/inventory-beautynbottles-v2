<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function update(Request $request)
    {
        if ($request->isUsername) {
            $request->validate([
                'username' => 'required|unique:users',
            ]);
        } else {
            $request->validate([
                'first_name' => 'required',
                'last_name' => 'required',
            ]);
        }

        $this->data['user'] = Auth::user();
        if ($request->isUsername) {
            $this->data['user']->username = $request->username;
        } else {
            $this->data['user']->first_name = $request->first_name;
            $this->data['user']->last_name = $request->last_name;
        }
        $this->data['user']->save();

        return response()->json($this->data);
    }

    public function updatePassword(Request $request)
    {
        if (!(Hash::check($request->get('old_password'), Auth::user()->password))) {
            return response()->json(['error' => 'Current password does not match.'], 422);
        }

        // if (strcmp($request->get('old_password'), $request->get('new_password')) == 0) {
        //     return response()->json(['errors' => ['current' => ['New Password cannot be same as your current password']]], 422);
        // }

        if (!strcmp($request->get('new_password'), $request->get('new_password_confirmation')) == 0) {
            return response()->json(['error' => 'New password does not match.'], 422);
        }

        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required',
        ]);

        $this->data['user'] = Auth::user();
        $this->data['user']->password = Hash::make($request->get('new_password'));
        $this->data['user']->save();

        return response()->json($this->data);
    }
}
