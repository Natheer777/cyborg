import "./MostPopular.css";

import { Card, SectionHeader, SectionWrraper } from "../../components/index";

import Data from '../../Data/MostPopularData'


const MostPopular = () => {


const card = Data.map(card => {
return <Card Key={card.id} image={card.image} title={card.title}/>
})

  return (
    <>
      <SectionWrraper>
        <SectionHeader>Most popular</SectionHeader>
        <div className="most-popular-items hidden">
    {card}
        </div>
      </SectionWrraper>
    </>
  );
};

export default MostPopular;
