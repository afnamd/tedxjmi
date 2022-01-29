@echo OFF
setlocal EnableDelayedExpansion
SET /A name = 1

for %%i in (*) do (
    SET src = Converter.bat
    echo "%name%"
    if %%i == Converter.bat ( 
        echo "Skipping ..."    ) else (
        echo  
        rename "%%i" "!NAME!.jpg" 
        SET /A name  =!name! + 1)
)

PAUSE