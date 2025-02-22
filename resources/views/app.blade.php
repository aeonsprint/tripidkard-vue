<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TripidKard</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Onest&display=swap" rel="stylesheet">

    <link rel="icon" href="{{ asset('/storage/img/logo.jpg') }}" type="image/x-icon">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body >

    <div id="app">
        <router-view></router-view>
    </div>

</body>

</html>
