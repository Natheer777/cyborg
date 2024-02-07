import './SectionHeader.css'


const SectionHeader = (props) => {
  return (
    <div className="section-header">
    <h4 className="text-white fw-bold fs-2">{props.children}</h4>
  </div>
  )
}

export default SectionHeader