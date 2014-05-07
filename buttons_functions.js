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
        width: 400
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
});

function buy_click(){
	$("#dialog").dialog("close");
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

function open_article(i){
	var article_title = $($('#articles_list td.article_name')[i]).text();
	scroll_active = false;
	$("#chart_div").hide();
	$("#article_div").show();
	$("#article_title").html(article_title);
	$("#article_body").html('<iframe width="100%" height="100%" src="'+articles[i]["link"]+'"></iframe>');

}

function show_chart(){
	scroll_active = true;
	$("#chart_div").show();
	$("#article_div").hide();
}
