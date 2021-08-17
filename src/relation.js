import {Edit2,Trash2,User} from "react-feather";
import classes from "./relation.module.css";

const Relation = (props) => {
    return (
        <div className={classes.container}>
           <div className={classes.headerContainer}>
               <div>X1862</div>
               <div><Edit2 className={classes.action} size={15} /><Trash2 className={classes.action} size={15} /></div>
           </div>
           <div>
               <User size={40} />
           </div>
           <div>
               {/* <h3 className={classes.footerTitle}>Mmad</h3> */}
               <div>Recceptionist Dave</div>
           </div>
        </div>
    )
}

export default Relation;