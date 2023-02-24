import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Style from './ListingStyle'
import { AppUtil } from '../../util/AppUtil';
import IcnSelect from '../../asset/svg/IcnSelect'
import IcnMore from '../../asset/svg/IcnMore'
import Option from '../option/Option';
import AddTask from '../addtask/AddTask';


const Listing = ({ item,onData,setDelete }) => {
    const [isCheckedOne, setCheckedOne] = useState(false);
    const [isModal, setModal] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [isItem, setItem] = useState({})
    const date = (props) => {
        if (Date.parse(props.date) - Date.parse(new Date()) < 0) {
            return 'Pending'
        }
        else {
            return 'Completed'
        }
    }
    console.log(isCheckedOne);
    const onAction = (data) => {
        setDelete(true)
        setCheckedOne(!isCheckedOne)
        onData(data)
    }
    return (
        <View style={Style.listing}>
            <View style={Style.clickArea}>
                <TouchableOpacity onPress={() => onAction(item)} >
                    {
                        isCheckedOne ?
                            (
                                <View style={Style.multiSelectYellowBorderView}>
                                    <IcnSelect height={AppUtil.getHP(1.4)} width={AppUtil.getHP(1.4)} />
                                </View>
                            )
                            :
                            (
                                <View style={Style.multiSelectBorderView} />
                            )}
                </TouchableOpacity>
            </View>
            <View>
                <Text style={Style.label}>{item.task}</Text>
                <Text style={Style.label}>{item.date}</Text>
            </View>
            <View style={Style.endCal}>
                <Text style={Style.label}>{date(item)}</Text>
                <TouchableOpacity onPress={() => setModal(!isModal)}>
                    <IcnMore height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
                </TouchableOpacity>
            </View>
            {isModal && <Option isModal={isModal} setModal={setModal} item={item}
                setItem={(data) => setItem(data)}
                setEdit={setOpen} />}
            {isOpen && <AddTask item={isItem} setModal={setOpen} isModal={isModal} />}
        </View>
    )
}

export default Listing