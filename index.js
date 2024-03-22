const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


const findMatching = (drivers, string) => {
    const matchingDrivers = drivers.filter(driverName => driverName.toLowerCase() === string.toLowerCase());
    
    return matchingDrivers;
    
  }

const fuzzyMatch = (drivers, string) => {
    const fuzzyDrivers = drivers.filter(driverName => {
      return driverName.startsWith(string);
    });
  
    return fuzzyDrivers;
  
  }

const matchName = (drivers, string) => {
  return drivers.filter(driver => driver.name === string);
}




