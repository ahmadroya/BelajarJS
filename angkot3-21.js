var jmlAngkot = 10;
var angkotBeroperasi=  6;
var noAngkot = 1;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. '+noAngkot+' beroperasi dengan baik.');
    } else  {
        console.log('Angkot No. '+noAngkot+' sedang tidak beroperasi.');
    }
}
// oh maksudnya ini no angkot 7 sampai 10 tetap terbaca, 
// tapi terbaca sebagai false makanya muncul pake else