import React from 'react'
import { client } from '../client'
import './Blogdata.css'
import Posts from './pages/Posts'

class Blogdata extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        client.getEntries()
        .then((response) => {
            console.log(response)
            this.setState ({
                articles: response.items
            })
        }) 
        .catch(console.error)    
    }

    render () {
        return (
            <div className="blogdata">
                <div className="container">
                    <main>
                        <div className="wrapper">
                            <Posts posts={this.state.articles} />
                        </div>
                    </main>
                </div>
            </div>
        )
    }    
}

export default Blogdata
