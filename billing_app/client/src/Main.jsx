import React,{useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Products from './Products';

import items from'./data/items.json'

function Main() {

    // const [key, setKey] = useState('billing');
  return (
    <div className='mainSection'>
        <div className='leftSection'>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Product">
        Tab content for Product
        {/* product is called here--------------------- */}
        <Products product={items}></Products>
      </Tab>
      {/* <Tab eventKey="profile" title="Customer">
        Tab content for Customer
      </Tab> */}
    </Tabs>
        </div>
        <div className='rightSection'>

          <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="billing" title="Billing">
        Tab content for Sweet
      </Tab>
      <Tab eventKey="payment" title="Payment">
        Tab content for Profile
      </Tab>
    </Tabs>
        </div>

         

    </div>
  )
}

export default Main