import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <article className="card">
        <header>
          <Image src="/imgs/pfp.jpg" alt="" width="250" height="250" />
          <div>
            <h1>Aren Liore</h1>
            <p>26 &middot; He/Him &middot; Pan</p>
          </div>
        </header>
        <section>
          <h2>About Me</h2>
          <p>
            Heya! I&apos;m a fluffy tiger who likes house plants, video games,
            and tea! In the real world, I&apos;m a{" "}
            <a href="https://mattmcadams.com">web designer and developer</a>{" "}
            from Birmingham AL. I&apos;m generally shy but enjoy making new
            friends so say hello!
          </p>
        </section>
        <section>
          <h2>Find me on Social</h2>
          <ul className="buttons">
            <li>
              <a href="https://twitter.com/arenliore">
                <span>Twitter</span>
                <span className="fa-brands fa-twitter"></span>
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/arenliore.com">
                <span>BlueSky</span>
                <span className="fa-solid fa-cloud"></span>
              </a>
            </li>
            <li>
              <a href="https://t.me/ArenLiore">Telegram</a>
            </li>
            <li>
              <a href="https://discordapp.com/users/Aren#8081">Discord</a>
            </li>
            <li>
              <a href="https://barq.social/p/Ptu0zTF">Barq</a>
            </li>
          </ul>
          <p>
            I also have a{" "}
            <a href="https://twitter.com/ArenAfterDark">nsfw twitter</a> if
            you&apos;re into that kind of thing.
          </p>
        </section>
        <section>
          <h2>Gaming info</h2>
          <ul className="buttons">
            <li>
              <a href="https://steamcommunity.com/id/ArenLiore">Steam</a>
            </li>
            <li>
              <a href="https://account.xbox.com/en-us/profile?gamertag=Aren%20Liore">
                Xbox
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
