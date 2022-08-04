import { UpUser } from "./UpUser";
import { PartitionType } from "./PartitionType";

class Video {
    constructor(
      public aId: number,
      public title: string,
      public pic: string,
      public desc: string,
      public playCount: number,
      public barrageCount: number,
      public publicDate: number,
      public duration: any,
      public cId: number,
      public url: string,
      public owner: UpUser,
      ) {

    }
}

function createVideoByRanking(data: any): Video {
  return new Video(
    parseInt(data.aid, 10),
    data.title,
    data.pic,
    "",
    data.play,
    data.video_review,
    0,
    data.duration,
    0,
    "",
    new UpUser(0, data.author, ""),
  );
}

export {
    Video,
    createVideoByRanking
}