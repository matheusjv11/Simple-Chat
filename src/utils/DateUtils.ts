import {
  format,
  isSameWeek,
  isToday,
  differenceInMinutes,
  isYesterday
} from 'date-fns'

export class DateUtils {
  private currentDate: Date

  public constructor(currentDate: Date) {
    this.currentDate = currentDate
  }

  public lessThanFiveMinutesAgo(): boolean {
    const minutesDiff = differenceInMinutes(new Date(), this.currentDate)
    return minutesDiff < 5
  }

  public chatPreviewDate(): string {
    if (this.isToday()) {
      return this.getHoursAndMinutes()
    }

    if (this.isYesterday()) {
      return 'Yesterday'
    }

    if (this.isSameWeek()) {
      return this.getWeekDay()
    }

    return this.getYearDate()
  }

  public static orderDates(dateA: Date, dateB: Date): number {
    return dateB.getDate() - dateA.getDate()
  }

  public getHoursAndMinutes(): string {
    return format(this.currentDate, 'HH:mm')
  }

  private isToday(): boolean {
    return isToday(this.currentDate)
  }

  private isSameWeek(): boolean {
    return isSameWeek(this.currentDate, new Date())
  }

  private isYesterday(): boolean {
    return isYesterday(this.currentDate)
  }

  private getWeekDay(): string {
    return format(this.currentDate, 'dddd')
  }

  private getYearDate(): string {
    return format(this.currentDate, 'MMM d, yyyy')
  }
}
