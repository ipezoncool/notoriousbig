//      Tömbből stringet, zárójelben az elválasztás módja
function smash (words) {    
    return words.join(' ');
 };


//      Tömbök számait először négyzetre, aztán összeadni      
function squareSum(numbers){
    var result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += Math.pow(numbers[i], 2)
    }
    return result;
}


//      Az egyik páratlan és a másik páros akkor true
function lovefunc(flower1, flower2){
    if (flower1 % 2 == 0 && flower2 % 2 == 1) {
        return true;
    }else if(flower2 % 2 == 0 && flower1 % 2 == 1){
        return true
    }else{
        return false
    }
}   
//                           Clever:
            // function lovefunc(flower1, flower2){
            //   return flower1 % 2 !== flower2 % 2;
            // }


//      Első és utolsó karaktert eltávolítani
function removeChar(str){
    if (str.length > 2) {
        return String(str).slice(1, (str.length - 1))
    }else{
        return ''
    }
};
//          Ennyi is elég
// function removeChar(str) {
//     return str.slice(1, -1);
// }


//      Az első és utolsó karaktereknek egyezniük kell
function feast(beast, dish) {

    if (beast.startsWith(dish.charAt(0)) == true && beast.endsWith(dish.charAt((dish.length - 1))) == true) {
        return true;
    }else{
        return false;
    };

};

//      Sum tömb, legkisebb legnagyobb ÉRTÉK törlés, nullundefined stb van akkor 0        NEM JÓ
// function sumArray(array) {
    
//     if (array.length < 2) {
//         return 0;
//     } else if (array == null) {
//         return 0;
//     }else {
//         var min = (Math.min.apply(null, array));
//         var max = (Math.max.apply(null, array));
    
//         var mini = array.iOf(min);
//         var maxi = array.iOf(max);

//         array.splice(mini, 1);
//         array.splice((maxi), 1);
        
//         var res = 0;
//         for (let i = 0; i < array.length; i++) {
//             res += array[i]
//         };

//         console.log("Result: " + res)
//         return res;
//     };
// };

//      Tömb összege, ha null vagy nincs szám akkor 0
function sum (numbers) {
    if (numbers.length < 1 || numbers == null) {
        return 0;
    } else {
        var res = 0;

        for (let i = 0; i < numbers.length; i++) {
            res += numbers[i]
        }

        return res;
    }
};
//      Ahogy kellene
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}


//      Duplázás
function doubleInteger(i) {
    return i*2;
}


//      n darabot x-esével
function countBy(x, n) {
    let z = [];
    var inc = x;

    for (let i = 0; i < n; i++) {
        z.push(x)
        x += inc       
    }
  
    return z;
}


//      Nem negatív számot karakterekre bontani, megfordítani, tömbbe rakni
function digitize(n) {
    if (n > 0) {
        var num = n.toString();
        var arr = [];

        for (let i = num.length - 1; i >= 0; i--) {
            arr.push(Number(num[i]));
        };
        

        return arr;
    }else{
        return [0];
    };
};
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
// }


//      Ellentét keresése
function opposite(number) {
    return Number(-number)
}


//      Tömbnek csak a pozitív tagjait összeadni      
function positiveSum(arr) {
    var num = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            num += arr[i];
        };
    };

    return num;
};
// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }


//      Matek
function basicOp(operation, value1, value2)
{
  switch (operation) {
    case "+":
        return value1 + value2
    case "-":
        return value1 - value2
    case "/":
        return value1 / value2
    case "*":
        return value1 * value2
  }
}
// bruh
// function basicOp(o, a, b) {
//     return eval(a+o+b);
//   }


//      n mennyiségű s string
function repeatStr (n, s) {
    var word = "";
    for (let i = 0; i < n; i++) {
        word += s;
    }
    return word;
}
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }


//    Háromszög 3. belső szöge  
function otherAngle(a, b) {
    return 180 - (a+b);
};


//      Magánhangzó számolás
function getCount(str) {
    return (str.match(/["a","e","i","o","u"]/gi)) === null ? 0 : (str.match(/["a","e","i","o","u"]/gi)).length;
}
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }


//      Középső karaktert visszaadni
function getMiddle(s){
    if (s.length % 2 == 0) {
        var middle = Math.ceil(s.length/2);
        return s.split('')[middle-1];
    }else if(s.length % 2 == 1){
        var middle = (s.length/2);
        var middle2 = (s.length/2)+1;
        return s.split('')[middle-1]+s.split('')[middle2-1];
    }; 
};


