import React from 'react'
import BillDetails from './BillDetails'
import ItemList from './ItemList'
import TotalAmount from './TotalAmount'

function main() {
  return (
    <div className='appMain'>
                 <h1>Simple Billing App</h1>
      <BillDetails onAddItem={handleAddItem} />
      <ItemList items={items} onDeleteItem={handleDeleteItem} />
      <TotalAmount total={calculateTotal()} />
      {/* <button className="download-btn" onClick={handleDownloadPDF}>
        Download Invoice PDF
      </button> */}

    </div>
  )
}

export default main