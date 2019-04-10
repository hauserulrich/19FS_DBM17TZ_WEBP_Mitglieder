<?php
  require_once("server.php");

  //exception handling for PDO
  try
  {
    //connect
    $db = new PDO("mysql:host=$db_server;dbname=$db_name;charset=utf8", $db_user, $db_pw,
                    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    //sql request
    $sql_reply=$db->query('SELECT * FROM 19FS_DBM17TZ_WEBP_Mitglieder_mitglieder');
    $db_data=$sql_reply->fetchAll(PDO::FETCH_ASSOC);
/*    foreach ($db_data as $key => $value)
    {
      echo $db_data[$key]['nachname'];
    }*/
    $json = json_encode($db_data);
    echo $json;
    //print rows of table
/*    $row=$sql_reply->fetch(PDO::FETCH_ASSOC);
    echo '<tr>';
    echo '<td>'.$row['nachname'].'</td><td>'.$row['vorname'].'<td>';
    echo '</tr>';*/
  }
  catch(PDOException $ex)
  {
    echo "An Error occured: "; //user friendly message
    echo $ex->getMessage();
  }
?>
