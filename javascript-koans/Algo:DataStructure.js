//Are the elelments of a sting unique

function isUnique(string){
	for(var i = 0; i < string.length; i++){
	let restOfString = string.slice(i+1,i+2)
			if(string[i] == restOfString){
			return false
			}
	}
return true
}

isUnique("string")


//Baby Permutations

var string = "cat"
var string2 = "tac"

function permI(str1,str2){
var s1 = str1.split('').sort().join()
var s2 = str2.split('').sort().join()
  if(s1 == s2){
      return true
  }return false
}

permI(string,string2)
true

//URLify a string
var str = "Mr John Smith  "
var middleChar = "20%"
function removeSpaces(index){
	if( index == " "){
	return
	}
return index
}

str.split(' ').filter(removeSpaces).join(middleChar)
"Mr20%John20%Smith"
