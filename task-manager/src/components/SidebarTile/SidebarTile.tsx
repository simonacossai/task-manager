


interface SidebarTileProps {
    icon: string;
    label: string;
  }
  
  const SidebarTile = (props: SidebarTileProps) => {
    return (
        <div className='flex flex-row justify-start items-center w-full py-4 hover:transition-all hover:cursor-pointer duration-300	' >
           
            <img src={props.icon} alt="dashboard" className='w-6 ml-6 mr-3' />
            <span className="text-icons hover:text-accent-color hover:transition-all hover:cursor-pointer text-md font-medium duration-300">{props.label}</span> 
       </div>
    );
    }
  export default SidebarTile;
  