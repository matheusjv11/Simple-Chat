import moment, { Moment } from 'moment'

export class DateUtils {
  private momentDate: Moment

  public constructor(date: string) {
    this.momentDate = moment(date)
  }

  public lessThanFiveMinutesAgo(): boolean {
    const minutesDiff = moment().diff(this.momentDate, 'minutes')
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

  public static orderDates(dateA: string, dateB: string): number {
    // @ts-ignore
    return moment(dateB).format('X') - moment(dateA).format('X')
  }

  public getHoursAndMinutes(): string {
    return this.momentDate.format('HH:mm')
  }

  private isToday(): boolean {
    return this.momentDate.isSame(moment(), 'day')
  }

  private isSameWeek(): boolean {
    return this.momentDate.isSame(moment(), 'week')
  }

  private isYesterday(): boolean {
    return this.momentDate.isSame(moment().subtract(1, 'day'), 'day')
  }

  private getWeekDay(): string {
    return this.momentDate.format('dddd')
  }

  private getYearDate(): string {
    return this.momentDate.format('MMM D, YYYY')
  }
}
