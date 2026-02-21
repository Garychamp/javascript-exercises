const findTheOldest = function(people) {
  function getAge(person) {
    const death = person.yearOfDeath || new Date().getFullYear();
    return death - person.yearOfBirth;
  }

  const oldest = people.reduce(function(prev, current) {
    return getAge(prev) > getAge(current) ? prev : current;
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
