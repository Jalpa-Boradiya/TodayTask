import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './AddTaskStyle';
import IcnDate from '../../asset/svg/IcnDate'
import IcnClose from '../../asset/svg/IcnClose'
import DatePicker from 'react-native-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../../redux/Slice';
import moment from 'moment';

const AddTask = (props) => {
    const { isModal, setModal } = props
    const [task, setTask] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    const id = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(2, 10);
    const addItem = () => {
        dispatch(addToList({ task, date: moment(date).format('DD-MM-YYYY'), id: id }))
        setTask('')
        setModal(false)
    }
    const data = props?.item
    useEffect(() => {
        props.item && setTask(props.item?.task)
    }, [])
    const updateItem = () => {

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
                        <Text style={styles.modalText}>Enter Task</Text>
                        <TextInput
                            value={task}
                            onChangeText={(txt) => setTask(txt)}
                            style={styles.inputBox}
                        />
                        <View style={styles.dateCal}>
                            <TouchableOpacity onPress={() => setOpen(true)}>
                                <IcnDate />
                            </TouchableOpacity>
                            <Text style={styles.dateTxt}>Select Due Date</Text>
                        </View>
                        <TouchableOpacity style={styles.addBtn} onPress={() => props.item ? updateItem() : addItem()}>
                            <Text style={styles.addBtnTxt}>{props.item ? 'UPDATE' : 'ADD'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </Modal>
        </View>
    )
}

export default AddTask

