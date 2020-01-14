centos 安装java
- docker pull daocloud.io/library/centos:7.1.1503
- docker run -it 
- yum -y list java*
-  yum -y install java-1.8.0-openjdk-devel.x86_64
- /etc/profile 
  JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.181-3.b13.el7_5.x86_64
  JRE_HOME=$JAVA_HOME/jre
  PATH=$PATH:$JAVA_HOME/bin
  CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
  export JAVA_HOME
  export JRE_HOME
  export PATH
  export CLASSPATH

- hello world
  public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
  }

  javac HelloWorld.java
  java HelloWorld

- docker restart 031eb0988629
  docker exec -it 031eb0988629 /bin/bash


