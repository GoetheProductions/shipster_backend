import mongoose from 'mongoose';
import User from './models/user';
import { URI } from './constants';

const users = [{
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  age: 25,
  userCount: 1,
  currency: 'DKK',
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
