// class AbstractBird {
//   public void fly() { }
// }

// // class Ostrich extends AbstractBird { 
// //   public void fly() {
// //      throw new Error("I can't fly.'"); 
// //   }
// // }
// interface Flyable {
//   void fly();
// }

// interface Tweetable {
//   void tweet();
// } 

// interface EggLayable {
//   void layEgg();
// }

// class Ostrich implements Flyable, Tweetable, EggLayable {
//   @Override
//   public void fly() {
//     System.out.println("fly");
//   }
//   @Override
//   public void tweet() {
//     System.out.println("tweet");
//   }
//   @Override
//   public void layEgg(){}
// }

// class Sparrow implements  Tweetable, EggLayable {
//   @Override 
//   public void tweet() {
//     System.out.println("tweet");
//   }
//   @Override
//   public void layEgg() {
//     System.out.println("layEgg");
//   }
// }

// public class Bird {
//   public static void main(String[] args) {
//     // System.out.println("Hello World");
//     Ostrich bird = new Ostrich();
//     bird.tweet();
//   }
// }
interface Flyable {
  void fly();
}
interface Tweetable {
  void tweet();
}
interface EggLayable {
  void layEgg();
}
class FlyAbility implements Flyable {
  @Override
  public void fly() {
  }
}
class TweetAbility implements Tweetable{
  @Override
  public void tweet() {
    System.out.println("layEgg");
  }
}
class EggLayAbility implements EggLayable {
  @Override
  public void layEgg() {
  }
}

class Ostrich implements Tweetable, EggLayable {
  private TweetAbility tweetAbility = new TweetAbility();
  private EggLayAbility eggLayAbility = new EggLayAbility();

  @Override
  public void tweet() {
    tweetAbility.tweet();
  }
  @Override
  public void layEgg() {
    eggLayAbility.layEgg(); /*委托 */
  }
}

public class Bird {
  public static void main(String[] args) {
    Ostrich bird = new Ostrich();
    bird.tweet();
  }
}