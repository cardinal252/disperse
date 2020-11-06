import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import SC from "../../images/services/sitecore.png"
import MA from "../../images/services/azure.png"
import Ku from "../../images/services/kubernetes.png"
import De from "../../images/services/devops.png"
import Um from "../../images/services/umbraco.png"
import Net from "../../images/services/dotnet.png"
import Testimonials from '../../components/Testimonials'

const Services = () => {
  return (
        <>
        <div class='container mb40 pt30'>
           <div class='row'>
               <div class="col-lg-4 mb40">
                    <div class="media">
                        <div class="d-flex mr-3">
                            <img src={SC} alt="Sitecote" />
                        </div>
                        <div class="media-body">
                            <h4 class="mt-0 mb10 text-uppercase">Sitecore</h4>
                            Sitecore is a customer experience management company that provides web content management and multichannel marketing automation software.
                        </div>
                    </div>
                </div>
               <div class="col-lg-4 mb40">
                    <div class="media">
                        <div class="d-flex mr-3">
                            <img src={MA} alt="Microsoft Azure" />
                        </div>
                        <div class="media-body">
                            <h4 class="mt-0 mb10 text-uppercase">Microsoft Azure</h4>
                            Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb40">
                    <div class="media">
                        <div class="d-flex mr-3">
                            <img src={Ku} alt="Kubernetes" />
                        </div>
                        <div class="media-body">
                            <h4 class="mt-0 mb10 text-uppercase">Kubernetes</h4>
                            Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation.
                        </div>
                    </div>
                </div>
           </div>
            <div class='row'>
               <div class="col-lg-4 mb40">
                    <div class="media">
                        <div class="d-flex mr-3">
                            <img src={De} alt="Devops" />
                        </div>
                        <div class="media-body">
                            <h4 class="mt-0 mb10 text-uppercase">Devops</h4>
                            DevOps is a set of practices that combines software development and information-technology operations which aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
                        </div>
                    </div>
                </div>
               <div class="col-lg-4 mb40">
                    <div class="media">
                        <div class="d-flex mr-3">
                            <img src={Um} alt="Umbraco" />
                        </div>
                        <div class="media-body">
                            <h4 class="mt-0 mb10 text-uppercase">Umbraco</h4>
                            Umbraco is an open-source content management system platform for publishing content on the World Wide Web and intranets. It is written in C# and deployed on Microsoft based infrastructure.
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb40">
                    <div class="media">
                        <div class="d-flex mr-3">
                            <img src={Net} alt="Dot Net" />
                        </div>
                        <div class="media-body">
                            <h4 class="mt-0 mb10 text-uppercase">.Net</h4>
                            .NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library named as Framework Class Library and provides language interoperability across several programming languages
                        </div>
                    </div>
                </div>
           </div>
       </div>
            <div class="bg-primary pt0 pb10">
            <div class="container mb120">
                <Testimonials />
            </div>
        </div>
        </>    
    )  
}

export default Services