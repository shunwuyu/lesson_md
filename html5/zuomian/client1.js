var rtc = {
  // 用来放置本地客户端。
  client: null,
  // 用来放置本地音视频频轨道对象。
  localAudioTrack: null,
  localVideoTrack: null,
}

var options = {
  // 替换成你自己项目的 App ID。
  appId: "e12d22913614487b9e54ff45f230e91d",
  // 传入目标频道名。
  channel: "yushunwuyu",
  // 如果你的项目开启了 App 证书进行 Token 鉴权，这里填写生成的 Token 值。
  token: "006e12d22913614487b9e54ff45f230e91dIADa4IufkF/uvRD8YFW93ImzZ/TSZxuXvjnQGVgegs+nrIP0yc4AAAAAEACqHj4us4AwYQEAAQCygDBh",
  // 设置频道内的用户角色，可设为 "audience" 或 "host"
  role: "host",
  // 用户ID
  uid: 11111111
};
async function startBasicLive() {
  // console.log('---------------')
  rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
  rtc.client.setClientRole(options.role);

  const uid = await rtc.client.join(options.appId, options.channel, options.token, options.uid); 
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack(); // 麦克风 
  rtc.localVideoTrack = await AgoraRTC.createScreenVideoTrack();  // 桌面

  // 将这些音视频轨道对象发布到频道中。
  await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
  console.log("publish success!");
}

const btn = document.getElementById('btnShareDesk');
btn.addEventListener('click', startBasicLive, false);
