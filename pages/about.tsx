import { NextPage } from 'next'
import Head from 'next/head'
import EmployeeList from '../components/EmployeeList'

const About: NextPage = () => {
    return (
        <div>
            <header className="border-b-2 border-black pt-10 pb-10"> 
                <h1 className="text-8xl text-center font-serif">Every idea needs a <strong>Nedium.</strong></h1>
            </header>

            <main className="flex-col border-b-2 border-black">
                <div className="flex border-b-2 border-black">
                     <p className="border-r-2 border-black p-7 pr-10 whitespace-pre-wrap">
                The best ideas can change who we are. Medium is where those ideas <br />take shape, take off, 
                and spark powerful conversations. We’re an open <br />platform where over 100 million readers come to find insightful and <br />dynamic thinking. 
                Here, expert and undiscovered voices alike dive into <br />the heart of any topic and bring new ideas to the surface. 
                Our purpose is <br /> to spread these ideas and deepen understanding of the world.

<br />
<br />
We’re creating a new model for digital publishing. 
One that supports <br />nuance, complexity, and vital storytelling without giving in to the <br />incentives of advertising. 
It’s an environment that’s open to everyone but <br />promotes substance and authenticity. 
And it’s where deeper <br />connections forged between readers and writers can lead to discovery <br />and growth. 
Together with millions of collaborators, we’re building a <br />trusted and vibrant ecosystem fueled by important ideas and the people <br />who think about them.
                     </p>
                     <img src="./images/globe.gif" alt="animated spinning globe" 
                     className="relative top-8 bottom-0 left-64 h-80"
                     width="320" height="240"/>
                </div>
                <div className="flex flex-col bg-orange-300">
                    <h2 className="text-8xl text-center mt-10 font-serif">A living network of <br />curious minds<strong>.</strong></h2>
                    <p className="text-center mt-5 mb-10">
                    Anyone can write on Medium. Thought-leaders, journalists, experts, and 
                    <br />
                    individuals with unique perspectives share their thinking here. 
                    You’ll find 
                    <br />
                    pieces by independent writers from around the globe, stories we feature and
                    <br />
                     leading authors, and smart takes on our own suite of blogs and publications.
                    </p>

                    <EmployeeList />
                </div>

            </main>
        </div>
    )
}

export default About;