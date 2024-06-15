import { RandomHead, AHMET, MELIKE, HASAN } from "./big-head";
import { MdTabletMac, MdLaptopMac, MdDesktopMac } from "react-icons/md";
import { BigHeadMessage } from "./displays"
import { useWithinWindowWidth } from "./hooks"

const POSSIBLE_STATES = {
    small: { name: "Ahmet", size: "small", icon: <MdTabletMac /> },
    medium: { name: "Melike", size: "medium", icon: <MdLaptopMac /> },
    big: { name: "Hasn", size: "big", icon: <MdDesktopMac /> },
}

function AvatarsDisplay() {
    const isBig = useWithinWindowWidth(1000, Infinity)
    const isMedium = useWithinWindowWidth(700, 999)
    const isSmall = useWithinWindowWidth(0, 699)
    let person = null;
    let state = null;
    
    switch (true) {
        case isBig:
            person = <RandomHead person={AHMET} />;
            state = POSSIBLE_STATES.big;
            break;
        case isMedium:
            person = <RandomHead person={MELIKE} />;
            state = POSSIBLE_STATES.medium;
            break;
        case isSmall:
            person = <RandomHead person={HASAN} />;
            state = POSSIBLE_STATES.small;
            break;
        default:
   
            break;
    }

    return (
        <div>
            {person}
            <BigHeadMessage {...{ state }} />
        </div>
    )
}

export { AvatarsDisplay }