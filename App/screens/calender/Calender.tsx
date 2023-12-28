/* eslint-disable prettier/prettier */
import React from 'react';
import useCalender from '../../lib/api/useCalender';
import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface ITableRow {
    // id: number;
    topicName: string;
}

const Calender: React.FC = () => {
    const {
        subjects,
        activeSubject,
        changeActiveSubject,
        updateSubject,
        deleteSubject,
        addSubject,
        addTopic,
        deleteTopic,
        updateTopic,
        addTopicItem,
        deleteTopicItem,
        updateTopicItem,
    } = useCalender();
    const [showSubjectManagement, setShowSubjectManagement] = useState<boolean>();
    const [showSubjectAddModal, setShowSubjectAddModal] = useState<boolean>();
    const [showSubjectEditModal, setShowSubjectEditModal] = useState<boolean>();
    const [showChangeSubjectModal, setShowChangeSubjectModal] = useState<boolean>();
    const [showAddTopicModal, setShowAddTopicModal] = useState<boolean>(false);
    const [showTopicSettings, setShowTopicSettings] = useState<string>();
    const [topicEditMode, setTopicEditMode] = useState<boolean>(false);
    const [showAddTopicItem, setShowAddTopicItem] = useState<string>();
    const [showManageTopicItem, setShowManageTopicItem] = useState<{
        topicName: string;
        date: string;
        status: boolean;
    } | null>();
    const [topicItemEditMode, setTopicItemEditMode] = useState<boolean>(false);

    //this function is used to delete a subject
    const handleSubjectDeletion = () => {
        if (activeSubject) {
            setShowSubjectManagement(false);
            deleteSubject(activeSubject.subjectName);
        }
    };

    //this function is used to change the subject name
    const handleSubjectEditSubmit = (event: any) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const updatedSubjectName = data.get('subjectName')?.toString()?.trim();

        if (updatedSubjectName && activeSubject) {
            updateSubject(activeSubject.subjectName, updatedSubjectName);
        }
        setShowSubjectManagement(false);
        setShowSubjectEditModal(false);
    };

    const handleSubjectChange = (event: any) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const subjectName = data.get('subjectName')?.toString()?.trim();

        if (subjectName) {
            changeActiveSubject(subjectName);
        }
        setShowChangeSubjectModal(false);
    };

    const handleAddSubject = (event: any) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const subjectName = data.get('subjectName')?.toString()?.trim();

        if (subjectName) {
            addSubject(subjectName);
        }
        setShowSubjectAddModal(false);
    };

    const handleAddTopicSubmit = (event: any) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const topicName = data.get('topicName')?.toString()?.trim();

        if (topicName) {
            addTopic(topicName);
        }
        // if(topicName && activeSubject) {
        //     addTopic(activeSubject.subjectName, topicName);
        // }
        setShowAddTopicModal(false);
    };

    const handleTopicEditSubmit = (event: any) => {
        const data = new FormData(event.target);
        const updatedTopicName = data.get('topicName')?.toString()?.trim();

        if (updatedTopicName && showTopicSettings) {
            updateTopic(showTopicSettings, updatedTopicName);
        }
        setShowTopicSettings('');
        setTopicEditMode(false);
    };

    const handleTopicDeletion = (topicName: string | undefined) => {
        if (topicName) {
            deleteTopic(topicName);
        }

        setShowTopicSettings('');
        setTopicEditMode(false);
    };

    const handleAddTopicItem = (event: any) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const date = data.get('date')?.toString()?.trim();
        const status = data.get('status')?.toString()?.trim();

        if (showAddTopicItem && date && status) {
            const item = { date, status };
            addTopicItem(showAddTopicItem, item as any)
        }
        setShowAddTopicItem('');
    };





    /****UI CODE BY INZIMAM****/

    // Function to handle cell click
    const handleCellClick = (rowId: number) => {
        console.log('TopicId:' + rowId);
        // Add your logic for handling the click event
    };

    // Function to handle button click
    const handleButtonClick = (rowId: number) => {
        console.log('ActionId:' + rowId);
        // Add your logic for handling the button click event
    };

    // Render each row
    const renderRow = ({ item }: { item: ITableRow }) => (
        <View style={styles.rowContainer}>
            <TouchableOpacity
                onPress={() => handleCellClick(item.id)}
                style={styles.cell}>
                <Text style={styles.topicText}>{item.topicName}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleButtonClick(item.id)} //open changeTopicNameModel Here
                style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Edit</Text>
            </TouchableOpacity>
        </View >

    );

    return (
        <View style={styles.container}>
            {activeSubject && (
                <TouchableOpacity>
                    <View style={styles.Header}>
                        <Text style={styles.headerText}>{activeSubject.subjectName}</Text>
                        <TouchableOpacity
                            onPress={() => handleAddSubject(item.id)} //open addSubjectModel on press
                            style={styles.addSubjectbutton}>
                            <Text>Add Subject</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )}
            {activeSubject && (
                <FlatList
                    data={activeSubject.topics}
                    renderItem={renderRow}
                    keyExtractor={item => item.topicName}
                />
            )}

            {/* this view is for testing to find better position for bottons */}
            <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity
                    onPress={() => handleAddSubject()} //open addSubjectModel on press
                    style={styles.addTopicbutton}>
                    <Text>Add New Topic</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '90%',
        backgroundColor: '#F5FCFF',
    },
    cell: {
        flex: 1,
        padding: 16,
        // borderBottomWidth: 3,
        // borderBottomColor: 'black',
        fontWeight: 'bold',
        fontSize: 38,
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#111827',
        borderBottomWidth: 3,
    },
    headerText: {
        fontSize: 38,
        color: '#000000',
        padding: 12,
        fontWeight: 'bold',
    },
    addSubjectbutton: {
        padding: 10,
        backgroundColor: 'lightgreen',
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 12,
        alignSelf: 'flex-end'
    },
    addTopicbutton: {
        padding: 10,
        backgroundColor: 'lightgreen',
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 12,
        // alignSelf: 'flex-end'
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',

    },
    topicText: {
        // color: '#222222',
        fontSize: 15,
        fontWeight: '600',
    },
    actionButton: {
        padding: 10,
        backgroundColor: '#FFA07A',
        borderRadius: 10,
        alignItems: 'baseline',
    },
    actionButtonText: {
        fontSize: 15,
        fontWeight: '400',
    }
});

export default Calender;
