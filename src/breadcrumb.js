export default class Breadcrumb {
  /**
   * Given a flat list and a start id, walks up the all the
   * parents recursively til the root is reached returns
   * an array with one object (start) with an added
   * property path containing the parent...
   * @param {Object[]} items
   * @param {string} startId
   */
  parentsToTree(items, startId) {
    let tree = [];

    items.map(i => {
      if (i._doc === startId && !i.root) {
        const parent = this.parentsToTree(items, i.parent.id);

        if (parent.length) {
          i.path = parent;
        }
        tree.push(i);
      }
    });
    return tree;
  }

  /**
   * Given an array with one objec containing a path property
   * returns reduced objects with needed slugs and title.
   * targetSlug is the slug of the navigation target.
   * @param {Object[]} path
   * @todo Issue #1
   */
  parse(path) {
    return path.reduce((a, i) => {
      const {title, slug} = i;
      let targetSlug = '';

      if (!i._stats['a:category-association_INCOMING']) {
        targetSlug = i[i.contentType].slug;
      }

      a = a.concat({title, slug, targetSlug });

      if (i.path && !i._stats['a:category-association_INCOMING']) {
        a = a.concat(this.parse(i.path));
        i.path = [];
      }
      return a;
    }, []).reverse();
  }

  /**
   * Given an array of objects, adds a path property.
   * The value of this property is a path string.
   * @param {Object[]} array
   */
  addPath(array) {
    return array.map((i, k) => {
      let path = array.slice(0, k + 1);

      i.path = path.map(i => `/${i.targetSlug}`).join('');
      return i;
    });
  }
}
