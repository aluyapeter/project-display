// import fintekkImg from "../img/fintekk-img.png";

function Body(props) {
  console.log(props.imgSnippet.src);
  return (
    <>
      <div className="main-sec">
        <div className="snippet-sec">
          <img src={props.imgSnippet.src} alt="" />
        </div>
        <div className="context-sec">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <a href={props.githubLink}>Github</a>
          <a href={props.vercelLink}>Vercel</a>
        </div>
      </div>
    </>
  );
}

export default Body;
