<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['email'];
  $message = $_POST['message'];
  $subject = "A message from the EVE Website"

  $emailTo = "hi@eve-app.eu";
  $headers = "From: ".$emailFrom;
  $txt = "You have received an email via the EVE website from ".$name.".\n\n".$message;


mail($emailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend")

}


if (isset($_POST['fastSubmit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['fastEmail'];
  $message = "Hello, I clicked the submit email button on the eve site. I want to be a beta tester. Please email me back";
  $subject = "I want to be an EVE beta tester"

  $emailTo = "hi@eve-app.eu";
  $headers = "From: ".$emailFrom;
  $txt = "You have received an email via the EVE website from ".$emailFrom.".\n\n".$message;


mail($emailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend")

}
