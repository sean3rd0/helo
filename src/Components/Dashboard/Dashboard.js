import React from "react"

export default class Dashboard extends React.Component{
    constructor(){
        super()
        this.state = {
            searchInput: "", 
            myPostsCheckboxValue: true, 
            posts: []
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    render(){
        const mappedListOfPosts = this.state.posts.map(individualPost => {
            return (
                <div>
                    <div>
                        <h2>{individualPost.title}</h2>
                    </div>
                    <div>
                        <h4>
                            {individualPost.name}
                        </h4>
                        <img>{individualPost.profilePic}</img>
                    </div>
                </div>
            )
            console.log(individualPost)
        })
        return(
            <>
                <div>
                    <div>Dashboard</div>
                    <input 
                        name="searchInput"
                        onChange={e => this.handleInputChange(e)}
                    ></input>
                    <button>Search</button>
                    <button>Reset</button>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <>My Posts</>
                </div>
            </>
        )
    }
}