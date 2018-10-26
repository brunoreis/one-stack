const longDescription = {
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
};

const manyGardens = {
  name: 'Iura Menão',
  description: 'Lorem ipsum.',
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
      {
        node: {
          id: 3,
          name: 'Rota das folhas',
        },
      },
      {
        node: {
          id: 4,
          name: 'Cantinho da vovó',
        },
      },
      {
        node: {
          id: 5,
          name: 'Recanto das Verduras',
        },
      },
      {
        node: {
          id: 6,
          name: 'Rota das folhas',
        },
      },
    ],
  },
  recipesConnection: {
    totalCount: 1,
  },
};

const noGardens = {
  name: 'Iura Menão',
  description: 'Lorem ipsum.',
  picture: 'https://randomuser.me/api/portraits/women/60.jpg',
  recipesConnection: {
    totalCount: 5,
  },
};

const manyRecipes = {
  name: 'Iura Menão',
  description: 'Lorem ipsum.',
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
    totalCount: 9999,
  },
};

const noRecipes = {
  name: 'Iura Menão',
  description: 'Lorem ipsum.',
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

};

export default {
  longDescription,
  manyGardens,
  noGardens,
  manyRecipes,
  noRecipes,
};
