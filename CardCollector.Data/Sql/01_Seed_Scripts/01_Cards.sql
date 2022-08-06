SET IDENTITY_INSERT [dbo].[Cards] ON
GO
	----------- BASE SET -----------
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 1)
	BEGIN
		Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (1, 'Alakazam', '', 1, GETDATE(), GETDATE(), '5abc4e98-3639-48ec-8ee4-89d4dc263e15', '4b5844d0-1931-4ee1-81d2-1cdd6bfe0693', 'Base Set', 1999, '.jpg', '.jpg', 1)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 2)
	BEGIN
		Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (2, 'Blastoise', '', 1, GETDATE(), GETDATE(), '3f285374-cdcb-4592-850e-8621976ebe22', '0f8c974f-67e4-4586-aa71-c45e5d2d394a', 'Base Set', 1999, '.jpg', '.jpg', 2)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 3)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (3, 'Chansey', '', 1, GETDATE(), GETDATE(), 'bc826ab8-0c43-466c-9e77-a044d52d973a', '04cb3506-ecc4-4dde-b97c-c76a6070030b', 'Base Set', 1999, '.jpg', '.jpg', 3)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 4)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (4, 'Charizard', '', 1, GETDATE(), GETDATE(), 'c42a6930-7d84-4e9c-82d9-96b3db4059b6', 'a2f36924-5e4d-4908-895c-0af3ee42d3a3', 'Base Set', 1999, '.jpg', '.jpg', 4)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 5)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (5, 'Clefairy', '', 1, GETDATE(), GETDATE(), 'd1d8df99-618b-4045-8146-907800448989', '3c48aa86-26e4-4c25-b3d5-fef2a6ce749b', 'Base Set', 1999, '.jpg', '.jpg', 5)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 6)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (6, 'Gyarados', '', 1, GETDATE(), GETDATE(), '0f2be311-ff22-4b26-a762-8c488647c1cd', '88e81db1-e490-4a0d-b11e-a3ce85e862f7', 'Base Set', 1999, '.jpg', '.jpg', 6)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 7)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (7, 'Hitmonchan', '', 1, GETDATE(), GETDATE(), '3cbd4cf3-4fec-45d4-8754-33079d4dbb26', '977ef8ce-954c-4213-b124-55eaf6c6280d', 'Base Set', 1999, '.jpg', '.jpg', 7)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 8)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (8, 'Machamp', '', 1, GETDATE(), GETDATE(), 'd9420a34-34ea-4328-be73-e0c67533dbc1', 'a33d9e48-b557-4139-bba3-088f71ff46b8', 'Base Set', 1999, '.jpg', '.jpg', 8)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 9)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (9, 'Magneton', '', 1, GETDATE(), GETDATE(), '2761c0f2-0371-4422-83fd-c45910a147a7', '93b38fc1-30d6-4f75-828c-456abec8a57e', 'Base Set', 1999, '.jpg', '.jpg', 9)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 10)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (10, 'Mewtwo', '', 1, GETDATE(), GETDATE(), 'c91d844c-57b1-4874-b5a9-8e38c588fee1', '1c5f1146-130a-48e8-b8e4-f99a3aa319d2', 'Base Set', 1999, '.jpg', '.jpg', 10)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 11)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (11, 'Nidoking', '', 1, GETDATE(), GETDATE(), 'a7e72e26-d02e-4f6f-8840-8b62ddbfa858', 'ce0badbf-b4d6-40c9-a0b6-0a91f3cf50d2', 'Base Set', 1999, '.jpg', '.jpg', 11)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 12)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (12, 'Ninetales', '', 1, GETDATE(), GETDATE(), 'e41eab72-433d-4994-9c82-dec02a78888e', '163fd357-3fdf-4f26-9d79-d58c320c7eb4', 'Base Set', 1999, '.jpg', '.jpg', 12)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 13)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (13, 'Poliwrath', '', 1, GETDATE(), GETDATE(), '821f6c55-e410-425c-adbb-516cc18fd513', '8064e548-cf67-439c-acb4-e8498a9e1771', 'Base Set', 1999, '.jpg', '.jpg', 13)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 14)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (14, 'Raichu', '', 1, GETDATE(), GETDATE(), '0a45aa12-dc6c-4312-b33c-b1a33d02cea3', '52582949-0948-41da-b80d-59b89f45d20d', 'Base Set', 1999, '.jpg', '.jpg', 14)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 15)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (15, 'Venusaur', '', 1, GETDATE(), GETDATE(), '05f4e000-ded6-4ef9-9bb4-4cebd7a3dd4a', '78defc10-a420-4e73-b002-0367a4130862', 'Base Set', 1999, '.jpg', '.jpg', 15)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 16)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (16, 'Zapdos', '', 1, GETDATE(), GETDATE(), '6e647a34-66e7-4c54-a362-3b974a5b3269', '2e568e40-eb2e-46e0-b191-246a802d85e2', 'Base Set', 1999, '.jpg', '.jpg', 16)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 17)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (17, 'Beedrill', '', 1, GETDATE(), GETDATE(), 'e2e95fa5-dda3-4ab6-9485-44e8f923065b', '410f046f-ee6f-4f6a-9167-8b96e458ea6d', 'Base Set', 1999, '.jpg', '.jpg', 17)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 18)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (18, 'Dragonair', '', 1, GETDATE(), GETDATE(), '7023a7c0-28be-4b34-b0aa-b2c313a60037', '4b3eb163-a6b7-42a5-bd5f-2e4eb9b4377b', 'Base Set', 1999, '.jpg', '.jpg', 18)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 19)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (19, 'Dugtrio', '', 1, GETDATE(), GETDATE(), '137a57d2-8ded-49fb-8894-bf8b3173bba5', 'e97f5ae1-e875-4553-b801-b0fb44ac2562', 'Base Set', 1999, '.jpg', '.jpg', 19)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 20)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (20, 'Electabuzz', '', 1, GETDATE(), GETDATE(), '294a29fe-4b49-4388-972c-a4e31566f2cf', '4157500a-ea8e-4ba1-ac4e-666a83eac22a', 'Base Set', 1999, '.jpg', '.jpg', 20)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 21)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (21, 'Electrode', '', 1, GETDATE(), GETDATE(), 'e9b2ac81-7424-40ab-87ef-8d36288b92b7', '7ba40999-65d1-42f4-9fde-8cb9f465ebd7', 'Base Set', 1999, '.jpg', '.jpg', 21)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 22)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (22, 'Pidgeotto', '', 1, GETDATE(), GETDATE(), 'dd69d571-cdd1-4f47-855b-f9c6e9e22790', '4d8f3160-fa61-4e1d-999f-362df124f43b', 'Base Set', 1999, '.jpg', '.jpg', 22)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 23)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (23, 'Arcanine', '', 1, GETDATE(), GETDATE(), '42f89a9c-6238-444f-b30a-79f03448b355', 'dbdb3ed8-15ff-4f2c-8f19-a4adeedae2f3', 'Base Set', 1999, '.jpg', '.jpg', 23)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 24)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (24, 'Charmeleon', '', 1, GETDATE(), GETDATE(), '4defe35c-dd32-424c-8b0c-8b6b4aedbf2c', 'ddbbaa0c-9a42-4927-aacd-11f2e3a9bb8a', 'Base Set', 1999, '.jpg', '.jpg', 24)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 25)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (25, 'Dewgong', '', 1, GETDATE(), GETDATE(), '85e0d948-fe21-4804-ad0e-91f052652fb5', '43661124-7698-4e37-95b6-b998594aee16', 'Base Set', 1999, '.jpg', '.jpg', 25)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 26)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (26, 'Dratini', '', 1, GETDATE(), GETDATE(), 'b45e3e43-a8c0-4944-9a5d-4fdb93a5f784', '18975b7e-4967-4a2b-b40e-a727339d6568', 'Base Set', 1999, '.jpg', '.jpg', 26)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 27)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (27, 'Farfetch''d', '', 1, GETDATE(), GETDATE(), 'e87e89d6-ab25-43c2-961d-f4fa9d9c0bf6', 'c4d59050-2975-472e-b59a-5db98d3da0e5', 'Base Set', 1999, '.jpg', '.jpg', 27)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 28)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (28, 'Growlithe', '', 1, GETDATE(), GETDATE(), '67d2d789-81ea-418d-8ab5-7efb326570ed', 'bb629faa-d192-480a-a0c1-0e025e13d43d', 'Base Set', 1999, '.jpg', '.jpg', 28)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 29)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (29, 'Haunter', '', 1, GETDATE(), GETDATE(), 'b4a31741-3beb-4a95-8cc0-ad9611fac7b0', 'be1a3c81-2f8d-4dac-b449-899df60df293', 'Base Set', 1999, '.jpg', '.jpg', 29)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 30)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (30, 'Ivysaur', '', 1, GETDATE(), GETDATE(), '8d611230-3ae7-4106-a65d-bcb34c9dfa52', '90823bdb-6ccc-4b7e-a584-534fc6f46b7d', 'Base Set', 1999, '.jpg', '.jpg', 30)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 31)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (31, 'Jynx', '', 1, GETDATE(), GETDATE(), 'f51f791c-64be-4fa8-b43c-b804f121cc30', '550faf90-02c4-478a-8f1a-5870cac2d4a3', 'Base Set', 1999, '.jpg', '.jpg', 31)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 32)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (32, 'Kadabra', '', 1, GETDATE(), GETDATE(), 'dd070516-7795-49d5-ad93-d0ffa1244c9f', '0deb6ab3-9b02-4e74-a693-c61b0c1b189f', 'Base Set', 1999, '.jpg', '.jpg', 32)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 33)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (33, 'Kakuna', '', 1, GETDATE(), GETDATE(), 'ec19c991-6dad-4384-a1f4-7cfcd22ae8b7', 'b90805eb-4131-43d4-9ad5-651ccb768aa9', 'Base Set', 1999, '.jpg', '.jpg', 33)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 34)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (34, 'Machoke', '', 1, GETDATE(), GETDATE(), 'dbb1bd72-9d26-45ce-bf8d-b1b6dbff3f03', 'c8c256e1-5594-43a8-a3c9-6d3247018b66', 'Base Set', 1999, '.jpg', '.jpg', 34)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 35)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (35, 'Magikarp', '', 1, GETDATE(), GETDATE(), '99d1c3ae-7707-43bb-b726-1c0995a020df', '61be52da-a008-4e03-8844-43bfaa78673f', 'Base Set', 1999, '.jpg', '.jpg', 35)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 36)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (36, 'Magmar', '', 1, GETDATE(), GETDATE(), '9468bdeb-33fb-42c7-82d1-1cfbeb19ec1c', 'eea3c909-5668-4973-85f6-55ebbeea6fe1', 'Base Set', 1999, '.jpg', '.jpg', 36)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 37)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet) 
		Values (37, 'Nidorino', '', 1, GETDATE(), GETDATE(), '53890001-a7bb-464a-921d-de26ed4ce322', '5ce7bffa-eb80-4285-a7e2-8d2ca1fc62b7', 'Base Set', 1999, '.jpg', '.jpg', 37)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 38)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (38, 'Poliwhirl', '', 1, GETDATE(), GETDATE(), '60832283-0a4e-4f50-a20f-eda7d75cb4c5', 'daa6b17b-a510-4e51-8339-571ebebdef71', 'Base Set', 1999, '.jpg', '.jpg', 38)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 39)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (39, 'Porygon', '', 1, GETDATE(), GETDATE(), 'cad2bfd2-dd27-4dd0-aa92-33d80a5a3b07', '98e5b5a0-bb07-4e9a-91d7-15470cb5d3bf', 'Base Set', 1999, '.jpg', '.jpg', 39)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 40)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (40, 'Raticate', '', 1, GETDATE(), GETDATE(), 'aa6d8d12-b1b0-44e8-9a67-a817437c6e1e', 'd7d5ab83-6d08-42e9-8096-3c0e349c29e6', 'Base Set', 1999, '.jpg', '.jpg', 40)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 41)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (41, 'Seel', '', 1, GETDATE(), GETDATE(), '5e398e7f-8ca4-409a-bb16-14a89d379367', 'b40fe979-1173-4528-b873-a3bad5b724cc', 'Base Set', 1999, '.jpg', '.jpg', 41)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 42)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (42, 'Wartortle', '', 1, GETDATE(), GETDATE(), '259e6fca-9220-4f3d-8361-675300ce4630', '35d275a3-8166-453a-8e30-78536e09aa0b', 'Base Set', 1999, '.jpg', '.jpg', 42)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 43)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (43, 'Abra', '', 1, GETDATE(), GETDATE(), '9996e0f3-162d-4f3f-b126-2cd347d6c8b3', '0068f970-8b5c-4ccf-bedc-ecb214f8eda7', 'Base Set', 1999, '.jpg', '.jpg', 43)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 44)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (44, 'Bulbasaur', '', 1, GETDATE(), GETDATE(), 'c2278629-aa46-4241-ac98-ced4d582e43c', '0081654b-2bfe-4ac5-b9bd-d990118795f7', 'Base Set', 1999, '.jpg', '.jpg', 44)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 45)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (45, 'Caterpie', '', 1, GETDATE(), GETDATE(), 'c9965ced-ad38-4ef3-8d58-5d483713c6ff', 'c6c79739-7fc6-4a3a-9014-1eada7da3f87', 'Base Set', 1999, '.jpg', '.jpg', 45)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 46)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (46, 'Charmander', '', 1, GETDATE(), GETDATE(), '212496c0-3774-4052-a275-dc67ca150c4b', '7c8dac18-9958-4a46-83c7-531fb3241625', 'Base Set', 1999, '.jpg', '.jpg', 46)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 47)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (47, 'Diglett', '', 1, GETDATE(), GETDATE(), '955a4a2b-a182-4df6-a484-947a2b336b5c', '215b3019-7f81-4468-b231-977590157a64', 'Base Set', 1999, '.jpg', '.jpg', 47)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 48)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (48, 'Doduo', '', 1, GETDATE(), GETDATE(), 'a0beb551-15cc-424f-a20d-6562b8c6e03a', 'fb0819df-6623-4e7a-b212-86ca7a9b4946', 'Base Set', 1999, '.jpg', '.jpg', 48)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 49)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (49, 'Drowzee', '', 1, GETDATE(), GETDATE(), 'fc8f3ed9-ee47-4533-9fbe-1d48149fc598', 'b8ab4737-1a6c-4712-b80c-09594f076a21', 'Base Set', 1999, '.jpg', '.jpg', 49)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 50)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (50, 'Gastly', '', 1, GETDATE(), GETDATE(), '468f5a4e-2a94-4de1-a2ef-954c95009657', '82627000-30b9-4f25-ac8b-e54d366f27f3', 'Base Set', 1999, '.jpg', '.jpg', 50)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 51)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (51, 'Koffing', '', 1, GETDATE(), GETDATE(), 'c9f1ab60-30f4-43eb-9044-24693173445b', '9e7f0854-8602-45ba-8b5b-7ed7debbebab', 'Base Set', 1999, '.jpg', '.jpg', 51)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 52)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (52, 'Machop', '', 1, GETDATE(), GETDATE(), 'bf1e332f-3b48-46fb-be15-1c84f1cc65b4', 'e9e6ac20-e1dd-4509-85bb-2e3d6d21b780', 'Base Set', 1999, '.jpg', '.jpg', 52)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 53)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (53, 'Magnemite', '', 1, GETDATE(), GETDATE(), 'abb414df-f160-45ba-a8d8-94c27c4e54b1', '7eab464c-ad72-4c94-9ce8-a1c4c7b56fb1', 'Base Set', 1999, '.jpg', '.jpg', 53)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 54)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (54, 'Metapod', '', 1, GETDATE(), GETDATE(), 'd81df2be-2b3f-4163-9fd2-c17239db686a', 'ad43fc12-6fd8-4e0d-9eaa-e019283a9169', 'Base Set', 1999, '.jpg', '.jpg', 54)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 55)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (55, 'Nidoran♂', '', 1, GETDATE(), GETDATE(), '1f37f3e0-6355-4d0e-bc7d-124ed3f20b91', 'bd16fdc7-37a1-4ff4-b253-7da73a031599', 'Base Set', 1999, '.jpg', '.jpg', 55)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 56)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet) 
		Values (56, 'Onix', '', 1, GETDATE(), GETDATE(), 'cbee8b3a-6c82-4c6a-8e38-c84d039392d1', '4ee80aa1-bcd2-449e-b239-303f61759189', 'Base Set', 1999, '.jpg', '.jpg', 56)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 57)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (57, 'Pidgey', '', 1, GETDATE(), GETDATE(), '98e9b773-1b07-407b-bedd-5011cb4af653', 'c81b1db1-105b-4413-8d8c-106ca161c1a6', 'Base Set', 1999, '.jpg', '.jpg', 57)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 58)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (58, 'Pikachu', '', 1, GETDATE(), GETDATE(), 'bec62931-18d5-4f8a-a552-01a0d204cc01', 'e54352b0-751b-4781-a5d9-039153a078d2', 'Base Set', 1999, '.jpg', '.jpg', 58)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 59)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (59, 'Poliwag', '', 1, GETDATE(), GETDATE(), '238c71a4-95fb-4855-9226-00d3c553c8d7', '0f2c8b1a-f900-40f8-a11c-7e708fca6d23', 'Base Set', 1999, '.jpg', '.jpg', 59)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 60)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (60, 'Ponyta', '', 1, GETDATE(), GETDATE(), 'c134aec5-81d0-442b-85f4-6c3e43ab48eb', '99021ed9-978f-4bfd-b99c-b938fbb8882a', 'Base Set', 1999, '.jpg', '.jpg', 60)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 61)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (61, 'Rattata', '', 1, GETDATE(), GETDATE(), '54dbcd39-f725-482a-aa4d-8184daaf1eea', '3f6d1ab8-827e-4e42-819c-8caaf085a6a5', 'Base Set', 1999, '.jpg', '.jpg', 61)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 62)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (62, 'Sandshrew', '', 1, GETDATE(), GETDATE(), '15ae5dac-5b7c-415f-9374-7c8ee431d47f', 'deb2d154-2d40-45bc-85f5-36e6e4631c29', 'Base Set', 1999, '.jpg', '.jpg', 62)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 63)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (63, 'Squirtle', '', 1, GETDATE(), GETDATE(), '54bbf7e9-4887-4ce5-9971-a47b31608f70', '8f415628-cf0e-469c-b1ec-a424e894675b', 'Base Set', 1999, '.jpg', '.jpg', 63)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 64)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (64, 'Starmie', '', 1, GETDATE(), GETDATE(), '1e5588f2-3b27-4e44-ac48-dfac62832e32', '7ef45f62-0cc2-48b1-8d18-16f92bc11c1e', 'Base Set', 1999, '.jpg', '.jpg', 64)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 65)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (65, 'Staryu', '', 1, GETDATE(), GETDATE(), 'd12e40d0-d774-4cba-92be-39b8dfdd80eb', '7d263cc6-be23-4205-8bd8-1ba755d31eee', 'Base Set', 1999, '.jpg', '.jpg', 65)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 66)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (66, 'Tangela', '', 1, GETDATE(), GETDATE(), '76a5b303-193f-45c8-9127-bcb96844cda6', 'eb6f3175-5b20-4c0f-a339-7bb38f99bc74', 'Base Set', 1999, '.jpg', '.jpg', 66)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 67)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (67, 'Voltorb', '', 1, GETDATE(), GETDATE(), 'b2e4195f-e723-4a85-aed2-0a976787d003', '07a62911-fd5c-4c14-ae3a-5f20ef28ef1e', 'Base Set', 1999, '.jpg', '.jpg', 67)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 68)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (68, 'Vulpix', '', 1, GETDATE(), GETDATE(), '3ff4930f-d6ab-412b-8917-8d135fbf64e3', 'f4b43c10-a064-49b6-9db2-8f1dfe028694', 'Base Set', 1999, '.jpg', '.jpg', 68)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 69)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (69, 'Weedle', '', 1, GETDATE(), GETDATE(), '94c4331a-bab4-473d-9f1d-e09a0067576f', 'f64f814c-469b-4265-a946-af9106979a4a', 'Base Set', 1999, '.jpg', '.jpg', 69)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 70)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (70, 'Clefairy Doll', '', 1, GETDATE(), GETDATE(), '225538e6-da85-421c-bab0-f9fc53183a29', '40acf2eb-c2d9-4a35-896c-d08f37f5c6fb', 'Base Set', 1999, '.jpg', '.jpg', 70)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 71)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (71, 'Computer Search', '', 1, GETDATE(), GETDATE(), 'd83e1f3a-c5d2-49b2-bf89-4089d79337c3', 'f10fbc3e-bcc2-4073-8369-4486b4e3ce54', 'Base Set', 1999, '.jpg', '.jpg', 71)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 72)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (72, 'Devolution Spray', '', 1, GETDATE(), GETDATE(), 'd624776c-8fdc-49cd-8606-263118ef5dd1', 'd8e0eb2e-a290-46fb-9e93-d77013ba6ab5', 'Base Set', 1999, '.jpg', '.jpg', 72)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 73)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (73, 'Imposter Professor Oak', '', 1, GETDATE(), GETDATE(), '4ea92e4e-1cab-4ccc-b675-346afff2dd9f', '9b64006d-4dd7-458c-bfc3-2cff47a0e24a', 'Base Set', 1999, '.jpg', '.jpg', 73)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 74)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (74, 'Item Finder', '', 1, GETDATE(), GETDATE(), 'd219717d-4053-4f38-8ff4-d8a9be101701', '2ed44d6a-f1a9-4b5b-975a-33d81590332e', 'Base Set', 1999, '.jpg', '.jpg', 74)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 75)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (75, 'Lass', '', 1, GETDATE(), GETDATE(), 'cbcb0acb-b140-4978-bd27-8e37a44cbd6f', '41f186ad-b8df-4ed8-80e4-1b966719f78d', 'Base Set', 1999, '.jpg', '.jpg', 75)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 76)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (76, 'Pokemon Breeder', '', 1, GETDATE(), GETDATE(), 'd3d6d6b3-612b-4039-a5be-170e9dc5f6af', '28b725b5-3111-4a6f-909b-7f472c4ecd68', 'Base Set', 1999, '.jpg', '.jpg', 76)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 77)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (77, 'Pokemon Trader', '', 1, GETDATE(), GETDATE(), 'd3f5fe23-91b9-4b10-abd8-5ab596fa5b04', 'f4db62e9-f1c3-4a7f-b518-85fdbe862dbb', 'Base Set', 1999, '.jpg', '.jpg', 77)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 78)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (78, 'Scoop Up', '', 1, GETDATE(), GETDATE(), '6dcf3717-94e6-478d-987a-a00ca43d5677', 'dbe0a81c-1465-472e-9af3-e01eca33d50c', 'Base Set', 1999, '.jpg', '.jpg', 78)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 79)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (79, 'Super Energy Removal', '', 1, GETDATE(), GETDATE(), '8b242b36-1ee5-458c-ba45-ac5076199ee5', '31973f1e-f590-4128-9b55-0c4f40d8cfa3', 'Base Set', 1999, '.jpg', '.jpg', 79)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 80)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (80, 'Defender Base', '', 1, GETDATE(), GETDATE(), 'eb432cef-5d91-4adb-80ca-3cce34447a51', 'e8f83f56-32e0-4d49-b3b7-1999af2339c5', 'Base Set', 1999, '.jpg', '.jpg', 80)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 81)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (81, 'Energy Retrieval', '', 1, GETDATE(), GETDATE(), '074c3d63-8de4-4365-b96f-32806000d1eb', '424b81cd-3193-455e-ac20-1795ee90fe7d', 'Base Set', 1999, '.jpg', '.jpg', 81)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 82)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (82, 'Full Heal', '', 1, GETDATE(), GETDATE(), 'c7f335ec-1986-460c-955f-78586f3355ff', 'd5041093-a40c-4d55-9ad6-c3f8722f0e4e', 'Base Set', 1999, '.jpg', '.jpg', 82)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 83)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (83, 'Maintenance', '', 1, GETDATE(), GETDATE(), 'a2c684e6-de09-4514-a353-8bd5390f303a', '06ea74b0-bcb6-4f83-ab2b-05720aa38ead', 'Base Set', 1999, '.jpg', '.jpg', 83)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 84)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (84, 'PlusPower', '', 1, GETDATE(), GETDATE(), '77ff306e-4bc9-4428-bf08-6a1de427ad73', '637f2a85-e2dc-4570-ac07-e2a20e0d20cc', 'Base Set', 1999, '.jpg', '.jpg', 84)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 85)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (85, 'Pokemon Center', '', 1, GETDATE(), GETDATE(), '507ef47e-5025-43c9-830f-b8ed18509252', '268b5919-7d93-4bf1-979c-b619f442bc09', 'Base Set', 1999, '.jpg', '.jpg', 85)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 86)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (86, 'Pokemon Flute', '', 1, GETDATE(), GETDATE(), '6f0f5ffc-d81e-4725-a6ff-e9b1ae192e86', '35524706-0408-4dcc-85f5-0c139f0dcdc3', 'Base Set', 1999, '.jpg', '.jpg', 86)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 87)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (87, 'Pokedex', '', 1, GETDATE(), GETDATE(), '498de98d-7311-4675-967c-84b211b8cbfb', 'fe31e85c-821c-4e8c-991d-329afe68470a', 'Base Set', 1999, '.jpg', '.jpg', 87)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 88)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (88, 'Professor Oak', '', 1, GETDATE(), GETDATE(), '24b36eaa-a9db-403f-a505-e3d584147ccd', '614a55f6-b3d2-4ac4-a5ad-418384d2decb', 'Base Set', 1999, '.jpg', '.jpg', 88)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 89)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (89, 'Revive', '', 1, GETDATE(), GETDATE(), 'e393262e-630a-4ff5-9dde-3e14f38985e9', 'c19a372d-6eac-4583-bbb4-2a70c856e952', 'Base Set', 1999, '.jpg', '.jpg', 89)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 90)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (90, 'Super Potion', '', 1, GETDATE(), GETDATE(), 'a7a3cc6b-4173-44c0-8585-fc0837e2dc08', 'e8cfdecd-3eae-44ca-af49-6c0625080b2c', 'Base Set', 1999, '.jpg', '.jpg', 90)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 91)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (91, 'Bill', '', 1, GETDATE(), GETDATE(), '08d07a5a-50e7-42af-b94b-73b21bf608a1', 'bd3b9900-bde4-4248-8d7d-2b0b08d3b2df', 'Base Set', 1999, '.jpg', '.jpg', 91)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 92)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (92, 'Energy Removal', '', 1, GETDATE(), GETDATE(), '7ae13f41-6593-4140-bc89-4162424462f8', '0b0cbbb2-9c16-4bc1-ab89-800ffc19ed48', 'Base Set', 1999, '.jpg', '.jpg', 92)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 93)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (93, 'Gust of Wind', '', 1, GETDATE(), GETDATE(), '22ea2d9c-0623-41fc-b0b1-e2f1395d3d9a', '1a4e80ad-90ea-4c43-8113-ee943e40f49d', 'Base Set', 1999, '.jpg', '.jpg', 93)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 94)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (94, 'Potion', '', 1, GETDATE(), GETDATE(), 'f3c7d423-464d-4d72-85ab-336f0dcd8ac7', '82caaff1-6e6a-40da-9515-7a72384f941e', 'Base Set', 1999, '.jpg', '.jpg', 94)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 95)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (95, 'Switch', '', 1, GETDATE(), GETDATE(), '86fd7212-18c5-4101-ac3e-362770ea75c3', 'ad9affd6-18de-477c-aab5-520f1bdb2725', 'Base Set', 1999, '.jpg', '.jpg', 95)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 96)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (96, 'Double Colorless Energy', '', 1, GETDATE(), GETDATE(), 'e6a6f325-0dc2-4a56-8289-1b1efdf818fa', '1f605e22-6ec5-46af-9348-938a6a8be270', 'Base Set', 1999, '.jpg', '.jpg', 96)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 97)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (97, 'Fighting Energy', '', 1, GETDATE(), GETDATE(), '18164d7c-1bdb-4514-9168-49e52e2a87b5', '08860c07-190d-45ab-85a4-31a41ceb0bdb', 'Base Set', 1999, '.jpg', '.jpg', 97)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 98)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (98, 'Fire Energy', '', 1, GETDATE(), GETDATE(), '0319c228-301f-450a-ac35-36622c32fb47', '3420b8d3-2e31-47a3-a172-66e7f7f43707', 'Base Set', 1999, '.jpg', '.jpg', 98)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 99)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (99, 'Grass Energy', '', 1, GETDATE(), GETDATE(), 'fa1475e3-ad11-4ac8-a894-4fc0fe4660b5', 'be5e3d3c-2fb1-4eb0-a1ee-4426c10e6f61', 'Base Set', 1999, '.jpg', '.jpg', 99)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 100)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (100, 'Lightning Energy', '', 1, GETDATE(), GETDATE(), '123abf5c-702e-4c49-a3f6-3e676b9fe4d5', '7c300d00-fcad-4358-979d-2893d8b96a49', 'Base Set', 1999, '.jpg', '.jpg', 100)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 101)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (101, 'Psychic Energy', '', 1, GETDATE(), GETDATE(), '64de3f32-a48c-49e7-aa2d-bfe851d8a289', 'c04532bc-0b6e-49d1-8970-bcdf798bfa66', 'Base Set', 1999, '.jpg', '.jpg', 101)
	END
	IF NOT EXISTS (Select 1 From [dbo].[Cards] Where Id = 102)
		BEGIN Insert Into [dbo].[Cards] (ID, CardName, CardDescription, IsActive, DateCreated, DateModified, FullImageGuid, ThumbnailImageGuid, OriginalSetName, YearReleased, FullImageExtension, ThumbnailImageExtension, NumberInSet)
		Values (102, 'Water Energy', '', 1, GETDATE(), GETDATE(), 'fc73f6d2-8300-4f34-b08e-89959984c8b3', '352d404d-7e09-42d6-8e6a-bd4c62cd1a31', 'Base Set', 1999, '.jpg', '.jpg', 102)
	END

SET IDENTITY_INSERT [dbo].[Cards] OFF
GO
