module.exports = {
  requestDidStart: (options) => {
    console.log('\nrequestDidStart:\n', options);
    // console.log('request filed:\n', options.request);
  },
  parsingDidStart: (options) => {
    console.log('\nparsingDidStart:\n', options);
  },
  validationDidStart: options => console.log('\nvalidationDidStart:\n', options),
  executionDidStart: options => console.log('\nexecutionDidStart:\n', options),
  willSendResponse: options => console.log('\nwillSendResponse:\n', options),
  willResolveField: options => console.log('\nwillResolveField:\n', options),
  format: options => console.log('\nformat:\n', options),
};

/*
requestDidStart

parsingDidStart

validationDidStart

executionDidStart

willSendResponse

willResolveField

format

*/
