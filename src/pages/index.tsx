import Home from '@/templates/Home'

export default function Index() {
  return (
    <>
      <Home>
        <div className="home-page background-fancy-image">
          <h2>Welcome!</h2>
          <div className="home-description-card">
            <p style={{ textAlign: 'center' }}>
              This is a simple chat inspired on game of thrones lore. Messages
              are stored on redux, without an API connection. This way, every
              new chat or message sent will be only available on your page.
              <br></br> It was built solely to practice the react state
              management in a advanced approach. I hope you enjoy it! And do not
              forget to be careful when talking to Daenerys; the last time
              someone saw her, she was destroying an entire land.
              <br></br>
              <br></br>
              👑🐉⚔️🐺
            </p>
          </div>
        </div>
      </Home>
    </>
  )
}
