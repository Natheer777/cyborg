import './Theswiper.css'
import {FaStar ,FaDownload} from 'react-icons/fa'

const Theswiper = (props) => {
  return (
    <div className="most-popular-item">
    <div className="card-wrapper">
      <div className='hight-card'>
      <img className="most-popular-item-image w-100 mb-3 img-fluid" src={props.image} />
      </div>
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

export default Theswiper