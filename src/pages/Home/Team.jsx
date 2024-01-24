import React from 'react'

function Team() {
  return (
      <section id="team" class="team ">
          <div className="container-fluid ts-container-fluid">
              
      <div class="team__content text--center">
        <h1 class="ts-fs-1 text-center mb-5">Team</h1>
      </div>
      <div class="team__members">
        <div class="team-member">
          <img class="team-member__image" src="/images/team/riccardo-pozzoli.jpg" alt="Riccardo Pozzoli"/>
          <div class="team-member__content">
            <h2 class="team-member__name title--small">Riccardo Pozzoli</h2>
            <span class="team-member__position">CEO</span>
            <a className=' text-decoration-none' href="https://www.linkedin.com/#">LinkedIn</a>
          </div>
        </div>
        <div class="team-member">
          <img class="team-member__image" src="/images/team/federico-parma.jpeg" alt="Federico Parma"/>
          <div class="team-member__content">
            <h2 class="team-member__name title--small">Federico Parma</h2>
            <span class="team-member__position">Investment Manager</span>
            <a className=' text-decoration-none' href="https://www.linkedin.com/#">LinkedIn</a>
          </div>
        </div>
        <div class="team-member">
          <img class="team-member__image" src="/images/team/federico-pozzoli.jpg" alt="Federico Pozzoli"/>
          <div class="team-member__content">
            <h2 class="team-member__name title--small">Federico Pozzoli</h2>
            <span class="team-member__position">Analyst</span>
            <a className=' text-decoration-none' href="https://www.linkedin.com/#">LinkedIn</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Team
