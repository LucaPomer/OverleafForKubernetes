Aktueller Stand:
Die neuste Version von overleaf ist "overleafWrittenManualy".
Die besteht aus 3 JAML Datein fuer mongo, redis und share-latex. 
mann muss alle 3 auf kubernetes starten damit man Overleaf oeffnen kann. 
Es gibt einen node port auf port 80

Achtung!! sharelatex hat ein MountPath:/network-ceph/lpomer/sharelatex
Der user sollte am besten gewechselt werden.

Das aktuelle Problem ist dass wenn das Programm laeuft nur der User der das startet die schreib und lese rechte hat auf die Datenbanken. Eine Idee war das Image von overleaf anzupassen, damit es die daten dahin schreibt wo man darauf zugreifen kann. 
Leider hab ich es nicht geschafft das overleaf Image runterzuladen und selber wieder zu bauen.. 

Sobald overleaf in einen Ordner reinschreibt auf den man zugreifen kann hab ich schonmal ein test quellcode geschrieben,
der auf ein Filesystem zugreifen kann und eine Datei in git pusht. Siehe "node-js-git".





