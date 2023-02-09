$(document).ready(function(){
	$("#kirim").click(function(){
		$("#jeniskelamin").text(
			$("input[name=gender]:checked").val()
		);
		$("#pendidikan").text(
			$("input[name=pendidikan]:checked").val()
		);
		$("#tahun").text(
			$("#ftahun").val()
		);


	});
	$("#reset").click(function(){
		$("#jeniskelamin").text("");
	});
	$("#pendidikan").text("");
	$("#tahun").text("");

});