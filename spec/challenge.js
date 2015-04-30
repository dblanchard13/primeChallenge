var path = require('path');
var expect = require('chai').expect;

var challenge = require(path.join(__dirname, '..', './challenge.js'));

describe('tablePrinter()', function () {
  'use strict';

  var result, primeGetter, primeChecker, tablePrinter;

  it('Exists', function () {
   expect(challenge.primeGetter).to.be.a('function');
   expect(challenge.primeChecker).to.be.a('function');
   expect(challenge.tablePrinter).to.be.a('function');
  });

  it('Defaults to returning 10 prime numbers', function () {
   result = challenge.primeGetter();

   expect(result[0]).to.equal(2);
   expect(result[9]).to.equal(29);
   expect(result.length).to.equal(10);
  });

  it('Returns n prime numbers if passed an n', function () {
   result = challenge.primeGetter(13);

   expect(result.length).to.equal(13);
  });

});
