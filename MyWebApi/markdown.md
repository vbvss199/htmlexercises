welcome to .net project 
controllers is the place where we will add the end points like GEt post delete and update 

Models which are similar to shcemas we going to work with 
These are classes that represent the data structures your API works with
They also define the structure of your entities, often mapping to database tables.


Services (or Business Logic Layer): While not strictly required for the simplest APIs, it's a strongly recommended best practice to separate your business logic and data access concerns into separate "service" classes.


the main hero of our folder is Program.cs where cs stands for c sharp this is the entry point of our application where the host is built and started 



to create a webapi
dotnet new webapi -n TempWebApi


<!-- if any time want to kill the process  -->
lsof -i tcp:portnumber 
lsof -i tcp:5051 the one which we defined inside the launch json as of now it is 5052
lists the port number with pid 
kill -9 5051


<!-- add package -->
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools

the dependices will be under the MyWebApi.csproj make sure to check them there MyWebApi.csproj


<!-- where and when we will save our data which is models  -->
create an entities folder under which we need to create employee.cs which will have all the fields required make sure to see the ? nullable property over there 

<!-- to make the connection between the application and the databse we create the application db context  -->
the applicationdb class will inherit from another class  DbContext 

<!-- there inside the class we will add a property for the collection we r going to save inside the database  it will take the type dbset will the class employee we created  -->


while connecting the server is localhost 1433

to start the sql server 
docker start sqlserver
or 
docker ps -a

Think of a container as:
“A lightweight, isolated mini-computer that runs ONE thing.”
compared to vm it is lighter faster shares host os easy to delete and used everywhere 

to delete the sql server 
docker rm sqlserver


docker ps          # running containers #process status 
docker ps -a       # all containers
docker stop sqlserver
docker start sqlserver
docker rm sqlserver



to check the correct process status we use docker ps 


<!-- if we r getting the port error every time then remove the port from the usage  -->
lsof -i tcp:5052 {list open files}
kill -9 <PID> {-9 to say kill the process }


<!-- add a new controller to do crud operations inside it  -->
actually on vs code it is messy or long process coz we dont hve any pre build templates so when creating the controllers we need to code from the scratch i guess 
API Controller 



C# basics
Console.WriteLine camelcase 


<!-- to allow the usage of the api we need to do cors in the program.cs that allows to use this api without any interruption by the react front end framework  -->