import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import '../components/template.css'
import { Link, graphql, useStaticQuery } from 'gatsby'


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
              servicesImage {
                  resize {
                    src  
                  }
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
                    media {
                        resize(width: 680, height: 489) {
                          src
                        }
                    }
                }
            }
        }
        contentfulServicesAbout {
            serviceImage {
                resize {
                    src
                }
            }
            header
            subheader
            bodyServices {
              bodyServices
            }
            serviceButton
        }
        contentfulBlogTitle {
            heading
            subheading
        }
      }
  `)
  
return (
    <>
        <div class='container pt90 pb60'>
                <div class='row align-items-center'>
                    <div class='col-md-4 mb30'>
                        <div class='text-center'>
                            <img className="mb30" src={data.contentfulServicesAbout.serviceImage.resize.src} alt={data.contentfulServicesAbout.subheader} />
                            <h5 class='text-uppercase mb20'>{data.contentfulServicesAbout.subheader}</h5>
                            <p>{data.contentfulServicesAbout.bodyServices.bodyServices}</p>
                        </div> 
                    </div>    
                    <div class='col-md-7 ml-auto'>
                        <div class='row'>
                            {data.allContentfulServicesPage.edges.map((edge) => {
                                return  (
                                        <div class='col-md-6 mb30 text-center'>
                                            <img src={edge.node.servicesImage.resize.src} alt={edge.node.title} />
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
							<h2 class="montserrat text-uppercase">{data.contentfulBlogTitle.heading}</h2>
							<p class="lead divider-line">{data.contentfulBlogTitle.subheading}</p>
						</div>
					</div>
				</div>

				<div class="row multi-columns-row post-columns">         
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return  (
                    <div class="col-sm col-md-4 col-lg-4">
                        <article class="post format-image bg-white">
                            <div class="post-preview">
                                <img src={edge.node.media.resize.src} alt={edge.node.title} />
                            </div>
                            <div class="post-content">
                                <Link to={`/news/${edge.node.slug}`}>
                                <h2 class="post-title">{edge.node.title}</h2>
                                <ul class="post-meta">
                                    <li>{edge.node.publishedDate}</li>
                                    <li> BY {edge.node.author}</li>
                                </ul> 
                                <p>{edge.node.body.body}</p>  
                                <Link to="/" class="btn btn-lg btn-link btn-base">Read more ›</Link> 
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
							<Link to="/">Read all news</Link>
						</div>
					</div>
				</div>

			</div>
    </>
    )  
}

export default Main