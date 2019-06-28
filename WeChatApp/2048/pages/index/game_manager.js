const Tile = require('./tile.js');
const Grid = require('./grid.js');

function GameManager(size) {
  this.size = size;
  this.startTiles = 2;
}

GameManager.prototype = {
  setup: function () {

    this.grid = new Grid(this.size);
    this.score = 0;
    this.over = false;
    this.won = false;
    this.addStartTiles();
    // 矩阵 二维数组
    return this.grid.cells;
  },
  // 初始化数据
  addStartTiles: function () {
    for (var x = 0; x < this.startTiles; x++) {
      this.addRandomTiles();
    }
  },
  addRandomTiles: function () {
    if (this.grid.cellsAvailable()) {
      // 2 的概率会更大一点
      var value = Math.random() < 0.9 ? 2 : 4;
      var cell = this.grid.randomAvailableCell();
      var tile = new Tile(cell, value);
      this.grid.insertTile(tile); // 插入一个单元格
    }
  },
  // 偏移向量
  getVector: function (direction) {

    var map = {
      0: { // 上
        x: -1,
        y: 0
      },
      1: { // 右
        x: 0,
        y: 1
      },
      2: { // 下
        x: 1,
        y: 0
      },
      3: { // 左
        x: 0,
        y: -1
      }
    };
    return map[direction];
  },
  // 把当前单元格挪至下一个可放置的区域
  moveTile: function (tile, cell) {
    this.grid.cells[tile.x][tile.y] = null;
    this.grid.cells[cell.x][cell.y] = tile;
    tile.updatePosition(cell);
  },
  positionsEqual: function (first, second) {
    return first.x === second.x && first.y === second.y;
  },
  movesAvailable: function () {
    return this.grid.cellsAvailable() || this.tileMatchesAvailable();
  },

  tileMatchesAvailable: function () {

    var tile;

    for (var x = 0; x < this.size; x++) {
      for (var y = 0; y < this.size; y++) {
        // 获取单元格的内容
        tile = this.grid.cellContent({ x: x, y: y });

        if (tile) {
          for (var direction = 0; direction < 4; direction++) {
            // 上 下 左 右 移动 移动
            var vector = this.getVector(direction);
            var cell = { x: x + vector.x, y: y + vector.y };

            var other = this.grid.cellContent(cell);
            // 获取 各个方向上 试一下 有没有相同的 方块 有 true 
            if (other && other.value === tile.value) {
              return true;
            }
          }
        }
      }
    }
    // 没有 false
    return false;
  },
  move: function (direction) {
    // 根据 方向 得到一个偏移量
    var vector = this.getVector(direction);
    // 下滑 x 反过来 右滑 y 反过来
    var traversals = this.buildTraversals(vector);
    var cell;
    var tile;
    var moved = false;
    // 有值的方块 保存一下 上一次的位置 mergedFrom 置为 null
    this.prepareTiles();
    console.log('traversals', traversals);
    traversals.x.forEach((x) => {
      traversals.y.forEach((y) => {
        cell = {
          x: x,
          y: y
        };
        // 找到有数值的
        // 如果是下滑 从最后一行找到第一行
        // 如果是右滑 从最后一列找到第一列
        tile = this.grid.cellContent(cell);
        if (tile) {  // 单元格有内容
          var positions = this.findFarthestTail(cell, vector);
          // 获取单元格里面的内容
          var next = this.grid.cellContent(positions.next);
          // 当前格子和其移动方向格子内容相同，需要合并
          // mergedFrom 已经合并过 不能连续合并
          // 能连续合并 那是开心消消乐的规则 不是 2048
          if (next && next.value === tile.value && !next.mergedFrom) {
            
            // 一个新的位置的方块 新的值
            var merged = new Tile(positions.next, tile.value * 2); // 合并后的格子信息

            merged.mergedFrom = [tile, next];

            this.grid.insertTile(merged); // 把合并的盒子插入到当前格子数据中
            this.grid.removeTile(tile); // 删除当前格子内容

            tile.updatePosition(positions.next);

            this.score += merged.value;
            if (merged.value === 2048) this.won = true;
          } else {
            this.moveTile(tile, positions.farthest);
          }
          if (!this.positionsEqual(cell, tile)) {
            moved = true;
          }

        }
      })
    })
    if (moved) {
      this.addRandomTiles();

      if (!this.movesAvailable()) {
        this.over = true;
      }

      return this.actuate();
    }
  },
  // 找到当前偏移方向存在最远的空单元格
  // 如：向右偏移，那么返回当前行最靠右的空单元格及其右侧距离其最远的一个格子，向下一样
  findFarthestTail: function (cell, vector) {
    var previous;

    // 当前单元格在范围内且存在可用单元格
    // previous 代表的是当前最远的空单元格
    // cell 最远空单元格的下一个
    do {
      previous = cell;
      cell = {
        x: previous.x + vector.x,
        y: previous.y + vector.y
      };
    }
    while (this.grid.withinBounds(cell) && this.grid.emptyCell(cell));

    return {
      farthest: previous,
      next: cell
    }
  },
  // 二维数组里面 有值的方块 保存一下格子 上次的位置
  prepareTiles: function () {
    var tile;
    for (var x = 0; x < this.size; x++) {
      for (var y = 0; y < this.size; y++) {
        tile = this.grid.cells[x][y];
        if (tile) {
          tile.mergedFrom = null;
          // tile.savePosition();
        }
      }
    }
  },
  buildTraversals: function (vector) {
    var traversals = {
      x: [],
      y: []
    };

    for (var pos = 0; pos < this.size; pos++) {
      traversals.x.push(pos);
      traversals.y.push(pos);
    }

    // 为什么要加这个，看findFarthestTail
    // 下滑
    if (vector.x === 1) {
      traversals.x = traversals.x.reverse();
    }
    // 右滑
    if (vector.y === 1) {
      traversals.y = traversals.y.reverse();
    }

    return traversals;
  },
  // 游戏所有的状态
  actuate: function () {

    return {
      grids: this.grid.cells,
      over: this.over,
      won: this.won,
      score: this.score
    }
  },
}

module.exports = GameManager;