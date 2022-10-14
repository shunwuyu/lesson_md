const TemplateEngine = function(tpl,data){
  var re = /<%([^%>]+)?%>/g;
   while(match = re.exec(tpl)) {
       tpl = tpl.replace(match[0], data[match[1]])
   }
   return tpl;
}

let template = '<p>Hello, my name is <%name%>. I\'m <%age%> years old.</p>';
console.log(TemplateEngine(template,{
   name: "caoyi",
   age: 18
}))