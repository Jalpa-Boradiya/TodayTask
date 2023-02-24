import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './OptionStyle';
import IcnDate from '../../asset/svg/IcnDate'
import IcnClose from '../../asset/svg/IcnClose'
import DatePicker from 'react-native-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList, duplicateItem } from '../../redux/Slice';
import moment from 'moment';
import AddTask from '../addtask/AddTask';

const Option = (props) => {
    const { isModal, setModal, item, setEdit,setItem } = props
    const [date, setDate] = useState(new Date())

    const dispatch = useDispatch()
    const addDuplicate = (props) => {
        const id = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(2, 10);
        dispatch(duplicateItem({ task: props.task, date: props.date, id: id }))
        setModal(false)
    }
    const editItem = (item) => {
        setItem(item)
        setEdit(true) 
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModal(!isModal);
                }}>
                <View style={styles.subView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => setModal(!isModal)} style={styles.closeIcn}><IcnClose /></TouchableOpacity>
                        <View style={styles.hline} />
                        <TouchableOpacity onPress={() => editItem(item) }>
                            <Text style={styles.modalText}>Edit Task</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => addDuplicate(item)}>
                            <Text style={styles.modalText}>Duplicate Task</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(removeFromList(item.id))}>
                            <Text style={styles.modalText}>Remove Task</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Option

