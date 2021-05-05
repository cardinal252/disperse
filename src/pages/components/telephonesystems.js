import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import MenuArticleA from '../articles/telephonesystemsarticles'
const TelephoneSystems = () => {

  return (
        <>        
     	<div class="container">

<div class="row">
    <MenuArticleA />
    {/* <div class="col-sm-10 col-sm-offset-1 blog-content">
        <article class="post format-image">
            <div class="post-preview">
                <a href="#"><img src="assets/images/blog/1.jpg" alt="" /></a>
            </div>
            <div class="post-content">
                <h2 class="post-title"><a href="#">Super Awesome Site Showcase</a></h2>
                <ul class="post-meta">
                    <li>October 24, 2015</li>
                    <li>By <a href="#">Benson</a></li>
                    <li><a href="#">Brand</a>, <a href="#">Design</a></li>
                    <li><a href="#">3 Comments</a></li>
                </ul>
                <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                <a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a>
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
                <h2 class="post-title"><a href="#">The Handkerchief</a></h2>
                <ul class="post-meta">
                    <li>October 24, 2015</li>
                    <li>By <a href="#">Benson</a></li>
                    <li><a href="#">Brand</a>, <a href="#">Design</a></li>
                    <li><a href="#">3 Comments</a></li>
                </ul>
                <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                <a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a>
            </div>
        </article>
        <article class="post format-quote">
            <div class="post-content">
                <a href="#">
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <footer>Somebody</footer>
                    </blockquote>
                </a>
            </div>
        </article>
        <article class="post format-video">
            <div class="post-preview">
                <iframe src="https://player.vimeo.com/video/144698619?byline=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
            <div class="post-content">
                <h2 class="post-title"><a href="#">Sportina Print Campaign</a></h2>
                <ul class="post-meta">
                    <li>October 24, 2015</li>
                    <li>By <a href="#">Benson</a></li>
                    <li><a href="#">Brand</a>, <a href="#">Design</a></li>
                    <li><a href="#">3 Comments</a></li>
                </ul>
                <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                <a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a>
            </div>
        </article>
        <article class="post format-audio">
            <div class="post-preview">
                <iframe width="100%" height="166" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154936822&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            </div>
            <div class="post-content">
                <h2 class="post-title"><a href="#">The Good Sound</a></h2>
                <ul class="post-meta">
                    <li>October 24, 2015</li>
                    <li>By <a href="#">Benson</a></li>
                    <li><a href="#">Brand</a>, <a href="#">Design</a></li>
                    <li><a href="#">3 Comments</a></li>
                </ul>
                <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor justo. In ac felis quis tortor malesuada pretium.</p>
                <a href="#" class="btn btn-lg btn-link btn-base">Read more ›</a>
            </div>
        </article>
        <nav>
            <ul class="pagination">
                <li><a href="#" aria-label="Previous"><i class="fa fa-angle-left"></i></a></li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#" aria-label="Next"><i class="fa fa-angle-right"></i></a></li>
            </ul>
        </nav>
    </div> */}
</div>

</div>
        </>    
    )  
}

export default TelephoneSystems     