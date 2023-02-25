import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { AppUtil } from "../../util/AppUtil"

function SvgComponent(props) {
  return (
    <Svg
    height={AppUtil.getHP(2)}
    width={AppUtil.getHP(2)}
      viewBox="-1 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      className="cf-icon-svg"
      {...props}
    >
      <Path d="M16.417 9.579A7.917 7.917 0 118.5 1.662a7.917 7.917 0 017.917 7.917zm-5.629-.421v-.21H8.27a.267.267 0 01-.265-.265V6.176H5.054a.317.317 0 00-.317.316v7.612a.317.317 0 00.317.316h5.418a.317.317 0 00.316-.316V9.158zM6.21 5.384h2.635a.792.792 0 01.505.228l.128.128V4.703H6.526a.318.318 0 00-.317.317zm2.565.807v1.99h2zm1.472.516h2.001l-2-1.988zm2.014.978v-.21h-1.037l.127.127a.79.79 0 01.23.483v4.863h.364a.317.317 0 00.316-.317V7.685z" />
    </Svg>
  )
}

export default SvgComponent
