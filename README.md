# Automating-Google-Apps
> This repository contains scripts/codes to automate day-to-day tasks on Google Apps (like Gmail, GoogleDrive, Calendar, Sheets, Slides, etc.)



## GoogleDrive
[Bulk transfer the ownership](https://github.com/AnchitPhoenix/Automating-Google-Apps/blob/main/GoogleDrive/BulkFileOwnershipTransfer.gs) of Google Drive files/folders from one Gmail ID to another:
- First search the list of files/folders which are owned by you using ```searchFiles()``` and ```searchFolders()``` methods
- Store the list of files/folders in a new variable like "files" or "folders"
- Use the ```addEditor()``` method to give "Editor" access to the new owner
- Transfer the files/folders ownership using ```setOwner()``` method


