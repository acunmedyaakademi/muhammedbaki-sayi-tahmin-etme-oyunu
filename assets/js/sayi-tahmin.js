let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomsayi = Math.round(Math.random(sayilar) * 10);

let tahmin = Number(prompt("Bir sayı söyleyin"));
if (tahmin === randomsayi) {
  alert("Doğru tahmin ettiniz tebrikler");
} else {
  let tahmin2 = Number(prompt("Bilemedinz tekrar Bir sayı söyleyin"));
  if (tahmin2 === randomsayi) {
    alert("Doğru tahmin ettiniz tebrikler");
  } else {
    let tahmin3 = Number(prompt("Bilemedinz tekrar Bir sayı söyleyin"));
    alert("Yine bilemediniz iyi günler byby"+ " Sayi " + randomsayi) ;
  }
}
