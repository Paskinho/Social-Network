import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {state} from "./Redux/state";



test('renders learn react link', () => {
  render(<App state={state}
              addPost={(postText)=>{}}
              updateNewPostText = {()=>{}}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
