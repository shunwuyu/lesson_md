function SQL(table){
  this.table = table;
  this._result = null;
  this._getRows = function() {
    return this._result?this._result: this.table;
  }
  this._doSelect = function(rows, keys) {
    return rows.map(function(row) {
      return _.keys(row).reduce(function(elem, key) {
        if (_.indexOf(keys, key) > -1) {
          elem[key] = row[key];
        }
        return elem;
      }, {});
    })
  }
}

