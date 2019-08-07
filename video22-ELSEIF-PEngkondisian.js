var angka = prompt('genap atau ganjil hayooo... siapa yang tahu:');2

if(angka % 2 === 0) {
    alert(angka + ' adalah bilangan GENAP');
} else if (angka % 2 === 1){
    alert(angka + ' adalah bilangan GANJIL');
} else {
    alert('Afwan yang Anda Masukkan bukan angka!!')
} 
// bentuk ini masih banyak kekurangannya, hanya untuk contoh belajar