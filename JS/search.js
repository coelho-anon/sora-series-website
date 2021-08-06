/*
    1- create the search elements (h1)
    2- filter search reults
    3- show cards results
    4- show/hide 'not founded' message
*/

//create a search background inside to ul (menu)
var boxSearch = document.createElement('div');
    boxSearch.id = 'caixa_search'
    boxSearch.style.marginLeft = entrada.offsetLeft + 'px'
    document.getElementById('ul-list').appendChild(boxSearch);

    //responsivity to boxsearch.
    window.onresize = () => {
        boxSearch.style.marginLeft = entrada.offsetLeft + 'px'
    }

//save movie names
var moviesNomeArray = []

//got de id of search elements
var idSearchElementos = []

for (var i = 0; i < movies.length; i++) {
    moviesNomeArray[i] = movies[i].name;

    //create h1 elements (h1) that will be displayed while user write.
    var namesSearch = document.createElement('h1');
    namesSearch.innerHTML = moviesNomeArray[i];
    boxSearch.appendChild(namesSearch);

    //put and add to array a id from namesSearch.
    namesSearch.id = 'elementosDoSearch' + i;
    namesSearch.className = "elementosDoSearch";
    namesSearch.style.overflow = 'auto'
    idSearchElementos[i] = document.getElementById('elementosDoSearch' + i);

    //when user click in search result, the input get the name movie clicked. ()
    namesSearch.addEventListener('click', (param) => {
        
        //entrada variable is a input text where user write movie name for search.
        var entrada = document.getElementById("entrada");
        entrada.value = param.toElement.innerHTML;
        boxSearch.style.display = "none";

    })
}




entrada.onkeyup = (param) => {
    
    //when user press enter button, call the function for filter results.
    if(param.key == 'Enter'){
        aparecer()
    }

    else{
        var entrada = document.getElementById("entrada").value.toUpperCase();
        for (var i = 0; i < moviesNomeArray.length; i++){
            
            //when input search is null
            if(document.getElementById("entrada").value.toUpperCase() == ''){
                boxSearch.style.display = "none";
            }

            else{

                //filter the user letters with all movies names.
                //indexOf return -1 when your search not return anything so...
                //if > -1, mean to exist something, so we show that result.
                if(moviesNomeArray[i].toUpperCase().indexOf(entrada) > -1){
                    idSearchElementos[i].style.display = "";
                    $(boxSearch).show(500)
                }

                //if not correspond to user typ, hide a element (h1) with that name.
                else{
                    idSearchElementos[i].style.display = "none";
                }
            }
            
        }

    }
}


document.getElementById("procurar").addEventListener('click', aparecer);
function aparecer(){

    var input = document.getElementById("entrada").value.toUpperCase();
    var moviesNotFound = true;

    //hide all previeus search results.
    for (var i = 0; i < moviesNomeArray.length; i++){
        document.getElementsByClassName('galeria-cards')[i].style.display = 'none';
    }

    //show the cards to correspond to user search, or show the not founded message.
    for (var i = 0; i < moviesNomeArray.length; i++){
        if(moviesNomeArray[i].toUpperCase().indexOf(input) != -1){
            
            //when find something, the 'not founded' message isn't displayed
            moviesNotFound = false

            show(); 
            document.getElementsByClassName('galeria-cards')[i].style.display = '';
        }
    }
    
    // if not founded is true, the 'not founded' message is displayed
    if(moviesNotFound){

        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){
            x.className = x.className.replace("show", "");
        }, 3000);

        document.getElementById('results-of-search').style.display = 'none'
    }
}

//se a pessoa clicar em algum lugar a caixa do search some.
document.addEventListener('click', function(){
    boxSearch.style.display = "none";
})

function show(){

  $('#results-of-search').show(400);

};