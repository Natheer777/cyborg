import './Card.css'

import {FaStar ,FaDownload} from 'react-icons/fa'

const Card = (props) => {
  return (
    <div className="most-popular-item p-">
          <div className="card-wrapper rounded p-4">
            <img className="most-popular-item-image w-100 rounded mb-3" src={props.image} />
            <div className="most-popular-item-content d-flex justify-content-between ">
              <h4 className="most-popular-item-title">
                {props.title} <br />
                <span>sandbox</span>
              </h4>
              <ul>
                <li>
                 <span style={{"color":'yellow'}}><FaStar/></span> <span> 4.8</span>
                </li>
                <li>
               <span style={{"color":"var(--color--pink)"}}><FaDownload /></span>   <span>2.3M</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default Card