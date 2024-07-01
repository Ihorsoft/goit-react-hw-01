import { BiAt } from "react-icons/bi";
import s from "./Profile.module.css";
export const Profile = ({
  name = "Petra Marica",
  tag = "@pmarica",
  location = "Salvador, Brasil",
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats = { folowers: 1, views: 1, likes: 1 },
}) => {
  return (
    <div className={s.wripper}>
      <div className={s.userCard}>
        <div>
          <img className={s.imageWrapper} src={image} alt="User avatar" />

          <h2>{name}</h2>

          <p>
            <BiAt />
            {tag}
          </p>
          <p>{location}</p>
        </div>

        <ul className={s.content}>
          <li className={s.carditem}>
            <div className={s.itemitem}>
              <span>Followers</span>
            </div>
            <span>{stats.followers}</span>
          </li>
          <li className={s.carditem}>
            <div>
              <span>Views</span>
            </div>
            <span>{stats.views}</span>
          </li>
          <li className={s.carditem}>
            <div>
              <span>Likes</span>
            </div>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
