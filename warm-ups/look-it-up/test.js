var chai = require('chai');
var assert = chai.assert;
var addWord = require('./app.js').addWord;
var lookItUp = require('./app.js').lookItUp;

describe("Create a dictionary that contains words and their definitions", function(){
    it("Should add a word and it's defintion", function(){
        assert.equal((addWord('cat', 'a dumb animal')), 'a dumb animal')
    })
    it("Should return the definition of the word we give", function(){
      assert.equal(lookItUp('cat'), 'a dumb animal')
    })
    it("Should not allow plurals of the same word", function(){
      assert.equal(addWord('cats', 'a similar animal'), "plurals not allowed")
    })
})
