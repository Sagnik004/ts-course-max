enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

switch (person.role) {
  case Role.ADMIN:
    console.log('is admin!');
    break;
  case Role.READ_ONLY:
    console.log('is a read-only user!');
    break;
  case Role.AUTHOR:
    console.log('is author!');
    break;
}
