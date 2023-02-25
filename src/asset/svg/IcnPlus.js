import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { AppUtil } from "../../util/AppUtil"

function SvgComponent(props) {
    return (
        <Svg
            height={AppUtil.getHP(3)}
            width={AppUtil.getHP(3)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="#fff" d="M0 0H24V24H0z" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 9a1 1 0 10-2 0v2H9a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V9zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
                fill="#323232"
            />
        </Svg>
    )
}

export default SvgComponent
