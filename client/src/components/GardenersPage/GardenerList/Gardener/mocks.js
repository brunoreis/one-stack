const longText = {
  name: 'Iura Menão',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
  recipes: [
    { name: 'pamonha' },
  ],
};

const manyGardens = {
  name: 'Iura Menão',
  text: 'Lorem ipsum.',
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
  recipes: [
    { name: 'pamonha' },
  ],
};

const noGardens = {
  name: 'Iura Menão',
  text: 'Lorem ipsum.',
  picture: 'https://randomuser.me/api/portraits/women/60.jpg',
  gardens: [
  ],
  recipes: [
    { name: 'pamonha' },
  ],
};

const manyRecipes = {
  name: 'Iura Menão',
  text: 'Lorem ipsum.',
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
  recipes: Array(9999),
};

const noRecipes = {
  name: 'Iura Menão',
  text: 'Lorem ipsum.',
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
  recipes: [
  ],
};

export default {
  longText,
  manyGardens,
  noGardens,
  manyRecipes,
  noRecipes,
};
