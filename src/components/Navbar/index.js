import React from 'react'
import Logo from '../../images/logo-white.png'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Navbar = () => {
	const data = useStaticQuery(graphql`
	query {
		logodark:  contentfulIcons(title: {eq: "Logo Light"}) {
			title
			icon {
			  gatsbyImageData(width: 200)
			}
		  }
		telephonetitle: contentfulMain(section: {name: {eq: "Telephone Systems"}}) {
			title
			slug
		  }
		linestitle: contentfulMain(section: {name: {eq: "Lines"}}) {
			title
			slug
		  } 
		mobiletitle: contentfulMain(section: {name: {eq: "Mobile"}}) {
			title
			slug
		  }  
		connectivitytitle: contentfulMain(section: {name: {eq: "Connectivity"}}) {
			title
			slug
		  }  
		businessservicestitle: contentfulMain(section: {name: {eq: "Business Services"}}) {
			title
			slug
		  } 
		computerservicestitle: contentfulMain(section: {name: {eq: "Computer Services"}}) {
			title
			slug
		  }      
		telephone: allContentfulArticlePage(filter: {section: {key: {eq: "telephone-systems"}}}) {
			edges {
				node {
					id  
					title
					slug
					articleTitle
				}
			}
		}
		lines: allContentfulArticlePage(filter: {section: {key: {eq: "lines"}}}) {
			edges {
				node {
					id  
					title
					slug
				}
			}
		}  
		mobile: allContentfulArticlePage(filter: {section: {key: {eq: "mobile"}}}) {
			edges {
				node {
					id  
					title
					slug
				}
			}
		} 
		connectivity: allContentfulArticlePage(filter: {section: {key: {eq: "connectivity"}}}) {
			edges {
				node {
					id  
					title
					slug
				}
			}
		}  
		businessservices: allContentfulArticlePage(filter: {section: {key: {eq: "business-services"}}}) {
			edges {
				node {
					id  
					title
					slug
				}
			}
		} 
		computerservices: allContentfulArticlePage(filter: {section: {key: {eq: "computer-services"}}}) {
			edges {
				node {
					id  
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
						<Link className="inner-brand" to="/">
							<GatsbyImage
								className="brand-light"
								image={getImage(data.logodark.icon)}
								alt={data.logodark.title}
							/>
								<GatsbyImage
								className="brand-dark"
								image={getImage(data.logodark.icon)}
								alt={data.logodark.title}
							/>
						
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


							<li className="has-submenu">
								<Link to={`/${data.telephonetitle.slug}`}>{data.telephonetitle.title}</Link>
								<ul className="submenu">
									{data.telephone.edges.map((edge) => {
										return (
											<li key={edge.node.id} className="has-submenu">
												<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
												{/* <ul className="submenu">
													<li><Link to="about-1.html">SubPage 1</Link></li>
													<li><Link to="about-2.html">SubPage 2</Link></li>
													<li><Link to="about-3.html">Subpage 3</Link></li>
												</ul> */}
											</li>
										)
									})}
								</ul>
							</li>

							<li className="has-submenu">
								<Link to={`/${data.linestitle.slug}`}>{data.linestitle.title}</Link>
								<ul className="submenu">
									{data.lines.edges.map((edge) => {
										return (
											<li key={edge.node.id} className="has-submenu">
												<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
												{/*<ul className="submenu">
													<li><Link to="about-1.html">SubPage 1</Link></li>
													<li><Link to="about-2.html">SubPage 2</Link></li>
													<li><Link to="about-3.html">Subpage 3</Link></li>
												</ul>*/}
											</li>
										)
									})}
								</ul>
							</li>

							<li className="has-submenu">
								<Link to={`/${data.mobiletitle.slug}`}>{data.mobiletitle.title}</Link>
								<ul className="submenu">
									{data.mobile.edges.map((edge) => {
										return (
											<li key={edge.node.id} className="has-submenu">
												<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
												{/*<ul className="submenu">
													<li><Link to="about-1.html">SubPage 1</Link></li>
													<li><Link to="about-2.html">SubPage 2</Link></li>
													<li><Link to="about-3.html">Subpage 3</Link></li>
												</ul>*/}
											</li>
										)
									})}
								</ul>
							</li>

							<li className="has-submenu">
								<Link to={`/${data.connectivitytitle.slug}`}>{data.connectivitytitle.title}</Link>
								<ul className="submenu">
									{data.connectivity.edges.map((edge) => {
										return (
											<li key={edge.node.id} className="has-submenu">
												<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
												{/*<ul className="submenu">
													<li><Link to="about-1.html">SubPage 1</Link></li>
													<li><Link to="about-2.html">SubPage 2</Link></li>
													<li><Link to="about-3.html">Subpage 3</Link></li>
												</ul>*/}
											</li>
										)
									})}
								</ul>
							</li>

							<li className="has-submenu">
								<Link to={`/${data.businessservicestitle.slug}`}>{data.businessservicestitle.title}</Link>
								<ul className="submenu">
									{data.businessservices.edges.map((edge) => {
										return (
											<li key={edge.node.id} className="has-submenu">
												<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
												{/*<ul className="submenu">
													<li><Link to="about-1.html">SubPage 1</Link></li>
													<li><Link to="about-2.html">SubPage 2</Link></li>
													<li><Link to="about-3.html">Subpage 3</Link></li>
												</ul>*/}
											</li>
										)
									})}
								</ul>
							</li>

							<li className="has-submenu">
								<Link to={`/${data.computerservicestitle.slug}`}>{data.computerservicestitle.title}</Link>
								<ul className="submenu">
									{data.computerservices.edges.map((edge) => {
										return (
											<li key={edge.node.id} className="has-submenu">
												<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
												{/*<ul className="submenu">
													<li><Link to="about-1.html">SubPage 1</Link></li>
													<li><Link to="about-2.html">SubPage 2</Link></li>
													<li><Link to="about-3.html">Subpage 3</Link></li>
												</ul>*/}
											</li>
										)
									})}
								</ul>
							</li>



							<li className="has-submenu">
								<Link to="/contact">CONTACT</Link>
								{/*<ul className="submenu submenu-mega">
									<li>
										<span className="submenu-title">Element 1</span>
										<ul>
											<li><Link to="components-accordions.html"><i className="fa fa-list-ul"></i> Element 1: 1</Link></li>
											<li><Link to="components-alerts.html"><i className="fa fa-exclamation-circle"></i> Element 1: 2</Link></li>
											<li><Link to="components-buttons.html"><i className="fa fa-link fa-sm"></i> Element 1: 3</Link></li>
											<li><Link to="components-carousel.html"><i className="fa fa-exchange"></i> Element 1: 4</Link></li>
										</ul>
									</li>

									<li>
										<span className="submenu-title">Element 2</span>
										<ul>
											<li><Link to="components-grid.html"><i className="fa fa-th fa-sm"></i> Element 2: 1</Link></li>
											<li><Link to="components-iconboxes.html"><i className="fa fa-bullseye"></i> Element 2: 2</Link></li>
											<li><Link to="components-icons-font-awesome.html"><i className="fa fa-heart fa-sm"></i> Element 2: 3</Link></li>
											<li><Link to="components-icons-simple-line.html"><i className="fa fa-heart-o fa-sm"></i> Element 2: 4</Link></li>
										</ul>
									</li>

									<li>
										<span className="submenu-title">Element 3</span>
										<ul>
											<li><Link to="components-pagination.html"><i className="fa fa-arrow-circle-right"></i> Element 3: 1</Link></li>
											<li><Link to="components-pie-chart.html"><i className="fa fa-pie-chart"></i> Element 3: 2</Link></li>
											<li><Link to="components-tooltips.html"><i className="fa fa-lightbulb-o"></i> Element 3: 3</Link></li>
											<li><Link to="components-pricing-tables.html"><i className="fa fa-dollar"></i> Element 3: 4</Link></li>
										</ul>
									</li>

									<li>
										<span className="submenu-title">Element 4</span>
										<ul>
											<li><Link to="components-tables.html"><i className="fa fa-table"></i> Element 4: 1</Link></li>
											<li><Link to="components-tabs.html"><i className="fa fa-indent"></i> Element 4: 2</Link></li>
											<li><Link to="components-team.html"><i className="fa fa-group"></i> Element 4: 3</Link></li>
											<li><Link to="components-typography.html"><i className="fa fa-font"></i> Element 4: 4</Link></li>
										</ul>
									</li>
								</ul>*/}
							</li>

						</ul>
					</nav>

				</div>
			</header>
		</>
	)
}

export default Navbar