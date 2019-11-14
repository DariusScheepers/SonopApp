import { firebaseSite } from "./destinations.constant";

export const emailConfig = {
    "from": "SonopApp <sonoppi123@gmail.com>",
    "transport": {
        "service": "gmail",
        "auth": {
            "user": "sonoppi123@gmail.com",
            "pass": "sonoproot"
        }
    }
};

export const emailNotificationTime = {
    dayOfWeek: 3,
    hour: 12,
    minute: 0
}

export const emailWeekendReminderContent = {
    subjectLine: `Weekend Sign In Reminder`,
    message: `Please remember to sign in for this weekend. You will make Nonnie very happy.

    ${firebaseSite}\n`,
    signature: `\n\nKind regards,\nSonopApp Team`
}