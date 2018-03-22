import mongoose from 'mongoose';
import User from './models/user';
import { URI } from './constants';

/*
  TODO:
    Think about how we can develop a clock,
    to take time for each proccess of each order
*/

const date = new Date();

const users = [{
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  age: 25,
  userCount: 1,
  currency: 'DKK',
  defaultPaymentMethod: 'mobile pay',
  meta: {
    lastLoginTime: date,
    hasValidEmail: true,
    isExpelled: false,
  },
  statistics: {
    runner: {
      start: date,
      orders: {
        taken: {
          total: 3,
          avg: {
            year: 1,
            month: 2,
            week: 3,
            day: 1,
            timeOfDay: date,
          },
        },
        pickedUp: {
          total: 3,
          avg: {
            year: 1,
            month: 2,
            week: 3,
            day: 1,
            timeOfDay: date,
          },
        },
        delivered: {
          total: 3,
          avg: {
            year: 1,
            month: 2,
            week: 3,
            day: 1,
            timeOfDay: date,
          },
        },
        cancelled: {
          total: 3,
          avg: {
            year: 1,
            month: 2,
            week: 3,
            day: 1,
            timeOfDay: date,
          },
        },
      },

      ratings: {
        total: 3,
        avg: 4,
        ratings: [{
          rating: 3,
          fromUser: {},
        }],
      },

      earnings: {
        total: 200,
        avg: {
          year: 40,
          month: 50,
          week: 10,
          day: 9,
          timeOfDay: date,
        },
      },
    },
    client: {
      start: date,
      orders: {
        created: {
          total: 44,
          avg: {
            year: 12,
            month: 2,
            week: 1,
            day: 12,
            timeOfDay: date,
          },
        },
        accepted: {
          total: 12,
          avg: {
            year: 3,
            month: 22,
            week: 1,
            day: 23,
            timeOfDay: date,
          },
        },
        declined: {
          total: 12,
          avg: {
            year: 3,
            month: 22,
            week: 1,
            day: 23,
            timeOfDay: date,
          },
        },
        cancelled: {
          total: 12,
          avg: {
            year: 3,
            month: 22,
            week: 1,
            day: 23,
            timeOfDay: date,
          },
        },
      },
      ratings: {
        total: 1,
        avg: 4,
        ratings: [{
          rating: 4,
          toUser: {},
        }],
      },

      spending: {
        startedFrom: date,
        total: 120,
        avg: {
          year: 5,
          month: 3,
          week: 2,
          day: 1,
          timeOfDay: date,
        },
      },
    },
  },
  transportation: [{
    name: 'walking',
  }],
  devices: [{
    os: {
      name: 'OSX',
      version: '1.0',
    },
    type: 'computer',
    model: 'MacBookPro',
  }],
  addresses: [{
    street: 'Soa Street',
    number: '45',
    floor: '2 at.',
    postCode: '4443',
    country: 'Guambilua',
    lat: 22.13,
    lon: 55.33,
  }],
}, {
  firstName: 'Donna',
  lastName: 'Joe',
  email: 'donna@joe.com',
  age: 76,
  userCount: 2,
  currency: 'DKK',
  defaultPaymentMethod: 'mobile pay',
  meta: {
    lastLoginTime: date,
    hasValidEmail: true,
    isExpelled: false,
  },
  statistics: {
    runner: {
      start: date,
      orders: {
        taken: {
          total: 3,
          avg: {
            year: 1,
            month: 2,
            week: 3,
            day: 1,
            timeOfDay: date,
          },
        },
        pickedUp: {
          total: 3,
          avg: {
            year: 1,
            month: 2,
            week: 3,
            day: 1,
            timeOfDay: date,
          },
        },
        delivered: {
          total: 3,
          avg: {
            year: 1,
            month: 2,
            week: 3,
            day: 1,
            timeOfDay: date,
          },
        },
        cancelled: {
          total: 3,
          avg: {
            year: 1,
            month: 2,
            week: 3,
            day: 1,
            timeOfDay: date,
          },
        },
      },

      ratings: {
        total: 3,
        avg: 4,
        ratings: [{
          rating: 3,
          fromUser: {},
        }],
      },

      earnings: {
        total: 200,
        avg: {
          year: 40,
          month: 50,
          week: 10,
          day: 9,
          timeOfDay: date,
        },
      },
    },
    client: {
      start: date,
      orders: {
        created: {
          total: 44,
          avg: {
            year: 12,
            month: 2,
            week: 1,
            day: 12,
            timeOfDay: date,
          },
        },
        accepted: {
          total: 12,
          avg: {
            year: 3,
            month: 22,
            week: 1,
            day: 23,
            timeOfDay: date,
          },
        },
        declined: {
          total: 12,
          avg: {
            year: 3,
            month: 22,
            week: 1,
            day: 23,
            timeOfDay: date,
          },
        },
        cancelled: {
          total: 12,
          avg: {
            year: 3,
            month: 22,
            week: 1,
            day: 23,
            timeOfDay: date,
          },
        },
      },
      ratings: {
        total: 1,
        avg: 4,
        ratings: [{
          rating: 4,
          toUser: {},
        }],
      },

      spending: {
        startedFrom: date,
        total: 120,
        avg: {
          year: 5,
          month: 3,
          week: 2,
          day: 1,
          timeOfDay: date,
        },
      },
    },
  },
  devices: [{
    os: {
      name: 'Windows',
      version: '4.2.0',
    },
    type: 'computer',
    model: 'Asus 4 dual core engine',
  }],
  transportation: [{
    name: 'walking',
  }, {
    name: 'cycling',
  }],
  addresses: [{
    street: 'Soa Street',
    number: '46',
    floor: '1 at.',
    postCode: '4443',
    country: 'Guambilua',
    lat: 22.13,
    lon: 55.33,
  }],
}];

mongoose.connect(URI);

users.map((data) => {
  const user = new User(data);
  user.save()
    .then(() => {
      console.log('populated');
    });
});
