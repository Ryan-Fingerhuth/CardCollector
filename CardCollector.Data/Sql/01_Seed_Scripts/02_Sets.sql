SET IDENTITY_INSERT [dbo].[Sets] ON
GO
	----------- BASE SET -----------
	IF NOT EXISTS (Select 1 From [dbo].[Sets] Where Id = 1)
	BEGIN
		Insert Into [dbo].[Sets] (ID, SetDescription, SetCreatedByUserId, IsActive, DateCreated, DateModified, DefaultSet)
		Values (1, 'Base Set', 1, 1, GETDATE(), GETDATE(), 1)
	END
	
SET IDENTITY_INSERT [dbo].[Sets] OFF
GO
