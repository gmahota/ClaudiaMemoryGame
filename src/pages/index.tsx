export default function Home({org}){
  return(
    <div>
      <h1>{org.login}</h1>
      <h2>{org.description}</h2>

      <p>Site: <a href={org.blog}>{org.blog}</a></p>
    </div>    
  )
}

export const getStaticProps = async () =>{
  const response = await fetch('https://api.github.com/orgs/mahotaservicos');
  const data = await response.json();

  return{
    props: {
      org: data,
    },
    revalidate: 10
  }
};