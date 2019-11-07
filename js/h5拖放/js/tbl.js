$(function(){
	
	//解决火狐弹出新选项卡的问题
	// $(".container").bind('drop',function(event){
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// });
	
	//拖拽开始时将被拖拽元素透明度设置为50%
	$('.canDrog > li').bind('dragstart',function(event){
		var event = event.originalEvent;
		event.target.style.opacity = .5;
		var dataText = $(event.target).attr('data-text');
		//firefox 必须添加
		event.dataTransfer.setData("text",dataText);
	});
	
	//拖拽过程不执行任何操作。将会被持续触发
	$('.canDrog > li').bind('drag',function(event){});

	//拖拽之后恢复被拖拽元素的透明度
	$('.canDrog > li').bind('dragend',function(event){
		var event = event.originalEvent;
		event.target.style.opacity = 1;
	});


	//将元素拖入当前元素
	$('.dataTbl td').bind('dragenter',function(event){
		console.log(0); 
		var event = event.originalEvent;
		event.target.style.backgroundColor='#fdfdfd';
	});
	// //google chrome,opera需要添加
	// 默认应该是不给drop。
	$(".dataTbl td").bind("dragover",function(e){ 
		console.log(1); 
    e.originalEvent.preventDefault();  
  })  
  //将元素拖离当前元素
  $('.dataTbl td').bind('dragleave',function(event){
		var event = event.originalEvent;
		console.log(',,,,', event.target);
		event.target.style.backgroundColor='';
	});

	//将元素释放到当前元素中
	$('.dataTbl td').bind('drop',function(event){
		var event = event.originalEvent;
		var text = event.dataTransfer.getData("text");
		// 重置背景色
		event.target.style.backgroundColor='';
		// 添加拖拽元素的类型
		// $(event.target).removeClass();
		$(event.target).addClass(text);
		$(event.target).html(text);

		event.preventDefault();
		event.stopPropagation();
	});
});