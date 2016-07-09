export class InMemoryDataService {
  createDb() {
    let mmdGraphs =[
    {
        mmd:[
        { data: [2, 2, 3, 2, 2, 2, 2], label: 'FAC-1 MMD' },
        { data: [24, 24, 24, 24, 24, 24, 24], label: '' }],
        time:['1/1/16', '2/1/16', '3/1/16', '4/1/16', '5/1/16', '6/1/16', '7/1/16']
    },
    {
        mmd:[
        { data: [2, 2, 3, 2, 2, 2, 2], label: 'FAC-2 MMD' },
        { data: [24, 24, 24, 24, 24, 24, 24], label: '' }],
        time:['1/1/16', '2/1/16', '3/1/16', '4/1/16', '5/1/16', '6/1/16', '7/1/16']
    },
    {
        mmd:[
        { data: [2, 2, 3, 2, 2, 2, 2], label: 'FAC-3 MMD' },
        { data: [24, 24, 24, 24, 24, 24, 24], label: '' }],
        time:['1/1/16', '2/1/16', '3/1/16', '4/1/16', '5/1/16', '6/1/16', '7/1/16']
    },
    {
        mmd:[
        { data: [2, 2, 3, 2, 2, 2, 2], label: 'TW-1 MMD' },
        { data: [24, 24, 24, 24, 24, 24, 24], label: '' }],
        time:['1/1/16', '2/1/16', '3/1/16', '4/1/16', '5/1/16', '6/1/16', '7/1/16']
    },
    {
        mmd:[
        { data: [2, 2, 3, 2, 2, 2, 2], label: 'INS-1 MMD' },
        { data: [24, 24, 24, 24, 24, 24, 24], label: '' }],
        time:['1/1/16', '2/1/16', '3/1/16', '4/1/16', '5/1/16', '6/1/16', '7/1/16']
    },
    {
        mmd:[
        { data: [2, 2, 6, 26, 2, 2, 2], label: 'INS-2 MMD' },
        { data: [24, 24, 24, 24, 24, 24, 24], label: '' }],
        time:['1/1/16', '2/1/16', '3/1/16', '4/1/16', '5/1/16', '6/1/16', '7/1/16']
    }
    ];
    let availibilityGraphs = [
    {
        availibility:[
        { data: [99.4, 99.6, 99.5, 99.5, 99.4, 99.3, 99.2], label: 'FAC-1 availibility' },
        { data: [99, 99, 99, 99, 99, 99, 99], label: '' }],
        time:['13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57']
    },
    {
        availibility:[
        { data: [99.1, 99.0, 99.1, 99.2, 99.0, 98.9, 98.8], label: 'FAC-2 availibility' },
        { data: [99, 99, 99, 99, 99, 99, 99], label: '' }],
        time:['13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57']
    },
    {
        availibility:[
        { data: [99.4, 99.6, 99.5, 99.5, 99.4, 99.4, 99.5], label: 'FAC-3 availibility' },
        { data: [99, 99, 99, 99, 99, 99, 99], label: '' }],
        time:['13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57']
    },
    {
        availibility:[
        { data: [99.4, 99.6, 99.5, 99.5, 99.1, 98.9, 98.8], label: 'TW-1 availibility' },
        { data: [99, 99, 99, 99, 99, 99, 99], label: '' }],
        time:['13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57']
    },
    {
        availibility:[
        { data: [99.4, 99.6, 99.5, 99.5, 99.5, 99.6, 99.6], label: 'INS-1 availibility' },
        { data: [99, 99, 99, 99, 99, 99, 99], label: '' }],
        time:['13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57']
    },
    {
        availibility:[
        { data: [99.4, 99.6, 99.5, 99.5, 99.5, 99.6, 99.6], label: 'INS-2 availibility' },
        { data: [99, 99, 99, 99, 99, 99, 99], label: '' }],
        time:['13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57']
    }

    ];
    let logs = [{
      id: 0,
      name: 'FAC-1',
      logUrl: 'ct.googleapis.com/aviator',
      hexid: '64:61:6e:67:65:72:7a:6f:6e:65',
      base64id: 'NjQ2MTZlNjc2NTcyN2E2ZjZlNjU=',
      operator: 'Facebook',
      bugUrl: 'http://www.google.com',
      started: '12/1/16',
      cis: 'Included',
      mmd: '24 hours',
      https: 'yes',
      status: 'Open',
      lastUpdated:1468080945399,
      assigneeEmail: 'rob.percival@gmail.com',
      assignee:'Rob Percival',
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
        cis: 'Included',
        mmd: '24 hours',
        https: 'yes',
        status: 'Open',
        lastUpdated:1468080945399,
        assigneeEmail: 'rob.percival@gmail.com',
        assignee:'Rob Percival',
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
        cis: 'Included',
        mmd: '24 hours',
        https: 'yes',
        status: 'Open',
        lastUpdated:1468080945399,
        assigneeEmail: 'rob.percival@gmail.com',
        assignee:'Rob Percival',
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
        cis: 'Included',
        mmd: '24 hours',
        https: 'yes',
        status: 'Open',
        lastUpdated:1468080945399,
        assigneeEmail: 'rob.percival@gmail.com',
        assignee:'Rob Percival',
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
        cis: 'Included',
        mmd: '24 hours',
        https: 'yes',
        status: 'Open',
        lastUpdated:1468080945399,
        assigneeEmail: 'rob.percival@gmail.com',
        assignee:'Rob Percival',
        priority: -1,
        contactDetails: ['ins1@fail.com', 'aguy@instagram.com', 'a.n.otherguy@instagram.com']
      }, {
        id: 5,
        name: 'INS-2',
        logUrl: 'ct.googleapis.com/homeland',
        hexid: '64:61:6e:67:65:72:7a:6f:6e:65',
        base64id: 'NjQ2MTZlNjc2NTcyN2E2ZjZlNjU=',
        operator: 'Instagram',
        bugUrl: 'http://www.google.com',
        started: '12/1/16',
        cis: 'Included',
        mmd: '24 hours',
        https: 'yes',
        status: 'Open',
        lastUpdated:1468080945399,
        assigneeEmail: 'rob.percival@gmail.com',
        assignee:'Rob Percival',
        priority: 3,
        contactDetails: ['ins2@fail.com', 'aguy@instagram.com', 'a.n.otherguy@instagram.com']
      }]
      ;
    return { logs, availibilityGraphs, mmdGraphs };
  }
}
