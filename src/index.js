import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var address = {
    toPerson : {
        name: 'Sender',
        street: '123 Fake St.',
        city: 'Boston',
        pin: 530008,
        state: 'MA'
    },
    fromPerson : {
        name: 'Receiver',
        street: '123 Fake Ave',
        city: 'San Fransisco',
        state: 'CA',
        pin: 23333
    }
}
 

function Envelope({addressPerson}) {
    return(
        <div>
            <div className='envelope-box'>
            <div className='addresses'>
                <div className="to-address">
                    <AddressInfo address={addressPerson.toPerson}/>
                </div>
                <br/>
                <Stamp/>
                
            </div>
                <br/>
            <div className='stamp-div'>
                <div className="from-address">
                    <AddressInfo className="address-box-2" address={addressPerson.fromPerson}/>
                </div>
            </div>    
            </div>
            
        </div>
    ) 
}

let AddressInfo = ({address}) => {
    return(
        <div>
            <div className='full-name'> {`Mr. ${address.name}`} </div>
            <div className="street"> {address.street} </div>
            <div className="address-line"> {`${address.city}, ${address.state} ${address.pin}`} </div>
        </div>
    )
}

let Stamp = () => {
    return(
        <div>
            <div className='stamp-box'>National Stamp</div>
        </div>
    )
}

ReactDOM.render(<Envelope addressPerson={address} />, document.getElementById('root'));
