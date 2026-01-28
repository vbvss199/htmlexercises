using Microsoft.AspNetCore.Mvc;
using MyWebApi.Data; 
using MyWebApi.Models.entities;
using MyWebApi.Models;
namespace MyWebApi.Controllers
{
    // basically this will be going to the localhost:portnumber/api/controllernamewedefined by using the cotroller it maps the name to the defined controller 
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly ApplicationDbContext Dbcontext;
        // employee constructor 
        public EmployeesController(ApplicationDbContext Dbcontext){
            this.Dbcontext=Dbcontext;
        }

        //  this is the place where we do all the crud operations getting employee details and so on
        [HttpGet]
        public IActionResult GetAllEmployees()
        // needs a return type of the iactionresult 
        // we injected the dbcontext file inside the programme.cs file so that we can access it anywhere , this can be done in the employee controller by constructor injection for this controller 
        {
            var allEmployees=Dbcontext.Employees.ToList();
            return Ok(allEmployees);
        }

        [HttpPost]
        // the params inside the addemployee will be dto's which are data transfer objects 
        public IActionResult AddEmplyee(AddEmployeeDto addEmployeeDto)
        { 
            var employeeEntity=new Employee(){
                FirstName= addEmployeeDto.FirstName,
                LastName=addEmployeeDto.LastName,
                Email=addEmployeeDto.Email
            };
            // we will be adding an employee using the db context file.  
            Dbcontext.Employees.Add(employeeEntity);
            Dbcontext.SaveChanges();

            return Ok(employeeEntity);
        }
    }
}