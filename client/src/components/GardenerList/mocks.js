const gardener1 = {
  id: 1,
  name: 'Edison Saraiva',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
  Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
  Fusce vestibulum tempor velit sagittis.`,
  picture: 'https://randomuser.me/api/portraits/men/2.jpg',
  gardens: [],
  recipes: [
    { name: 'chuchu' },
    { name: 'charque' },
    { name: 'chocolate' },
  ],
};

const gardener2 = {
  id: 2,
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
    {
      id: 3,
      name: 'Esquina das prantinha',
    },
  ],
  recipes: [
    { name: 'pamonha' },
    { name: 'paçoca' },
    { name: 'pudim' },
    { name: 'pupunha' },
    { name: 'panqueca' },
  ],
};

const gardener3 = {
  id: 3,
  name: 'Salomão Taumaturgo',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
  recipes: [
    { name: 'broa' },
  ],
};

export default [
  gardener1,
  gardener2,
  gardener3,
];
