const longDescription = {
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
  ],
  recipesConnection: {
    totalCount: 5,
  },
};

const manyGardens = {
  name: 'Iura Menão',
  description: 'Lorem ipsum.',
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
      name: 'Rota das Folhas',
    },
    {
      id: 4,
      name: 'Cantinho da vovó',
    },
    {
      id: 5,
      name: 'Recanto das Verduras',
    },
    {
      id: 6,
      name: 'Rota das Folhas',
    },
  ],
  recipesConnection: {
    totalCount: 1,
  },
};

const noGardens = {
  name: 'Iura Menão',
  description: 'Lorem ipsum.',
  picture: 'https://randomuser.me/api/portraits/women/60.jpg',
  gardens: [
  ],
  recipesConnection: {
    totalCount: 5,
  },
};

const manyRecipes = {
  name: 'Iura Menão',
  description: 'Lorem ipsum.',
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
  ],
  recipesConnection: {
    totalCount: 9999,
  },
};

const noRecipes = {
  name: 'Iura Menão',
  description: 'Lorem ipsum.',
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
  ],
};

export default {
  longDescription,
  manyGardens,
  noGardens,
  manyRecipes,
  noRecipes,
};
