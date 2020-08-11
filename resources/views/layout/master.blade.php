<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ config('app.name') ?: "App name not found." }}">
    <meta name="keywords" content="{{ config('app.name') ?: "App name not found." }}">
    <meta name="author" content="Karen Calulo Eriq John Mendoza">

    <title>{{ config('app.name') ?: "App name not found." }}</title>

    {{-- <link rel="stylesheet" href="{{ mix('css/app.css')}}"> --}}
    <style>
        body {
            background: #eee;
            padding: 0;
            margin: 0;
        }
    </style>

</head>

<body>
    <div id="app">
        <v-app>
            <app-header-sidebar :route="{{$route}}" :user="{{$user}}"></app-header-sidebar>

            <v-main app>
                @yield('content')
            </v-main>
        </v-app>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    <script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>
</body>

</html>