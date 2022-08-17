const traffic_light=(color,duration)=>{
    return new Promise((resolve,reject)=>{
      console.log('traffic-light ', color);
      setTimeout(()=>{
          resolve()
      },duration)
    })
  }
  const main=()=>{
      Promise.resolve()
      .then(()=>{
          return traffic_light('red',3000)
      })
      .then(()=>{
          return traffic_light('yellow',1000)
      })
      .then(()=>{
          return traffic_light('green',2000)
      })
      .then(()=>{
          main();
      })
  }
  main()
