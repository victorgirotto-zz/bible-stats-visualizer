var SOURCE = {

	requestBooksInfo : function(callback){
		$.getJSON("data.json", function(data){
			callback(data);
		});
	}

};