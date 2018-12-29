// @todo: use an input object here.

export default async (_, args, { dataSources, loggedUser }) => {
  const result = await dataSources.plant.create({
    ...args,
    createdBy: loggedUser.gardener.id,
  });
  return result;
};

// const doSomething = () => {};
// const addItem = doSomething();


// const a = (config) => {
// use config.preferedItem
// };

// const b = ({ preferedItem }) => {
//  use preferedItem
// };

// export { a, b };
