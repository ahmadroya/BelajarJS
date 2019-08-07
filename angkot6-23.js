var jmlAngkot = 10;
var angkotBeroperasi=  6;
var noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    // atau menampilak 
    // if(noAngkot <= 6 && noAngkot !== 5){
    if (noAngkot <= 4 || noAngkot === 6) {
        console.log('Angkot No. '+noAngkot+' beroperasi dengan baik.');
    }
    // else if (noAngkot === 5) {
        // console.log('Angkot No. '+noAngkot+' sedang lembur.');
    // }
     else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No. '+noAngkot+' sedang lembur.');
    } else  {
        console.log('Angkot No. '+noAngkot+' sedang tidak beroperasi.');
    }
}
// oh maksudnya ini no angkot 7 sampai 10 tetap terbaca, 
// tapi terbaca sebagai false makanya muncul pake else