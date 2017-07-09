/* global describe, it, before */

import chai from 'chai';
import { Menu } from '../lib/library.js';
import * as item from './testData/item.js';
import * as items from './testData/items.js';
import * as unsorted from './testData/unsorted.js';

chai.expect();

const expect = chai.expect;

let tree;
let menu;
let parsed;

describe('Given a flat list of object items', () => {

  before(() => {
    const menu = new Menu();
    tree = menu.childrenToTree(items.items, item._doc);
  });

  it('creates a tree if a parent exists', () => {
    expect(tree[0])
      .to.have.property('children')
      .to.be.an('array');
    expect(tree[0].children[0])
      .to.have.property('children')
      .to.be.an('array');
    expect(tree[0].children[0].children[0])
      .to.have.property('title')
      .to.equal('Child of child of child 1');
  });

  it('returns untouched items when no parent is set', () => {
    expect(tree[1])
      .not.to.have.property('children');
  });
});

describe('Given a tree object', () => {
  before(()=>{
    const menu = new Menu();
    parsed = menu.parse(items.tree);
  });

  it('adds a path property', () => {
    expect(parsed[0]).to.have.property('path');
    expect(parsed[1]).to.have.property('path');
    expect(parsed[0].children[0]).to.have.property('path');
  });

  it('formats correct path', () => {
    expect(parsed[0].path).to.equal(`/${parsed[0][parsed[0].contentType].slug}`);
    expect(parsed[0].children[0].path)
      .to.equal(`/${
        parsed[0][parsed[0].contentType].slug}/${
        parsed[0].children[0][parsed[0].children[0].contentType].slug}`);
  })
})

describe('Given an unsorted array of items', () =>{
  before(()=>{
    menu = new Menu();
  });

  it('sorts items alphabeticaly', () => {
    const r = menu.sortBy(unsorted.items, 'a-z');
    expect(r).to.be.an('array');
    expect(r[0]).to.have.property('title')
      .to.equal('A title');
    expect(r[2]).to.have.property('title')
      .to.equal('C title');
  });

  it('sorts items reverse alphabeticaly', () => {
    const r = menu.sortBy(unsorted.items, 'z-a');
    expect(r).to.be.an('array')
    expect(r[0]).to.have.property('title')
      .to.equal('C title');
    expect(r[2]).to.have.property('title')
      .to.equal('A title');
  });

  it('sorts items by the given order', () => {
    const r = menu.sortBy(unsorted.items, 'order');
    expect(r).to.be.an('array')
    expect(r[0]).to.have.property('order')
      .to.equal(1);
    expect(r[2]).to.have.property('order')
      .to.equal(3);
  });

  it('sorts items by the reverse given order', () => {
    const r = menu.sortBy(unsorted.items, 'reverse order');
    expect(r).to.be.an('array')
    expect(r[0]).to.have.property('order')
      .to.equal(3);
    expect(r[2]).to.have.property('order')
      .to.equal(1);
  });
});

describe('Given an array', () => {
  before(()=>{
    menu = new Menu();
  });
    
  it('removes an object based on a property', () => {
    expect(menu.remove(unsorted.items, 'title', 'A title')).to.be.an('array')
      .to.have.lengthOf(2)
      .to.not.include({title: 'A title', order: 1});
  });
});
