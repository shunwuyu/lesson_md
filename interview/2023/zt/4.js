function foo(height = 50, color = 'red')
{
    // ...
}

function foo(height, color)
{
    var height = height || 50;
    var color = color || 'red';
    //...
}

但当参数的布尔值为false时
foo(0, "")  
因为0的布尔值为false，这样height的取值将是50。同理color的取值为‘red’。
函数参数默认值不仅能是代码变得更加简洁而且能规避一些问题。