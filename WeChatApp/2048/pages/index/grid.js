function Grid(size) {
  this.size = size;
  this.cells = this.empty();
}
Grid.prototype = {
  // 构造一个空的矩阵[[null,..,size.length],[]]
  empty: function() {
    var cells = [];

    for (var x = 0; x < this.size; x++) {
      var row = cells[x] = [];

      for (var y = 0; y < this.size; y++) {
        row.push(null);
      }
    }

    // [[{x:0,y:0},{x:0,y:1}],[]]
    return cells;
  },
  availableCells: function() {
    var cells = [];

    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        // 当前格子无内容 则放到 cells 里面
        if (!this.cells[i][j]) {
          cells.push({
            x: i,
            y: j
          });
        }
      }
    }

    return cells;
  },
  // 获取单元格的内容
  cellContent: function(cell) {
    if (this.withinBounds(cell)) {
      return this.cells[cell.x][cell.y] || null;
    } else {
      return null;
    }
  },
  /*
   * 空单元格，格子还未填充数字
   */
  emptyCell: function(cell) {
    return !this.cellContent(cell);
  },
  // 是否存在空单元格
  cellsAvailable: function() {
    return !!this.availableCells().length;
  },
  // 在空格子中随机挑选出一个格子
  randomAvailableCell: function() {
    // 所有空格子
    var cells = this.availableCells();

    // 存在可填充的格子
    if (cells.length) {
      // 向下取整 Math.floor
      return cells[Math.floor(Math.random() * cells.length)];
    }
  },
  insertTile: function(tile) {
    this.cells[tile.x][tile.y] = tile;
  },
  // 在边界之内
  withinBounds: function(cell) {
    return cell.x >= 0 && cell.x < this.size && cell.y >= 0 && cell.y < this.size;
  },
}

module.exports = Grid