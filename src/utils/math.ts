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

const wakeTime = () => {
  const now = dayjs().add(14, 'minutes') // add 14 minutes to prepare for sleep
  const startOfHour = now.startOf('hour')
  const startOfMinute = now.startOf('minute')

  const hDelta = +startOfMinute - +startOfHour // length of current hour in milliseconds
  const hDeltaMinutes = hDelta / 1000 / 60

  const fiveMinuteChunks = Math.ceil(hDeltaMinutes / 5)
  const roundedMinutes = fiveMinuteChunks * 5

  const sleepTime = dayjs(startOfHour).add(roundedMinutes, 'minutes')

  const fourCycles = sleepTime.add(90 * 4, 'minutes') // 6 hrs
  const fiveCycles = sleepTime.add(90 * 5, 'minutes') // 7.5 hrs
  const sixCycles = sleepTime.add(90 * 6, 'minutes') // 9 hrs

  const formatTime = (time: Dayjs) => time.format('h:mm A')

  return [fourCycles, fiveCycles, sixCycles].map(formatTime)
}

export {sleepTime, wakeTime}
