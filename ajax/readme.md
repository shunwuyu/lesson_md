XMLHttpRequest 类首先由Internet Explorer以ActiveX对象引入，被称为XMLHTTP。 后来Mozilla、Netscape、Safari 和其他浏览器也提供了XMLHttpRequest类，不过它们创建XMLHttpRequest类的方法不同。
xmlhttp_request = new ActiveXObject("Msxml2.XMLHTTP.3.0"); //3.0或4.0, 5.0
xmlhttp_request = new ActiveXObject("Msxml2.XMLHTTP");
xmlhttp_request = new ActiveXObject("Microsoft.XMLHTTP");