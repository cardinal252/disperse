import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import '../components/template.css'
import Image1 from "../../images/con1.jpg"
import { Link, graphql, useStaticQuery } from 'gatsby'
import BlogTemplate from '../../templates/blog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeadset,
} from '@fortawesome/free-solid-svg-icons'

const Main = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulServicesPage(limit: 4) {
          edges {
            node {
              title
              body {
                body
              }
            }
          }
        }
        allContentfulBlogPost ( sort: { fields: publishedDate, order:DESC }, limit: 3 ) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                    author
                    body {
                        body
                    }
                }
            }
        }
      }
  `)
  
return (
    <>
        <div class='container pt90 pb60'>
                <div class='row align-items-center'>
                    <div class='col-md-4 mb30'>
                    <FontAwesomeIcon icon={faHeadset} size="7x" />
                        <div class='section-title title-right mb30'>
                            <span class="section-subTitle">what we do</span>
                            <h3 class='mb0'>
                                Our services
                            </h3>
                        </div>
                        <p class='lead'>
                            We provide the best customer service to our customers
                        </p>
                        <a data-scroll href='#portfolio' class='btn btn-outline-secondary'>Learn More</a>
                    </div>
                    <div class='col-md-7 ml-auto'>
                        <div class='row'>
                            {data.allContentfulServicesPage.edges.map((edge) => {
                                return  (
                                        <div class='col-md-6 mb30 text-center'>
                                            <h5 class='text-uppercase mb20'>{edge.node.title}</h5>
                                            <p>{edge.node.body.body}</p>
                                        </div>      
                                )    
                            })} 
                        </div>      
                    </div>
                </div>
            </div>
            <div class="container">

				<div class="row">
					<div class="col-sm-12 col-sm-offset-3">
						<div class="module-header text-center">
							<h2 class="montserrat text-uppercase">Our news</h2>
							<p class="lead divider-line">Read fresh news in our blog.</p>
						</div>
					</div>
				</div>

				<div class="row multi-columns-row post-columns">         
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return  (
                    <div class="col-sm col-md-4 col-lg-4">
                        <article class="post format-image bg-white">
                            <div class="post-preview">
                                <a href="#"><img src={Image1} alt="" /></a>
                            </div>
                            <div class="post-content">
                                <Link to={`/news/${edge.node.slug}`}>
                                <h2 class="post-title">{edge.node.title}</h2>
                                <ul class="post-meta">
                                    <li>{edge.node.publishedDate}</li>
                                    <li> BY {edge.node.author}</li>
                                </ul> 
                                <p>{edge.node.body.body}</p>  
                                <a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a> 
                                </Link>
                            </div>
                        </article>
                    </div>
                    )    
                })} 

				</div>

				<div class="row">
					<div class="col-sm-12">
						<div class="text-center m-t-35 m-b-35">
							<a href="#">Read all news</a>
						</div>
					</div>
				</div>

			</div>
    </>
    )  
}

export default Main