SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROC [dbo].[_CopyAllTables]
(
    @par varchar(10)
)
AS
BEGIN
    SET NOCOUNT ON
	CREATE TABLE #Results (TableName nvarchar(370))

    DECLARE @TableName varchar(256), @NewTableName varchar(256), @sqlExec varchar(4056)
    SET  @TableName = ''

	IF @par = 'copy'
	BEGIN
		PRINT 'run copy'
		WHILE @TableName IS NOT NULL
		BEGIN
			SET @TableName = 
			(
				SELECT MIN(QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME))
				FROM     INFORMATION_SCHEMA.TABLES
				WHERE         TABLE_TYPE = 'BASE TABLE'
					AND    QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME) > @TableName
					AND    OBJECTPROPERTY(
							OBJECT_ID(
								QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME)
								 ), 'IsMSShipped'
								   ) = 0
			)

			IF (@TableName <> '')
			BEGIN
				SET @NewTableName = SUBSTRING(@TableName, 1,7) +'_'+SUBSTRING(@TableName, 8, LEN(@TableName)) 
				PRINT 'Copy from '+ @TableName + ' => ' + @NewTableName;
				EXEC
				(		
					'SELECT * INTO ' + @NewTableName + ' FROM ' + @TableName
				)
			END
		END
	END

	IF @par = 'drop'
	BEGIN
		PRINT 'run drop'
		WHILE @TableName IS NOT NULL
		BEGIN
			SET @TableName = 
			(
				SELECT MIN(QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME))
				FROM     INFORMATION_SCHEMA.TABLES
				WHERE         TABLE_TYPE = 'BASE TABLE'
					AND    SUBSTRING(TABLE_NAME,1,1) = '_'
					AND    QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME) > @TableName
					AND    OBJECTPROPERTY(
							OBJECT_ID(
								QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME)
								 ), 'IsMSShipped'
								   ) = 0
			)

			IF (@TableName <> '')
			BEGIN
				PRINT @TableName
				EXEC
				(		
					'DROP TABLE ' + @TableName
				)
			END
		END
	END

	IF @par = 'compare'
	BEGIN
		PRINT 'run compare'
		WHILE @TableName IS NOT NULL
		BEGIN
			SET @TableName = 
			(
				SELECT MIN(QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME))
				FROM     INFORMATION_SCHEMA.TABLES
				WHERE         TABLE_TYPE = 'BASE TABLE'
					AND    SUBSTRING(TABLE_NAME,1,1) <> '_'
					AND    QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME) > @TableName
					AND    OBJECTPROPERTY(
							OBJECT_ID(
								QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME)
								 ), 'IsMSShipped'
								   ) = 0
			)

			IF (@TableName <> '')
			BEGIN
				SET @NewTableName = SUBSTRING(@TableName, 1,7) +'_'+SUBSTRING(@TableName, 8, LEN(@TableName)) 
				PRINT 'Copmare tables '+ @TableName + ' === ' + @NewTableName;
				SET @sqlExec = 
					'SELECT TableName FROM '+
					' (SELECT '''+
					@TableName + ''' as TableName ' +
                    ',(SELECT COUNT(*) FROM ' + @TableName + ') as a' +
                    ',(SELECT COUNT(*) FROM ' + @NewTableName + ') as b' +
					' ) as c '+
					'WHERE a<>b'
				PRINT @sqlExec

	            INSERT INTO #Results
                EXEC
                (
					@sqlExec
                )
			END
		END
		SELECT * FROM #Results
	END

END
