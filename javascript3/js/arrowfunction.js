let fungsi = function (nama) {
    console.log("Belajar Function" + nama);
}

fungsi("joni");

let contoh = (nama)=>{
    console.log("Belajar function"+nama)
}

contoh("budi");

let tambah = function (a,b){
    return a + b;
}

console.log( tambah(2, 3));

let plus = (a,b)=> a+b;

console.log(plus (2,3));

let hasil = a => a* 2;

console.log(hasil(4));

let lagi = ()=>console.log("Coba lgi");

lagi ();

let belajar =()=>{
    console.log("baris satu");
    console.log("baris dua");
    console.log("baris tiga");
};

belajar();

let nilai = 0;

let uji = (nilai < 7) ? ()=> predikat="gagal" : ()=> predikat="lulus";

console.log(uji()); 