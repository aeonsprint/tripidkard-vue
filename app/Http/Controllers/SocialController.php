<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{

    public function redirectGoogle()
    {
        return response()->json(['redirect_url' => Socialite::driver('google')->redirect()->getTargetUrl()]);
    }

    public function callbackGoogle()
    {
        try {
            $google_user = Socialite::driver('google')->user();

            // Find the user by google_id
            $user = User::where('google_id', $google_user->getId())->first();

            if (!$user) {
                // If user not found by google_id, try to find by email
                $user = User::where('email', $google_user->getEmail())->first();

                if (!$user) {
                    // Extract first and last name from Google full name
                    $fullName = explode(' ', $google_user->getName(), 2);
                    $firstName = $fullName[0] ?? ''; // First name
                    $lastName = $fullName[1] ?? ''; // Last name (empty if only one name)

                    // If last name is required but empty, set a default value
                    if (empty($lastName)) {
                        $lastName = 'Unknown';
                    }

                    // Create a new user
                    $user = User::create([
                        'fname' => $firstName,
                        'lname' => $lastName,  // ✅ Add this field
                        'email' => $google_user->getEmail(),
                        'google_id' => $google_user->getId(),
                        'role' => 'Customer',
                        'status' => 1,
                    ]);
                    return redirect('/dcia?already_registered=true');

                } else {
                    // If user found by email but not by google_id, update the user
                    $user->update([
                        'google_id' => $google_user->getId(),
                    ]);
                }
            }

            Auth::login($user);
        return redirect('/dcia?already_registered=true');


        } catch (\Throwable $th) {
            dd('Something went wrong: ' . $th->getMessage());
        }
    }


    public function redirectFacebook()
    {
               // Redirect to Facebook for authentication
        return response()->json(['redirect_url' => Socialite::driver('facebook')->redirect()->getTargetUrl()]);

    }

    public function loginWithFacebook()
    {
        try {
            $facebook_user = Socialite::driver('facebook')->user();

            // Find the user by google_id
            $user = User::where('google_id', $facebook_user->getId())->first();

            if (!$user) {
                // If user not found by google_id, try to find by email
                $user = User::where('email', $facebook_user->getEmail())->first();

                if (!$user) {
                    // Extract first and last name from Google full name
                    $fullName = explode(' ', $facebook_user->getName(), 2);
                    $firstName = $fullName[0] ?? ''; // First name
                    $lastName = $fullName[1] ?? ''; // Last name (empty if only one name)

                    // If last name is required but empty, set a default value
                    if (empty($lastName)) {
                        $lastName = 'Unknown';
                    }

                    // Create a new user
                    $user = User::create([
                        'fname' => $firstName,
                        'lname' => $lastName,  // ✅ Add this field
                        'email' => $facebook_user->getEmail(),
                        'google_id' => $facebook_user->getId(),
                        'role' => 'Customer',
                        'status' => 1,
                    ]);
                    return redirect('/dcia?already_registered=true');

                } else {
                    // If user found by email but not by google_id, update the user
                    $user->update([
                        'facebook_id' => $facebook_user->getId(),
                    ]);
                }
            }

            Auth::login($user);
        return redirect('/dcia?already_registered=true');


        } catch (\Throwable $th) {
            dd('Something went wrong: ' . $th->getMessage());
        }

    }

}
