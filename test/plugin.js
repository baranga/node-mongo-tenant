'use strict';

const
  assert = require('chai').assert,
  mongoose = require('mongoose'),
  mongoTenant = require('../index');

describe('MongoTenant', function() {
  describe('#Plugin', function() {
    it('should have correct mongoose plugin signature.', function() {
      assert(typeof mongoTenant === 'function', 'Expected mongo-tenant to be a function.');
    });

    it('should register as mongoose schema plugin.', function() {
      let testSchema = new mongoose.Schema({});

      assert.doesNotThrow(() => {
        testSchema.plugin(mongoTenant);
      });
    });
  });
});