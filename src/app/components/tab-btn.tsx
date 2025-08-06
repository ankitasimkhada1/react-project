const TabButton = ({title}: {title: string}) => {
    return (
        <button className="border px-7 py-2 rounded-full">
            {title}
        </button>
    );
}
 
export default TabButton;