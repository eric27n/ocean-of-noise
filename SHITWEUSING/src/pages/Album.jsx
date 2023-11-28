import AlbumHeader from "../components/album/AlbumHeader";
import ListGroup from "../components/album/ListGroup";
import SquareCard from "../components/SquareCard";
import AboutCard from "../components/album/AboutCard";
import AlbumCredits from "../components/album/AlbumCredits";

let items = [
  "Nikes",
  "Ivy",
  "Pink + White",
  "Be Yourself",
  "Solo",
  "Skyline To",
  "Self Control",
  "Good Guy",
  "Nights",
  "Solo (Reprise)",
  "Pretty Sweet",
  "Facebook Story",
  "Close to You",
  "White Ferrari",
  "Seigfried",
  "Godspeed",
  "Futura Free",
];

let description =
  "Blonde is the second studio album by the enigmatic Frank Ocean. The album was released on August 20, 2016, following a four-year hiatus after the release of channel ORANGE. The album was released both physically, in magazines given away in pop-up stores around the country, and digitally on iTunes. The magazine, titled Boys Don’t Cry, is a companion piece to Blonde and features various types of content including poetry and interviews from Frank himself. The magazine also features an alternate version of Blonde.";

const handleSelectItem = (item) => {
  console.log(item);
};

const Album = () => {
  return (
    <>
      <AlbumHeader
        imageSrc="src\assets\album_blond.jpg"
        contentType="Album"
        albumName="Blonde"
        artistName="Frank Ocean"
        releaseDate="Jan. 20, 2004"
      />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <ListGroup
              items={items}
              heading="Tracklist"
              onSelectItem={handleSelectItem}
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="row flex-column justify-content-evenly">
              <div className="col-6">
                <AboutCard name="Blonde" description={description} />
              </div>
              <div className="col-6">
                <AlbumCredits
                  label="blonded & Boys Don’t Cry"
                  artwork="Wolfgang Tillmans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
