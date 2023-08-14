# BEISBALL GAME

Este proyecto fue realizado para aplicar los conocimientos dados en el Módulo 3 de la materia de Programación II. 
Se realizó un juego cumpliendo con las siguientes condiciones: 
 -Solo se pueden generar 3 escenas (index.html, main.js y game.js). A estas se le agrego la escena de Preload para organizar mejor la precarga de imagenes utilizadas, con la autorización de los profesores de la cátedra. 
 -Al ocurrir un choque entre la plataforma y la pelota se suma un punto a un contador, y al obtener 10 puntos se pasa de nivel. 
 -Al pasar de nivel se aumenta la velocidad de la pelota en un 10% y se generan obstaculos en ubicaciones random y con escalas aleatorias.
 -Al superar 20 niveles se consigue la victoria del juego. 
 -Todos los niveles se deben realizar dentro de la misma escena, aplicando el conocimiento adquirido sobre el uso de objetos y clases. 
 -Se sumó una condición de derrota que ocurre cuando la pelota llega al extremo inferior de la pantalla. 

El modo de juego es simple, solo hay que mover al bate con las flechas del teclado y hacer que la pelota rebote en el mismo, evitando que caiga y teniendo en cuenta que al chocar con los obstáculos cambiará su dirección. La prioridad en este trabajo no era la narrativa o la estética del juego, por lo tanto el foco se puso en el funcionamiento y la aplicación del contenido aprendido en clases. 

Para evitar generar una escena para cada nivel, se creó un metodo llamado "newLevel" que se ejecuta cada vez que el puntaje acumula 10 puntos mas, lo cual hace que la velocidad de la pelota aumente y se genere un nuevo obstaculo en la pantalla. Este uso de métodos hace que la información sea más resumida y simple de comprender y que el mismo método se utilice en niveles con diferentes propiedades, por ejemplo si en un nivel se debe aumentar en un 20% la velocidad, se usa la misma plantilla y se cambia el valor de aumento. 

Espero que disfrutes del juego! Ante cualquier duda te podés comunicar conmigo por medio de mail: biancaercole2003@gmail.com
