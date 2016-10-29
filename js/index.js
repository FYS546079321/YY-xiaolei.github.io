$(function(){
	
	//"联系我"中的获取焦点与失去焦点
	$(".text").eq(0).focus(function(){
		this.value="";
	})
	$(".text").eq(0).blur(function(){
		if(this.value=="")
		{
			 $(".text").eq(0).val("Name");
		}
	})
	
	$(".text").eq(1).focus(function(){
		this.value="";
	})
	$(".text").eq(1).blur(function(){
		if(this.value=="")
		{
			 $(".text").eq(1).val("E-Mail");
		}
	})
	
	$(".text").eq(2).focus(function(){
		this.value="";
	})
	$(".text").eq(2).blur(function(){
		if(this.value=="")
		{
			 $(".text").eq(2).val("Subject");
		}
	})
	
	$("textarea").eq(0).focus(function(){
		this.placeholder="";
	})
	$("textarea").eq(0).blur(function(){
		if(this.placeholder=="")
		{
			 $("textarea").eq(0).val("Message");
		}
	})
	
	//回到顶部
	jQuery.extend({
		backTop:function(obj,time){
			obj.on("click",function(){
				var top=$(window).scrollTop();
				var scr={aa:top};
				$(scr).animate({aa:0},{
					duration:time,
					step:function(){
					$(window).scrollTop(scr.aa);	
					}
				})
			})
		}
	})
    jQuery.backTop($(".back"),1000);
    
    //主题中的点击换色
    var aColor=$("a",$(".nav")[0]);
    for(var i=0;i<aColor.length;i++)
    {
    	aColor[i].index=i;
    	aColor[i].onclick=function(){
    		
    		for(var j=0;j<aColor.length;j++)
    	    {
    	    	aColor[j].className="";
    	    }
    	    aColor[this.index].className="then";
    	    if(this.index==0)
    	    {
    	    	aColor[this.index].className="first";
    	    }
    	}
    }
})
