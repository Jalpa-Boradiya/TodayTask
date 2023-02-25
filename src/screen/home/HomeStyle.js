import { StyleSheet } from "react-native";
import { AppUtil } from "../../util/AppUtil";

const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    listing : {
        flex:1,width:'100%',
        marginTop:AppUtil.getHP(3),
    },
    noData : {
        flex:1,
        justifyContent:'center'
    },
    noDataTxt : {
        fontSize: AppUtil.getHP(2),
        fontWeight: 'bold',
        color : 'black'
    },
    mainView: {
        width: "100%",
        flex:1,
        // justifyContent: "center",
        alignItems: "center",
        paddingHorizontal:AppUtil.getWP(5),
        paddingVertical:AppUtil.getHP(2),
        backgroundColor:'#f2f3f4'
    },
    header : {
        width: "100%",
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    homeTxt : {
        fontSize: AppUtil.getHP(3),
        fontWeight: 'bold',
        color : 'black'
    },
    plusBtn : {
        width: AppUtil.getWP(5),
        height: AppUtil.getWP(5),
        borderRadius: AppUtil.getWP(5/2),
        backgroundColor:'black',
        justifyContent:'center',
        alignItems: 'center',
    },
    delBtn  : {
        borderRadius: AppUtil.getWP(1),
        backgroundColor:'black',
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal:AppUtil.getWP(3),
    },
    plusBtnTxt : {
        marginBottom:4,
        fontSize: AppUtil.getHP(2),
        color : 'white',
        fontWeight:'700'
    }
});

export default Style;