/*
//-------------------------------------------------------------------------------------------------------------1st problem------------------------------------------------------------------
Two Sum Problem:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
Example: Input: nums = [2, 7, 11, 15], target = 9. Output: [0, 1]

*/

/*function twoNumSum(nums,target){

    for(let i=0; i<nums.length+1;i++){

        for (let j = i + 1; j < nums.length; j++) {  // Start j from i + 1 to avoid comparing the same element

            if(nums[i]+nums[j]===target){
                console.log(i,j);
                return;  // Exit the function after finding the pair
                
            }
           
        }
    }
    console.log("No pair found");
}

let nums = [2,11,7,15];
let target = 9;

twoNumSum(nums, target);*/


/*
//--------------------------------------------------------------------------------------------------------2nd problem-------------------------------------------------------------------


 Reverse a String

Problem: Write a function that takes a string as input and returns the string reversed.

Input: "hello"
Output: "olleh"

*/

/*function reverseString(string){
    console.log(string.split("").reverse("").join(""));
    return;

}

let string = "hello";
reverseString(string);

*/

/*
//----------------------------------------------------------------------------------------------------------3rd problem---------------------------------------------------------------

Palindrome Check

Problem: Write a function that checks whether a given string is a palindrome (reads the same forward and backward).

Input: "racecar"
Output: true

*/


/* function palindrome(string){
    let left = 0;
    let right = string.length-1;

    while(left < right)
        {
            if (string[left] !== string[right]) {
                console.log("this is not a palindrome");
                return false; // If characters don't match, it's not a palindrome
            }

            left++;
            right--;
    }
    console.log("this is a palindrome");
    return true; // If the loop completes, it's a palindrome
 }

 let string = 'racecar';
 palindrome(string);
*/

//---------------------------------------------------------------------------------------------------------4th problem-----------------------------------------------------------------

/*

Find the Largest Number in an Array
Problem: Write a function that takes an array of numbers and returns the largest number in the array.

Input: [1, 5, 3, 9, 2]
Output: 9

*/

/*function largeNum(number){

    let checkLargeNum= Math.max(...number);
    console.log(checkLargeNum);


}

let number = [1,5,3,9,2];
largeNum(number);

*/

//----------------------------------------------------------------------------------------------------------------5th problem---------------------------------------------------------

/*

Factorial of a Number
Problem: Write a function that returns the factorial of a given positive integer n.

Input: 5
Output: 120 (because 5 * 4 * 3 * 2 * 1 = 120)

*/

/*
function factorial(number){

   for(i = 1; i<=number;i++){

       fact= fact * i;
       console.log(fact);

    }
}

let number = 7;
let fact= 1;
factorial(number);

*/

//-----------------------------------------------------------------------------------------------------------6th problem----------------------------------------------------------

/*

Count Vowels in a String
Problem: Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

Input: "hello"
Output: 2 (because "e" and "o" are vowels)



*/

/*function findVowels(word) {
    word = word.toLowerCase();  // Convert the word to lowercase
    let vowels = 'aeiou'.split('');  // Define the vowels
    let count = 0;

    // Loop through each character in the word
    for (var i = 0; i < word.length; i++) {
        // Check if the character is a vowel
        if (vowels.indexOf(word[i]) >= 0) {
            count++;  // Increment the count if it's a vowel
        }
    }
    
    return count;  // Return the total count of vowels
}

let word = "hello";
console.log(findVowels(word));  // Output the number of vowels
*/

/*function findVowels(word){
    word = word.toLowerCase();  // Convert the word to lowercase
    let vowels='aeiou'.split('');
    
    let count = 0;
    for(let char of word){

        /*if (vowels.includes(word[i])){
            count++;
        }*/

/*
        if (vowels.indexOf(char)>=0){
            count++;
        }


    }
    return count;

}

let word = "hello";
console.log(findVowels(word));

*/


//-----------------------------------------------------------------------------------------7th problem-------------------------------------------------------------------------------

/*

Remove Duplicates from an Array
Problem: Write a function that takes an array and returns a new array with duplicates removed.

Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

*/

/*function removeDuplicates(duplicate){

    for(let i=0;i<=duplicate.length;i++){
        for(let j=1;j<=duplicate.length;j++){
            if(duplicate[i]===duplicate[j]){
                duplicate[j].splice();
            }
        }
        return [...new Set(duplicate)];
    }

}

let duplicate = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(duplicate))

*/

//----------------------------------------------------------------------------------------8th problem---------------------------------------------------------------------------------

/*

Find the Longest Word in a Sentence
Problem: Write a function that takes a sentence and returns the longest word in the sentence.

Input: "The quick brown fox jumped over the lazy dog"
Output: "jumped"

*/

/*function longestWord(str){
    let longestStr = "";
    let words = str.split(" ");

    for(let word of words){
        if(word.length>longestStr.length){
            longestStr=word;
        }
    }
    return longestStr;
}

let str = "The quick brown fox jumped over the lazy dog";
console.log(longestWord(str));
*/

//-----------------------------------------------------------------------------------------9th problem--------------------------------------------------------------------

/*

Capitalize the First Letter of Each Word
Problem: Write a function that capitalizes the first letter of each word in a given string.


Input: "hello world"
Output: "Hello World"

*/
/*function capitalize(word){
    let words = word.split(" ");
    let capitalizeWord = words.map(
        words => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
    )

    return capitalizeWord.join(" ");
}

let word = "hello world";
console.log(capitalize(word));

*/

//-------------------------------------------------------------------------------------integration xpert task1 --------------------------------------------------------------------


/*

make a function where i cant apply any ondition and not any js library , i just can apply loop  and return factorial

*/

/*
function factorial(num){
    
    //---------------------------method 1-------------------//

    for(let i=1;i<=num;i++){

         fact = fact * i;

    }

    console.log(fact);
    

    //------------------------method 2--------------------------//

   /*for(let i=num; i>=1;i--){
    fact =fact *i;
   }
   console.log(fact);

   */

   //-------------------------method 3-----------------------------//

   /*for (let i=1;i<=num;i++){
    if(num==1 || num <=num){
        fact = fact *i;
    }
    console.log(fact);
   }

   */
/*}
const num = 4;
let fact =1;
factorial(num);



*/




//---------------------------------------------------------integration xpert task 2-------------------------------------------------------------------------------------------//

/*

mujhe isme se 3 ko htana hai or ye btana hai k isme kitne 3 hain and then array return krwana hai
*/


/*
let arr =[3,2,1,3];
let updatedNumbers = arr.filter(num => num !== 3);

let removeCount = arr.length - updatedNumbers.length;

console.log(updatedNumbers)

console.log(`Numbers deleted: ${removeCount}`);

*/
