import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Style from './HomeStyle'
import AddTask from '../../components/addtask/AddTask'
import { useDispatch, useSelector } from 'react-redux'
import Listing from '../../components/listing/Listing'
import Option from '../../components/option/Option'
import { deleteSelected } from '../../redux/Slice'
import IcnDelete from '../../asset/svg/IcnDelete'
import IcnPlus from '../../asset/svg/IcnPlus'
import { AppUtil } from '../../util/AppUtil'


const Home = (props) => {
    const data = useSelector(state => state)
    const [isModal, setModal] = useState(false)
    const [isDelete, setDelete] = useState(false)
    const dispatch = useDispatch()



    const onDelete = () => {
        dispatch(deleteSelected())
        setDelete(!isDelete)
    }

    const renderItem = ({ item }) => {
        return (
            <Listing item={item} setDelete={setDelete} isDelete={isDelete} />
        )
    }

    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.mainView}>
                <View style={Style.header}>
                    <Text style={Style.homeTxt}>ToDo</Text>
                    <TouchableOpacity  onPress={() => isDelete ? onDelete() : setModal(true)}>
                        {
                            isDelete ?
                                <IcnDelete height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
                                :

                               <IcnPlus />
                        }

                    </TouchableOpacity>
                </View>
                {
                    data.storeToList.length > 0
                        ?
                        <View style={Style.listing}>
                            <FlatList
                                data={data.storeToList}
                                renderItem={renderItem}
                            // keyExtractor={item => item.id}
                            />
                        </View> :
                        <View style={Style.noData}>
                            <Text style={Style.noDataTxt}>No data found</Text>
                        </View>
                }
            </View>
            {isModal && <AddTask isModal={isModal} setModal={setModal} />}
        </SafeAreaView>
    )
}

export default Home