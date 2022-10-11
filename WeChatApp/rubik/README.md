- adapter
  canvas window
- three.js
  canvas比例
  devicePixelRatio

- viewCenter
  THREE.WebGLRenderer
  orbitController 轨道控制器

- face 都是canvas
  BoxGeometry 纯色的正方体  
  黑色的间隙区分同一个面的不同小方块 Texture
  图片创建纹理对象，也可以直接使用Canvas元素创建
  MeshLambertMaterial  

  -50  50  50 
  0    50  50   一个面的三个水平
  50   50  50

  -50  0  50
  0    0  50
  50   0  50 
  
  -50 -50 50
  0   -50 50
  50  -50 50

  27个方块  6面 
