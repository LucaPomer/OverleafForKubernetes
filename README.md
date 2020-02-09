# Overleaf for Kubernetes
Aktueller Stand:
Die neuste Version von overleaf ist "overleafWrittenManualy".
Die besteht aus 3 JAML Datein fuer mongo, redis und share-latex. 
mann muss alle 3 auf kubernetes starten damit man Overleaf oeffnen kann. 
Es gibt einen node port auf port 80

Achtung!! sharelatex hat ein MountPath:/network-ceph/lpomer/sharelatex
Der user sollte am besten gewechselt werden.

Das aktuelle Problem ist, dass wenn das Programm laeuft, nur der User der das startet die schreib und lese Rechte hat auf die Datenbanken. So koennen nicht 2 Leute auf der gleichen Datei arbeiten. Eine Idee war das Image von overleaf anzupassen, damit es die Daten dahin schreibt wo man darauf zugreifen kann. 
Der naechste Schritt ist also das overleaf Image runterzuladen, anzupassen und selber wieder zu bauen. 

Sobald overleaf in einen Ordner reinschreibt auf den man zugreifen kann hab ich schonmal ein test quellcode geschrieben,
der auf ein Filesystem zugreifen kann und eine Datei in git pusht. Siehe "node-js-git".





