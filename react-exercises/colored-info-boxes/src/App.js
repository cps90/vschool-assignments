import React from 'react';
import Component from './Component'
import './style.css';

const App = () => {
    
    const tvShows = [
        {
            show: 'Game of Thrones',
            network: 'HBO', 
            describe: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones.", 
            uniqueStyle: 'title1 show'
        },   
        { 
            show:'The Americans', 
            network: 'FX', 
            describe: "It is an American period drama television series created by Joe Weisberg. It is set in the early 1980s during the Cold War, it is the story of two Soviet KGB officers posing as an American married couple living in the Northern Virginia suburbs of Washington,D.C., with their children.",
            uniqueStyle: 'title2 show'
        },
        {
            show:'Veep', 
            network: 'HBO', 
            describe: "Veep is an American political satire comedy television series, starring Julia Louis-Dreyfus. Veep is set in the office of Selina Meyer, a fictional vice president. The series follows Meyer and her team as they attempt to make their mark and leave a legacy without getting tripped up in the day-to-day political games that define the American government.",
            uniqueStyle: 'title3 show'
        },    
        {
            show: 'Big Little Lies',
            network: 'HBO', 
            describe: "It is an American television drama series that was created and written by David E. Kelley and is based on the novel of the same name by Liane Moriarty. Big Little Lies stars Nicole Kidman, Reese Witherspoon and Shailene Woodley and tells the story of three emotionally troubled women in Monterey, California, who become embroiled in a murder investigation.",
            uniqueStyle: 'title4 show'
        },
        {
            show: '30 Rock', 
            network: 'NBC', 
            describe: "30 Rock is an American satirical television sitcom created by Tina Fey that ran on NBC from October 11, 2006, to January 31, 2013. The series, based on Fey's experiences as head writer for Saturday Night Live, takes place behind the scenes of a fictional live sketch comedy show depicted as airing on NBC.",
            uniqueStyle: 'title5 show'
        },
        {
            show: 'The Good Place', 
            network: 'NBC', 
            describe: "The Good Place is an American fantasy comedy television series created by Michael Schur. he series focuses on Eleanor Shellstrop (Kristen Bell), a woman who wakes up in the afterlife and is introduced by Michael (Ted Danson) to 'The Good Place', a Heaven-like utopia he designed, in reward for her righteous life.",
            uniqueStyle: 'title6 show'
        },
        {
            show: 'The Wire', 
            network: 'HBO',
            describe: "The Wire is lauded for its literary themes, its uncommonly accurate exploration of society and politics, and its realistic portrayal of urban life. While during its original run the series received only average ratings and never won any major television awards, it is now regarded by many critics as one of the greatest television shows of all time.",
            uniqueStyle: 'title7 show'
        },
        {
            show: 'Downton Abby',
            network: 'HBO', 
            describe: "The series, set in the fictional Yorkshire country estate of Downton Abbey between 1912 and 1926, depicts the lives of the aristocratic Crawley family and their domestic servants in the post-Edwardian era—with the great events in history having an effect on their lives and on the British social hierarchy.",
            uniqueStyle: 'title8 show'
        }   
    ]

    const mappedTvShows = tvShows.map((show, i) => {
        return (
            <Component
                key={show.show + i}
                series={show.show}
                network={show.network}
                describe={show.describe}
                uniqueStyle={show.uniqueStyle}/>    
        )
    })

    return (
        <div>
        <h1 className='title'>My Favorite TV Shows</h1>   
        <div  className='container'> 
            { mappedTvShows }
        </div>
        </div>
    );
}

export default App;