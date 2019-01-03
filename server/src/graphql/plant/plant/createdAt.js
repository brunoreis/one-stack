import moment from 'moment';

export default ({ created_at }) => moment(created_at).locale('br').format('L');
