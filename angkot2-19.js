
// latihan video 18  
// varibel
var jmlAngkot = 10;
var angkotBeroperasi=  6;
var noAngkot = 1;
// kondisi terminasi
while(noAngkot <= angkotBeroperasi) {
// masuk ke while kalau true
    console.log('Angkot No. '+noAngkot+' beroperasi dengan baik.');

noAngkot = noAngkot+1;
}  
for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    console.log('Angkot No. '+noAngkot+' sedang tidak beroperasi.')
}

