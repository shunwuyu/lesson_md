var rtc = {
  // 用来放置本地客户端。
  client: null,
  // 用来放置本地音视频频轨道对象。
  localAudioTrack: null,
  localVideoTrack: null,
};

var options = {
  // 替换成你自己项目的 App ID。
  appId: "e12d22913614487b9e54ff45f230e91d",
  // 传入目标频道名。
  channel: "yushunwuyu",
  // 如果你的项目开启了 App 证书进行 Token 鉴权，这里填写生成的 Token 值。
  token: "006e12d22913614487b9e54ff45f230e91dIADa4IufkF/uvRD8YFW93ImzZ/TSZxuXvjnQGVgegs+nrIP0yc4AAAAAEACqHj4us4AwYQEAAQCygDBh",
  role: "audience"
};


async function startBasicLive() {
  rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
  rtc.client.setClientRole(options.role);
  rtc.client.on("user-published", async (user, mediaType) => {
    await rtc.client.subscribe(user, mediaType);
    console.log("subscribe success", mediaType);
    // 表示本次订阅的是视频。
    if (mediaType === "video") {
      // 订阅完成后，从 `user` 中获取远端视频轨道对象。
      const remoteVideoTrack = user.videoTrack;
      // 动态插入一个 DIV 节点作为播放远端视频轨道的容器。
      const playerContainer = document.createElement("div");
      // 给这个 DIV 节点指定一个 ID，这里指定的是远端用户的 UID。
      playerContainer.id = user.uid.toString();
      playerContainer.style.width = "640px";
      playerContainer.style.height = "480px";
      document.body.append(playerContainer);
      remoteVideoTrack.play(playerContainer);
    }

    if (mediaType === "audio") {
      // 订阅完成后，从 `user` 中获取远端音频轨道对象。
      const remoteAudioTrack = user.audioTrack;
      // 播放音频因为不会有画面，不需要提供 DOM 元素的信息。
      remoteAudioTrack.play();
    }
  })
  const uid = await rtc.client.join(options.appId, options.channel, options.token, null);
  console.log("uid", uid);
}


startBasicLive();