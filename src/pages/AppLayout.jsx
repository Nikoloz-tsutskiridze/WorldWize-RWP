import Sidebar from "../components/Sidebar/SideBar";
import User from "../components/User/User";
import styles from "./AppLayout.module.css";
import Map from "../components/Map/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
