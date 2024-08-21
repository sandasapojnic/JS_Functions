function verificareAn (an)
{
   if (((an % 4 == 0) && (an % 100 != 0)) || (an % 400 == 0))
   {
        console.log(`Anul ${an} este bisect`);
   }
   else {
    console.log(`Anul ${an} nu este bisect`);
   }
}

// verificareAn(2024);
// verificareAn(1900);
// verificareAn(2000);


///////////////////////////////

function calculeazaMedia(scor1, scor2, scor3) {
  return (scor1 + scor2 + scor3) / 3;
}

let avgDelfinii1 = calculeazaMedia(44, 23, 71);
let avgKoala1 = calculeazaMedia(65, 54, 49);

function verificaCastigator(mediaDelfinii, mediaKoala) {
  if (mediaDelfinii >= 2 * mediaKoala) {
      console.log(`Delfinii câștigă (${mediaDelfinii} vs. ${mediaKoala})`);
  } else if (mediaKoala >= 2 * mediaDelfinii) {
      console.log(`Koalas câștigă (${mediaKoala} vs. ${mediaDelfinii})`);
  } else {
      console.log('Nicio echipă nu câștigă!');
  }
}

verificaCastigator(avgDelfinii1, avgKoala1);

// avgDelfinii1 = calculeazaMedia(85, 54, 41);
// avgKoala1  = calculeazaMedia(23, 34, 27);
// verificaCastigator(avgDelfinii1, avgKoala1);
