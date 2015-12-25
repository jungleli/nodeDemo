# NodeDome

Used for demo.

## 环境准备
-------------

 1. 数据库
	- 下载并安装 [MongoDB](https://www.mongodb.org/downloads)
	
 2. nodejs

  - 下载并安装[nodejs](https://nodejs.org/en/)
 
	安装nodejs时会一并安装npm，使用以下命令确定是否安装成功
	>node -v
	>npm -v

运行项目
-------------
 1. clone

  git clone https://github.com/jungleli/nodeDemo
  
 2. 安装npm依赖包

	```
	>cd <project-folder>
	>npm install
	```
**Note:** Before you start, install 'nodemon' with global,  it can be used reload automatically. 


	```
	>npm install -g nodemon
	```
 3. 启动database server

	```
	>cd <mongdb-install-folder/bin>
	>mongodexe --dbpath "<project-folder>/data/"
	```
 4. 运行项目
 
	```
	>cd <project-folder>
	>npm start
	```
 5. 打开浏览，启动：

    >http://localhost:3000