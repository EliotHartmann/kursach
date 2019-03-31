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
        jabber: '',
        email: '',
        status: '',
        historyOfWork: []
    },
    calls: [],
    humans: [],
    createdUserInfo: {
        login: '',
        password: ''
    },
    stats: [],
    userInfo: {
        username: '',
        email: ''
    }
};

