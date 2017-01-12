import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Transaction from './Transaction';

const setup = () => {
  const props = {
    date: new Date('2016-12-27'),
    amount: 23,
    type: "income",
    onDelete: jest.fn()
  };

  const output = renderer.create(
    <MuiThemeProvider>
      <Transaction {...props} />
    </MuiThemeProvider>
  );

  return {
    props,
    output
  }
}

describe('components', () => {
  describe('Transaction', () => {
    it('initial render', () => {
      const { output } = setup();
      expect(output).toMatchSnapshot();
    })
  })
})
