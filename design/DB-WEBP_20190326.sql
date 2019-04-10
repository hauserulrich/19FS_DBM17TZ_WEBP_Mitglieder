CREATE TABLE mitglieder
(	  m_id INTEGER NOT NULL AUTO_INCREMENT
	, nachname VARCHAR(30) NOT NULL
	, vorname VARCHAR(30) NOT NULL
	, geburtsdatum DATE NOT NULL
	, eintritt DATE
	, austritt DATE 	
	, von_dat DATE 	
	, bis_dat DATE 	
	, aktiv BOOLEAN	
	, strasse VARCHAR(30)
	, strnummer VARCHAR(4)	
	, plz INTEGER(4)
	, ort VARCHAR(30)
	, vereinsposition VARCHAR(30)
	, grad VARCHAR(30)
	, klassifizierung VARCHAR(30)
	, erstellt TIMESTAMP
);

commit;