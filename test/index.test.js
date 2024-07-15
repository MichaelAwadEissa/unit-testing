//problem 1

// unit test use mocha:
const  index = require("../index")
// console.log("hyyyyyy",test.capitalizeText("hello world"))

 const assert = require("assert");
 //calling from chai
 const chai = require("chai");
 const expect = chai.expect;
 const assertchai = require("chai").assert;


describe("unit test function use mocha", function(){
    // test cases  return string
    it("test that the function takes a string  it will return a string ", function(){
            // mocha --> assert --> test 
            assert.equal(index.capitalizeText("hello"), "HELLO")
    })
    //test case test that the function takes a string and return it after capitalize it
    it("test that the function takes a string and return it after capitalize it", function(){
        assert.equal(index.capitalizeText("hello world"), "HELLO WORLD")
    })

    //test if the function takes number it will throw type error says parameter should be string


    it("test if the function takes number it will throw type error says parameter should be string", function(){

    assert.throws(()=>index.capitalizeText(123),TypeError,"parameter should be string")

    })

    //test if the input iti , the returned value  will not equal to hello
    it("test if the input iti , the returned value  will not equal to hello", function(){
        assert.notEqual(index.capitalizeText("iti"), "hello")
    })
   
})   

//problem 2
//using chai
describe("chai", function(){
 //input number 3 ==> output should be [0,1,2]
    it("test input number 3 ==> output should be [0,1,2]",function(){
        expect(index.createArray(3)).to.deep.equal([0,1,2])
    })


    //input number 4 ==> output should be [0,1,2,3]
    it("test input number 4 ==> output should be [0,1,2,3]",function(){
        expect(index.createArray(4)).to.deep.equal([0,1,2,3])
    })


   // test that the return value of type array
    it("test that the return value is of type array", function() {
        expect(index.createArray(2)).to.be.an('array');
    });

//test if we pass 3 it will return array of length 3 and test it's include 1
    it("if we pass 3 it will return array of length 3 and test it's include 1", function() {
        expect(index.createArray(3)).to.include(1);
    });
    //try to use different styles (expect , should , assert)
    it("if we pass 3 it will return array of length 3 and test it's include 1 using assert", function() {
        assertchai.include(index.createArray(3), 1);
    })


})