import Link from "next/link";
import fetch from "isomorphic-unfetch";

const index = ({ user }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};
export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://api.github.com/users/jerrynim");
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }

    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};
const Home = () => {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <Link href="/tomato">
        <a>Move to '/tomato'</a>
      </Link>
      <Link href="/vegetable/potato">
        <a>Move to '/vegetable/potato'</a>
      </Link>
      <img src="/asset/images/aislogo.png"></img>
    </div>
  );
};

export default index;
