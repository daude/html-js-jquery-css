<?php
require 'conect.php';
if (isset($_POST['addstd'])) {
	# code...
	$fullname = $_POST['nam'];
	$Address = $_POST['add'];
	$Gender = $_POST['gen'];
	$ph = $_POST['ph'];
	$dateofbirth = $_POST['dat'];

	$ins="INSERT INTO ale(fullname,Address,Gender,ph,dateofbirth)values('$fullname', '$Address', '$Gender','$ph','$dateofbirth')";

	//mysqli_query($link,$ins);
	if ($link->query($ins)) {
		# code...
		echo "student added";
	}else
	{
		echo "Failed to add student";
	}
}
?>