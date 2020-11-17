import React from 'react'

const Post = ({article}) => {
    console.log(article)
    const { title, featuredImage, description } = article.fields
    return (
        <div className='post'>
           <h2 className='title'>{title}</h2>
           {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={title} />}
           <section>{description}</section> 
        </div>
    )
}

export default Post
