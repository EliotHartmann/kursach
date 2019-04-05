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
                start: "2017-03-27T16:45:27.920+0000",
                finish: "2018-03-27T16:45:25.746+0000",
                policeStation: {
                    name: 'police station name'
                }
            },
            {
                start: "2018-09-27T16:45:27.920+0000",
                finish: "2018-09-27T16:45:25.746+0000",
                policeStation: {
                    name: 'police station name 2'
                }
            }
        ]
    },
    calls: [
        {
            time:"2019-03-27T17:55:23.918+0000",
            description:"qq",
            status: true
        },
        {
            time:"2018-03-27T17:55:25.450+0000",
            description:"ww",
            status:false
        }
    ],
    humans: [
        {
            name: 'John',
            p_number: '1',
            location: 'street 10 district'
        },
        {
            name: 'John',
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

