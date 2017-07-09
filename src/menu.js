export default class Menu {

  /**
   * Given a flast list of object and the id of
   * the root element it returns a tree
   * @param {0bject[]} items
   * @param {string} rootId
   * @return {Object}
   */
  childrenToTree(items, rootId) {
    let tree = [];

    items.map(i => {
      if (i.parent.id === rootId && i.type === 'visible') {
        const children = this.childrenToTree(items, i._doc);

        if (children.length) {
          i.children = children;
        }

        tree.push(i);
      }

    });
    return tree;
  }

  /**
   * Given an object with children stored under a children
   * key it returns an object with an additional path
   * property build with the slugs of the menu
   * items' targets, targets are sorted
   * @param {Object[]} items
   * @param {string} [path]
   * @return {Object}
   */
  parse(items, path) {
    path = path || '';

    return items.map(i => {
      const keys = Object.keys(i);

      if (keys.indexOf(i.contentType) !== -1) {
        i.path = path + `/${i[i.contentType].slug}`;
      }

      if (keys.indexOf('children') !== -1) {
        const p = i.path;

        this.parse(i.children, p);

        if (keys.indexOf('ordering')) {
          i.children = this.sortBy(i.children, i.ordering);
        }
      }

      return i;
    });
  }

  /**
   * Given an array sorts it with the appropriate method
   * @param {Objec[]} items - array of objects
   * @param {string} method - order, reverse order, a-z, z-a
   * @return {Object[]} - sorted array
   * @todo perfect this method to sortBy by property e.g title or date(s), ...
   */
  sortBy(items, method) {
    if (method === 'order' || method === 'reverse order') {
      items.sort((a, b) => a.order - b.order);
      return method === 'reverse order' ? items.reverse() : items;
    }

    if (method === 'a-z' || method === 'z-a') {
      items.sort((a, b) => {
        const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();

        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });
      return method === 'z-a' ? items.reverse() : items;
    }

    return items;
  }

  /**
   * Given an array, a property and value removes any
   * matching elements. Returns a new array. 
   * @param {Object[]} array 
   * @param {string} property 
   * @param {*} value
   * @return {Object[]} 
   */
  remove(array, property, value) {
    return array.filter(e => e[property] !== value);
  }
};
