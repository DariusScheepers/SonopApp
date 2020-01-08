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

export const emailNotificationTime = {
    dayOfWeek: 3, // 3
    hour: 12, // 12
    minute: 0, // 0
    month: monthsOfSonopAppActive
}

export const emailWeekendReminderContent = {
    subjectLine: `Weekend Sign In Reminder`,
    message: `Please remember to sign in for this weekend. You will make Nonnie very happy.\n\n${firebaseSite}\n\n`,
    signature: `\n\nKind regards,\nSonopApp Team`
}