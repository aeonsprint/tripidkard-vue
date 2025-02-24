<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Notification</title>
    <style type="text/css">
        body, table, td {
            font-family: Arial, sans-serif;
        }
        .email-container {
            width: 100%;
            background-color: #f7fafc;
            padding: 20px;
        }
        .email-content {
            max-width: 600px;
            background-color: #ffffff;
            margin: 0 auto;
            padding: 40px;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .email-footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #718096;
        }
        .password-container {
            text-align: center;
            background-color: #f9f9f9;
            padding: 5px;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            margin-top: 20px;
        }
        .password-text {
            font-size: 30px;
            font-weight: bold;
            color: #4CAF50;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-content">
            <div class="logo">
                <!-- Updated image URL -->
                {{-- <img src="{{ asset('/storage/img/logo.jpg') }}" alt="Tripidkard Logo" width="150"> --}}
            </div>
            <h1>Account Notification</h1>
            <p>Thank you for using Tripidkard. Below are the details of your updated account status:</p>
            <p>Here is your Password:</p>
            <div class="password-container">
                <!-- Password displayed in larger, bold text -->
                <h1 class="password-text">{{ $mailMessage }}</h1>
            </div>
            <p style="margin-top: 20px;">Email: {{ $email }}</p>
            <p>Thank you,<br>The Tripidkard Team</p>
        </div>
        <div class="email-footer">
            <p>&copy; 2024 Tripidkard. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
