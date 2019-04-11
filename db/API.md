# WEB-API of DB, technical documentation, project 19FS_DBM17TZ_WEBP_Mitglieder

## DB template
The DB structure is available in the file DB-WEBP.sql

## Access
At present, only the full database can be requested.
It consists of a single table of club members.

The returned data format is JSON.
Each record is presented as a collection of key-value pairs with the field name as key.
The complete DB representation is an array of records.

The access is located at `db/all.php` as a relative address to the address of the web page itself.
At present this address ist [http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_Mitglieder/db/all.php](URL).
