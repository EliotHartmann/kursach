export const INITIAL_STATE = 'INITIAL_STATE';

export const initialState={
    type: INITIAL_STATE,
    login: 'login',
    message: ' test message',
    role: 'officer',
    info: {
        salary: '123',
        rank: 'CAPTAIN',
        p_station: 'police station name',
        name: 'John',
        surname: 'Evergarden',
        jabber: 'jabber',
        email: 'email@email.com',
        status: 'ALIVE',
        historyOfWork: [
            {
                start: "2017-03-27 16:45:27",
                finish: "2018-03-27 16:45:25",
                policeStation: {
                    name: 'police station name'
                }
            },
            {
                start: "2018-09-27 16:45:27",
                finish: "2018-09-27 16:45:25",
                policeStation: {
                    name: 'police station name 2'
                }
            }
        ]
    },
    calls: [
        {
            time:"2019-03-26 17:55:23",
            description:"qq",
            status: true
        },
        {
            time:"2018-03-27 17:12:19",
            description:"ww",
            status: false
        }
    ],
    humans: [
        {
            name: 'John',
            surname: 'Lalala',
            p_number: '1',
            location: 'street 10 district'
        },
        {
            name: 'John',
            surname: 'asdasd',
            p_number: '123123',
            location: 'street 148 district'
        }
    ],
    createdUserInfo: {
        login: '',
        password: ''
    },
    stats: [
        {
            name: "Brooklyn",
            area: "123123",
            crimeNumber: "12121",
            population: "131"
        },
        {
            name: "Queens",
            area: "1223",
            crimeNumber: "1212111",
            population: "1311"
        }
    ],
    userInfo: {
        username: 'username',
        email: 'username@mail.mail'
    }
};

