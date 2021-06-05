import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'; 

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]); // Como é uma lista começar o estado com um array vazio
    
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then((response) => response.json())
        .then(data => setRepositories(data))
    }, []); 

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.id} repository={repository}/>
                ))}
            </ul>
        </section>
    )
}