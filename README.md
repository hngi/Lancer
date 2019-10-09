<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet'>
    <title>Lancers</title>
</head>
<style>
    /*Internal CSS using element name*/
    body {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      background-color: white;
    }

    .logo {
        font-family: 'pacifico', 'Ubuntu';
        font-size: 30pt;
        display: block;
        text-align: left;
        padding-left: 40px;
        margin-top: 20px;
    }

    .logo span {
        color: #1aedd4;
    }

    .form-body {
        padding: 30px;
        max-width: 580px;
        margin: auto;
        background-color: white;
        border: 2px solid #EAEBED;
        border-radius: 12px;
    }

    .form-body h2{
      color: #000000;
      text-align: center;
      font-size: 1.9em;
      font-family: 'Lato';
      margin-bottom: 13px;
      margin-top: 18px;
      padding-top: 8px;
    }

    form {
        position: relative;
        top: 30px;
        max-width: 500px;
        margin: auto;
        padding-bottom: 30px;
        display: grid;
        grid-template-areas:
                    'input1'
                    'input2'
                    'Reset Password';
    }

    form input {
        display: block;
        width: 100%;
        margin-top: 10px;
        height: 40px;
        border: 1px solid #EAEBED;
        border-radius: 4px;
        padding: 0 10px;
    }

    input[type=text], select {
         width: 100%;
         padding: 0 10px;
         border: 1px solid #EAEBED;
         border-radius: 4px;
         height: 45px;
        margin-top: 10px;
   }

   label {
    font-family: 'Lato';
   }

   .Reset-Password {
         background-color: #1aedd4;
         color: white;
         padding: 10px;
         outline: none;
         font-size: 1em;
         border: none;
         font-family: 'Lato';
         cursor: pointer;
         border-radius: 5px;
    }

    .Reset-Password:active{
         opacity: 0.6;
    }
</style>
<body>
       <div class="logo">Lan<span>c</span>ers</div><br>

       <div class="smallbox">
        <div class="form-body">
            <h2>Enter a new password</h2>
            <form action="">
                <div class="form-group">
                     <label for="">Password</label><br>
                     <input type="Password"><br><br>
                </div>
                <div class="form-group">
                    <label for="">Password Confirmation</label><br>
                    <input type="Password"><br>
                </div>

               <button class="Reset-Password">
                   Reset Password
               </button>
           </form>
        </div>
       </div>
</body>
</html>
