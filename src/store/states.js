export const INITIAL_STATE = 'INITIAL_STATE';

export const initialState={
    type: INITIAL_STATE,
    login: '',
    message: '',
    role: '',
    info: {
        salary: '',
        rank: '',
        p_station: '',
        name: '',
        surname: '',
        email: '',
        officerStatus: '',
        shift: '',
        id: '',
        premium: '',
        status: '',
        historyOfWork: []
    },
    calls: [
        {
            description: "123",
            time: "12",
            status: "ACTIVE"
        },
        {
            description: "1234",
            time: "21",
            status: "FINISHED"
        }],
    humans: [],
    createdUserInfo: {
        login: '',
        password: ''
    },
    stats: [],
    userInfo: {
        username: '',
        email: ''
    },
    messages:[]
};

