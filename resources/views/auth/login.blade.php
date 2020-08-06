@extends('layout.auth')

@section('content')

<div class="container">
    <div class="auth-wrapper">
        <div class="login-content">
            <div class="card">
                @include('auth.card-header')

                <div class="card-content">
                    <div class="row">
                        <form class="col s12" action="{{ route('login.post')}}" method="POST">
                            @csrf

                            <p class="red-text center-align">
                                {{ $errors->has('active') ? $errors->first('active') : '' }}
                            </p>

                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="username" type="text" name="username" class="validate" required>
                                    <label for="username" class="active">Username</label>

                                    <p class="red-text center-align">
                                        {{ $errors->has('username') ? $errors->first('username') : '' }}
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">lock</i>
                                    <input id="password" type="password" name="password" class="validate" required>
                                    <label for="password" class="active">Password</label>
                                    <p class="red-text center-align">
                                        {{ $errors->has('password') ? $errors->first('password') : '' }}
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col s12 center-align login-button">
                                    <button class="btn waves-effect waves-teal pink lighten-4" type="submit">
                                        <i class="material-icons right">send</i>
                                        Sign in
                                    </button>
                                </div>

                                <div class="col s12 center-align">
                                    <div class="register-link">
                                        Don't have an account? <a href="{{ url('register') }}">Sign up</a>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

@endsection