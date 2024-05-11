import Alarm from "./pages/Alarm"
import Time from "./pages/Time"
import CountDown from "./pages/CountDown"
import Stopwatch from "./pages/StopWatch"

export default function Clock () {
    return(
        <>
            <Alarm />
            <Time />
            <CountDown />
            <Stopwatch />
        </>
    )
}