<html>
    <head>
  <style>
    body{ height: 100vhss;
        background-size: cover;
        background-position: center;
        background-image: url("dd.jpg");
    }
    
   *{
    padding: 0;
    margin: 0%;
    font-family: 'Times New Roman', Times, serif;
    box-sizing: border-box;
    }
    
    header{
        width: 100%;
        height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 10%;
        background: rgba(0,0,0,.2);
    }
    .logo{
        font-size:30PX;;
        font-weight: bold;
        color: red;
        padding-right: 2cm;
        letter-spacing: 1.5px;
        cursor: pointer ;
    }
    nav li{
        display: inline-block;
        list-style: none;
        color: black;
        padding: 0px 20px;
    }
    a,button{
    
        font-size: 12px;
        font-weight: 500;
        color: burlywood;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        height: 25px;
        background: black;
        border: 2px solid blue;
        border-radius: 10px;
        padding: 9px 15px;
        margin-left: 25.5cm;
        
    }
    label{
        margin-left: 25cm;
        color: goldenrod;
    }
    
    
    input{
        width: 80%;
        margin: 5% auto;
        margin-bottom: 8%;
        font-size: medium;
        border-radius: 10px;
        background:transparent;    
        color:black;
        cursor: pointer;
    }
    select{
        height: 25px;
        text-align: center;
        align-items: center;
        border-radius: 3px;
        color: burlywood;
        margin-left: 25.5cm;
        
    }
    .tresponse{

        max-width: 900px;
        border-color:black ;
        background-color:#fff;  
        padding: 15px;
        overflow: auto;
        margin: auto;
        border-radius: 4px;
   }
   
   table th{
       
       position: sticky;
       
       font-size: 20px;
       border: 1px solid #fff;
       color:black;
       text-align: center;

   }
   
   
   
   table td{
    
    
    font-size: 20px;
       border: 1px solid #fff;
       color:white;
       text-align: center;
    
   }
   
   table
   {
    width: 70%;
    height: 70%;
    top: 30%;
    
   }
   table.fixed {
        table-layout: fixed;
    }
    h1{
        color:white;
        
        
    }
   
    </style>
    </head>
    <body>
        <div>
        <header>
            <div class="logo">
             <p>LIFECOVERAGE</p>
            </div>
            <nav> 
                <ul>
               <li><a href="homepg.html">GO TO MAIN</a></li> 
            </ul>
            </nav>
        </header>
    </div>
    <center><h1>USER DETAILS</h1></center>
            
            <table>
            
            <tr>
                <th>firstname</th>
                <th>lastname</th>
                <th>Email</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Annual Income</th>
            </tr>
            <tr>
            <?php

               include ("db.php");
            
                  $sql = "select * from logindt";
                  $result = $conn-> query($sql);

                       if($result->num_rows > 0) 
                        {
                            while(($row = $result-> fetch_assoc()))
                            {
                                echo "<tr><td>". $row["firstname"] ."</td><td>".$row["lastname"]."</td><td>".$row["gmail"]."</td><td>".$row["gender"]."</td><td>".$row["dob"]."</td><td>".$row["annual_income"]."</td></tr>"; 
                            }
                            echo "</table>";
                        }
                        else
                        {
                            echo "Sorry ,there is no data";
                        }
                        $conn-> close();
?>
            </tr>
            </table>
        </center>
    </body>
</html>