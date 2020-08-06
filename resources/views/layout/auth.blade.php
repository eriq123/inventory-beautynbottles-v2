<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ config('app.name') ?: "App name not found." }}">
    <meta name="keywords" content="{{ config('app.name') ?: "App name not found." }}">
    <meta name="author" content="Karen Calulo Eriq John Mendoza">

    <title>{{ config('app.name') ?: "App name not found." }}</title>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/materialize.min.css')}}">

    <link rel="stylesheet" href="{{ mix('css/app.css')}}">
</head>

<body>

    <div id="auth">
        @yield('content')
    </div>

    <script src="{{ asset('assets/materialize.min.js')}}"></script>

    <script>
    </script>
</body>

</html>