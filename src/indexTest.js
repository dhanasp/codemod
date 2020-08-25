const assert = require("assert");
const  makeItQuestion = require("./index").makeItQuestion;

runTest = (testName, functionToTest , argsForFunction , expected) => {

    console.log(`\n\t * Running Test - ${testName}`)
    const actual = functionToTest(...argsForFunction)
    try {
        assert.strictEqual(actual,expected);
        console.log(" \n\t ++++++++++++++++++++ Test Passed +++++++++++++++++++ \n ")
    } catch (error) {
        console.log(`X X X X X X X \n Test Failed due to - \n ${error}`)
    }
    
};

runTest("it should return yes-no type question for sentence" , makeItQuestion , ["you are idiot"] , "Are you idiot ?" )
runTest("it should return yes-no type question for long sentence too" , makeItQuestion , ["he is going to market"] , "Is he going to market ?" )