function buy_function(){
	// var r=prompt("Enter bitcoins", "0.00");
	 $( "#dialog" ).dialog( { 
	 	draggable: false, 
	 	modal:true, 
	 	open: function() {
	 		$("#buy_sell_value").focus();
	 		$('.ui-widget-overlay').addClass('custom-overlay'); 
	 		$(".ui-dialog-titlebar").hide();
	 		$("#okay_button").text("Buy");
	 		$("#okay_button").css({"background-color":"#484848", "color": "white"});
	 		},
        close: function() {
        	$('.ui-widget-overlay').removeClass('custom-overlay');
        	},
        dialogClass:'dialog_style',
        width: 400,
    });
}

function sell_function(){
	// var r=prompt("Enter bitcoins", "0.00");
	 $( "#dialog" ).dialog( { 
	 	draggable: false, 
	 	modal:true, 
	 	open: function() {
	 		$("#buy_sell_value").focus();
	 		$('.ui-widget-overlay').addClass('custom-overlay'); 
	 		$(".ui-dialog-titlebar").hide();
	 		$("#okay_button").text("Sell");
	 		$("#okay_button").css({"background-color":"#FF3300", "color": "white"});
	 		},
        close: function() {
        	$('.ui-widget-overlay').removeClass('custom-overlay');
        	},
        dialogClass:'dialog_style',
        width: 400

    });
}


$(function() {
    $( "#radio" ).buttonset();
    $("#radio").change(convert);
});

function buy_click(){
	if (confirm("Are you sure you want to make this transaction?")){
	$("#dialog").hide();
	if (current_article==null){}
	else{
	var article_title = $($('#articles_list td.article_name')[current_article]).text();
	scroll_active = false;
	$("#chart_div").hide();
	$("#article_div").show();
	$("#article_title").html(article_title);
	}
}
}
function close_dialog(){
	$("#dialog").hide();
	if (current_article==null){}
	else{
	var article_title = $($('#articles_list td.article_name')[current_article]).text();
	scroll_active = false;
	$("#chart_div").hide();
	$("#article_div").show();
	$("#article_title").html(article_title);
	}
}

function convert(){
	var current_val = $("#buy_sell_value").val();
	if ($("#BTC_radio").is(":checked")){
		var convert = "$ "+current_val*btcprice ;
	}
	else{
		var convert = Math.round(current_val*1000/btcprice)/1000 + " BTC";
	}
	$("#converted_amount").text(convert);

}
current_article=null;
function open_article(i){
	var article_title = $($('#articles_list td.article_name')[i]).text();
	scroll_active = false;
	$("#chart_div").hide();
	$("#article_div").show();
	$("#article_title").html(article_title);
	if (current_article==null){
		current_article=i;
		$($('#articles_list tr')[i]).css("background-color", "#787878").css("color", "#E8E8E8");
	}
	else{
		$($('#articles_list tr')[current_article]).css("background-color", "#404040").css("color", "#C0C0C0");
		current_article=i;
		$($('#articles_list tr')[i]).css("background-color", "#787878").css("color", "#E8E8E8");

	}
	$("#article_body").html('<iframe width="100%" height="100%" src="'+articles[i]["link"]+'"></iframe>');

}

function show_chart(){
	scroll_active = true;
	$("#chart_div").show();
	$("#article_div").hide();
	$($('#articles_list tr')[current_article]).css("background-color", "#404040").css("color", "#C0C0C0");
	current_article=null;
}
