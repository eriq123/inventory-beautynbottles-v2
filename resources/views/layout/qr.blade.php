<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ config('app.name') ?: "App name not found." }}">
    <meta name="keywords" content="{{ config('app.name') ?: "App name not found." }}">
    <meta name="author" content="Karen Calulo Eriq John Mendoza">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>{{ config('app.name') ?: "App name not found." }}</title>
    @yield('css')
</head>

<body>
    <div id="app">
        @yield('content')

    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    @yield('js')
</body>

</html>