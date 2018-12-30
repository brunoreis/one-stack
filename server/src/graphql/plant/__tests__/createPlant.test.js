import test from 'tape';
import updatePlant from '../updatePlant';

const updateNested = (path, value) => path.reduceRight(
  (accumulator, pathItem, index) => (
    index === path.length - 1
      ? { [pathItem]: value }
      : { [pathItem]: accumulator }
  ),
  null,
);

test('update plant', (t) => {
  t.plan(1);
  let actualArgs = null;
  const mockedContext = updateNested(
    ['data', 'plant', 'update'],
    (received) => { actualArgs = received; },
  );
  const expectedArgs = { mockedAnything: 'mockedAnything' };
  updatePlant(null, expectedArgs, mockedContext);
  t.equal(actualArgs, expectedArgs);
});
