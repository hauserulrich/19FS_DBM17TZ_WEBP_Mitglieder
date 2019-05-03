<?php
require_once "server.php";

//return format error
//error element: table entry causing the error (missing or format problem)
function sendFormatError($error_element) {
    http_response_code(404);
    echo "error in parameters: " . $error_element;
    die(); //end of script
}

//test, if a parameter exists
function testParameter($paramName) {
    if (!array_key_exists($paramName, $_GET)) {
        sendFormatError($paramName);
    }
}

//test all parameters for existence
function testGet() {
    $parameters = ["nachname", "vorname", "geburtsdatum", "eintritt", "austritt", "von_dat", "bis_dat", "aktiv", "strasse", "strnummer", "plz", "ort", "vereinsposition", "grad", "klassifizierung"];
    foreach ($parameters as $parameter) {
        testParameter($parameter);
    }
}

try
{
    //connect
    $db = new PDO("mysql:host=$db_server;dbname=$db_name;charset=utf8", $db_user, $db_pw,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
} catch (PDOException $ex) {
    http_response_code(406);
    echo "{'error': 'connecting to db $dbname on $db_server failed'}";
    die(); //end of script
}

testGet();

$nachname = $_GET['nachname'];
$vorname = $_GET['vorname'];
$geburtsdatum = $_GET['geburtsdatum'];
$eintritt = $_GET['eintritt'];
$austritt = $_GET['austritt'];
$von_dat = $_GET['von_dat'];
$bis_dat = $_GET['bis_dat'];
$aktiv = $_GET['aktiv'];
$strasse = $_GET['strasse'];
$strnummer = $_GET['strnummer'];
$plz = $_GET['plz'];
$ort = $_GET['ort'];
$vereinsposition = $_GET['vereinsposition'];
$grad = $_GET['grad'];
$klassifizierung = $_GET['klassifizierung'];

try
{
    if (array_key_exists('m_id', $_GET)) {
        //edit member
        $m_id = $_GET['m_id'];
        $sqlQuery = "UPDATE `19FS_DBM17TZ_WEBP_Mitglieder_mitglieder` SET nachname = '$nachname', vorname = '$vorname', geburtsdatum = '$geburtsdatum', eintritt = '$eintritt', austritt = '$austritt', von_dat = '$von_dat', bis_dat = '$bis_dat', aktiv = '$aktiv', strasse = '$strasse', strnummer = '$strnummer', plz = '$plz', ort = '$ort', vereinsposition = '$vereinsposition', grad = '$grad', klassifizierung = '$klassifizierung' WHERE m_id = $m_id";
        $sql_reply = $db->query($sqlQuery);
        if ($sql_reply->rowCount() > 0) {
            echo "{'error': 'OK'}";
        } else {
            echo "{'error': 'SQL: update of member failed', 'query': '" . $sqlQuery . "'}";
        }
    } else {
        //new member
        $sqlQuery = "INSERT INTO `19FS_DBM17TZ_WEBP_Mitglieder_mitglieder` (`m_id`, `nachname`, `vorname`, `geburtsdatum`, `eintritt`, `austritt`, `von_dat`, `bis_dat`, `aktiv`, `strasse`, `strnummer`, `plz`, `ort`, `vereinsposition`, `grad`, `klassifizierung`, `erstellt`) VALUES(NULL, '$nachname', '$vorname', '$geburtsdatum', '$eintritt', '$austritt', '$von_dat', '$bis_dat', '$aktiv', '$strasse', '$strnummer', '$plz', '$ort', '$vereinsposition', '$grad', '$klassifizierung', CURRENT_TIMESTAMP)";
        $db->query($sqlQuery);
        if (null !== $db->lastInsertId()) {
            $json = "{\"m_id\":" . $db->lastInsertId() . "}";
            echo $json;
        }
    }

} catch (PDOException $ex) {
    http_response_code(406);
    echo "{'error': 'SQL: " . $ex->getMessage() . "', 'query': '" . $sqlQuery . "'}";
    die(); //end of script
}
?>
