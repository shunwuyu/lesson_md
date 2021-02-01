class Wallet{
  private String id;
  private long createTime;
  private BigDecimal balance;
  private long balanceLastModifiedTime;
  public Wallet() {
    this.id = IdGenerator.getInstance().generate();
  }
  public static void main(String[] args){
    
  }
}
