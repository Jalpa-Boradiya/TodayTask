import { StyleSheet } from "react-native";
import { AppUtil } from "../../util/AppUtil";

const styles = StyleSheet.create({
    centeredView: {
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1
    },
    closeIcn : {
        position:'absolute',
        right:AppUtil.getHP(1.8),
        top:AppUtil.getHP(1.8),
    },
    dateTxt: {
        color: 'black',
        fontSize: AppUtil.getHP(1.8),
        paddingStart: AppUtil.getWP(2),
    },
    addBtn: {
        backgroundColor: 'green',
        height: AppUtil.getHP(5.5),
        borderRadius: AppUtil.getHP(1),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:AppUtil.getWP(4),
    },
    addBtnTxt: {
        color: 'white',
        fontWeight:'bold',
        fontSize:AppUtil.getHP(2.3)
    },
    dateCal: {
        flexDirection: 'row',
        alignItem: 'center',
        paddingTop: AppUtil.getWP(4),
    },
    modalView: {
        margin: 20,
        width: AppUtil.getHP(46),
        height: AppUtil.getHP(45),
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: AppUtil.getHP(2),
        color: 'black'
    },
    inputBox: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        height: AppUtil.getHP(20),
        borderRadius: 8,
    },
    subView: {
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
});

export default styles