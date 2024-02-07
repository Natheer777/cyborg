import "./GamingLibrary.css";

import {
  GamingLibrarycard,
  SectionHeader,
  SectionWrraper,
} from "../../components/index";

import GamingLibraryData from "../../Data/GmaingLibraryData";

const GamingLibrary = () => {
  const card = GamingLibraryData.map((card) => {
    return (
      <GamingLibrarycard
        Key={card.id}
        image={card.image}
        title={card.title}
        categore={card.categore}
        date={card.date}
        hours={card.hours}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrraper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">{card}</div>
      </SectionWrraper>
    </>
  );
};

export default GamingLibrary;
