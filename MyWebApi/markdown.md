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
lsof -i tcp:5051 the one which we defined inside the launch.json
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