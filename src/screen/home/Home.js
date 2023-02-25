import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Style from './HomeStyle'
import AddTask from '../../components/addtask/AddTask'
import { useDispatch, useSelector } from 'react-redux'
import Listing from '../../components/listing/Listing'
import Option from '../../components/option/Option'
import { removeSelected } from '../../redux/Slice'


const Home = (props) => {
    const [isModal, setModal] = useState(false)
    const [isDelete, setDelete] = useState(false)
    const [delData, setDelData] = useState([])
    const dispatch = useDispatch()

    const data = useSelector(state => state)

    const getIds = (item) => {
        const data = []
        data.push(...delData,item)
        setDelData(data)
    }
    const onDelete = () => {
        dispatch(removeSelected(delData))
    }
    const renderItem = ({ item }) => {
        return (
            <Listing item={item} setDelete={setDelete} onData={(detail) => getIds(detail)} />
        )
    }

console.log('update data',data.storeToList);
    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.mainView}>
                <View style={Style.header}>
                    <Text style={Style.homeTxt}>ToDo</Text>
                    <TouchableOpacity style={isDelete ? Style.delBtn : Style.plusBtn} onPress={() => isDelete ? onDelete() : setModal(true)}>
                        <Text style={Style.plusBtnTxt}>{isDelete ? 'Delete' : '+'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.listing}>
                    <FlatList
                        data={data.storeToList}
                        renderItem={renderItem}
                        // keyExtractor={item => item.id}
                    />
                </View>
            </View>
            {isModal && <AddTask isModal={isModal} setModal={setModal} />}
        </SafeAreaView>
    )
}

export default Home