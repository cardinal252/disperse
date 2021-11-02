import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Navbar = () => {
    const data = useStaticQuery(graphql`
		query {
			lightImage: contentfulAsset(title: {eq: "Logo white"}) {
				file{
					url
				}
			}
			darkImage: contentfulAsset(title: {eq: "Logo Dark"}) {
				file{
					url
				}
			}			
			navMenuItems: allContentfulNavMenuItem {
				nodes {
					id
					name
					pages {
						slug
					}
					hubPage {
						... on ContentfulContactPage {
						  id
						  slug
						}
						... on ContentfulBlogHubPage {
							id
							slug
						  }						
					}					
				}
			}     
		}
	`);

  return (
	<header className="header js-stick">
		<div className="container">
			
			<div className="inner-header">
				<Link className="inner-brand" to="/">
					<img className="brand-light" src={data.lightImage.file.url} alt="" />
					<img className="brand-dark" src={data.darkImage.file.url} alt="" />
				</Link>
			</div>
		
			
			<div className="main-nav-toggle">
				<div className="nav-icon-toggle" data-toggle="collapse" data-target="#custom-collapse">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</div>
			</div>
		
		
			<nav id="custom-collapse" className="main-nav collapse clearfix">
				<ul className="inner-nav pull-right">
					{data.navMenuItems.nodes.map((navMenuItem) => {
						return <li className="has-submenu">	
							{(!navMenuItem.hubPage ? (
								<a href="#">{navMenuItem.name}</a>
							) : (
								<Link to={`/${navMenuItem.hubPage.slug}`}>{navMenuItem.name}</Link>
							))}
						</li>
					})}
				
					{/*<li className="has-submenu">
						<a href="#">Telephone Systems</a>
						<Link to={`/${data.contentfulMenuArticleA.component}`}>{data.contentfulMenuArticleA.articleTitle}</Link>
						<ul className="submenu">
							{data.articles.nodes.map((edge) => {
								return  (
								<li key={edge.id} className="has-submenu">    
									<Link to={`/${edge.slug}`}>{edge.title}</Link>
								</li>
								)    
							})} 
						</ul>
					</li>*/}
		
				</ul>
			</nav>
		
		</div>
	</header>
  )  
}

export default Navbar