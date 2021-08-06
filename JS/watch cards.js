/*
	1- create all recomend cards.
	2- create and display informations about a current movie.
*/

//create all recomeds cards
for (var i = 0; i < movies.length; i++) {

	//display only the 9 latestes movies from array movies.
	if (i >= movies.length - 9) {

	var galeria_cards = document.createElement('div')
	galeria_cards.className = "galeria-cards"
	galeria_cards.style.background = 'url('+movies[i].poster+')';
	galeria_cards.style.backgroundSize = 'contain'
	galeria_cards.style.backgroundSize = '100% 100%'
	galeria_cards.style.backgroundRepeat = 'no-repeat';
	galeria_cards.value = i;
	document.getElementById('div-galeria-cards').appendChild(galeria_cards)

	//informations about current movie
	galeria_cards.addEventListener('click', function (argument) {

		document.getElementById('movie').src = movies[argument.toElement.value].source
		document.getElementsByClassName("info_text")[0].innerHTML = movies[argument.toElement.value].name
		document.getElementsByClassName("info_text")[1].innerHTML = movies[argument.toElement.value].sinopse
		document.getElementsByClassName("info_text")[2].innerHTML = movies[argument.toElement.value].age
		document.getElementsByClassName("info_text")[3].innerHTML = movies[argument.toElement.value].time

		//create all categories in informations of movie, but no display it.
		for (var j = 0; j < category.length; j++) {
			document.getElementById('category_card' + j).style.display = 'none'
			document.getElementById('categoria_btn' + j).style.backgroundColor = '#1fbd3e'
		}

		for (var j = 0; j < category.length; j++) {

			for (var i = 0; i < movies[argument.toElement.value].categorias.length; i++) {
				//display (in informations about movie) only categories to a current movie
				if (category[j].toUpperCase() == movies[argument.toElement.value].categorias[i]) {
					document.getElementById('categoria_btn' + j).style.backgroundColor = '#1078dcb3'
					document.getElementById('category_card' + j).style.display = ''
				}
				
			}

		}

		//scroll the screen to top where are the movie video
		document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
        document.body.scrollTop = 0;
        document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'

	})

	
	//display the name of movie in a card movie.
	var nomeFilme = document.createElement('span')
	nomeFilme.className = 'nomeFilme';
	nomeFilme.innerHTML = movies[i].name
	nomeFilme.style.textOverflow = 'ellipsis'
	galeria_cards.appendChild(nomeFilme)

	}
}