//      Pozitív számok mennyisége egy változó, negatív számok összege egy változó, 1 tömbbe
function countPositivesSumNegatives(input) {
    if (input == 0) {
        return [];
    }else if(input === null){
        return [];
    }else
    return [(input.reduce((a, b) => a + (b > 0 ? +1 : 0), 0)), (input.reduce((a, b) => a - (b < 0 ? -b : 0), []))]
};


//      String megfordítás
function solution(str){
  return str.split('').reverse().join('')
}


//      Visszaadni az elmúlt időt éjfél óta ms-ben
function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000
}


//      Átlag felett return igen-nem
function betterThanAverage(classPoints, yourPoints) {
    var cp = classPoints.reduce((a,b) => a + b, 0)/classPoints.length
    return cp < yourPoints ? true : false
}
// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }


//      Következő négyzetet megtalálni
function findNextSquare(sq) {
    if((Math.sqrt(sq))% 1 != 0){
        return -1
    }else{
        return Math.pow((Math.sqrt(sq)+1),2);
    }
};
// function findNextSquare(sq) {
//     return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }


//      String betűit a helyeinek index+1-szer visszaadni
function accum(s) {
    var szo = s.split("")
    var tomb = []
    for (let i = 0; i < szo.length; i++) {
        tomb.push(szo[i].repeat(i+1));
    };

    return (tomb.map)((word) => {
        const capitalizedFirst = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase();
        return capitalizedFirst + rest;
    }).join('-');

};


//      BMI kalkuláló
function bmi(weight, height) {
    var bmi = weight/(Math.pow(height, 2))
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25){
        return "Normal"
    } else if (bmi <= 30){
        return "Overweight"
    } else {
        return "Obese"
    }
};


//      Space-eket eltávolítani, visszaadni a kapott stringet
function noSpace(x){
    return x.replace(/ /g, '');
};


//      Ha páros - 8-cal szorozni, minden más esetben 9-el     
function simpleMultiplication(number) {
    return number % 2 ? (number*9) : (number*8);
};


//      True számolás              .filter(Boolean) !!!         
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
};


//      Kő papír olló, return ki nyert
const rps = (p1, p2) => {
    const rps = (p1, p2) => {
        if (p1 === p2) return "Draw!";
        var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
        if (p2 === rules[p1]) {
          return "Player 1 won!";
        }
        else {
          return "Player 2 won!";
        }
      };
};


//      Nagybetűvé
function makeUpperCase(str) {
    return str.toUpperCase()
};


//      Egy mondatban a legrövidebb szó/szavak hosszát visszaadni
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}


//      Megfordítja a szavakat a mondatban, szóközök maradnak
function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}


//      Adott pozitív számok tagjait csökkenő sorrendbe, azaz a legnagyobb számot kihozni a szám tagjaiból
function descendingOrder(n){
    var tomb = [];
    for (let i = 0; i < n.toString().length; i++) {
        tomb.push(n.toString()[i])
    };
    
    return parseInt(tomb.sort((a,b) => a < b).join(''));
};


//      Két legkisebb szám összege egy arrayből
function sumTwoSmallestNumbers(numbers) {
    var tomb = (numbers.sort((a,b) => a > b));
    tomb.splice(2, numbers.length);
    var res = 0;

    for (let i = 0; i < tomb.length; i++) {
        res += tomb[i]        
    };
    return res;
};


//      True -> "Yes", False -> "No"
function boolToWord( bool ){
    return bool === true ? "Yes" : "No"
};


//      Capitalize Every Word
function toJadenCase(string){
    var szo = string.split(' ');

    for (let i = 0; i < szo.length; i++) {
        szo[i] = szo[i][0].toUpperCase() + szo[i].substr(1)        
    };

    return szo.join(' ');
};


//      Tömbből a 4 betűs szavakat visszaadni
function friend(friends){
    return friends.filter(n => n.length === 4);
}


//      Ha négyzetszám - true, egyébként false
var isSquare = function(n){
    return (Math.sqrt(n)) % 1 == 0;
}


//      https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/solutions/javascript
function openOrSenior(data){
    var res = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            res.push("Senior")
        } else {
            res.push("Open")
        }
    }

    return res;
}


