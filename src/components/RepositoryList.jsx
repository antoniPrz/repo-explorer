import React from 'react';
import { RepositoryItem } from './RepositoryItem';


// const repositoryName = "unform23";
const repositoryItem = {
    name: "unform",
    subtittle: "Forms in react",
    link: 'https://github.com/unform/unform'
}




export function RepositoryList(){

    return ( 
        <section className = "repository-list">
            <h1>Lista de repositorios </h1>
            <ul>
                <RepositoryItem repository={repositoryItem}/>
                <RepositoryItem repository={repositoryItem}/>
                <RepositoryItem repository={repositoryItem}/>
                <RepositoryItem repository={repositoryItem}/>
                <RepositoryItem repository={repositoryItem}/>
           
            </ul>
        </section>
    );
}