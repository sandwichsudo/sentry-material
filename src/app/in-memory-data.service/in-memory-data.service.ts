export class InMemoryDataService {
    createDb() {
        let logs = [{
            id: 0,
            name: 'FAC-1',
            logUrl: 'ct.googleapis.com/aviator',
            hexid: '64:61:6e:67:65:72:7a:6f:6e:65',
            base64id: 'NjQ2MTZlNjc2NTcyN2E2ZjZlNjU=',
            operator: 'Facebook',
            bugUrl: 'http://www.google.com',
            started: '12/1/16',
            cis:'Included',
            mmd:'24 hours',
            https:'yes',
            priority: 0,
            contactDetails: ['fac1@fail.com', 'aguy@facebook.com', 'a.n.otherguy@facebook.com']
        }, {
                id: 1,
                name: 'FAC-2',
                logUrl: 'ct.googleapis.com/pilot',
                hexid: '64:61:6e:67:65:72:7a:6f:6e:65',
                base64id: 'NjQ2MTZlNjc2NTcyN2E2ZjZlNjU=',
                operator: 'Facebook',
                bugUrl: 'http://www.google.com',
                started: '12/1/16',
                cis:'Included',
                mmd:'24 hours',
                https:'yes',
                priority: 1,
                contactDetails: ['fac2@fail.com', 'aguy@facebook.com', 'a.n.otherguy@facebook.com']
            }, {
                id: 2,
                name: 'FAC-3',
                logUrl: 'ct.googleapis.com/something',
                hexid: '64:61:6e:67:65:72:7a:6f:6e:65',
                base64id: 'ZGFuZ2Vyem9uZQ==',
                operator: 'Facebook',
                bugUrl: 'http://www.google.com',
                started: '12/1/16',
                cis:'Included',
                mmd:'24 hours',
                https:'yes',
                priority: -1,
                contactDetails: ['fac3@fail.com', 'aguy@facebook.com', 'a.n.otherguy@facebook.com']
            }, {
                id: 3,
                name: 'TW-1',
                logUrl: 'ct.googleapis.com/blues',
                hexid: '4f6e6520776f72642e2e2e4a6566667374657221',
                base64id: 'T25lIHdvcmQuLi5KZWZmc3RlciE=',
                operator: 'Twitter',
                bugUrl: 'http://www.google.com',
                started: '12/1/16',
                cis:'Included',
                mmd:'24 hours',
                https:'yes',
                priority: 2,
                contactDetails: ['tw1@fail.com', 'aguy@twitter.com', 'a.n.otherguy@twitter.com']
            }, {
                id: 4,
                name: 'INS-1',
                logUrl: 'ct.googleapis.com/magic',
                hexid: '64:61:6e:67:65:72:7a:6f:6e:65',
                base64id: 'NjQ2MTZlNjc2NTcyN2E2ZjZlNjU=',
                operator: 'Instagram',
                bugUrl: 'http://www.google.com',
                started: '12/1/16',
                cis:'Included',
                mmd:'24 hours',
                https:'yes',
                priority: -1,
                contactDetails: ['ins1@fail.com', 'aguy@instagram.com', 'a.n.otherguy@instagram.com']
            }]
            ;
        return { logs };
    }
}
