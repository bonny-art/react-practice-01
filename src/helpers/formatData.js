import { formatDistanceToNow, format } from 'date-fns';

function timeToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

function dateFormat(date) {
  return format(new Date(date), 'Pp', { addSuffix: true });
}

export { timeToNow, dateFormat };
