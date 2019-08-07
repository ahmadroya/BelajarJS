//  belajar While

// console.log('Hello World');
// ingin dituliskan 1000 kali

// ##selama kondisi bernilai true, maka lakukan aksi didalam kurung kurawal 
// while(kondisi) {
    // aksi
// }

// ##pengulangan terkontrol 1 persatu, dengan bantuan pop-up confirm(berhenti oleh user)
// var ulang = true;
// while(ulang) {
    // console.log('Hello World');
    // ulang = confirm('lagi?') 
// }

// ##untuk menghasilkan banyak dan menentukan batas(berhanti oleh program)
// ++ berarti ditambah 1 tiap  pengulangannya,=nilai awal+1;
// nilai awal
// while(kondisi awal){
    // aksi
    // increment / decrement
// }

//  cuman beda bentuk
// contoh 1
// var nilaiAwal = 1;
// while(nilaiAwal <= 5) {
    // console.log('Hello World');
    // nilaiAwal++;
// }

// contoh 2
// var nilaiAwal = 1;
// while(nilaiAwal <= 5) {
    // console.log('Hello World');
    // nilaiAwal = nilaiAwal + 1;
// }

// ##Untuk ada tambahan perubaan pada pengulangannya
var nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log('Hello World '+nilaiAwal+'x');
    nilaiAwal = nilaiAwal + 1;
}




