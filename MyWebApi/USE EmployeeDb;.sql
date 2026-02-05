USE EmployeeDb;
GO
SELECT * FROM Employees;

INSERT INTO Employees (FirstName, LastName, Email)
VALUES ('Test', 'User', 'test.user@example.com');
INSERT INTO Employees (FirstName, LastName, Email)
VALUES
('Prudvi', 'Avanacharla', 'prudvi.avanacharla@example.com'),
('Aarav', 'Sharma', 'aarav.sharma@example.com'),
('Neha', 'Patel', 'neha.patel@example.com'),
('Rahul', 'Verma', 'rahul.verma@example.com'),
('Sneha', 'Iyer', 'sneha.iyer@example.com'),
('Karthik', 'Reddy', 'karthik.reddy@example.com'),
('Ananya', 'Gupta', 'ananya.gupta@example.com'),
('Vikram', 'Singh', 'vikram.singh@example.com'),
('Pooja', 'Mehta', 'pooja.mehta@example.com'),
('Rohit', 'Kumar', 'rohit.kumar@example.com');

-- -- to create a table portfolio  
-- CREATE TABLE Portfolios (
--     PortfolioId INT IDENTITY PRIMARY KEY,
--     Name NVARCHAR(100) NOT NULL,
--     Owner NVARCHAR(100) NOT NULL,
--     CreatedAt DATETIME NOT NULL DEFAULT GETDATE()
-- );

-- -- portfolio items
-- CREATE TABLE PortfolioItems (
--     PortfolioItemId INT IDENTITY PRIMARY KEY,
--     PortfolioId INT NOT NULL,
--     AssetName NVARCHAR(100) NOT NULL,
--     AssetType NVARCHAR(50) NOT NULL,
--     Quantity DECIMAL(18,2) NOT NULL,
--     AveragePrice DECIMAL(18,2) NOT NULL,

--     CONSTRAINT FK_PortfolioItems_Portfolios
--         FOREIGN KEY (PortfolioId)
--         REFERENCES Portfolios(PortfolioId)
--         ON DELETE CASCADE
-- );

