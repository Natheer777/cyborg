import './SectionWrraper.css'


const SectionWrraper = (props) => {
  return (
    <div className="section-wrapper p-4 mt-5 rounded">
        {props.children}
    </div>
  )
}

export default SectionWrraper