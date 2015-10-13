var db;

function openDataBase() {
	db = window.sqlitePlugin.openDatabase({ name: "TCalc.db", createFromLocation: 1 });
		
	db.transaction(function(tx){
		tx.executeSql("select count(id) as Tal from Talento;", [], function(tx, res){
			console.log("res.rows.length: "+ res.rows.length + " -- deveria ser 1");
			console.log("res.rows.item(0).Tal: "+ res.rows.item(0).Tal + " -- deveria ser 1");
		});
		
		alert(tx);
	});
}