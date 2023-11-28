import SongHeader from "../components/song/SongHeader";
import Lyrics from "../components/song/Lyrics";
import Recommendations from "../components/song/Recommendations";

let lyrics =
  "[Intro] \n Yeah, yeah, um (Woo) \n Yeah, yeah, yeah \n\n[Verse 1] \n\nThat's the way every day goes\nEvery time we've no control\nIf the sky is pink and white\nIf the ground is black and yellow\nIt's the same way you showed me\nNod my head, don't close my eyes\nHalfway on a slow move\nIt's the same way you showed me\nIf you could fly, then you'd feel south\nUp north's getting cold soon\nThe way it is, we're on land\nStill, I'm someone to hold true\nKeep you cool when it's still alive\nWon't let you down when it's all ruin\n\n[Chorus]\nJust the same way you showed me, showed me\nYou showed me love\nGlory from above\nRegard, my dear\nIt's all downhill from here";

const Song = () => {
  return (
    <>
      <SongHeader
        imageSrc="src\assets\album_blond.jpg"
        songName="Pink + White"
        albumName="Blonde"
        artistName="Frank Ocean"
        releaseDate="Jan. 20, 2004"
      />
      {/* <Lyrics lines={lyrics}></Lyrics> */}
      <Recommendations />
    </>
  );
};

export default Song;
