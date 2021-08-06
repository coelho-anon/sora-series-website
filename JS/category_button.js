/*
	creating all category buttons 
	creating all active category buttons 
	filter movies by category.
	care a exception
*/


//category list. Remember to write everything completly rigth.
var category = ['Filme','OVA','Tv','Ação', 'Aposta', 'Luta', 'Aventura', 'Comédia', 'Corrida', 
'Cyberpunk', 'Drama', 'Demência', 'Ecchi', 'Escolar', 'Espaço', 'Esporte', 'Fantasia',
'Harem', 'Historico', 'Horror', 'Infantil', 'Jogo', 'Josei', 'Lolicon', 'Magia', 'Mecha',
'Militar', 'Mistério', 'Música', 'Ninja', 'Paródia', 'Policial', 'Romance', 'Psicologico', 
'Pós-Apocalípse', 'Samurai', 'Sci-fi', 'Seinen', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 
'Slice of Life', 'Sobre-natural', 'Super-poderes', 'Thriller', 'Vampiros', 'Yaoi', 'Yuri', 
'#']


//recive the elements catgory button by id
//categoria_btn[i] = document.getElementById('categoria_btn' + i);
var categoria_btn = [null];

//actived categories (categories clicked)
var categoria_ativas = [];


/*
	used for count if the number of categories cliked
	is equal or biggest than movie categoris.
*/
counter = 0;


var hasActived = 0;
var array_actived_btn_genero_categorias = []

//creating actived category buttons
for (var i = 0; i < category.length; i++) {

	actived_btn_genero_categorias = document.createElement('button');
	actived_btn_genero_categorias.className = 'actived_categorias';
	actived_btn_genero_categorias.id = 'actived_categoria_btn' + i;
	actived_btn_genero_categorias.innerHTML = category[i];
	actived_btn_genero_categorias.style.display = 'none'
	document.getElementById('actived-group-categ').appendChild(actived_btn_genero_categorias);

	array_actived_btn_genero_categorias[i] = document.getElementById('actived_categoria_btn' + i)


	//when exclude the category, his hide.
	actived_btn_genero_categorias.addEventListener('click', function (argument) {
		
		$(this).hide();

		//cuting the category from categoria_ativas array.
		categoria_ativas.splice(categoria_ativas.indexOf(argument.toElement.innerHTML.toUpperCase()), 1)

		//filter the movies without current category clicked
		filtrar()
	})


	//creating category buttons
	btn_genero_categorias = document.createElement('button');
	btn_genero_categorias.className = 'categorias';
	btn_genero_categorias.id = 'categoria_btn' + i;
	btn_genero_categorias.value = 0;
	btn_genero_categorias.innerHTML = category[i];
	document.getElementById('group-categ').appendChild(btn_genero_categorias);

	btn_genero_categorias.onclick =  (argument) => {
		filtrar(argument)
	};

	categoria_btn[i] = document.getElementById('categoria_btn' + i);
}



function filtrar (argument) {
		/* body... */
	if (argument != null || argument != undefined) {
		for (var i = 0; i < category.length; i++) {

			if (array_actived_btn_genero_categorias[i].innerHTML.toUpperCase() == argument.toElement.innerHTML.toUpperCase() && array_actived_btn_genero_categorias[i].style.display == 'none'){

				//show th actived category
				array_actived_btn_genero_categorias[i].style.display = ''

				//add the actived category in array for filter all movies with this category
				categoria_ativas.push(array_actived_btn_genero_categorias[i].innerHTML.toUpperCase())

			}
		}
	}


	//filter movies with current categories
	for (var i = 0; i < movies.length; i++) {

		counter = 0;

		//if movie categories got categories actives, counter += 1;
		for (var j = 0; j < categoria_ativas.length; j++) {
			for (var k = 0; k < movies[i].categorias.length; k++) {
				if (categoria_ativas[j] == movies[i].categorias[k]) {
					counter += 1;
				}
			}
		}

		//if movie got the same numbers categories than categories activeds, this movie
		//is showed
		if(counter >= categoria_ativas.length){

			document.getElementById('results-of-search').style.display = '';
			document.getElementsByClassName('galeria-cards')[i].style.display = '';

			if (categoria_ativas.length != 0) {

				//scrolling page to results
				document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
		        window.scrollTo(0, document.getElementById('results-of-search').offsetTop);
		        document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
			}
		}

		else {
			document.getElementsByClassName('galeria-cards')[i].style.display = 'none';
		}
			
	}//end of for(var i = 0; i < movies.length; i++)



	for (var i = 0; i < movies.length; i++) {
		if (document.getElementsByClassName('galeria-cards')[i].style.display == '') {
			hasActived = 1;
		}
	}

	if (hasActived == 0) {
		document.getElementById('results-of-search').style.display = 'none';
	}

	//this care to a exception...
	/*
		if user add a category and after cut it, all movies got the no category, it mean...
		all movies will be displayed os screen.

		so this hide all movies results when don't have any category.

		if you want show all movies when don't have categories, only cut this
		code block.
	*/
	if (categoria_ativas.length == 0) {

		for (var i = 0; i < movies.length; i++) {

			document.getElementsByClassName('galeria-cards')[i].style.display = 'none';
			document.getElementById('results-of-search').style.display = 'none';
		}
	}

}