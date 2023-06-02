import React from 'react'
import Title from './title'
import { tours } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />
        <div className="section-center featured-center">
    {tours.map((tour)=>{
        const{id,imge,date,title,contry,days,price}=tour
        return(
            <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={imge} className="tour-img"  alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {contry}
                </p>
                <p>{days}days</p>
                <p>from ${price}</p>
              </div>
            </div>
          </article>

            );
    })}

      
        

      </div>
    </section>
  )
}

export default Tours
