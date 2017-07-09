/* global describe, it, before */

import chai from 'chai';
import {Menu, Breadcrumb} from '../lib/library.js';

chai.expect();

const expect = chai.expect;

let lib;


describe('Given an instance of the Breadcrumb Class', () => {
  before(() => {
    lib = new Breadcrumb();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Breadcrumb');
    });
  });
});
