import Home from '@/templates/Home'

export default function Index() {
  return (
    <>
      <Home>
        <div className="home-page background-fancy-image">
          <h2>Welcome!</h2>
          <div className="home-description-card">
            <p>
              This is a simple chat inspired on game of thrones lore. Messages
              are stored on redux, without an API connection. This way, every
              new chat or message sent will be only available on your page.
            </p>
          </div>
        </div>
      </Home>
    </>
  )
}
