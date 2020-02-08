// gmail sonoppie@gmail.com account password: sonoproot1

import { firebaseSite } from "./destinations.constant";
import { monthsOfSonopAppActive } from "./setDatabaseToDefault.constant";

export const emailConfig = {
    "from": "SonopApp <sonoppi123@gmail.com>",
    "transport": {
        "service": "gmail",
        "auth": {
            "user": "sonoppi123@gmail.com",
            "pass": "sonoproot1"
        }
    }
};

export const emailWeekendNotificationTime = {
    dayOfWeek: 3, // 3
    hour: 12, // 12
    minute: 0, // 0
    month: monthsOfSonopAppActive
}

export const emailNonnieWeekendSummaryTime = {
    dayOfWeek: 4, // 4
    hour: 15, // 15
    minute: 0, // 0
    month: monthsOfSonopAppActive
}

export const emailWeekendReminderContent = {
    subjectLine: `Weekend Sign In Reminder`,
    message: `Please remember to sign in for this weekend. You will make Nonnie very happy.\n\n${firebaseSite}\n\n`,
    signature: `\n\nKind regards,\nSonopApp Team`
}

export const nonnieWeekendSummaryHTMLTemplate = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Nonnie weekend Sign in</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
    .navbar-center {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      text-align: center;
    }

    .template-body {
      border-radius: 5px;
      width: 60%;
      margin: 0px auto;
      float: none;
    }

    @media (max-width: 1000px) {
      .template-body {
        width: 95%;
      }
    }

    @media (min-width: 2000px) {
      .template-body {
        width: 1000px;
      }
    }

    tr:nth-child(even) {
      background-color: #D3DFEE
    }

    tr:nth-child(odd) {
      background-color: #FFF
    }

    .weekend-table {
      background-color: white;
      border-collapse: collapse;
      border-color: #4F81BD;
      margin-right: 6.75pt;
      margin-left: 6.75pt;
      color: #1F497D;
      border-collapse: collapse;
    }

    td,
    th {
      border: 1px solid black;
    }

    td {
      padding: 4px;
    }
  </style>
</head>

<body>
  Liewe Nonnie,
  <br /><br />
  Aantal wat ingeteken het per ete:<br/>
  \tFriday Dinner:\t\t%fridayDinnerCount%<br/>
  \tSaturday Brunch:\t%saturdayBrunchCount%<br/>
  \tSaturday Dinner:\t%saturdayDinnerCount%<br/>
  \tSunday Breakfast:\t%sundayBreakfastCount%<br/>
  \tSunday Lunch:\t\t%sundayLunchCount%<br/>
  \tSunday Dinner:\t\t%sundayDinnerCount%<br/>
  <br /><br />
  Hier onder lys ons die studente wat ingeteken is vir die naweek van die %weekendDate%.
  <br />
  <br />
  <table class="weekend-table">
    <tbody>
        <tr>
            <th width="30%">Student</th>
            <th width="20%">Table</th>
            <th><b>Friday Dinner</b></th>
            <th><b>Saturday Brunch</b></th>
            <th><b>Saturday Dinner</b></th>
            <th><b>Sunday Breakfast</b></th>
            <th><b>Sunday Lunch</b></th>
            <th><b>Sunday Dinner</b></th>
        </tr>
        %data%
    </tbody>
  </table>
  ${emailWeekendReminderContent.signature}

</body>

</html>
`;

export const htmlTemplateVariables = {
    fridayDinnerCount: "%fridayDinnerCount%",
    saturdayBrunchCount: "%saturdayBrunchCount%",
    saturdayDinnerCount: "%saturdayDinnerCount%",
    sundayBreakfastCount: "%sundayBreakfastCount%",
    sundayDinnerCount: "%sundayDinnerCount%",
    sundayLunchCount: "%sundayLunchCount%",
    weekendDate: "%weekendDate%",
    data: "%data%"
}