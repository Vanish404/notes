const items = [
  {
    os: 'IOS',
    color: 'black',
    model: 'Iphone XR'
  },
  {
    os: 'IOS',
    color: 'white',
    model: 'Iphone 12'
  },
  {
    os: 'Android',
    color: 'white',
    model: 'Google Pixel'
  },
  {
    os: 'IOS',
    color: 'blue',
    model: 'Iphone 13'
  },
  {
    os: 'Android',
    color: 'blue',
    model: 'Google Pixel'
  },
];

const fObject = {
  os: 'IOS',
  color: 'blue'
}

const filter = (filterItemsArr, filterObject) => {
  const fKeyValues = Object.entries(filterObject);

  return filterItemsArr.filter(item => {
    return fKeyValues.every(([key, value]) => item[key] === value)
  })
}

console.log(filter(items, fObject))
