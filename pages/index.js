import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm'
import ArtistList from '../components/ArtistList'

const Index = () => {

    const [signedUp, setSignedUp] = useState([])
    const [taken, setTaken] = useState([])

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
            </Head>
            <Navbar />
            <div className="mainimg">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-between">
                        <SignUpForm signedUp={signedUp} setSignedUp={setSignedUp} taken={taken} setTaken={setTaken} />
                        <ArtistList signedUp={signedUp} setSignedUp={setSignedUp} taken={taken} setTaken={setTaken} />
                    </div>
                </div>
            </div>
            <style jsx global>{`            
                  .mainimg {
                    background-image: url(${require("../images/audience.png")});
                    background-size: cover;
                    height: 600px;
                    max-width: none;
                  }

                  @media (max-width: 480px) {
                    .signup {
                        margin-bottom: 25px;
                        margin-top: 25px;
                    }
                    .mainimg {
                      background-repeat: no-repeat;
                      background-attachment: fixed;
                      background-position: center;
                      background-size: cover;
                      max-width: 480px;
                      opacity: 0.9;
                      height: 900px;
                    }
                  }
            `}</style>
        </div>
    )
}

export default Index