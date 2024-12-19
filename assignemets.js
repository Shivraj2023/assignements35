  
   // 1.     Analyze the given input and output, write a program accordingly
    //  Input a = [2,3,4,5,3,3,5,2,5,3] and Output [ 5, 5, 5, 4, 3, 3, 3, 3, 2, 2] ???


   /* function descendingorder ( array) {
    return  array.sort( (a,b) => b-a);
   }
    console.log( descendingorder([2,3,4,5,3,3,5,2,5,3])) */

  // 2.     Find a = [3,7,8,6,2,5] maximum and minimum number in array  ???

   /* function minmax ( array){
    let max=array[0];
    let min=array[0];
       if ( array.length<0) {
        console.log( " it not array pls enter a vaid array")
       }  
     for ( let i=0;i<array.length;i++) {
        if (array[i] > max) {
            max= array[i];
        }
         else if (array[i] < min) {
            min= array[i];
        }
     }
      console.log( "the max is :",max);
      console.log( "the min is :",min)
   }
    let myarray=[3,7,8,6,2,5];
    minmax(myarray); */


    // 3.     Given an array of objects representing people with their names and ages, use filter to get only the people who are 18 or older, and then use map to create an array of their names
    /* const people = [{ name: "Alice", age: 25 },

        { name: "Bob", age: 17 },{ name: "Charlie", age: 30 },{ name: "David", age: 16 }, { name: "Eve", age: 20 }  ];  ???

       let qualified_people= people.filter( (people)=>people.age>=18);
          console.log ( qualified_people);
        let names_array= people.map( (people)=> people.name);
        console.log ( names_array); */

        // 4.     Write a function that takes an array of numbers and returns a new array where each element is doubled using the map method ?/


         /* let array = [ 1,2,3,4,5];
         let doubled_array=array.map( num => num+num);
         console.log(doubled_array); */

         // 5.     Write a program to print numbers 1-10 with a delay of 1 second between each number. ???

         /* for ( let i=1;i<=10;i++) {
            setTimeout(() => {
                console.log (i)
            }, i*1000);
         } */

            // 6.     Write a function to check if a given string is a palindrome. ???

           /*  function palindrome( string) {
                let result= string.split("").reverse().join("");
                console.log(result)
                return string===result;
            }
            let mystring= "racecar";
            console.log(palindrome(mystring));
            
            however two pointer system method would be more optimum.
 */

            // 7.     Write a function to remove duplicate elements from an array without using default functions. ??

             /* function removeDuplicates ( array) {
                let result= [];

                 for (let i = 0; i < array.length; i++) {
                    let isDuplicate = false;

                    for ( let j=0;j<result.length;j++) {
                        if ( array[i]===result[j]) {
                            isDuplicate=true;
                            break;
                        }
                    }
                    if(!isDuplicate){
                        result.push(array[i]);
                    }
             }
             return result;
            }
            let array = [1, 2, 3, 2, 4, 1, 5, 4, 6];
              console.log(removeDuplicates(array)); */

 // 8.     Write a function to find the maximum number in an array.???

  /* function max ( array) {
    let max=array[0];
    for(num of array) {
        if ( num>max){
            max=num;
        }
    }
    return max;
 }
 let myarray1= [1,2,3,4,5,6,7,8,12,1];
 console.log(max(myarray1));  */

 //9.     Write a function to remove duplicate arrays from an array of arrays. ??/

  /* function removeduplicates(array){
    let result = [...new Set(array)];
    return result;
 }
 let myarray1= [1,2,1,4,5,6,6,8,12,1,3,4,7,8];
 console.log(removeduplicates(myarray1));

  //we acn solve the same using for loop ND filter && index of approach also
  */
  
   // 10.  Write a function to flatten a nested array. ??
   
   /*  function flattarray (array) {
     return array.flat(Infinity);
    }
    let array1= [ 1,2,3,[5,6,7,[8,9]]];
    console.log(flattarray(array1)); */
    
 // 11.  Write a function to count repeated characters in a string and print in a string format.??

  /* function countoccureneces ( string) {
   let result= {};
   for( char of string) {
    result[char]= ( result[char]||0)+1;
   }
    return result
  }

  let mystring1= "hello hi";
  console.log(countoccureneces(mystring1));
   */

  // 12.  Write a program to add zeros after every 3 values in an array.??
 /*  function addzero ( array) {
    
   
    for ( let i=3;i<=array.length;i=i+4) {
        array.splice( i,0,0)
    }
    return array;
  }
  let array1= [ 1,2,3,4,5,6,7,8,9];
  console.log(addzero(array1)); */

  // 13.  Write a JavaScript code to extract numbers between two characters in a string and add them all (use Alpha numeric Numberics as input).??

    /*  function findintegrs ( string,char1,char2) {
        let sum = 0;
        const regex= new RegExp (`${char1}(\\d+)${char2}`,'g');
        let match;

        while ( ( match= regex.exec(string))!==null) {
             sum = sum + parseInt( match[1],10);
        }
       return sum;

     }

     let string= "a123bxyz456c789d";
     const sum = findintegrs(string, 'a', 'b'); 
      console.log(`Sum of numbers between 'a' and 'b': ${sum}`);
   */

      //  14.  Write a program to find the count of the maximum prefix and suffix that are the same in a given string.??

      /* function longestsufpre(string) {
      let strlength=string.length;
      let suufixprefixcount = 0;

      for ( let i=1;i<strlength;i++) {
        if ( string.slice(0,i)=== string.slice(strlength-i)) {
            suufixprefixcount=i
        }
      }
       return suufixprefixcount;
      }
      const inputString = "ababab";
       const result = longestsufpre(inputString);
        console.log(`Maximum prefix-suffix count: ${result}`);
 */
  

   // 15.  Write a program to find the missing numbers in an array containing numbers from 1 to 100. ????
   
   /* function missingnum (array) {
        let missingnumbers=[];
     for( let i=1;i<=100;i++) {
       if( !array.includes(i)) {
        missingnumbers.push(i)
       }
     }
     return missingnumbers;
   }
  let array1= [ 1,2,,3,4,5,6,7,8,9,23,24,29,74,31,32];
  console.log(missingnum(array1)); */

  // 16.  Write a program to remove the middle element from an array, or if the middle element is not there, remove every element except the first and last ones.

 /*  function removemiddlenum (array) {
    let length= array.length;
    if ( length%2===1){
      let middleindex= Math.floor(length/2);
      array.splice(middleindex,1)
    }  
    else {
      array=[array[0],array[length-1]]      
    }
        return array;
  }
  let myarray1= [1,2,3,4,5,9];
  console.log(removemiddlenum(myarray1)); */
  
  // 17.  Write a function to calculate the factorial of a number ??

  /* function factorial (num) {
    let result=1;
    for ( let i=2;i<=num;i++) {
      if ( num===0 ||num ===1) {
        return result;
      }  
        else {          
          result=result*i;
        }
    }
   return result;
  }
  console.log(factorial(6));
   */

  //18.  Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211] ??

 /*  function findint (array) {
    return array.filter ( (item)=> /^\d+$/.test(item));

  }
  let myarray1=["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"];
  console.log(findint(myarray1)); */

  //  19.  Filter numeric palindromes from the input array???

    /*  function numericpalindrome ( array) {
       let result=array.filter ( (item)=> /^\d+$/.test(item) && item===item.split("").reverse().join(""));
       return result;
        
     }
     let myarray1=["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"];
  console.log(numericpalindrome(myarray1)); 

  using loops also it can be done  */


 /*  function findintpalindromes ( array) {
    let result= [];

     for ( let i=0;i<array.length;i++) {
     if ( /^\d+.$/.test(array[i]) && array[i]===array[i].split("").reverse().join("")) {
         result.push(array[i])
     }
    }
     return result;
  }
  let myarray1=["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"];
  console.log(findintpalindromes(myarray1));  */
   

  //  20.  Find the length of the longest substring without repeating characters??  

    /*  function findlargestsubstring ( string) {
      let charset= new Set();
      let left=0;
      let maxlength=0;

      for ( let right=0;right<string.length;right++) {
          while (charset.has(string[right]) ) {
            charset.delete(string[left])
            left++;
          }
        charset.add(string[right]);
        maxlength=Math.max( maxlength, right-left+1);
      }
      return maxlength;
     }
     let inputString = "abcdabcbb";
console.log("Longest substring without repeating characters length:", findlargestsubstring(inputString)); */

 //  21.  Reverse the array without using built-in functions ???

 /* function reversarray(array) {
    let result=[];
  for ( let i=array.length-1 ; i>=0;i--) {
         result.push(array[i])
  }
  return result;
 }
  let myarray1= [ 1,2,3,4,5,7,8,9];
  console.log(reversarray(myarray1)); */

  //  22.  Count the occurrences of each unique character in the string ???
     
 /*  function finduniueoccurrences ( string) {
    let result={};
      for ( let char of string) {
        result[char]= ( result[char]||0)+1;
      }
    return result;
  }
     let string1 = "hello wolrd";
     console.log(finduniueoccurrences(string1)); */

     // 23.  Write a function to find the second maximum and minimum numbers in an array. ??

     /* 
     
       */   

      //  24.  Write a function to sort an array without using built-in methods. ???

      // in the above solution i did the same thing soorting of an array without using in any built in methods..


      //  25.  Write a function to remove duplicate characters in a string. ???
        /* function removedupliactes ( string) {
            let result ="";
            let set = new Set()
            for ( char of string) {
              if ( !set.has(char)) {
             result = result+char;
             set.add(char);
              }
            }
             return result;
        }
          console.log ( removedupliactes("hello"));
      */

          // 26.  Write a function to convert a string from snake_case to camelCase. ??

           /*  function snakecasetocamelcase ( string) {
                let stringarray=string.toLowerCase().split('_');
              
                 let output= stringarray.map ( (word,index)=>  
                  index===0? word:word.charAt(0).toUpperCase()+ word.slice(1)
                ).join("");
                return output;
            }
            let snakeCaseStr = "hello_world_this_is_javascript";
            let camelCaseStr = snakecasetocamelcase(snakeCaseStr);
            console.log(camelCaseStr);
             */

    //  27.  Write a function to find the second largest number in a nested array. ??

   /*  function seconadlarggest ( array) {
      let array1=array.flat(Infinity);
      let uniquarray=[...new Set(array1)];
      uniquarray.sort( (a,b)=>b-a);
      return uniquarray[1];

    }
    let nestedArray = [1, [5, 3], 9, [2, [8, 4]], 6,9];
let secondLargest = seconadlarggest(nestedArray);
console.log(secondLargest); */

 //  28.  Write a function to add zeros after every 3 values in an array.???

 // the question is repeated ...

 // 29.  Write a function to capitalize the first letter of each word in an array of strings.  ???

   /*  function capaitaleachletter ( array) {
      return array.map ( (word)=> word.charAt(0).toUpperCase()+ word.slice(1));
    }
     let myarray1= [ "shiaraj","hello","india","karnataka"];
     console.log(capaitaleachletter(myarray1)); */

     // 30.  Write a function to calculate the sum of total marks in an array of objects. ???

        /* function totalmarks(array){
          return array.reduce( (sum,obj)=> sum+obj.marks,0)
        }
        let students = [
          { name: "Alice", marks: 85 },
          { name: "Bob", marks: 92 },
          { name: "Charlie", marks: 78 },
          { name: "David", marks: 88 }
      ];
       console.log(totalmarks(students)); */

       //  31.  Write a function to merge two arrays with extra zeros. ??
         
