let imie = document.getElementById('name'),
nazwisko = document.getElementById('surname'),
telefon = document.getElementById('phone'),
// pojemnik = document.getElementById('container');
// button = document.getElementById('przycisk');
par1 = document.getElementById('name1'),
par2 = document.getElementById('surname1'),
par3 = document.getElementById('phone1');

let dodawanie = () => {
par1.innerText = imie.value,
par2.innerText = nazwisko.value,
par3.innerText = telefon.value;
}

document.getElementById('przycisk').addEventListener('click', function() {
    dodawanie()
});


