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
    hline : {
        width:'100%',
        height:AppUtil.getHP(1),
        backgroundColor:'#f5f5f5',
        marginBottom:AppUtil.getHP(2),
        
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
  
  
    modalView: {
        margin: 20,
        width: AppUtil.getHP(46),
        height: AppUtil.getHP(25),
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 35,
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
        color: 'black',
        marginStart:AppUtil.getHP(2),
        marginRight:AppUtil.getHP(2),
        borderBottomWidth:1,
        borderBottomColor:'grey',
        paddingBottom:AppUtil.getHP(0.5),
    
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