//      String első betűjét számként visszaadni
function getAge(inputString){
    return Number(inputString[0])
}


//      A és B közötti számok összege
function getSum(a, b){
    var result = 0;

    var big = a > b ? a : b;

    var small = a > b ? b : a;

    for (var i = small; i <= big; i++){ 
        result += i 
    };

    return result;
}


//      Kis betűt nagy betűvé, nagy betűt kisbetűvé
function ToAlternatingCase(word) {
    var split = word.split('')

    for (let i = 0; i < split.length; i++) {
        if (split[i] === split[i].toUpperCase()) {
            split[i] = split[i].toLowerCase();
        } else {
            split[i] = split[i].toUpperCase();
        }
    }

    return split.join('')
}


//      Mindenképpen negatív számot kell kapni
function makeNegative(num) {
    return num > 0 ? -num : num
}


//      Ha name = owner -> hello boss, egyébként hello guest
function greet (name, owner) {
    return name === owner ? "Hello boss" : `Hello guest`; 
}


//      Teljes nevet monogramra csökkenteni ponttal elválasztva
function abbrevName(name){
    return (name[0] + "." + (name[name.indexOf(' ')+1])).toUpperCase()
}


//      Növekvő sorrendben kell megtalálni a nem soron következő elemet
function firstNonConsecutive (arr) {

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] + 1) !== arr[i+1]) {
            return arr[i+1]
        }
    }

    return null;
}


//      True ha a végződés egyezik
function solution(str, ending){
    return str.endsWith(ending);
}


//     Tartalmazza-e az egész abc-t
function isPangram(string){
    const regex = new RegExp(/[a-z]/g)

    return regex.test(string)
} 


//      Négyzetre, és egymás mellé
function squareDigits(num){
    var split = String(num).split('')

    var tomb = []

    for (let i = 0; i < split.length; i++) {
        tomb.push(Math.pow(split[i], 2))      
    }

    return Number(tomb.join(''));
}


//      DNA to RNA
function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U")
}


//      !-eltüntetés egy stringből
function removeExclamationMarks(s) {
    return s.replaceAll("!", "");
}


//         wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]  (lopott)
function wave(str){
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
      }
    }
    return newArr
}


//      https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
function hero(bullets, dragons){
    return Number(bullets) >= Number(dragons)*2 ? true : false;
}


//      FB "likes this" feature
function likes(names) {
    if (names.length === 0) {
        return "no one likes this"
    } else if (names.length === 1){
        return `${names} likes this`
    } else if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`
    } else if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${(names.length)-2} others like this`
    }
}


//      uniqueInOrder (lopott)
function uniqueInOrder(iterable){
    var res = [];
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
    }
    return res;
}


//      legkisebb és legnagyobb érték
function highAndLow(numbers){
    var tomb = numbers.split(' ')

    var max = Math.max.apply(0, tomb)

    var min = Math.min.apply(0, tomb)

    return `${max} ${min}`
}


//      Legkisebb számot visszaadni
function findSmallestInt(args) {
      return Math.min.apply(0, args)
      //return Math.min.apply(...args)
}


//      Számból szót
function switchItUp(number){
    return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][number]
}


//      Hány osztója van
function getDivisorsCnt(n){
    var divisors = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0 && n != 0) {
            divisors++;
        }        
    }

    return divisors;
}


//      https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
function longest(s1, s2) {
    var tomb = [];

    var egyszo = s1.concat(s2).split('').sort()

    for (let i = 0; i < egyszo.length; i++) {
        if (egyszo[i] != egyszo[i+1]) {
            tomb.push(egyszo[i])
        }        
    }

    return tomb.join('');
}


//      Betűcserélő
function correct(string){
	return string.replaceAll(5, "S").replaceAll(0, "O").replaceAll(1, "I");
}


//      https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
function expandedForm(num) {
    var szam = String(num).split('').reverse();

    var tomb = [];

    for (let i = 0; i < szam.length; i++) {
        if(szam[i] * Math.pow(10, i) != 0){
            tomb.push(szam[i] * Math.pow(10, i))
        }
    }

    return tomb.reverse().join(" + ")
}

//      Find unique
function findUniq(arr) {
    
}

console.log(findUniq([ 3, 10, 3, 3, 3 ]))