using Microsoft.EntityFrameworkCore;
using MyWebApi.Models.entities;

namespace MyWebApi.Data
{
// this is a derived class or child class inheriting from the DbContext the syntax : acts as the inherits from operator in c#
// your class automatically gains all the complex machinery required to talk to a database without you writing the code for it.
// so by inheriting this DbContext it will inherit all the methods such as Add SaveChanges and connection handelling from microsofts DbContext
// methods SaveChanges() Add()
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        // this says tells Ef that i want to store employee object in the database 
        // so employee object for the employees database 
        // So, when you query Employees, you get back a list of Employee objects.
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments{get;set;}
    }
}
 