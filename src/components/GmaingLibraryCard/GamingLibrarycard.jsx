import './GamingLibrarycard.css'

import {Secoundrybuttons} from '../index'

const GamingLibrarycard = (props) => {
  return (
    <div className='gmaing-library-card left'>
        <ul>
            <li className='gmaing-library-item'><img src={props.image}/></li>
            <li><h5>{props.title}</h5><span>{props.categore}</span></li>
            <li><h5>Date Added</h5><span>{props.date}</span></li>
            <li><h5>Hours Played</h5><span>{props.hours}</span></li>
            <li><h5>Currently</h5><span>{props.download}</span></li>
            <Secoundrybuttons>Download</Secoundrybuttons>
        </ul>
    </div>
  )
}

export default GamingLibrarycard