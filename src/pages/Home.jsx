import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import React from 'react';
import Mailer from '../Mailer';

function Home() {
  return (
    <div>
      <Veggie />
      <Popular />
      <Mailer />
    </div>
  )
}

export default Home
