export const Profile = ({
  name = "Petra Marica",
  tag = "@pmarica",
  location = "Salvador, Brasil",
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats = { folowers: 1, views: 1, likes: 1 },
}) => {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
