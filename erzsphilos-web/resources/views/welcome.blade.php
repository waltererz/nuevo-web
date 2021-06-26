<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Erzsphilos Web Service</title>
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
</head>

<body>
    <div id="app"></div>
    <script defer src="{{asset('js/app.js')}}"></script>
</body>

</html>