import moment from 'moment';

export default obj => moment(obj.created_at).locale('br').format('L');
