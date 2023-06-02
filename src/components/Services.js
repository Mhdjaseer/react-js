import React from 'react'
import Title from './title'
import Articles from './articles'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">

        <Articles title='saving money' icon="fas fa-wallet fa-fw" />
        <Articles title='endless hiking' icon='fas fa-tree fa-fw' />
        <Articles title='amazing comfort' icon="fas fa-socks fa-fw" />
      </div>
    </section>
  )
}

export default Services
