// 1

function toqSonlar(arg) {
  let sanoq = 0;
  for (const i of arg) {
    if (i % 2 != 0) {
      sanoq++;
    }
  }
  return sanoq;
}

// 2
let soz = "Sa2lom1";
function sonlarAjratuvchhi(arg) {
  let natija = [];
  for (const i of arg) {
    if (i >= 0 && i <= 9) {
      natija.push(i);
    }
  }
  return natija;
}

// 3
let sozlar = "Salom bolalar";
function sozlarSoni(arg) {
  let yigindi = arg.split(" ");
  let sanoq = 0;
  for (const i of yigindi) {
    sanoq++;
  }
  return sanoq;
}

// 4
function engKichikElement(massiv) {
  let engKichik = massiv[0];
  for (let i = 1; i < massiv.length; i++) {
    if (massiv[i] < engKichik) {
      engKichik = massiv[i];
    }
  }
  return engKichik;
}

// 5
function teskariTartib(satr) {
  return satr.split("").reverse().join("");
}

// 6..

// 7
function kattadanKichikka(massiv) {
  return massiv.sort((a, b) => b - a);
}

// 8
function yozuvniOchirish(satr, maqsad) {
  let natija = "";
  for (let i = 0; i < satr.length; i++) {
    if (satr.slice(i, i + maqsad.length) !== maqsad) {
      natija += satr[i];
    } else {
      i += maqsad.length - 1;
    }
  }
  return natija;
}

// 9
function kattaHarflarga(massiv) {
  let natija = [];
  for (let i = 0; i < massiv.length; i++) {
    natija.push(String(massiv[i]).toUpperCase());
  }
  return natija;
}
// 10
function faqatToqSonlar(massiv) {
  return massiv.filter((son) => son % 2 !== 0);
}

// 11
function engUzunSoz(massiv) {
  let uzunSoz = massiv[0];
  for (let i = 1; i < massiv.length; i++) {
    if (massiv[i].length > uzunSoz.length) {
      uzunSoz = massiv[i];
    }
  }
  return uzunSoz;
}

// 12
function sonlarYigindisi(massiv) {
  let yigindi = 0;
  for (let i = 0; i < massiv.length; i++) {
    yigindi += massiv[i];
  }
  return yigindi;
}

// 13
function manfiySonlarniOlibTashlash(massiv) {
  return massiv.filter((son) => son >= 0);
}

// 14
function sozlarUzunligi(massiv) {
  return massiv.map((soz) => soz.length);
}

// 15
function sonlarKvadrati(massiv) {
  return massiv.map((son) => son ** 2);
}

// 16
function noyobElementlar(massiv) {
  let noyoblar = [];
  for (let i = 0; i < massiv.length; i++) {
    if (!noyoblar.includes(massiv[i])) {
      noyoblar.push(massiv[i]);
    }
  }
  return noyoblar;
}

// 17
function massivniTeskarisi(massiv) {
  return massiv.slice().reverse();
}

// 18
function alifboTartibida(massiv) {
  return massiv.sort();
}

// 19
function sozlarniAlifboTartibida(satr) {
  return satr.split(" ").sort().join(" ");
}

// 20
function birinchiHarfniKatta(satr) {
  let sozlar = satr.split(" ");
  for (let i = 0; i < sozlar.length; i++) {
    sozlar[i] = sozlar[i].charAt(0).toUpperCase() + sozlar[i].slice(1);
  }
  return sozlar.join(" ");
}

// 21
function boshJoylarniOlibTashlash(satr) {
  let natija = "";
  for (let i = 0; i < satr.length; i++) {
    if (satr[i] !== " ") {
      natija += satr[i];
    }
  }
  return natija;
}

// 22
function sozlarniTeskari(satr) {
  let sozlar = satr.split(" ");
  for (let i = 0; i < sozlar.length; i++) {
    let teskariSoz = "";
    for (let j = sozlar[i].length - 1; j >= 0; j--) {
      teskariSoz += sozlar[i][j];
    }
    sozlar[i] = teskariSoz;
  }
  return sozlar.join(" ");
}

// 23
function sozlarUzunligi(satr) {
  return satr.split(" ").map((soz) => soz.length);
}
