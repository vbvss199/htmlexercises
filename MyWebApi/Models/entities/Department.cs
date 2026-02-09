namespace MyWebApi.Models.entities;
// the above is namespace helps us to match the folder structure without a namespace the class floats in the global namespace 
// namespace" (the root).
// Reference Issues: Other files (like ApplicationDbContext) expect your classes to live in MyWebApi.Models.entities. If you remove it, you'll have to add using global::Department; or rewrite imports everywhere
public class Department
{
    public Guid Id{get;set;}
    public required string Name{get;set;}
    public string? Location{get;set;}
}