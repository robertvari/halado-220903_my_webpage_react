import React from 'react'


function ServiceCard({title, description, photo}){
  return(
    <section className="service-card">
      <img src={photo} alt={photo} />
      
      <section className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    </section>
  )
}


export default function Services() {
  return (
    <div className='content-container'>
      <ServiceCard photo="https://source.unsplash.com/random/?wedding&1" title="Esküvői fotózás"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales vehicula dui, sit amet tincidunt sapien mollis ut. Sed enim leo, blandit id tempus eget, lacinia quis turpis. "/>
      <ServiceCard title="Természetfotók" photo="https://source.unsplash.com/random/?nature&1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales vehicula dui, sit amet tincidunt sapien mollis ut. Sed enim leo, blandit id tempus eget, lacinia quis turpis. "/>
      <ServiceCard title="Rendezvények szervezése" photo="https://source.unsplash.com/random/?events&1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales vehicula dui, sit amet tincidunt sapien mollis ut. Sed enim leo, blandit id tempus eget, lacinia quis turpis. "/>
      <ServiceCard title="Rendezvények szervezése" photo="https://source.unsplash.com/random/?events&1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales vehicula dui, sit amet tincidunt sapien mollis ut. Sed enim leo, blandit id tempus eget, lacinia quis turpis. "/>
      <ServiceCard title="Rendezvények szervezése" photo="https://source.unsplash.com/random/?events&1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales vehicula dui, sit amet tincidunt sapien mollis ut. Sed enim leo, blandit id tempus eget, lacinia quis turpis. "/>
      <ServiceCard title="Rendezvények szervezése" photo="https://source.unsplash.com/random/?events&1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales vehicula dui, sit amet tincidunt sapien mollis ut. Sed enim leo, blandit id tempus eget, lacinia quis turpis. "/>
    </div>
  )
}
