import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {userName: 'enzol1016',
    name:'Enzo Lopez',
    isFollowing: true
},
{
    userName: 'hernestokk',
    name:'Hernesto Kou',
    isFollowing: false
},
{
    userName: 'mariadb',
    name:'Maria Gonzales',
    isFollowing: false
}
]

export function App() {
    return (
        <section className='App'>                         {/*Mapeo de lista de componentes*/}
           {
            users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                
                ))
            }
        </section>
       
    )
}