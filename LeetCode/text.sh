#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
sudo chown -R $USER:$USER /var/www
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html