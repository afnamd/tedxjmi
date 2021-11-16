@echo off
for %%f IN (*.jpg) DO convert -quality 70 "%%f" "%%f"