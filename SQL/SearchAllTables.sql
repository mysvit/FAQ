SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[_SearchAllTables]
(
    @SearchStr nvarchar(100),
	@type varchar(10)
)
AS
BEGIN

    CREATE TABLE #Results (ColumnName nvarchar(370), ColumnValue varchar(max))

    SET NOCOUNT ON

    DECLARE @TableName nvarchar(256), @ColumnName nvarchar(128), @SearchStr2 nvarchar(110)
    SET  @TableName = ''
    SET @SearchStr2 = QUOTENAME('%' + @SearchStr + '%','''')

    WHILE @TableName IS NOT NULL

    BEGIN
        SET @ColumnName = ''
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

		PRINT @TableName
        WHILE (@TableName IS NOT NULL) AND (@ColumnName IS NOT NULL)
        BEGIN
			PRINT '          ' + @ColumnName
			IF (@type = 'char')
				SET @ColumnName =
				(
					SELECT MIN(QUOTENAME(COLUMN_NAME))
					FROM     INFORMATION_SCHEMA.COLUMNS
					WHERE         TABLE_SCHEMA    = PARSENAME(@TableName, 2)
						AND    TABLE_NAME    = PARSENAME(@TableName, 1)
						AND    DATA_TYPE IN ('text', 'ntext', 'varchar', 'nvarchar', 'char', 'nchar')
						AND    QUOTENAME(COLUMN_NAME) > @ColumnName
				)
			IF (@type = 'id')
				SET @ColumnName =
				(
					SELECT MIN(QUOTENAME(COLUMN_NAME))
					FROM     INFORMATION_SCHEMA.COLUMNS
					WHERE         TABLE_SCHEMA    = PARSENAME(@TableName, 2)
						AND    TABLE_NAME    = PARSENAME(@TableName, 1)
						AND    DATA_TYPE IN ('guid')
						AND    QUOTENAME(COLUMN_NAME) > @ColumnName
				)

            IF @ColumnName IS NOT NULL

            BEGIN
                INSERT INTO #Results
                EXEC
                (
                    'SELECT ''' + @TableName + '.' + @ColumnName + ''', CAST(' + @ColumnName + ' as varchar(max)) as data' +
                    ' FROM ' + @TableName + ' (NOLOCK) ' +
                    ' WHERE ' + @ColumnName + ' LIKE ' + @SearchStr2
                )
            END
        END    
    END

    SELECT ColumnName, ColumnValue FROM #Results
END
