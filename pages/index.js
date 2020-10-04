import { Parallax } from "../components/templates"

export default function Home({org}){
  
  return(
    <div>
      <Parallax image="https://mahotaservicos.com/wp-content/uploads/2020/10/nextjs_header.jpg" >
      </Parallax>
      
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