import React, { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss'


// const repositoryName = "unform23";
// https://api.github.com/orgs/rocketseat/repos

// const repositoryItem = {
//     name: "unform",
//     subtittle: "Forms in react",
//     link: 'https://github.com/unform/unform'
// }




export function RepositoryList(){


    interface repository{
        name: string;
        language: string;
        html_url: string;
        
    }


    const [repositories , setRepositories] = useState<repository[]>([]); 

    useEffect( () => {
        fetch('https://api.github.com/users/antoniprz/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[] );


       
    return ( 
        <>
        <section className = "repository-list">
            <h1>Lista de repositorios  </h1>
            <ul>
                {repositories.map(repo => {
                    return <RepositoryItem key={repo.name} repository={repo}/>
                })}
               
           
            </ul>
        </section>
        </>
    

    );
}