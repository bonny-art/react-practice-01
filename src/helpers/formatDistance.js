import { formatDistanceToNow, format } from 'date-fns';

export const dateNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
export const dateFormat = date => {
  return format(new Date(date), 'Pp', { addSuffix: true });
};
