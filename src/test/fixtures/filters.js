import moment from 'moment';

const filters = {
  test: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const altfilters = {
  test: 'bills',
  sortBy: 'date',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};


export { altfilters, filters };
