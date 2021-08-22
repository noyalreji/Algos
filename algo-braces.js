// parensValid(input)
// input is a string
// return true if the input has a valid configuration of parentheses and false
// otherwise. by "return true/false" I mean the boolean value, not a string
// what's valid?
// - no more open parens than close parens or vice versa
// - no close parens that appear before a valid open paren
// - ignore all other characters that are not ( and )
// - () -> true
// - )( -> false
// - hello! -> true (???)
// - (()) -> true
// - (q(a)(x)(!(7(xx)(34)(2, 7, 11)))) -> true
// - (() -> false
// - hello!() -> true
// suggestion - don't bother trying to split the string...
// it won't do us any good and just makes things more complicated
// suggestion again - do we have to check every single character in the input?
// hypothetical input: ) followed by one billion characters
// or: a) followed by one billion characters
// or: a37()) followed by one billion characters

function parensValid(input) {

}

console.log(parensValid('()'));
console.log(parensValid('(())'));
console.log(parensValid('(q(a)(x)(!(7(xx)(34)(2, 7, 11))))'));
console.log(parensValid(')('));
console.log(parensValid('(()'));
console.log(parensValid('hello!'));
// make your own test cases too!

// bracesValid(input)
// as above, but for parentheses, curly brackets (or curly braces) and square
// brackets - with the caveat that we can't have two sets of braces
// interleaved, or our function should return false, as follows:
// ([)] -> false
// the parentheses close before the square brackets do, which is Bad
// ()[]{} -> true
// (] -> false
// x(37[q{3, 7, 9}{22, 6, 91}])(32q) -> true
// ()]... -> false

function bracesValid(input){

}

console.log(bracesValid('put some test cases here'));

// bonus: what if we also want to check angle brackets (< and >)? what if
// sometimes we care about curly braces but sometimes we don't?

function bracesValid(input){
    count1 = 0;
    count2 = 0;
    count3 = 0;
    for (var x = 0; x < input.length; x++) {
        if (input[x] == "(") {
            count1++;
        } else if (input[x] == ")") {
            count1--;
        }
        if (input[x] == "[") {
            count2++;
        } else if (input[x] == "]") {
            count2--;
        }
        if (input[x] == "{") {
            count3++;
        } else if (input[x] == "}") {
            count3--;
        }
        if (count1 < 0) {
            return false;
        }
        if (count2 < 0) {
            return false;
        }
        if (count3 < 0) {
            return false;
        }
    }
    if (count1 == 0) {
        return true;
    } else if (count1 != 0) {
        return false;
    }
    if (count2 == 0) {
        return true;
    } else if (count2 != 0) {
        return false;
    }
    if (count3 == 0) {
        return true;
    } else if (count3 != 0) {
        return false;
    }
}