/*        function mergeexatrazero (array1,array2) {
        const maxLength = Math.max(array1.length, array2.length);

                while (array1.length < maxLength) {
            array1.push(0);
        }    
        while (array2.length < maxLength) {
            array2.push(0);
        } 
                return [...array1, ...array2];
    }
       
        let myarray1=[ 1,2,3,4];
        let myarray2=[ 5,6,7];
        console.log(mergeexatrazero(myarray1,myarray2)); */

        // 32.  Write a function to reverse a string without using built-in methods. ??/

       /*  function reverseString(str) {
          let reversedStr = '';
                  
          for (let i = str.length - 1; i >= 0; i--) {
              reversedStr += str[i];  
          }
                return reversedStr;
      }
      
      let inputStr = "hello";
      let reversed = reverseString(inputStr);
      console.log(reversed); 
       */
       
      //  33.  Write a deep clone function to create a copy of a nested object or array without any reference to the original. ??/

      /* function deepClone(value) {
       
        if (Array.isArray(value)) {
            return value.map(item => deepClone(item));
        }
    
               if (value !== null && typeof value === 'object') {
            let clonedObject = {};
    

            for (let key in value) {
                if (value.hasOwnProperty(key)) {
                    clonedObject[key] = deepClone(value[key]);
                }
            }
    
            return clonedObject;
        }
           
        return value;
    }
    
    let original = {
        name: "Alice",
        age: 25,
        address: {
            street: "123 Main St",
            city: "Wonderland"
        },
        hobbies: ["reading", "traveling"]
    };
    
    let cloned = deepClone(original);
    
   
    cloned.name = "Bob";
    cloned.address.city = "New Wonderland";
    cloned.hobbies.push("swimming");
    
    console.log(original);
    console.log(cloned);
     */

     //  34.  Write a function to find how many times each element is repeated in an array.  ???

    /*  function countOccurrences(array) {
      let occurrences = {};  
  
            for (let element of array) {
          
          if (occurrences[element]) {
              occurrences[element]++;
          } else {
             occurrences[element] = 1;
          }
      }
  
      return occurrences;  
  }
  
  let myArray = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5];
  let result = countOccurrences(myArray);
  console.log(result);
   */   

  // 35.  Write a function to generate the specified pattern. ??/

  function generatePattern(n) {
    let result = []; 
    let num = 1;
    
        for (let i = 1; i <= n; i++) {
        let row = [];
        
               for (let j = 0; j < i; j++) {
            row.push(num);
            num++;  
        }

      
        result.push(row);
    }

        for (let i = 0; i < result.length; i++) {
        let row = result[i];
        console.log(row.join(' '));
    }
}

generatePattern(5);  


