export class WeekendModel implements WeekendMealsModel {
    fridayDinner: boolean = false;
    saturdayBrunch: boolean = false;
    saturdayDinner: boolean = false;
    sundayBreakfast: boolean = false;
    sundayLunch: boolean = false;
    sundayDinner: boolean = false;
    student: any;
    constructor(student: any) {
        this.student = student;
    }
}

export function createInitialWeekendEntry(student: any): WeekendModel {
    return {
        student: student,
        fridayDinner: false,
        saturdayBrunch: false,
        saturdayDinner: false,
        sundayBreakfast: false,
        sundayDinner: false,
        sundayLunch: false
    }
}

export interface WeekendMealsModel {
    fridayDinner: boolean;
    saturdayBrunch: boolean;
    saturdayDinner: boolean;
    sundayBreakfast: boolean;
    sundayLunch: boolean;
    sundayDinner: boolean;
}

export interface WeekendMealDetail {
    meal: WeekendMeals;
    status: boolean;
    date: string;
}

export function getNextDayOfWeek(dayOfWeek: number): string {
    let date = new Date();
    let resultDate = new Date();
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

    return resultDate.getDate().toString() + "/" + (resultDate.getMonth() + 1).toString();
}

export function getWeekendMeals(weekendDetailFromStudent: WeekendModel): WeekendMealDetail[] {
    const weekendMeals: WeekendMealDetail[] = [];
    weekendMeals.push({
        meal: WeekendMeals.FridayDinner,
        status: weekendDetailFromStudent.fridayDinner,
        date: getNextDayOfWeek(5)
    });
    weekendMeals.push({
        meal: WeekendMeals.SaturdayBrunch,
        status: weekendDetailFromStudent.saturdayBrunch,
        date: getNextDayOfWeek(6)
    });
    weekendMeals.push({
        meal: WeekendMeals.SaturdayDinner,
        status: weekendDetailFromStudent.saturdayDinner,
        date: getNextDayOfWeek(6)
    });
    weekendMeals.push({
        meal: WeekendMeals.SundayBreakfast,
        status: weekendDetailFromStudent.sundayBreakfast,
        date: getNextDayOfWeek(0)
    });
    weekendMeals.push({
        meal: WeekendMeals.SundayLunch,
        status: weekendDetailFromStudent.sundayLunch,
        date: getNextDayOfWeek(0)
    });
    weekendMeals.push({
        meal: WeekendMeals.SundayDinner,
        status: weekendDetailFromStudent.sundayDinner,
        date: getNextDayOfWeek(0)
    });
    return weekendMeals;
}

export function getWeekendMealStatuses(weekendDetailFromStudent: WeekendModel): WeekendMealsModel {
    return {
        fridayDinner: weekendDetailFromStudent.fridayDinner,
        saturdayBrunch: weekendDetailFromStudent.saturdayBrunch,
        saturdayDinner: weekendDetailFromStudent.saturdayDinner,
        sundayBreakfast: weekendDetailFromStudent.sundayBreakfast,
        sundayLunch: weekendDetailFromStudent.sundayLunch,
        sundayDinner: weekendDetailFromStudent.sundayDinner
    }
}

export enum WeekendMeals {
    FridayDinner = 'Friday Dinner',
    SaturdayBrunch = 'Saturday Brunch',
    SaturdayDinner = 'Saturday Dinner',
    SundayBreakfast = 'Sunday Breakfast',
    SundayLunch = 'Sunday Lunch',
    SundayDinner = 'Sunday Dinner',
}