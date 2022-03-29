import React, { useContext } from 'react'
import { Button } from './Button'
import Header from './Header'
import { Input } from './Input'
import { Select } from './Select'
import VerificationDetails from './VerificationDetails'

export const VerificationComponentsHolder = () => {

    const SelectOptions = [
        {
            title: "Card",
            value: "Card"
        },
        {
            title: "Mobile",
            value: "Mobile Money"
        },
        {
            title: "Paypal",
            value: "Pay By Paypal"
        }
    ]

  return (
    <div className='contents'>

    <Header />
    <VerificationDetails />

    <Input name = "Phone Number" lableId = "label-id" inputId= 'input-id' placeholder = "+234"  />
     <hr/>
    <Select labelId = "label-id" name = "Payment Method" selectId = "form-group" options  =  
    {SelectOptions.map((index)=>(

        <option key={index.title}>{index.value}</option>
    
        ))}>
    </Select>

    <Input name = "Card Number" lableId = "label-id" inputId= 'input-id' 
     placeholder = "2345 6543 7868 2343"  />

     <Input name = "Card Name" lableId = "label-id" inputId= 'input-id' 
     placeholder = "Fabunmi Tolulope Eniola"  />

     <div className='con'>
     
     <div className='expiry-date'>
     <Input name = "Expiry Date" lableId = "label-id" inputId= 'input-id' 
     placeholder = "01/23"  > </Input>

     </div>
        <br/>
    
        <div className='cvc'>
        <Input name = "CVC" lableId = "label-id" inputId= 'input-id' 
           placeholder = "012"  > </Input>
        </div>
     
        </div>
        <br/>
     
        <Button buttonClass="button-class" name= "Pay" />
    </div>
  )
}
