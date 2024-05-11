import Day from "./pages/Day";
import Month from "./pages/Month";
import Schedule from "./pages/Schedule";
import AddDay from "./pages/AddDay";

export default function Calender () {
    return(
        <>
            <Month />
            <Day />
            <Schedule />
            <AddDay />
        </>
    )
}