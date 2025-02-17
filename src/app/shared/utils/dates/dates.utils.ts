export class DateUtils {
  static getDateTime(props: { date: Date, time: Date }): number {
    const { date, time } = props;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();

    const transformedDate = new Date(`${year}-${month}-${day} ${hour}:${minutes}:${seconds}:${milliseconds}`);
    return transformedDate.getTime();
  }
}
