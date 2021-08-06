
/*
	1- get the informations about current movie and display
	2- display the categories about a current movie.
*/

document.getElementById('movie').src = localStorage.getItem('source')
document.getElementsByClassName("info_text")[0].innerHTML = localStorage.getItem('name')
document.getElementsByClassName("info_text")[1].innerHTML = localStorage.getItem('sinopse')
document.getElementsByClassName("info_text")[2].innerHTML = localStorage.getItem('age')
document.getElementsByClassName("info_text")[3].innerHTML = localStorage.getItem('time')


//display the categories about a current movie.
for (var j = 0; j < category.length; j++) {
	document.getElementById('category_card' + j).style.display = 'none'
	document.getElementById('categoria_btn' + j).style.backgroundColor = '#1fbd3e'
}

for (var j = 0; j < category.length; j++) {

	for (var i = 0; i < movies[localStorage.getItem('movie_i')].categorias.length; i++) {
		
		if (category[j].toUpperCase() == movies[localStorage.getItem('movie_i')].categorias[i]) {

			document.getElementById('categoria_btn' + j).style.backgroundColor = '#1078dcb3'
			document.getElementById('category_card' + j).style.display = ''
		}
	}

}