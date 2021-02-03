import dayjs, {Dayjs} from 'dayjs'

const sleepTime = ({hour = '1', minute = '00', meridiem = 'am'}) => {
  let m = meridiem === 'am' ? 1 : 2

  let now = dayjs()

  let wakeup = now
    .startOf('day')
    .add(+hour * m, 'hours')
    .add(+minute, 'minutes')

  const sixCycles = wakeup.subtract(90 * 6, 'minutes') // 9 hrs
  const fiveCycles = wakeup.subtract(90 * 5, 'minutes') // 7.5 hrs
  const fourCycles = wakeup.subtract(90 * 4, 'minutes') // 6 hrs

  const formatTime = (time: Dayjs) => time.format('h:mm A')

  return [sixCycles, fiveCycles, fourCycles].map(formatTime)
}

export {sleepTime}
