import moment from 'moment';

moment.locale('pt-br');

const comment = {
  gardener: {
    name: 'Joana Soares',
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  plant: {
    name: 'Bananeira',
  },
  dateTime: moment().format('lll'),
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
  Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
  Fusce vestibulum tempor velit sagittis.`,
};

export default comment;
