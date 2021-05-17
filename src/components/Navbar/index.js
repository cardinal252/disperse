import React from 'react'
import Logo from '../../images/logo-white.png'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Navbar = () => {
	const data = useStaticQuery(graphql`
		query {
			contentfulAsset(title: {eq: "Logo white"}) {
				resize {
				src
				}
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
			telephone: allContentfulArticlePage(filter: {section: {key: {eq: "telephone-systems"}}}) {
				edges {
					node {
						id  
						title
						slug
					}
				}
			}
			allContentfulMenuArticleB {
				edges {
					node {
						id  
						title
						slug
					}
				}
			}  
			allContentfulMenuArticleC {
				edges {
					node {
						id  
						title
						slug
					}
				}
			} 
			allContentfulMenuArticleD {
				edges {
					node {
						id  
						title
						slug
					}
				}
			}  
			allContentfulMenuArticleE {
				edges {
					node {
						id  
						title
						slug
					}
				}
			} 
			allContentfulMenuArticleF {
				edges {
					node {
						id  
						title
						slug
					}
				}
			}     
		}
	`);

	return (
		<header className="header header-fixed header-transparent">
			<div className="container">

				<div className="inner-header">
					<Link className="inner-brand" to="/">
						<img className="brand-light" src={data.contentfulAsset.resize.src} alt="" />
						<img className="brand-dark" src={Logo} alt="" />
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
							<Link to={`/${data.contentfulMenuArticleB.slug}`}>{data.contentfulMenuArticleB.articleTitle}</Link>
							<ul className="submenu">
								{data.telephone.edges.map((edge) => {
									return (
										<li key={edge.node.id} className="has-submenu">
											<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
											<ul className="submenu">
												<li><Link to="about-1.html">SubPage 1</Link></li>
												<li><Link to="about-2.html">SubPage 2</Link></li>
												<li><Link to="about-3.html">Subpage 3</Link></li>
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
									return (
										<li key={edge.node.id} className="has-submenu">
											<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
											<ul className="submenu">
												<li><Link to="about-1.html">SubPage 1</Link></li>
												<li><Link to="about-2.html">SubPage 2</Link></li>
												<li><Link to="about-3.html">Subpage 3</Link></li>
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
									return (
										<li key={edge.node.id} className="has-submenu">
											<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
											<ul className="submenu">
												<li><Link to="about-1.html">SubPage 1</Link></li>
												<li><Link to="about-2.html">SubPage 2</Link></li>
												<li><Link to="about-3.html">Subpage 3</Link></li>
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
									return (
										<li key={edge.node.id} className="has-submenu">
											<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
											<ul className="submenu">
												<li><Link to="about-1.html">SubPage 1</Link></li>
												<li><Link to="about-2.html">SubPage 2</Link></li>
												<li><Link to="about-3.html">Subpage 3</Link></li>
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
									return (
										<li key={edge.node.id} className="has-submenu">
											<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
											<ul className="submenu">
												<li><Link to="about-1.html">SubPage 1</Link></li>
												<li><Link to="about-2.html">SubPage 2</Link></li>
												<li><Link to="about-3.html">Subpage 3</Link></li>
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
									return (
										<li key={edge.node.id} className="has-submenu">
											<Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
											<ul className="submenu">
												<li><Link to="about-1.html">SubPage 1</Link></li>
												<li><Link to="about-2.html">SubPage 2</Link></li>
												<li><Link to="about-3.html">Subpage 3</Link></li>
											</ul>
										</li>
									)
								})}
							</ul>
						</li>



						<li className="has-submenu">
							<Link to="/contact">CONTACT</Link>
							<ul className="submenu submenu-mega">
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
							</ul>
						</li>

					</ul>
				</nav>

			</div>
		</header>
	)
}

export default Navbar