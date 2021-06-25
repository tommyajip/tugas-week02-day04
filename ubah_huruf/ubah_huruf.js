
/**
 * 
 * Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
 * Function akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
 * Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
 * 
 */


function ubahHuruf(kata) {
    let abjad = "abcdefghijklmnopqrstuvwxyza".split("");
    let arrKata = kata.split("");
    let newArrKata = arrKata.map(myFunction);
    function myFunction(i) {
        let index = abjad.indexOf(i);
        return abjad[index + 1];
    }
    return newArrKata.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zzzzz')); // aaaaa
console.log(ubahHuruf('aaaaa')); // bbbbb