let vkupnoTotal = 0;
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
                        <button class="izbrisiIzbranFilm" onclick="izbrishiIzbranFilm(this)">Izbrisi</button>
                    </div>`;


        kartIznajmenFilm.innerHTML += rec;

        kartickaTotalCena.innerHTML = `Vkupna cena za iznajmeni filmovi:$${vkupnoTotal}`;
        //console.log(filmNaslov + " " +kolFilm);



        element.setAttribute('disabled', 'true');
        element.innerText='Dodadeno';
        film.classList.add('overBackground');
    }
    else{
        alert("Mora da imate bar eden film koj sakate da bide dodaden i iznajmen");
    }
}

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
    kartickaTotalCena.innerHTML = `Vkupna cena za iznajmeni filmovi:$${vkupnoTotal}`;
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