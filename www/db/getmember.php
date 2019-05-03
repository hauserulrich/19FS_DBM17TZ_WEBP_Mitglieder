<?php
require_once "server.php";

if (!array_key_exists('m_id', $_GET)) {
//error
    http_response_code(406);
    echo "{'error': 'missing parameter m_id'}";
    die(); //end of script
}

$m_id = $_GET['m_id'];

//exception handling for PDO
try
{
    //connect
    $db = new PDO("mysql:host=$db_server;dbname=$db_name;charset=utf8", $db_user, $db_pw,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    //sql request
    $sql_query = 'SELECT * FROM 19FS_DBM17TZ_WEBP_Mitglieder_mitglieder WHERE m_id=' . $_GET['m_id'];
    $sql_reply = $db->query($sql_query);
    $db_data = $sql_reply->fetchAll(PDO::FETCH_ASSOC);
    //prepare response
    $json = json_encode($db_data);
    echo $json;
} catch (PDOException $ex) {
    http_response_code(406);
    echo "{'error': 'SQL: " . $ex->getMessage() . "'}";
    die(); //end of script
}
?>
