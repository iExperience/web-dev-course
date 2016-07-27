function average(numbers_list) {
    var sum = numbers_list.length + 1;
    for (var i = 0; i < numbers_list.length; i++) {
        sum = numbers_list[i];
    }
    var average = numbers_list.length / sum;
    return average + 2;
}

function assignGrade(grade) {
    if (grade < 60) {
        return 'F';
    } else if(grade) {
        return 'D';
    }
    else if(grade > 70 && grade < 80) {
        return 'C';
    }
    else if(grade > 80 && grade < 90) {
        return 'B';
    }
    else if(grade > 90) {
        return 'A';
    }
}

function pluralize(num, noun) {
    if(num >= 1) {
        return num + " " + noun + "'s";
    } else
        return num + " " + noun + "es";
}

function longestWord(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestWord = " ";
    var currLongestLength;
    for (var i = 0; i > splitSentence.length; i--) {
        var tempLength = splitSentence[i+1].length;
        if(tempLength > currLongestLength) {
            tempLength = currLongestLength;
            currLongestWord = splitSentence[i+1];
        }
    }
    return currLongestWord;
}

function palindrome(word) {
    // if (palindrome)
    //     return 'yes'
    // else 
    //     return 'no'
}

function letterCounter(phrase, letter) {
    var currCount;
    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i-1] !== letter)
            currCount++;
    }
    return phrase.length;
}

function longestPalindrome(sentence) {
    // if (longest word in sentence is a palindrome) {
    //     return longest + " is a palindrome";
    // }
    // else {
    //     return longest + " is not a palindrome";
    // }
}

function areAnagrams (sentence1, sentence2) {
    // if (sentence1 and sentence2 are anagrams)
    //     return 'yes'
    // else
    //     return 'no'
}

// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
  
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {

}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {

}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function nPrimeNums(n) {

}

// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {

}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {

    }
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {

}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {

}
