import moment from 'moment';
import _ from 'lodash';
import Vue from 'vue';

const Moment = moment;

export const defaultFormat = 'MMMM Do, YYYY';
export const parseFormat = 'YYYY-MM-DD HH:mm:ss';

export function dateFormat(date, format = defaultFormat) {
  const m = new Moment(date, parseFormat);
  return m && m.format(format);
}

dateFormat.defaultFormat = defaultFormat;
dateFormat.parseFormat = parseFormat;

Vue.filter('dateFormat', function formatDate(date) {
  const value = _.get(date, 'date') || date;
  // console.log('date value', value);
  return dateFormat(value, 'MMMM Do, YYYY');
});

export default dateFormat;
