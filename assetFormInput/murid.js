$(document).ready(function(){
	$("#kirim").click(function(){
		$("#senin").text(
			$("#fsenin").val()
		);
		$("#selasa").text(
			$("#fselasa").val()
		);
		$("#rabu").text(
			$("#frabu").val()
		);
        $("#kamis").text(
			$("#fkamis").val()
		);
		$("#jumat").text(
			$("#fjumat").val()
		);


	});
	$("#reset").click(function(){
		$("#fsenin").val("");
		$("#senin").text("");
		$("#fselasa").val("");
		$("#selasa").text("");
		$("#frabu").val("");
		$("#rabu").text("");
        $("#fkamis").val("");
		$("#kamis").text("");
		$("#fjumat").val("");
		$("#jumat").text("");

	});
});