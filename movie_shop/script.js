let vkupnoTotal = 0;

//Code that add movie to list, calculate and do sum of price of added movies, show full price 
function dodadiFilm(element){
    let film=element.closest('.item');
    //console.log(film);
    let cenaFilm = film.querySelector(".item-cena .cena").innerText;
    //console.log(cenaFilm);
    let filmNaslov = film.querySelector(".item-title h3 .ime").innerText;
    //console.log(filmNaslov);
    let kartIznajmenFilm = document.querySelector('.kartickaIznajmeni');
   // console.log(kartIznajmenFilm);
    let kartickaTotalCena = document.querySelector('.karticka-total');
    let kolFilm = film.querySelector('.kolFilm').value;
    kolFilm = parseInt(kolFilm);
    //console.log(kolFilm);
    //console.log(typeof (kolFilm));
    if (kolFilm > 0){
        let cena = parseInt(cenaFilm.substring(1));
        //console.log(typeof (cena));
        //console.log(typeof (kolFilm));
        let filmItemTotalCena = cena * kolFilm;
        //console.log(filmItemTotalCena);
        vkupnoTotal += filmItemTotalCena;
        //console.log(vkupnoTotal);

        let rec = `<div class="karticka-item">
                        <h3>${filmNaslov}</h3>
                        <p>$${cena} x ${kolFilm} = $<span>${filmItemTotalCena}</span></p>
                        <button class="izbrisiIzbranFilm" onclick="izbrishiIzbranFilm(this)">Remove</button>
                    </div>`;


        kartIznajmenFilm.innerHTML += rec;

        kartickaTotalCena.innerHTML = `Full price of added movies:$${vkupnoTotal}`;
        //console.log(filmNaslov + " " +kolFilm);



        element.setAttribute('disabled', 'true');
        element.innerText='Dodadeno';
        film.classList.add('overBackground');
    }
    else{
        alert("Number of order movies need to be at least 1 or more. ");
    }
}
//Code that remove added movie from list, remove one or all movies in list 
function izbrishiIzbranFilm(element){
    let izbrisiIzbranFilm= element.closest('.karticka-item');
    izbrisiIzbranFilm.remove();
    let izbranFilmVkupnaCena = izbrisiIzbranFilm.querySelector('p span').innerText;
    izbranFilmVkupnaCena= parseInt(izbranFilmVkupnaCena);
    //console.log(izbranFilmVkupnaCena);
    //console.log("Izbrisan")
    vkupnoTotal -= izbranFilmVkupnaCena;
    //console.log(vkupnoTotal);
    let kartickaTotalCena = document.querySelector('.karticka-total');
    kartickaTotalCena.innerHTML = `Full price of added movies:$${vkupnoTotal}`;
    let izbrisanFilmNaslov = izbrisiIzbranFilm.querySelector('h3').innerText;
    console.log(izbrisanFilmNaslov);
    let filmovi = document.querySelectorAll('.item');
    console.log(filmovi);

    filmovi.forEach(function (film){
        let filmNaziv = film.querySelector('.item-title h3 .ime').innerText;
        console.log(filmNaziv+" "+izbrisanFilmNaslov);
        if (filmNaziv === izbrisanFilmNaslov){
            film.classList.remove('overBackground');
            film.querySelector(".dodadi-film input").value=0;
            film.querySelector('.dodadi-film button').removeAttribute('disabled');
            film.querySelector('.dodadi-film button').innerText='Dodadi Film';
        }
    });
}