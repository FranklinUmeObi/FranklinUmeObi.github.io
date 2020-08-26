<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['email'];
  $message = $_POST['message'];
  $subject = "A message from the EVE Website"

  $emailTo = "umeobif@tcd.ie";
  $headers = "From: ".$emailFrom;
  $txt = "You have received an email via the EVE website from ".$name.".\n\n".$message;


mail($emailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend")

}
