import { useEffect, useState } from "react";
import Activity from "../activity/Activity";


const ActivitiesSection = () => {
  /* State variabel der deklares med Reacts indbyggede hook: useState. Dens initialvalue/standardværdi/defaultvalue er et tomt array*/
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/activities"
      );

      const data = await response.json();
      const dataRdy = data.data;

      const formatted = dataRdy.map(card => ({
        ...card, 
        liked: false
      }))

      console.log(formatted);

      setActivities(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  // Indbygget hook fra React der sørger for, at funktionen kun køre én gang når komponenten renderes/mountes.
  // Medmindre der tilføjes en afhængighed.
  useEffect(() => {
    fetchActivities();
  }, []);

  const toggleLike = (id) => {
    setActivities(prev => 
      prev.map(activity  => 
        activity._id === id
          ? {...activity, liked: !activity.liked}
          : activity
      )
    )
  }

  return (
    <section className="container">
      {activities.map((activity) => (
        <Activity activity={activity} key={activity._id} onToggleLike={() => toggleLike(activity._id)}/>
      ))}
    </section>
  );
};

export default ActivitiesSection;
