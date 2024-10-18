const persons = [{
    id : 1,
    name : "Alice",
    age : 25
  },
  {
    id : 2,
    name : "Bob",
    age : 30
  },
  {
    id : 3,
    name : "Charlie",
    age : 35
  }
];

const Person = () => {
    return <div>
        {persons.map((person) => (
            <div key={person.id}>
              <h2>{person.name}</h2>
              <p>{person.age}</p>
            </div>
          ))}
  </div>
  ;
};

export default Person;