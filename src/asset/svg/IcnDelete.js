import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { AppUtil } from "../../util/AppUtil"

function SvgComponent(props) {
  return (
    <Svg
    height={AppUtil.getHP(2)}
    width={AppUtil.getHP(2)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 11v6M14 11v6M4 7h16M6 7h12v11a3 3 0 01-3 3H9a3 3 0 01-3-3V7zM9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
