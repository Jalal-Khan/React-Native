/* eslint-disable prettier/prettier */
import { useState } from 'react';

type TStaus = 'completed' | 'todo' | 'pending';

interface IEnteries {
    date: string;
    status: TStaus;
}
interface ITopic {
    topicName: string;
    enteries: IEnteries[];
}
interface ISubject {
    subjectName: string;
    topics: ITopic[];
    maxTopicEnteries: number;
}

/***************HardCoded Data for Subjects******************/
const subjectList: ISubject[] = [
    //This is the first subject 'Maths'
    {
        //Math is the name of the subject
        subjectName: 'Maths',
        //topics is the list of topics in the subject
        topics: [
            //This is the first topic 'Algebra'
            {
                //Algebra is the name of the topic
                topicName: 'Algebra',
                //enteries is the list of enteries in the topic
                enteries: [
                    //This is the first entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-01',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the second entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-02',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the third entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-03',
                        //status is the status of the entery
                        status: 'completed',
                    },
                ],
            },
            //This is the second topic 'Trigonometry'
            {
                //Trigonometry is the name of the topic
                topicName: 'Trigonometry',
                //enteries is the list of enteries in the topic
                enteries: [
                    //This is the first entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-01',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the second entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-02',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the third entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-03',
                        //status is the status of the entery
                        status: 'completed',
                    },
                ],
            },
            //This is the third topic 'Calculus'
            {
                //Calculus is the name of the topic
                topicName: 'Calculus',
                //enteries is the list of enteries in the topic
                enteries: [
                    //This is the first entery in the topic
                    {
                        //date is the date of the entery
                        date: '2020-04-01',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the second entery in the topic
                    {
                        //date is the date of the entery
                        date: '2022-2-02',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the third entery in the topic
                    {
                        //date is the date of the entery
                        date: '2023-09-03',
                        //status is the status of the entery
                        status: 'completed',
                    },
                ],
            },
        ],
        maxTopicEnteries: 10,
    },
    //This is the second subject 'Physics'
    {
        //Physics is the name of the subject
        subjectName: 'Physics',
        //topics is the list of topics in the subject
        topics: [
            //This is the first topic 'Mechanics'
            {
                //Mechanics is the name of the topic
                topicName: 'Mechanics',
                //enteries is the list of enteries in the topic
                enteries: [
                    //This is the first entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-01',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the second entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-02',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the third entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-03',
                        //status is the status of the entery
                        status: 'completed',
                    },
                ],
            },
            //This is the second topic 'Optics'
            {
                //Optics is the name of the topic
                topicName: 'Optics',
                //enteries is the list of enteries in the topic
                enteries: [
                    //This is the first entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-01',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the second entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-02',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the third entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-03',
                        //status is the status of the entery
                        status: 'completed',
                    },
                ],
            },
        ],
        maxTopicEnteries: 10,
    },
    //This is the third subject 'Chemistry'
    {
        //Chemistry is the name of the subject
        subjectName: 'Chemistry',
        //topics is the list of topics in the subject
        topics: [
            //This is the first topic 'Organic Chemistry'
            {
                //Organic Chemistry is the name of the topic
                topicName: 'Organic Chemistry',
                //enteries is the list of enteries in the topic
                enteries: [
                    //This is the first entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-01',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the second entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-02',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the third entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-03',
                        //status is the status of the entery
                        status: 'completed',
                    },
                ],
            },
            //This is the second topic 'Inorganic Chemistry'
            {
                //Inorganic Chemistry is the name of the topic
                topicName: 'Inorganic Chemistry',
                //enteries is the list of enteries in the topic
                enteries: [
                    //This is the first entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-01',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the second entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-02',
                        //status is the status of the entery
                        status: 'completed',
                    },
                    //This is the third entery in the topic
                    {
                        //date is the date of the entery
                        date: '2021-09-03',
                        //status is the status of the entery
                        status: 'completed',
                    },
                ],
            },
        ],
        maxTopicEnteries: 10,
    },
];
/*******************************************************************SubjectList Ends Here****************************************************************/

