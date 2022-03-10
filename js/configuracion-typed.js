	var typed = new Typed('.typed', {
		strings: [
			  `<h3 class="habilidades_title" style="color: var(--third-color);"><span class="sintaxis">const</span> otrasAptitudes <span class="sintaxis">= [</span></h3>
			  <ul class="habilidades-lista">
			  <li class="valor-array">"Disciplina de estudio"<span style="color:gray;font-size:1.5rem">,</span></li>
			  <li class="valor-array">"Comunicación"<span style="color:gray;font-size:1.5rem">,</span></li>
			  <li class="valor-array">"Me gusta enseñar y compartir mis conocimientos"<span style="color:gray;font-size:1.5rem">,</span></li>
			  <li class="valor-array">"Empatía y trabajo en equipo"<span style="color:gray;font-size:1.5rem">,</span></li>
			  </ul>
			  <h3 class="sintaxis">]</h3>`
		],
	
		typeSpeed: 50, // Velocidad en milisegundos para poner una letra,
		startDelay: 30, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
		backSpeed: 20, // Velocidad en milisegundos para borrar una letra,
		smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
		shuffle: false, // Alterar el orden en el que escribe las palabras.
		backDelay: 10, // Tiempo de espera despues de que termina de escribir una palabra.
		loop: true,// Repetir el array de strings
		loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
		showCursor: false, // Mostrar cursor palpitanto
		cursorChar: '|', // Caracter para el cursor
		contentType: 'html', // 'html' o 'null' para texto sin formato
	})
