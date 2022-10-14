var a = 1;
a();

// LHS执行查询阶段，原本查询成功，但将a作用函数调用a();，故引擎会抛出TypeError异常。