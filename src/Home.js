import React from 'react';
import Barrels from './Components/barrels.jpg';
import Budweiser from './logos/Budweiser.jpg'
import Busch from './logos/Busch.gif';
import Corona from './logos/Corona.jpg';
import Michelob from './logos/Michelob.jpg';
import Natural from './logos/Natural.jpg';
import ShockTop from './logos/ShockTop.jpg';
import { HashLink } from 'react-router-hash-link';


function Home() {
  return (
    <div className='text-center'>
      <div>
        <h1 className='pt-3'>Welcome to Cerveza Heaven</h1>
        <h5>The land of American beer and Corona</h5>
        <img src={Barrels} style={{width: '500px'}} className='mt-2 mb-2 img-thumbnail' alt='Barrels of Beer'></img>
      </div>
      <div>
        <h2>Our Story</h2>
        <p className='p-5 ml-5 mr-5'> 
          Cerveza Heaven is the place to buy Anheuser-Busch products and the great Mexican beer
          known as Corona. We chose these products because they were made on the concet of
          integrity. The makers knew what they wanted and decided to set a goal. Not only did
          the makers reach that goal, but they surpassed it by far, bringing the world 
          delicious tasting brews that can be enjoyed not only with friends, but also family.
          As a badge of merit, we decided to put integrity at our forefront in this business, 
          that is why we offer our products at a very honest price. So please,
          make yourself an order and come join us in Cerveza Heaven.
        </p>
      </div>
      <div className='container pt-3'>
        <p><strong>Proud Supplier of</strong></p>
        <div className='row pt-3'>
          <HashLink className='col-sm-4' to='/shop/#budweiser' title='Budwesier'>
            <img src={Budweiser}
              className='p-2'
              width='100%' 
              alt='Budweiser Logo'
              ></img>
          </HashLink>
          <HashLink className='col-sm-4' to='/shop/#busch' title='Buschhhhhhh'>
            <img src={Busch}
            className='p-2'
            width='100%' 
            alt='Busch Lite Logo'
            ></img>
          </HashLink>
          <HashLink className='col-sm-4' to='/shop/#corona' title='Corona Extra'>
            <img src={Corona}
            className='p-2'
            width='100%' 
            alt='Corona Logo'
            ></img>
          </HashLink>
        </div>
        <div className='row pt-3 pb-3'>
        <HashLink className='col-sm-4' to='/shop/#michelob' title='Michelob Ultra'>
            <img src={Michelob}
            className='p-2'
            width='100%' 
            alt='Michelob Ultra Logo'
            ></img>
          </HashLink>
          <HashLink className='col-sm-4' to='/shop/#natural' title='Natty Light'>
            <img src={Natural}
            className='p-2'
            width='100%' 
            alt='Natural Light Logo'
            ></img>
          </HashLink>
          <HashLink className='col-sm-4' to='/shop/#shocktop' title='Shock Top'>
            <img src={ShockTop}
            className='p-2'
            width='85%' 
            alt='Shock Top Logo'
            ></img>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
