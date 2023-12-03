import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
   // .then((results) => console.log(results[0].body, results[1].firstName, results[1].lastName))
    .then((data) => {
     console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
