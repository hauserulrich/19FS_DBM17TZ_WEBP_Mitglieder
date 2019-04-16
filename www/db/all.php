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
    //get data
    $db_data=$sql_reply->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($db_data);
    //return data
    echo $json;
  }
  catch(PDOException $ex)
  {
    echo "An Error occured: "; //user friendly message
    echo $ex->getMessage();
  }
?>
