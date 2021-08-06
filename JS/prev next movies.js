
/*
	create all cards movies
	create all index movies buttons.
*/

//create all cards movies displayed.
for (var i = 0; i < movies.length; i++) {

	var watch_link = document.createElement('a')
	watch_link.href = 'watch.html';
	watch_link.target = '_banck'+i;
	document.getElementById('div-galeria-cards-movies').appendChild(watch_link)

	var movie_galeria_cards = document.createElement('div')
	movie_galeria_cards.className = "galeria-cards"
	movie_galeria_cards.id = 'movie_galeria_cards' + i;
	movie_galeria_cards.style.background = 'url('+movies[i].poster+')';
	movie_galeria_cards.style.backgroundSize = 'contain'
	movie_galeria_cards.style.backgroundSize = '100% 100%'
	movie_galeria_cards.style.backgroundRepeat = 'no-repeat';
	movie_galeria_cards.value = i;

	//this define how much elements will show on screen.
	if (i > 8) {
		movie_galeria_cards.style.display = 'none';
	}

	watch_link.appendChild(movie_galeria_cards)

	movie_galeria_cards.addEventListener('click',function (argument) {
		
		//THIS COMENTS BLOCK IS USEFUL FOR FUTURE TEST.

			// movies[argument.toElement.value].name
			// movies[argument.toElement.value].sinopse
			// movies[argument.toElement.value].age
			// movies[argument.toElement.value].time
			// movies[argument.toElement.value].source
			/*
			alert(localStorage.getItem('name')+' \n ' + 
				  localStorage.getItem('sinopse') +' \n '+
				  localStorage.getItem('age') +' \n '+
				  localStorage.getItem('source') +' \n '+
				  localStorage.getItem('time') +' \n ')
			*/

		//clear all informations in local storage browser. is REALLY important.
		localStorage.clear();

		localStorage.setItem('source', movies[argument.toElement.value].source)
		localStorage.setItem('name', movies[argument.toElement.value].name)
		localStorage.setItem('sinopse', movies[argument.toElement.value].sinopse)
		localStorage.setItem('age', movies[argument.toElement.value].age)
		localStorage.setItem('time', movies[argument.toElement.value].time)
		localStorage.setItem('movie_i', argument.toElement.value)

	})

	

	var movie_nomeFilme = document.createElement('span')
	movie_nomeFilme.className = 'nomeFilme';
	movie_nomeFilme.innerHTML = movies[i].name
	movie_nomeFilme.style.textOverflow = 'ellipsis'
	movie_galeria_cards.appendChild(movie_nomeFilme)

} //end of for (var i = 0; i < movies.length; i++)

//creating index buttons (movies.length / numbers of cards).
for (var i = 1; i < movies.length/9+1; i++) {

	//the index_movie_btn.value is REALLY important.
	var index_movie_btn = document.createElement('button')
	index_movie_btn.className = 'prev_next';
	index_movie_btn.value = i;
	index_movie_btn.innerHTML = i;
	document.getElementById('div_prev_next').appendChild(index_movie_btn);

	//if you want more buttons, change this.
	if (i > 5) {
		index_movie_btn.style.display = 'none'
	}
}







//when button SHOW ALL INDEX'S clicked, will recive 1.
var index_actived = 0;

//show all index list of movies button
document.getElementById('all_index').addEventListener('click', function(){
		
		if (document.getElementById('all_index').innerHTML == "SHOW ALL INDEX'S") {
			
			//hide the div of SHOW ALL INDEX'S button
			$('#div_all_index').hide(500)


			for (var i = 0; i < document.getElementsByClassName('prev_next').length; i++) {

				//show all index list of movies button
				document.getElementsByClassName('prev_next')[i].style.display = '';
			}
		}
	
	index_actived = 1;


})










var aux = 0;

for (var i = 0; i < document.getElementsByClassName('prev_next').length; i++) {

	document.getElementsByClassName('prev_next')[i].addEventListener('click', function (argument) {

	//hiding all elementes (except the result elementes)
	for (var i = 0; i < movies.length; i++) {
		$('#movie_galeria_cards' + i).hide()
	}

	for (var i = 1; i < movies.length/9+1; i++) {

		//index list of movies button
		var btn = document.getElementsByClassName('prev_next')[i-1]

		//the index list of movies will ever be between 2 numbers.
		if (parseInt(btn.value) <= parseInt(argument.toElement.value)+2 && parseInt(btn.value) >= parseInt(argument.toElement.value)-2) {
			btn.style.display = '';
		}

		else {
			//if SHOW ALL INDEX'S button not clicked.
			if (index_actived == 0) {

				btn.style.display = 'none'
			}
		}
	}
	

		
		if (argument.toElement.value * 9 < movies.length) {

			for (var i = (argument.toElement.value * 9) - 9; i < movies.length; i++) {
				
				aux++
				
				if (aux <= 9) {
					
					$('#movie_galeria_cards' + i).show(900)

					document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
		            window.scrollTo(0, document.getElementById('div-galeria-cards-movies').offsetTop);
		            document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
				}
				
			}

			aux = 0;
		}

		else {
			for (var i = movies.length - 9; i < argument.toElement.value * 9; i++) {

				$('#movie_galeria_cards' + i).show(900)

				document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
		        window.scrollTo(0, document.getElementById('div-galeria-cards-movies').offsetTop);
		        document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
			}
		}
	})
}
