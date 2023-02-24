import { StyleSheet } from "react-native";
import { AppUtil } from "../../util/AppUtil";

const Style = StyleSheet.create({
    listing: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        borderRadius:AppUtil.getHP(1),
        padding: AppUtil.getHP(1.5),
        borderColor:'gray',
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        backgroundColor:'white',
        marginBottom:AppUtil.getHP(2)
    },
    clickArea: { paddingRight: AppUtil.getHP(1), alignItems: 'center', flexDirection: 'row' },
    multiSelectYellowBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: AppUtil.getWP(1.8)

    },
    multiSelectBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: AppUtil.getWP(1.8)
    },
    label: {
        fontSize: AppUtil.getHP(1.8),
        color: 'black',
    },
    endCal: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

})

export default Style;