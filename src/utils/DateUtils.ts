import moment, { Moment } from 'moment'

export class DateUtils {
  private momentDate: Moment

  public constructor(date: string) {
    this.momentDate = moment(date)
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

  private isToday(): boolean {
    return this.momentDate.isSame(moment(), 'day')
  }

  private isSameWeek(): boolean {
    return this.momentDate.isSame(moment(), 'week')
  }

  private isYesterday(): boolean {
    return this.momentDate.isSame(moment().subtract(1, 'day'), 'day')
  }

  private getHoursAndMinutes(): string {
    return this.momentDate.format('HH:mm')
  }

  private getWeekDay(): string {
    return this.momentDate.format('dddd')
  }

  private getYearDate(): string {
    return this.momentDate.format('MMM D, YYYY')
  }
}
