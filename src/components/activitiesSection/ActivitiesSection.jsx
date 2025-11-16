
import Activity from "../activity/Activity";


const ActivitiesSection = ({activities = [], toggleLike}) => {
  /* State variabel der deklares med Reacts indbyggede hook: useState. Dens initialvalue/standardværdi/defaultvalue er et tomt array*/

  return (
    <section className="container">
      {activities.map((activity) => (
        <Activity activity={activity} key={activity._id} onToggleLike={() => toggleLike(activity._id)}/>
      ))}
    </section>
  );
};

export default ActivitiesSection;
