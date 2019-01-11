<?php
echo "<!DOCTYPE html>\n";
echo " <html lang=\"en\">\n";
echo " <head>\n";
echo " <meta charset=\"UTF-8\">\n";
echo " <title> Anush\'s Portfolio</title>\n";
echo " <meta name = \"viewpoint\" content = \"width=device-width, user-scalable=no,\n";
echo " initial-scale = 1.0, maximum-scale = 1.0, minimum-scale = 1.0\">\n";
echo " \n";
echo " <!--Font Awesome-->\n";
echo "<link rel = \"stylesheet href = \"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n";
echo "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n";
echo "<!--styles-->\n";
echo " <link rel =\"stylesheet\" href=\"assets/css/main.css\">\n";
echo " <div class = \"header\">\n";
echo " 	\n";
echo " <div>\n";
echo " </head>\n";
echo "<body> \n";
echo "	<div class=\"header-background \">\n";
echo "	<header class = \"header header--sticky\">\n";
echo "		\n";
echo "		<div class = \"container header__container\">\n";
echo "			\n";
echo "			<a href=\"index.html\"><img id=\"header-logo\" src=\"assets/images/logo.png\" alt=\"logo\" ></a>\n";
echo "			<a href = \"index.html\" class=\"button header__button\" id = \"header-buttons\"> About</a><br>\n";
echo "			<a href = \"index.html#port-title\" class=\"button header__button\" id = \"header-buttons\"> My projects</a><br>\n";
echo "			<a href = \"https://drive.google.com/file/d/15lDKvoQtnumE4cjRbjmDP0JtaTeI-j90/view?usp=sharing\" class=\"button  header__button\" id = \"header-buttons\">Resume</a><br>\n";
echo "			<a href = \"index.html#other-works\" class=\"button  header__button\" id = \"header-buttons\"> Other works</a><br>\n";
echo "			<a href = \"contact.html\" class=\"button  header__button\" id = \"header-buttons\"> Contact Me </a><br>\n";
echo "		</div>\n";
echo "	</header>\n";
echo "		<div class=\"contact-container \">\n";
echo "  <form name \"contactform\"  method =\"post\" action=\"sent_form_email.php\">\n";
echo "    <label for=\"fname\">First Name</label>\n";
echo "    <input type=\"text\" id=\"fname\" name=\"first_name\" placeholder=\"Your name..\">\n";
echo "    <label for=\"lname\">Last Name</label>\n";
echo "    <input type=\"text\" id=\"lname\" name=\"last_name\" placeholder=\"Your last name..\">\n";
echo "    <label for=\"email\">Email Address</label>\n";
echo "    <input type=\"text\" id=\"country\" name=\"email\" placeholder=\"Your email..\">\n";
echo "    <label for=\"subject\">Subject</label>\n";
echo "    <textarea id=\"subject\" name=\"comments\" placeholder=\"Dont forget to include your contact info..\" style=\"height:200px\"></textarea>\n";
echo "    <input type=\"submit\" value=\"Submit\">\n";
echo "  </form>\n";
echo "</div>\n";
echo "		\n";
echo " \n";
echo "	\n";
echo "	<footer class = \"container\">\n";
echo "		<ul class = \"footer-list\">\n";
echo "			<li class = \"footer-list__item\"> ©Anushervon Rakhmatov 2018. All Rights Reserved</li>\n";
echo "		\n";
echo "			<ul>\n";
echo "	</footer>\n";
echo " 	\n";
echo "</body>\n";
echo "</html>\n";
?>