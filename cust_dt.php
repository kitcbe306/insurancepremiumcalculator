<?php
 include("db.php");

 if(isset($_POST['sub']))
 {
   $firstname=$_POST['firstname'];
   $lastname=$_POST['lastname'];
   $gmail=$_POST['gmail'];
   $Gender=$_POST['gender'];
   $dob=$_POST['dob'];
   $annual_income=$_POST['annualincome'];

        $query = "insert into logindt (firstname,lastname,gmail,gender,dob,annual_income)values ('$firstname','$lastname',' $gmail','$Gender',' $dob','$annual_income')" ; 
       
        $run = mysqli_query($conn,$query);
        header("location:select.html");

        echo "<script>alert('Completed')</script>";
    
   }
   ?>
<html>
    <head>
        <link rel="stylesheet" href="cust_dt.css">
        </head>
        <body style="background-image: url(custdt.jpg)";>
           <form name="form" method="post">
               <h1>CUSTOMER DETAILS</h1>
            <input type="text" placeholder="first name" id="usewr" name="firstname" required>
            <input type="text" placeholder="last name" name="lastname" required>
            <input type="email" placeholder="gmail" name="gmail" required>
            <input type="text" placeholder="Gender" name="gender" required>
            <input type="text"  placeholder="dd/mm/yyyy" name="dob" required>
            <input type="text" placeholder="Annual Income" name="annualincome" required>
            <button type="submit" name="sub" value="submit">submit</button>
           <a href="select.html">
            already entered</a> >
         
           </form>
         
        </body>
</html>