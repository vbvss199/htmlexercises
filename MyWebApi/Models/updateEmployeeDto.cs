namespace MyWebApi.Models
{
    public class UpdateEmployeeDto
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }

    }
}

// now use this object inside the controller 