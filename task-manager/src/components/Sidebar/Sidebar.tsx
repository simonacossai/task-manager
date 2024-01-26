import appIcon from "../../assets/app_icon.svg";
import dashboardIcon from "../../assets/icons/dashboard_icon.svg";
import clientsIcon from "../../assets/icons/clients_icon.svg";
import inboxIcon from "../../assets/icons/inbox_icon.svg";
import contactsIcon from "../../assets/icons/contacts_icon.svg";


import SidebarTile from '../SidebarTile/SidebarTile';

const Sidebar = () => {
    return (
      <div className="bg-white flex flex-col justify-start items-center border-r border-solid border-r-light-grey relative ">
        <div className="border-b border-solid border-b-light-grey  w-full flex  h-24  items-center justify-start mb-8">
            <img className="w-24 m-6" src={appIcon} alt="Application Logo"/>
        </div>
      <SidebarTile icon={dashboardIcon} label="Dashboard"/>
      <SidebarTile icon={clientsIcon} label="Clients"/>
      <SidebarTile icon={inboxIcon} label="Inbox"/>
      <SidebarTile icon={contactsIcon} label="Contacts"/>
      <div className="absolute inset-x-0 bottom-0 h-24 w-full bg-white border-t border-solid border-t-light-grey flex items-center px-4">
        <img className="w-10 h-10 rounded-full" src="https://thispersondoesnotexist.com/" alt="Rounded avatar"/>
        <div className="flex flex-col w-full">
            <span className="p-0 m-0 text-sm pl-4">Donye</span>
            <span className="p-0 m-0 text-xs text-grey pl-4">collins@brees.com</span>
        </div>
      </div>
  </div>
    );
};

export default Sidebar;