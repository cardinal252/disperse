import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import MenuArticleB from '../articles/linesandcallsarticles'
const LinesandCalls = () => {

  return (
        <>        
     	<div class="container">

<div class="row">
    <MenuArticleB />
    {/* <div class="col-sm-10 col-sm-offset-1 blog-content">
        <article class="post format-image">
            <div class="post-preview">
                <Link to="#"><img src="assets/images/blog/1.jpg" alt="" /></Link>
            </div>
            <div class="post-content">
                <h2 class="post-title"><Link to="#">Super Awesome Site Showcase</Link></h2>
                <ul class="post-meta">
                    <li>October 24, 2015</li>
                    <li>By <Link to="#">Benson</Link></li>
                    <li><Link to="#">Brand</Link>, <Link to="#">Design</Link></li>
                    <li><Link to="#">3 Comments</Link></li>
                </ul>
                <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                <Link to="#" class="btn btn-lg btn-link btn-base">Read more ›</Link>
            </div>
        </article>
        <article class="post format-slider">
            <div class="post-preview">
                <div class="image-slider" data-carousel-options='{"transitionStyle": "fade"}'>
                    <img src="assets/images/blog/4.jpg" alt="" />
                    <img src="assets/images/blog/3.jpg" alt="" />
                    <img src="assets/images/blog/2.jpg" alt="" />
                </div>
            </div>
            <div class="post-content">
                <h2 class="post-title"><Link to="#">The Handkerchief</Link></h2>
                <ul class="post-meta">
                    <li>October 24, 2015</li>
                    <li>By <Link to="#">Benson</Link></li>
                    <li><Link to="#">Brand</Link>, <Link to="#">Design</Link></li>
                    <li><Link to="#">3 Comments</Link></li>
                </ul>
                <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                <Link to="#" class="btn btn-lg btn-link btn-base">Read more ›</Link>
            </div>
        </article>
        <article class="post format-quote">
            <div class="post-content">
                <Link to="#">
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <footer>Somebody</footer>
                    </blockquote>
                </Link>
            </div>
        </article>
        <article class="post format-video">
            <div class="post-preview">
                <iframe src="https://player.vimeo.com/video/144698619?byline=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
            <div class="post-content">
                <h2 class="post-title"><Link to="#">Sportina Print Campaign</Link></h2>
                <ul class="post-meta">
                    <li>October 24, 2015</li>
                    <li>By <Link to="#">Benson</Link></li>
                    <li><Link to="#">Brand</Link>, <Link to="#">Design</Link></li>
                    <li><Link to="#">3 Comments</Link></li>
                </ul>
                <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                <Link to="#" class="btn btn-lg btn-link btn-base">Read more ›</Link>
            </div>
        </article>
        <article class="post format-audio">
            <div class="post-preview">
                <iframe width="100%" height="166" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154936822&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            </div>
            <div class="post-content">
                <h2 class="post-title"><Link to="#">The Good Sound</Link></h2>
                <ul class="post-meta">
                    <li>October 24, 2015</li>
                    <li>By <Link to="#">Benson</Link></li>
                    <li><Link to="#">Brand</Link>, <Link to="#">Design</Link></li>
                    <li><Link to="#">3 Comments</Link></li>
                </ul>
                <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                <Link to="#" class="btn btn-lg btn-link btn-base">Read more ›</Link>
            </div>
        </article>
        <nav>
            <ul class="pagination">
                <li><Link to="#" aria-label="Previous"><i class="fa fa-angle-left"></i></Link></li>
                <li class="active"><Link to="#">1</Link></li>
                <li><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>
                <li><Link to="#">4</Link></li>
                <li><Link to="#">5</Link></li>
                <li><Link to="#" aria-label="Next"><i class="fa fa-angle-right"></i></Link></li>
            </ul>
        </nav>
    </div> */}
</div>

</div>
        </>    
    )  
}

export default LinesandCalls    