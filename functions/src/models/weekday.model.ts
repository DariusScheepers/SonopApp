import { weekdayDeadlines } from "../constants/mealDeadlines.constant";
import { getNextDayOfWeek, weekInMilliseconds } from "../utils/date.util";

export interface WeekdayMealsModel {
    mondayLunch: WeekdaySignInStatus;
    mondayDinner: WeekdaySignInStatus;
    tuesdayLunch: WeekdaySignInStatus;
    tuesdayDinner: WeekdaySignInStatus;
    wednesdayLunch: WeekdaySignInStatus;
    wednesdayDinner: WeekdaySignInStatus;
    thursdayLunch: WeekdaySignInStatus;
    thursdayDinner: WeekdaySignInStatus;
    fridayLunch: WeekdaySignInStatus;
}

export interface WeekdayMealDetail {
    meal: WeekdayMeals;
    status: WeekdaySignInStatus;
    date: string;
    openStatus: boolean;
}

export function getWeekdayMeals(weekendDetailFromStudent: WeekdayModel): WeekdayMealDetail[] {
    const weekendMeals: WeekdayMealDetail[] = [
        {
            meal: WeekdayMeals.mondayLunch,
            status: weekendDetailFromStudent.mondayLunch,
            date: getWeeklySignOutDayDate(1,1),
            openStatus: getOpenStatus(1)
        },
        {
            meal: WeekdayMeals.mondayDinner,
            status: weekendDetailFromStudent.mondayDinner,
            date: getWeeklySignOutDayDate(2,1),
            openStatus: getOpenStatus(2)
        },
        {
            meal: WeekdayMeals.tuesdayLunch,
            status: weekendDetailFromStudent.tuesdayLunch,
            date: getWeeklySignOutDayDate(3,2),
            openStatus: getOpenStatus(3)
        },
        {
            meal: WeekdayMeals.tuesdayDinner,
            status: weekendDetailFromStudent.tuesdayDinner,
            date: getWeeklySignOutDayDate(4,2),
            openStatus: getOpenStatus(4)
        },
        {
            meal: WeekdayMeals.wednesdayLunch,
            status: weekendDetailFromStudent.wednesdayLunch,
            date: getWeeklySignOutDayDate(5,3),
            openStatus: getOpenStatus(5)
        },
        {
            meal: WeekdayMeals.wednesdayDinner,
            status: weekendDetailFromStudent.wednesdayDinner,
            date: getWeeklySignOutDayDate(6,3),
            openStatus: getOpenStatus(6)
        },
        {
            meal: WeekdayMeals.thursdayLunch,
            status: weekendDetailFromStudent.thursdayLunch,
            date: getWeeklySignOutDayDate(7,4),
            openStatus: getOpenStatus(7)
        },
        {
            meal: WeekdayMeals.thursdayDinner,
            status: weekendDetailFromStudent.thursdayDinner,
            date: getWeeklySignOutDayDate(8,4),
            openStatus: getOpenStatus(8)
        },
        {
            meal: WeekdayMeals.fridayLunch,
            status: weekendDetailFromStudent.fridayLunch,
            date: getWeeklySignOutDayDate(9,5),
            openStatus: getOpenStatus(9)
        }
    ];
    return weekendMeals;
}

export class WeekdayModel implements WeekdayMealsModel {
    mondayLunch: WeekdaySignInStatus;
    mondayDinner: WeekdaySignInStatus;
    tuesdayLunch: WeekdaySignInStatus;
    tuesdayDinner: WeekdaySignInStatus;
    wednesdayLunch: WeekdaySignInStatus;
    wednesdayDinner: WeekdaySignInStatus;
    thursdayLunch: WeekdaySignInStatus;
    thursdayDinner: WeekdaySignInStatus;
    fridayLunch: WeekdaySignInStatus;
    student: any;
    constructor(
        mondayLunch: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        mondayDinner: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        tuesdayLunch: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        tuesdayDinner: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        wednesdayLunch: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        wednesdayDinner: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        thursdayLunch: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        thursdayDinner: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        fridayLunch: WeekdaySignInStatus = WeekdaySignInStatus.signedIn,
        student: any,
    ) {        
        this.mondayLunch = mondayLunch;
        this.mondayDinner = mondayDinner;
        this.tuesdayLunch = tuesdayLunch;
        this.tuesdayDinner = tuesdayDinner;
        this.wednesdayLunch = wednesdayLunch;
        this.wednesdayDinner = wednesdayDinner;
        this.thursdayLunch = thursdayLunch;
        this.thursdayDinner = thursdayDinner;
        this.fridayLunch = fridayLunch;
        this.student = student;
    }
}

