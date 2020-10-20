@extends('layout.auth')

@section('content')

<div class="container">
  <div class="auth-wrapper">
    <div class="register-content">
      <div class="card">
        @include('auth.card-header')

        <div class="card-content">
          <div class="row">
            <form class="col s12" action="{{ route('register.post')}}" method="POST">
              @csrf
              <input type="hidden" name="active" value="1">
              {{-- <input type="hidden" name="role_id" value="2"> --}}
              {{-- <input type="hidden" name="role_name" value="Admin"> --}}

              <div class="row">
                <div class="input-field col s12">
                  <!-- <i class="material-icons prefix">account_circle</i> -->
                  <input id="first_name" name="first_name" type="text" class="validate" required>
                  <label for="first_name">First name</label>
                  <p class="red-text">
                    {{ $errors->has('first_name') ? $errors->first('first_name') : '' }}
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <!-- <i class="material-icons prefix">account_circle</i> -->
                  <input id="last_name" name="last_name" type="text" class="validate">
                  <label for="last_name">Last name (Optional)</label>
                  <p class="red-text">
                    {{ $errors->has('last_name') ? $errors->first('last_name') : '' }}
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <!-- <i class="material-icons prefix">account_circle</i> -->
                  <input id="username" name="username" type="text" class="validate" required>
                  <label for="username">Username</label>
                  <p class="red-text">
                    {{ $errors->has('username') ? $errors->first('username') : '' }}
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <!-- <i class="material-icons prefix">lock</i> -->
                  <input id="password" name="password" type="password" class="validate" required>
                  <label for="password">Password</label>
                  <p class="red-text">
                    {{ $errors->has('password') ? $errors->first('password') : '' }}
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <!-- <i class="material-icons prefix">lock</i> -->
                  <input id="password_confirmation" name="password_confirmation" type="password" class="validate"
                    required>
                  <label for="password_confirmation">Confirm Password</label>
                </div>
              </div>

              <div class="row">
                <div class="col s12 center-align register-button">
                  <button class="btn waves-effect waves-teal pink lighten-4" type="submit">
                    {{-- <i class="material-icons right">send</i> --}}
                    Sign Up
                  </button>
                </div>

                <div class="col s12 center-align">
                  <div class="login-link">
                    Already have an account? <a href="{{ url('login') }}">Sign in</a>
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