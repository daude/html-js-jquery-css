<?php
	require 'connection.php';
?>
<html>
<head>
	<title></title>
</head>
<body>

	<a href="form.php">Add Student</a>
	<table border=1 width=100%>
	<tr>
		<th>S.N</th>
		<th>Full Name</th>
		<th>Email</th>
		<th>Address</th>
		<th>Phone</th>
		<th>Age</th>
		<th>Gender</th>
		<th>Date of Admission</th>
		<th>Changes</th>
	</tr>
	<?php
		$sel="SELECT * FROM tbl_student";
		// (mysqli_query($link,$sel)

		if($query=$link->query($sel)){
			$count=$query->num_rows;
			
			if($count > 0){
				$i=1;
				while($rows=$query->fetch_array()){
	?>
	
	<tr>
		<td><?php echo $i++; ?></td>
		<td><?php echo $rows['name'];?></td>
		<td><?php echo $rows['email'];?></td>
		<td><?php echo $rows['address'];?></td>
		<td><?php echo $rows['phone'];?></td>
		<td><?php echo $rows['age'];?></td>
		<td><?php echo $rows['gender'];?></td>
		<td><?php echo $rows['date_of_join'];?></td>
		<td>Edit / Delete</td>
	</tr>
	




	<?php	
				}

			}else{
				echo "NO RECORDS FOUND";
			}
		}else{
			echo "Error";
		}
	?>
	
	</table>

</body>
</html>

