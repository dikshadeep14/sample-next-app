import Link from "next/link"
import {Card} from "../layout/Card";
import SearchBox from "../layout/SearchBox";
import {Grid} from '@material-ui/core';

function Home({responses}) {
  const handleList = (x) => {

  }
  return (
    <div className="container">
      <h2 className="title">Marketing</h2>
      <SearchBox />
      <Grid container direction='row'>
        {responses.map((response) => {return(<Card key={response.id} handleList={handleList} response={response} />)})}
      </Grid>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          text-decoration: underline;
          color: teal;
          letter-spacing: 0.1rem;
          word-spacing: 0.2rem;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/products");

  const json = await res.json();
  return {
    props: {
      responses: json,
    },
  };
}

export default Home
