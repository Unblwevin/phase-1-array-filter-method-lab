function findMatching(drivers, name) {
    const lowerCaseName = name.toLowerCase();
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowerCaseName);
    return matchingDrivers;
  }

  function fuzzyMatch(drivers, letters) {
    const matchingDrivers = drivers.filter(driver => driver.startsWith(letters));
    return matchingDrivers;
  }

  function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.name === name);
    return matchingDrivers;
  }
