[string]$newFileName = "c:\\prg\\ng_" + [DateTime]::Now.ToString("yyyyMMdd-HHmmss") + ".log";

cd C:\Dev\Balboa\Main\Code\wwwroot\Corporatek.Web.UI\ui

ng serve | tee $newFileName

