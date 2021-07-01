import Image from "../Image/Image";

const Showgif = ({ gifs }) => {
	return gifs.map((gif, number) => <Image gif={gif} key={number}/>);
};

export default Showgif;
