const Banner = ({url}: {url: string}) => {
    return (
        <div>
            <img
                src={url}
                className="w-full h-[400px] object-cover"
            />
        </div>
    );
}
 
export default Banner;