/*
	create card movies of search/categories.
*/


//creating cards movie
for (var i = 0; i < movies.length; i++) {

	var watch_link = document.createElement('a')
	watch_link.href = 'watch.html';
	watch_link.target = '_blanck'+i;
	document.getElementById('cards-results').appendChild(watch_link)


	var galeria_cards = document.createElement('div')
	galeria_cards.className = "galeria-cards"
	galeria_cards.style.background = 'url('+movies[i].poster+')';
	galeria_cards.style.backgroundSize = 'contain'
	galeria_cards.style.backgroundSize = '100% 100%'
	galeria_cards.style.backgroundRepeat = 'no-repeat';
	galeria_cards.style.display = 'none'
	galeria_cards.value = i;
	watch_link.appendChild(galeria_cards)

	//on click in a card, all informations about him will be saved on
	//local storage browser.
	galeria_cards.addEventListener('click',function (argument) {
		
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

	

	var nomeFilme = document.createElement('span')
	nomeFilme.className = 'nomeFilme';
	nomeFilme.innerHTML = movies[i].name
	nomeFilme.style.textOverflow = 'ellipsis'
	galeria_cards.appendChild(nomeFilme)

}