<?php
 include("db.php");

 if(isset($_POST['sub']))
 {
   $name=$_POST['name'];
   $email=$_POST['email'];
   $feedback=$_POST['feedback'];
   $query = "insert into feedback (name,email,feedback)values ('$name','$email','$feedback')"; 
   $run = mysqli_query($conn,$query);
   echo "<script>alert('Thankyou for your feed back')</script>";
 }
 ?>
        
        
        <html>
    <head>
        <title>feedback</title>
        <style>
           body{

         background-image:url("about.jpg");
         background-repeat: no-repeat;
         background-size:  cover;
                   }
                   h1{
                    color: aliceblue;
                    font-size: 50px;
                   }
                   form{
                    transition: transparent;
                    border-color: black;
                    border: cadetblue ;
                   }
                   #fb{
                    color: transparent;
                    
                   }
                   input{
                    padding: 10px;
                    background-color: transparent;
                    width: 20%;
                    
                   }
                   #txt{
                    background:transparent;
                     color: aliceblue;
                     padding: 45px;
                     border-color: black;
                     width: 20%;
                
                   }
                   ::placeholder{
                    color: black;
                   }
                   button{
                     background-color: black;
                     color: white;
                     padding: 15px;
                     width: 10%;
                   }
                   #back{
                      border-radius: 10%;
                      width:5%;
                      padding: 10px;
                      color: white;
                      background-color: transparent;

                   }
                   
         </style>
    </head>
    <body>
    <input  id="back" type="button" value="Go back!" onclick="history.back()">
       <center><h1>FEEDBACK</h1>
       <form method="POST">
       <div id="fb">
        
        <input type="text" placeholder="Enter your name" name="name"><br><br>
        <input type="email" placeholder="Enter your mail" name="email"><br><br>
        <input type="textarea" id="txt" name="feedback" placeholder="enter your feed back" cols="20" rows="20"><br><br>
        <br><button type="submit"name="sub">Submit</button>
    
       </div>
       </form></center> 
    </body>
</html>