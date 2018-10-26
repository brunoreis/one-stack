const longList = [
  {
    id: 1,
    name: 'Edison Saraiva',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
    Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
    Fusce vestibulum tempor velit sagittis.`,
    picture: 'https://randomuser.me/api/portraits/men/2.jpg',
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
    gardensConnection: {
      edges: [
        {
          node: {
            id: 1,
            name: 'Cantinho da vovó',
          },
        },
        {
          node: {
            id: 2,
            name: 'Recanto das Verduras',
          },
        },
      ],
    },
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
    gardensConnection: {
      edges: [
        {
          node: {
            id: 1,
            name: 'Cantinho da vovó',
          },
        },
      ],
    },
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
  },
  {
    id: 5,
    name: 'Iura Menão',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
    Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
    Fusce vestibulum tempor velit sagittis.`,
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
    gardensConnection: {
      edges: [
        {
          node: {
            id: 1,
            name: 'Cantinho da vovó',
          },
        },
        {
          node: {
            id: 2,
            name: 'Recanto das Verduras',
          },
        },
      ],
    },
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
    gardensConnection: {
      edges: [
        {
          node: {
            id: 1,
            name: 'Cantinho da vovó',
          },
        },
      ],
    },
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
