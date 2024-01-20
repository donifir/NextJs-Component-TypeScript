<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    //
    public function cekLogin()
    {
        $user=Auth::guard('sanctum')->user();
        $response = [
            'suceess' => true,
            'message' => '',
            'data' => $user
        ];
        return response()->json($response, Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function register(Request $request)
    {
        //
        $validation = Validator::make($request->all(), [
            'nama' => 'required|max:60|min:4',
            'email' => 'required|max:60|min:3|unique:users|email',
            'password' => 'required|max:60|min:8',
            'confirm_password' => 'required|max:60|min:8|same:password',
        ]);
        if ($validation->fails()) {
            $response = [
                'suceess' => false,
                'message' => $validation->errors(),
                'data' => ''
            ];
            return response()->json($response, Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $user = User::create([
                'name' => $request->nama,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
            // $token = $user->createToken($user->email . '_Token')->plainTextToken;
            $token = $user->createToken($user->email)->plainTextToken;
            $response = [
                'suceess' => true,
                'user_id' => $user->id,
                'email' => $user->email,
                'name' => $user->name,
                'token' => $token,
                'email_verified_at' => $user->email_verified_at,
                'message' => 'register Successfully',
            ];
            return response()->json($response, Response::HTTP_OK);
        }
    }
    public function login(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:191',
            'password' => 'required|min:8',
        ]);
        $user = User::where('email', $request->email)->first();
        if ($validator->fails()) {
            $response = [
                'suceess' => false,
                'messages' => $validator->errors(),
            ];
            return response()->json($response, Response::HTTP_UNPROCESSABLE_ENTITY);
        } else if (!$user || !Hash::check($request->password, $user->password)) {
            $response = [
                'suceess' => false,
                'messages' => 'invalid credensial',
            ];
            return response()->json($response, Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            // $token = $user->createToken($user->email . '_Token')->plainTextToken;
            $token = $user->createToken($user->email)->plainTextToken;
            $response = [
                'suceess' => true,
                'messages' => 'Login Succesfully',
                'name' => $user->name,
                'user_id' => $user->id,
                'token' => $token,
                'email' => $user->email,
                'email_verified_at' => $user->email_verified_at,
            ];
            return response()->json($response, Response::HTTP_OK);
        }
    }

    public function logout(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        //
        $user->tokens()->delete();
        // $request->user()->currentAccessToken()->delete();

        // $user->tokens()->where('token',$request->token)->delete();
        $response = [
            'suceess' => true,
            'messages' => 'Logot Succesfully',
            'data' => ''
        ];
        return response()->json($response, Response::HTTP_OK);
    }
}
