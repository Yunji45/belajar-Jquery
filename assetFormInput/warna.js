$(document).ready(function(){
	$("#kirim").click(function(){
		$("#nama").text(
			$("#fnama").val()
		);
		$("#tanggal").text(
			$("#ftanggal").val()
		);

		$("#kabupaten").text(
			$("#fkabupaten").val()
		);

	});
	$("#reset").click(function(){
		$("#fnama").val("");
		$("#nama").text("");
		$("#tanggal").text("");
		$("#kabupaten").text("");
	});
}); 