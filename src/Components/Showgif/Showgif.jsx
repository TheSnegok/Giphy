import Image from "../Image/Image";

const Showgif = (props) => {
	let gif = props.gifs;

	return gif.map((gif) => <Image gif={gif} />);
};

export default Showgif;
