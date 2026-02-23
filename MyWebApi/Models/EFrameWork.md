It serves as an Object-Relational Mapper (ORM), which enables .NET developers to work with a database using .NET objects (classes) instead of writing raw SQL code.
DbContext is the integral part of Entity FrameWork Core ,it acts as a bridge between your domain or entity classes and the database.
whenever we do some changes to objects like Employee and persists those changes to the data base when SaveChanges() is called !
Objects <--> to the database 
public class ApplicationDbContext : DbContext {inheritance}
so it inherits methods like savechanges() AddDbContext()
public DbSet<Employee> Employees{get;set;}

after this blue print configuration is done go to appsettings.json
add a connection Strings
allowedhosts:* 
ConnectionStrings:
 DefaultConnection: "Server:localhost,1433,Database=EmployeeDb

 <!-- the params inside the default connection Databse will create the employeeDb or use the exisisting one;user password and trustservercertificate  -->
 the BLUEPRINT ApplicationDbContext.js and the Address appsettings.json

 now we need to introduce both of them to the programme the blue print and the address 

now add the services DbContext 
builder.services.addDbContext<ApplicationDbContext>(options=>
options.useSqlServer(builder.configuration.GetConnectionString("defaultConnection"))
);

after adding all this shit 

go to the terminal and run the following command 
<!-- dotnet ef migrations add InitialMigration -->
so this creates a migrations folder inside the code base 
A "Migration" is like a version control commit for your database. It looks at your ApplicationDbContext and figures out what tables to create.

now applying the migration to the actual sql server database 
<!-- dotnet ef database update -->

lets see how to add the tables under the same data base 
if we r updating the table lets see how to make this 

after creating a departtment.cs and updating the applicationDbContext
<!-- dotnet ef migrations add AddDepartmentTable -->
<!-- dotnet ef database update -->

where AddDepartmentTable is the migration name 


GUID global unique identifier !!!!
default string holds the database name under it the tables employees and departments are created check the connectionStrings>defaultstring for more info 