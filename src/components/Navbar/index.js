import React from 'react'
import Logo from '../../images/logo-white.png'
import Logo1 from '../../images/logo-white2.png'
import '../../components/template.css'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Navbar = () => {
    const data = useStaticQuery(graphql`
	query {
		contentfulMenuArticleA {
			articleTitle
			component
		  }
		contentfulMenuArticleE {
			articleTitle
			component
		  }
		contentfulMenuArticleD {
			articleTitle
			component
		  } 
		contentfulMenuArticleF {
			articleTitle
			component
		  } 
		contentfulMenuArticleB {
			articleTitle
			component
		  } 
		contentfulMenuArticleC {
			articleTitle
			component
		  }     
		allContentfulMenuArticleA {
			edges {
			  node {
				articleTitle  
				title  
				slug
			  }
			}
		  }
		  allContentfulMenuArticleB {
			edges {
			  node {
				title
				slug
			  }
			}
		  }  
		  allContentfulMenuArticleC {
			edges {
			  node {
				title
				slug
			  }
			}
		  } 
		  allContentfulMenuArticleD {
			edges {
			  node {
				title
				slug
			  }
			}
		  }  
		  allContentfulMenuArticleE {
			edges {
			  node {
				title
				slug
			  }
			}
		  } 
		  allContentfulMenuArticleF {
			edges {
			  node {
				title
				slug
			  }
			}
		  }     
	}
`)

  return (
      <>

	<header className="header header-fixed header-transparent">
		<div className="container">
			
			<div className="inner-header">
				<a className="inner-brand" href="/">
					<img className="brand-light" src={Logo1} alt="" />
					<img className="brand-dark" src={Logo} alt="" />
				</a>
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
		
				
					<li className="has-submenu">
						<Link to={`/${data.contentfulMenuArticleA.component}`}>{data.contentfulMenuArticleA.articleTitle}</Link>
						<ul className="submenu">
                        {data.allContentfulMenuArticleA.edges.map((edge) => {
                            return  (
                            <li className="has-submenu">    
								<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
								<ul className="submenu">
									<li><a href="about-1.html">SubPage 1</a></li>
									<li><a href="about-2.html">SubPage 2</a></li>
									<li><a href="about-3.html">Subpage 3</a></li>
								</ul>	
                            </li>
                            )    
                        })} 
                    </ul>
					</li>
					
					<li className="has-submenu">
					<Link to={`/${data.contentfulMenuArticleB.component}`}>{data.contentfulMenuArticleB.articleTitle}</Link>
						<ul className="submenu">
						{data.allContentfulMenuArticleB.edges.map((edge) => {
                            return  (
                            <li className="has-submenu">    
								<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
								<ul className="submenu">
									<li><a href="about-1.html">SubPage 1</a></li>
									<li><a href="about-2.html">SubPage 2</a></li>
									<li><a href="about-3.html">Subpage 3</a></li>
								</ul>	
                            </li>
                            )    
                        })} 
						</ul>
					</li>

                    <li className="has-submenu">
						<Link to={`/${data.contentfulMenuArticleC.component}`}>{data.contentfulMenuArticleC.articleTitle}</Link>
						<ul className="submenu">
							{data.allContentfulMenuArticleC.edges.map((edge) => {
								return  (
								<li className="has-submenu">    
									<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
									<ul className="submenu">
										<li><a href="about-1.html">SubPage 1</a></li>
										<li><a href="about-2.html">SubPage 2</a></li>
										<li><a href="about-3.html">Subpage 3</a></li>
									</ul>	
								</li>
								)    
							})} 
						</ul>
					</li>

                    <li className="has-submenu">
						<Link to={`/${data.contentfulMenuArticleD.component}`}>{data.contentfulMenuArticleD.articleTitle}</Link>
						<ul className="submenu">
						{data.allContentfulMenuArticleD.edges.map((edge) => {
								return  (
								<li className="has-submenu">    
									<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
									<ul className="submenu">
										<li><a href="about-1.html">SubPage 1</a></li>
										<li><a href="about-2.html">SubPage 2</a></li>
										<li><a href="about-3.html">Subpage 3</a></li>
									</ul>	
								</li>
								)    
							})} 
						</ul>
					</li>

                    <li className="has-submenu">
						<Link to={`/${data.contentfulMenuArticleE.component}`}>{data.contentfulMenuArticleE.articleTitle}</Link>
						<ul className="submenu">
						{data.allContentfulMenuArticleE.edges.map((edge) => {
								return  (
								<li className="has-submenu">    
									<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
									<ul className="submenu">
										<li><a href="about-1.html">SubPage 1</a></li>
										<li><a href="about-2.html">SubPage 2</a></li>
										<li><a href="about-3.html">Subpage 3</a></li>
									</ul>	
								</li>
								)    
							})} 
						</ul>
					</li>

                    <li className="has-submenu">
						<Link to={`/${data.contentfulMenuArticleF.component}`}>{data.contentfulMenuArticleF.articleTitle}</Link>
						<ul className="submenu">
						{data.allContentfulMenuArticleF.edges.map((edge) => {
							return  (
							<li className="has-submenu">    
								<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
								<ul className="submenu">
									<li><a href="about-1.html">SubPage 1</a></li>
									<li><a href="about-2.html">SubPage 2</a></li>
									<li><a href="about-3.html">Subpage 3</a></li>
								</ul>	
							</li>
							)    
						})} 
						</ul>
					</li>
					
		
					
					<li className="has-submenu">
						<a href="/contact">CONTACT</a>
						<ul className="submenu submenu-mega">
							<li>
								<span className="submenu-title">Element 1</span>
								<ul>
									<li><a href="components-accordions.html"><i className="fa fa-list-ul"></i> Element 1: 1</a></li>
									<li><a href="components-alerts.html"><i className="fa fa-exclamation-circle"></i> Element 1: 2</a></li>
									<li><a href="components-buttons.html"><i className="fa fa-link fa-sm"></i> Element 1: 3</a></li>
									<li><a href="components-carousel.html"><i className="fa fa-exchange"></i> Element 1: 4</a></li>
								</ul>
							</li>
		
							<li>
								<span className="submenu-title">Element 2</span>
								<ul>
									<li><a href="components-grid.html"><i className="fa fa-th fa-sm"></i> Element 2: 1</a></li>
									<li><a href="components-iconboxes.html"><i className="fa fa-bullseye"></i> Element 2: 2</a></li>
									<li><a href="components-icons-font-awesome.html"><i className="fa fa-heart fa-sm"></i> Element 2: 3</a></li>
									<li><a href="components-icons-simple-line.html"><i className="fa fa-heart-o fa-sm"></i> Element 2: 4</a></li>
								</ul>
							</li>
		
							<li>
								<span className="submenu-title">Element 3</span>
								<ul>
									<li><a href="components-pagination.html"><i className="fa fa-arrow-circle-right"></i> Element 3: 1</a></li>
									<li><a href="components-pie-chart.html"><i className="fa fa-pie-chart"></i> Element 3: 2</a></li>
									<li><a href="components-tooltips.html"><i className="fa fa-lightbulb-o"></i> Element 3: 3</a></li>
									<li><a href="components-pricing-tables.html"><i className="fa fa-dollar"></i> Element 3: 4</a></li>
								</ul>
							</li>
		
							<li>
								<span className="submenu-title">Element 4</span>
								<ul>
									<li><a href="components-tables.html"><i className="fa fa-table"></i> Element 4: 1</a></li>
									<li><a href="components-tabs.html"><i className="fa fa-indent"></i> Element 4: 2</a></li>
									<li><a href="components-team.html"><i className="fa fa-group"></i> Element 4: 3</a></li>
									<li><a href="components-typography.html"><i className="fa fa-font"></i> Element 4: 4</a></li>
								</ul>
							</li>
						</ul>
					</li>
		
				</ul>
			</nav>
		
		</div>
	</header>
      </>
  )  
}

export default Navbar