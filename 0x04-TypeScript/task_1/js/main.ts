interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};


console.log(teacher3)


interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


function printTeacher(firstName: string, lastName: string) : string {
  return `${firstName[0]}. ${lastName}`;  
}


interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}


interface StudentClassInterface {
  firstName: string;
  lastName: string;

  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName
  }
}
