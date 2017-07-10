/* global describe, it, before */

import chai from 'chai';
import {Breadcrumb} from '../lib/library.js';
import * as item from './testData/item.js';
import * as items from './testData/items.js';

chai.expect();

const expect = chai.expect;

let lib;
let data;
let tmp;


describe('Given a flat list of objects', () => {
    before(() => {
      const b = new Breadcrumb();
      data = b.parentsToTree(items.breadcrumb, item.article.parent_doc);
    });

    it('returns an array with one object', () => {
      expect(data).to.be.an('array')
        .to.have.a.lengthOf(1);
    });

    it('sets a property "path" that is an array', () => {
      expect(data[0]).to.have.a.property('path')
        .to.be.an('array')
        .to.have.a.lengthOf(1);
    })
    it('the property "path" has a length of 1', () => {
        expect(data[0].path).to.have.a.lengthOf(1);
    });

    it('found the correct parents', () => {
      expect(data[0]._doc).to.equal(item.article.parent_doc);
      expect(data[0].path[0]._doc).to.equal(data[0].parent.id);
    });
});

describe('Given an array with one object with a property path', () => {
  before(() => {
    const b = new Breadcrumb();
    tmp = items.breadcrumbPath[0].path[0].title;
    data = b.parse(items.breadcrumbPath);
  });

  it('returns a reduced array', () => {
    expect(data).to.be.an('array')
      .to.have.a.lengthOf(2);
  });

  it('contains only breadcrumb properties', () => {
    expect(data[0]).to.have.keys('title', 'slug', 'targetSlug');
    expect(data[0]).not.to.have.keys('path', '_doc', 'parent', '_stats');
  })

  it('returns correctly ordered items', () => {
    expect(data[0].title).to.equal(tmp);
    expect(data[1].title).to.equal(items.breadcrumbPath[0].title);
  })
})

describe('Given an array of objects adds a url path', () => {
  before(() => {
    const b = new Breadcrumb();
    data = b.addPath(items.reducedBreadcrumb);
  });

  it('returns an array', () => {
    expect(data).to.be.an('array')
      .to.have.a.lengthOf(2);
  });

  it('contains a path property', () => {
    expect(data[0]).to.have.keys('title', 'slug', 'targetSlug', 'path');
  })

  it('formats the path correctly', () => {
    expect(data[0].path[0]).to.equal('/');
    expect(data[0].path).to.equal('/a-category');
    expect(data[1].path).to.equal('/a-category/article-1');
  })
})
