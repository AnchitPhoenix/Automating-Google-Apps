// Original script referred from https://github.com/aysiu/
// Creation of trigger and script modifications done by https://github.com/AnchitPhoenix/


// Method created to transfer ownership of files and folders in Google Drive to the given Email ID
function ChangeFileOwnership() {
  // New owner of files and folders
  var new_owner = 'newEmail@domain.com';

  // Get all the files and folders in Google Drive for the user running this script
  var files = DriveApp.searchFiles('"me" in owners');
  var folders = DriveApp.searchFolders('"me" in owners');

    // Loop through every file
    while (files.hasNext()) {		
        var file = files.next();
        var file_name = file.getName();             // Assign the file name to a variable

        // Log the name of the file changing ownership
        Logger.log("Changing ownership of " + file_name + " to " + new_owner);

        // Set the owner to be the new owner
        try { file.addEditor(new_owner); }   catch(err){ Logger.log(err.message); }
        try { file.setOwner(new_owner); }    catch(err){ Logger.log(err.message); }
    }

  
    // Loop through every folder
    while (folders.hasNext()) {

        var folder = folders.next();
        var folder_name = folder.getName();         // Assign the folder name to a variable

		// Log the name of the folder changing ownership
        Logger.log("Changing ownership of " + folder_name + " to " + new_owner);
        
		// Set the owner to be the new owner
        try { folder.addEditor(new_owner); }   catch(err){ Logger.log(err.message); }
        try { folder.setOwner(new_owner); }    catch(err){ Logger.log(err.message); }
    }
}


// Send a confirmation email once the files is executed
function sendEmail(){
  GmailApp.sendEmail("oldEmail@domain.com", "Auto-mailer: File Ownership transferred", "Script executed at:" + Utilities.formatDate(new Date(), "GMT+5:30","dd-MMM-yyyy HH:mm:ss "));
}


// Create a trigger for auto-execution of script on every hour
function setupTrigger() {
  ScriptApp.newTrigger('ChangeFileOwnership').timeBased().everyHours(1).create();
  ScriptApp.newTrigger('sendEmail').timeBased().everyHours(1).create();
}

