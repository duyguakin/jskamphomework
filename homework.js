// soru 1  JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
console.log("soru-1 / Asal sayı kontrolü")
function findNumber(...number) {
    let total = 0

    for (i = 0; i < number.length; i++) {

        for (k = 2; k < number[i]; k++) {
            if (number[i] % k == 0) {
                total++
            }
        }

        if (total == 0) {
            console.log(number[i] + " asal sayidir")
        }
        else {
            console.log(number[i] + " asal sayi degildir")
        }
        total = 0

    }
}
findNumber(2,5,8,21, 13)

console.log("************************************************************************")

//soru2 
console.log("soru-2 /Arkadaş Sayılar")
function findFriendsNumber(number, number2) {
    let total1 = 0
    let total2 = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            total1 += i
        }
    }

    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            total2 += i
        }
    }

    if (number == total2 && number2 == total1) {
        console.log(number + " ve " + number2 + " arkadas sayilardir")
    } else {
        console.log(number + " ve " + number2 + " arkadaş sayi degillerdir")

    }
}
findFriendsNumber(220,284)
console.log("******************************************************************")

//soru3

console.log("Soru-3 / 1000'e kadarki tüm mükemmel sayılar");
function perfectNumber() {
    for (let number = 1; number < 1000; number++) {
        let result = 0
        for (i = 1; i < number; i++) {
            if (number % i == 0) {
                result = result + i
            }
        }
        if (result == i) {
            console.log(result + " mükemmel sayıdır")
        }
        else {
            console.log()
        }
    }

}
perfectNumber()

console.log("******************************************************************")

//soru4
console.log("Soru-4 / 1000'e kadar olan asal sayılar")

function primeNumber() {
    for (i = 2; i < 1000; i++) {
        let total = 0
        for (p = 2; p < i; p++) {
            if (i % p == 0) {
                total++
            }
        }
        if (total == 0) {
            console.log(i)
        }
        total = 0
    }
}
primeNumber()