const useCalender = () => {
    const [subjects, setSubjects] = useState<ISubject[]>(subjectList);
    const [activeSubject, setActiveSubject] = useState<ISubject | null>(subjectList[0]);

    const changeActiveSubject = (subjectName: string) => {
        const subject = subjects.find((subject) => subject.subjectName === subjectName);
        //if subject is found then set it as active subject
        if (subject) {
            setActiveSubject(subject);
        }
    };

    const addSubject = (subjectName: string) => {
        const subject: ISubject = {
            subjectName: subjectName,
            topics: [],
            maxTopicEnteries: 10,
        };
        //add subject to the subjects array and store it in updateSubjectsArray, setSubjects to update SubjectsArray
        const updateSubjectsArray = [...subjects, subject];
        setSubjects(updateSubjectsArray);
        //set the newly added subject as active subject
        setActiveSubject({ ...subject });
    };

    const updateSubject = (subjectName: string, newSubjectName: string) => {
        //find the subject in the subjects array
        const subject = subjects.find((subject) => subject.subjectName === subjectName);
        //if subject is found then update it and store it in updateSubjectsArray, setSubjects to update SubjectsArray
        if (subject) {
            subject.subjectName = newSubjectName;
            const updateSubjectsArray = [...subjects];
            setSubjects(updateSubjectsArray);
        }
    };

    const deleteSubject = (subjectName: string) => {
        if (activeSubject && activeSubject.subjectName === subjectName) {
            const updatedSubjects = [...subjects].filter((subject) => subject.subjectName !== subjectName);
            setSubjects(updatedSubjects);

            if (updatedSubjects.length > 0) setActiveSubject(updatedSubjects[0]);
            else setActiveSubject(null);
        }
    };

    const addTopic = (topicName: string) => {
        const updatedSubject = activeSubject ? { ...activeSubject } : null;
        if (updatedSubject) {
            updatedSubject.topics.push({ topicName: topicName, enteries: [], });
            setActiveSubject(updatedSubject);
        }
    };

    const updateTopic = (oldTopicName: string, newTopicName: string) => {
        const updatedSubject = activeSubject ? { ...activeSubject } : null;
        if (updatedSubject) {
            const foundTopic = updatedSubject?.topics.find((topic) => topic.topicName === oldTopicName);
            if (foundTopic) {
                foundTopic.topicName = newTopicName;
            }
            setActiveSubject(updatedSubject);
        }
    };

    const deleteTopic = (topicName: string) => {
        const updatedSubject = activeSubject ? { ...activeSubject } : null;
        if (updatedSubject) {
            updatedSubject.topics = updatedSubject.topics.filter((topic) => topicName !== topic.topicName);
            setActiveSubject(updatedSubject);
        }
    };
    const addTopicItem = (topicName: string, entries: IEnteries) => {
        const updatedSubject = activeSubject ? { ...activeSubject } : null;
        if (updatedSubject) {
            const updatedTopic = updatedSubject?.topics.find((topic) => topic.topicName === topicName);
            if (updatedTopic) {
                updatedTopic.enteries.push(entries);
            }

            const length = updatedSubject.topics.map((topic) => topic.enteries.length);
            const maxLength = Math.max.apply(Math, length);
            updatedSubject.maxTopicEnteries = maxLength < 10 ? 10 : maxLength;
        }
        setActiveSubject(updatedSubject);
    };

    const updateTopicItem = (topicName: string, oldEntry: IEnteries, newEntery: IEnteries) => {
        const updatedSubject = activeSubject ? { ...activeSubject } : null;
        if (updatedSubject) {
            const foundTopic = updatedSubject.topics.find((topic) => topic.topicName === topicName);
            if (foundTopic) {
                const foundItem = foundTopic.enteries.find((entry) => entry.date === oldEntry.date && entry.status === oldEntry.status);
                if (foundItem) {
                    foundItem.date = newEntery.date;
                    foundItem.status = newEntery.status;
                }
            }
        }
        setActiveSubject(updatedSubject);
    };

    const deleteTopicItem = (topicName: string, entry: IEnteries) => {
        const updatedSubject = activeSubject ? { ...activeSubject } : null;
        if (updatedSubject) {
            const foundTopic = updatedSubject.topics.find((topic) => topic.topicName === topicName);
            if (foundTopic) {
                foundTopic.enteries = foundTopic.enteries.filter((entery) => !(entery.date === entry.date && entery.status === entry.status));
            }
        }
        setActiveSubject(updatedSubject);
    };

    return {
        subjects,
        activeSubject,
        changeActiveSubject,
        addSubject,
        updateSubject,
        deleteSubject,
        addTopic,
        updateTopic,
        deleteTopic,
        addTopicItem,
        updateTopicItem,
        deleteTopicItem,
    };
};

export default useCalender;