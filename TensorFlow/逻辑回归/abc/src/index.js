import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

import {
  getData
} from './data.js';

window.onload = async () => {
  const data = getData();
  console.log(data);
  tfvis.render.scatterplot(
    { name: '数据' },
    { values: data }
  )
  // 生成一个模型
  const model = tf.sequential();
  // 神经网络
  // 单层 单个神经元

  model.add(tf.layers.dense({
    units: 1,
    inputShape: [2],
    activation: 'sigmoid'
  }))

  // activation: 激活函数
  // activation(200)
  // 年薪：100w  
  // 1: 80w 0.8
  // 2: 90w 0.9
  // 3: 100w 1
  // 4: 200w 1
  // 5: 1亿   
  // 6: 2亿   
  // 7: 3亿   
  // 8: 4亿   
  // 100: 200 亿   
  // sigmoid (0 ~ 1)  告诉我概率
  
  // 加一下 算法
  model.compile({
    loss: tf.losses.logLoss,
    optimizer: tf.train.adam(0.1)
  })
  // loss 损失函数  [3,3] 认为观测：80%   -> 机器：40%
  // 告诉机器 有没有损失，损失情况的一个函数
  // optimizer 优化器 模型 怎么调: 步数
  const input = data.map(p => [p.x, p.y])
  // [[-2, -2], [2,2]]
  const output = data.map(p => p.label)
  // [0, 1]
  await model.fit(tf.tensor(input), tf.tensor(output), {
    batchSize: 40,
    epochs: 20,
    callbacks: tfvis.show.fitCallbacks(
      {name: '效果'},
      ['loss']
      )
  })
  const point = [-1, -2]
  const point1 = [3, 3]
  const res = model.predict(tf.tensor([point, point1]))
  res.print();
}