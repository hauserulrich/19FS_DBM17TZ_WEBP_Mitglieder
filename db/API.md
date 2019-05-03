# WEB-API of DB, technical documentation, project 19FS_DBM17TZ_WEBP_Mitglieder

## Data format:
The returned data format is JSON.

## DB template
The DB structure is available in the file DB-WEBP.sql
The returned JSON objects adhere to the column headers corresponding to the SQL query matching the http request.

## Access
all URL's are given as a php target in the folder `db` of the web page itself
Example URL: `all.php` -> location: `http://server/db/all.php`
At present the server is located at: http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder
### Full database
URL: `all.php` (HTTP GET).
Each record is presented as a collection of key-value pairs with the field name as key.
The complete DB representation is an array of records.

### Single member
URL: `getmember.php?id=value` (HTTP GET).
The member is returned as a JSON object.
return: member or error object

### register or adjust a member
URL: `setmember.php` (HTTP GET).
The member fields are given in the form `setmember.php?m_id=value&vorname=value& ...`
If adjusting a member, the id must be included in the member given in the request.
Otherwise a new member will be registered and an automatic id assigned to it.
The id of the new member will be returned as JSON `{m_id: new-id}`.
return: statement object

* in case of success, the id of the new member is returned
* in case of failure the statement holds error information

Example for a new member: `setmember.php?nachname=Walter&vorname=Karl&geburtsdatum=1989-12-03&eintritt=2005-03-07&austritt=2008-08-02&von_dat=2006-12-08&bis_dat=2007-01-01&aktiv=true&strasse=Grenzweg&strnummer=17&plz=2503&ort=Bootshausen&vereinsposition=Kassier&grad=8.Dan&klassifizierung=Senior Trainer`

Example for a member editing: `setmember.php?m_id=1&nachname=Walter&vorname=Karl&geburtsdatum=1989-12-03&eintritt=2005-03-07&austritt=2008-08-02&von_dat=2006-12-08&bis_dat=2007-01-01&aktiv=true&strasse=Grenzweg&strnummer=17&plz=2503&ort=Bootshausen&vereinsposition=Kassier&grad=8.Dan&klassifizierung=Senior Trainer`