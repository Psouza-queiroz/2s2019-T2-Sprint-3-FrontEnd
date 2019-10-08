
CREATE DATABASE RoteiroSstop;

USE RoteiroSstop;

CREATE TABLE Estilos
(
    IdEstilo    INT PRIMARY KEY IDENTITY
    ,Nome       VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE Artistas
(
    IdArtista     INT PRIMARY KEY IDENTITY
    ,Nome		  VARCHAR(200) UNIQUE
    ,IdEstilo     INT FOREIGN KEY REFERENCES Estilos (IdEstilo)
);

	

INSERT INTO Estilos VALUES ('Folk');
INSERT INTO Artistas VALUES ('Stu Larsen', 8);

SELECT * FROM ARTISTAS;

SELECT A.IdArtista, A.Nome, A.IdEstilo, E.Nome AS NomeEstilo FROM Artistas A INNER JOIN Estilos E ON A.IdEstilo = E.IdEstilo;


DELETE  FROM Estilos