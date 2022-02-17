IF NOT EXISTS (Select 1 From dbo.Cards)
BEGIN
	SET IDENTITY_INSERT dbo.Cards ON
	Insert into dbo.Cards (Id, DateCreated, DateModified, IsActive, CardName, CardDescription, OriginalSet, YearReleased)
	Values (1, GETDATE(), GETDATE(), 1, 'Temp - CardName', 'Card Description', 'Base Set', 1998)
	SET IDENTITY_INSERT dbo.Cards OFF
END