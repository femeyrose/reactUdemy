

import React, { Fragment, Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types';
import Repos from './Repo'
import RepoItem from "./RepoItem";

class Usr extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        //  login is the param wants to route(/user/login)
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: Proptypes.bool,
        user: Proptypes.object.isRequired,
        getUser: Proptypes.func.isRequired,
        getUserRepos: Proptypes.func.isRequired,
        repos:Proptypes.array.isRequired,
    }

    render() {
        const { name, avatar_url, html_url, followers, following,
            location, bio, blog, login, public_repos, public_gists, hireable,company } = this.props.user

        const { loading,repos } = this.props

        if (loading) {
            return (<ClipLoader />)
        }
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to Home </Link>
                Hireable:{' '}
                {hireable ? (<i className='fa fa-check text-success' />) : (<i className="fa fa-times-circle text-danger" />)}
                <div className="all-center">
                    <div className="card grid-2">
                        <div >
                            <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
                            <h1>{name}</h1>
                            <h4>{location}</h4>
                        </div>
                        <div>
                            {bio && (<Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>

                            </Fragment>)}
                            <a href={html_url} className='btn btn-dark my-1'>Visit github profile</a>
                       <ul>
                           <li>
                               {login && <Fragment>
                                 <strong>Username:</strong> {login} 
                                   </Fragment>}
                           </li>
                           <li>
                               {company && <Fragment>
                                 <strong>Company:</strong> {company} 
                                   </Fragment>}
                           </li>
                           <li>
                               {blog && <Fragment>
                                 <strong>Website:</strong> {blog} 
                                   </Fragment>}
                           </li>
                           <li>
                               {followers && <Fragment>
                                 <strong>Followers:</strong> {followers} 
                                   </Fragment>}
                           </li>
                           <li>
                               {following && <Fragment>
                                 <strong>following:</strong> {following} 
                                   </Fragment>}
                           </li>
                           <li>
                               {public_repos && <Fragment>
                                 <strong>public_repos:</strong> {public_repos} 
                                   </Fragment>}
                           </li>
                           <li>
                               {public_gists && <Fragment>
                                 <strong>public_gists:</strong> {public_gists} 
                                   </Fragment>}
                                   
                           </li>
                           <h4>Repositories</h4>
                           <li>
                           <Repos repos={repos} />
                           </li>
                       </ul>
                       
                        </div>
                        {/* <div className="card text-center">
                    <div className="badge badge-primary">Followers:{followers}</div>
                    <div className="badge badge-light">Following:{following}</div>

                    <div className="badge badge-dark">Public repos:{public_repos}</div>

                    <div className="badge badge-sucess">public_gists:{public_gists}</div>

                </div> */}
                    </div>
                </div>

             


            </Fragment>


        )
    }
}
export default Usr;