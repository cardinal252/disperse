import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Main = () => {

    const data = useStaticQuery(graphql`
    query {
        page: contentfulHomePage {
            id
            title
            subtitle
            body {
                raw
            }
        }
        allContentfulBlogPost ( sort: { fields: publishedDate, order:DESC }, limit: 3 ) {
            edges {
                node {
                    id
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                    body {
                        body
                    }
                    image {
                        resize(width: 680, height: 489) {
                          src
                        }
                    }
                }
            }
        }

      }
  `)

    return (
        <>
            {/* -- ABOUT -- */}
            <section class="module">
                <div class="container">

                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                            <div class="module-header text-center">
                                <h2 class="montserrat text-uppercase">{data.page.title}</h2>
                                <p class="lead divider-line">{data.page.subtitle}</p>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-sm-12">
                            <p class="lead text-center">{renderRichText(data.page.body)}</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* -- END ABOUT -- */}
            {/* <div className='container pt90 pb60'>
                <div className='row'>
                    <div className='col-md-5 mb30'>

                        <img className="mb30" src="path-to-services/images" alt="Services Image" />
                        <h5 className='text-uppercase mb20'>ANOTHER TITLE</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante justo, varius ac mollis eget, laoreet euismod neque. Praesent eu ipsum ut mauris convallis fermentum eget ut eros. Suspendisse potenti. Nam risus felis, consectetur vel interdum vitae, ultricies ut quam. Mauris scelerisque imperdiet tristique. Nam dapibus tortor libero, nec vulputate sem egestas nec. Etiam gravida, ipsum at porta hendrerit, neque enim consectetur lectus, at blandit justo tortor eget tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus odio lectus, elementum non sodales quis, maximus non nunc. Nullam eu dui sed lorem rhoncus porttitor ac ut urna. Aliquam eu justo et leo pharetra consequat euismod eu nisi. Donec vel rhoncus elit, in faucibus massa.</p>
                        <p>Fusce ante orci, placerat non ullamcorper non, suscipit ut leo. Suspendisse ullamcorper in libero pharetra lacinia. Nulla convallis tristique felis, eget lacinia erat porttitor nec. Fusce finibus mi ac nisl lacinia volutpat. Vivamus finibus arcu quam. Ut ullamcorper cursus risus nec facilisis. Suspendisse elit leo, hendrerit nec dui vitae, rutrum varius nulla. Cras elit ligula, condimentum quis ligula in, interdum vestibulum dolor. Integer interdum dignissim quam vitae vestibulum. Mauris consequat ligula nibh, at laoreet nibh auctor sit amet. Ut id tristique dui. Nam rutrum non dui eget commodo. Cras ligula ligula, ultricies eu arcu et, consequat lacinia arcu. Donec molestie libero nisi. Integer sagittis velit et lorem posuere, in imperdiet est elementum. Aliquam velit ex, elementum sit amet lectus eu, bibendum dictum augue.</p>

                    </div>
                    <div className='col-md-7 ml-auto'>
                        <div className='row'>

                            <div key="SOMEKEY" className='col-md-6 mb30 text-center'>
                                <img className="mb30" src="/image" alt="" />
                                <h5 className='text-uppercase mb20'>TITLE4</h5>
                                <p>Subheader 4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="module-header text-center">
                            <h2 className="montserrat text-uppercase">HEADER5</h2>
                            <p className="lead divider-line">SUBHEADER5</p>
                        </div>
                    </div>
                </div>

                <div className="row multi-columns-row post-columns">
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <div key={edge.node.id} className="col-sm col-md-4 col-lg-4">
                                <article className="post format-image bg-white">
                                    <div className="post-preview">
                                        <img src={edge.node.image.resize.src} alt={edge.node.title} />
                                    </div>
                                    <div className="post-content">
                                        <Link to={`/news/${edge.node.slug}`}>
                                            <h2 className="post-title">{edge.node.title}</h2>
                                            <ul className="post-meta">
                                                <li>{edge.node.publishedDate}</li>
                                            </ul>
                                            <p>{edge.node.body.body}</p>
                                            <Link to="/" className="btn btn-lg btn-link btn-base">Read more ›</Link>
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        )
                    })}

                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center m-t-35 m-b-35">
                            <Link to="/">Read all news</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main