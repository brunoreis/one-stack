const longList = [
  {
    id: 1,
    name: 'Edison Saraiva',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
    Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
    Fusce vestibulum tempor velit sagittis.`,
    picture: 'https://randomuser.me/api/portraits/men/2.jpg',
    gardens: [],
    recipesConnection: {
      totalCount: 3,
    },
  },
  {
    id: 2,
    name: 'Iura Menão',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
    Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
    Fusce vestibulum tempor velit sagittis.`,
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
    gardens: [
      {
        id: 1,
        name: 'Cantinho da vovó',
      },
      {
        id: 2,
        name: 'Recanto das Verduras',
      },
      {
        id: 3,
        name: 'Esquina das prantinha',
      },
    ],
    recipesConnection: {
      totalCount: 5,
    },
  },
  {
    id: 3,
    name: 'Salomão Taumaturgo',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
    Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
    Fusce vestibulum tempor velit sagittis.`,
    picture: 'https://randomuser.me/api/portraits/men/91.jpg',
    gardens: [
      {
        id: 1,
        name: 'Rota das folhas',
      },
    ],
    recipesConnection: {
      totalCount: 1,
    },
  },
  {
    id: 4,
    name: 'Edison Saraiva',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
    Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
    Fusce vestibulum tempor velit sagittis.`,
    picture: 'https://randomuser.me/api/portraits/men/2.jpg',
    gardens: [],
  },
  {
    id: 5,
    name: 'Iura Menão',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
    Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
    Fusce vestibulum tempor velit sagittis.`,
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
    gardens: [
      {
        id: 1,
        name: 'Cantinho da vovó',
      },
      {
        id: 2,
        name: 'Recanto das Verduras',
      },
      {
        id: 3,
        name: 'Esquina das prantinha',
      },
    ],
    recipesConnection: {
      totalCount: 5,
    },
  },
  {
    id: 6,
    name: 'Salomão Taumaturgo',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
    Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
    Fusce vestibulum tempor velit sagittis.`,
    picture: 'https://randomuser.me/api/portraits/men/91.jpg',
    gardens: [
      {
        id: 1,
        name: 'Rota das folhas',
      },
    ],
    recipesConnection: {
      totalCount: 1,
    },
  },
];

const emptyList = [];

export default {
  longList,
  emptyList,
};
