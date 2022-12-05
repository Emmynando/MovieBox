import React from "react";
import style from "./MovieCard.module.css";

function MovieCard() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <img src={require("../images/accidentMan.jpg")} />
          <div>
            <h3> Accident Man</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 36
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              The Accident Man, is back and this time he must best the top
              assassins in the world, to protect the ungrateful son of a mafia
              boss, save the life of his only friend and rekindle his
              relationship with his maniacal father figure.
            </p>
            <h5>
              <span>Genre:</span> Action/Comedy
            </h5>
            <h6> Date of Production: 2022 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Aki.jpg")} />
          <div>
            <h3> Aki and Pawpaw</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 11
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              The hilarious Aki and Paw Paw are back. This time, they're on a
              mission to get fame and fortune by any means necessary.
            </p>
            <h5>
              <span>Genre:</span> Comedy
            </h5>
            <h6> Date of Production: 2022 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/BloodSisters.jpg")} />
          <div>
            <h3> Blood Sisters</h3>
            <h5>
              <span className={style.duration}>Duration:</span> Series
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              Bound by a dangerous secret, friends Sarah and Kemi are forced to
              go on the run after a wealthy groom disappears during his
              engagement party.
            </p>
            <h5>
              <span>Genre:</span> Crime
            </h5>
            <h6> Date of Production: 2022 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/ElesinOba.jpg")} />
          <div>
            <h3> Elesin Oba</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 36
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              After his king dies, a horseman must sacrifice himself to serve
              his ruler in the afterlife -- but sudden distractions lead to
              unexpected tragedy
            </p>
            <h5>
              <span>Genre:</span> Tragedy
            </h5>
            <h6> Date of Production: 2022 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Encanto.jpg")} />
          <div>
            <h3> Encanto</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 49
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              The Madrigals are an extraordinary family who live hidden in the
              mountains of Colombia in a charmed place called the Encanto. The
              magic of the Encanto has blessed every child in the family with a
              unique gift -- every child except Mirabel. However, she soon may
              be the Madrigals last hope when she discovers....
            </p>
            <h5>
              <span>Genre:</span> Musical/Family
            </h5>
            <h6> Date of Production: 2021 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/fall.jpg")} />
          <div>
            <h3> Fall</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 47
              Minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              For best friends Becky and Hunter, life is all about conquering
              fears and pushing limits. However, after they climb 2,000 feet to
              the top of a remote, abandoned radio tower, they find themselves
              stranded with no way down. Now, their expert climbing skills are
              put to the ultimate test as they desperately fight to survive the
              elements, a lack of supplies, and vertigo-inducing heights.
            </p>
            <h5>
              <span>Genre:</span> Thriller
            </h5>
            <h6> Date of Production: 2021 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/GhostTout.jpg")} />
          <div>
            <h3> Ghost and Tout</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 43
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              Isla, a young woman from the ghetto, encounters a ghost called
              Mike who needs her assistance to communicate with the people he
              left behind. She soon becomes entangled in solving a murder
              mystery.
            </p>
            <h5>
              <span>Genre:</span> Comedy
            </h5>
            <h6> Date of Production: 2018 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Hacksaw.jpg")} />
          <div>
            <h3> Hacksaw Ridge</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 2 hours, 19
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              The film focuses on the World War II experiences of Desmond Doss,
              an American pacifist combat medic who, as a Seventh-day Adventist
              Christian, refused to carry or use a weapon or firearm of any
              kind.
            </p>
            <h5>
              <span>Genre:</span>Historical Fiction
            </h5>
            <h6> Date of Production: 2016 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Interstellar.jpg")} />
          <div>
            <h3> Interstellar</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 2 hours, 49
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              When Earth becomes uninhabitable in the future, a farmer and
              ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft,
              along with a team of researchers, to find a new planet for humans.
            </p>
            <h5>
              <span>Genre:</span> Scfi/Adventure
            </h5>
            <h6> Date of Production: 2014 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/kingBoys.jpg")} />
          <div>
            <h3> King of Boys </h3>
            <h5>
              <span className={style.duration}>Duration:</span> 2 hours, 49
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              King of Boys is a 2018 Nigerian crime political thriller film
              written, co-produced and directed by Kemi Adetiba. The movie is
              focused on power tussle
            </p>
            <h5>
              <span>Genre:</span> Political Thriller
            </h5>
            <h6> Date of Production: 2018 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Miracle-in-cell-7.jpg")} />
          <div>
            <h3> Miracle in Cell-7</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 2 hours, 7
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              The story unfolds in a story to a village in 1983. An autistic
              father, Mehmet Koyuncu (Memo), lives with his young daughter, Ova,
              and his grandmother on a hillside. But his world is turned upside
              down when he is falsely charged with murdering a girl who had died
              due to an accident.
            </p>
            <h5>
              <span>Genre:</span> Tragedy
            </h5>
            <h6> Date of Production: 2019 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Ozark.jpg")} />
          <div>
            <h3> Ozark</h3>
            <h5>
              <span className={style.duration}>Duration:</span> Series
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              This drama series stars Jason Bateman as Marty Byrde, a financial
              planner who relocates his family from Chicago to a summer resort
              community in the Ozarks. With wife Wendy and their two kids in
              tow, Marty is on the move after a money-laundering scheme goes
              wrong.
            </p>
            <h5>
              <span>Genre:</span> Crime
            </h5>
            <h6> Date of Production: 2017 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Red Notice.jpg")} />
          <div>
            <h3> Red Notice</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 58
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              During the 1st century BC, Roman general Mark Antony gifts
              Egyptian queen Cleopatra three bejeweled eggs as a wedding gift to
              show his devotion. The eggs are lost in time until two are found
              by a farmer in 1907, but the last one remains lost.
            </p>
            <h5>
              <span>Genre:</span> Action Comedy
            </h5>
            <h6> Date of Production: 2017 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/smile.jpg")} />
          <div>
            <h3> Smile</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 55
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              For best friends Becky and Hunter, life is all about conquering
              fears and pushing limits. However, after they climb 2,000 feet to
              the top of a remote, abandoned radio tower, they find themselves
              stranded with no way down. Now, their expert climbing skills are
              put to the ultimate test as they desperately fight to survive the
              elements, a lack of supplies, and vertigo-inducing heights.
            </p>
            <h5>
              <span>Genre:</span> Horror
            </h5>
            <h6> Date of Production: 2022 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Squid.jpg")} />
          <div>
            <h3> Squid Games</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 8 hours, 33
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              Hundreds of cash-strapped contestants accept an invitation to
              compete in children's games for a tempting prize, but the stakes
              are deadly.
            </p>
            <h5>
              <span>Genre:</span> Action Horror
            </h5>
            <h6> Date of Production: 2021 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/The system.jpg")} />
          <div>
            <h3> The System</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1hour, 37
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              After a drug bust, a former marine is recruited by authorities to
              go under cover in a notoriously dangerous prison. After
              discovering an underground fight ring, he must fight to stay alive
              and take down the corrupt system.
            </p>
            <h5>
              <span>Genre:</span> Adventure
            </h5>
            <h6> Date of Production: 2022 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Train to Busan.jpg")} />
          <div>
            <h3> Train to Busan</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour, 58
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              The film mostly takes place on a high-speed train from Seoul to
              Busan as a zombie apocalypse suddenly breaks out in the country
              and threatens the safety of the passengers.
            </p>
            <h5>
              <span>Genre:</span> Action Horror
            </h5>
            <h6> Date of Production: 2016 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Venom.jpg")} />
          <div>
            <h3> Venom</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 1 hour,45
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              Venom is a 2018 American superhero film featuring the Marvel
              Comics character of the same name, produced by Columbia Pictures
              in association with Marvel[5] and Tencent Pictures, and
              distributed by Sony Pictures Releasing.
            </p>
            <h5>
              <span>Genre:</span> Horror
            </h5>
            <h6> Date of Production: 2018 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Where hands Touch.jpg")} />
          <div>
            <h3> Where Hands Touch</h3>
            <h5>
              <span className={style.duration}>Duration:</span> 2 hours, 2
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              A biracial girl faces the constant threat of getting targeted
              because of her colour in a Nazi-ruled Germany. Moreover, her lover
              is the son of a prominent SS officer.
            </p>
            <h5>
              <span>Genre:</span> War/Romance
            </h5>
            <h6> Date of Production: 2018 </h6>
          </article>
        </div>

        <div className={style.card}>
          <img src={require("../images/Woman King.jpg")} />
          <div>
            <h3> Woman King </h3>
            <h5>
              <span className={style.duration}>Duration:</span> 2 hours, 14
              minutes
            </h5>
            <button className={style.watch}> Watch Now</button>
          </div>
          <article>
            <p>
              The Woman King is a 2022 American historical epic film about the
              Agojie, the all-female warrior unit that protected the West
              African kingdom of Dahomey during the 17th to 19th centuries.
            </p>
            <h5>
              <span>Genre:</span> Action Drama
            </h5>
            <h6> Date of Production: 2022 </h6>
          </article>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
