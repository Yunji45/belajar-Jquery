$(document).ready(function(){
	$("#kirim").click(function(){
		$("#nama").text(
			$("#fnama").val()
		);
		$("#alamat").text(
			$("#falamat").val()
		);
		$("#nomer").text(
			$("#fnomer").val()
		);
		$("#jeniskelamin").text(
			$("input[name=gender]:checked").val()
		);
		$("#tanggal").text(
			$("#ftanggal").val()
		);
		$("#tahun").text(
			$("#ftahun").val()
		);
		$("#bulan").text(
			$("#fbulan").val()
		);
		$("#pendidikan").text(
			$("input[name=pendidikan]:checked").val()
		);

		$("#kabupaten").text(
			$("#fkabupaten").val()
		);
		$("#pel").text(
			$("#fpel").val()
		);

	});
	$("#reset").click(function(){
		$("#fnama").val("");
		$("#nama").text("");
		$("#falamat").val("");
		$("#alamat").text("");
		$("#fnomer").val("");
		$("#nomer").text("");
		$("#jeniskelamin").text("");
		$("#tanggal").text("");
		$("#bulan").text("");
		$("#tahun").text("");
		$("#pendidikan").text("");
		$("#kabupaten").text("");
		$("#fpel").val("");
		$("#pel").text("");

	});
});