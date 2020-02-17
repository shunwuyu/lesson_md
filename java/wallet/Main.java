public class Wallet { //钱包类
  private String id; //唯一
  private long createTime; //创建时间 太长时
  private BigDecimal balance; // 比double 更精准
  private long balanceLastModifiedTime; //最后一笔交易时间

  public Wallet() {
    this.id = IdGenerator.getInstance().generate();
  }

  public String getId() {
    return this.id;
  }
}
public class Main {
  public static void main (String[] args) throws java.lang.Exception {
    System.out.println("hello world!");
  }
}