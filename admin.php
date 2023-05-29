<?php

include ("db.php");
if(isset($_POST['login_Btn'])){
{
    $email=$_POST['email'];
    $password=$_POST['password'];
    $query="select*from admin where email='$email' limit 1";
    $result=mysqli_query($conn,$query);

        if($result)
        {
            if($result && mysqli_num_rows($result)>0)
            {
                $user_data=mysqli_fetch_assoc($result);
                if($user_data['password']==$password)
                {
                    header("location:admindtls.php");
                    die;
                }
                else{
                    echo "<script type='text/javascript'>alert('wrong email or password')</script>";
                }
            }
        }
        
     }
     
}

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Admin</title>
        <style>
            *{
    font-family: "Avenir Next Condensed Medium", Calibri, "Gill Sans", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
}
body{
    height:100vh;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: url("admin.jpg");
}
form{
    background: rgba(255,255,255,0.3);
    background:rgba(255,255,255,0.3);
    box-shadow: 0 8px 32PX 0 #9160FA;
    border-top: rgb(255,255,255,.03);
    border-right: rgb(255,255,255,.03);
    flex-direction: column;
    width: 350px;
    height: 500px;
    border-radius: 30px;
    padding: 75px 50px;
    position: absolute;
    left: 80%;
    top:50%;
    transform: translate(-50%,-50%);
}
h1{
    text-align: center;
    margin-bottom: 45px;
    color: rgb(0, 0, 0);
    font-size: 40px;
}

.loginBtn:hover{
    background-position: right;
    font-size: 17px;
}
.signup{
    color: white;
    margin-top: 45px;
    text-align: center;
}
.signup a{
    color: black    ;
}
input{
    font-size: 25px;
    width: 80%;
    margin: 5% auto;
    margin-bottom: 8%;
    border: none;
    outline: none;
    background:transparent;    
    color:black;
    border-bottom: 1px solid rgb(255,255,255,0.07);
    opacity: .8;
    cursor:pointer;
}
.login_Btn{
    width: 40%;
    margin: 3% auto;
    margin-bottom: 8%;
    color:rgb(7, 7, 215);
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
    background: rgba(1, 0, 0, 0.3); 
    box-sizing: 50px;
    padding: 10px 30px;
    outline: none;
    text-shadow: 2px 2px 4px rgba(255,255,255,0.3);
    box-shadow: 3px 3px 5px  rgba(black);
    border-left: 2px solid rgb(255,255,255,.3);
    border-top: 3px solid rgb(255,255,255,.3);

}
::placeholder{
    color: black;
    font-size: 20px;
}


            </style>
    </head>
    <body>
    
        <form method="post">
            <h1>Admin</h1>
            <div class="textBoxdiv">
                <input type="text" placeholder="email" name="email">
            </div>
            <div class="textBoxdiv">
                <input type="password" placeholder="password" name="password">
            </div>
           <input type="submit" class="login_Btn" name="login_Btn" value="Login">
                </br>
                <a href="cal.php"></a>
            </div>
        </form>
    </body>
</html>
