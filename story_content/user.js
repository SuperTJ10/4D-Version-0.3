function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6c54cMTTe7V":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email = 'matt@twentyoneleadership.com'

var courseTitle = player.GetVar('feedback_courseTitle');

var subject = 'Submission of: ' + courseTitle;
var emailBody = 'Hi Matt' + '\n\n I would like you to review my 4D Talent Report submission:' + '\n\n How is your talent strategy linked to your business strategy?'+ '\n\n DefineQ1+ '\n\nPlease include additional information below:\n\n';
var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody);
win = window.open(mailto_link, 'emailWin');
}

