---
sidebar_position: 4
---

# MySQL

## Installation

```
sudo apt update && sudo apt-get install mysql-server libmysqlclient-dev -y
```

Skip for Now! Root **password** empty.
```
sudo mysql_secure_installation
```

## Codespaces
Some extra steps are required.

Change the permissions on `mysql` folder:

```
sudo chmod -R 777 /var/run/mysqld/
```

Change the way the `root@localhost` is authenticated. Otherwise get [Access Denied](https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost). Also refer to this [article](https://trendoceans.com/solve-error-1698-28000/).

```
sudo mysql
```
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
```
Can check it using the following commands:

```
USE mysql;
```
```
SELECT User, Host, plugin FROM mysql.user;
```

Bash script to automate:
```
sudo apt update && sudo apt-get install mysql-server libmysqlclient-dev -y
sudo chmod -R 777 /var/run/mysqld/
sudo service mysql start
sudo mysql < rootuserpwd.sql
```
Where *rootuserpwd.sql*:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
```

### Commands

Mysql Version
```
mysql --version
```
Or
```
mysql -V
```


Login

```
sudo mysql
```
Or
```
mysql -u root -p
```

Database status
```
sudo service mysql status
```

Stop Database
```
sudo service mysql stop
```
Start Database
```
sudo service mysql start
```

#### Root password blank

First login:
```
mysql -u root -p
```
Set to **blank**:
```
SET PASSWORD FOR 'root'@'localhost' = '';
```


#### Reset Password
Reference article - https://www.techrepublic.com/article/how-to-set-change-and-recover-a-mysql-root-password/

Create a initialize file:
```
echo "ALTER USER 'root'@'localhost' IDENTIFIED BY 'mark';" >> ~/mysql-pwd
```

Stop mysql:
```
sudo service mysql stop
```

Initialize:
```
sudo mysqld -init-file=~/mysql-pwd
```
Start again
```
sudo service mysql start
```
Check:
```
mysql -u root -p
```

#### Text File Commands

```
mysql < reset_root_password.sql>
```
Where the file contains:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
```

### Notes

- `MYSQL_PWD` is an environment variable that can be set for the *root* password.

## References

- [Install MySQL](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)
- [Install MySQL Fix Permissions](https://www.tutorialspoint.com/how-to-fix-can-t-connect-to-local-mysql-server-through-socket-var-run-mysqld-mysqld-sock)

