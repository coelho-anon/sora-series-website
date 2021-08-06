
/*
	1- create a footer categories.
*/

var category = ['Filme','OVA','Tv','Ação', 'Aposta', 'Luta', 'Aventura', 'Comédia', 'Corrida', 
'Cyberpunk', 'Drama', 'Demência', 'Ecchi', 'Escolar', 'Espaço', 'Esporte', 'Fantasia',
'Harem', 'Historico', 'Horror', 'Infantil', 'Jogo', 'Josei', 'Lolicon', 'Magia', 'Mecha',
'Militar', 'Mistério', 'Música', 'Ninja', 'Paródia', 'Policial', 'Romance', 'Psicologico', 
'Pós-Apocalípse', 'Samurai', 'Sci-fi', 'Seinen', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 
'Slice of Life', 'Sobre-natural', 'Super-poderes', 'Thriller', 'Vampiros', 'Yaoi', 'Yuri', 
'#']


var categoria_btn = [null];
var categoria_ativas = [];

//create the footer categories.
for (var i = 0; i < category.length; i++) {
	btn_genero_categorias = document.createElement('button');
	btn_genero_categorias.className = 'categorias';
	btn_genero_categorias.id = 'categoria_btn' + i;
	btn_genero_categorias.innerHTML = category[i];
	document.getElementById('group-categ').appendChild(btn_genero_categorias);

	categoria_btn[i] = document.getElementById('categoria_btn' + i);


	var category_card = document.createElement('button');
	category_card.className = 'categorias';
	category_card.id = 'category_card' +i;
	category_card.style.fontSize = '1em';
	category_card.innerHTML = category[i];
	category_card.style.display = 'none'
	document.getElementsByClassName('informations')[4].appendChild(category_card);
}