function getOpenStatus(mealPosition: number)
{
    var today = new Date();
    var afterLunchDeadline = today.getHours() >= weekdayDeadlines.lunchDeadlineHour;
    var afterDinnerDeadline = today.getHours() >= weekdayDeadlines.dinnerDeadlineHour;
    var todayDay = today.getDay();
    switch (mealPosition) {
        case 1: return ((!afterLunchDeadline && todayDay == 1) || todayDay < 1);
        case 2: return ((!afterDinnerDeadline && todayDay == 1) || todayDay < 1);
        case 3: return ((!afterLunchDeadline && todayDay == 2) || todayDay < 2);
        case 4: return ((!afterDinnerDeadline && todayDay == 2) || todayDay < 2);
        case 5: return ((!afterLunchDeadline && todayDay == 3) || todayDay < 3);
        case 6: return ((!afterDinnerDeadline && todayDay == 3) || todayDay < 3);
        case 7: return ((!afterLunchDeadline && todayDay == 4) || todayDay < 4);
        case 8: return ((!afterDinnerDeadline && todayDay == 4) || todayDay < 4);
        case 9: return ((!afterLunchDeadline && todayDay == 5) || todayDay < 5);
    
        default: return false;
    } 
}

function getWeeklySignOutDayDate(mealPos: number, dayOfWeek: number)
{
    var result;
    if (!mealAlreadyPassedToday(mealPos))
        result = getNextDayOfWeek(dayOfWeek);
    else
    {
        var date = new Date();
        var currentDate = new Date();
        currentDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
        var resultDate = new Date(currentDate.getTime() + weekInMilliseconds);

        result = resultDate.getDate().toString() + "/" + (resultDate.getMonth()+1).toString();
    }
    return result;
}

function mealAlreadyPassedToday(mealPosition: number)
{
    var today = new Date();
    var afterLunchDeadline = today.getHours() >= weekdayDeadlines.lunchDeadlineHour;
    var afterDinnerDeadline = today.getHours() >= weekdayDeadlines.dinnerDeadlineHour;
    var todayDay = today.getDay();
    switch (mealPosition) {
        case 1: return (afterLunchDeadline && todayDay == 1);
        case 2: return (afterDinnerDeadline && todayDay == 1);
        case 3: return (afterLunchDeadline && todayDay == 2);
        case 4: return (afterDinnerDeadline && todayDay == 2);
        case 5: return (afterLunchDeadline && todayDay == 3);
        case 6: return (afterDinnerDeadline && todayDay == 3);
        case 7: return (afterLunchDeadline && todayDay == 4);
        case 8: return (afterDinnerDeadline && todayDay == 4);
        case 9: return (afterLunchDeadline && todayDay == 5);
    
        default: return false;
    }
}

export function getWeekdayMealStatuses(weekdayDetailFromStudent: WeekdayModel): WeekdayMealsModel {
    return {
        mondayLunch: weekdayDetailFromStudent.mondayLunch,
        mondayDinner: weekdayDetailFromStudent.mondayDinner,
        tuesdayLunch: weekdayDetailFromStudent.tuesdayLunch,
        tuesdayDinner: weekdayDetailFromStudent.tuesdayDinner,
        wednesdayLunch: weekdayDetailFromStudent.wednesdayLunch,
        wednesdayDinner: weekdayDetailFromStudent.wednesdayDinner,
        thursdayDinner: weekdayDetailFromStudent.thursdayDinner,
        thursdayLunch: weekdayDetailFromStudent.thursdayLunch,
        fridayLunch: weekdayDetailFromStudent.fridayLunch
    }
}

export function createInitialWeekdayEntry(student: any): WeekdayModel {
    return {
        student: student,
        mondayLunch: WeekdaySignInStatus.signedIn,
        mondayDinner: WeekdaySignInStatus.signedIn,
        tuesdayLunch: WeekdaySignInStatus.signedIn,
        tuesdayDinner: WeekdaySignInStatus.signedIn,
        wednesdayLunch: WeekdaySignInStatus.signedIn,
        wednesdayDinner: WeekdaySignInStatus.signedIn,
        thursdayLunch: WeekdaySignInStatus.signedIn,
        thursdayDinner: WeekdaySignInStatus.signedIn,
        fridayLunch: WeekdaySignInStatus.signedIn,
    }
}

export enum WeekdayMeals {
    mondayLunch = 'Monday Lunch',
    mondayDinner = 'Monday Dinner',
    tuesdayLunch = 'Tuesday Lunch',
    tuesdayDinner = 'Tuesday Dinner',
    wednesdayLunch = 'Wednesday Lunch',
    wednesdayDinner = 'Wednesday Dinner',
    thursdayLunch = 'Thursday Lunch',
    thursdayDinner = 'Thursday Dinner',
    fridayLunch = 'Friday Lunch',
}

export enum WeekdaySignInStatus {
    signedOutPermanent = 0,
    signedOutTemporarily = 1,
    signedIn = 2,
}