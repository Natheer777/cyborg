import './navItem.css'


const navItem = (props) => {
  return (
    <li className="nav-item">
        {props.children}
    </li>
  )
}
const navItemDropDown = (props) => {
  return (
    <li className="nav-item dropdown">
        {props.children}
    </li>
  )
}

export default navItem
export {navItemDropDown}