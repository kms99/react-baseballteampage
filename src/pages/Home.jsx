import Main from "../components/Home/Main/Main";

function Home({ selectTeam, setSelectTeam, allComment, setAllComment }) {
  return (
    <Main
      selectTeam={selectTeam}
      setSelectTeam={setSelectTeam}
      allComment={allComment}
      setAllComment={setAllComment}
    />
  );
}

export default Home;
