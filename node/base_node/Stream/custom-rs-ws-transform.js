const stream = require('stream')

class ReadStream extends stream.Readable {
  constructor() {
    super()
  }
  /**
   * 所有可读流的实现必须提供 readable._read() 方法从底层资源获取数据
   * http://nodejs.cn/api/stream.html#stream_readable_read_size_1
   */
  _read () {
    this.push('I ')
    this.push('Love ')
    this.push('Juejin!\n')
    this.push(null)
  }
}

class WriteStream extends stream.Writable {
  constructor() {
    super()
  }

  /**
   * 
   * @param {*} chunk 
   * @param {*} encode 
   * @param {*} cb 
   * 所有可写流的实现必须提供 writable._write() 方法将数据发送到底层资源。
   * http://nodejs.cn/api/stream.html#stream_constructor_new_stream_writable_options
   * 
   */
  _write (chunk, encode, cb) {
    console.log(chunk.toString())
    cb()
  }
}

class TransformStream extends stream.Transform {
  constructor() {
    super()
    this._storage = Buffer.from('')
  }
  /**
   * 
   * @param {*} chunk 
   * @param {*} encode 
   * @param {*} cb 
   * 转换流的实现都必须提供 _transform() 方法来接收输入并生产输出。
   *  transform._transform() 的实现会处理写入的字节，进行一些计算操作，
   * 然后使用 readable.push() 输出到可读流。
   */
  _transform (chunk, encode, cb) {
    this.push(chunk)
    cb()
  }
  /**
   * 
   * @param {*} cb 
   * 某些情况下，转换操作可能需要在流的末尾发送一些额外的数据
   */
  _flush (cb) {
    this.push('Oh Yeah!')
    cb()
  }
}

const rs = new ReadStream()
const ws = new WriteStream()
const ts = new TransformStream()

rs.pipe(ts).pipe(ws)