// var angka = parseInt(prompt('masukkan angka :'));
//parseInt menjadikan setiap inputan adalah integer

// if( angka === 1) {
// alert('anda memasukkan angka 1');
// } else if( angka === 2) {
// alert('anda memasukkan angka 2');
// } else if(angka === 3){
// alert('anda memasukkan angka 3');
// } else {
// alert('angka yang anda masukkan salah');
// }

// TESTER INPUTAN ADALAH SELALU NILAI STRING
// var angka = prompt('masukkan angka :');
//parseInt menjadikan setiap inputan adalah integer
// inputan dalam integer adalah stirng

// if( angka === 1) {
// alert('anda memasukkan angka 1');
// } else if( angka === 2) {
// alert('anda memasukkan angka 2');
// } else if(angka === 3){
// alert('anda memasukkan angka 3');
// } else {
// alert('angka yang anda masukkan salah');
// }

// SWITCH
// var angka = parseInt(prompt("masukkah angka :"));
// harus ada break agar tidak asal lanjut dan keluar dari loop

// switch (angka) {
// case 1:
// alert("anda memasukkan angka 1");
// break;
// case 2:
// alert("anda memasukkan angka 2");
// break;
// case 3:
// alert("anda memasukkan angka 3");
// break;
// default:
// alert('angka yang masukkan salah');
// }

//  
// var item = prompt('masukkan nama makanan / minuman : \n(contoh: nasi, daging, susu, humberger, softdrink)');

// switch (item) {
    // case 'nasi':
        // alert('makanan / minuman SEHAT!');
        // break;
    // case 'daging':
        // alert('makanan / minuman SEHAT!');
        // break;
    // case 'susu':
        // alert('makanan / minuman SEHAT!');
        // break;
    // case 'humberger':
        // alert('makanan / minuman TIDAK SEHAT!');
        // break;
    // case 'softdrink':
        // alert('makanan / minuman TIDAK SEHAT!');
        // break;
    // default:
        // alert('anda memasukkan nama makanan / minuman yang salah')

// }

// cara memanfaatkan tanpa break

var item = prompt('masukkan nama makanan / minuman : \n(contoh: nasi, daging, susu, humberger, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT!');
        break;
    case 'humberger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('anda memasukkan nama makanan / minuman yang salah');
        break;

}

